import React, { Component } from 'react';
import Square from './Components/Square/Square';
import classes from './App.module.sass';

export default class App extends Component {
  state = {
    turn: true,
    box: Array(9).fill(''),
    winComb: [],
  };

  onClickHandler = id => {
    const { turn, box, winComb } = this.state;

    const value = turn ? 'X' : 'O';
    if (box[id] || winComb.length !== 0) return;
    const newBox = [...box.slice(0, id), value, ...box.slice(id + 1)];

    this.setState({
      turn: !turn,
      box: newBox,
    });

    this.isVictory(newBox, id, value);
  };

  victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  isVictory = (box, id, value) => {
    const toCheck = this.victory.filter(arr => arr.includes(id));

    for (let i in toCheck) {
      const k = toCheck[i];

      if (box[k[0]] === value && box[k[1]] === value && box[k[2]] === value) {
        this.setState({ winComb: k });
      }
    }
  };

  render() {
    const field = [];
    const { box, winComb } = this.state;

    for (let i = 0; i < 9; i++) {
      let color = 'black';
      if (winComb.includes(i)) {
        color = 'red';
      }
      field.push(
        <Square
          key={i}
          id={i}
          onClickHandler={this.onClickHandler}
          value={box[i]}
          color={color}
        />
      );
    }
    return (
      <div className={classes.App}>
        <div className={classes.AppField}>{field}</div>
        {winComb.length !== 0 ? <p>Victory!</p> : null}
      </div>
    );
  }
}
