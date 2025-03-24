import { SearchComponent } from "../../ui/search-bar/SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces/action.interface";
import Task from "../../../models/domain/task.model";

import { useSearch } from "../../../hooks/useSearch.hook";

export const SearchBarContainer = ({ f }: { f: () => void }) => {
  //TODO: use [useInput] custom Hook instaend.
  // const [s, onChangeI] = useSearch<Record<string, any>>({ search: "" });
  const [s, setS] = useSearch({ search: "" });

  const dispatch = useDispatch<Dispatch<IAction<string | Task>>>();
  const state = useSelector((state: any) => state);

  return (
    // <SearchComponent
    //   t={s}
    //   onSearch={(k, v) => onChangeI((prv) => ({ ...prv, [k]: v }))}
    // />
    <SearchComponent
      t={s}
      // onSearch={(k: keyof typeof s, v: (typeof s)[typeof k]) => setS(k, v)}
      onSearch={setS}
      onHiddeSearchbar={f}
    />
  );
};
