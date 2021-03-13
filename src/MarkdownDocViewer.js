import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Card, Button } from "react-bootstrap";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import "./App.css";
const MarkdownDocViewer = (props) => {
  if (props.manualPath != null) {
    props.match.params.doc = props.manualPath;
  }
  const [cookies, setCookie] = useCookies(["opencollar"]);
  const [dark, setDark] = useState(true);
  if (cookies.dark === null || cookies.dark === "") {
    setCookie("dark", "dark", {
      path: "/",
    });
    setDark(true);
  }

  var xhr = null;
  const [downloadDone, setDownloadDone] = useState(false);
  const [MDText, setMDText] = useState("download did not occur");
  if (!downloadDone) {
    xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://opencollar.cc/docs/" + props.match.params.doc + ".md",
      false
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.addEventListener("load", () => {
      if (xhr.readyState === 4) {
        setMDText(xhr.responseText);
      }
    });

    xhr.send();
    setDownloadDone(true);
  }

  return (
    <div>
      <div
        style={{
          width: "75vw",
          height: "100vh",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        <Card className={dark ? "bg-dark text-light" : "bg-light"}>
          <Card.Body>
            <ReactMarkdownWithHtml
              plugins={[gfm]}
              children={MDText}
              allowDangerousHtml
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MarkdownDocViewer;
