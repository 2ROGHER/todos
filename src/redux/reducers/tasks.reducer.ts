import { v4 } from "uuid";
import { REMOVE_TASK, GET_ALL_TASKS } from "../action-types/tasks";

import { CREATE_TASK, UPDATE_TASK } from "../action-types/task";
import Task from "../../models/domain/task.model";
import { IState } from "../../models/interfaces/state.interface";

import { taskReducer } from "./task.reducer";
/**
 * Initial state of the todos reducer.
 * This state represents the whole state aplication for todos reducer.
 */
// TODO: modeling the domain of the returned types.
const initialState: Task[] = [];

export const todosReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): Task[] | any => {
  switch (type) {
    case CREATE_TASK:
      console.log('task is', payload)
      // This method is reused the reducer [task] to create a new Task and add this Task to array list.
      return [...state, taskReducer({}, { type, payload })];

    case REMOVE_TASK:
      return state.filter((todo: Task) => todo.id !== payload.id);

    case UPDATE_TASK:
      // TODO: Improve this reducer method to update the task
      return [
        ...state,
        ...state.filter((todo: Task) => {
          if (todo.id === payload.id) {
            return taskReducer({}, { type, payload: todo });
          }
        }),
      ];

    // case SEARCH_TODO_BY_NAME:
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos.filter((todo: Task) =>
    //         todo.title.toLowerCase().includes(payload)
    //       ),
    //     ],
    //   };

    // case FILTER_TASKS:
    //   return {
    //     ...state,
    //     filtered: [
    //       ...state.todos.filter(
    //         (todo: Task) =>
    //           todo.title.toLowerCase().includes(state.term) ||
    //           todo.content.toLowerCase().includes(state.term)
    //       ),
    //     ],
    //   };

    case GET_ALL_TASKS:
      return state;
    // If anything case is acomplished, return the state.
    default:
      return state;
  }
};

// todos: [
//     new Task(v4() as string, "Default Task", "Default Content Task", false),
//     new Task(v4(), "Default Task 2", "Default Content Task 2", false),
//     new Task(v4(), "Default Task 3", "Default Content Task 3", false),
//     new Task(v4(), "Default Task 4", "Default Content Task 4", false),
//   ],
