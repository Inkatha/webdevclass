var express               = require("express"),
    app                   = express(),
    mongoose              = require("mongoose"),
    bodyParser            = require("body-parser"),
    Campground            = require("./models/campground"),
    Comment               = require("./models/comment"),
    methodOverride        = require("method-override"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    expressSession        = require("express-session"),
    User                  = require("./models/user"),
    seedDB                = require("./seeds"),
    flash                 = require("connect-flash");
    

// REQUIRE ROUTES   
var commentRoutes      = require("./routes/comments"),
    campgroundsRoutes  = require("./routes/campground"),
    indexRoutes        = require("./routes/index");
    
//mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://malik:501c3tax@ds055565.mongolab.com:55565/malikyelpcamp");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require("express-session") ({
    secret: "welcome to the jungle",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(flash());
seedDB();




// PASSPORT CONFIGURATION
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error")
    next();
});

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// USE ROUTES    
app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundsRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started...");
});