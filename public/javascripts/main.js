/**
 * @author qianqing
 * @create by 16-1-18
 * @description
 */
require.config({
	baseUrl: './javascripts',
	paths: {
		'Vue': './lib/vue.min'
	},
	shim: {
		'Vue': {
			exports: 'Vue'
		}
	}
});