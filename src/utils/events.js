export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' '
};

export const killEvent = event => {
  event.preventDefault();
  event.stopPropagation();
};
