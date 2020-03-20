var db = require("../models");

module.exports = function(app) {
// GET route for finding all users
app.get("/api/search", function(req, res) {
  db.Accounts.findAll({}).then(function(users) {
    res.json(users);
  });
});

// GET route for searching by skills
app.get("/api/search/:skills", function(req, res) {
  db.Accounts.findAll({
    where: {
      skills: req.params.skills
    }
  })
    .then(function(showSkills) {
      res.json(showSkills);
    });
});

app.get("/search", function(req, res){
  res.render("search");
})
};
