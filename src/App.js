import React, {useState} from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppWelcome from "./AppWelcome";
import NotFound from "./NotFound";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Card, Button } from "react-bootstrap";
import MarkdownDocViewer from "./MarkdownDocViewer";

function App() {
  const [cookies, setCookie] = useCookies(["opencollar"]);
  const [dark, setDark] = useState(true);

  if (cookies.dark === null || cookies.dark === "") {
    setCookie("dark", "dark", {
      path: "/",
    });
    setDark(true);
  }

  if (dark) {
    document.body.style = "background: black; color: white;";
  } else {
    document.body.style = "background: white; color: black;";
  }

  return (
    <div>
      <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Navbar.Brand href="/">OpenCollar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#/docs/doc">Sample document</Nav.Link>
          <Button
            onClick={() => {
              setCookie("dark", "dark", {
                path: "/",
              });
              setDark(true);
            }}
          >
            Set Dark Mode
          </Button>{" "}
          <Button
            onClick={() => {
              setCookie("dark", "light", {
                path: "/",
              });
              setDark(false);
            }}
          >
            Set Light Mode
          </Button>
        </Nav>
      </Navbar>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={AppWelcome} />
          <Route
            exact
            path="/docs/:doc"
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
    </div>
  );
}

export default App;
