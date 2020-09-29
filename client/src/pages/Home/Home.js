import React from "react";
import {Redirect} from "react-router-dom"



export default ({loading, user}) => {
  console.log(user, loading)
    return  (!user && !loading) ?  <Redirect to="/login"/> :
      <div>
        <h1>HELLO {user?.username}!</h1>
      </div>
}
