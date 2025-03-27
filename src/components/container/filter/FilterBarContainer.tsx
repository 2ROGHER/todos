import React from "react";
import { SearchBarContainer } from "../search/SearchBarContainer";
import FilterBarComponent from "../../ui/fiter-bar/FilterBarComponent";
import "./FilterBarContainer.scss";

function FilterBarContainer({ f, g }: { f: () => void; g: (e: any) => void }) {
  return (
    <section className="filter-bar">
      <div className="filter-bar__content">
        <FilterBarComponent g={g} />
        <SearchBarContainer f={f} />
      </div>
    </section>
  );
}

export default FilterBarContainer;
