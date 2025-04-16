import React, { useCallback, useEffect, useState, createContext } from "react";
import { NavBar } from "../../layouts/nav-bar/Navbar";
import { SearchBarContainer } from "../../components/ui/task/SearchBarContainer";
import { CreateTaskFormContainer } from "../../forms/create-form/CreateTaskFormContainer";
import { TaskLists } from "../../components/ui/task/task-list/TaskList";
import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../models/interfaces";
import Task from "../../models/domain/task.model";
import FilterBarContainer from "../../components/ui/fiter-bar/FilterBarContainer";
import { setFilterValueAction } from "../../redux/actions/filters.actions";
import { PillComponent } from "../../components/utils/pill/PillComponent";
import { useInput } from "../../hooks";
import { HomeProvider, useHomeContext } from "./HomeContext";
// import { PaginationContainer } from "../../components/ui/pagination/PaginationContainer";
import ToolBarLayout from "../../layouts/tool-bar/ToolBarLayout";
import "./HomePage.scss";
import StageContainer from "../../components/ui/stage/StageContainer";
import AddCreateButtonComponent from "../../components/utils/add-task-btn/AddCreateButtonComponent";
import { TaskStatus } from "../../enums/task-status.enum";

const HomePage = () => {
  // 1. Use the [HomeContext]
  const { f, setF, toggleFormVisibility, s, setS, filterStatus } =
    useHomeContext();

  // 4. Here wee need to get the user logged and put in the title
  const name = "Jonh";

  // 5. Here use date format to display at the HTML.
  const day = "monday";
  const dateDay = 24;
  const month = "march";
  const year = 2024;

  // 2. Dispatch actions if needed.
  const d = useDispatch<Dispatch<IAction<Task | any>>>();

  // 3. We need to [dispatch] an action to [filter] tasks by the list.


  const handleSetFilter = (s: string) => {
    // d(setFilterValueAction(s));
  };

  // Here we need to create a [Context] to pass all logic to children components.

  // TODO("Implement here a memoized component letter");
  return (
    <>
      <main className="App">
        {/* This section is responsible to make the tools interacttion */}
        <section className="tool-bar">
          <ToolBarLayout />
        </section>
        <aside className="app-greeting">
          <h1 className="app-title">Welcome back {name}</h1>
          <h4 className="date">{day}, {dateDay} {month} {year}</h4>
        </aside>

        <aside className="main-task-content">
          <section className="stage-1">
            <StageContainer />
            <aside className="col-1">
              <AddCreateButtonComponent />
              {/* 1. Add the create task form here */}

              <TaskLists status={TaskStatus.TODO} />
            </aside>
            
          </section>
          <section className="stage-2">
            <StageContainer />
            <aside className="col-1">
              <AddCreateButtonComponent />
              {/* 1. Add the create task form here */}

              <TaskLists status={TaskStatus.INPROCCESS} />
            </aside>
          </section>
          <section className="stage-3">
            <StageContainer />
            <aside className="col-1">
              <AddCreateButtonComponent />
              {/* 1. Add the create task form here */}

              <TaskLists status={TaskStatus.PENDING} />
            </aside>
          </section>
          <section className="stage-4">
            <StageContainer />
            <aside className="col-1">
              <AddCreateButtonComponent />
              {/* 1. Add the create task form here */}

              <TaskLists status={TaskStatus.COMPLETED} />
            </aside>
          </section>


          {/* {f && <FilterBarContainer f={toggleFormVisibility} />} */}

          {/* <div className="pills-section">
            {/* <PillComponent {...p} /> <PillComponent /> <PillComponent />

          <PillComponent /> */}
          {/* {filterStatus.map((s, i) => (
              <PillComponent key={i} {...s} />
            ))} */}
          {/* </div> */}

          {/* <div className="form__create">
            {f ? <CreateTaskFormContainer f={toggleFormVisibility} /> : null}
          </div> */}

          {/* <TaskLists /> */}

          {/* <PaginationContainer /> */}

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
