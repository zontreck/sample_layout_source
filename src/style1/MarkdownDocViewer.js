import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav, Card, Button } from "react-bootstrap";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";

const MarkdownDocViewer = (props) => {
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
      "http://localhost:3000/docs/" + props.match.params.doc + ".md",
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
      <div
        style={{
          width: "75vw",
          height: "100vh",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        <Card
          className={dark ? "bg-dark text-light" : "bg-secondary text-dark"}
        >
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
