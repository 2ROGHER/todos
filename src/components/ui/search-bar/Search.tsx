import React, { JSX, useState } from "react";
import { SearchTerm } from "../../../models/interfaces/search-term.interface";

export const SearchBar = ({ value }: { value: string }): JSX.Element => {
  // Need to add a local variable to store the value here.
  const [searchTerm, setSearchTerm] = useState(value);
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a task..."
      />

      <code>
        <pre>{JSON.stringify(searchTerm, null, 2)}</pre>
      </code>
    </div>
  );
};
