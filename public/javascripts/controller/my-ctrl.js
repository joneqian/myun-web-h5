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
		$.init();
	}
);