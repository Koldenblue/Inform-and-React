import React from "react";
import {Redirect} from "react-router-dom"



export default ({loading, user}) => {
  console.log(user, loading)
    return (!user && !loading) ? <Redirect to="/login"/> :
      <div>
        <h1>WHATS UP HOMIE {user}</h1>
      </div>
}
