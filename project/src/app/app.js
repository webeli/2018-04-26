import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      game: newGame()
    }
  }

  onMakeMove(index) {
    const newState = makeMove(this.state.game, index);
    this.setState({game: newState})
    console.log(newState);
  }

  onReset() {
    this.setState({ game: newGame() });
  }

  render(){
    console.log(this.state.game)
    return (
      <div className="board">
      {this.state.game.board.map((tile, index) => (
        <Tile key={index} win={this.state.game.line.includes(index)} value={tile} onMakeMove={() => this.onMakeMove(index)}/>
      ))}
      <div>
        <button onClick={() => this.onReset()}>Reset</button>
        <Message state={this.state.game.state}/>
      </div>
      </div>
    );
  }
}
