var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res) {
    res.render("landing");
});

// SIGN UP
router.get("/register", function(req, res) {
    res.render("register");
});
// handling user sign up
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
       if (err) {
           console.log(err);
           req.flash("error", err.message);
           return res.render('register');
       } else {
           passport.authenticate("local")(req, res, function() {
               req.flash("success", "Welcome to YelpCamp " + user.username);
              res.redirect("/campgrounds"); 
           });
       }
    });
});

// LOGIN
router.get("/login", function(req, res) {
   res.render("login");
});

// LOGIN LOGIC
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// LOGOUT LOGIC
router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "Logged you out...");
   res.redirect("/campgrounds");
});
module.exports = router;