export type Cell = {
  row: number;
  col: number;
  letter: string;
  down: string;
  across: string;
};

export type ClueSet = 'across' | 'down';

export type Clue = {
  clueSet: ClueSet;
  id: string;
  hint: string;
  cells: Cell[];
};

const createEmptyCell = (row: number, col: number) => ({ row, col, letter: '', down: '', across: '' });
export const cellIsEmpty = (cell: Cell) => !cell.letter;
export const getCellKey = (cell: Cell) => `[${cell.row}][${cell.col}]`;

export const createCells = (letters: string[][]) => {
  let nextClue = 1;
  return letters.reduce((rows: Array<Array<Cell>>, row, rowIndex) => {
    const prevRow = rows[rowIndex - 1];
    const newRow = row.reduce((cells: Array<Cell>, letter, colIndex) => {
      if (!letter || letter === ' ') {
        cells.push(createEmptyCell(rowIndex, colIndex));
        return cells;
      }
      const leftCell = cells[colIndex - 1];
      const prevAcross = leftCell && leftCell.across;
      const across = prevAcross ? prevAcross : nextClue.toString();

      const aboveCell = prevRow && prevRow[colIndex];
      const prevDown = aboveCell && aboveCell.down;
      const down = prevDown ? prevDown : nextClue.toString();

      if (!(prevAcross && prevDown)) {
        nextClue = nextClue + 1;
      }
      cells.push({ row: rowIndex, col: colIndex, letter, across, down });
      return cells;
    }, []);
    rows.push(newRow);
    return rows;
  }, []);
};

export const createClues = (cells: Array<Array<Cell>>, acrossClues: string[], downClues: string[]) => {
  const across: Clue[] = [];
  const down: Clue[] = [];
  let prevAcross = 0;
  let prevDown = 0;
  cells.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell.row < 0) {
        return;
      }
      const acrossNumber = parseInt(cell.across);
      if (acrossNumber > prevAcross) {
        const cellsInClue: Cell[] = [];
        let i = colIndex;
        let nextCell = cell;
        while (nextCell && nextCell.across === cell.across) {
          cellsInClue.push(nextCell);
          i = i + 1;
          nextCell = row[i];
        }
        across.push({
          clueSet: 'across',
          id: cell.across,
          hint: acrossClues.shift() || '',
          cells: cellsInClue
        });
        prevAcross = acrossNumber;
      }
      const downNumber = parseInt(cell.down);
      if (downNumber > prevDown) {
        const cellsInClue: Cell[] = [];
        let i = rowIndex;
        let nextCell = cell;
        while (nextCell && nextCell.down === cell.down) {
          cellsInClue.push(nextCell);
          i = i + 1;
          const nextRow = cells[i];
          nextCell = nextRow ? nextRow[colIndex] : createEmptyCell(i, colIndex);
        }
        down.push({
          clueSet: 'down',
          id: cell.down,
          hint: downClues.shift() || '',
          cells: cellsInClue
        });
        prevDown = downNumber;
      }
    });
  });
  const clues = new Map<ClueSet, Clue[]>();
  clues.set('across', across);
  clues.set('down', down);
  return clues;
};

export const getClueKey = (clueSet: ClueSet, clueNumber: string) => `${clueSet}_${clueNumber}`;
export const getClueById = (clues: Map<ClueSet, Clue[]>, clueSet: ClueSet, id: string, fallback: Clue) =>
  clues.get(clueSet)?.find(clue => clue.id === id) || fallback;

export const getPreviousClue = (clues: Map<ClueSet, Clue[]>, clue: Clue) => {
  const clueSet = clue.clueSet;
  const currentClues = clues.get(clueSet) || [];
  const currentClueIdx = currentClues.indexOf(clue);
  const currentClueIndex = currentClueIdx === undefined ? -1 : currentClueIdx;
  if (currentClueIndex > 0) {
    return currentClues[currentClueIndex - 1];
  } else {
    const otherClueSet = clueSet === 'across' ? 'down' : 'across';
    const otherClues = clues.get(otherClueSet) || [];
    return otherClues[otherClues.length - 1];
  }
};

export const getNextClue = (clues: Map<ClueSet, Clue[]>, clue: Clue) => {
  const clueSet = clue.clueSet;
  const currentClues = clues.get(clueSet) || [];
  const currentClueIdx = currentClues.indexOf(clue);
  const currentClueIndex = currentClueIdx === undefined ? -1 : currentClueIdx;
  if (currentClueIndex < currentClues.length - 1) {
    return currentClues[currentClueIndex + 1];
  } else {
    const otherClueSet = clueSet === 'across' ? 'down' : 'across';
    const otherClues = clues.get(otherClueSet) || [];
    return otherClues[0];
  }
};
