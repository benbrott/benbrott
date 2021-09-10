import React, { KeyboardEvent, useCallback, useState } from 'react';
import styles from 'styles/dropdown.module.scss';

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (option: string) => void;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(value);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onOptionSelect = (option: string) => {
    setCurrentOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const menu = isOpen ? (
    <div className={styles.menu}>
      {options.map(option => {
        return (
          <div className={styles.option} onClick={() => onOptionSelect(option)} key={option}>
            <span>{option}</span>
          </div>
        );
      })}
    </div>
  ) : null;

  return (
    <div className={styles.container} tabIndex={-1} onBlur={() => setIsOpen(false)}>
      <div className={styles.control} onClick={toggleOpen}>
        <span>{currentOption}</span>
      </div>
      {menu}
    </div>
  );
};

export default Dropdown;
