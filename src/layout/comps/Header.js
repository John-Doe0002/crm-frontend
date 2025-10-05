import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from "../../assets/img/logo.png";
//import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


export const Header = () => {
  const history = useNavigate();

  const logMeOut = () => {
    history('/');
    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect variant="purple" expand="md">
      <Navbar.Brand href="/dashboard">
        <img src={logo} alt='logo' width="70px" height="60px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav className="ml-auto" >
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="">Logout</Link> */}
          <LinkContainer to="/dashboard">
            <Nav.Link>
              Dashboard
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>
              Tickets
            </Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
