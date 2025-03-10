import {
  SEARCH_TASK,
  SET_SORT_VALUE_FILTER,
  SET_TASK_STATUS_FILTER,
} from "../action-types/filters";
import { SET_SEARCH_TERM } from "../action-types/filters";

const initialState: {} = {
  search: "",
  status: "",
  sortBy: "",
};

export const filtersReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: string | any }
) => {
  switch (type) {
    // Here it's responsability here is to set the (term value) to search the tasks at tasks list.
    case SET_SEARCH_TERM:
      return {
        ...state,
        search: payload,
      };

    case SET_TASK_STATUS_FILTER:
      return {
        ...state,
        status: payload,
      };

    case SET_SORT_VALUE_FILTER:
      return { ...state, sortBy: payload };

    case SEARCH_TASK:
      return state;

    default:
      return state;
  }
};
