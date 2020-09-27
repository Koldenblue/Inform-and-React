import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

function StylishNav() {
  return (
  // <Navbar class="nav-menu d-none d-lg-block" id="stylish-nav" expand="lg">
  //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav class="nav-menu d-none d-lg-block mr-auto">
  //       <Nav.Link href="#home">Home</Nav.Link>
  //       <Nav.Link href="#link">Link</Nav.Link>
  //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //         <NavDropdown.Divider />
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

  //       </NavDropdown>
  //     </Nav>
  //     <Form inline>
  //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //       <Button variant="outline-success">Search</Button>
  //     </Form>
  //   </Navbar.Collapse>
  // </Navbar>
  <div>
  <nav className="nav-menu d-none d-lg-block">
  <ul>
    <li className="active"><a href="index.html">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#team">Team</a></li>
    <li className="drop-down"><a href="">Drop Down</a>
      <ul>
        <li><a href="#">Drop Down 1</a></li>
        <li class="drop-down"><a href="#">Drop Down 2</a>
          <ul>
            <li><a href="#">Deep Drop Down 1</a></li>
            <li><a href="#">Deep Drop Down 2</a></li>
            <li><a href="#">Deep Drop Down 3</a></li>
            <li><a href="#">Deep Drop Down 4</a></li>
            <li><a href="#">Deep Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#">Drop Down 3</a></li>
        <li><a href="#">Drop Down 4</a></li>
        <li><a href="#">Drop Down 5</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact Us</a></li>

  </ul>
</nav>

</div>

  )
}

export default StylishNav;