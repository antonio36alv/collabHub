var db = require("../models");
const axios = require("axios");

module.exports = function (app) {

  app.get("/signup", (req, res) => {
    res.render("signup")
  })

  app.get("/profile", async (req, res) => {

    console.log("%%%%%%%%% is logged in", req.isAuthenticated());

    if (req.isAuthenticated()) {

      db.Accounts.findOne({
        where: {
          uuid: req.session.passport.user
        }
      }).then(function(dbUser){
        // Github API call 
        axios.get(`https://api.github.com/users/${dbUser.dataValues.github}`).then(function(result){
// //  Pulls info we want from each person from Github
        var gitHubObject = {
            photo: result.data.avatar_url,
            ifNoPhoto: result.data.gravatar_id,
            gitHubProfile: result.data.html_url,
          }
          // ITS WORKING
          // console.log(gitHubObject);
// Axios call to pull top 3 repos from user 

// Then create another variable to store repo object

// Creates standard user data; needs to be nested inside all other api calls 
          var user = {
            userInfo: dbUser.dataValues,
            id: req.session.passport.user,
            isloggedin: req.isAuthenticated(),
            githubInfo: gitHubObject,
          }
          console.log(gitHubObject);
//  Completes info in profile page
          res.render("profile", user);
          
        });
      })
    }
    else {
      var user = {
        id: null,
        isloggedin: req.isAuthenticated()
      }
      res.redirect("/signup");
    }
  });

  app.get("view/profile/:email", (req, res) => {

    if (req.isAuthenticated()) {

      db.Accounts.findOne({
        where: {
          email: req.params.email
        }
      }).then(dbUser => {
        console.log(dbUser.dataValues)

        res.render("profile", dbUser.dataValues)
      })
    }
  })

  app.get('/logout', function (req, res) {

    req.session.destroy(function (err) {
      req.logout();
      res.clearCookie('user_sid');
      res.clearCookie('first_name');
      res.clearCookie('user_id');
      res.redirect('/');
    })
  });

  app.get("*", (req, res) => {
    res.render("login")
  })

};
