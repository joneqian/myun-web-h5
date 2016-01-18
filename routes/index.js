var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MYun H5' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: '首页' });
});

module.exports = router;
