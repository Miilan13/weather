import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useCallback, useEffect } from 'react';

// NOTE: Removed navbarScroll + maxHeight which created an internal scrollbar on mobile collapse.
// Added responsive spacing utilities and custom class for additional overrides if needed.

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = useCallback(() => setExpanded(prev => !prev), []);
  const handleClose = useCallback(() => setExpanded(false), []);

  const navLinkClass = ({ isActive }) => `nav-route-link ${isActive ? 'active' : ''}`;

  const navLinkProps = { onClick: handleClose, role: 'menuitem', end: true };

  // Listen for scroll to shrink navbar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`app-navbar text-white shadow-lg py-2 py-lg-3 ${scrolled ? 'is-scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container fluid className="px-3 px-md-4 px-lg-5 gap-3">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white fw-bold fs-3 fs-lg-2 hover:text-blue-200 transition-colors text-decoration-none mb-0"
          onClick={handleClose}
        >
          Weather.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-primary" onClick={handleToggle} className="nav-toggle" aria-expanded={expanded} aria-label="Toggle navigation">
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-primary" role="menubar">
          <Nav className="ms-auto my-3 my-lg-0 gap-2 align-items-start align-items-lg-center w-100 w-lg-auto flex-column flex-lg-row" as="ul">
            <Nav.Link as={NavLink} to="/" className={navLinkClass} {...navLinkProps}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={navLinkClass} {...navLinkProps}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/faq" className={navLinkClass} {...navLinkProps}>FAQ</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={navLinkClass} {...navLinkProps}>Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/privacy" className={navLinkClass} {...navLinkProps}>Privacy</Nav.Link>
            <Nav.Link as={NavLink} to="/terms" className={navLinkClass} {...navLinkProps}>Terms</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
