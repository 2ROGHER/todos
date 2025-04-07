import React, { JSX } from "react";
import "./Search.scss";

export const SearchComponent = ({
  v,
  onSetV,
}: {
  v: { search: string };
  onSetV: (k: string, v: string) => void;
  // onSearch: <K extends keyof typeof t>(k: K, v: (typeof t)[K]) => void;
}): JSX.Element => {
  // Need to add a local variable to store the value here.
  // const todos = useSelector((state: any) => state.todos);

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#757575"
            fill="none"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          className="search-bar__input"
          value={v.search}
          name="search"
          onChange={(e) => onSetV(e.target.name, e.target.value)}
          placeholder="Search for a task..."
        />
      </div>
      {/* <div className="btn__search">
        <button onClick={() => onSearch("search", t.search)}>search</button>
      </div> */}
    </div>
  );
};
