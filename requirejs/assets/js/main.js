/**
	1.require === requirejs
	2.不能在paths的前面加 /，否则baseUrl不起作用，直接默认目录从paths中设定的目录开始了
	3.指定路径时，不能写.js后缀

	遇到的坑：在index.html中引入requirejs的时候，使用data-main引入main.js，
			  结果配置信息不起作用，知道再单独引入main.js

*/
require.config({
	baseUrl: '/private/pro-exc/pc/assets/js',
	paths: {
		'jquery': 'plugins/jquery.min',
		'bootstrap-treeview': 'plugins/bootstrap-treeview',
		'demo': 'module/demo'
	}
})



