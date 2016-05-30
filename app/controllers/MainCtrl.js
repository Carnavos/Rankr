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
    $scope.albumTest = '';

    SpotifyFactory.getArtistByString($scope.testArtistString).then(function(albumObject) {
    	$scope.albumTest = albumObject;
   		$scope.$apply();
  	});

  //   // SpotifyFactory getArtistAlbumsByArtistId test
  // 	.then(
  // 		albumsObject => {
		// 		console.log(`albums: `, albumsObject.data.items);
		// 		// console.log(`first album: `, albumsObject.data.items[0].name);
		// 		console.log(`first album: `, albumsObject.data.items[0].name);
		// 		// next promise
		// 		return SpotifyFactory.getAlbumDetailByAlbumId(albumsObject.data.items[0].id)
  // 		},
  // 		err => console.log(err)
		// )

  //   // SpotifyFactory getAlbumDetailByAlbumId test
  // 	.then(
  // 		albumObject => {
		// 		console.log(`specific album object: `, albumObject);
		// 		console.log(`specific album name: `, albumObject.data.name);
		// 		console.log(`specific album date: `, albumObject.data.release_date);
		// 		console.log(`specific album date precision: `, albumObject.data.release_date_precision);
		// 		// return albumObject.something;
  // 		},
  // 		err => console.log(err)
		// );

		//


  // 	// SpotifyFactory getAlbumByString test
  // 	SpotifyFactory.getAlbumByString($scope.testAlbumString).then(
  // 		albumObject => {
		// 		console.log(`album by string: `, albumObject);
		// 		return SpotifyFactory.getAlbumDetailByAlbumId(albumObject.data.albums.items[0].id)
  // 		},
  // 		err => console.log(err)
		// )
  // 	.then(
  // 		albumObject => {
		// 		console.log(`specific album object: `, albumObject);
		// 		console.log(`specific album name: `, albumObject.data.name);
		// 		console.log(`specific album date: `, albumObject.data.release_date);
		// 		console.log(`specific album date precision: `, albumObject.data.release_date_precision);
		// 		// test page variable
		// 		$scope.albumTest = albumObject.data.name;
		// 		$scope.$apply();
		// 		console.log(`$scope.albumTest: `, $scope.albumTest);
  // 		},
  // 		err => console.log(err)
		// );

  }
]);