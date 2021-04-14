import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./HamburgerNav.css";

export default function HamburgerNav() {
  return (
    <Navbar bg="navy" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home">
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
          <Nav.Link href="#kuhinja">Kuhinja</Nav.Link>
          <Nav.Link href="#vrt">Vrt</Nav.Link>
          <Nav.Link href="#sport">Sport</Nav.Link>
          <Nav.Link href="#relax">Relax</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
