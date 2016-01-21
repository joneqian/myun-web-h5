/**
 * @author qianqing
 * @create by 16-1-20
 * @description
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
	res.render('product-new-list', { title: '新品' });
});

router.get('/sale', function(req, res, next) {
	res.render('product-sale-list', { title: '特卖' });
});

module.exports = router;
