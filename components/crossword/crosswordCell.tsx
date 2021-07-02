import React from 'react';
import styles from 'styles/crossword.module.scss';
import classNames from 'utils/classNames';
import { Cell } from './helpers';

type CrosswordCellProps = {
  cell: Cell;
  clueNumber?: number;
  inClue: boolean;
  isCurrent: boolean;
  letter?: string;
  onClick: (cell: Cell) => void;
};

const CrosswordCell = ({ cell, clueNumber, inClue, isCurrent, letter, onClick }: CrosswordCellProps) => {
  const cellStyles = classNames([styles.cell, inClue && styles.inClue, isCurrent && styles.current]);
  const decoration = clueNumber ? (
    <text x="1.5" y="1" alignmentBaseline="hanging" className={styles.clueDecoration}>
      {clueNumber}
    </text>
  ) : null;
  return (
    <svg viewBox="0 0 25 25" className={cellStyles} onClick={() => onClick(cell)}>
      {decoration}
      <text x="50%" y="57%" textAnchor="middle" alignmentBaseline="central">
        {letter}
      </text>
    </svg>
  );
};

export default CrosswordCell;
