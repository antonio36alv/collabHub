var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


//  search by skills
$("#SEARCHBUTTONID").on("click", function() {
  event.preventDefault();




// var skillSearch = function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
// };

  // var skillSearch = $("#eventInput").val().trim();
  
  // $.ajax({
  //     url: yelpURL,
  //     method: "GET",
  //     headers: {
  //         Authorization: "Bearer l4dXS90kQrRBL2LozspYQ6nqfKa1tcrm7lgZuh3sGm7pFPp4cMPhbFqtZDuB9OqgrAvFbnrDGoDfrGJWTqquDaNQiHdvU1XWKPVMtkFvghvKFFVr7NNrwOkPUl9NXnYx",
  //     },
  //     dataType: "json"
  // })
  
  // .then(function(response) {
  //     //console.log(response);
  //     $("#yelpCard").empty();
  //     var newPlace = response.businesses;
  //     var placeArr = [];
  //     //Each item in the array is a different location 
  //     for (var i = 0; i < newPlace.length; i++) {
  //         //Updating map with Yelp location - setting each item in an array to an object with lat, long coordinates
  //         placeArr.push({lat: newPlace[i].coordinates.latitude, lng: newPlace[i].coordinates.longitude});
          
  //         //Crating the card tags for materialize
  //         var newCard = $("<div>").addClass("card sticky-action");
  //         var newCardImage = $("<div>").addClass("card-image waves-effect waves-block waves-light");
  //         var newCardTitle = $("<span>").addClass("card-title activator");
  //         var newCardContent = $("<div>").addClass("card-content");
  //         var newCardReveal = $("<div>").addClass("card-reveal");
  //         var newCardAction = $("<div>").addClass("card-action");


  //Crating the card tags for materialize
  var newCard = $("<div>").addClass("card sticky-action");
  var newCardImage = $("<div>").addClass("card-image waves-effect waves-block waves-light");
  var newCardTitle = $("<span>").addClass("card-title activator");
  var newCardContent = $("<div>").addClass("card-content");
  var newCardReveal = $("<div>").addClass("card-reveal");
  var newCardAction = $("<div>").addClass("card-action");

  //if there is no image then use a placeholder image of yelp's logo
  if (newPlace[i].image_url !== "") {
      newCardImage.append($("<img src=" + newPlace[i].image_url + ">").addClass("activator"));
  } else {
      newCardImage.append($("<img src=https://cdn.worldvectorlogo.com/logos/yelp-icon.svg>").addClass("activator").css({"width": "35%", "height": "35%"}));
  }

  //Adds a icon to the clickable title section of the card
  newCardTitle.text(newPlace[i].name).append(($("<i>").addClass("fas fa-ellipsis-v right")));
  newCardContent.append(newCardTitle);

  //Creates a sub-title based on the tags used by yelp - each item is seperated by a comma
  var tempString = "";
  for (var j = 0; j < newPlace[i].categories.length; j++) {
      tempString += newPlace[i].categories[j].title;
      //If the tag is the last one then do not add a comma after it
      if (j !== newPlace[i].categories.length - 1) {
          tempString += ", ";
      }
  }
  newCardContent.append($("<p>").text(tempString));
  //What appears when the card is clicked - the address and the phone number 
  newCardReveal.append($("<span>").addClass("card-title grey-text text-darken-4").text(newPlace[i].name).append($("<i>").addClass("fas fa-times right")));
  newCardReveal.append($("<p>").text(newPlace[i].location.display_address[0] + " " + newPlace[i].location.display_address[1]));
  newCardReveal.append($("<p>").text(newPlace[i].display_phone));
  //Clickable website link that opens in the new tab - locked in place on the card so it will always be visible
  newCardAction.append($("<a href=" + newPlace[i].url + ">").attr("target", "_blank").text("Website"));
  //Appending every section to the parent section of "card"
  newCard.append(newCardImage, newCardContent, newCardReveal, newCardAction);
  //Then appending that card to the page
  $("#yelpCard").append(newCard);
}
//Calls the map function after the for loop - so each element of the array is a coordinate of a place
initMap(placeArr);
});





// location search box

var locSearch = function() {
    return $.ajax({
      url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCN-XL9PDbfkTxj94nhey8QPCSgYplfpvM",
      data: {
          sensor: false,
          address: address
      },
      dataType: "jsonp",
      success: function(data){
        console.log(data)
      }
    });
};

locSearch()




