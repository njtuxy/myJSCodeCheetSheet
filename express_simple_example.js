var express = require('express');
var http = require('http');

//var app = express()
//    .use(function(req, res, next){
//        res.end('hello express!');
//    })
//
//http.createServer(app).listen(3000);

function greeter(message){
    return function(req, res, next){
        res.end(message);
    };
}

express()
    //.use(function (req,res,next) {
    //    next('An Error has occurred!');
    //})
    .use('/one', greeter("I am one"))
    .use('/two',greeter("I am two"))
    .use(function (req, res, next) {
        res.end('hello, express!');
    }).listen(3000);


