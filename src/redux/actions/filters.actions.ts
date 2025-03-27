import { IAction } from "../../models/interfaces";
import { SET_FILTER_VALUE, SET_SEARCH_TERM } from "../action-types";

export const setSearchTermAction = (s: string): IAction<string> => ({
  type: SET_SEARCH_TERM,
  payload: s,
});

export const setFilterValueAction = (f: string): IAction<string> => ({
  type: SET_FILTER_VALUE,
  payload: f,
});
