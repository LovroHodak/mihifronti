import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./HamburgerNav.css";
import { Link } from "react-router-dom";

export default function HamburgerNav() {
  return (
    <Navbar collapseOnSelect bg="navy" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand  as={Link} to="/cart">
        <div className="cart">
          <img
            className="cartImg"
            alt="cartIcon"
            src={
              "https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png"
            }
          />
          <h1>0</h1>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey="1" as={Link} to="/kuhinja">
            Kuhinja
          </Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/vrt">
            Vrt
          </Nav.Link>
          <Nav.Link eventKey="3" as={Link} to="/sport">
            Sport
          </Nav.Link>
          <Nav.Link eventKey="4" as={Link} to="/relax">
            Relax
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
