export interface IState<T = any> {
  todos: T[];
  term: T;
  filtered: T[];
}
