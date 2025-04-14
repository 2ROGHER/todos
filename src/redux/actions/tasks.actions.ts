import Task from "../../models/domain/task.model";
import { IAction } from "../../models/interfaces";
import {
  FILTER_TASKS_BY_STATUS,
  SET_FETCHED_DATA_TO_TASKS,
} from "../action-types";

export const filterTaskByStatus = (s: string): IAction<string> => ({
  type: FILTER_TASKS_BY_STATUS,
  payload: s,
});

export const setFetchDataToTasks = (a: Task[]): IAction<any> => ({
  type: SET_FETCHED_DATA_TO_TASKS,
  payload: a,
});
