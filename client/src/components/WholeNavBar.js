import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from "axios";

function WholeNavBar() {

  const logout = () => {
    axios.get('/api/logout').then(() => {
      window.location.replace("/")
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Navbar bg="light" expand="lg" id='nav'>
      <Navbar.Brand href="/">Home Page Hooray</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/addressform">Address Form</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
          <NavDropdown title="User Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="/addressform">Address Form</NavDropdown.Item>
            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default WholeNavBar;