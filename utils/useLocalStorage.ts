import { useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  toString: (value: T) => string,
  fromString: (str: string) => T,
  initial: T
): [T, (value: T) => void] => {
  const [value, setStoredValue] = useState<T>(() => {
    try {
      const storedStr = localStorage.getItem(key);
      return storedStr ? fromString(storedStr) : initial;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return initial;
    }
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
    localStorage.setItem(key, toString(newValue));
  };

  return [value, setValue];
};

export default useLocalStorage;
