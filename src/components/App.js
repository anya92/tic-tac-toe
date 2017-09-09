import React, { Component } from 'react';
import styled from 'styled-components';

import ChooseMark from './ChooseMark';
import WhoFirst from './WhoFirst';

import { randomFirstPlayer } from '../helpers';

const Header = styled.div`
  font-family: monospace;
  font-size: 40px;
  color: khaki;
  text-align: center;
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
      console.log(message);
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

  render() {
    return (
      <div>
        <Header>
          Tic Tac Toe
        </Header>
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
      </div>
    );
  }
}

export default App;
