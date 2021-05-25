import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from 'styles/crossword.module.scss';
import { SOLUTION, CLUE_LISTS } from 'data/crossword';
import KEY_EVENTS from 'utils/events';
import classNames from 'utils/classNames';
import {
  Cell,
  Clue,
  ClueSet,
  cellIsEmpty,
  createCells,
  createClues,
  getClueKey,
  getCellKey,
  getClueById,
  getPreviousClue,
  getNextClue
} from 'components/crossword/helpers';
import useLocalStorage from 'utils/useLocalStorage';
import ImmutableCrossword from 'utils/immutableCrossword';
import CrosswordCell from 'components/crossword/crosswordCell';

const ACROSS = 'across';
const DOWN = 'down';
const LOCAL_STORAGE_KEY = 'crossword';
const CELLS = createCells(SOLUTION);
const CLUES = createClues(CELLS, CLUE_LISTS.ACROSS, CLUE_LISTS.DOWN);
const ROW_COUNT = CELLS.length;
const COL_COUNT = CELLS[0].length;

const STARTING_CROSSWORD = new ImmutableCrossword(SOLUTION);
const STARTING_CLUE = (CLUES.get(ACROSS) || [])[0];
const STARTING_CELL = CELLS[0][0];

const immutableCrosswordToString = (crossword: ImmutableCrossword) => crossword.toString();
const immutableCrosswordFromString = (str: string) => ImmutableCrossword.fromString(str, SOLUTION);

const Crossword = () => {
  const [crossword, setCrossword] = useLocalStorage<ImmutableCrossword>(
    LOCAL_STORAGE_KEY,
    immutableCrosswordToString,
    immutableCrosswordFromString,
    STARTING_CROSSWORD
  );

  const [currentClue, setCurrentClue] = useState<Clue>(STARTING_CLUE);

  const clueRefs = useRef(new Map<string, HTMLLIElement>());

  const [currentCell, updateCurrentCell] = useState<Cell>(STARTING_CELL);
  const setCurrentCell = (cell: Cell) => {
    updateCurrentCell(cell);

    // Scroll clues into view
    const acrossElement = clueRefs.current.get(getClueKey(ACROSS, cell[ACROSS]));
    if (acrossElement) {
      acrossElement.scrollIntoView();
    }
    const downElement = clueRefs.current.get(getClueKey(DOWN, cell[DOWN]));
    if (downElement) {
      downElement.scrollIntoView();
    }
  };

  const switchClueSet = () => {
    if (currentClue.clueSet === ACROSS) {
      const newClue = getClueById(CLUES, DOWN, currentCell.down, currentClue);
      setCurrentClue(newClue);
    } else {
      const newClue = getClueById(CLUES, ACROSS, currentCell.across, currentClue);
      setCurrentClue(newClue);
    }
  };

  const onCellClick = (cell: Cell) => {
    if (cell === currentCell) {
      switchClueSet();
    } else {
      const clueSet = currentClue.clueSet;
      setCurrentClue(getClueById(CLUES, clueSet, cell[clueSet], currentClue));
      setCurrentCell(cell);
    }
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const typedLetter = KEY_EVENTS.LETTER(event);
      const currentClueSet = currentClue.clueSet;

      // SPACE
      if (KEY_EVENTS.SPACE(event)) {
        event.preventDefault();
        switchClueSet();
      }
      // UP
      else if (KEY_EVENTS.UP(event)) {
        event.preventDefault();
        if (currentClueSet === ACROSS) {
          switchClueSet();
        } else {
          let i = currentCell.row - 1;
          while (i >= 0) {
            const cell = CELLS[i][currentCell.col];
            if (!cellIsEmpty(cell)) {
              onCellClick(cell);
              break;
            }
            i = i - 1;
          }
        }
      }
      // DOWN
      else if (KEY_EVENTS.DOWN(event)) {
        event.preventDefault();
        if (currentClueSet === ACROSS) {
          switchClueSet();
        } else {
          let i = currentCell.row + 1;
          while (i < ROW_COUNT) {
            const cell = CELLS[i][currentCell.col];
            if (!cellIsEmpty(cell)) {
              onCellClick(cell);
              break;
            }
            i = i + 1;
          }
        }
      }
      // LEFT
      else if (KEY_EVENTS.LEFT(event)) {
        event.preventDefault();
        if (currentClueSet === DOWN) {
          switchClueSet();
        } else {
          let i = currentCell.col - 1;
          while (i >= 0) {
            const cell = CELLS[currentCell.row][i];
            if (cell && !cellIsEmpty(cell)) {
              onCellClick(cell);
              break;
            }
            i = i - 1;
          }
        }
      }
      // RIGHT
      else if (KEY_EVENTS.RIGHT(event)) {
        event.preventDefault();
        if (currentClueSet === DOWN) {
          switchClueSet();
        } else {
          let i = currentCell.col + 1;
          while (i < COL_COUNT) {
            const cell = CELLS[currentCell.row][i];
            if (cell && !cellIsEmpty(cell)) {
              onCellClick(cell);
              break;
            }
            i = i + 1;
          }
        }
      }
      // BACKSPACE
      else if (KEY_EVENTS.BACKSPACE(event)) {
        event.preventDefault();
        if (crossword.isCellEmpty(currentCell)) {
          const cellsInClue = currentClue.cells;
          const cellIndex = cellsInClue.indexOf(currentCell);
          if (cellIndex > 0) {
            const targetCell = cellsInClue[cellIndex - 1];
            const newCrossword = crossword.deleteLetter(targetCell);
            setCrossword(newCrossword);
            setCurrentCell(targetCell);
          } else {
            const previousClue = getPreviousClue(CLUES, currentClue);
            const targetCell = previousClue.cells[previousClue.cells.length - 1];
            const newCrossword = crossword.deleteLetter(targetCell);
            setCrossword(newCrossword);
            setCurrentCell(targetCell);
            setCurrentClue(previousClue);
          }
        } else {
          const newCrossword = crossword.deleteLetter(currentCell);
          setCrossword(newCrossword);
        }
      }
      // LETTER
      else if (typedLetter) {
        event.preventDefault();
        const previousLetter = crossword.getLetter(currentCell);
        const newCrossword = crossword.putLetter(currentCell, typedLetter);
        setCrossword(newCrossword);

        // Check for completion
        const { correct, filled } = newCrossword.check();
        if (correct) {
          setTimeout(() => window.alert('Congratulations! You solved the crossword!'), 0);
        } else if (filled) {
          setTimeout(() => window.alert(`Something isn't quite right... Take another look!`), 0);
        } else {
          const cellsInClue = currentClue.cells;
          const cellIndex = cellsInClue.indexOf(currentCell);
          if (previousLetter) {
            if (cellIndex === cellsInClue.length - 1) {
              const nextClue = getNextClue(CLUES, currentClue);
              const targetCell = nextClue.cells[0];
              setCurrentClue(nextClue);
              setCurrentCell(targetCell);
            } else {
              const targetCell = cellsInClue[cellIndex + 1];
              setCurrentCell(targetCell);
            }
          } else {
            let emptyCellClue = currentClue;
            let emptyCell = crossword.getFirstEmptyCellOfClue(currentClue, cellIndex + 1);
            while (!emptyCell) {
              emptyCellClue = getNextClue(CLUES, emptyCellClue);
              emptyCell = crossword.getFirstEmptyCellOfClue(emptyCellClue);
            }
            setCurrentClue(emptyCellClue);
            setCurrentCell(emptyCell);
          }
        }
      }
    },
    [crossword, currentCell, currentClue]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  let maxClueNumber = 0;
  const renderedCells = CELLS.map(row => {
    return row.map(cell => {
      const key = getCellKey(cell);
      if (cellIsEmpty(cell)) {
        return <div key={key} />;
      }
      let clueNumber: number | undefined;
      let maxClue = Math.max(parseInt(cell.across), parseInt(cell.down));
      if (maxClue > maxClueNumber) {
        clueNumber = maxClue;
        maxClueNumber = maxClue;
      }

      const letter = crossword.getLetter(cell);
      const inClue = currentClue.cells.includes(cell);
      const isCurrent = cell === currentCell;
      const cellProps = { cell, clueNumber, letter, inClue, isCurrent, onClick: onCellClick };
      return <CrosswordCell key={key} {...cellProps} />;
    });
  });

  const renderClueList = (clueSet: ClueSet) => {
    const onClick = (clue: Clue) => {
      const targetCell = crossword.getFirstEmptyCellOfClue(clue) || clue.cells[0];
      setCurrentClue(clue);
      setCurrentCell(targetCell);
    };
    const clues = Array.from(CLUES.get(clueSet)?.values() || []).map(clue => {
      const { id, hint } = clue;
      const isCurrent = clue === currentClue;
      const classes = classNames([styles.clue, isCurrent && styles.current]);
      const key = getClueKey(clueSet, id);
      const ref = (element: HTMLLIElement) => {
        clueRefs.current.set(key, element);
      };
      return (
        <li className={classes} key={key} ref={ref} onClick={() => onClick(clue)}>
          {id}. {hint}
        </li>
      );
    });
    return (
      <ul key={`${clueSet}_clues`} className={styles.clueList}>
        {clues}
      </ul>
    );
  };

  return (
    <div className={styles.container}>
      <div key={'crossword_container'} className={styles.crosswordContainer}>
        <div key={'current_clue'} className={styles.currentClue}>
          {currentClue.hint}
        </div>
        <div key={'crossword'} className={styles.crossword}>
          {renderedCells}
        </div>
      </div>
      <div key={'clues'} className={styles.clues}>
        <div key={'across_clues_container'} className={styles.clueListContainer}>
          <h1>across</h1>
          {renderClueList(ACROSS)}
        </div>
        <div key={'down_clues_container'} className={styles.clueListContainer}>
          <h1>down</h1>
          {renderClueList(DOWN)}
        </div>
      </div>
    </div>
  );
};

// class Crossword extends React.PureComponent {
//   // isClient: false

//   componentDidMount() {
//     // this.setState({ isClient: true });
//   }

export default Crossword;
