import { v4 } from "uuid";
import { REMOVE_TASK, GET_ALL_TASKS } from "../action-types/tasks";

import { CREATE_TASK, UPDATE_TASK } from "../action-types/task";
import Task from "../../models/domain/task.model";
import { IState } from "../../models/interfaces/state.interface";

import { taskReducer } from "./task.reducer";
import {
  FILTER_TASKS_BY_STATUS,
  SEARCH_TASK,
  SORT_TASKS_BY_VALUE,
} from "../action-types/filters";
/**
 * Initial state of the todos reducer.
 * This state represents the whole state aplication for todos reducer.
 */
// TODO: modeling the domain of the returned types.
const initialState: Task[] = [
  new Task(
    v4() as string,
    "Default Task",
    "Default Content Task",
    false,
    false,
    false,
    false
  ),
  new Task(
    v4(),
    "Default Task 2",
    "Default Content Task 2",
    false,
    false,
    false,
    false
  ),
  new Task(
    v4(),
    "Default Task 3",
    "Default Content Task 3",
    false,
    false,
    false,
    false
  ),
  new Task(
    v4(),
    "Default Task 4",
    "Default Content Task 4",
    false,
    false,
    false,
    false
  ),
];

export const todosReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): Task[] | any => {
  switch (type) {
    case CREATE_TASK:
      // This method is reused the reducer [task] to create a new Task and add this Task to array list.
      return [...state, taskReducer({}, { type, payload })];

    case REMOVE_TASK:
      return state.filter((t: Task) => t.id !== payload);

    case UPDATE_TASK:
      // TODO: Improve this reducer method to update the task
      return [
        ...state.filter((t: Task) => {
          return t.id == payload.id ? taskReducer(t, { type, payload }) : t;
        }),
      ];

    case SEARCH_TASK:
      return [...state.filter((t: Task) => taskReducer(t, { type, payload }))];

    case FILTER_TASKS_BY_STATUS:
      return [...state.filter((t: Task) => taskReducer(t, { type, payload }))];

    case SORT_TASKS_BY_VALUE:
      return [...state.filter((t: Task) => taskReducer(t, { type, payload }))];

    case GET_ALL_TASKS:
      return [...state];

    // If anything case is acomplished, return the state.
    default:
      return state;
  }
};

