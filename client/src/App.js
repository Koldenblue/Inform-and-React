import React from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Flipcard from './components/Flipcard';
import "./style.css";
import WholeNavBar from './components/WholeNavBar';
import WholeJumbotron from "./components/WholeJumbotron"
import ControlledCarousel from "./components/ControlledCarousel"
// import Mininav from './components/Mininav/Mininav';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <div className='container'>
          <WholeJumbotron />
          <WholeNavBar />
          <Flipcard />
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
          <ControlledCarousel />
        </div>
    </ Router>
  );
}

export default App;
