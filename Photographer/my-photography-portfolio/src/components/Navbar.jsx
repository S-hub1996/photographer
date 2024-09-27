import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import './Navbar.css'; // Assuming you're adding custom styles in a separate CSS file

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">Photography Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
          <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
          <NavDropdown title="Services" id="services-dropdown" className="nav-item">
            <NavDropdown.Item as={Link} to="/services#portrait">Portrait</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/services#wedding">Wedding</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/services#event">Event</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about" className="nav-item">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
