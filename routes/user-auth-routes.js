module.exports = function(app){
    app.get("/", function(req,res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("bsprofile", user);
        }
        else{
            res.render("login");
        }
    })

    app.get("/signup", function(req,res){
        if(req.isAuthenticated()){
            res.redirect("/bsprofile");
        }else{
           res.render("signup"); 
        }
    });
};