// This initila state is declared with a empty object this cause the Task class is a object.

import { v4 } from "uuid";
import Task from "../../models/domain/task.model";
import {
  CREATE_TASK,
  SET_SORT_VALUE,
  SET_TASK_STATUS,
  UPDATE_TASK,
} from "../action-types/task";

import {
  FILTER_TASKS_BY_STATUS,
  SORT_TASKS_BY_VALUE,
} from "../action-types/filters";

import { SEARCH_TASK } from "../action-types/filters";
import { TaskStatus } from "../../enums/task-status.enum";

const initialState: Task | any = {};

export const taskReducer = (
  state: Task | any = initialState,
  { type, payload }: { type: string; payload: any }
): Task | {} => {
  switch (type) {
    case CREATE_TASK:
      // This reducer method return a new Task instance object created
      return new Task(
        v4(),
        payload.title,
        payload.content,
        TaskStatus.ALL, // This [status] is for default
        new Date().getTime().toString(),
        new Date().getTime().toString()
      );
    // return { ...state, id: v4(), ...payload } as Task;

    case UPDATE_TASK:
      return { ...state, ...payload } as Task;

    case SEARCH_TASK:
      return (
        state.title.toLowerCase().includes(payload) ||
        state.content.toLowerCase().includes(payload)
      ); // this return true o false

    // This case allows us to set the [status] of each task.
    case SET_TASK_STATUS:
      return state._id == payload.id ? { ...state, _status: payload.s } : state;

    case FILTER_TASKS_BY_STATUS:
      return state._status === payload; // This mathes whether if [task status] is equal to payload.

    case SORT_TASKS_BY_VALUE:
      return state.sortBy == payload;

    default:
      return state;
  }
};
