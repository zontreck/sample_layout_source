import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";
import AppWelcome from "./AppWelcome";

function App() {
  return (
    <Router history={hashHistory}>
      <Route exact path="/" component={AppWelcome} />
    </Router>
  );
}

export default App;
