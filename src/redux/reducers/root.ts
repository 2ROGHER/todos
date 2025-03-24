/**
 * This file is responsible to combine all reducers to get only sigle root reducer
 */

import { combineReducers } from "redux";
import { tasksReducer } from "./tasks.reducer";
import { filtersReducer } from "./filters.reducer";
import { uiReducer } from "./ui.reducer";
import { loginReducer } from "./login.reducer";
import { singUpReducer } from "./signup.reducer";
//This method allows us to combine all reducers here to export a single root reducer to store.

// TODO: Implement custom Middlewares to apply to save and login an user to the page
const rootReducer = combineReducers({
  todos: tasksReducer,
  filters: filtersReducer,
  // ui: uiReducer,
  login: loginReducer,
  signup: singUpReducer

  // TODO: Add more reducer here.
});

export default rootReducer;
