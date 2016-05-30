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
    

    let $searchbar = $('#searchbar');

    $('#search').click(function () {
			let searchTerm = $searchbar[0].value;

      SpotifyFactory.getArtistByString(searchTerm).then(function(albumObject) {
        $scope.albumTest = albumObject;
        $scope.$apply();
      });


	// 		SpotifyFactory.getArtistByString(searchTerm).then(
 //  		artistObject => {
	// 			return SpotifyFactory.getArtistAlbumsByArtistId(artistObject.data.artists.items[0].id);
 //  		},
 //  		err => console.log(err)
	// 	)

 //    // SpotifyFactory getArtistAlbumsByArtistId test
 //  	.then(
 //  		albumsObject => {
 //  			$scope.albums = uniques(albumsObject.data.items);
	// 			return SpotifyFactory.getAlbumDetailByAlbumId($scope.albums[0].id)
 //  		},
 //  		err => console.log(err)
	// 	)

 //    // SpotifyFactory getAlbumDetailByAlbumId test
 //  	.then(
 //  		albumObject => {
 //  			console.log("albumObj", albumObject);
 //  			$scope.albumTest = albumObject.data.release_date;
 //  		},
 //  		err => console.log(err)
	// 	);
	});


    let statuses = TwitterFactory.getRecentTweets('tupac','all eyez on me', 300);

    console.log("statuses", statuses);

    let text = "";

    statuses.forEach( (status) => text += TextFactory.formatTweetText(status.text) + " ");

    console.log("text", text);



		// sample 2Pac queries    
    $scope.testArtistString = 'tupac';
    $scope.albumTest = '';

    $scope.albums = [];


  }
]);