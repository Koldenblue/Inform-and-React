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
  const [input, setInput] = useState("");
  const [respresentatives, setRepresenatives] = useState([]);
  const [rep, setRep] = useState([]);

  const getData = () => {
    axios.get(`/api/representatives/search/${input}`)
    .then(({data})=> {
      setRepresenatives(data)
      console.log(data)
    const repIndices = data.offices.filter(a=> a.name == "U.S. Representative")[0]?.officialIndices || []
    console.log(repIndices)
    const reps = repIndices.map(index => data.officials[index])
    setRep(reps)
  })
  }
  return (
    <Router>
        <div className='container'>
          <WholeJumbotron />
          <WholeNavBar />
          <h2>Who Currently Represents You?</h2>
          <input placeholder="enter your address" onChange={({target:{value}})=> setInput(value)}/>
          <button onClick={getData}>Submit</button>
          {rep.map(data => {
          return <Flipcard>
            <>
              <img src={data.photoUrl}/>
              <h2 style={{position:"absolute",top:"20px",left:"100px"}}>{data.name}</h2>
            </>
            <>
              <h2>{data.party}</h2>
              <h2>{Object.values(data.address[0]).join(", ")}</h2>
              <h2>{data.phones[0]}</h2>
            </>
          </Flipcard>
          })}
          <Route exact path='/' component={Home} />
          <Route exact path='/addressform' component={AddressForm} />
          <ControlledCarousel />
          <MomentCountdown />
        </div>
    </ Router>
  );
}

export default App;
