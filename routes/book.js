/**
 * @author qianqing
 * @create by 16-1-23
 * @description
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('book-manage', { title: '我的订单' });
});

module.exports = router;