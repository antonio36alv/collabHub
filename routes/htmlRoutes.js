var db = require("../models");

module.exports = function(app) {
  
  app.get("/signup", (req, res) => {
    res.render("signup")
  })
/************************************************************ */ 

  app.get("/bsprofile", async (req, res) => {
/*
    const email = req.params.email

    await db.Accounts.findOne({
      where : {
          email: email
      }
    }).then( user => {
    
      console.log(user.dataValues)
      
      res.render("bsprofile", user.dataValues)
    })
  })*/
    console.log("%%%%%%%%% is logged in", req.isAuthenticated());
    if(req.isAuthenticated()){
       // var user = {
       //    id: req.session.passport.user,
       //    isloggedin: req.isAuthenticated()
       //  }
      db.Accounts.findOne({
        where:{
          uuid: req.session.passport.user
        }
      }).then(function(dbUser){
        var user = {
          userInfo: dbUser.dataValues,
          id: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        }
        res.render("bsprofile", user);//maybe change
      })
    }
    else {
      var user = {
          id: null,
          isloggedin: req.isAuthenticated()
        }
      res.redirect("/");
    }
});
//   app.get("/signup", function(req,res){
//     if(req.isAuthenticated()){
//         // res.redirect("/acounts/view");
//         res.end("end")
//     }else{
//        res.render("signup"); 
//     } 
// });

app.get("/profile", (req, res) => {
  res.render("profile")
})

  app.get("*", (req, res) => {
    res.render("login")
  })

};
