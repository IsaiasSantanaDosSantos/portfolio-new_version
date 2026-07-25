import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(initialValue);

  function save(newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  }

  return {
    value,
    save,
  };
}
