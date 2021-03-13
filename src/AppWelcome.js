import React, { useState } from "react";
import "./App.css";
import MarkdownDocViewer from "./MarkdownDocViewer";

const AppWelcome = (props) => {
  const [dark, setDark] = useState("");

  if (dark == "") setDark(props.dark);
  return (
    <div class="mainApp">
      <MarkdownDocViewer match={{ params: { doc: "index" } }} dark={dark} />
    </div>
  );
};

export default AppWelcome;
