module.exports = function(app){
    app.get("/", function(req,res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.render("home", user);
        }
        else{
            res.render("home");
        }
    })

    app.get("/list-items", function(req,res){
        res.render("search");
    });

    app.get("/signup", function(req,res){
        if(req.isAuthenticated()){
            res.redirect("/acounts/view");
        }else{
           res.render("accounts"); 
        }
    });

    app.get("/add-items", function(req, res){
        if(req.isAuthenticated()){
            res.render("add-items");
        }else {
            res.redirect()
        }
    })
};