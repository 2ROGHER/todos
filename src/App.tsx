/**
 * This module is responsible to wrap all components of the application.
 */

import React from "react";
import { JSX } from "react";
import "./App.scss";
import { NavBar } from "./layouts/nav-bar/Navbar";
import { SearchBar } from "./components/ui/search-bar/Search";

function App(): JSX.Element {
  return (
    <main className="app">
      {/* This section is used to render the navigation bar */}
      <NavBar />

      {/* This section is used to render the search bar component. */}
      <SearchBar value="todo now" />
    </main>
  );
}

export default App;
