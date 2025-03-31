import React, { useCallback, useEffect, useState, createContext } from "react";
import { NavBar } from "../../layouts/nav-bar/Navbar";
import { SearchBarContainer } from "../../components/container/search/SearchBarContainer";
import { CreateTaskFormContainer } from "../../forms/container/create-todo/CreateTaskFormContainer";
import { TaskLists } from "../../components/container/task-list/TaskList";
import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../models/interfaces";
import Task from "../../models/domain/task.model";
import FilterBarContainer from "../../components/container/filter/FilterBarContainer";
import { setFilterValueAction } from "../../redux/actions/filters.actions";
import { PillComponent } from "../../components/utils/pill/PillComponent";
import { useInput } from "../../hooks";
import { HomeProvider, useHomeContext } from "./HomeContext";

const HomePage = () => {
  // 1. Use the [HomeContext]
  const { f, setF, toggleFormVisibility, s, setS, filterStatus } =
    useHomeContext();

  // 2. Dispatch actions if needed.
  const d = useDispatch<Dispatch<IAction<Task | any>>>();

  // 3. We need to [dispatch] an action to [filter] tasks by the list.

  console.log("changing at home", s);

  const handleSetFilter = (s: string) => {
    d(setFilterValueAction(s));
  };

  // Here we need to create a [Context] to pass all logic to children components.

  // TODO("Implement here a memoized component letter");
  return (
    <>
      <main className="App">
        {/* This section is used to render the navigation bar */}
        <section className="side-bar">
          <NavBar
            active={f}
            onSetActiveForm={setF}
            onSetFilter={handleSetFilter}
          />
        </section>

        <aside className="main">
          {f && <FilterBarContainer f={toggleFormVisibility} />}

          <div className="pills-section">
            {/* <PillComponent {...p} /> <PillComponent /> <PillComponent />

          <PillComponent /> */}
            {filterStatus.map((s, i) => (
              <PillComponent key={i} {...s} />
            ))}
          </div>

          <div className="form__create">
            {f ? <CreateTaskFormContainer f={toggleFormVisibility} /> : null}
          </div>

          <section className="main-content">
            <TaskLists />
          </section>
        </aside>
      </main>
    </>
  );
};

// 2. Involves `HomePage` with `HomeProvider`
export const HomePageProvider: React.FC = () => (
  <HomeProvider>
    <HomePage />
  </HomeProvider>
);
