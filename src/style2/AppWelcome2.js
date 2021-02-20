import React from "react";
import { useCookies } from "react-cookie";
import { Navbar, Nav } from "react-bootstrap";

const AppWelcome2 = (props) => {
  const [cookies, setCookie] = useCookies(["opencollar"]);
  if (cookies.dark == null || cookies.dark == "")
    setCookie("dark", "dark", {
      path: "/",
    });
  return (
    <div class="mainApp">
    </div>
  );
};

export default AppWelcome2;
