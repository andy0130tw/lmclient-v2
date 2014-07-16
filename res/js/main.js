require({
	paths: {
		order: '../lib/requirejs/order',
		jquery: '../lib/jquery/jquery.min',
		timeago: '../lib/jquery/timeago',
		'magnific-popup': '../lib/magnific-popup.min',
		bootstrap: '../lib/bootstrap.min',
		shadowbox: '../lib/shadowbox',
	},
	shim: {
		'magnific-popup': ['jquery']
	}
});

require([
	'order!lm.init',
	'order!lm.util',
	], function(LM){
		console.log("LM");
		//LM.app.initialize();
	}
);