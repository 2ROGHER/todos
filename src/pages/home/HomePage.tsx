import React, { useCallback, useState } from "react";
import { NavBar } from "../../layouts/nav-bar/Navbar";
import { SearchBarContainer } from "../../components/container/search/SearchBarContainer";
import { CreateTaskFormContainer } from "../../forms/container/create-todo/CreateTaskFormContainer";
import { TaskLists } from "../../components/container/task-list/TaskList";
import { useLocalStorage } from "../../hooks/useLocalStorage.hook";
import { useNavigate } from "react-router";
import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../models/interfaces";
import Task from "../../models/domain/task.model";
import { filterTaskByStatus } from "../../redux/actions/colors.actions";
import { TaskStatus } from "../../enums/task-status.enum";
import FilterBarContainer from "../../components/container/filter/FilterBarContainer";

export const HomePage = () => {
  const navigate = useNavigate();
  const d = useDispatch<Dispatch<IAction<Task | any>>>();

  const [f, setF] = useState(true);

  const toggleFormVisibility = useCallback(() => {
    setF((prv) => !prv);
  }, []);

  const handleFilterFavorires = () => {
    d(filterTaskByStatus(TaskStatus.FAVORITE));
  };

  // TODO("Implement here a memoized component letter");
  return (
    <main className="App">
      {/* This section is used to render the navigation bar */}
      <section className="side-bar">
        <NavBar
          active={f}
          onSetActiveForm={setF}
          onFilterFavs={handleFilterFavorires}
        />
      </section>

      <aside className="main">
        

        {f && <FilterBarContainer f={toggleFormVisibility} />}
        

        <div className="form__create">
          {f ? <CreateTaskFormContainer f={toggleFormVisibility} /> : null}
        </div>

        <section className="main-content">
          <TaskLists />
        </section>
      </aside>
    </main>
  );
};
