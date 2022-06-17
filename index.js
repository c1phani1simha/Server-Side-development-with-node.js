const express=require('express');
const http = require('http');
const bodyParser= require('body-parser');

const port=3000;
const hostName='localhost';

const app =express();
const dishRouter= require('./routes/dishRouter');
app.use('/dishes',dishRouter);


app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('will send the details of the dish: '+req.params.dishId+ ' to you!');
})

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /dishes' + req.params.dishId);

})

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  app.delete('/dishes/:dishId', (req, res, next) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });

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