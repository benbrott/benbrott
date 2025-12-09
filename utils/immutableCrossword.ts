import { Cell } from '@/components/crossword/helpers';

const EMPTY_LETTER = ' ';

export default class ImmutableCrossword {
  solution: string[][];
  letters: string[][];

  constructor(solution: string[][]) {
    this.solution = solution;
    this.letters = [];
    for (let i = 0; i < solution.length; i++) {
      const row = [];
      for (let j = 0; j < solution[0].length; j++) {
        row.push('');
      }
      this.letters.push(row);
    }
  }

  static fromString(serializedLetters: string, solution: string[][]) {
    const letters: string[][] = JSON.parse(serializedLetters);
    const crossword = new ImmutableCrossword(solution);
    crossword.letters = letters;
    return crossword;
  }

  toString() {
    return JSON.stringify(this.letters);
  }

  check() {
    let correct = true;
    const filled = this.solution.every((row, rowIdx) => {
      return row.every((correctLetter, colIdx) => {
        if (correctLetter === EMPTY_LETTER) {
          return true;
        }
        const letter = this.letters[rowIdx][colIdx];
        if (!letter) {
          correct = false;
          return false;
        } else if (letter !== correctLetter) {
          correct = false;
        }
        return true;
      });
    });
    return { correct, filled };
  }

  putLetter(cell: Cell, letter: string) {
    const crossword = new ImmutableCrossword(this.solution);
    crossword.letters = this.letters;
    crossword.letters[cell.row][cell.col] = letter;
    return crossword;
  }

  deleteLetter(cell: Cell) {
    const crossword = new ImmutableCrossword(this.solution);
    crossword.letters = this.letters;
    crossword.letters[cell.row][cell.col] = '';
    return crossword;
  }

  getLetter(cell: Cell) {
    return this.letters[cell.row][cell.col];
  }

  isCellEmpty(cell: Cell) {
    return !this.getLetter(cell);
  }
}
