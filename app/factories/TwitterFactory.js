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
    getRecentTweets(artistName, albumName, since, until ) {
      // let twitterParams = `${artistName} OR ${albumName}&count=100&result_type=mixed`;
      let twitterParams = `${artistName}`;

      return $http.jsonp('http://localhost:3000/tweets/recent?callback=JSON_CALLBACK', 
                          { 
                            params: { q: twitterParams,
                                      count: 50} 
                          } 
                        );

    }
  }

});