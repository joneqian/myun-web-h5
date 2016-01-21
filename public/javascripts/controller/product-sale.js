/**
 * @author qianqing
 * @create by 16-1-21
 * @description
 */
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

		$(document).on("pageInit", "#page-product", function(e, id, page) {
			var loading = false;
			// 每次加载添加多少条目
			var itemsPerLoad = 10;
			// 最多可加载的条目
			var maxItems = 100;
			var lastIndex = $('.list-container li').length;

			function addItems(number, lastIndex) {
				// 生成新条目的HTML
				var html = '';
				for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
					html += '<li class="item-content"><div class="item-media"><a href="#"><img src="' + vm.products[i%3].img+
					'"></a></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' +
					vm.products[i%3].name + '</div></div><div class="item-subtitle"><span class="price-text">' +
					vm.products[i%3].price + '</span><p class="buttons-row"><a href="#" class="button button-fill button-warning">' +
					'收藏</a>' +	'<a href="#" class="button button-fill button-success">购买</a></p></div></div></div></li>';
				}
				// 添加新条目
				$('.infinite-scroll .list-container').append(html);
			}

			$(page).on('infinite', function() {
				// 如果正在加载，则退出
				if (loading) return;
				// 设置flag
				loading = true;
				// 模拟1s的加载过程
				setTimeout(function() {
					// 重置加载flag
					loading = false;
					if (lastIndex >= maxItems) {
						// 加载完毕，则注销无限加载事件，以防不必要的加载
						$.detachInfiniteScroll($('.infinite-scroll'));
						// 删除加载提示符
						$('.infinite-scroll-preloader').remove();
						return;
					}
					addItems(itemsPerLoad,lastIndex);
					// 更新最后加载的序号
					lastIndex = $('.list-container li').length;
					$.refreshScroller();
				}, 300);
			});
		});
		$.init();
	}
);