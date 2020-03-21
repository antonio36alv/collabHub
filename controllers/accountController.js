var db = require("../models/accountModel.js");

var passport = require('passport');

module.exports = function (app) {

    // app.get("/signup", function (req, res) {
    //     res.render("accounts");
    // });

    app.get("/profile", function (req, res) {
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
            res.redirect("/profile");//og had redirect("/")
        }

    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            req.logout();
            res.clearCookie('user_sid');
            res.clearCookie('first_name');
            res.clearCookie('user_id');
            res.redirect('/');
        })
    });
    
    app.post('/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            console.log("info", info);
            if (err) {
                console.log("passport err", err);
                return next(err); // will generate a 500 error
            }
            if (!user) {
                console.log("user error", user);
                console.log(user)
                return res.send({ success: false, message: 'authentication failed' });
                //sends json @LOOKATTHIS
            }
            req.login(user, loginErr => {
                if (loginErr) {
                    console.log("loginerr", loginerr)
                    return next(loginErr);
                }
                console.log('redirecting....');
                res.cookie('first_name', user.first_name);
                res.cookie('user_id', user.uuid);
                return res.redirect("/profile");
            });
        })(req, res, next);
    });

    app.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            console.log("\n\n\n########userrrr", user)
            if (err) {
                console.log("passport err", err);
                return next(err); // will generate a 500 error
            }
            if (!user) {

                return res.send({ success: false, message: 'authentication failed' });
            }
            req.login(user, loginErr => {
                if (loginErr) {
                    console.log("loginerr", loginErr)
                    return next(loginErr);
                }

                console.log('redirecting....')
                res.cookie('first_name', user.first_name);
                res.cookie('user_id', user.uuid);

                return res.redirect("/profile");
            });
        })(req, res, next);
    });
}