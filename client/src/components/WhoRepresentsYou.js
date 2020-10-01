import React, { useState, useEffect } from "react";
import Flipcard from './Flipcard';
import axios from "axios";


function WhoRepresentsYou({user}) {
  const [input, setInput] = useState("");
  const [respresentatives, setRepresentatives] = useState([]);
  const [rep, setRep] = useState([]);

useEffect(()=> {
  user && getData()
}, [user]);

  const getData = () => {

    axios.get(`/api/representatives/search/` + user.concatenatedHomeAddress).then(({ data }) => {
      setRepresentatives(data)
      console.log(data)
      const repIndices = data.offices.filter(a => a.name == "U.S. Representative" ? a.officialIndices : []);
      console.log(repIndices)
      // const reps = data.officials.filter(item);
      // setRep(reps)
      // console.log("reps", reps);
    })

    // axios.get(`/api/representatives/search/${input}`) 

    //   .then(({ data }) => {
    //     setRepresentatives(data)
    //     console.log(data)
    //     const repIndices = data.offices.filter(a => a.name == "U.S. Representative" ? a.officialIndices : []);
    //     console.log(repIndices)
    //     const reps = data.officials.filter(item);
    //     setRep(reps)
    //     console.log("reps", reps);
    //   })

  }

  return (
    <div>
      <h2>Who Currently Represents You?</h2>
      <button onClick={getData}>Find who represents you</button>

      {rep.map(data => {
        return <Flipcard>
          <>
            {/* <img src={data.photoUrl} /> */}
            <h2 style={{ position: "absolute", top: "20px", left: "100px" }}>{data.name}</h2>
          </>
          {/* <>
            <h2>{data.party}</h2>
            <h2>{Object.values(data.address[0]).join(", ")}</h2>
            <h2>{data.phones[0]}</h2>
          </> */}
        </Flipcard>
      })}
    </div>
  )
}

export default WhoRepresentsYou;
