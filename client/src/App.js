import React, {useState, useEffect} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./grid.css";
import "./index.css";
import Signup from './pages/Signup';
import Login from "./pages/Login"
import { getCurrentUser } from './util/API';
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
      if(data) {
        try {
          console.log(data)
          setUser(data);
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

  return (
    <Router>
      <Switch>
        {/* =========== HOME PATH. PUT HOME STUFF HERE ========== redirects to login, if not logged in. */}
        <ProtectedRoute exact path="/" user={user} isLoading={loading} onFailureRedirectToPath="/login">
          <Home user={user}/>
        </ProtectedRoute>


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


        {/* <Route exact path="/props" component={Propositions} /> */}
        {/* If a random string is typed in, redirect to home: */}
        {/* <Route component={() => <Redirect to="/login"/>}/> */}
      </Switch>
    </ Router>
    
  );
}

export default App;