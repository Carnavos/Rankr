"use strict";

let appRouter = function(app) {

  const Twitter = require('twitter');

  //run env.js to set the environment variables for twitter api credentials
  if(!process.env.CONSUMER_KEY) {
    var env = require('./../env.js')
  }

  var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });


  app.get("/hello", function(req, res) {
    res.jsonp("HELLO WORLD");
  })


  app.get("/tweets/recent", function(req, res) {

    let params = {};

    //loop through the req.query object
      //build it back up in params except for the callback property
    for (let key in req.query){
      if (key !== "callback"){
        params[key] = req.query[key];
      }
    }

    //make call to twitter API
    client.get(
      'search/tweets',
      params,
      function(error, tweets, response) {
        res.jsonp(tweets);
    });
  });

}

module.exports = appRouter;