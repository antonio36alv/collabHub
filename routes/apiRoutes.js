var db = require("../models");
var data = require("/public/search.js");

module.exports = function(app) {
// GET route for finding all users
app.get("/api/search", function(req, res) {
  db.Accounts.findAll({}).then(function(users) {
    res.json(users);
  });
});

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
};
