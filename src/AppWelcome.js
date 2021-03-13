import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import MarkdownDocViewer from "./MarkdownDocViewer";

const AppWelcome = (props) => {
  const [cookies, setCookie] = useCookies(["opencollar"]);
  const [dark, setDark] = useState(props.dark);

  return (
    <div class="mainApp">
      <MarkdownDocViewer match = {{params : {doc:"index"}}} dark={dark} />
    </div>
  );
};

export default AppWelcome;
