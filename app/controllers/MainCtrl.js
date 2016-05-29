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
    // $scope.tempArtistId = "1ZwdS5xdxEREPySFridCfh";
    // $scope.tempAlbumId = "6IaWlt7CLWVONECmbU4OHp";
    $scope.testAlbumString = 'All Eyez on Me';




    // SpotifyFactory getArtistByString test
  	SpotifyFactory.getArtistByString($scope.testArtistString).then(
  		artistObject => {
				console.log(`artist: `, artistObject);
				console.log(`artist: `, artistObject.data.artists.items[0].name);
				// new promise
				return SpotifyFactory.getArtistAlbumsByArtistId(artistObject.data.artists.items[0].id);
  		},
  		err => console.log(err)
		)

    // SpotifyFactory getArtistAlbumsByArtistId test
  	.then(
  		albumsObject => {
				console.log(`albums: `, albumsObject.data.items);
				// console.log(`first album: `, albumsObject.data.items[0].name);
				console.log(`first album: `, albumsObject.data.items[0].name);
				// next promise
				return SpotifyFactory.getAlbumDetailByAlbumId(albumsObject.data.items[0].id)
  		},
  		err => console.log(err)
		)

    // SpotifyFactory getAlbumDetailByAlbumId test
  	.then(
  		albumObject => {
				console.log(`specific album object: `, albumObject);
				console.log(`specific album name: `, albumObject.data.name);
				console.log(`specific album date: `, albumObject.data.release_date);
				console.log(`specific album date precision: `, albumObject.data.release_date_precision);
  		},
  		err => console.log(err)
		);


  	// SpotifyFactory getArtistByString test
  	SpotifyFactory.getAlbumByString($scope.testAlbumString).then(
  		albumObject => {
				console.log(`album by string: `, albumObject);
				return SpotifyFactory.getAlbumDetailByAlbumId(albumsObject.data.items[0].id)
  		},
  		err => console.log(err)
		)
  	.then(
  		albumObject => {
				console.log(`specific album object: `, albumObject);
				console.log(`specific album name: `, albumObject.data.name);
				console.log(`specific album date: `, albumObject.data.release_date);
				console.log(`specific album date precision: `, albumObject.data.release_date_precision);
  		},
  		err => console.log(err)
		);

  }
]);