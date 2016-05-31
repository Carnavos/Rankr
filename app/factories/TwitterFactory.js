"use strict";

app.factory("TwitterFactory", function ($q, $http, firebaseURL){

  function getTweetIdExtremes (tweets) {
    let max = tweets[0].id,
        min = tweets[0].id;

    tweets.forEach( (tweet) => {
      if (tweet.id < min){
        minId = tweet.id;
      }

      if (tweet.id > max) {
        maxId = tweet.id;
      }
    });

    return {
      "minId": minId,
      "maxId": maxId 
    }
  }


  return {
    getRecentTweets(queryParams) {
      let parameters;
      /***************************************************
      Ex. params object: ?max_id=737663755945803775&q=The%20Beatles&count=100&include_entities=1"
      PARAMS OBJECT NEED TO BE BROKEN UP TO FORM:

      { q: artist, 
        count: 100,
        max_id: 737663755945803775,
        include_entities: 1
      }
      ***************************************************/

      let queryArr = queryParams.split("&");

      if (queryArr.length === 1) {
        //artist only
        parameters = {
          q: queryArr[0],
          count: 100,
          lang: 'en',
          result_type: 'mixed'
        }
      } else {
        queryArr = queryArr.map( (p) => p.split("=")[1])
        parameters = {
          q: queryArr[1],
          count: 100,
          include_entities: queryArr[3],
          max_id: queryArr[0],
          lang: 'en',
          result_type: 'mixed'
        }
      }

      return $http.jsonp(
                'http://localhost:3000/tweets/recent?callback=JSON_CALLBACK', 
                { params: parameters } 
              );
    }
  }

});