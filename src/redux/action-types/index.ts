/**
 * In this file goes all actions types to dispatch actions to the store.
 * This type-actions represents actions that can be dispatched to the store.
 */

// CRUD actions 
export const CREATE_TODO = "CREATE TODO";
export const REMOVE_TODO = "REMOVE TODO";
export const UPDATE_TODO = "UPDATE TODO";
export const GET_TODO_BY_ID = "GET TODO BY ID";
export const SEARCH_TODO_BY_NAME = "SEARCH TODO BY NAME";

// Retrieves all todos 
export const GET_ALL_TASKS = "GET_ALL_TASKS";

// Other actions types
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SEARCH_TOD = "SEARCH_TODO";
export const SET_STATUS = "SET_STATUS";
export const DROP_TODO = "DROP_TODO";

// Aditional actions types 
export const FILTER_TASKS = "FILTER TASKS";
export const SET_SEARCH_TERM = "SET SEARCH TERM";
