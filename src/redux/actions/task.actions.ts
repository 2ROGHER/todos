import { IAction } from "../../models/interfaces";
import { SET_TASK_STATUS } from "../action-types";

export const addTaskStatusAction = (s: string, id: string): IAction<any> => ({
  type: SET_TASK_STATUS,
  payload: { s, id },
});
