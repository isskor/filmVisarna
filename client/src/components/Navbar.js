import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function theNavbar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Navbar.Brand>
        <Nav.Link>
        <Link to='/'>
          <img src='/assets/logo.svg' alt='Logo' />
        </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
        <Nav.Link> <Link to='/login'>Sign In</Link> </Nav.Link>
        <Nav.Link>  <Link to='/'>Sign Up</Link></Nav.Link>
        <Nav.Link> <Link to='/'> Checkout</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default theNavbar;
