import React, { useState, useEffect } from "react";
import axios from "axios";
import util from "util";

// user is logged in
function Polling({ user, loading }) {
  const [input, setInput] = useState("");
  const [pollingWebsites, setPollingWebsites] = useState("");


  // console.log(user)
  let makePollingCall = () => {
    try {
      // https://www.googleapis.com/civicinfo/v2/voterinfo
      axios.get(`/api/voterinfo/search/${user.concatenatedHomeAddress}`).then((data) => {
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
        // note: there may be many hundreds of possible polling places
        let pollingPlaces = data.data.pollingLocations[0]
        console.log("polling places", pollingPlaces)
        console.log(urlInfo)
        axios.put('/api/users/infourls/' + user._id, urlInfo).then(data => {
          console.log(data);
        }).catch((err) => {
          console.log(err);
        })
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err)
    }
  }

  let asyncPollingCall = util.promisify(makePollingCall)

  // useEffect(() => {
  //   asyncPollingCall().then(urlInfo => {
  //     setPollingWebsites(urlInfo);
  //     console.log("THIS IS THE INFO", urlInfo)
  //   });
  // }, [user])

  return(
    <div>
      <button
        onClick={makePollingCall}
      >
        Make Polling Call With current user address
      </button>
      {pollingWebsites}

    </div>
  )
}

export default Polling;