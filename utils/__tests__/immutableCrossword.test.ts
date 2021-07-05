import { Cell } from 'components/crossword/helpers';
import ImmutableCrossword from 'utils/immutableCrossword';

const SOLUTION = [
  ['A', 'B', 'C'],
  ['D', ' ', 'E'],
  [' ', 'F', ' ']
];

const CORRECT_CROSSWORD_STRING = JSON.stringify([
  ['A', 'B', 'C'],
  ['D', '', 'E'],
  ['', 'F', '']
]);

const FILLED_CROSSWORD_STRING = JSON.stringify([
  ['A', 'B', 'C'],
  ['D', '', 'E'],
  ['', 'G', '']
]);

const EMPTY_CROSSWORD_STRING = JSON.stringify([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]);

const CELL: Cell = { row: 0, col: 0, letter: '', down: '', across: '' };

describe('ImmutableCrossword class', () => {
  test('default constructor', () => {
    const crossword = new ImmutableCrossword(SOLUTION);
    expect(crossword.toString()).toBe(EMPTY_CROSSWORD_STRING);
  });

  test('fromString constructor', () => {
    const crossword = ImmutableCrossword.fromString(CORRECT_CROSSWORD_STRING, SOLUTION);
    expect(crossword.toString()).toBe(CORRECT_CROSSWORD_STRING);
  });

  describe('check', () => {
    test('not filled, not correct', () => {
      const { filled, correct } = ImmutableCrossword.fromString(EMPTY_CROSSWORD_STRING, SOLUTION).check();
      expect(filled).toBe(false);
      expect(correct).toBe(false);
    });

    test('filled, not correct', () => {
      const { filled, correct } = ImmutableCrossword.fromString(FILLED_CROSSWORD_STRING, SOLUTION).check();
      expect(filled).toBe(true);
      expect(correct).toBe(false);
    });

    test('filled, correct', () => {
      const { filled, correct } = ImmutableCrossword.fromString(CORRECT_CROSSWORD_STRING, SOLUTION).check();
      expect(filled).toBe(true);
      expect(correct).toBe(true);
    });
  });

  test('putLetter', () => {
    const crossword = new ImmutableCrossword(SOLUTION);
    crossword.putLetter(CELL, 'A');
    expect(crossword.getLetter(CELL)).toBe('A');
    crossword.putLetter(CELL, 'B');
    expect(crossword.getLetter(CELL)).toBe('B');
  });

  test('deleteLetter', () => {
    const crossword = new ImmutableCrossword(SOLUTION);
    crossword.putLetter(CELL, 'A');
    expect(crossword.getLetter(CELL)).toBe('A');
    crossword.deleteLetter(CELL);
    expect(crossword.getLetter(CELL)).toBe('');
  });

  test('isCellEmpty', () => {
    const crossword = new ImmutableCrossword(SOLUTION);
    expect(crossword.isCellEmpty(CELL)).toBe(true);
    crossword.putLetter(CELL, 'A');
    expect(crossword.isCellEmpty(CELL)).toBe(false);
  });
});
