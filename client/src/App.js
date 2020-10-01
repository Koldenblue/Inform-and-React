import React, {useState, useEffect} from 'react';
import AddressForm from "./pages/AddressForm/AddressForm";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./grid.css";
import "./index.css";
import Signup from './pages/Signup';
import Login from "./pages/Login"
import { getCurrentUser, searchSenateProPublica, searchHouseProPublica } from './util/API';
import MusicPlayer from "./components/MusicPlayer";
import PollingCenters from "./components/PollingCenters";
import Home from "./pages/Home/Home.js"
import ProtectedRoute from './ProtectedRoute';

function App() {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

  useEffect(()=> {
    getCurrentUser().then(({data}) => {
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

        <Route exact path='/home' component={() => <ProtectedRoute user={user} isLoading={loading} onFailureRedirectToPath="/login"><Home/></ProtectedRoute>}/>

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
        <Route exact path='/addressform' component={() => <AddressForm user={user} />} />

        {/* Display the login page first. Redirects to home if logged in */}
        <Route exact path='/login' component={() => <Login/>} />

        {/* If a random string is typed in, redirect to home: */}
        <Route component={() => <Redirect to="/home"/>}/>

        {/* </div> */}
      </Switch>
    </ Router>
  );
}

export default App;
