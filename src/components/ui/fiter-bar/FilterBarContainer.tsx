import React from "react";
import { SearchBarContainer } from "../task/SearchBarContainer";
import FilterBarComponent from "./FilterBarComponent";
import "./FilterBarContainer.scss";
import { useHomeContext } from "../../../pages/home/HomeContext";

function FilterBarContainer({ f }: { f: () => void }) {
  // 1. Use the custom hook [useHomeContet] to handle acctions here without pass props to father to children.
  const { s, setS } = useHomeContext();
  return (
    <section className="filter-bar">
      <div className="filter-bar__content">
        <FilterBarComponent g={setS} />
        <SearchBarContainer f={f} />
      </div>
    </section>
  );
}

export default FilterBarContainer;
