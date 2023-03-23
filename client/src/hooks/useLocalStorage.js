import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const persistedStateSerializer = localStorage.getItem(key);

    if (persistedStateSerializer) {
      const persistedState = JSON.parse(persistedStateSerializer);

      return persistedState;
    }

    return initialValue;
  });

  const setLocalStorageState = (value) => {
    setState(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setLocalStorageState];
};
