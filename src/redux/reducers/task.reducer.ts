// This initila state is declared with a empty object this cause the Task class is a object.

import { v4 } from "uuid";
import Task from "../../models/domain/task.model";
import {
  ADD_FAVORITES,
  ARCHIVED_TASK,
  CREATE_TASK,
  SET_STATUS,
  UPDATE_TASK,
} from "../action-types/task";


const initialState: any = {}

export const taskReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any  }
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

    case UPDATE_TASK:
      return new Task(
        payload.id,
        payload.title,
        payload.content,
        payload.completed,
        payload.favorites,
        payload.deleted,
        payload.archived
      );

    case ADD_FAVORITES:
      return {
        ...state,
        favorites: !payload,
      } as Task;

    case ARCHIVED_TASK:
      return {
        ...state,
        archived: !payload,
      };

    
    
    case SET_STATUS: 
        return {
            ...state,
            completed: !payload
        }
    default:
      return state;
  }
};
