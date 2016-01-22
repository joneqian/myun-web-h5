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
		var vm = new Vue({
			el: '#intro',
			data: {
				styleTitle: '选择款式/样式',
				style: ''
			}
		});

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

			$(page).on('click','.create-actions', function () {
				var buttons1 = [
					{
						text: '请选择款式',
						label: true
					},
					{
						text: '一箱',
						bold: true,
						color: 'danger',
						onClick: function() {
							vm.styleTitle = '已选择：';
							vm.style = '一箱';
						}
					},
					{
						text: '一袋',
						onClick: function() {
							vm.styleTitle = '已选择：';
							vm.style = '一袋';
						}
					}
				];
				var buttons2 = [
					{
						text: '取消',
						bg: 'danger'
					}
				];
				var groups = [buttons1, buttons2];
				$.actions(groups);
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