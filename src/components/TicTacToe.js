import React, { Component } from 'react';
import styled from 'styled-components';
import PlayAgain from './PlayAgain';

import {
  aiMove,
  isEmpty,
  getWinningCombo,
  isWinner,
  isBoardFull
} from '../helpers';

const GameBoard = styled.div`
  width: 400px;
  max-width: ${window.innerWidth}px;
  height: 400px;
  max-height: ${window.innerWidth}px;
  background-color: lightblue;
`;

const Cell = styled.div`
  width: calc(100% / 3 - 2px);
  height: calc(100% / 3 - 2px);
  float: left;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-right: ${props => [0, 1, 3, 4, 6, 7].includes(props.id) 
    ? '2px solid black' : 'none'};
  border-bottom: ${props => [0, 1, 2, 3, 4, 5].includes(props.id)
    ? '2px solid black' : 'none'};
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
      }, 500);
    }
  }

  playerMove = index => {
    const { playerMark } = this.props;
    let { board, gameIsPlaying, playerTurn } = this.state;

    if (gameIsPlaying && playerTurn && isEmpty(board, index)) {
      board.splice(index, 1, playerMark);
      this.setState({ board });
    
      if (isWinner(board, playerMark)) {
        this.setState({ // player won
          gameIsPlaying: false,
          gameResult: 'Wygrałeś!!!'
        });
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
        this.setState({ 
          gameIsPlaying: false, 
          gameResult: 'Przegrałeś...'
        });
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
          { this.state.gameResult }
          { 
            !this.state.gameIsPlaying
            ? <PlayAgain playAgain={this.props.playAgain} />
            : <h2>Grasz {this.props.playerMark}</h2>
          }
        </GameBoard>
      </div>
    );
  }
}

export default TicTacToe;
