import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-blue-600 text-white shadow-lg">
      <Container fluid className="mx-5 gap-3">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white font-bold text-2xl hover:text-blue-200 transition-colors text-decoration-none"
        >
          Weather.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/faq"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/privacy"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Privacy
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/terms"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Terms
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
