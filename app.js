var express = require("express")
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

var campgrounds = [{
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Granite Hill",
    image: "http://ownakoa.com/images/sales/154/154_1666_thumb.jpg"
}, {
    name: "Mountain Goat's Rest",
    image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4010/4344237662_4a094cd73c.jpg"
}];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req, res) {
    // get data from form add to camp grounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started...");
});