import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="navigasi fixed-top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-warning text-nav"><img src="/img/wf.jpg" width="30" height="30" alt="logo" className="d-inline-block align-top rounded-circle"/><span className="px-3">Wattpad Formal</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-warning" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white text-nav">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white text-nav">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;