export default function (classes: Array<string | false>) {
  return classes.filter(c => !!c).join(' ');
}
