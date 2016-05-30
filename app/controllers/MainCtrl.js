"use strict";

app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$location",
  "firebaseURL",
  "TwitterFactory",
  "TextProcessingFactory",

  function ($scope, $http, $location, firebaseURL, TwitterFactory, TextFactory) {
    
    $('#search').click(function () {
      $http.get(`https://api.spotify.com/v1/search?q=tupac&type=artist&limit=1`).then( (response) => {
        let artist = response.data.artists.items[0];
        console.log(artist);
        }, (error) => console.log("error", error))
      });

    let statuses = TwitterFactory.getRecentTweets('tupac','all eyez on me', 300);

    console.log("statuses", statuses);

    let text = "";

    statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");

    console.log("text", text);

  }
]);