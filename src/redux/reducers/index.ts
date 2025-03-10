/**
 * This file is responsible to combine all reducers to get only sigle root reducer
 */

import { combineReducers } from "redux";
import { todosReducer } from "./tasks.reducer";
import Task from "../../models/domain/task.model";
import { filtersReducer } from "./filters.reducer";
import { uiReducer } from "./ui.reducer";
//This method allows us to combine all reducers here to export a single root reducer to store.


// TODO: Implement custom Middlewares to apply to save and login an user to the page
const rootReducer = combineReducers({
  todos: todosReducer, 
  filters: filtersReducer,
  // ui: uiReducer,
  
  // TODO: Add more reducer here.
});

export default rootReducer;
export * from './filters.reducer';
export * from './task.reducer';
export * from './tasks.reducer';