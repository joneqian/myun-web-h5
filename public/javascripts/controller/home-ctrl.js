/**
 * @author qianqing
 * @create by 16-1-18
 * @description
 */
require(['../main'],
	function (main) {
		'use strict';
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