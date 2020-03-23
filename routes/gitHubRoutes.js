var http = require("http");

HTTP.headers(:accept => "application/json")
  .get("https://github.com/users/:username/projects")


// USING LIST USER PROJECTS API FOUND HERE:
// https://developer.github.com/v3/projects/#list-user-projects

// To access the API during the preview period, you must provide a custom media type in the Accept header:
application/vnd.github.v3+json



// curl -i https://api.github.com/users/:username/projects


var queryURL = "https://api.github.com/users/:username/projects"
$.ajax({url:queryURL, method: 'GET'})
    .done(function(response) {
        console.log(response);
    })