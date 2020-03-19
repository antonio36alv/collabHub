var db = require("../models");

module.exports = function(app) {
  
  app.get("/signup", (req, res) => {
    res.render("signup")
  })
 

  app.get("/bsprofile/:email", (req, res) => {
    console.log("SOMETHING DID HAPPEN I SAW SOMETHING")


    db.Accounts.findOne({
      where : {
          email: req.params.email
      }
    }).then( (err, user) => {
    
      // console.log(data)
      console.log("did this happen?")
      return res.render("bsprofile", user)
    })
    //find appropiate user via email
    //
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
