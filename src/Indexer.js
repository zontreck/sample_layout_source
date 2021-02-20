import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const Indexer = (props) => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>OpenCollar Samples</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/s1">Style 1</Nav.Link>
          <Nav.Link href="#/s2">Style 2</Nav.Link>
        </Nav>
      </Navbar>

      <h2>Select a style link from above to see the proposed style</h2>
    </div>
  );
};

export default Indexer;
