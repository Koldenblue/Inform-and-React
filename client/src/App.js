import React, {useState, useEffect} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flipcard from './components/Flipcard';
// import "./style.css";
import WholeNavBar from './components/WholeNavBar';
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
import { getCurrentUser, searchSenateProPublica, searchHouseProPublica } from './util/API';
import MusicPlayer from "./components/MusicPlayer";

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
  }, []);

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
      <Switch>

        {/* =========== HOME PATH. PUT HOME STUFF HERE ========== redirects to login, if not logged in. */}
        <Route exact path='/home' component={() => {
          return (!user && !loading) ? <Redirect to="/login"/> :
            <>
              <StylishNav />
              <EdmundPettus />
              <div className='container'>
                <Home loading={loading} user={user} />
                <MomentCountdown />
                <WholeNavBar />
                {/* {whoRepresentsYou}
                {polling} */}
                {/* <WhoRepresentsYou/> */}
                <Polling/>
                <ControlledCarousel />
              </div>
            </>
        }}/>

        {/* ======== Foundation for a second page. Redirects to login, if not logged in. */}
        <Route exact path='/info' component={() => {
          return (!user && !loading) ? <Redirect to="/login"/> :
            <>
              <StylishNav />
              <div className='container'>
                <WholeNavBar />
                <MusicPlayer />
              </div>
            </>
        }}/>

        {/* signup redirects to home if logged in. Or it redirects to the address form after signing up */}
        <Route exact path='/signup' component={() => {
          return (
            <>
              <Signup loading={loading} user={user} />
            </>
          )
        }}/>

        {/* Address form redirects to home after filling in address. */}
        <Route exact path='/addressform' component={() => <AddressForm user={user} />} />

        {/* Display the login page first. Redirects to home if logged in */}
        <Route exact path='/login' component={Login} />

        {/* If a random string is typed in, redirect to home: */}
        <Route component={() => <Home loading={loading} user={user} />}/>

      </Switch>
    </ Router>
  );
}

export default App;
