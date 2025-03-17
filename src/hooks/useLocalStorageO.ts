import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (itemKey: string, itemValue: T) => {
    try {
      const currentStoredValue = storedValue || {};
      const newStoredValue = { ...currentStoredValue, [itemKey]: itemValue };
      setStoredValue(newStoredValue);
      window.localStorage.setItem(key, JSON.stringify(newStoredValue));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = (itemKey: string) => {
    try {
      const currentStoredValue = storedValue || {};
      return currentStoredValue[itemKey];
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (itemKey: string) => {
    try {
      const currentStoredValue = storedValue || {};
      const { [itemKey]: _, ...newStoredValue } = currentStoredValue;
      setStoredValue(newStoredValue);
      window.localStorage.setItem(key, JSON.stringify(newStoredValue));
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { storedValue, setValue, addItem, getItem, removeItem, clear };
};
