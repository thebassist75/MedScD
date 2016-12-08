var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MedScD' });
});

/* LoginPage router */
router.get('/appPage', function(req, res, next){
  res.render('index', { title: 'MedScD'});
});
module.exports = router;
