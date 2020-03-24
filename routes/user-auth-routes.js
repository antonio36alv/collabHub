const passport = require("passport")

module.exports = function(app){
    app.get("/", function(req,res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("profile", user);

        } 
        else{
            res.render("login");
        }
    });

    app.get("/signup", function(req,res){
      console.log("user off");
        if(req.isAuthenticated()){
            res.redirect("/profile");
        }else{
           res.render("signup"); 
        }
    });

    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
          // console.log("\n\n\n########userrrr", user)
          if (err) {
            console.log("passport err", err);
            return next(err); // will generate a 500 error
          }
          if (!user) {
    
            return res.send({ success : false, message : 'authentication failed'});
          }
          req.login(user, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginErr)
              return next(loginErr);
            }
     
            console.log('redirecting....')
            res.cookie('first_name', user.first_name);
            res.cookie('user_id', user.uuid );
    
            return res.json(true);
            
          });      
        })(req, res, next);
      });

    
};