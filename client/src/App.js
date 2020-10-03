import React, {useState, useEffect} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flipcard from './components/Flipcard';
import "./grid.css";
import "./index.css";
import WholeNavBar from './components/WholeNavBar';
import ControlledCarousel from "./components/ControlledCarousel";
import MomentCountdown from "./components/MomentCountdown";
import Signup from './pages/Signup';
import BackgroundVideo from "./pages/BackgroundVideo/BackgroundVideo"
import StylishNav from './components/StylishNav'
import EdmundPettus from "./components/EdmundPettus"
import Login from "./pages/Login"
import WhoRepresentsYou from "./components/WhoRepresentsYou";
// import BouncyMap from './components/BouncyMap';
import Polling from './components/Polling';
import { getCurrentUser, searchSenateProPublica, searchHouseProPublica } from './util/API';
import MusicPlayer from "./components/MusicPlayer";
import PollingCenters from "./components/PollingCenters";
import ReactLoading from "react-loading";
import Propositions from "./components/Propositions";
import Prop from "./components/Propositions.js";
import ProtectedRoute from './ProtectedRoute';



function App() {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [hasAddress, setHasAddress] = useState(false);

  useEffect(()=> {
    getCurrentUser().then(({data}) => {
      console.log("THIS IS THE USER IT BETTER BE RIGHT")
      if(data) {
        try {
          console.log(data)
          setUser(data);
          // throw new Error ("boom")
        }
        catch (err) {
          console.log(err)
        }
      }
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  }, [hasAddress]);

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
      <ProtectedRoute exact path="/" user={user} isLoading={loading} onFailureRedirectToPath="/login">
        <Home user={user}/>
      </ProtectedRoute>

        {/* =========== HOME PATH. PUT HOME STUFF HERE ========== redirects to login, if not logged in. */}

      <Route exact path="/props" component={Propositions} />
        {/* ======== Foundation for a second page. Redirects to login, if not logged in. */}
        <Route exact path='/info' component={() => {
          if (!user && !loading) {
            return <Redirect to="/login"/>
          }
          else if (!user?.homeAddress && user !== null) {
            return <Redirect to="/addressform"/>
          }
          else {
            return (
            <>
              <PollingCenters loading={loading} user={user} />
              {/* <StylishNav /> */}
              <div className='container'>
                {/* <WholeNavBar /> */}
                <MusicPlayer />
              </div>
            </>
          )}
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
        <Route exact path='/addressform' component={() => <AddressForm setHasAddress={setHasAddress} user={user} />} />

        {/* Display the login page first. Redirects to home if logged in */}
        <Route exact path='/login' component={() => <Login/>} />

        {/* If a random string is typed in, redirect to home: */}

        {/* </div> */}
        {/* <Route component={() => <Redirect to="/login"/>}/> */}
      </Switch>
    </ Router>
  );
}

export default App;