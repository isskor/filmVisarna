import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function TheNavbar() {
  const { loginState } = useContext(UserContext);
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
          {loginState ? (
            <div>
              <Link to="/Profile">My Profile</Link>
              <Link to="/">Checkout</Link>
              <Link to="/">Sign out</Link>
            </div>
          ) : (
            <div>
              <Link to="/loginpage">Sign In</Link>
              <Link to="/loginpage">Register</Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TheNavbar;
