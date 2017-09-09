import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid crimson;
  background-color: transparent;
  color: crimson;
  height: 50px;
`;

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`;

const ChooseMark = ({ playerMark, chooseMark }) => {
  if (playerMark) return <div></div>;
  return (
    <div>
      <Text>Wybierz Gracza</Text>
      <Button onClick={() => chooseMark('X', 'O')}>X</Button>
      <Button onClick={() => chooseMark('O', 'X')}>O</Button>
    </div>
  );
};

export default ChooseMark;
