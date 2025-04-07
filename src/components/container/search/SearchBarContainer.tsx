import { SearchComponent } from "../../ui/search-bar/SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces/action.interface";
import Task from "../../../models/domain/task.model";

import { useSearch } from "../../../hooks/useSearch.hook";
import { useInput } from "../../../hooks";
import { useEffect } from "react";
import { setSearchTermAction } from "../../../redux/actions/filters.actions";

export const SearchBarContainer = ({ f }: { f: () => void }) => {
  const { i, memoizedChangeV } = useInput({ search: "" });
  const d = useDispatch<Dispatch<IAction<Task | any>>>();

  useEffect(()  => {
    // 1. When any changes occur at [i] local state we need to update the [state] at filters reducer in searchTerm to search in real time.
      d(setSearchTermAction(i.search));
  }, [i, memoizedChangeV]);
  return (
    // <SearchComponent
    //   t={s}
    //   onSearch={(k, v) => onChangeI((prv) => ({ ...prv, [k]: v }))}
    // />
    <SearchComponent
    v={i}
     onSetV={memoizedChangeV}
    />
  );
};
