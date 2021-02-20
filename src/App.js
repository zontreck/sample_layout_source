
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppWelcome from "./style1/AppWelcome";
import NotFound from "./NotFound";
import MarkdownDocViewer from "./style1/MarkdownDocViewer";
import Indexer from "./Indexer";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Indexer} />
        <Route exact path="/s1" component={AppWelcome} />
        <Route
          exact
          path="/s1/docs/:doc"
          render={(props) => {
            return <MarkdownDocViewer {...props} />;
          }}
        />
        <Route
          path="*"
          render={(props) => {
            return <NotFound {...props} />;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
