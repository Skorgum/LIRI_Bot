// Node Modules & associated required code
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
moment().format();
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Variables pulled from user input
var cmd = process.argv[2];
var input = process.argv[3];
var input2 = process.argv[4];
var input3 = process.argv[5];

// additional inputs converted to search queary
search = input
if (!input2 && !input3) {
    console.log("\n" + cmd + "\n" + search);
} else if (!input3) {
    search = (input + " " + input2);
    console.log("\n" + cmd + "\n" + search);
} else {
    search = (input + " " + input2 + " " + input3);
    console.log("\n" + cmd + "\n" + search);
}

// Switch for commands
switch (cmd) {
    case "concert-this":
        command = "Concert Search: "
        concertThis(search);
        break;
    case "spotify-this-song":
        spotifyThis(search);
        break;
    case "movie-this":
        movieThis(search);
        break;
    case "do-what-it-says":
        doThis();
        break;
    default:
        console.log(`\nInvalid command.  Please try again with "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says".`)
}

// concert-this command
function concertThis(bandSearch) {
    if (!bandSearch) {
        bandSearch = "Tool"
    };
    console.log("\n==========================================================================");
    console.log("\nBeep Boop!  Now searching for the next "+ bandSearch + " concert.");
    bandSearch = bandSearch.split(" ").join("+");
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandSearch + "/events?app_id=codingbootcamp#";
    // console.log(queryUrl)
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var concert = JSON.parse(body);
            // console.log(concert);
            var concertDate = concert[0].datetime;
            // console.log(concertDate);
            var momentDate = moment().format("L");
            // console.log(momentDate)
            console.log("\n==========================================================================");
            console.log("\nVenue: " + concert[0].venue.name + "\nLocation: " + concert[0].venue.city + ", " + concert[0].venue.region + "\nDate : " + momentDate);
            console.log("\n==========================================================================");
        };
    });
};

// spotify-this-song command
function spotifyThis(songSearch) {
    if (!songSearch) {
        songSearch = "Amethyst Realm";
    };
    spotify.search({ type: "track", query: songSearch}, function(err, data) {
        if (err) {
            console.log("The following error occurred: " + err);
            return;
        } else {
            // console.log(data)
            console.log("\n==========================================================================");
            console.log("\nArtist Name: " + data.tracks.items[0].album.artists[0].name + "\nSong Name: " + data.tracks.items[0].name + "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].album.external_urls.spotify)
            console.log("\n==========================================================================");
        }
    })
}