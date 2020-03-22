// This file is in the "routes" folder, connecting to the data

var db = require("../models");

module.exports = function(app) {
// GET route for finding all users - not used in MVP
// app.get("/api/search", function(req, res) {
//   db.Accounts.findAll({}).then(function(users) {
//     res.json(users);
//   });
// });

// GET route for searching by skills
app.get("/api/search/:skill", function(req, res) {
  console.log(req.params.skill);
  db.Accounts.findAll({
    where: {
      skills: req.params.skill
    }
  })
    .then(function(showSkills) {
      console.log(showSkills);
      res.json(showSkills);
    });
});

app.get("/search", function(req, res){
  res.render("search");
})
}
