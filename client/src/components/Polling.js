import React, { useState } from "react";
import axios from "axios";

function Polling() {
  const [input, setInput] = useState("");

  const makePollingCall = () => {
    console.log("Made polling call")
    console.log(input)
    // https://www.googleapis.com/civicinfo/v2/voterinfo
    axios.get(`/api/voterinfo/search/${input}`).then((data) => {
      console.log(data)
      // data has info on websites for finding polling locations
    })
  }

  return(
    <div>
      <h2>Where is polling?</h2>
      <input placeholder="enter your address" onChange={({ target: { value } }) => setInput(value)} />
      <button 
        onClick={makePollingCall}
      >
        Make Polling Call
      </button>

    </div>
  )
}

export default Polling;