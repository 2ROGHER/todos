import React, { useCallback, useEffect, useState } from "react";
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
import { filterTaskByStatus } from "../../redux/actions/tasks.actions";
import { TaskStatus } from "../../enums/task-status.enum";
import FilterBarContainer from "../../components/container/filter/FilterBarContainer";
import { addTaskStatusAction } from "../../redux/actions/task.actions";
import { setFilterValueAction } from "../../redux/actions/filters.actions";
import { PillComponent } from "../../components/utils/pill/PillComponent";

export const HomePage = () => {
  const navigate = useNavigate();
  const d = useDispatch<Dispatch<IAction<Task | any>>>();
  const [statues, setStatues] = useState<{ status: string }[]>([
    {
      status: "ALL",
    },
  ]);

  const [f, setF] = useState(true);
  const [p, setP] = useState({ status: "" });

  const toggleFormVisibility = useCallback(() => {
    setF((prv) => !prv);
  }, []);

  useEffect(() => {
    // Agregamos el nuevo estado solo si no está duplicado
    setStatues((prev) => {
      if (!prev.some((item) => item.status === p.status)) {
        return [...prev, { status: p.status }];
      }
      return prev;
    });
  }, [p]); // Se ejecuta cada vez que `p` cambia
  console.log("status", statues);
  console.log("state", p);

  const handleSetFilter = (s: string) => {
    d(setFilterValueAction(s));
  };

  // TODO("Implement here a memoized component letter");
  return (
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
        {f && <FilterBarContainer f={toggleFormVisibility} g={setP} />}

        <div className="pills-section">
          {/* <PillComponent {...p} /> <PillComponent /> <PillComponent />
          <PillComponent /> */}
          {statues.map((s, i) => (
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
  );
};
