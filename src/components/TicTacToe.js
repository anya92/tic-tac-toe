import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PlayAgain from './PlayAgain';
import {
  aiMove,
  isEmpty,
  getWinningCombo,
  isWinner,
  isBoardFull
} from '../helpers';

const GameBoard = styled.div`
  margin-top: 20px;
  width: 350px;
  height: 350px;
  position: relative;
`;

const Cell = styled.div`
  width: calc(100% / 3 - 1.5px);
  height: calc(100% / 3 - 1.5px);
  font-size: 4.3rem;
  float: left;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${props => [0, 1, 3, 4, 6, 7].includes(props.id) 
    ? '1.5px solid black' : 'none'};
  border-bottom: ${props => [0, 1, 2, 3, 4, 5].includes(props.id)
    ? '1.5px solid black' : 'none'};
  &.winning {
    color: orangered;
  }  
`;


const Result = styled.div`
  &:not(:empty) {
    position: absolute;
    background-color: white;
    border: 2px solid black;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    font-size: 3rem;
    text-align: center;
  }
`;

class TicTacToe extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      board: new Array(9).fill(' '),
      playerTurn: props.firstTurn === 'player',
      gameIsPlaying: true,
      gameResult: null
    };
  }

  componentDidMount() {
    let { firstTurn } = this.props;
    if (firstTurn === 'computer') {
    // make first computer's move
      setTimeout(() => {
        let { board } = this.state;
        const { computerMark, playerMark } = this.props;
        let computerMoveIndex = aiMove(board, computerMark, playerMark);
        board.splice(computerMoveIndex, 1, computerMark);
        this.setState({ board, playerTurn: true });
      }, 300);
    }
  }

  playerMove = index => {
    const { playerMark } = this.props;
    let { board, gameIsPlaying, playerTurn } = this.state;

    if (gameIsPlaying && playerTurn && isEmpty(board, index)) {
      board.splice(index, 1, playerMark);
      this.setState({ board });
    
      if (isWinner(board, playerMark)) { // player won
        const winningCombo = getWinningCombo(board);
        winningCombo.map(index => 
          document.getElementById(index).classList.add('winning')
        );
        setTimeout(() => {
          this.setState({ 
            gameIsPlaying: false,
            gameResult: 'Wygrałeś!!!'
          });
        }, 300);
      } else { 
        if (isBoardFull(board)) { // draw
          this.setState({
            gameIsPlaying: false,
            gameResult: 'Remis'
          });
        } else { // computer move
          this.setState({ playerTurn: false });
          setTimeout(() => this.computerMove(), 500);
        }
      }
    }
  }

  computerMove = () => {
    const { playerMark, computerMark } = this.props;
    let { board, gameIsPlaying } = this.state;

    if (gameIsPlaying) {
      let computerMoveIndex = aiMove(board, computerMark, playerMark);
      board.splice(computerMoveIndex, 1, computerMark);
      this.setState({ board });
    
      if (isWinner(board, computerMark)) { // computer won
        const winningCombo = getWinningCombo(board);
        winningCombo.map(index => 
          document.getElementById(index).classList.add('winning')
        );
        setTimeout(() => {
          this.setState({ 
            gameIsPlaying: false,
            gameResult: 'Przegrałeś...'
          });
        }, 300);
      } else {
        if (isBoardFull(board)) { // draw
          this.setState({
            gameIsPlaying: false,
            gameResult: 'Remis'
          });
        } else { // player move
          this.setState({ playerTurn: true });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <GameBoard>
          {
            this.state.board.map((cell, index) => {
              return (
                <Cell 
                  key={index} 
                  id={index}
                  onClick={() => this.playerMove(index)}
                >
                  { cell }
                </Cell>
              )
            })
          }
          <Result>
            { this.state.gameResult }
          { 
            !this.state.gameIsPlaying
            ? <PlayAgain playAgain={this.props.playAgain} />
            : null
          }
          </Result>
        </GameBoard>
      </div>
    );
  }
}

TicTacToe.propTypes = {
  gameIsPlaying: PropTypes.bool.isRequired,
  firstTurn: PropTypes.string.isRequired,
  playerMark: PropTypes.string.isRequired,
  computerMark: PropTypes.string.isRequired,
  playAgain: PropTypes.func.isRequired
};

export default TicTacToe;
