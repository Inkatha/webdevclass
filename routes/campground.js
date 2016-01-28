var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX
router.get("/", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campground/index", {campgrounds:allCampgrounds});   
        }
    });
});

//CREATE
router.post("/", function(req, res) {
    // get data from form add to camp grounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {
        name: name, 
        image: image, 
        description: desc
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
router.get("/new", function(req, res) {
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

module.exports = router;