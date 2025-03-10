/**
 * This custom hook is used to save any data related the application
 * using the LocalStorage API or WebStorage API.
 */

import { useEffect, useState } from "react";

export const useLocalStorage = <T extends Record<string, any>>(
  key: string,
  initialV: T // This is an any object
) => {
  const [l, setL] = useState(() => {
    try {
      // If exits any object with key [k] in the localStorage, we returns the value, else returns only the initialValue.
      localStorage.getItem(key) ? JSON.parse(key) : initialV;
      // const item = localStorage.getItem(key);
      // return item ? JSON.parse(item) : initialV;
    } catch (error) {
      console.error("Error reading localStorage key: ", key, error);
      return initialV;
    }
  });

  // Here this method is used to sincronize the state with the localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(l));
    } catch (error) {
      console.log("Error setting localStorage key:", key, error);
    }
  }, [key, setL]);

  // Add item or update [item] to localStorage
  const addItem = <K extends keyof T>(k: K, v: T[K]) => {
    setL((prv: any) => {
      try {
        localStorage.setItem(key, JSON.stringify({ ...prv, [k]: v }));
      } catch (error) {
        console.log("Error setting localStorage: ", error);
      }
      return { ...prv, [k]: k }; // This set and creates a new state object.
    });
  };

  // Get a value item from localStorage
  const getItem = <K extends keyof T>(k: K): T[K] | null =>
    l ? l[k] ?? null : null;

  // Remove item
  const removeItem = <K extends keyof T>(k: K) => {
    setL((prv: any) => {
      const { [k]: _, ...rest } = prv; // Interesting way to get all value form any object.

      try {
        localStorage.setItem(k as string, JSON.stringify(rest));
      } catch (error) {
        console.log("Error removing item: ", error);
      }
      return rest;
    });
  };

  // Clear completly items from local storage
  const clear = () => {
    try {
      localStorage.removeItem(key);
      setL(initialV);
    } catch (error) {
      console.log("Error clearing localStorage: ", error);
    }
  };

  return { l, addItem, getItem, removeItem, clear };
};
