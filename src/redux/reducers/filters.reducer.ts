import {
  SEARCH_TASK,
  SET_FILTER_VALUE,
  SET_FILTERS_VALUES,
  SET_SORT_VALUE_FILTER,
  SET_TASK_STATUS,
} from "../action-types/filters";
import { SET_SEARCH_TERM } from "../action-types/filters";

import Task from "../../models/domain/task.model";
import { v4 } from "uuid";
import { TaskStatus } from "../../enums/task-status.enum";
import { FilterState } from "../../models/interfaces/filter-state.interface";
import { IAction, IPayload } from "../../models/interfaces";

const initialState: FilterState = {
  searchTerm: "",
  filterValue: "",
  sortBy: "",
  filteredItems: [] as string[],
};

export const filtersReducer = (
  state = initialState,
  action: IAction,
) => {
  switch (action.type) {
    // Here it's responsability here is to set the (term value) to search the tasks at tasks list.
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.payload };

    case SET_SORT_VALUE_FILTER:
      return { ...state, sortBy: action.payload };

    case SET_FILTERS_VALUES:
    return state;
    //  return {
    //    ...state,
    //    filteredItems: state.filteredItems.includes(action.payload)
    //      ? state.filteredItems.filter((item) => item !== action.payload)
    //      : [...state.filteredItems, action.payload], 
    //  };

    default:
      return state;
  }
};
