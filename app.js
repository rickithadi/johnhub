
var express         = require("express");
var helmet 	    = require('helmet');
var mongoose        = require("mongoose");
var bodyParser      = require("body-parser");
var morgan          = require("morgan");
const cors = require("cors");


var app             = express();


app.use(cors());
app.use(bodyParser.json());

let conn=mongoose.createConnection('mongodb://admin:admin1@ds129811.mlab.com:29811/liftingboyz');
var ObjectId = require("mongodb").ObjectID;
console.log('api running ');

conn.db.listCollections().toArray(function (err, names) {
    console.log(err, names);
    conn.close();
});
//get all workouts USE FUCKING CONN2
app.put('/workouts', function(req,res){
    console.log('gettting workouts ');
    conn.listCollections();
   // res.send(JSON.stringify(results));
});
