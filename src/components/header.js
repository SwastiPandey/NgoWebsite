import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

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
            <NavDropdown title="OurWork" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Maatrachaya</NavDropdown.Item> */}
              <LinkContainer to="/rural">
                <NavDropdown.Item>Rural</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/urban">
                <NavDropdown.Item>Urban</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/media">
                <NavDropdown.Item>Media</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/registration">
              <Nav.Link eventKey={2}>Get Involved</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
