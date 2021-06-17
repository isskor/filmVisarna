import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function TheNavbar() {
  const { loggedInUser, logout } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <h1> Filmvisarna </h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto navbar p-0">
          {loggedInUser ? (
            <div className="d-flex flex-column flex-lg-row text-center">
              <Link to="/calendar">Calendar</Link>
              <Link to="/Profile">My Profile</Link>
              <Link to="/checkout">Checkout</Link>
              <Link onClick={logout} to="/">
                Sign out
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-column flex-lg-row text-center">
              <Link to="/calendar">Calendar</Link>
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
