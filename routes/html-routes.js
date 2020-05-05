var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/browse", function(req, res){
        res.sendFile(path.join(__dirname, "../public/browse.html"));
    });

    app.get("/price", function(req, res){
        res.sendFile(path.join(__dirname, "../public/pricing.html"));
    });
};

