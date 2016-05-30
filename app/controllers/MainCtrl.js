"use strict";

app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$location",
  "firebaseURL",
  "TwitterFactory",
  "TextProcessingFactory",
  "SpotifyFactory",

  function ($scope, $http, $location, firebaseURL, TwitterFactory, TextFactory, SpotifyFactory) {


  	//move this to a helper factory
      //want unique album names
  	// function uniques(arr) {
   //    var a = [];
   //    for (var i=0, l=arr.length; i<l; i++)
   //        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
   //            a.push(arr[i]);
   //    return a;
   //  }
    

		// sample 2Pac queries    
    $scope.testArtistString = 'tupac';
    $scope.albumTest = '';

    $scope.albums = [];

    let $searchbar = $('#searchbar');

    $('#search').click(function () {
      let searchTerm = $searchbar[0].value;

      SpotifyFactory.getArtistByString(searchTerm).then(function(albumObject) {
        $scope.albumTest = albumObject;
        $scope.$apply();
      });
    });


    //think i will need to handle the multiple calls here instead of the factory to get more than 100 tweets

    let statuses = TwitterFactory.getRecentTweets('tupac','all eyez on me', 'since', 'until').success(function(response) {
          console.log("response from node backend API", response);
          let text = "";
          response.statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");
          console.log("text", text);
        });;

  }
]);