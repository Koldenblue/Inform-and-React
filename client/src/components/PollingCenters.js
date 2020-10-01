import React, { useState, useEffect } from "react";

function PollingCenters({ loading, user }) {
  let [pollingInfo, setPollingInfo] = useState("")

  let getUserAddress = () => {
    // console.log("user : ", user) 
    try {
      let city = user['homeAddress'].city
      // let city = user.homeAddress.city;
      returnAddress(city);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserAddress()
  }, [])

  let returnAddress = (city) => {
    city = city.trim().toLowerCase();
    console.log(city)
    switch (city) {
      case "aliso viejo":
        setPollingInfo(
          <div>ALISO VIEJO
            <div>Drive-thru Ballot Drop-off: Aliso Viejo Branch Library: 1 Journey, Corner of Pacific Park Dr</div>
            <div>Iglesia Park Community Center: 24671 Via Iglesia, Off Moulton Pkwy</div>
            <div>Soka University of America, Founders Hall: 1 University Cir, Off Wood Canyon Dr (Park in Lot A)</div>
          </div>
        )
        break;

      case "anaheim":
        setPollingInfo(
          <div>ANAHEIM
            <div>Anaheim Elementary School District: 1001 S East St, Btwn Vermont Ave & Ball Rd</div>
            <div>Anaheim Independencia Family Resource Center: 10841 Garza Ave, Off Gilbert St & Katella Ave</div>
            <div>Anaheim Union High School District Office: 501 N Crescent Way, Off Lincoln Ave, W of Euclid St</div>
            <div>Drive-thru Ballot Drop-off: Brookhurst Community Center: 2271 W Crescent Ave Btwn Brookhurst St & Gilbert
              St</div>
            <div>Drive-thru Ballot Drop-off: Canyon Hills Branch Library: 400 S Scout Trl Off Nohl Ranch Rd</div>
            <div>Downtown Anaheim Youth Center: 225 S Philadelphia St, Enter on Center St, E of Anaheim Blvd</div>
            <div>East Anaheim Community Center: 8201 E Santa Ana Canyon Rd W of Weir Canyon Rd</div>
            <div>Drive-thru Ballot Drop-off: Haskett Branch Library: 2650 W Broadway Btwn Magnolia Ave & Dale Ave</div>
            <div>Drive-thru Ballot Drop-off: Honda Center: 2695 E Katella Ave, Btwn 57 Fwy & Main St</div>
            <div>Islamic Institute of Orange County: 1220 N State College Blvd, Btwn 91 Fwy & La Palma Ave</div>
            <div>Ponderosa Family Resource Center: 320 E Orangewood Ave, Btwn Haster St & Lewis St</div>
            <div>Savanna School District: 1330 S Knott Ave, Btwn Ball Rd & Cerritos Ave</div>
            <div>St. Anthony Mary Claret Catholic Church: 1450 E La Palma Ave, Btwn State College Blvd & East St</div>
            <div>Sunkist Branch Library: 901 S Sunkist St, Btwn Wagner Ave & South St</div>
            <div>West Anaheim Youth Center: 320 S Beach Blvd, Btwn Lincoln Ave & Orange Ave </div>
            <div>West Coast Islamic Society: 1717 S Brookhurst St, Btwn Katella Ave & Cerritos Ave</div>
            <div>Zion Lutheran Church: 222 N East St, Btwn Lincoln Ave & Sycamore St</div>
          </div>
        )
        break;

      case "brea":
        setPollingInfo(
          <div>BREA
            <div>Brea Civic and Cultural Center: 1 Civic Center Cir, Off E Birch St</div>
            <div>Brea Senior Center: 500 Sievers Ave, Off Elm St, W of Brea Blvd</div>
          </div>
        )
        break;

      case "la palma":
        setPollingInfo(
          <div>LA PALMA
            <div>La Palma Community Center: 7821 Walker St, Btwn La Palma Ave & Orangethorpe Ave</div>
          </div>
        )
        break;
      
      default:
        console.log("no address found");
        setPollingInfo(
          <div>
            <p>That address is not in our database!</p>
          </div>
        )
        break;
    }
  }

  return (
    (!user && !loading) ? <></> :
      <>
        {pollingInfo}
        <button onClick={getUserAddress}>
          get address
      </button>
      </>
  )
}

export default PollingCenters;