import "./App.css";
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AppWelcome from "./AppWelcome";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={AppWelcome} />
    </HashRouter>
  );
}

export default App;
