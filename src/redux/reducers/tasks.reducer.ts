import { v4 } from "uuid";
import { REMOVE_TASK} from "../action-types/tasks";

import { CREATE_TASK, SET_TASK_STATUS, UPDATE_TASK } from "../action-types/";
import Task from "../../models/domain/task.model";

import { taskReducer } from "./task.reducer";
import {
  FILTER_TASKS_BY_STATUS,
  SEARCH_TASK,
  SORT_TASKS_BY_VALUE,
} from "../action-types/filters";
import { TaskStatus } from "../../enums/task-status.enum";
import { TaskState } from "../../models/interfaces";
import { Action } from "redux";

/**
 * Initial state of the todos reducer.
 * This state represents the whole state aplication for todos reducer.
 */
// TODO: modeling the domain of the returned types.
var initialState: TaskState = {
  tasks: [
    new Task(
      v4() as string,
      "Default Task",
      "Default Content Task",
      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 2",
      "Default Content Task 2",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 3",
      "Default Content Task 3",
      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 4",
      "Default Content Task 4",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 5",
      "Default Content Task 5",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 6",
      "Default Content Task 6",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 7",
      "Default Content Task 7",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 8",
      "Default Content Task 8",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 9",
      "Default Content Task 9",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
    new Task(
      v4(),
      "Default Task 10",
      "Default Content Task 10",

      TaskStatus.PENDING,
      new Date().getTime().toString(),
      new Date().getTime().toString()
    ),
  ],
};
export const tasksReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): Task[] | any => {
  switch (type) {
    case CREATE_TASK:
      // This method is reused the reducer [task] to create a new Task and add this Task to array list.
      return {
        ...state,
        tasks: [...state.tasks, taskReducer({} as Task, { type, payload })],
      };

    // This options allows us to [remove] a task from the list of tasks
    // case REMOVE_TASK:
    //   return {
    //     ...state,
    //     tasks: [...state.tasks.filter((t: Task) => t.id !== payload)],
    //   };

    // This option allow us to [update] a task by [id] by the list of tasks
    case UPDATE_TASK:
      // TODO: Improve this reducer method to update the task
      return {
        ...state,
        tasks: state.tasks.filter((t: Task) => {
          return t.id == payload.id ? taskReducer(t, { type, payload }) : t;
        }),
      };


    // This allow us to set the status of [task] at the list
    case SET_TASK_STATUS:
      // TODO ("Here we need to improve only render the task status no the complete array with tasks")

      return {
        ...state,
        tasks: [
          ...state.tasks.map((t: Task) => taskReducer(t, { type, payload })),
        ],
      };

    // This case allows us to sort the task by a [value]
    case SORT_TASKS_BY_VALUE:
      return;


    // This case allows us to filter the task by [favorites] status.

    // If anything case is acomplished, return the state.
    default:
      return state;
  }
};
