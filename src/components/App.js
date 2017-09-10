import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import ChooseMark from './ChooseMark';
import WhoFirst from './WhoFirst';
import TicTacToe from './TicTacToe';

import { randomFirstPlayer } from '../helpers';


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Patrick+Hand+SC&subset=latin-ext');
  body {
    font-family: 'Patrick Hand SC';
  }
`;

const Header = styled.div`
  font-size: 3rem;
  margin-top: 20px;
  color: orangered;
  text-align: center;
`;

const Game = styled.div`
  overflow: hidden;
  padding-left: 18px;
  padding-right: 18px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      playerMark: null,
      computerMark: null,
      firstTurn: null,
      gameIsPlaying: false,
      message: ''
    };
  }

  chooseMark = (playerMark, computerMark) => {
    this.setState({ playerMark, computerMark });
  }

  getFirstTurn = () => {
    setTimeout(() => {
      let firstTurn = randomFirstPlayer();
      let message = (firstTurn === 'player')
          ? 'Zaczynasz pierwszy'
          : 'Zaczyna komputer';
      this.setState({ firstTurn, message });
    }, 1000);
  }

  removeMessageAndStartGame = () => {
    setTimeout(() => {
      this.setState({
        message: '',
        gameIsPlaying: true
      })
    }, 1000);
  }

  playAgain = () => {
    this.setState({
      gameIsPlaying: false,
      playerMark: null,
      firstTurn: null,
      board: new Array(9).fill(' ')
    });
  }

  render() {
    return (
      <div>
        <Header>
          Kółko i krzyżyk
        </Header>
        <Game>
          <ChooseMark 
            playerMark={this.state.playerMark}
            chooseMark={this.chooseMark}
          />
          <WhoFirst 
            playerMark={this.state.playerMark}
            firstTurn={this.state.firstTurn}
            getFirstTurn={this.getFirstTurn}
            message={this.state.message}
            removeMessageAndStartGame={this.removeMessageAndStartGame}
          />
          {
            this.state.gameIsPlaying
            ? (
                <TicTacToe
                  gameIsPlaying={this.state.gameIsPlaying}
                  firstTurn={this.state.firstTurn}
                  playerMark={this.state.playerMark}
                  computerMark={this.state.computerMark}
                  playAgain={this.playAgain}
                />
              )
            : <div></div>
          }
        </Game>
      </div>
    );
  }
}

export default App;
