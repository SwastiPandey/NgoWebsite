import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#WingManFoundation"><strong>WingMan Foundation</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <NavDropdown title="OurWork" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Maatrachaya</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.2">
                Rural
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Urban</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#getinvolved">
              Get Involved
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;