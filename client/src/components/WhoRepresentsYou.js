import React, { useState, useEffect } from "react";
import Flipcard from './Flipcard';
import axios from "axios";


function WhoRepresentsYou({user}) {
  const [input, setInput] = useState("");
  const [representatives, setRepresentatives] = useState([]);
  const [rep, setRep] = useState([]);

useEffect(()=> {
  user && getData()
}, [user]);

  const getData = () => {

<<<<<<< HEAD
    // axios.get(`/api/representatives/search/` + user.concatenatedHomeAddress).then(({ data }) => {
    //   setRepresentatives(data)
    //   console.log(data)
    //   const repIndices = data.offices.filter(a => a.name == "U.S. Representative" ? a.officialIndices : []);
    //   console.log(repIndices)
      // const reps = data.officials.filter(item);
      // setRep(reps)
      // console.log("reps", reps);
    // })

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
        // console.log(user.representatives)
        // console.log("clicked")
        // console.log(user.representatives[0].name.official_full)
        
=======
>>>>>>> 3aab0ded6dc3e78929b1e1cc633859e53f201a55
  }

  return (
    <div className="row clearfix">
      <h2 style={{width: "100%"}}>WHO CURRENTLY REPRESENTS YOU?</h2>
      {/* <button onClick={getData}>Find your Local Representatives</button> */}

      {user.representatives.map(data => {
        console.log(data)
        return <Flipcard 
        name={data.name.official_full}
        photo={data.img}
        party={data.terms[0].party}
        repState={data.terms[0].state}
        repUrl={data.terms[0].url || "http://www.usa.gov"}
        >
       
          <>
            
            
          </>
          
        </Flipcard>
      })}
    </div>
  )
}

export default WhoRepresentsYou;
