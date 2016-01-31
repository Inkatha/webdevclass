var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
// Automatically calls the contents of middleware if it's named index.js
var middleware = require("../middleware");

//INDEX
router.get("/", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campground/index", {campgrounds: allCampgrounds});   
        }
    });
});

//CREATE
router.post("/", middleware.isLoggedIn, function(req, res) {
    // get data from form add to camp grounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name, 
        image: image, 
        description: desc,
        author: author
    };
    
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campground/new");
});

//SHOW
router.get("/:id", function(req, res) {
    //find the campground with the provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("campground/show", {campground: foundCampground});
        }
    });
});

// EDIT 
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            res.redirect("back");
        }
        res.render("campground/edit", {campground: foundCampground});
    });
});

// UPDATE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.edit, function(err, updatedCampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + updatedCampground.id);
        }
    });
});

// DESTROY
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
       if(err) {
           res.redirect("/campgrounds");
       } else {
           res.redirect("/campgrounds");
       }
    });
}); 
module.exports = router;