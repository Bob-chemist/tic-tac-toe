import React, { useState } from 'react';
import Square from './Components/Square/Square';
import classes from './App.module.sass';

const App = () => {
  const [turn, setTurn] = useState(true);
  const [box, setBox] = useState(Array(9).fill(''));
  const [winComb, setWinComb] = useState([]);  

  const onClickHandler = id => {
    const value = turn ? 'X' : 'O';
    if (box[id] || winComb.length !== 0) return;
    const newBox = [...box.slice(0, id), value, ...box.slice(id + 1)];

    setTurn(!turn);
    setBox(newBox);

    isVictory(newBox, id, value);
  };

  const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isVictory = (box, id, value) => {
    const toCheck = victory.filter(arr => arr.includes(id));

    for (let i in toCheck) {
      const k = toCheck[i];

      if (box[k[0]] === value && box[k[1]] === value && box[k[2]] === value) {
        setWinComb(k);
      }
    }
  };

  const restart = () => {
    setTurn(true);
    setBox(Array(9).fill(''));
    setWinComb([]);
  };
  
  const field = [];  

  for (let i = 0; i < 9; i++) {
    let color = 'black';
    if (winComb.includes(i)) {
      color = 'red';
    }
    field.push(
      <Square
        key={i}
        id={i}
        onClickHandler={(id) => onClickHandler(id)}
        value={box[i]}
        color={color}
      />
    );
  }

  return (
    <div className={classes.App}>
      {winComb.length !== 0 ? <p>Victory!</p> : null}
      <div className={classes.AppField}>{field}</div>
      <button className={classes.Restart} onClick={() => restart()}>
        Restart
      </button>
    </div>
  );  
}

export default App;