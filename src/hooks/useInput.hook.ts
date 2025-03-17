import { useCallback, useState } from "react";
/**
 * This hook is used to capture the input value from the user
 * int he input field
 * This custom hook is used to store the user input
 * This method only receive an object trougth it's arguments. Record is used to set the key: string and value: any
 * This method uses React useState
 * onChange is a method used to update the localstate where K: Generic represent a key of T
 * [keyof] obtains all posibles keys from [T]
 * [extends] means that [K] only can get only keys of [T]


 * @argument T This is an object that represents { key: value } pairs. Good to represent forms objects.
 * @returns {i, setV, reset} State value and functions
 */

// Nota importante:
// [useCallback] se usa para memorizar funciones
// evitando que se creen nuevamente en cada render. Esto es útil cuando:
/**
 * 
 * ✅ Pasas funciones como props a componentes hijos
 * ✅ Usas funciones en dependencias de useEffect, useMemo u otros hooks
 * ✅ Evitas renders innecesarios en componentes optimizados con React.memo
 * 
 */

export const useInput = <T extends Record<string, any>>(e: T): any => {
  const [i, setI] = useState(e);

  // const setV = <K extends keyof T>(k: K, v: T[K]) => {
  //   setI((prv) => ({
  //     ...prv,
  //     [k]: v,
  //   }));
  // };

  const memoizedChangeV = useCallback(<K extends keyof T>(k: K, v: T[K]) => {
    setI((prv) => ({
      ...prv,
      [k]: v,
    }));
  }, []); // Here it's does'nt depends from [i] state, cause it uses the [prv] early state to change if any changes in the state [i] ocurs.

  const reset = () => setI(e);

  return { i, memoizedChangeV, reset };
};
