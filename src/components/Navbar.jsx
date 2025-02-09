import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function PageNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary " style={{fontSize:'1rem'}}>
          Home
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/other_routes" className="text-dark fw-semibold">
              Other Routes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
