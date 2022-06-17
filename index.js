const express=require('express');
const http = require('http');
const bodyParser= require('body-parser');

const port=3000;
const hostName='localhost';

const app =express();
const dishRouter= require('./routes/dishRouter');
app.use('/dishes',dishRouter);


app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Yo hablo espanol,Tu hablas ingles?</h1></body></html>');
})

const server=http.createServer(app);

server.listen(port,hostName,()=>{
    console.log(`http://${hostName}:${port}`);
})