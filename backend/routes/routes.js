"use strict";

let appRouter = function(app) {

  app.get("/hello", function(req, res) {
    res.jsonp("HELLO WORLD");
  });
}

module.exports = appRouter;