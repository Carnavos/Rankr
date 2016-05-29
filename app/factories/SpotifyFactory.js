"use strict";

// get artist by string
// get artist albums by artist id
// get album detail by album id

app.factory("SpotifyFactory", function ($http, firebaseURL) {

  return {

    getArtistByString(artistString) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory getArtist Test`);
        let tempArtist = "tupac";
        $http
          // spotify api request url
          // "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist"
          .get(`https://api.spotify.com/v1/search?q=${artistString}&type=artist&limit=1`)
          .then(
            // delivers all Firebase upsells
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    },

    getArtistAlbumsByArtistId(artistId) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory getAlbums Test`);
        let tempArtistId = "1ZwdS5xdxEREPySFridCfh";
        $http
          // spotify api request url
          // .get(`https://api.spotify.com/v1/artists/${tempArtistId}/albums`)
          .get(`https://api.spotify.com/v1/artists/${tempArtistId}/albums`)
          .then(
            // delivers all Firebase upsells
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    },

    getAlbumDetailByAlbumId(albumId) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory specfic album Test`);
        let tempAlbumId = "1ZwdS5xdxEREPySFridCfh";
        $http
          // spotify api request url
          // .get(`https://api.spotify.com/v1/artists/${tempAlbumId}/albums`)
          .get(`https://api.spotify.com/v1/albums/${albumId}`)
          .then(
          	// delivers all Firebase upsells
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    }

    // more methods here
  }

});
