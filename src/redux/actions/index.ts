/**
 * This file is used to export all the actions-creators from the different files in the actions folder
 * This actions creator is responsible for to export and create a determate action
 */

import { Action } from "redux";
import Task from "../../models/domain/task.model";
import { IAction } from "../../models/interfaces/action.interface";
import {  CREATE_TASK, UPDATE_TASK } from "../action-types/task";
import { REMOVE_TASK } from "../action-types/tasks";
import {
  FILTER_TASKS_BY_STATUS,
  SEARCH_TASK,
  SET_SEARCH_TERM,
  SET_SORT_VALUE_FILTER,
  SORT_TASKS_BY_VALUE,
} from "../action-types/filters";
/**
 * This function is responsible to create a new action creator to create a new  task.
 * @param task
 * @returns { any } - the new action creator
 */

export const createTaskAction = (task: Task): IAction<Task> => ({
  type: CREATE_TASK,
  payload: task,
});
/**
 * This action createor is used to remove a task from the list of tasks by ID.
 * @param id  The id of the task to remove
 * @returns { IAction<String> }  A new action.
 */
export const removeTaskAction = (id: string): IAction<string> => ({
  type: REMOVE_TASK,
  payload: id,
});

export const udpateTaskAction = (task: Task): IAction<Task> => ({
  type: UPDATE_TASK,
  payload: task,
});

