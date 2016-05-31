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
    $scope.compiledTweets = "";

    let $searchbar = $('#searchbar');

    $('#search').click(function () {
      let searchTerm = $searchbar[0].value;

      SpotifyFactory.getArtistByString(searchTerm).then(function(albumObject) {
        console.log("albumObject", albumObject);
        $scope.albumTest = albumObject.data.name;
        // $scope.$apply(); //not needed now?
        compileTweets(albumObject.data.artists[0].name)
      });
    });


    //async task
    let getOneHundredTweets = function (queryParams) {
      return TwitterFactory.getRecentTweets(queryParams);
      //   TwitterFactory.getRecentTweets(queryParams).success(function(response) {
      //         console.log("response from node backend API", response);
      //         let text = "";
      //         response.statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");
      //         console.log("text", text);
      //         $scope.compiledTweets = text;
      //       });;
    }


    let getTweets = function (fn) {
      let iterator = fn();
      let loop = result => {
        !result.done && result.value.then(res =>
          loop(iterator.next(res)));
      };

      loop(iterator.next());
    }


    let compileTweets = function (artist) {
      let compiledList = [];
      var queryParams = `${artist}`;
      $scope.compiledTweets = "";
      var text = "";

      getTweets(function* () {
        for (let i = 0; i < 5; i++){
          // console.log("queryPARAMS", queryParams);
          let response = yield getOneHundredTweets(queryParams);
          console.log("response", response);

          response.data.statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");

          $scope.compiledTweets += text;

          if (response.data.statuses.length > 0) {
            queryParams = response.data.search_metadata.next_results;
          } else {
            console.log("EMPTY STATUSES ARR");
            break;
          }
        }
      });

    }

  }
]);