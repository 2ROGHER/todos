/**
 * This file is responsible to combine all reducers to get only sigle root reducer
 */

import { combineReducers } from "redux";
import { todosReducer } from "./todos.reducer";
//This method allows us to combine all reducers here to export a single root reducer to store.
const rootReducer = combineReducers({
  todos: todosReducer, 
  // TODO: Add more reducer here.
});

export default rootReducer;
