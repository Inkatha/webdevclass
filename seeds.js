var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");
    
var data = [
    {
        name: "Cloud's rest", 
        image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo velit, pulvinar vitae eleifend sed, porta at mauris. Integer aliquet scelerisque vulputate. Nullam tempor finibus mattis. Vivamus eu euismod ligula. Sed hendrerit ultrices ullamcorper. Morbi ac orci ut ligula porta facilisis. Vestibulum sapien ipsum, volutpat id sagittis vitae, faucibus nec nunc. Duis nec sem consectetur, auctor augue nec, ornare risus."
    },
    {
        name: "Quiet Creek", 
        image: "http://www.spiritualage.org/Data/Sites/1/GalleryImages/webimages/man110.jpg",  
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo velit, pulvinar vitae eleifend sed, porta at mauris. Integer aliquet scelerisque vulputate. Nullam tempor finibus mattis. Vivamus eu euismod ligula. Sed hendrerit ultrices ullamcorper. Morbi ac orci ut ligula porta facilisis. Vestibulum sapien ipsum, volutpat id sagittis vitae, faucibus nec nunc. Duis nec sem consectetur, auctor augue nec, ornare risus."
    },
    {
        name: "Silent Stream", 
        image: "http://www.myharriman.com/wp-content/uploads/2013/07/camping_at_night.jpg",  
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo velit, pulvinar vitae eleifend sed, porta at mauris. Integer aliquet scelerisque vulputate. Nullam tempor finibus mattis. Vivamus eu euismod ligula. Sed hendrerit ultrices ullamcorper. Morbi ac orci ut ligula porta facilisis. Vestibulum sapien ipsum, volutpat id sagittis vitae, faucibus nec nunc. Duis nec sem consectetur, auctor augue nec, ornare risus."
    },
]

function seedDB() {
/*    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Remove campgrounds!");
            // Add each campground in the array of data objects
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                    }
                });
            });
        }
    }); 
    // Add a few campgrounds
    
    
    // Add a few comments*/
}    
module.exports = seedDB;
