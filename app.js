var express      = require("express"),
    app          = express(),
    mongoose     = require("mongoose"),
    bodyParser   = require("body-parser");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
    name: "Granite Hill",
    image: "http://ownakoa.com/images/sales/154/154_1666_thumb.jpg",
    description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
}, function(err, campground) {
    if (err) {
        console.log(err);
    } else {
        console.log("NEWLY CREATED CAMPGROUND");
        console.log(campground);
    } 
});*/
// END SCHEMA SETUP

app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX
app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});   
        }
    });
});

//CREATE
app.post("/campgrounds", function(req, res) {
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
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//SHOW
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the provided ID
    var id = req.params.id;
    Campground.findById(id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
               res.render("show", {campground: foundCampground});
        }
    });
    
    //render show template with that campground
 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started...");
});