"use strict";

app.factory("TextProcessingFactory", function ($q, $http, firebaseURL){

  return {
    formatTweetText(text) {
      //remove retweet tags
      text = text.replace(/RT/g, "");

      //remove @signs
      text = text.replace(/\@[\n\S]+/, "");

      //remove links
      text = text.replace(/(?:https?|bitly):\/\/[\n\S]+/g, ' ');

      text = text.toLowerCase().trim();

      if (text.slice(-1) !== '.') {
        text += '.'
      }

      return text
    } 
  }
});