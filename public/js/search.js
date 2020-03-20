$(document).ready(function() {

var searchResults = $(".search-results");
var skillsSelect = $("#skillsDropdown");

//  click events for dropdown search --THIS IS WHERE I'M STUCK
$(document).on("click", "button.delete", handlePostDelete);
$(document).on("click", "button.edit", handlePostEdit);
postCategorySelect.on("change", handleCategoryChange);
var posts;

// GET route for getting all of the posts
app.get("/api/posts/id", function(req, res) {
  // Add sequelize code to find all posts, and return them to the user with res.json
  db.blogPost.findAll({
    
  })
  
  .then(function(data) {
    res.json(data);
  });

// }Get route for returning posts of a specific category
app.get("/api/posts/category/:category", function(req, res) {
  // Add sequelize code to find all posts where the category is equal to req.params.category,
  // return the result to the user with res.json
});

});

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
