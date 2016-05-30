"use strict";

let app = angular.module("Rankr", ["ngRoute", "firebase"])
  .constant('firebaseURL', "https://albumrankr.firebaseio.com");

/*
  Set up routes for app
 */
app.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/main.html",
        controller: "MainCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);
