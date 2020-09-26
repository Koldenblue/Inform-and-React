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

function App() {
  const [input, setInput] = useState("")
  const getData = () => {
    axios.get(`/api/representatives/search/${input}`)
    .then(({data})=> console.log(data))
  }
  return (
    <Router>
        <div className='container'>
          <WholeJumbotron />
          <WholeNavBar />
          <input placeholder="enter your address" onChange={({target:{value}})=> setInput(value)}/>
          <button onClick={getData}>SUBMIT</button>
          <Flipcard />
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
          <ControlledCarousel />
          <MomentCountdown />
        </div>
    </ Router>
  );
}

export default App;
