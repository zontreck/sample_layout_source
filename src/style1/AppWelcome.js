import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Button } from "react-bootstrap";

const AppWelcome = (props) => {
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
    <div class="mainApp">
      <Navbar
        bg={dark ? "dark" : "light"}
        variant={dark ? "dark" : "light"}
      >
        <Navbar.Brand href="/">OpenCollar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#/s1/docs/doc">Sample document</Nav.Link>
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
    </div>
  );
};

export default AppWelcome;
