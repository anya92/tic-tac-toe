import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  
`;

const WhoFirst = ({ playerMark, firstTurn, getFirstTurn, message, removeMessageAndStartGame }) => {
  // render if there is a playerMark but no firstTurn
  // then render message
  return (
    <div>
      {
        playerMark && !firstTurn
        ? (
            <div>
              <Text>Losowanie...</Text>
              { getFirstTurn() }
            </div>
          )
        : message
          ? (
              <div>
                <Text>{ message }</Text>
                { removeMessageAndStartGame() }
                <Text>Powodzenia</Text>
              </div>
            )
          : <div></div>
      }
      
    </div>
  );
};

export default WhoFirst;
