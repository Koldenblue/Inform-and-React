import React from "react";
import {Redirect, useHistory} from "react-router-dom"

export default ({loading, user}) => {
  let history = useHistory();

  console.log(user, loading)
    return (!user && !loading) ? <Redirect to="/login"/> :
      <div>
        <h1>WHAT UP HOMIE {user?.username}</h1>
      </div>
}
