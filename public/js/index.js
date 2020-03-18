var db = require("../models/accountModel.js");

var passport = require('passport');

module.exports = function (app) {

    app.get("/signup", function (req, res) {
        res.render("accounts");
    });

    app.get("/accounts/view", function (req, res) {
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
                res.render("view-account", user);
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
                return res.send({ success: false, message: 'authentication failed' });
            }
            req.login(user, loginErr => {
                if (loginErr) {
                    console.log("loginerr", loginerr)
                    return next(loginErr);
                }
                console.log('redirecting....');
                res.cookie('first_name', user.first_name);
                res.cookie('user_id', user.uuid);
                return res.redirect("/accounts/view");
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

                return res.json(true);

            });
        })(req, res, next);
    });
}
//Antonio^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
