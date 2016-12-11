var express = require('express');
var router = express.Router();

// mongoose connection
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MedScD' });
});

/* LoginPage router */
router.get('/appPage', function(req,res,next) {
  res.render('appPage', { title: 'MedScD' });
});
module.exports = router;
