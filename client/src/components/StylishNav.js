import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const NavStyles = {
  ul: {
    display: "inline"
  },
  li: {
    display: "inline",
    position: "relative",
    padding: "20px 15px",
    transition: "0.3s",
    fontSize: "13px",
    textTransform: "uppercase",
    fontWeight: "500",
    listStyle: "none",
  },
  a: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Raleway, sans-serif",

  }
}

const logout = () => {
  axios.get('/api/logout').then(() => {
    window.location.replace("/")
  }).catch((err) => {
    console.log(err);
  })
}

function StylishNav() {
  return (
  <div>
    <div id="header" className="fixed-top header-transparent">
      <div className="container-fluid d-flex align-items-center">
  
        <div className="logo mr-auto">
          <h1 className="text-light"><a href="#momentSection"><span>Inform and React</span></a></h1>
         
        </div>
       
          <ul style={NavStyles.ul}>

           <li style={NavStyles.li}><a style={NavStyles.a}  href="#momentSection">Countdown</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="#localReps">Local Representatives</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="#votingInAction">Voting In Action</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="#propSection">Propositions</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="#letsReact">Let's React</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="#pollingCenters">Polling Centers</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href="/addressform">Update Address</a></li>
            <li style={NavStyles.li}><a style={NavStyles.a} href='#' onClick={logout}>Log Out</a></li>

          </ul>
          
       
  
      </div>
    </div>
  
   
    {/* <section id="hero">
      <div className="before-after-component" id="beforeAfter">
        <div className="after">
          <img src="https://civilrightstrail.com/app/uploads/2017/08/Destination_Selma_splitB.jpg" alt="1960 Edmund Pettus Bridge"/>
        </div>
        <div className="before" style={{width: "254px"}}>
          <img src="https://civilrightstrail.com/app/uploads/2017/08/Destination_Selma_splitA.jpg" alt="2020 Edmund Pettus Bridge"/>
        </div>
        </div>
      <div className="hero-container" data-aos="fade-up">
        <h1>Welcome to Inform and React</h1>
        <h2>We are a one stop resource for all of your voter information needs.</h2>
        <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
      </div>

    </section> */}
  </div>
) }


export default StylishNav;