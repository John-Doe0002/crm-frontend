import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap';
import logo from "../../assets/img/logo.png";


export const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" expand="md">
      <Navbar.Brand href="/dashboard">
        <img src={logo} alt='logo' width="70px" height="60px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="tabs" display="flex" style={{marginLeft: "auto"}}>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
