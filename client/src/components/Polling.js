import React, { useState } from "react";
import axios from "axios";

// user is logged in
function Polling({ user }) {
  const [input, setInput] = useState("");

  const makePollingCall = () => {
    // https://www.googleapis.com/civicinfo/v2/voterinfo
    axios.get(`/api/voterinfo/search/${input}`).then((data) => {
      console.log("this is the data", data)
      console.log(user)
      let votingLocationFinderUrl = data.data.state[0].electionAdministrationBody.votingLocationFinderUrl;
      // let homeState = data.data.state[0].name;
      let electionInfoUrl = data.data.state[0].electionAdministrationBody.electionInfoUrl;
      let ballotInfoUrl = data.data.state[0].electionAdministrationBody.ballotInfoUrl;
      let urlInfo = {
        votingLocationFinderUrl: votingLocationFinderUrl,
        electionInfoUrl: electionInfoUrl,
        ballotInfoUrl: ballotInfoUrl
      }
      console.log(urlInfo)
      axios.put('/api/users/infourls/' + user._id, urlInfo).then(data => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
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