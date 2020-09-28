import React, {useState} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flipcard from './components/Flipcard';
import "./style.css";
import WholeNavBar from './components/WholeNavBar';
import WholeJumbotron from "./components/WholeJumbotron";
import ControlledCarousel from "./components/ControlledCarousel";
import MomentCountdown from "./components/MomentCountdown";
import axios from "axios";
import Signup from './pages/Signup';
import BackgroundVideo from "./pages/BackgroundVideo/BackgroundVideo"
import StylishNav from './components/StylishNav'
import EdmundPettus from "./components/EdmundPettus"
import Login from "./pages/Login"
import WhoRepresentsYou from "./components/WhoRepresentsYou"

function App() {


  return (
    <Router>
      {/* <BackgroundVideo /> */}
        <div className='container'>
          <StylishNav />
          <WholeJumbotron />
          <EdmundPettus />
          <WholeNavBar />
          <WhoRepresentsYou />
 
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <ControlledCarousel />
          <MomentCountdown />
        </div>
    </ Router>
  );
}

export default App;
