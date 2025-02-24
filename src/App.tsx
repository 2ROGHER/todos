/**
 * This module is responsible to wrap all components of the application.
 */

import React, { JSX } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";
// import { CreateTodoContainer } from "./forms/container/create-todo/CreateTodoContainer";
import { TaskLists } from "./components/container/task-list/TaskList";

import { BrowserRouter as Router, useRoutes } from "react-router";
import { Routes, Route } from "react-router";
import { RedirectFunction} from 'react-router-dom';
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
function App(): JSX.Element {
  // If we need to refactor this structure we can use the useRoutes hoock
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          // some children routes
        }
      ]
    }
  ])
  return (
    <Router>
      <Provider store={store}>

        {/* <!-- This compenent is responsible to render the main layout of the application and 
        render the respective pages here --> */}
        <Routes>
          
          <Route path="/home" element={<HomePage />}>
            <Route path="tasks-list" element={<TaskLists />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </Provider>
    </Router>
  );
}

export default App;
