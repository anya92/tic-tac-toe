import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  border: 2px solid orangered;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  font-family: 'Patrick Hand SC';
  &:focus {
    outline: none;
  } 
`;

const PlayAgain = ({ playAgain }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => playAgain()}>
        Zagraj jeszcze raz
      </Button>
    </div>
  );
};

PlayAgain.propTypes = {
  playAgain: PropTypes.func.isRequired
};

export default PlayAgain;
