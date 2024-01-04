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
            <Nav.Link href="#Tentang" className="text-nav"><i className="bi bi-book"></i> Tentang</Nav.Link>
            <Nav.Link href="#Peraturan" className="text-nav"><i className="bi bi-gear"></i> Peraturan</Nav.Link>
            <Nav.Link href="#Admin" className="text-nav"><i className="bi bi-people"></i> Admin</Nav.Link>
            <Nav.Link href="#Informasi" className="text-nav"><i className="bi bi-info-circle"></i> Informasi</Nav.Link>
            <Nav.Link href="#Komentar" className="text-nav"><i className="bi bi-chat-dots"></i> Komentar</Nav.Link>
            <Nav.Link href="#Pendaftaran" className="text-nav"><i className="bi bi-ui-checks"></i> Pendaftaran</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;