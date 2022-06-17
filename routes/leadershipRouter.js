const express= require('express');
const bodyParser= require('body-parser');

const leadershipRouter= express.Router();

leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the leaderships to you!');
})
.post((req,res,next)=>{
    res.end('will add the leadership: '+ req.body.name+' with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /leaderships');
})
.delete((req,res,next)=>{
    res.end('deleting all the leaderships!');
})

leadershipRouter.route('/:leadershipId')
.get((req,res,next)=>{
    res.end('will send the details of the leadership: '+req.params.leadershipId+ ' to you!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /leaderships' + req.params.leadershipId);
})
.put((req, res, next) => {
    res.write('Updating the leadership: ' + req.params.leadershipId + '\n');
    res.end('Will update the leadership: ' + req.body.name + 
          ' with details: ' + req.body.description);
  })
.delete( (req, res, next) => {
      res.end('Deleting leadership: ' + req.params.leadershipId);
  });

 module.exports = leadershipRouter;
