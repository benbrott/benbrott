import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'styles/crossword.module.scss';
import { CELLS, CLUES } from 'data/crossword';
import withFormFactor from 'utils/withFormFactor';
import KEY_EVENTS from 'utils/events';

const ACROSS = 'across';
const DOWN = 'down';
const ROW_COUNT = CELLS.length;
const COL_COUNT = CELLS[0].length;
const LOCAL_STORAGE_KEY = 'first_crossword';

const constructEmptyLetters = () => {
  let letters = [];
  CELLS.forEach(cellRow => {
    let row = [];
    cellRow.forEach(() => {
      row.push('');
    });
    letters.push(row);
  });
  return letters;
};

const Crossword = ({ formFactor }) => {
  const isPhone = formFactor === 'PHONE';
  const [currentCell, setCurrentCell] = useState({ row: 0, col: 0 });
  const [clueSet, setClueSet] = useState(ACROSS);
  const [containerSize, setContainerSize] = useState(0);
  const [letters, setLetters] = useState(constructEmptyLetters());
  const [windowIsAvailable, setWindowIsAvailable] = useState(false);

  const crosswordContainer = useRef(null);
  const hiddenInput = useRef(null);
  let clueRefs = {};

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    setWindowIsAvailable(true);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [currentCell, clueSet, letters]);

  useEffect(() => {
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  useEffect(() => {
    const storedLetters = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedLetters) {
      setLetters(JSON.parse(storedLetters));
    }
  }, []);

  const updateContainerSize = () => {
    if (crosswordContainer) {
      const { width, height } = crosswordContainer.current.getBoundingClientRect();
      setContainerSize(Math.min(width, height));
    }
  };

  const storeLetters = lettersToStore => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lettersToStore));
    setLetters(lettersToStore);
  };

  const isCurrentCell = (rowIdx, colIdx) => {
    const { row, col } = currentCell;
    return row === rowIdx && col === colIdx;
  };

  const onKeyDown = event => {
    const { row, col } = currentCell;
    const typedLetter = KEY_EVENTS.LETTER(event);
    if (KEY_EVENTS.SPACE(event)) {
      event.preventDefault();
      switchClueSet(row, col);
    } else if (KEY_EVENTS.UP(event)) {
      event.preventDefault();
      if (clueSet === ACROSS) {
        switchClueSet(row, col);
      } else {
        let i = row - 1;
        while (i >= 0) {
          if (CELLS[i][col]) {
            onCellClick(i, col);
            break;
          }
          i = i - 1;
        }
      }
    } else if (KEY_EVENTS.DOWN(event)) {
      event.preventDefault();
      if (clueSet === ACROSS) {
        switchClueSet(row, col);
      } else {
        let i = row + 1;
        while (i < ROW_COUNT) {
          if (CELLS[i][col]) {
            onCellClick(i, col);
            break;
          }
          i = i + 1;
        }
      }
    } else if (KEY_EVENTS.LEFT(event)) {
      event.preventDefault();
      if (clueSet === DOWN) {
        switchClueSet(row, col);
      } else {
        let i = col - 1;
        while (i >= 0) {
          if (CELLS[row][i]) {
            onCellClick(row, i);
            break;
          }
          i = i - 1;
        }
      }
    } else if (KEY_EVENTS.RIGHT(event)) {
      event.preventDefault();
      if (clueSet === DOWN) {
        switchClueSet(row, col);
      } else {
        let i = col + 1;
        while (i < COL_COUNT) {
          if (CELLS[row][i]) {
            onCellClick(row, i);
            break;
          }
          i = i + 1;
        }
      }
    } else if (KEY_EVENTS.BACKSPACE(event)) {
      event.preventDefault();
      if (letters[row][col]) {
        const newLetters = Array.from(letters);
        newLetters[row][col] = '';
        storeLetters(newLetters);
        return;
      }
      if (clueSet === ACROSS) {
        clearPreviousAcrossCell(row, col);
      } else {
        clearPreviousDownCell(row, col);
      }
    } else if (typedLetter) {
      event.preventDefault();
      const previousLetter = letters[row][col];
      const newLetters = Array.from(letters);
      newLetters[row][col] = typedLetter;
      storeLetters(newLetters);
      if (checkLettersForCompletion(newLetters)) {
        return;
      }
      if (clueSet === ACROSS) {
        if (previousLetter) {
          goToNextAcrossCell(row, col);
        } else {
          goToNextOpenAcrossCell(row, col);
        }
      } else {
        if (previousLetter) {
          goToNextDownCell(row, col);
        } else {
          goToNextOpenDownCell(row, col);
        }
      }
    }
  };

  const checkLettersForCompletion = lettersToCheck => {
    let correct = true;
    let filled = true;
    CELLS.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if (cell) {
          const letter = lettersToCheck[rowIdx][colIdx];
          if (!letter) {
            filled = false;
            correct = false;
          } else if (letter !== cell.letter) {
            correct = false;
          }
        }
      });
    });
    if (correct) {
      storeLetters(lettersToCheck);
      const clear = window.confirm('Congratulations! You solved the crossword!\nWould you like to clear the puzzle?');
      if (clear) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        scrollCluesIntoView(0, 0);
        setCurrentCell({ row: 0, col: 0 });
        setClueSet(ACROSS);
        storeLetters(constructEmptyLetters());
      }
      return true;
    }
    if (filled) {
      storeLetters(lettersToCheck);
      window.alert(`Something isn't quite right... Take another look!`);
      return true;
    }
    return false;
  };

  /*** HANDLERS FOR A NEW LETTER KEYDOWN ***/

  const goToNextAcrossCell = (row, col) => {
    if (CELLS[row][col + 1]) {
      setCurrentCell({ row, col: col + 1 });
      return;
    }
    const currentClue = CELLS[row][col][ACROSS];
    const acrossClues = Object.keys(CLUES[ACROSS]);
    const nextClueNumber = acrossClues[acrossClues.indexOf(currentClue) + 1];
    if (nextClueNumber) {
      const { row: nextRow, col: nextCol } = CLUES[ACROSS][nextClueNumber].startingCell;
      scrollCluesIntoView(nextRow, nextCol);
      setCurrentCell({ row: nextRow, col: nextCol });
    } else {
      const { row: firstDownRow, col: firstDownCol } = CLUES[DOWN]['1'].startingCell;
      scrollCluesIntoView(firstDownRow, firstDownCol);
      setClueSet(DOWN);
      setCurrentCell({ row: firstDownRow, col: firstDownCol });
    }
  };

  const goToNextDownCell = (row, col) => {
    if (CELLS[row + 1] && CELLS[row + 1][col]) {
      setCurrentCell({ row: row + 1, col: col });
      return;
    }
    const currentClue = CELLS[row][col][DOWN];
    const downClues = Object.keys(CLUES[DOWN]);
    const nextClueNumber = downClues[downClues.indexOf(currentClue) + 1];
    if (nextClueNumber) {
      const { row: nextRow, col: nextCol } = CLUES[DOWN][nextClueNumber].startingCell;
      scrollCluesIntoView(nextRow, nextCol);
      setCurrentCell({ row: nextRow, col: nextCol });
    } else {
      const { row: firstAcrossRow, col: firstAcrossCol } = CLUES[ACROSS]['1'].startingCell;
      scrollCluesIntoView(firstAcrossRow, firstAcrossCol);
      setClueSet(ACROSS);
      setCurrentCell({ row: firstAcrossRow, col: firstAcrossCol });
    }
  };

  const goToFirstOpenCell = targetClueSet => {
    const { row, col } = CLUES[targetClueSet]['1'].startingCell;
    if (letters[row][col]) {
      if (targetClueSet === ACROSS) {
        goToNextOpenAcrossCell(row, col);
      } else {
        goToNextOpenDownCell(row, col);
      }
    } else {
      scrollCluesIntoView(row, col);
      setClueSet(targetClueSet);
      setCurrentCell({ row, col });
    }
  };

  const goToNextOpenAcrossCell = (row, col) => {
    if (goToNextOpenCellOfAcrossClue(row, col + 1)) {
      return;
    }
    const currentClue = CELLS[row][col][ACROSS];
    const acrossClues = Object.keys(CLUES[ACROSS]);
    let i = acrossClues.indexOf(currentClue) + 1;
    while (i < acrossClues.length) {
      const number = acrossClues[i];
      if (goToFirstOpenCellOfAcrossClue(number)) {
        return;
      }
      i = i + 1;
    }
    goToFirstOpenCell(DOWN);
  };

  const goToNextOpenDownCell = (row, col) => {
    if (goToNextOpenCellOfDownClue(row + 1, col)) {
      return;
    }
    const currentClue = CELLS[row][col][DOWN];
    const downClues = Object.keys(CLUES[DOWN]);
    let i = downClues.indexOf(currentClue) + 1;
    while (i < downClues.length) {
      const number = downClues[i];
      if (goToFirstOpenCellOfDownClue(number)) {
        return;
      }
      i = i + 1;
    }
    goToFirstOpenCell(ACROSS);
  };

  const goToFirstOpenCellOfAcrossClue = number => {
    const { row, col } = CLUES[ACROSS][number].startingCell;
    return goToNextOpenCellOfAcrossClue(row, col, number);
  };

  const goToFirstOpenCellOfDownClue = number => {
    const { row, col } = CLUES[DOWN][number].startingCell;
    return goToNextOpenCellOfDownClue(row, col, number);
  };

  const goToNextOpenCellOfAcrossClue = (row, startCol) => {
    let col = startCol;
    while (CELLS[row][col]) {
      if (!letters[row][col]) {
        scrollCluesIntoView(row, col);
        setClueSet(ACROSS);
        setCurrentCell({ row, col });
        return true;
      }
      col = col + 1;
    }
    return false;
  };

  const goToNextOpenCellOfDownClue = (startRow, col) => {
    let row = startRow;
    while (CELLS[row] && CELLS[row][col]) {
      if (!letters[row][col]) {
        scrollCluesIntoView(row, col);
        setClueSet(DOWN);
        setCurrentCell({ row, col });
        return true;
      }
      row = row + 1;
    }
    return false;
  };

  /*** HANDLERS FOR A BACKSPACE KEYDOWN ***/

  const clearPreviousAcrossCell = (currentRow, currentCol) => {
    const previousCol = currentCol - 1;
    if (CELLS[currentRow][previousCol]) {
      const newLetters = Array.from(letters);
      newLetters[currentRow][previousCol] = '';
      storeLetters(newLetters);
      setCurrentCell({ row: currentRow, col: previousCol });
      return;
    }
    const currentClue = CELLS[currentRow][currentCol][ACROSS];
    const acrossClueNumbers = Object.keys(CLUES[ACROSS]);
    const previousClueIndex = acrossClueNumbers.indexOf(currentClue) - 1;
    if (previousClueIndex < 0) {
      const downClueNumbers = Object.keys(CLUES[DOWN]);
      clearLastCellOfDownClue(downClueNumbers[downClueNumbers.length - 1]);
      return;
    }
    clearLastCellOfAcrossClue(acrossClueNumbers[previousClueIndex]);
  };

  const clearPreviousDownCell = (currentRow, currentCol) => {
    const previousRow = currentRow - 1;
    if (CELLS[currentRow - 1] && CELLS[previousRow][currentCol]) {
      const newLetters = Array.from(letters);
      newLetters[previousRow][currentCol] = '';
      storeLetters(newLetters);
      setCurrentCell({ row: previousRow, col: currentCol });
      return;
    }
    const currentClue = CELLS[currentRow][currentCol][DOWN];
    const downClueNumbers = Object.keys(CLUES[DOWN]);
    const previousClueIndex = downClueNumbers.indexOf(currentClue) - 1;
    if (previousClueIndex < 0) {
      const acrossClueNumbers = Object.keys(CLUES[ACROSS]);
      clearLastCellOfAcrossClue(acrossClueNumbers[acrossClueNumbers.length - 1]);
      return;
    }
    clearLastCellOfDownClue(downClueNumbers[previousClueIndex]);
  };

  const clearLastCellOfAcrossClue = number => {
    const { row, col } = CLUES[ACROSS][number].startingCell;
    let i = col;
    while (CELLS[row][i + 1]) {
      i = i + 1;
    }
    const newLetters = Array.from(letters);
    newLetters[row][i] = '';
    scrollCluesIntoView(row, i);
    storeLetters(newLetters);
    setClueSet(ACROSS);
    setCurrentCell({ row, col: i });
  };

  const clearLastCellOfDownClue = number => {
    const { row, col } = CLUES[DOWN][number].startingCell;
    let i = row;
    while (CELLS[i + 1] && CELLS[i + 1][col]) {
      i = i + 1;
    }
    const newLetters = Array.from(letters);
    newLetters[i][col] = '';
    scrollCluesIntoView(i, col);
    storeLetters(newLetters);
    setClueSet(DOWN);
    setCurrentCell({ row: i, col });
  };

  /*** RENDERING ***/

  const getClueKey = (clSet, number) => `${clSet}_${number}`;

  const switchClueSet = (row, col) => {
    scrollCluesIntoView(row, col);
    setClueSet(clueSet === ACROSS ? DOWN : ACROSS);
  };

  const onCellClick = (rowIdx, colIdx) => {
    if (isCurrentCell(rowIdx, colIdx)) {
      switchClueSet(rowIdx, colIdx);
    } else {
      scrollCluesIntoView(rowIdx, colIdx);
      setCurrentCell({ row: rowIdx, col: colIdx });
    }
  };

  const getCellKey = (row, col) => `[${row}][${col}]`;

  const scrollCluesIntoView = (row, col) => {
    if (isPhone) {
      return;
    }
    const cell = CELLS[row][col];
    const acrossElement = clueRefs[getClueKey(ACROSS, cell[ACROSS])];
    if (acrossElement) {
      acrossElement.scrollIntoView();
    }
    const downElement = clueRefs[getClueKey(DOWN, cell[DOWN])];
    if (downElement) {
      downElement.scrollIntoView();
    }
  };

  const renderCell = (cell, number, rowIdx, colIdx) => {
    const { row, col } = currentCell;
    const inClue = cell[clueSet] === CELLS[row][col][clueSet];
    const isCurrent = rowIdx === row && colIdx === col;
    const cellStyles = classNames([styles.cell, inClue && styles.inClue, isCurrent && styles.current]);
    const decoration = number ? (
      <text x="1.5" y="1" alignmentBaseline="hanging" className={styles.clueDecoration}>
        {number}
      </text>
    ) : null;
    const key = getCellKey(rowIdx, colIdx);
    return (
      <svg key={key} viewBox="0 0 25 25" className={cellStyles} onClick={() => onCellClick(rowIdx, colIdx)}>
        {decoration}
        <text x="50%" y="57%" textAnchor="middle" alignmentBaseline="central">
          {letters[rowIdx][colIdx]}
        </text>
      </svg>
    );
  };

  const renderCrossword = () => {
    const containerSizePx = `${containerSize}px`;
    const crosswordStyle = { height: containerSizePx, width: containerSizePx };

    let num = 0;
    const renderedCells = CELLS.map((row, rowIdx) => {
      return row.map((cell, colIdx) => {
        if (!cell) {
          return <div key={getCellKey(rowIdx, colIdx)} />;
        }
        const { across, down } = cell;
        let number;
        let maxClue = Math.max(across, down);
        if (maxClue > num) {
          number = maxClue;
          num = maxClue;
        }

        return renderCell(cell, number, rowIdx, colIdx);
      });
    });

    return (
      <div className={styles.crosswordContainer} ref={crosswordContainer}>
        <div className={styles.crossword} style={crosswordStyle}>
          {renderedCells}
        </div>
      </div>
    );
  };

  const renderClue = (clSet, number, isCurrent) => {
    const classes = classNames([styles.clue, isCurrent && styles.current]);
    const key = getClueKey(clSet, number);
    const ref = element => {
      clueRefs[key] = element;
    };
    return (
      <div className={classes} key={key} ref={ref}>
        {number}. {CLUES[clSet][number].clue}
      </div>
    );
  };

  const renderClueList = clSet => {
    const { row, col } = currentCell;
    const isCurrentClueSet = clSet === clueSet;
    const clues = Object.keys(CLUES[clSet]).map(number => {
      const isCurrent = isCurrentClueSet && number === CELLS[row][col][clSet];
      return renderClue(clSet, number, isCurrent);
    });
    return (
      <div key={`${clSet}_clues`} className={styles.clueList}>
        {clues}
      </div>
    );
  };

  const renderClues = () => {
    const renderedAcross = renderClueList(ACROSS);
    const renderedDown = renderClueList(DOWN);
    return (
      <div className={styles.clues}>
        <div key={'across_clues_container'} className={styles.clueListContainer}>
          <span className={styles.clueSetLabel}>Across</span>
          {renderedAcross}
        </div>
        <div key={'down_clues_container'} className={styles.clueListContainer}>
          <span className={styles.clueSetLabel}>Down</span>
          {renderedDown}
        </div>
      </div>
    );
  };

  const renderHiddenInput = () => {
    // Only render on touch devices
    if (window.matchMedia('(hover: none)').matches) {
      const onBlur = event => {
        if (hiddenInput) {
          hiddenInput.focus();
        }
      };
      const props = {
        key: 'hidden_input',
        type: 'text',
        autoComplete: 'off',
        className: styles.hiddenInput,
        autoFocus: true,
        ref: element => (hiddenInput = element),
        onBlur
      };
      return <input {...props} />;
    }
    return null;
  };

  if (isPhone) {
    const { row, col } = currentCell;
    const number = CELLS[row][col][clueSet];
    const clue = renderClue(clueSet, number, false);
    return (
      <div className={styles.container}>
        {windowIsAvailable && renderHiddenInput()}
        {clue}
        {renderCrossword()}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {windowIsAvailable && renderHiddenInput()}
      {renderCrossword()}
      {renderClues()}
    </div>
  );
};

Crossword.propTypes = { formFactor: PropTypes.string };
Crossword.defaultProps = { formFactor: 'DESKTOP' };

export default withFormFactor(Crossword);
