$(function(){
	assert(LM.localize);
	var zhtw=new LM.localize();
	zhtw.timeago={
		prefixAgo:null,
		prefixFromNow:null,
		suffixAgo:"前",
		suffixFromNow:"後",
		several_seconds:"幾秒",
		seconds:"%d 秒",
		minute:"約 1 分鐘",
		minutes:"%d 分鐘",
		hour:"約 1 小時",
		hours:"%d 小時",
		day:"約 1 天",
		days:"%d 天",
		month:"約 1 個月",
		months:"%d 個月",
		year:"約 1 年",
		years:"%d 年",
		wordSeparator:"",
		numbers:[]
	};
	zhtw.mfp={
		tClose: '關閉 (ESC)',
		tLoading: '載入中...',
		gallery: {
			tPrev: '上一張 (LEFT)', // Alt text on left arrow
			tNext: '下一張 (RIGHT)', // Alt text on right arrow
			tCounter: '%curr% / %total%' // Markup for "1 of 7" counter
		},
		image: {tError: '<a href="%url%">本圖片</a>無法載入！' /* Error message when image could not be loaded */},
		ajax: {tError: '<a href="%url%">本內容</a>無法載入！' /* Error message when ajax request failed*/},
		inline: {tNotFound: '找不到引用的內容。請通知網頁作者！'}
	};

	LM.localize.doLocalize(zhtw);
});