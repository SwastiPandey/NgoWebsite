import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../pages/ContactUs";
import { useState } from "react";

function Header() {
  
  return (

    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#WingManFoundation">
            <strong>WingMan Foundation</strong>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/OurWork">
            <Nav.Link>Our Work</Nav.Link>
            </LinkContainer>
              
          </Nav>
          <Nav>
            
            <LinkContainer to="/contactus">
              <Nav.Link eventKey={1}>Contact Us</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/registration">
              <Nav.Link eventKey={2}>Get Involved</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
