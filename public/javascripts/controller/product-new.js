/**
 * @author qianqing
 * @create by 16-1-20
 * @description
 */
require.config({
	baseUrl: '../javascripts',
	paths: {
		'Vue': './lib/vue.min'
	},
	shim: {
		'Vue': {
			exports: 'Vue'
		}
	}
});

require(['Vue'],
	function (Vue) {
		'use strict';
		$(document).on('pageInit', '#page-product', function (e, id, page) {

		})
		$.init();
		var vm = new Vue({
			el: '#page-product',
			data: {
				products: [
					{ name: '牛奶', price: '￥120', img: '/images/product/1.jpg' },
					{ name: '奶粉', price: '￥30', img: '/images/product/2.jpg' },
					{ name: '电池', price: '￥5', img: '/images/product/3.jpg' },
					{ name: '牛奶', price: '￥120', img: '/images/product/1.jpg' },
					{ name: '奶粉', price: '￥30', img: '/images/product/2.jpg' },
					{ name: '电池', price: '￥5', img: '/images/product/3.jpg' },
					{ name: '牛奶', price: '￥120', img: '/images/product/1.jpg' },
					{ name: '奶粉', price: '￥30', img: '/images/product/2.jpg' },
					{ name: '电池', price: '￥5', img: '/images/product/3.jpg' }
				]
			}
		});
	}
);