// This initila state is declared with a empty object this cause the Task class is a object.

import { v4 } from "uuid";
import Task from "../../models/domain/task.model";
import { CREATE_TASK, UPDATE_TASK } from "../action-types/task";

import { SET_TASK_STATUS } from "../action-types/filters";

import { SEARCH_TASK } from "../action-types/filters";
import { TaskStatus } from "../../enums/task-status.enum";
import { p } from "react-router/dist/development/fog-of-war-Cm1iXIp7";

var initialState!: Task;

export const taskReducer = (
  state: Task = initialState,
  { type, payload }: { type: string; payload: any }
): Task | any => {
  switch (type) {
    case CREATE_TASK:
      // This reducer method return a new Task instance object created
      return new Task(
        v4(),
        payload.title,
        payload.content,
        TaskStatus.DEFAULT, // This [status] is for default
        new Date().getTime().toString(), // TODO("This [task] attribute should be to udpated letter")
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
      // return state.id == payload.id ? { ...state, status: payload.s } as Task : state;
      return state.id == payload.id
        ? new Task(
            payload.id,
            state.title,
            state.content,
            payload.s,
            state.createdAt,
            state.updatedAt
          )
        : state;

    // case FILTER_TASKS_BY_STATUS:
    //   return state.status === payload; // This mathes whether if [task status] is equal to payload.

    // case SORT_TASKS_BY_VALUE:
    //   return state.sortBy == payload;

    default:
      return state;
  }
};
