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
import { IPayload } from "../../models/interfaces";

const initialState: FilterState = {
  searchTerm: "",
  filterValue: "",
  sortBy: "",
  filteredItems: [],
};

export const filtersReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    // Here it's responsability here is to set the (term value) to search the tasks at tasks list.
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };

    case SET_FILTER_VALUE:
      return { ...state, filterValue: payload };

    case SET_SORT_VALUE_FILTER:
      return { ...state, sortBy: payload };

    case SET_FILTERS_VALUES:
     return {
       ...state,
       filteredItems: state.filteredItems.includes(payload)
         ? state.filteredItems.filter((item) => item !== payload)
         : [...state.filteredItems, payload],
     };

    default:
      return state;
  }
};
