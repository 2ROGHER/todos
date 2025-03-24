import { v4 } from "uuid";
import { REMOVE_TASK, GET_ALL_TASKS } from "../action-types/tasks";

import {
  CREATE_TASK,
  SET_TASK_STATUS,
  UPDATE_TASK,
} from "../action-types/task";
import Task from "../../models/domain/task.model";

import { taskReducer } from "./task.reducer";
import {
  FILTER_TASKS_BY_STATUS,
  SEARCH_TASK,
  SORT_TASKS_BY_VALUE,
} from "../action-types/filters";
import { TaskStatus } from "../../enums/task-status.enum";
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
    TaskStatus.ALL,
    new Date().getTime().toString(),
    new Date().getTime().toString()
  ),
  new Task(
    v4(),
    "Default Task 2",
    "Default Content Task 2",

    TaskStatus.ALL,
    new Date().getTime().toString(),
    new Date().getTime().toString()
  ),
  new Task(
    v4(),
    "Default Task 3",
    "Default Content Task 3",
    TaskStatus.ALL,
    new Date().getTime().toString(),
    new Date().getTime().toString()
  ),
  new Task(
    v4(),
    "Default Task 4",
    "Default Content Task 4",

    TaskStatus.ALL,
    new Date().getTime().toString(),
    new Date().getTime().toString()
  ),
];

export const tasksReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): Task[] | any => {
  switch (type) {
    case CREATE_TASK:
      // This method is reused the reducer [task] to create a new Task and add this Task to array list.
      return [...state, taskReducer({}, { type, payload })];

    // This options allows us to [remove] a task from the list of tasks
    case REMOVE_TASK:
      return state.filter((t: Task) => t.id !== payload);

    // This option allow us to [update] a task by [id] by the list of tasks
    case UPDATE_TASK:
      // TODO: Improve this reducer method to update the task
      return [
        ...state.filter((t: Task) => {
          return t.id == payload.id ? taskReducer(t, { type, payload }) : t;
        }),
      ];

    // This case allows us to [search] a task by the [title and content] by the lists of tasks
    case SEARCH_TASK:
      return [...state.filter((t: Task) => taskReducer(t, { type, payload }))];

    // This case allows us to [filter] the tasks by the [status] of the task
    case FILTER_TASKS_BY_STATUS:
      console.log(payload);
      return state.filter((t: Task) => t._status === payload);

    // This allow us to set the status of [task] at the list
    case SET_TASK_STATUS:
      console.log(payload.id, payload.s);
      // return [
      //   ...state.map((t: Task) =>
      //     t.id == payload.id ? { ...t, _status: payload.s } : t
      //   ),
      // ];
      return state.map((t: Task) => taskReducer(t, { type, payload }));
    // This case allows us to sort the task by a [value]
    case SORT_TASKS_BY_VALUE:
      return [...state.filter((t: Task) => taskReducer(t, { type, payload }))];

    // This case allows us to filter the task by [favorites] status.

    case GET_ALL_TASKS:
      return state;

    // If anything case is acomplished, return the state.
    default:
      return state;
  }
};
