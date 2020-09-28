import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

function StylishNav() {
  return ( 
      <nav className="nav-menu d-lg-block" style={{zIndex: 100, position:"fixed"}}>
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="#about"></a></li>
          <li><a href="#services">Local Representatives</a></li>
          <li><a href="#portfolio">Key Races</a></li>
          <li><a href="#team">Propositions</a></li>
          <li className="drop-down"><a href="">Election Information</a>
            <ul>
              <li><a href="#">Where Your Voice Can Be Heard</a></li>
              <li className="drop-down"><a href="#">National</a></li>
              <li className="drop-down"><a href="#">Local</a>
                <ul>
                  <li><a href="#">Polling Places</a></li>
                  <li><a href="#">Alternative Polling Places</a></li>
                  <li><a href="#">Drop Box Locations</a></li>
                  <li><a href="#">Register To Vote</a></li>
                  <li><a href="#">Know Your Rights</a></li>
                </ul>
              </li>
              <li><a href="#">Map</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

  )
}

export default StylishNav;