"use strict";

// get artist by string
// get artist albums by artist id
// get album detail by album id

app.factory("SpotifyFactory", function ($http, firebaseURL) {

  return {

    getArtistByString(artistString) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory getArtist Test`);
        $http
          // spotify api request url
          .get(`https://api.spotify.com/v1/search?q=${artistString}&type=artist&limit=1`)
          .then(
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    },

    getArtistAlbumsByArtistId(artistId) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory getAlbums Test`);
        $http
          // spotify api request url
          .get(`https://api.spotify.com/v1/artists/${artistId}/albums`)
          .then(
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    },

    getAlbumDetailByAlbumId(albumId) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory specfic album Test`);
        $http
          // spotify api request url
          // .get(`https://api.spotify.com/v1/artists/${tempAlbumId}/albums`)
          .get(`https://api.spotify.com/v1/albums/${albumId}`)
          .then(
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    },

    getAlbumByString(albumString) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory Album Search Test`);
        $http
          // spotify api request url
          .get(`https://api.spotify.com/v1/search?q=${albumString}&type=album&limit=1&album_type=album`)
          .then(
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    }

    // more methods here
  }

});
