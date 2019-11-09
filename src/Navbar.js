import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Projects.js";
import Content from "./Content.js";
import ae from "./images/ae.svg";
import ps from "./images/ps.svg";
import ai from "./images/ai.svg";
import xd from "./images/xd.svg";
import Headroom from "react-headroom";


import {
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Container,
  Jumbotron,
  Button,
  ProgressBar
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





function NavBar() {
  return (
    <Router>
      
  <Navbar class='navbar' collapseOnSelect expand="lg" >
  <Navbar.Brand   class='navbar' href="#home">B</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home-section">Home</Nav.Link>
      <Nav.Link href="#about-section">About</Nav.Link>
      <Nav.Link href="#resume-section">Resume</Nav.Link>
      <Nav.Link href="#projects-section">Projects</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      

    </Router>
  );
}

export default NavBar;
