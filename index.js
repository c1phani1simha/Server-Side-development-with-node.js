var express=require('express');
var http = require('http');
var bodyParser= require('body-parser');
var morgan= require('morgan');
var dishRouter= require('./routes/dishRouter');
var promoRouter=require('./routes/promoRouter');
var leadershipRouter=require('./routes/leadershipRouter');
var port=3000;
var hostName='localhost';

var app =express();


app.use(morgan('dev'));

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leadershipRouter);


app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Yo hablo espanol,Tu hablas ingles?</h1></body></html>');
})


app.listen(port,hostName,()=>{
    console.log(`http://${hostName}:${port}`);
})