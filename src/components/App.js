import React, { Component } from 'react';
import styled from 'styled-components';

import ChooseMark from './ChooseMark';

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
      </div>
    );
  }
}

export default App;
