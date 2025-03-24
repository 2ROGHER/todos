import { IAction } from "../../models/interfaces";
import { FILTER_TASKS_BY_STATUS } from "../action-types";

export const filterTaskByStatus = (s: string): IAction<string> => ({
  type: FILTER_TASKS_BY_STATUS,
  payload: s,
});
