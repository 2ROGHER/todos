import { v4 } from "uuid";
import {
  CREATE_TODO,
  FILTER_TASKS,
  GET_ALL_TASKS,
  GET_TODO_BY_ID,
  REMOVE_TODO,
  SEARCH_TODO_BY_NAME,
  SET_SEARCH_TERM,
  UPDATE_TODO,
} from "../action-types";
import Task from "../../models/domain/task.model";
import { IState } from "../../models/interfaces/state.interface";

/**
 * Initial state of the todos reducer.
 * This state represents the whole state aplication for todos reducer.
 */
// TODO: modeling the domain of the returned types.
const initialState: IState<any> = {
  todos: [
    new Task(v4() as string, "Default Task", "Default Content Task", false),
    new Task(v4(), "Default Task 2", "Default Content Task 2", false),
    new Task(v4(), "Default Task 3", "Default Content Task 3", false),
    new Task(v4(), "Default Task 4", "Default Content Task 4", false),
  ],
  term: "",
  filtered: [],
};

export const todosReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case CREATE_TODO:
      // This should be create a new task and copy the existing todos then add new todo appended.

      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo: Task) => todo.id !== payload)],
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todos: [...state.todos.filter((todo: Task) => todo.id === payload.id)],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo: Task) => {
            if (todo.id == payload.id) {
              return new Task(
                payload.id,
                payload.title,
                payload.content,
                payload.completed
              );
            }
            return todo;
          }),
        ],
      };

    case SEARCH_TODO_BY_NAME:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo: Task) =>
            todo.title.toLowerCase().includes(payload)
          ),
        ],
      };

    case GET_ALL_TASKS:
      return state;

    case SET_SEARCH_TERM:
      return {
        ...state,
        term: payload,
      };

    case FILTER_TASKS:
      return {
        ...state,
        filtered: [
          ...state.todos.filter(
            (todo: Task) =>
              todo.title.toLowerCase().includes(state.term) ||
              todo.content.toLowerCase().includes(state.term)
          ),
        ],
      };
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
