var express = require("express");
var db = require("./models");
var inquirer = require("inquirer");
var mysql = require("mysql");

var PORT = process.env.PORT || 3000;
var app = express();


var db = require("./models");
// Static directory to be served
app.use(express.static(__dirname + '/public'));
app.use(express.json());
// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    });
});





