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

  }

  return (
    <div className="row clearfix" style={{justifyContent:"space-around"}}>
      <h2 className='section-header'>WHO CURRENTLY REPRESENTS YOU?</h2>
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
