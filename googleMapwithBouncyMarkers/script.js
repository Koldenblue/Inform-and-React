$(document).ready(() => {
    

    var userInfo = JSON.parse(localStorage.getItem("user")) || [];
    console.log("Each user and their information: ", userInfo);


    $("#submitButton").on("click", function(event){
        event.preventDefault();
        
        var name = $("#inputName").val();
        var address = $("#inputAddress").val();
        var cityofAddress = $("#inputCity").val();
        var stateofAddress = $("#inputState").val();
        var zipCodeofAddress = $("#inputZip").val();

        var user = {
            name : name,
            address: address,
            city: cityofAddress,
            state: stateofAddress,
            zip: zipCodeofAddress
        }

        userInfo.push(user);

        localStorage.setItem("user", JSON.stringify(userInfo));


        var addingAddresstogether = `${address} ${cityofAddress} ${stateofAddress} ${zipCodeofAddress}`;



        window.location.replace("./index.html");

    
    })


})


var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";

var userInfo = JSON.parse(localStorage.getItem("user")) || [];
console.log("user Info, local storage: " ,userInfo);
getMarkerCoords(userInfo)



function initMap(coords) {
    console.log("coords: ", coords);

    var map = new google.maps.Map(

        document.getElementById("map"),
        {
            zoom: 11,
            center: coords[coords.length -1]
        }

    );

    var icon = {

        url: "https://e7.pngegg.com/pngimages/921/324/png-clipart-us-presidential-election-2016-voting-voter-education-primary-election-voting-icon-blue-text.png",
        scaledSize: new google.maps.Size(width = 27, height = 27),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }

    for (var i = 0; i < coords.length; i++) {
        var marker = new google.maps.Marker({
            position: coords[i],
            map: map,
            icon: icon,
            animation: google.maps.Animation.BOUNCE,
        })
    }

}



async function getMarkerCoords(array){
    var coords = [];
    for(var i = 0; i< array.length;i++){
        var address = `${array[i].address}, ${array[i].city}, ${array[i].state} ${array[i].zip}`
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + personalAPIKey
        var {results} = await $.get(queryURL)
        console.log(results[0]);
        if(results[0]){
            coords.push({lat:results[0].geometry.location.lat, lng:results[0].geometry.location.lng})
        }
        
    } 
    console.log(coords)
    initMap(coords)   
}


// function initMap(){


//     var  wildlifeTrust = {lat: -1.376686, lng: 36.773051}
//     var map = new google.maps.Map(
//         document.getElementById("map"),
//         {zoom: 2, center: wildlifeTrust}
//     );

//     var marker = new google.maps.Maker({
//         position: wildlifeTrust, map: map
//     })
// }



// // code that will grab specific geolocations





