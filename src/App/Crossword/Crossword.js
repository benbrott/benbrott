import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Crossword.module.scss';
import { CELLS, CLUES } from './data';
import withFormFactor from 'utils/withFormFactor';
import KEY_EVENTS from 'utils/events';

const ACROSS = 'across';
const DOWN = 'down';
const ROW_COUNT = CELLS.length;
const COL_COUNT = CELLS[0].length;
const LOCAL_STORAGE_KEY = 'first_crossword';

class Crossword extends React.PureComponent {
  static propTypes = {
    isDark: PropTypes.bool,
    formFactor: PropTypes.string
  };
  static defaultProps = { isDark: false };

  constructor(props) {
    super(props);
    this.crosswordContainer = React.createRef();
    this.clueRefs = {};
    const storedLetters = localStorage.getItem(LOCAL_STORAGE_KEY);
    const letters = storedLetters ? JSON.parse(storedLetters) : this.constructEmptyLetters();
    this.state = {
      currentCell: { row: 0, col: 0 },
      clueSet: ACROSS,
      containerSize: 0,
      letters
    };
  }

  componentDidMount() {
    this.setContainerSize();
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  componentDidUpdate() {
    this.setContainerSize();
  }

  storeLetters = letters => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(letters));

  constructEmptyLetters = () => {
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

  setContainerSize = () => {
    if (this.crosswordContainer) {
      const { width, height } = this.crosswordContainer.current.getBoundingClientRect();
      const containerSize = Math.min(width, height);
      this.setState({ containerSize });
    }
  };

  isPhone = () => this.props.formFactor === 'PHONE';

  isCurrentCell = (rowIdx, colIdx) => {
    const { row, col } = this.state.currentCell;
    return row === rowIdx && col === colIdx;
  };

  onKeyDown = event => {
    const { currentCell, clueSet, letters } = this.state;
    const { row, col } = currentCell;
    if (KEY_EVENTS.SPACE(event)) {
      event.preventDefault();
      this.switchClueSet(row, col);
    } else if (KEY_EVENTS.UP(event)) {
      event.preventDefault();
      if (clueSet === ACROSS) {
        this.switchClueSet(row, col);
      } else {
        let i = row - 1;
        while (i >= 0) {
          if (CELLS[i][col]) {
            this.onCellClick(i, col);
            break;
          }
          i = i - 1;
        }
      }
    } else if (KEY_EVENTS.DOWN(event)) {
      event.preventDefault();
      if (clueSet === ACROSS) {
        this.switchClueSet(row, col);
      } else {
        let i = row + 1;
        while (i < ROW_COUNT) {
          if (CELLS[i][col]) {
            this.onCellClick(i, col);
            break;
          }
          i = i + 1;
        }
      }
    } else if (KEY_EVENTS.LEFT(event)) {
      event.preventDefault();
      if (clueSet === DOWN) {
        this.switchClueSet(row, col);
      } else {
        let i = col - 1;
        while (i >= 0) {
          if (CELLS[row][i]) {
            this.onCellClick(row, i);
            break;
          }
          i = i - 1;
        }
      }
    } else if (KEY_EVENTS.RIGHT(event)) {
      event.preventDefault();
      if (clueSet === DOWN) {
        this.switchClueSet(row, col);
      } else {
        let i = col + 1;
        while (i < COL_COUNT) {
          if (CELLS[row][i]) {
            this.onCellClick(row, i);
            break;
          }
          i = i + 1;
        }
      }
    } else if (KEY_EVENTS.BACKSPACE(event)) {
      event.preventDefault();
      if (letters[row][col]) {
        letters[row][col] = '';
        this.storeLetters(letters);
        this.forceUpdate();
        return;
      }
      if (clueSet === ACROSS) {
        this.clearPreviousAcrossCell(row, col);
      } else {
        this.clearPreviousDownCell(row, col);
      }
    } else if (event.code.length === 4 && event.code.startsWith('Key')) {
      event.preventDefault();
      const previousLetter = letters[row][col];
      letters[row][col] = event.code[3];
      this.storeLetters(letters);
      if (this.checkLettersForCompletion(letters)) {
        return;
      }
      if (clueSet === ACROSS) {
        if (previousLetter) {
          this.goToNextAcrossCell(row, col);
        } else {
          this.goToNextOpenAcrossCell(row, col);
        }
      } else {
        if (previousLetter) {
          this.goToNextDownCell(row, col);
        } else {
          this.goToNextOpenDownCell(row, col);
        }
      }
    }
  };

  checkLettersForCompletion = letters => {
    let correct = true;
    let filled = true;
    CELLS.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if (cell) {
          const letter = letters[rowIdx][colIdx];
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
      this.forceUpdate();
      const clear = window.confirm('Congratulations! You solved the crossword!\nWould you like to clear the puzzle?');
      if (clear) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.scrollCluesIntoView(0, 0);
        this.setState({
          currentCell: { row: 0, col: 0 },
          clueSet: ACROSS,
          letters: this.constructEmptyLetters()
        });
      }
      return true;
    }
    if (filled) {
      this.forceUpdate();
      window.alert(`Something isn't quite right... Take another look!`);
      return true;
    }
    return false;
  };

  /*** HANDLERS FOR A NEW LETTER KEYDOWN ***/

  goToNextAcrossCell = (row, col) => {
    if (CELLS[row][col + 1]) {
      this.setState({ currentCell: { row, col: col + 1 } });
      return;
    }
    const currentClue = CELLS[row][col][ACROSS];
    const acrossClues = Object.keys(CLUES[ACROSS]);
    const nextClueNumber = acrossClues[acrossClues.indexOf(currentClue) + 1];
    if (nextClueNumber) {
      const { row: nextRow, col: nextCol } = CLUES[ACROSS][nextClueNumber].startingCell;
      this.scrollCluesIntoView(nextRow, nextCol);
      this.setState({ currentCell: { row: nextRow, col: nextCol } });
    } else {
      const { row: firstDownRow, col: firstDownCol } = CLUES[DOWN]['1'].startingCell;
      this.scrollCluesIntoView(firstDownRow, firstDownCol);
      this.setState({
        clueSet: DOWN,
        currentCell: { row: firstDownRow, col: firstDownCol }
      });
    }
  };

  goToNextDownCell = (row, col) => {
    if (CELLS[row + 1] && CELLS[row + 1][col]) {
      this.setState({ currentCell: { row: row + 1, col: col } });
      return;
    }
    const currentClue = CELLS[row][col][DOWN];
    const downClues = Object.keys(CLUES[DOWN]);
    const nextClueNumber = downClues[downClues.indexOf(currentClue) + 1];
    if (nextClueNumber) {
      const { row: nextRow, col: nextCol } = CLUES[DOWN][nextClueNumber].startingCell;
      this.scrollCluesIntoView(nextRow, nextCol);
      this.setState({ currentCell: { row: nextRow, col: nextCol } });
    } else {
      const { row: firstAcrossRow, col: firstAcrossCol } = CLUES[ACROSS]['1'].startingCell;
      this.scrollCluesIntoView(firstAcrossRow, firstAcrossCol);
      this.setState({
        clueSet: ACROSS,
        currentCell: { row: firstAcrossRow, col: firstAcrossCol }
      });
    }
  };

  goToFirstOpenCell = clueSet => {
    const { row, col } = CLUES[clueSet]['1'].startingCell;
    if (this.state.letters[row][col]) {
      if (clueSet === ACROSS) {
        this.goToNextOpenAcrossCell(row, col);
      } else {
        this.goToNextOpenDownCell(row, col);
      }
    } else {
      this.scrollCluesIntoView(row, col);
      this.setState({ clueSet, currentCell: { row, col } });
    }
  };

  goToNextOpenAcrossCell = (row, col) => {
    if (this.goToNextOpenCellOfAcrossClue(row, col + 1)) {
      return;
    }
    const currentClue = CELLS[row][col][ACROSS];
    const acrossClues = Object.keys(CLUES[ACROSS]);
    let i = acrossClues.indexOf(currentClue) + 1;
    while (i < acrossClues.length) {
      const number = acrossClues[i];
      if (this.goToFirstOpenCellOfAcrossClue(number)) {
        return;
      }
      i = i + 1;
    }
    this.goToFirstOpenCell(DOWN);
  };

  goToNextOpenDownCell = (row, col) => {
    if (this.goToNextOpenCellOfDownClue(row + 1, col)) {
      return;
    }
    const currentClue = CELLS[row][col][DOWN];
    const downClues = Object.keys(CLUES[DOWN]);
    let i = downClues.indexOf(currentClue) + 1;
    while (i < downClues.length) {
      const number = downClues[i];
      if (this.goToFirstOpenCellOfDownClue(number)) {
        return;
      }
      i = i + 1;
    }
    this.goToFirstOpenCell(ACROSS);
  };

  goToFirstOpenCellOfAcrossClue = number => {
    const { row, col } = CLUES[ACROSS][number].startingCell;
    return this.goToNextOpenCellOfAcrossClue(row, col, number);
  };

  goToFirstOpenCellOfDownClue = number => {
    const { row, col } = CLUES[DOWN][number].startingCell;
    return this.goToNextOpenCellOfDownClue(row, col, number);
  };

  goToNextOpenCellOfAcrossClue(row, startCol, number) {
    let col = startCol;
    while (CELLS[row][col]) {
      if (!this.state.letters[row][col]) {
        this.scrollCluesIntoView(row, col);
        this.setState({ clueSet: ACROSS, currentCell: { row, col } });
        return true;
      }
      col = col + 1;
    }
    return false;
  }

  goToNextOpenCellOfDownClue(startRow, col, number) {
    let row = startRow;
    while (CELLS[row] && CELLS[row][col]) {
      if (!this.state.letters[row][col]) {
        this.scrollCluesIntoView(row, col);
        this.setState({ clueSet: DOWN, currentCell: { row, col } });
        return true;
      }
      row = row + 1;
    }
    return false;
  }

  /*** HANDLERS FOR A BACKSPACE KEYDOWN ***/

  clearPreviousAcrossCell = (currentRow, currentCol) => {
    const previousCol = currentCol - 1;
    if (CELLS[currentRow][previousCol]) {
      const letters = this.state.letters;
      letters[currentRow][previousCol] = '';
      this.storeLetters(letters);
      this.setState({ letters, currentCell: { row: currentRow, col: previousCol } });
      return;
    }
    const currentClue = CELLS[currentRow][currentCol][ACROSS];
    const acrossClueNumbers = Object.keys(CLUES[ACROSS]);
    const previousClueIndex = acrossClueNumbers.indexOf(currentClue) - 1;
    if (previousClueIndex < 0) {
      const downClueNumbers = Object.keys(CLUES[DOWN]);
      this.clearLastCellOfDownClue(downClueNumbers[downClueNumbers.length - 1]);
      return;
    }
    this.clearLastCellOfAcrossClue(acrossClueNumbers[previousClueIndex]);
  };

  clearPreviousDownCell = (currentRow, currentCol) => {
    const previousRow = currentRow - 1;
    if (CELLS[currentRow - 1] && CELLS[previousRow][currentCol]) {
      const letters = this.state.letters;
      letters[previousRow][currentCol] = '';
      this.storeLetters(letters);
      this.setState({ letters, currentCell: { row: previousRow, col: currentCol } });
      return;
    }
    const currentClue = CELLS[currentRow][currentCol][DOWN];
    const downClueNumbers = Object.keys(CLUES[DOWN]);
    const previousClueIndex = downClueNumbers.indexOf(currentClue) - 1;
    if (previousClueIndex < 0) {
      const acrossClueNumbers = Object.keys(CLUES[ACROSS]);
      this.clearLastCellOfAcrossClue(acrossClueNumbers[acrossClueNumbers.length - 1]);
      return;
    }
    this.clearLastCellOfDownClue(downClueNumbers[previousClueIndex]);
  };

  clearLastCellOfAcrossClue = number => {
    const { row, col } = CLUES[ACROSS][number].startingCell;
    let i = col;
    while (CELLS[row][i + 1]) {
      i = i + 1;
    }
    const letters = this.state.letters;
    letters[row][i] = '';
    this.storeLetters(letters);
    this.scrollCluesIntoView(row, i);
    this.setState({ letters, clueSet: ACROSS, currentCell: { row, col: i } });
  };

  clearLastCellOfDownClue = number => {
    const { row, col } = CLUES[DOWN][number].startingCell;
    let i = row;
    while (CELLS[i + 1] && CELLS[i + 1][col]) {
      i = i + 1;
    }
    const letters = this.state.letters;
    letters[i][col] = '';
    this.storeLetters(letters);
    this.scrollCluesIntoView(i, col);
    this.setState({ letters, clueSet: DOWN, currentCell: { row: i, col } });
  };

  /*** RENDERING ***/

  getClueKey = (clueSet, number) => `${clueSet}_${number}`;

  switchClueSet = (row, col) => {
    const clueSet = this.state.clueSet === ACROSS ? DOWN : ACROSS;
    this.scrollCluesIntoView(row, col);
    this.setState({ clueSet });
  };

  onCellClick = (rowIdx, colIdx) => {
    if (this.isCurrentCell(rowIdx, colIdx)) {
      this.switchClueSet(rowIdx, colIdx);
    } else {
      this.scrollCluesIntoView(rowIdx, colIdx);
      this.setState({ currentCell: { row: rowIdx, col: colIdx } });
    }
  };

  getCellKey = (row, col) => `[${row}][${col}]`;

  scrollCluesIntoView = (row, col) => {
    if (this.isPhone()) {
      return;
    }
    const cell = CELLS[row][col];
    const acrossElement = this.clueRefs[this.getClueKey(ACROSS, cell[ACROSS])];
    if (acrossElement) {
      acrossElement.scrollIntoView();
    }
    const downElement = this.clueRefs[this.getClueKey(DOWN, cell[DOWN])];
    if (downElement) {
      downElement.scrollIntoView();
    }
  };

  renderCell = (cell, number, rowIdx, colIdx) => {
    const { currentCell, clueSet, letters } = this.state;
    const { row, col } = currentCell;
    const inClue = cell[clueSet] === CELLS[row][col][clueSet];
    const isCurrent = rowIdx === row && colIdx === col;
    const cellStyles = classNames([
      styles.cell,
      this.props.isDark ? styles.dark : styles.light,
      inClue && styles.inClue,
      isCurrent && styles.current
    ]);
    const decoration = number ? (
      <text x="1.5" y="1" alignmentBaseline="hanging" className={styles.clueDecoration}>
        {number}
      </text>
    ) : null;
    const key = this.getCellKey(rowIdx, colIdx);
    return (
      <svg key={key} viewBox="0 0 25 25" className={cellStyles} onClick={() => this.onCellClick(rowIdx, colIdx)}>
        {decoration}
        <text x="50%" y="57%" textAnchor="middle" alignmentBaseline="central">
          {letters[rowIdx][colIdx]}
        </text>
      </svg>
    );
  };

  renderCrossword = () => {
    const containerSizePx = `${this.state.containerSize}px`;
    const crosswordStyle = { height: containerSizePx, width: containerSizePx };

    let num = 0;
    const renderedCells = CELLS.map((row, rowIdx) => {
      return row.map((cell, colIdx) => {
        if (!cell) {
          return <div key={this.getCellKey(rowIdx, colIdx)} />;
        }
        const { across, down } = cell;
        let number;
        let maxClue = Math.max(across, down);
        if (maxClue > num) {
          number = maxClue;
          num = maxClue;
        }

        return this.renderCell(cell, number, rowIdx, colIdx);
      });
    });

    return (
      <div className={styles.crosswordContainer} ref={this.crosswordContainer}>
        <div className={styles.crossword} style={crosswordStyle}>
          {renderedCells}
        </div>
      </div>
    );
  };

  renderClue = (clueSet, number, isCurrent) => {
    const classes = classNames([
      styles.clue,
      this.props.isDark ? styles.dark : styles.light,
      isCurrent && styles.current
    ]);
    const key = this.getClueKey(clueSet, number);
    const ref = element => {
      this.clueRefs[key] = element;
    };
    return (
      <div className={classes} key={key} ref={ref}>
        {number}. {CLUES[clueSet][number].clue}
      </div>
    );
  };

  renderClueList = clueSet => {
    const { row, col } = this.state.currentCell;
    const isCurrentClueSet = clueSet === this.state.clueSet;
    const clues = Object.keys(CLUES[clueSet]).map(number => {
      const isCurrent = isCurrentClueSet && number === CELLS[row][col][clueSet];
      return this.renderClue(clueSet, number, isCurrent);
    });
    return (
      <div key={`${clueSet}_clues`} className={styles.clueList}>
        {clues}
      </div>
    );
  };

  renderClues = () => {
    const renderedAcross = this.renderClueList(ACROSS);
    const renderedDown = this.renderClueList(DOWN);
    const labelClasses = classNames([styles.clueSetLabel, this.props.isDark ? styles.dark : styles.light]);
    return (
      <div className={styles.clues}>
        <div key={'across_clues_container'} className={styles.clueListContainer}>
          <span className={labelClasses}>Across</span>
          {renderedAcross}
        </div>
        <div key={'down_clues_container'} className={styles.clueListContainer}>
          <span className={labelClasses}>Down</span>
          {renderedDown}
        </div>
      </div>
    );
  };

  renderHiddenInput = () => {
    // Only render on touch devices
    if (window.matchMedia('(hover: none)').matches) {
      const onBlur = event => {
        if (this.hiddenInput) {
          this.hiddenInput.focus();
        }
      };
      const props = {
        key: 'hidden_input',
        className: styles.hiddenInput,
        autoFocus: true,
        ref: element => (this.hiddenInput = element),
        onBlur
      };
      return <input {...props} />;
    }
    return null;
  };

  render() {
    const hiddenInput = this.renderHiddenInput();
    if (this.isPhone()) {
      const clueSet = this.state.clueSet;
      const { row, col } = this.state.currentCell;
      const number = CELLS[row][col][clueSet];
      const clue = this.renderClue(clueSet, number, false);
      return (
        <div className={styles.container}>
          {hiddenInput}
          {clue}
          {this.renderCrossword()}
        </div>
      );
    }
    return (
      <div className={styles.container}>
        {hiddenInput}
        {this.renderCrossword()}
        {this.renderClues()}
      </div>
    );
  }
}

export default withFormFactor(Crossword, true);
