import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-family: monospace;
  font-size: 40px;
  color: khaki;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          Tic Tac Toe
        </Header>
      </div>
    );
  }
}

export default App;
