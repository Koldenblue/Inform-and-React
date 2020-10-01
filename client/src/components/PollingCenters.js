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
            <div>Drive-thru Ballot Drop-off: Brookhurst Community Center: 2271 W Crescent Ave Btwn Brookhurst St & GilbertSt</div>
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

        case "buena park":
        setPollingInfo(
          <div>BUENA PARK
            <div>Boisseranc Park: 7520 Dale St, Btwn La Palma Ave & 91 Fwy</div>
            <div>Drive-thru Ballot Drop-off: Buena Park Community Center: 6688 Beach Blvd, Behind City Hall, On Pinchot Ct</div>
            <div>Walter Knott Education Center: 7300 La Palma Ave, Btwn Knott Ave & Western Ave</div>
            <div>Messiah Lutheran Church: 6625 Dale St, Btwn Whitaker St & Auto Center Dr</div>
          </div>
        )
        break;

        case "costa mesa":
        setPollingInfo(
          <div>COSTA MESA
            <div>Balearic Community Center: 1975 Balearic Dr, Off Shantar Dr, N of Adams Ave</div>
            <div>Drive-thru Ballot Drop-off: Costa Mesa City Hall: 77 Fair Dr, Btwn Newport Blvd & Vanguard Way</div>
            <div>Costa Mesa Downtown Recreation Center: 1860 Anaheim Ave, Btwn W 18th St & W 19th St</div>
            <div>Drive-thru Ballot Drop-off: Costa Mesa Senior Center: 695 W 19th St, Corner of Pomona Ave</div>
            <div>John Wayne Airport - Administration Office: 3160 Airway Ave, Off Red Hill Ave & Paularino Ave</div>
            <div>Sofia University: 3333 Harbor Blvd, Enter off Law Court</div>
          </div>          
        )
        break;

        case "cypress":
        setPollingInfo(
          <div>CYPRESS
            <div>Drive-thru Ballot Drop-off: Cypress College, Theater Arts: 9200 Valley View St, Enter at Valley View St (Park in Lot 1)</div>
            <div>Cypress Community Center: 5700 Orange Ave, Btwn Valley View St & Walker St</div>
            <div>Cypress Senior Center: 9031 Grindlay St, Off Lincoln Ave</div>
          </div>
        )
        break;

        case "dana point":
        setPollingInfo(
          <div>DANA POINT
            <div>Dana Point Branch Library: 33841 Niguel Rd, Btwn PCH & Stonehill Dr</div>
            <div>Dana Point Community Center: 34052 Del Obispo St, Btwn PCH & Stonehill Dr</div>
          </div>
        )
        break;
        
        case "fountain valley":
        setPollingInfo(
          <div>FOUNTAIN VALLEY
            <div>Freedom Hall at Mile Square Park: 16801 Euclid St, Enter on Ward & Edinger (Park in Lot E)</div>
            <div>Orange County Water District: 18700 Ward St, Off Ellis Ave</div>
            <div>The Center at Founders Village: 17967 Bushard St, Corner of Talbert Ave</div>
          </div>
        )
        break;
        
        case "fullerton":
        setPollingInfo(
          <div>FULLERTON
            <div>Drive-thru Ballot Drop-off: CSUF Titan Student Union: 800 N State College Blvd, Enter off Dorothy Ln (Parking Structure)</div>
            <div>Fullerton Joint Union High School District: 1051 W Bastanchury Rd, Btwn Euclid & Parks Rd</div>
            <div>Drive-thru Ballot Drop-off: Fullerton Public Library: 353 W Commonwealth Ave Off Library Ln, Enter on Amerige Ave</div>
            <div>Gilbert Community Center: 2120 W Orangethorpe Ave, Btwn Gilbert St & Brookhurst Rd</div>
            <div>Hillcrest Community Center: 1155 N Lemon St, At Valley View Dr, N of Berkeley Ave</div>
            <div>Independence Park: 801 W Valencia Dr, Btwn Euclid St & S Richman Ave</div>
            <div>Public Works Maintenance Yard: 1580 W Commonwealth Ave, Corner of Basque Ave</div>
            <div>St. Andrew's Episcopal Church: 1231 E Chapman Ave, Btwn Victoria Dr & Raymond Ave</div>
          </div>
        )
        break;

        case "garden grove":
        setPollingInfo(
          <div>GARDEN GROVE
            <div>Assistance League of Garden Grove: 10932 Trask Ave, Btwn Euclid St & Taft Ave</div>
            <div>Drive-thru Ballot Drop-off: Chapman-Hettinga Education Center 11852 Knott St, Btwn Chapman Ave & Orangewood Ave</div>
            <div>Courtyard Center: 12732 Main St, Btwn Euclid St & Acacia Pkwy</div>
            <div>CTS Cement Manufacturing Corporation: 12442 Knott St, Btwn Lampson Ave & Chapman Ave</div>
            <div>Edgar Park Meeting Room: 6202 Cerulean Ave, Off Topaz St, S of Lampson Ave</div>
            <div>Garden Grove Sports and Rec Center 13641 Deodara Dr: Off Westminster Blvd, E of Magnolia St</div>
            <div>West Haven Park: 12252 West St, Btwn Lampson & Chapman Ave</div>
            <div>Our Redeemer Church: 12301 Magnolia St, Btwn Chapman Ave & Lampson Ave</div>
          </div>

        )
        break;

        case "huntington beach":
        setPollingInfo(
          <div>HUNTINGTON BEACH
            <div>City Gym and Pool: 1600 Palm Ave, Btwn 17th St & 14th St</div>
            <div>Drive-thru Ballot Drop-off: Edison Community Center: 21377 Magnolia St, Btwn Hamilton Ave & Atlanta Ave</div>
            <div>Drive-thru Ballot Drop-off: Huntington Beach Central Library: 7111 Talbert Ave, Btwn Goldenwest St & Gothard St</div>
            <div>Huntington Beach City School District: 8750 Dorsett Dr, Off Miramar Ln & Atlanta Ave</div>
            <div>Huntington Beach Civic Center: 2000 Main St, Btwn Yorktown & Utica Ave</div>
            <div>Main Street Branch Library: 525 Main St, Corner of 6th St</div>
            <div>Drive-thru Ballot Drop-off: Michael E. Rodgers Senior Center: 1706 Orange Ave, Btwn 17th St & 18th St</div>
            <div>Drive-thru Ballot Drop-off: Murdy Community Center: 7000 Norma Dr, Off Goldenwest St</div>
            <div>Resurrection Lutheran Church: 9812 Hamilton Ave, Btwn Bushard St & Brookhurst St</div>
            <div>Surf City Church: 2721 Delaware St @ 17th Street</div>
            <div>Ocean View District Office, Bldg E-PDC: 17200 Pinehurst Lane, Bldg E, Btwn Slater Ave & Warner Ave, East of Springdale</div>
          </div>
        )
        break;

        case "irvine":
        setPollingInfo(
          <div>IRVINE
            <div>Christ Our Redeemer A.M.E. Church: 45 Tesla, Btwn Irvine Center Dr & Lake Forest Dr</div>
            <div>CSUF Irvine Center: 3 Banting, Btwn Barranca Pkwy & Alton Pkwy</div>
            <div>Deerfield Community Center: 55 Deerwood W, Off Irvine Ctr Dr</div>
            <div>Evangelical Formosan Church of Irvine: 17422 Armstrong Ave, Btwn McGaw Ave & Reynolds Ave</div>
            <div>Harvard Community Center: 14701 Harvard Ave, Btwn Walnut & Irvine Ctr Dr</div>
            <div>Drive-thru Ballot Drop-off: Irvine Civic Center: 1 Civic Center Plaza, Corner of Harvard Ave & Alton Pkwy</div>
            <div>Irvine Valley College - Gym: 5500 Irvine Center Dr, Enter Irvine Center Dr (Park in Lot 9)</div>
            <div>Drive-thru Ballot Drop-off: Las Lomas Community Center: 10 Federation Way, Off Turtle Ridge Dr</div>
            <div>Drive-thru Ballot Drop-off: Los Olivos Community Center: 101 Alfonso Dr, Off Bake Pkwy</div>
            <div>Northwood Community Center: 4531 Bryan Ave, Btwn Yale & Culver Dr</div>
            <div>Drive-thru Ballot Drop-off: Quail Hill Community Center: 39 Shady Canyon Dr, Off Quail Hill Pkwy</div>
            <div>South Coast Chinese Cultural Center: 9 Truman St, Btwn 5 Fwy & Trabuco Rd</div>
            <div>UCI Student Center: 311 W Peltason Dr, Off Pereira Dr (Student Center Parking)</div>
            <div>University Hills Community Center 1083 California Ave S of Anteater Dr</div>
          </div>
        )
        break;
        
        case "la habra":
        setPollingInfo(
          <div>LA HABRA
            <div>Drive-thru Ballot Drop-off: La Habra City School District: 500 N Walnut St, Btwn La Habra Blvd & Whittier Blvd</div>
            <div>La Habra Community Center: 101 W La Habra Blvd Corner of Euclid St</div>
            <div>La Habra United Methodist Church: 631 N Euclid St, Btwn Whittier Blvd & La Habra Blvd</div>
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

        case "ladera ranch":
        setPollingInfo(
          <div>LADERA RANCH
            <div>The Guest House: 11 Brioso St, Rancho Mission Viejo, Enter off Antonio Pkwy, Sendero Way</div>
        </div>
        )
        break;

        case "laguna beach":
        setPollingInfo(
          <div>LAGUNA BEACH
            <div>Laguna Beach Community Center & Susi Q Center: 380 3rd St, Btwn Forest Ave & Park Ave (Park in Lot 13)</div>
            <div>Lang Park: 21540 Wesley Dr Off Coast Hwy, N of Country Club Dr</div>
          </div>
        )
        break;

        case "laguna hills":
        setPollingInfo(
          <div>LAGUNA HILLS
            <div>Drive-thru Ballot Drop-off: Laguna Hills Community Center: 25555 Alicia Pkwy, Corner of Paseo De Valencia</div>
            <div>Sway Ballroom Dance Studio: 25260 La Paz Rd Btwn Cabot Rd & Paseo De Valencia</div>
          </div>
        )
        break;
      
        case "laguna niguel":
        setPollingInfo(
          <div>LAGUNA NIGUEL 
            <div>Drive-thru Ballot Drop-off: Laguna Niguel City Hall: 30111 Crown Valley Pkwy Corner of Alicia Pkwy</div>
            <div>Drive-thru Ballot Drop-off: Sea Country Senior and Community Center: 24602 Aliso Creek Rd, Corner of Moulton Pkwy</div>
            <div>Mission Lutheran Church: 24360 Yosemite Rd, Off La Paz Rd</div>
          </div>
        )
        break;

        case "laguna woods":
        setPollingInfo(
          <div>LAGUNA WOODS
            <div>Laguna Woods City Hall: 24264 El Toro Rd, Btwn Moulton Pkwy & Avenida Sevilla</div>
          </div>
        )
        break;

        case "lake forest":
        setPollingInfo(
          <div>LAKE FOREST 
            <div>El Toro Branch Library: 24672 Raymond Way, Off El Toro Rd</div>
            <div>Foothill Ranch Library: 27002 Cabriole, Corner of Rue De Fortuna & Bake Pkwy</div>
            <div>Drive-thru Ballot Drop-off: Lake Forest Civic Center: 100 Civic Center Dr Btwn Bake Pkwy & Lake Forest Dr</div>
            <div>Lake Forest Sports Park 28000 Rancho Pkwy   Enter on Vista Ter, Off Lake Forest Dr</div>
          </div>
        )
        break;

        case "los alamitos":
        setPollingInfo(
          <div>LOS ALAMITOS
            <div>Drive-thru Ballot Drop-off: Los Alamitos Unified School District: 10293 Bloomfield St, Btwn Ball Rd & Cerritos Ave</div>
            <div>Drive-thru Ballot Drop-off: Rush Park: 3021 Blume Dr, Btwn Montecito Rd & Foster Rd</div>
          </div>
        )
        break;

        case "midway city":
        setPollingInfo(
          <div>MIDWAY CITY
            <div>Midway City Community Center: 14900 Park Ln, Off Washington Ave, E of Newland St</div>
          </div>
        )
        break;

        case "mission viejo":
        setPollingInfo(
          <div>MISSION VIEJO 
            <div>Mission Viejo Church of Christ: 26558 Marguerite Pkwy, Corner of Felipe Rd</div>
            <div>Drive-thru Ballot Drop-off: Mission Viejo City Hall: 200 Civic Center, Corner of Marguerite Pkwy & La Paz Rd</div>
            <div>Orange County Islamic Foundation (OCIF): 23581 Madero, N of Alicia Pkwy, E of Jeronimo Rd</div>
            <div>Saddleback College - PE 200 Gymnasium: 28000 Marguerite Pkwy, Enter at Avery Pkwy (Park in Lot 4)</div>
            <div>Shepherd of the Hills: 26001 Muirlands Blvd, Off La Paz Rd</div>
          </div>
        )
        break;
        
        case "newport beach":
        setPollingInfo(
          <div>NEWPORT BEACH 
            <div>Coastline College: 1515 Monrovia Ave, Btwn W 16th St & W 15th St</div>
            <div>Drive-thru Ballot Drop-off: Marina Park Community Center: 1600 W Balboa Blvd, Btwn 15th St & 18th St</div>
            <div>Newport Beach Civic Center: 100 Civic Center Dr, Btwn MacArthur Blvd & Avocado Ave</div>
            <div>Drive-thru Ballot Drop-off: Newport Coast Community Center: 6401 San Joaquin Hills Rd, Corner of Newport Coast Dr</div>
            <div>OASIS Senior Center (Corona Del Mar): 801 Narcissus Ave, Corner of Marguerite Ave & 5th Ave</div>
          </div>
        )
        break;

        case "orange":
        setPollingInfo(
          <div>ORANGE
            <div>Chapman University - Argyros Forum: 386 N Center St, Enter on Walnut (Park at Lastinger Structure)</div>
            <div>El Modena Branch Library: 380 S Hewes St, Btwn Chapman & Fairhaven</div>
            <div>Orange Public Library: 407 E Chapman Ave, Btwn Glassell & Tustin</div>
            <div>Drive-thru Ballot Drop-off: Orange Unified School District Office: 1401 N Handy St, Enter on Katella Ave (back lot)</div>
            <div>Santiago Canyon College - Gym: 8045 E Chapman Ave, Enter off Chapman Ave (Park in Lot 2)</div>
            <div>Drive-thru Ballot Drop-off: Sports Center at Grijalva Park: 368 N Prospect St, Btwn Chapman Ave & Walnut Ave</div>
            <div>Steve Ambriz Memorial Park: 611 Riverbend Pkwy, Off Lincoln Ave & Glassell St</div>
            <div>Taft Avenue Community Church: 1350 E Taft Ave, Btwn Tustin Ave & Cambridge St</div>
        </div>
        )
        break;

        case "placentia":
        setPollingInfo(
          <div>PLACENTIA  
            <div>Backs Community Building: 201 N Bradford Ave, Off Chapman Ave, E of Placentia Ave</div>
            <div>Tynes Gym: 2101 Tuffree Blvd, Off Bastanchury Rd, W of Kraemer Blvd</div>
            <div>Yorba Linda Water District: 1717 E Miraloma Ave, Btwn Richfield Rd & Van Buren St</div>
          </div>
        )
        break;

        case "rancho santa margarita":
        setPollingInfo(
          <div>RANCHO SANTA MARGARITA 
            <div>Rancho Santa Margarita Branch Library: 30902 La Promesa, Corner of Richard Reese Way</div>
            <div>Shepherd of the Hills: 30605 Avenida de Las Flores, Btwn Santa Margarita & Banderas</div>
            <div>Laguna Beach Volleyball Club: 30282 Esperanza @ Ave Empresa, near Antonio Pkwy</div>
          </div>
        )
        break;

        case "san clemente":
        setPollingInfo(
          <div>SAN CLEMENTE
            <div>Dorothy Visser Senior Center: 117 Avenida Victoria, Off S El Camino Real (lot on Ave Rosa)</div>
            <div>San Clemente Community Center: 100 N Calle Seville, Corner of Avenida Del Mar</div>
            <div>The Volare Resort: 111 Avenida De La Estrella, Off Avenida Presidio & El Camino Real</div>
          </div>
        )
        break;

        case "san juan capistrano":
        setPollingInfo(
          <div>SAN JUAN CAPISTRANO
            <div>La Sala Auditorium: 31495 El Camino Real, N of Ortega Hwy, E of Camino Capistrano</div>
            <div>Reata Park & Event Center: 28632 Ortega Hwy, Enter at Reata Rd</div>
            <div>Drive-thru Ballot Drop-off: San Juan Capistrano Community Center: 25925 Camino Del Avion, Btwn Del Obispo St & Alipaz St</div>
          </div>
        )
        break;

        case "santa ana":
        setPollingInfo(
          <div>SANTA ANA
            <div>Albert D. Salgado Community Center: 706 N Newhope St, Btwn Hazard Ave & 5th St</div>
            <div>Drive-thru Ballot Drop-off: Delhi Center: 505 E Central Ave, Off Halladay St & Warner Ave</div>
            <div>Discovery Cube: 2500 N Main St, Btwn Mainplace Dr & 5 Fwy</div>
            <div>El Salvador Community Center: 1825 W Civic Center Dr, Off Raitt St</div>
            <div>Drive-thru Ballot Drop-off: Orange County First Assembly Of God: 1440 E Santa Clara Ave, E of Grand Ave</div>
            <div>Orange County Registrar of Voters: 1300 S Grand Ave, Bldg C, Corner of McFadden Ave</div>
            <div>Roosevelt-Walker Community Center: 816 E Chestnut Ave, Corner of Standard Ave</div>
            <div>Santa Ana College - Gymnasium: 1530 W 17th St, Enter off 17th St (Park in Lot 1)</div>
            <div>Drive-thru Ballot Drop-off: Sikh Center of Orange County: 2514 W Warner Ave, Enter on Greenville St</div>
            <div>Drive-thru Ballot Drop-off: Southwest Senior Center: 2201 W McFadden Ave, Btwn Fairview St & Raitt St</div>
            <div>Calvary Chapel Costa Mesa Ministerio Hispano: 3000 W Macarthur Blvd, Btwn Harbor Blvd & Fairview St</div>
        </div>
        )
        break;

        case "seal beach":
        setPollingInfo(
          <div>SEAL BEACH
            <div>City of Seal Beach Fire Station 48: 3131 N Gate Rd, Off Seal Beach Blvd, S of 405 Fwy</div>
            <div>Seal Beach Senior Center: 707 Electric Ave, Btwn Main St & Marina Dr</div>
          </div>
        )
        break;

        case "silverado":
        setPollingInfo(
          <div>SILVERADO 
            <div>Saddleback Gateway-Library of the Canyons: 7531 E Santiago Canyon Rd, S of Silverado Canyon Rd</div>
          </div>
        )
        break;

        case "stanton":
        setPollingInfo(
          <div>STANTON
            <div>Stanton Community Center at City Hall: 7800 Katella Ave, Btwn Western Ave & Beach Blvd</div>
            <div>Drive-thru Ballot Drop-off: Stanton Central Park: 10660 Western Ave, Btwn Cerritos Ave & Katella Ave</div>
          </div>
        )
        break;

        case "trabuco":
        setPollingInfo(
          <div>TRABUCO
            <div>Trabuco Canyon Water District: 32003 Dove Canyon Dr, Off Plano Trabuco</div>
          </div>
        )
        break;

        case "tustin":
        setPollingInfo(
          <div>TUSTIN
            <div>Clifton C. Miller Community Center: 300 Centennial Way, Corner of Main St</div>
            <div>Drive-thru Ballot Drop-off: Columbus Tustin Activity Center: 17522 Beneta Way, Btwn Prospect Ave & Holt Ave</div>
            <div>Community Center at The Market Place: 2961 El Camino Real, Btwn Jamboree Rd & Myford Rd</div>
            <div>Tustin Family & Youth Center: 4722 Newport Ave, Corner of Sycamore Ave</div>
            <div>Aldersgate United Methodist Church: 1201 Irvine Blvd, Btwn Newport Ave & Red Hill Ave</div>
          </div>
        )
        break;

        case "westminster":
        setPollingInfo(
          <div>WESTMINSTER
            <div>Miriam Warne Community Building: 14491 Beach Blvd, Corner of Hazard Ave</div>
            <div>Drive-thru Ballot Drop-off: Westminster Branch Library: 8180 13th St, Off Beach Blvd</div>
            <div>Westminster Christian Assembly: 14642 Bushard St, Btwn Bolsa Ave & Hazard Ave</div>
            <div>Westminster Community Services Building: 8200 Westminster Blvd, Enter off Jackson St, E of Beach Blvd</div>
          </div>
        )
        break;

        case "yorba linda":
        setPollingInfo(
          <div>YORBA LINDA
            <div>Church of Grace: 22653 Old Canal Rd, Off Yorba Linda Blvd & Savi Ranch Pkwy</div>
            <div>Drive-thru Ballot Drop-off: Danish Lutheran Church & Cultural Center: 16881 Bastanchury Rd, Btwn Rose Dr & Prospect Ave</div>
            <div>Thomas Lasorda Jr Field House: 4701 Casa Loma Ave, Btwn Imperial Hwy & Yorba Linda Blvd</div>
            <div>Valtek Precision, Inc. (Warehouse): 23211 La Palma Ave, S of Via Lomas De Yorba W</div>
            <div>Grace Evangelical Lutheran Church: 6550 Fairmont Blvd, Fairmont Connector & Esperanza Rd</div>
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