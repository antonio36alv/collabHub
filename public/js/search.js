// This file is in the public/js folder, displaying results to the client.

$(document).ready(function() {
    $('#skillsSelect').formSelect();
    

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
    $(`#searchResults`).empty();
    for (i=0; i<data.length; i++){
    const tr = $("<tr>")
    let tdName = $(`<td>${data[i].first_name} ${data[i].last_name}</td>`);
    let tdSkills = $(`<td>${data[i].skills}</td>`);
    let tdCity = $(`<td>${data[i].city}</td>`);
    // let tdProfile = $(`<td>${data[i].profile}</td>`);
    // let tdContact = "Contact";
    tr.append(tdName).append(tdSkills).append(tdCity);
    $(`#searchResults`).append(tr);
    }
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

