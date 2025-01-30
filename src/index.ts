/**
 * This file is the entry point of the application.
 * It creates the root element and renders the App component to clients.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.scss';

// Get the root element from the DOM fro ./build/index.html.
const root = document.getElementById("root");

// if (root) {
//   // Render the App component to the root element.
//   createRoot(root).render(React.createElement(App));
// } else {
//   // If the root element is null or empty, logs the error.
//   console.error("No root element found!");
// }
// If the root element is not null or empty, render the App component to the root element, else throw an error by the console.
root
  ? createRoot(root).render(React.createElement(App))
  : console.error("No root element found!");
