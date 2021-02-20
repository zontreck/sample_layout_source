import "./App.css";
import React from "react";
import { Router, Route, hashHistory } from "react-router";
import AppWelcome from "./AppWelcome";

function App() {
  return (
    <Router history={hashHistory}>
      <Route exact path="/" component={AppWelcome} />
    </Router>
  );
}

export default App;
