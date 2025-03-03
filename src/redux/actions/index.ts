/**
 * This file is used to export all the actions-creators from the different files in the actions folder
 * This actions creator is responsible for to export and create a determate action
 */

import { Action } from "redux";
import Task from "../../models/domain/task.model";
import { IAction } from "../../models/interfaces/action.interface";
import { 
  CREATE_TASK,
  UPDATE_TASK,

} from '../action-types/task';
import { REMOVE_TASK, GET_ALL_TASKS} from "../action-types/tasks";
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

// export const getTaskByIdAction = (id: string): IAction<string> => ({
//   type: GET_TASK_BY_ID,
//   payload: id,
// });

// export const searchTaskByName = (name: string): IAction<string> => ({
//   type: SEARCH_TASK_BY_NAME,
//   payload: name,
// });

/**
 * This action creator is used to retrieve all task by the tasks list.
 * @returns { IAction []} All list of tasks.
 */
export const getAllTasksAction = () => ({
  type: GET_ALL_TASKS,
});

// export const setTermAction = (term: string): IAction<string> => ({
//   type: SET_SEARCH_TERM,
//   payload: term,
// });

// export const filterTasksAction = (): IAction<string> => ({
//   type: FILTER_TASKS,
// });
