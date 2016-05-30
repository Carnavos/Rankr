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
    $scope.compiledTweets

    let $searchbar = $('#searchbar');

    $('#search').click(function () {
      let searchTerm = $searchbar[0].value;

      SpotifyFactory.getArtistByString(searchTerm).then(function(albumObject) {
        console.log("albumObject", albumObject);
        $scope.albumTest = albumObject.data.name;
        // $scope.$apply(); //not needed now?
        getTweets(albumObject.data.artists[0].name)
      });
    });


    //think i will need to handle the multiple calls here instead of the factory to get more than 100 tweets
    function getTweets (artist) {
      TwitterFactory.getRecentTweets(artist,'PLACEHOLDER_ALBUM', 'SINCE_DATE', 'UNTIL_DATE').success(function(response) {
            console.log("response from node backend API", response);
            let text = "";
            response.statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");
            console.log("text", text);
            $scope.compiledTweets = text;
          });;
    }

  }
]);