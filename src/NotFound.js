import React from "react";

const NotFound = (props) => {
  console.log("Props: " + props);
  return <h2>Path not found in application : {props.match.url}</h2>;
};

export default NotFound;
