"use strict";

app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$location",
  "firebaseURL",
  "SpotifyFactory",

  function ($scope, $http, $location, firebaseURL, SpotifyFactory) {
		
		// sample 2Pac queries    
    $scope.testArtistString = 'tupac';
    $scope.tempArtistId = "1ZwdS5xdxEREPySFridCfh";
    $scope.tempAlbumId = "6IaWlt7CLWVONECmbU4OHp";


    // SpotifyFactory getArtistByString test
  	SpotifyFactory.getArtistByString($scope.testArtistString).then(
  		artistObject => {
  			// should be matching string to string
				console.log(`artist: `, artistObject);
				console.log(`artist: `, artistObject.data.artists.items[0].name);
  		},
  		err => console.log(err)
		);

    // SpotifyFactory getArtistAlbumsByArtistId test
  	SpotifyFactory.getArtistAlbumsByArtistId($scope.tempArtistId).then(
  		albumsObject => {
  			// should be matching string to string
				console.log(`albums: `, albumsObject);
				console.log(`first album: `, albumsObject.data.items[0].name);
  		},
  		err => console.log(err)
		);

    // SpotifyFactory getAlbumDetailByAlbumId test
  	SpotifyFactory.getAlbumDetailByAlbumId($scope.tempAlbumId).then(
  		albumObject => {
  			// should be matching string to string
				console.log(`specific album object: `, albumObject);
				console.log(`specific album name: `, albumObject.data.name);
				console.log(`specific album date: `, albumObject.data.release_date);
				console.log(`specific album date precision: `, albumObject.data.release_date_precision);
  		},
  		err => console.log(err)
		);

  }
]);