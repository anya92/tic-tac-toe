import React, { Component } from 'react';
import styled from 'styled-components';

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
      winner: null
    };
  }

  componentDidMount() {
    let { firstTurn } = this.props;
    console.log('comp?', firstTurn);
    if (firstTurn === 'computer') {
      setTimeout(() => {
        let { board } = this.state;
        const { computerMark, playerMark } = this.props;
        let computerMoveIndex = aiMove(board, computerMark, playerMark);
        console.log('index', computerMoveIndex);
        board.splice(computerMoveIndex, 1, computerMark);
        this.setState({ board, playerTurn: true });
      }, 500);
    }
  }

  render() {
    return (
      <div>
        <GameBoard>
          {
            this.state.board.map((cell, index) => {
              return (
                <Cell key={index} id={index}>
                  { cell }
                </Cell>
              )
            })
          }
        </GameBoard>
      </div>
    );
  }
}

export default TicTacToe;
