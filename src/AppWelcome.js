import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import MarkdownDocViewer from "MarkdownDocViewer";

const AppWelcome = (props) => {
  const [cookies, setCookie] = useCookies(["opencollar"]);
  const [dark, setDark] = useState(true);
  if (cookies.dark === null || cookies.dark === "") {
    setCookie("dark", "dark", {
      path: "/",
    });
    setDark(true);
  }

  return (
    <div class="mainApp">
      <MarkdownDocViewer manualPath="index" />
    </div>
  );
};

export default AppWelcome;
