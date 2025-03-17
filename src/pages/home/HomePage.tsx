import React from "react";
import { NavBar } from "../../layouts/nav-bar/Navbar";
import { SearchBarContainer } from "../../components/container/search/SearchBarContainer";
import { CreateTaskFormContainer } from "../../forms/container/create-todo/CreateTaskFormContainer";
import { TaskLists } from "../../components/container/task-list/TaskList";
import { useLocalStorage } from "../../hooks/useLocalStorage.hook";
import { useNavigate } from "react-router";
import "./HomePage.scss";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="App">
      {/* This section is used to render the navigation bar */}
      <section className="side-bar">
        <NavBar />
      </section>

      <aside className="main">
        <SearchBarContainer />

        <CreateTaskFormContainer />

        <section className="main-content">
          <TaskLists />
        </section>
      </aside>
    </main>
  );
};
