"use strict";

// get artist by string
// get artist albums by artist id
// get album detail by album id

app.factory("SpotifyFactory", function ($http, firebaseURL) {

    function getArtistByStringLocal(artistString) {
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
    };

    function getArtistAlbumsByArtistId(artistId) {
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
    };
    
    function getAlbumDetailByAlbumId(albumId) {
      return new Promise((resolve, reject) => {
        console.log(`SpotifyFactory specfic album Test`);
        $http
          // spotify api request url
          .get(`https://api.spotify.com/v1/albums/${albumId}`)
          .then(
            spotifyObject => resolve(spotifyObject),
            error => reject(error)
          );
      })
    };

  return {

    getArtistByString(artistString) {
      return new Promise((resolve, reject) => { // temp promise

        getArtistByStringLocal(artistString).then(
          artistObject => {
            console.log(`artist: `, artistObject);
            console.log(`artist: `, artistObject.data.artists.items[0].name);
            // new promise
            return getArtistAlbumsByArtistId(artistObject.data.artists.items[0].id);
          },
          err => console.log(err)

        )
        .then(
          albumsObject => {
            console.log(`albums: `, albumsObject.data.items);
            // console.log(`first album: `, albumsObject.data.items[0].name);
            console.log(`first album: `, albumsObject.data.items[0].name);
            return getAlbumDetailByAlbumId(albumsObject.data.items[0].id);
          },
          err => console.log(err)
        ).
        then(
          albumObject => {
            console.log(`specific album object: `, albumObject);
            console.log(`specific album name: `, albumObject.data.name);
            console.log(`specific album date: `, albumObject.data.release_date);
            console.log(`specific album date precision: `, albumObject.data.release_date_precision);
            console.log(`albumObject.data.name: `, albumObject.data.name);
            resolve(albumObject.data.name);
          },
          err => console.log(err)
        );
        
      }) // promise end
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
