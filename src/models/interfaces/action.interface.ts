import { Action } from "redux";
import Task from "../domain/task.model";
import { PayloadAction } from "@reduxjs/toolkit";
/**
 * This interface is used to represent the type of common Action when
 * we works with Actions in Redux
 */

export interface IAction<T = any> extends Action {
  type: string;
  payload?: T;
}


