import React, { Component } from 'react';
import Square from './Components/Square/Square';
import classes from './App.module.sass';

export default class App extends Component {
  state = {
    turn: true,
    box: Array(9).fill(''),
  };

  onClickHandler = id => {
    const { turn, box } = this.state;
    const value = turn ? 'X' : 'O';
    if (box[id]) return;
    const newBox = [...box.slice(0, id), value, ...box.slice(id + 1)];

    this.setState({
      turn: !turn,
      box: newBox,
    });
  };

  render() {
    const field = [];
    for (let i = 0; i < 9; i++) {
      field.push(
        <Square
          key={i}
          id={i}
          onClickHandler={this.onClickHandler}
          value={this.state.box[i]}
        />
      );
    }
    return <div className={classes.App}>{field}</div>;
  }
}
