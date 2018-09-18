const AuthorizationController = require('./controllers/authentication'),
      ProfileController = require('./controllers/profile'),
      requestController = require('./controllers/requests'),
      loginController = require('./controllers/login'),
      logController = require('./controllers/logs'),
      tagController = require('./controllers/tags'),
      express = require('express'),
      paassportService = require('./config/passport'),
      passport = require('passport');

const  requirejwtAuth = passport.authenticate('jwt',{session:false});
const requireLogin = passport.authenticate('local',{session:false});

module.exports = function(app){
  const apiRoutes = express.Router(),
        userRoutes = express.Router();
        authRoutes = express.Router();
        requestRoutes = express.Router();
        loginRoutes = express.Router();
        logRoutes = express.Router();
        tagRoutes = express.Router();
  apiRoutes.use('/auth',authRoutes);

  authRoutes.post('/register',AuthorizationController.register);
  authRoutes.post('/login',requireLogin,AuthorizationController.login);
  userRoutes.get('/:userId', requirejwtAuth, ProfileController.viewProfile);
  requestRoutes.post('/',requirejwtAuth,requestController.addRequest);
  loginRoutes.get('/',requirejwtAuth,loginController.getLogins);
  logRoutes.get('/',requirejwtAuth,logController.getLogs);
  logRoutes.post('/',requirejwtAuth,logController.addLog);
  tagRoutes.post('/',requirejwtAuth,tagController.addTag);
  tagRoutes.get('/',requirejwtAuth,tagController.getTags);

  apiRoutes.use('/user', userRoutes);
  apiRoutes.use('/request',requestRoutes);
  apiRoutes.use('/logins',loginRoutes);
  apiRoutes.use('/logs',logRoutes);
  apiRoutes.use('/tags',tagRoutes);
  app.use('/api',apiRoutes);
};
