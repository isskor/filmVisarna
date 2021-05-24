import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function theNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/login">Sign In</Link>
          <Link to="/login">Sign Up</Link> <Link to="/"> Checkout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default theNavbar;
