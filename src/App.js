import React from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
        </div>
    </ Router>
  );
}

export default App;
