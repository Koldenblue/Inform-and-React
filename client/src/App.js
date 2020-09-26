import React from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
// import Mininav from './components/Mininav/Mininav';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      {/* <Mininav /> */}
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
        </div>
        {/* <Footer/> */}
    </ Router>
  );
}

export default App;
