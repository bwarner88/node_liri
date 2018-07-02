require("./.env").config();

var spotify = new Spotify(keys.spotify);


var keys = require('./keys.js');
var twitter = require("twitter");
var spotifyReq = require("spotify");
var axios = require("axio");
var fs = require('fs');

var term = process.argv[2]
var search = process.argv.slice(3).join(" ");


var getTweet = function () {
    var client = new Twitter(keys.twitter);

    var userName = {
        screen_name: "BrianWarner",
        count: 20
    }

    client.get('statuses/user_timeline', userName, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                var returnedData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(returnedData);
            }
        }
    });


}

var argParams = function(){
    if(term === 'my-tweets'){
        getTweet();
    }
}
argParams();

