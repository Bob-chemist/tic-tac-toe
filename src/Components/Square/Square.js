import React from 'react';
import classes from './Square.module.sass';

const Square = props => {
  const { id, onClickHandler, value } = props;

  return (
    <div id={id} className={classes.Square} onClick={() => onClickHandler(id)}>
      {value}
    </div>
  );
};

export default Square;
