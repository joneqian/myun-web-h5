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

router.get('/detail', function(req, res, next) {
	res.render('book-detail', { title: '订单详情' });
});

module.exports = router;