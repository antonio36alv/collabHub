var db = require("../models");

module.exports = function(app) {
  
  app.get("/signup", (req, res) => {
    res.render("signup")
  })
/************************************************************ */ 

  app.get("/bsprofile/:email", (req, res) => {
    console.log("SOMETHING DID HAPPEN I SAW SOMETHING")


    db.Accounts.findOne({
      where : {
          email: req.params.email
      }
    }).then( user => {
    
      console.log(user.dataValues)
      console.log("did this happen?")
      return res.render("bsprofile", user)
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

app.get("/profile", (req, res) => {
  res.render("profile")
})

  app.get("*", (req, res) => {
    res.render("login")
  })

};
