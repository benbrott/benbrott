const classNames = (classes: Array<string | false>) => {
  return classes.filter(c => !!c).join(' ');
};

export default classNames;
