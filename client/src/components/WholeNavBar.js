import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function WholeNavBar() {
  return (
    <Navbar bg="light" expand="lg" id='nav'>
      <Navbar.Brand href="/"> Voting <span id="portfolio">Hooray</span><span class="sr-only">(current)</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="portfolio">Vote</Nav.Link>
          <Nav.Link href="resume">Elections</Nav.Link>
          <Nav.Link href="chemistry">Bills</Nav.Link>
          <Nav.Link href="pictures">Polling</Nav.Link>
          <Nav.Link href="contact">Contributions</Nav.Link>
          <Nav.Link href="aboutme">User</Nav.Link>
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