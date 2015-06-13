/**
 * Created by yxia on 6/12/15.
 */
var Promise = require('bluebird');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Collection = mongodb.Collection;
var express = require('express');
var app = express();
var mongoDbObj = "Not Set";
var dbValue = "Not Set Too"

var app = express();

Promise.promisifyAll(Collection.prototype);
Promise.promisifyAll(MongoClient);

app.get('/', function (req, res) {
    getDBData(req,res)
});

var server = app.listen(3000, function(){});

function getDBData(req, res) {
    console.log("step3");
    MongoClient.connectAsync('mongodb://10.151.0.186/SizeOnDiscDB')
        .then(function (db) {
            console.log("Connected to MongoDB");
            mongoDbObj = {
                db: db,
                abc: db.collection('SizeOnDiscSplordsAndroid'),
            }
        })

        .then(function () {
            mongoDbObj.abc.find().toArray(function(error, item){
                res.send({
                    db: item
                })
            })
        })
}