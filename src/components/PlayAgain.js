import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  
`;

const PlayAgain = ({ playAgain }) => {
  return (
    <div>
      <Button onClick={() => playAgain()}>
        Zagraj jeszcze raz
      </Button>
    </div>
  );
};

export default PlayAgain;
