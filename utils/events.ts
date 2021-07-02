import React from 'react';

const checkKeyCode = (event: KeyboardEvent | React.KeyboardEvent, keyCode: number) => event.keyCode === keyCode;

const getLetter = (event: KeyboardEvent) => {
  const keyCode = event.which || event.keyCode;
  if (65 <= keyCode && keyCode <= 90) {
    return String.fromCharCode(keyCode);
  }
};

export default {
  BACKSPACE: (event: KeyboardEvent) => checkKeyCode(event, 8),
  TAB: (event: KeyboardEvent) => checkKeyCode(event, 9),
  ENTER: (event: KeyboardEvent | React.KeyboardEvent) => checkKeyCode(event, 13),
  SPACE: (event: KeyboardEvent) => checkKeyCode(event, 32),
  LEFT: (event: KeyboardEvent) => checkKeyCode(event, 37),
  UP: (event: KeyboardEvent) => checkKeyCode(event, 38),
  RIGHT: (event: KeyboardEvent) => checkKeyCode(event, 39),
  DOWN: (event: KeyboardEvent) => checkKeyCode(event, 40),
  LETTER: (event: KeyboardEvent) => getLetter(event)
};
