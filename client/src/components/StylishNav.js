import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

function StylishNav() {
  return (
  <div>
    <div id="header" className="fixed-top header-transparent">
      <div className="container d-flex align-items-center">
  
        <div className="logo mr-auto">
          <h1 className="text-light"><a href="#momentSection"><span>Inform and React</span></a></h1>
         
        </div>
          <ul>

           <li><a href="#momentSection">Clock</a></li>
            <li><a href="#localReps">Local Representatives</a></li>
            <li><a href="#propSection">Propositions</a></li>
            <li><a href="#votingInAction">Voting In Action</a></li>
            <li><a href="#letsReact">Let's React</a></li>
            <li><a href="#pollingCenters">Polling Centers</a></li>

          </ul>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li><a href="/">Home</a></li>
            <li className="drop-down"><a href="">Election Information</a>
              <ul>
                <li><a href="#">Where Your Voice Can Be Heard</a></li>
                {/* <li className="drop-down"><a href="#">National</a> */}
                <li className="drop-down"><a href="#">Local</a>
                  <ul>
                    <li><a href="#pollingSection">Polling Places</a></li>
                    <li><a href="#">Alternative Polling Places</a></li>
                    <li><a href="#">Drop Box Locations</a></li>
                    <li><a href="#">Register To Vote</a></li>
                    <li><a href="#">Know Your Rights</a></li>
                  </ul>
                </li>
                <li><a href="#">Map</a></li>
                <li><a href="#">Voter Guide</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li>
            {/* <li><a href="#contact">Contact Us</a></li> */}
          </ul>
        </nav>
  
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