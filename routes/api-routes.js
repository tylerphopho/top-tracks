
// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {
    // Search Artists
  app.get("/api/music", function(req, res){
    db.Music.findAll({}).then(function(dbMusic){
      res.json(dbMusic);
   });
  });

  app.get("/api/music/artist", function(app){
    db.Music.findAll({
      where: {
        artist: req.params.artist
      }
    }).then(function(dbMusic){
      res.json(dbMusic)
    });
  });
};