import React, {useState, useEffect} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flipcard from './components/Flipcard';
// import "./style.css";
import WholeNavBar from './components/WholeNavBar';
import WholeJumbotron from "./components/WholeJumbotron";
import ControlledCarousel from "./components/ControlledCarousel";
import MomentCountdown from "./components/MomentCountdown";
import Signup from './pages/Signup';
import BackgroundVideo from "./pages/BackgroundVideo/BackgroundVideo"
import StylishNav from './components/StylishNav'
import EdmundPettus from "./components/EdmundPettus"
import Login from "./pages/Login"
import WhoRepresentsYou from "./components/WhoRepresentsYou";
import BouncyMap from './components/BouncyMap';
import Polling from './components/Polling';
import {getCurrentUser, searchSenateProPublica, searchHouseProPublica } from './util/API';


function App() {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

  useEffect(()=> {
    getCurrentUser().then(({data}) => {
      console.log(data)
      if(data) {
        setUser(data);
        console.log(data)
      }
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  // useEffect(()=> {
  //   searchSenateProPublica().then(data => {
  //     console.log(data)
  //   })
    //   searchHouseProPublica().then(data => {
  //     console.log(data)
  //   })
  // },[])


  // if (user) {
  //   whoRepresentsYou = <WhoRepresentsYou user={user}/>
  // }
  // if (user) {
  //   polling = <Polling user={user} />
  // }


  return (
    <Router>
      {/* <BackgroundVideo /> */}
          <StylishNav />
          <EdmundPettus />
        <div className='container'>

          {/* <WholeJumbotron /> */}

          <MomentCountdown />
          <WholeNavBar />
          {/* <WhoRepresentsYou/> */}
          <Polling/>
          <Switch>

            <Route exact path='/' component={() => <Home loading={loading} user={user} />} />
            <Route exact path='/addressform' component={() => <AddressForm user={user} />} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <ControlledCarousel />

          <BouncyMap />


        </div>
    </ Router>
  );
}

export default App;
