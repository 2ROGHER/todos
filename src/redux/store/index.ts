/**
 * This entry points file represents the Store to manage the application state.
 */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// Configuration the store to able Redux Devtools on the Browser.

// This works successfully with Redux@4.x.x
// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

//
// Now Redux works with the version Redux@5.x.x
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
