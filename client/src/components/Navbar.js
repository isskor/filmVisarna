import { Navbar, Nav, NavLink } from "react-bootstrap";

function theNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand>
                <NavLink to="/">
                    <img src="/assets/logo.svg" alt="Logo" />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link to="/" >Sign In</Nav.Link>
                    <Nav.Link to="/" >Sign Up</Nav.Link>
                    <Nav.Link to="/"> Checkout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default theNavbar;