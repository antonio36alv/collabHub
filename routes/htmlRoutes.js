var db = require("../models");

// const publicFolder = path.join(__dirname, "public")
module.exports = function(app) {
  

  app.get("/", (req, res) => {
    res.render("login")
  })

  app.get("/signup", (req, res) => {
    res.render("signup")
  })
 


  app.post("/bsprofile", (req, res) => {
  
    // console.log("jajaja")
    console.log(req.body.email)
    db.Accounts.findOne({
      where : {
          email: "w@w.com"//req.query.email
      }
    }).then( user => {
// console.log(user.dataValues)
    // return fs.writeFile(res.render("bsprofile", user.dataValues))

    sodo()
    async function sodo(){
      return res.render("bsprofile", user.dataValues)

    }
  })
  })

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
