const checkKeyCode = (event, keyCode) => event.keyCode === keyCode;

const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const getLetter = event => {
  const keyCode = event.which || event.keyCode;
  if (65 <= keyCode && keyCode <= 90) {
    const index = keyCode - 65;
    return ALPHABET[index];
  }
};

export default {
  BACKSPACE: event => checkKeyCode(event, 8),
  TAB: event => checkKeyCode(event, 9),
  ENTER: event => checkKeyCode(event, 13),
  SPACE: event => checkKeyCode(event, 32),
  LEFT: event => checkKeyCode(event, 37),
  UP: event => checkKeyCode(event, 38),
  RIGHT: event => checkKeyCode(event, 39),
  DOWN: event => checkKeyCode(event, 40),
  LETTER: event => getLetter(event)
};
