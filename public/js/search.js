// This file is in the public/js folder, displaying results to the client.

$(document).ready(function() {
    $('select').formSelect();

    // $("button").on("click",function(){
    //     const skills = $("select").val();
    //     console.log(skills);
    //   });


var searchResults = $(".search-results");
var skillsSelect = $("#skillsDropdown");

// Creates a new object that will display on search page
$("#collabbtn").on("click", function() {
  var skill = $( "#skillsSelect option:selected" ).text();
  $.get("/api/search/" + skill)
  .then (function(data) {
    console.log(data);
  })

  })
})




// location search using Google API - icebox

// var locSearch = function() {
//     return $.ajax({
//       url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCN-XL9PDbfkTxj94nhey8QPCSgYplfpvM",
//       data: {
//           sensor: false,
//           address: address
//       },
//       dataType: "jsonp",
//       success: function(data){
//         console.log(data)
//       }
//     });
// };

// locSearch()

