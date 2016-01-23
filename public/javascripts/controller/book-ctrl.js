/**
 * @author qianqing
 * @create by 16-1-23
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
		$(document).on("pageInit", "#page-book-manage", function(e, id, page) {
			console.log('init page-book-manage');
		});

		$(document).on("pageInit", "#page-book-detail", function(e, id, page) {
			console.log('init page-book-detail');
		});

		$.init();
	}
);