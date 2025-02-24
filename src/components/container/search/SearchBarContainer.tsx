import React, { useEffect, useState } from "react";
import { SearchBar } from "../../ui/search-bar/Search";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces/action.interface";
import Task from "../../../models/domain/task.model";
import {
  filterTasksAction,
  searchTaskByName,
  setTermAction,
} from "../../../redux/actions";

export const SearchBarContainer = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch<Dispatch<IAction<string | Task>>>();
  const value  = useSelector((state: any) => state.todos.term);
  console.log(value);

  /**
   * This method is responsible for search any task in the state and show the tasks
   * in the client side
   * @returns {void}
   */

  const handleSearchTodo = () => {};

  useEffect(() => {
    dispatch(setTermAction(term));
    dispatch(filterTasksAction());
  }, [term]);

  return (
    <SearchBar term={term} onSetTerm={setTerm} onSearch={handleSearchTodo} />
  );
};
