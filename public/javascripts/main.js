/**
 * @author qianqing
 * @create by 16-1-18
 * @description
 */
require.config({
	baseUrl: './javascripts',
	paths: {
		'vue': './lib/vue.min'
	},
	shim: {
		'vue': {
			exports: 'vue'
		}
	}
});