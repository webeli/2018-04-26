/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){

  const messages = {
    plr1: 'Player 1 turn',
    plr2: 'Player 2 turn',
    plr1won: 'Player 1 won',
    plr2won: 'Player 2 won',
    draw: 'Its a draw, please reset'
  }

  return (
    <div>{messages[props.state]}</div>
  );
}
