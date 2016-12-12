var express = require('express');
var router = express.Router();

// mongoose connection
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

/* Login Page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MedScD' });
});

/* Main User Page */
router.get('/appPage', function(req,res,next) {
  res.render('appPage', { title: 'MedScD' });
});

/* MedSearch Page */
router.get('/medSearch', function(req,res,next) {
  res.render('medSearch', { title: 'MedScD' });
});

/* MedTracker Page */
router.get('/medTracker', function(req,res,next) {
  res.render('medTracker', { title: 'MedScD' });
});
module.exports = router;
