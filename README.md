# LIRI_Bot


## OVERVIEW

This is a node application that will allow you to search for information based on the commands given when initalizing the app.  Currently the APIs used are:

* Bandsintown
* Spotify
* OMDb


## USAGE

The application is initialized from either the command line or the Git Bash terminal.  After navigating to the app's directory, enter the following without <>'s:
`node liri.js <command> <what you are searching for>`


## COMMANDS

### concert-this

![concert-this screenshot](https://github.com/Skorgum/LIRI_Bot/blob/master/screenshots/concert-this.JPG)

This command will provide you with information concerning the next scheduled concert for the band that you enter.  It will return:

* Venue name
* Location
* Date of concert

If no search is specified, it will default to Clutch.

### spotify-this-song

![spotify-this screenshot](https://github.com/Skorgum/LIRI_Bot/blob/master/screenshots/spotify-this-song.JPG)

This command will provide you with information concering the song that you enter.  It will return:

* Name of artist(s)
* Song name
* Album name
* Link to the song on Spotify

If no search is specified, it will default to Amethyst Realm.

### movie-this

![movie-this screenshot](https://github.com/Skorgum/LIRI_Bot/blob/master/screenshots/movie-this.JPG)

This command will provide you with information concerning the movie that you enter.  It will return:

* Movie title
* Year released
* Country
* Language(s)
* Brief plot description
* Starring actors
* IMDB rating
* Rotten Tomatoes rating

If no search is specified, it will default to The Big Lebowski.

### do-what-it-says

This command is entered without a search parameter.  It will read from the random.txt file and run a search using the command & search parameter contained within.