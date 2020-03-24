var db = require("../models");

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
      }).then(function (dbUser) {
        var user = {
          userInfo: dbUser.dataValues,
          id: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        }
        res.render("profile", user);
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
