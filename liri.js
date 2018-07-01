require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var term = process.argv[2]
var search = process.argv.slice(3).join(" ");

