export const KEY_CODES = {
  ENTER: 'Enter',
  SPACE: 'Space',
  TAB: 'Tab',
  BACKSPACE: 'Backspace',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

export const killEvent = event => {
  event.preventDefault();
  event.stopPropagation();
};
