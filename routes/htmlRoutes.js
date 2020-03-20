var db = require("../models");

module.exports = function(app) {
  

  app.get("/", (req, res) => {
    res.render("login")
  })

  app.get("/signup", (req, res) => {
    res.render("signup")
  })
/************************************************************ */ 



app.post('/login', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    console.log("info", info);
    if (err) {
      console.log("passport err", err);
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      console.log("user error", user);
      return res.send({ success : false, message : 'authentication failed' });
    }
    
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************

    req.login(user, loginErr => {
      if (loginErr) {
        console.log("loginerr", loginerr)
        return next(loginErr);
      }
      //var userId = user.dataValues.id;
      console.log('redirecting....');
      
      res.cookie('first_name', user.first_name);
      res.cookie('user_id', user.uuid );
      return res.redirect("/bsprofile");
    });      
  })(req, res, next);
});

/************************************************************ */ 


  /*app.post("/login", (req, res) => {
  
    // console.log("jajaja")
    console.log(req.body.email)
    db.Accounts.findOne({
      where : {
          email: "w@w.com"//req.query.email
      }
    }).then( user => {
// console.log(user.dataValues)
    // return fs.writeFile(res.render("bsprofile", user.dataValues))

      return res.render("bsprofile", user.dataValues)

  })
  })*/

  app.get("/bsprofile", (req, res) => {
    console.log("SOMETHING DID HAPPEN I SAW SOMETHING")

    // console.log(req.query)
    db.Accounts.findOne({
      where : {
          email: req.query.email
      }
    }).then( user => {
    
      // console.log(user.dataValues)
      
      // res.redirect("/bsprofile" + req.query.email)
      res.render("bsprofile", user)
      // res.redirect("/bsprofile/" + req.params.email)
    })
  })
//   app.get("/signup", function(req,res){
//     if(req.isAuthenticated()){
//         // res.redirect("/acounts/view");
//         res.end("end")
//     }else{
//        res.render("signup"); 
//     } 
// });

  app.get("*", (req, res) => {
    res.render("login")
  })

};
