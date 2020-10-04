import React, { useEffect, useState } from "react";
import axios from "axios";

function BouncyMap(props) {

  useEffect(() => {
    if (props.addresses.length > 0) {
      console.log("here is where the axios call for google maps should be made, to put the addresses on the map");
      console.log(props.addresses);
      axios.post('/api/bouncymap', props.addresses).then((data) => {
        console.log(data)
      })
    }
  }, [props.addresses])

  return (
    <div id="map">

    </div>
  )

}





  // async function getMarkerCoords(array) {
  //   var coords = [];
  //   for (var i = 0; i < array.length; i++) {
  //     var address = `${array[i].address}, ${array[i].city}, ${array[i].state} ${array[i].zip}`
  //     var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + personalAPIKey
  //     var { results } = await $.get(queryURL)
  //     console.log(results[0]);
  //     if (results[0]) {
  //       coords.push({ lat: results[0].geometry.location.lat, lng: results[0].geometry.location.lng })
  //     }

  //   }
  //   console.log(coords)
  //   initMap(coords)
  // }

  // function initMap(coords) {
  //   console.log("coords: ", coords);

  //   var map = new google.maps.Map(
  //     document.getElementById("map"),
  //     {
  //       zoom: 11,
  //       center: coords[coords.length - 1]
  //     }
  //   );

  //   var icon = {

  //     url: "https://e7.pngegg.com/pngimages/921/324/png-clipart-us-presidential-election-2016-voting-voter-education-primary-election-voting-icon-blue-text.png",
  //     scaledSize: new google.maps.Size(width = 27, height = 27),
  //     origin: new google.maps.Point(0, 0),
  //     anchor: new google.maps.Point(0, 0)
  //   }

  //   for (var i = 0; i < coords.length; i++) {
  //     var marker = new google.maps.Marker({
  //       position: coords[i],
  //       map: map,
  //       icon: icon,
  //       animation: google.maps.Animation.BOUNCE,
  //     })
  //   }

  // }

  // useEffect(() => {
  //   let myAddress = localStorage.getItem("myAddress");
  //   if (!myAddress) console.log('no address');
  // }, [])






// var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";

// var userInfo = JSON.parse(localStorage.getItem("user")) || [];
// console.log("user Info, local storage: " ,userInfo);
// getMarkerCoords(userInfo)



// function initMap(coords) {
//     console.log("coords: ", coords);

//     var map = new google.maps.Map(

//         document.getElementById("map"),
//         {
//             zoom: 11,
//             center: coords[coords.length -1]
//         }

//     );

//     var icon = {

//         url: "https://e7.pngegg.com/pngimages/921/324/png-clipart-us-presidential-election-2016-voting-voter-education-primary-election-voting-icon-blue-text.png",
//         scaledSize: new google.maps.Size(width = 27, height = 27),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(0, 0)
//     }

//     for (var i = 0; i < coords.length; i++) {
//         var marker = new google.maps.Marker({
//             position: coords[i],
//             map: map,
//             icon: icon,
//             animation: google.maps.Animation.BOUNCE,
//         })
//     }

// }



// async function getMarkerCoords(array){
//     var coords = [];
//     for(var i = 0; i< array.length;i++){
//         var address = `${array[i].address}, ${array[i].city}, ${array[i].state} ${array[i].zip}`
//         var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + personalAPIKey
//         var {results} = await $.get(queryURL)
//         console.log(results[0]);
//         if(results[0]){
//             coords.push({lat:results[0].geometry.location.lat, lng:results[0].geometry.location.lng})
//         }

//     } 
//     console.log(coords)
//     initMap(coords)   
// }


export default BouncyMap;
