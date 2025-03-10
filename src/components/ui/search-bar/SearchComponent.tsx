import React, { JSX } from "react";
import "./Search.scss";

export const SearchComponent = ({
  t,
  onSearch,
}: {
  t: { search: string };
  onSearch: (k: string, v: string) => void;
  // onSearch: <K extends keyof typeof t>(k: K, v: (typeof t)[K]) => void;
}): JSX.Element => {
  // Need to add a local variable to store the value here.
  // const todos = useSelector((state: any) => state.todos);

  return (
    <>
      <div className="search-bar">
        <div className="search-bar__input">
          <input
            type="text"
            className="search-bar__input"
            value={t?.search}
            name="search"
            onChange={(e) => onSearch(e.target.name, e.target.value)}
            placeholder="Search for a task..."
          />
        </div>
        <div className="search-bar__button">
          <button onClick={() => onSearch("search", t.search)}>search</button>
        </div>
      </div>

      <code>
        <pre>{JSON.stringify(t, null, 2)}</pre>
      </code>
    </>
  );
};
