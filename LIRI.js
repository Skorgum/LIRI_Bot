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