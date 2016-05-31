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
      // let twitterParams = `${artistName} OR ${albumName}&count=100&result_type=mixed`;

      /***************************************************
      Ex. params object: ?max_id=737663755945803775&q=The%20Beatles&count=100&include_entities=1"
      PARAMS OBJECT NEED TO BE BROKEN UP TO FORM:

      { q: artist, 
        count: 100,
        max_id: 737663755945803775,
        include_entities: 1
      }

      ***************************************************/
      console.log("queryParams from factory: ", queryParams);
      return $http.jsonp('http://localhost:3000/tweets/recent?callback=JSON_CALLBACK', 
                          { 
                            params: { q: queryParams,
                                      count: 100} 
                          } 
                        );

    }
  }

});