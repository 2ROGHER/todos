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

const initialState: any = {};

export const taskReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): Task | any => {
  switch (type) {
    case CREATE_TASK:
      // This reducer method return a new Task instance object created
      return new Task(
        v4(),
        payload.title,
        payload.content,
        payload.completed,
        payload.favorites,
        payload.deleted,
        payload.archived
      );
      // return { ...state, id: v4(), ...payload } as Task;

    case UPDATE_TASK:
      // return new Task(
      //   payload.id,
      //   payload.title,
      //   payload.content,
      //   payload.completed,
      //   payload.favorites,
      //   payload.deleted,
      //   payload.archived
      // );
      return { ...state, ...payload } as Task;

    case SEARCH_TASK:
    console.log(state, payload)
      return (
        state.title.toLowerCase().includes(payload) ||
        state.content.toLowerCase().includes(payload)
      ); // this return true o false

    case SET_TASK_STATUS:
      return { ...state, status: payload } as Task;

    case FILTER_TASKS_BY_STATUS:
      return state.status == payload;

    case SET_SORT_VALUE:
      return { ...state, sortBy: payload } as Task;

    case SORT_TASKS_BY_VALUE:
      return state.sortBy == payload;

    default:
      return state;
  }
};
