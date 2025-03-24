import React from "react";
import { SearchBarContainer } from "../search/SearchBarContainer";
import FilterBarComponent from "../../ui/fiter-bar/FilterBarComponent";
import "./FilterBarContainer.scss";

function FilterBarContainer({ f }: { f: () => void }) {
  return (
    <section className="filter-bar">
      <div className="filterbar-box">
        <FilterBarComponent />
        <SearchBarContainer f={f} />
      </div>
    </section>
  );
}

export default FilterBarContainer;

