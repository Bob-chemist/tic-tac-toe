import React from 'react';
import classes from './Square.module.sass';

const Square = props => {
  const { id, onClickHandler, value, color } = props;
  const style = { color };

  return (
    <div
      id={id}
      style={style}
      className={classes.Square}
      onClick={() => onClickHandler(id)}
    >
      {value}
    </div>
  );
};

export default Square;
