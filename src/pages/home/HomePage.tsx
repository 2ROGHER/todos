import React from "react";
import { NavBar } from "../../layouts/nav-bar/Navbar";
import { SearchBarContainer } from "../../components/container/search/SearchBarContainer";
import { CreateTodoFormContainer } from "../../forms/container/create-todo/CreateTodoContainer";
import { TaskLists } from "../../components/container/task-list/TaskList";

export const HomePage = () => {
    return (
      <>
        <main className="app">
          {/* This section is used to render the navigation bar */}
          <NavBar />

          {/* This section is used to render the search bar component. */}
          <SearchBarContainer />

          <CreateTodoFormContainer />

          <TaskLists />
        </main>
      </>
    );
}