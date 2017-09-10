import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: underline;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 4.3rem;
  font-family: 'Patrick Hand SC';
  background-color: transparent;
  margin: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: orangered;
    transform: scale(1.5);
  }
  &:focus {
    outline: none;
  }
`;


const ChooseMark = ({ playerMark, chooseMark }) => {
  // render only if there is no playerMark yet
  if (playerMark) return <div></div>;
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Buttons>
        <Button onClick={() => chooseMark('X', 'O')}>X</Button>
        <Button onClick={() => chooseMark('O', 'X')}>O</Button>
      </Buttons>
      <Text>Wybierz</Text>
    </div>
  );
};

ChooseMark.propTypes = {
  playerMark: PropTypes.string,
  chooseMark: PropTypes.func.isRequired
};

export default ChooseMark;
