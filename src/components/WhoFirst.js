import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

const WhoFirst = ({ playerMark, firstTurn, getFirstTurn, message, removeMessageAndStartGame }) => {
  // render if there is a playerMark but no firstTurn
  // then render message
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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

WhoFirst.propTypes = {
  playerMark: PropTypes.string,
  firstTurn: PropTypes.string,
  getFirstTurn: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  removeMessageAndStartGame: PropTypes.func.isRequired
};

export default WhoFirst;
