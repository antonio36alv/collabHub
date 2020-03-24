var db = require("../models");
const axios = require("axios");

module.exports = function(app) {
  
  app.get("/signup", (req, res) => {
    res.render("signup")
  })
/************************************************************ */ 

  app.get("/profile", async (req, res) => {

    console.log("%%%%%%%%% is logged in", req.isAuthenticated());
    if(req.isAuthenticated()){

      db.Accounts.findOne({
        where:{
          uuid: req.session.passport.user
        }
      }).then(function(dbUser){
        axios.get(`https://api.github.com/users/${dbUser.dataValues.github}?token=git: https://github.com/ on LAPTOP-9NDU5MQS at 07-Feb-2020 23:43`).then(function(result){
          var user = {
            userInfo: dbUser.dataValues,
            id: req.session.passport.user,
            isloggedin: req.isAuthenticated(),
            githubInfo: result
          }
          console.log(result);
          res.render("profile", user);
          
        });
      })
    }
    else {
      var user = {
          id: null,
          isloggedin: req.isAuthenticated()
        }
        console.log("LOCO")
      res.redirect("/signup");
    }
});

app.get("/profile", (req, res) => {
  req.isAuthenticated() ? res.render("profile", user) : res.redirect("/")

})

app.get("*", (req, res) => {
  res.render("login")
})

};
