const express = require('express'),
      app = express(),
      logger = require('morgan'),
      config = require('./config/main'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');
//DB connection
mongoose.connect(config.database,{
  useMongoClient:true
});
const server = app.listen(config.port);
console.log("App started in port: "+ config.port);

//Setting Logger Level
app.use(logger('dev'));

//Setting up basic CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const router = require('./router');
router(app);
