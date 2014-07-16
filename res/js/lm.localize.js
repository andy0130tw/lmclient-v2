function initLocalize(){
	var l=function(){};
	l.doLocalize=function(o){
		$.timeago.settings=o.timeago;
		$.extend(true,$.magnificPopup.defaults,o.mfp);
	};

	LM.localize=l;
}
