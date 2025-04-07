import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../models/interfaces/action.interface";
import {
  searchTaskByTermValueAction,
} from "../redux/actions";
import Task from "../models/domain/task.model";
import { useInput } from "./useInput.hook";
/**
 * [i]: Represents the (user input value)
 * [setI]: Represents the function used to update the state.
 * [k,v]: Represents a pair of key and value.
 * [onChangeI] represents the functios used to update the [i] object.
 * @param s
 * @returns
 */
export const useSearch = <T extends Record<string, any>>(
  s: T
) => {
  // [T, Function] maybe we can return a [valu, function]
//   const [t, setT] = useState<T>(s);
  const d = useDispatch<Dispatch<IAction<string | Task>>>();
  const { i, memoizedChangeV, _} = useInput(s);

//   const onChangeI = useCallback(<K extends keyof T>(k: K, v: T[K]) => {
//     // {k: key, v: T[K] <> [k]: v}
//     setT((prv) => ({
//       ...prv,
//       [k]: v,
//     }));
//   }, []);

  useEffect(() => {
    // 1. Dispatch action to search at [Tasks] list
    // 2. If exists change in [t] we need to dispatch an action to reducer.
    let { search } = i;
    let t = search.trim(); // We need to add this to improve the performace wheater user 

    // !t ? d(getAllTasksAction()) : d(searchTaskByTermValueAction(t));
  }, [i, d]);

  return [i,  memoizedChangeV] as const;
};
