import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
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
      <Navbar.Brand href="/"> Voting <span id="portfolio">Hooray</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/addressform">Address Form</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
          <Nav.Link href="#Link">#</Nav.Link>
          <Nav.Link href="#Link">#</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default WholeNavBar;