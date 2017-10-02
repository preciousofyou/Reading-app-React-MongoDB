var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
// var multer = require('multer'); 

var app = express();

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());

var userRoute = require('./userRoute.js');
var bookRoute = require('./bookRoute.js');


app.all('*',function(req,res,next){
    if(/favicon/.test(req.path)){res.send();return;}
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});
app.use(express.static(__dirname + '/public'));   //处理静态文件


app.get('/getBanner',function(req,res,next){
    var data = require('./banner/banner.js');
    res.end(JSON.stringify(data));
})

userRoute(app);
bookRoute(app);

app.use('',function(req,res){
    res.send('404');
    res.end();
});

http.createServer(app).listen(8080);
console.log('server is running at 8080 port...');
