"use strict";

app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$location",
  "firebaseURL",

  function ($scope, $http, $location, firebaseURL) {
    
    $('#search').click(function () {
      $http.get(`https://api.spotify.com/v1/search?q=tupac&type=artist&limit=1`).then( (response) => {
        let artist = response.data.artists.items[0];
        console.log(artist);
        }, (error) => console.log("error", error))
      });
  }
]);