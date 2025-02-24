import React, { JSX, useEffect } from "react";
import "./Search.scss";

export const SearchBar = ({
  term,
  onSetTerm,
  onSearch,
}: {
  term: string;
  onSetTerm: (e: any) => void;
  onSearch: (e: any) => void;
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
            onChange={(e) => onSetTerm(e.target.value)}
            placeholder="Search for a task..."
          />
        </div>
        <div className="search-bar__button">
          <button onClick={onSearch}>search</button>
        </div>
      </div>

      <code>
        <pre>{JSON.stringify(term, null, 2)}</pre>
      </code>
    </>
  );
};
