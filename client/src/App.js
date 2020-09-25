import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> b619ed7052b97e843c0ec2bcb06aa758fce8bb39
  );
}

export default App;
