/**
 * @author qianqing
 * @create by 16-1-21
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
		$(document).on("pageInit", "#page-product-details", function(e, id, page) {
			$(page).on('click','.open-preloader-collect', function () {
				$.showPreloader('已收藏')
				setTimeout(function () {
					$.hidePreloader();
				}, 500);
			});

			$(page).on('click','.open-preloader-cart', function () {
				$.showPreloader('已加入购物车')
				setTimeout(function () {
					$.hidePreloader();
				}, 500);
			});
		});
		$(function() {
			$(".swiper-container").swiper({
				spaceBetween: 30,
				continuous: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
		});
		$.init();
	}
);