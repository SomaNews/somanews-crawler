
//본문 영상을 위한 브라우저 체크
var uaCheck = function(cid, mmsURL) {
/*
	 if(navigator.userAgent.match(/Chrome/i))
	{
		var objTag = '<object width="480" height="337" data="data:application/x-silverlight-2," type="application/x-silverlight-2">';
		objTag += '<param name="source" value="http://www.yonhapnews.co.kr/Silverlight/yonhap/YonhapEmbed.xap">';
		objTag += '<param name="enableHtmlAccess" value="true"><param name="allowHtmlPopupWindow" value="true">';
		objTag += '<param name="autoUpgrade" value="true"><param name="initParams" value="id=' + cid + '">';
		objTag += '<param name="minRuntimeVersion" value="3.0.40624.0"><a style="text-decoration: none;" href="http://go.microsoft.com/fwlink/?LinkID=149156&amp;v=3.0.40624.0">';
		objTag += '<img style="" alt="실버라이트 설치하기" src="http://www.yonhapnews.co.kr/Silverlight/images/silverlight.jpg"></a></object>';

		$('.article-video').html(objTag);
	}
	else
	{
		var objTag = '<object width="480" height="337" type="application/x-mplayer2" title="">';
		objTag += '<param name="Filename" value="' + mmsURL + '" />';
		objTag += '<param name="autostart" value="false"/>';
		objTag += '<param name="UiMode" value="none"/>';
		objTag+= '\t\t<div class="plugin-down">\n';
		objTag += '\t\t\t<p>영상 콘텐츠는 ie7 브라우저 이상에 최적화 되어 있습니다.<br />콘텐츠를 보시려면 아래의 브라우저별 플러그인을 다운받으세요.</p>\n';
		objTag += '\t\t\t<ul>\n';
		objTag += '\t\t\t\t<li>파이어폭스 <a href="http://support.mozilla.org/ko/kb/play-windows-media-files-in-firefox?redirectlocale=ko&amp;redirectslug=Using+the+Windows+Media+Player+plugin+with+Firefox" target="_blank" title="새창">플러그인 다운로드</a></li>\n';
		objTag += '\t\t\t\t<li>오페라 <a href="http://www.opera.com/docs/plugins/installation/#wmp" target="_blank" title="새창">플러그인 다운로드</a></li>\n';
		objTag += '\t\t\t\t<li>크롬 <a href="https://support.google.com/chrome/answer/95697?hl=ko&amp;p=plugin_wmp" target="_blank" title="새창">플러그인 다운로드</a></li>\n';
		objTag += '\t\t\t\t<li>사파리 <a href="http://www.microsoft.com/en-us/download/details.aspx?id=9442" target="_blank" title="새창">플러그인 다운로드</a></li>\n';
		objTag += '\t\t\t</ul>\n';
		objTag += '\t\t</div>\n';
		objTag += '</object>';

		$('.article-video').html(objTag);
	}
*/
}



// Date : 2015-03-18
// Written by : 4ox
// Comment : mpicInner
// Requre : yq = yQuery.js
var mpicInner = {
	tmpl_mp4 : 
	    '<video id="${VIEWID}" class="vid-view video-js vjs-default-skin vid-skin02" controls preload="none" width="560" height="315" poster="${PREVIEW}" data-setup="{}">'+
        '<source src="${URL}" type="video/mp4" /></video>',

    tmpl_silver : 
		'<script id="tmpl_silver" type="text/x-yquery-tmpl">'+
		'<object width="560" height="315" data="data:application/x-silverlight-2," type="application/x-silverlight-2">'+
		'<param name="source" value="http://www.yonhapnews.co.kr/Silverlight/yonhap/YonhapEmbed.xap">'+
		'<param name="enableHtmlAccess" value="true">'+
		'<param name="allowHtmlPopupWindow" value="true">'+
		'<param name="autoUpgrade" value="true">'+
		'<param name="initParams" value="id=${CID}">'+
		'<param name="minRuntimeVersion" value="3.0.40624.0"><a style="text-decoration: none;" href="http://go.microsoft.com/fwlink/?LinkID=149156&amp;v=3.0.40624.0">'+
		'<img style="" alt="실버라이트 설치하기" src="http://www.yonhapnews.co.kr/Silverlight/images/silverlight.jpg"></a>'+
		'</object>',
		
	load : function() {
		var object = $('.article-video object');
		for( var obj,  i = 0, ilen = object.length; i < ilen; i++ ) {
			obj = object.eq(i);

			var title = obj.attr('title');
			var url = obj.find('param[name="url"]').attr('value');
			var cid = yQuery.getCID( url )[0];
			
			yQuery.setTemplate('tmpl_mp4', mpicInner.tmpl_mp4 );
			yQuery.setTemplate('tmpl_silver', mpicInner.tmpl_silver );

			var tmp = "";
			var VIEW_ID = "vid-view" + i;
			if( yQuery.checkCID( cid ) ) {
				var cidArr = yQuery.splitCID( cid );
				var preview = "http://img.yonhapnews.co.kr/mpic/YH/"+cidArr[2]+"/"+cidArr[3]+"/"+cidArr[4]+"/"+cid+".jpg"			
				tmp = mpicInner.tmpl({ VIEWID : VIEW_ID, TITLE : title, CONTENTS_ID : cid, PREVIEW : preview });
				if( tmp != null ) {	
					obj.parent().html(tmp);
					videojs(VIEW_ID, {'inactivityTimeout': 300 }, function(){
						this.on("firstplay", function(){
							$.getScript("http://www.yonhapnews.co.kr/jscript/stat/Stat.html?cid=" + cid + "&type=mapping");
						});
					});  /* 영상플레이어 VIDEO-JS */
				}
			}
			else {
				tmp = mpicInner.tmpl({ VIEWID : VIEW_ID, TITLE : title, CONTENTS_ID : cid });
				obj.html(tmp);
			}
		}
		mpicInner.evt();
	},
	tmpl : function( json ) {
		var title = json.TITLE;
		var cid = json.CONTENTS_ID;
		var arr = yq.splitCID( cid ), url;
		var viewid = json.VIEWID;
		
		//test cid
		//cid = 'MYH20150317005300038';
		//cid = 'MYH20140318006600038';
								
		//영상이 2013년 이후고 비디오 태그를 지원하는 경우

 		if( arr[2]*1 >= 2013 ) {
			var url = yQuery.getMpicURL( cid, 'mp4' ), preview;
			var preview = 'http://img.yonhapnews.co.kr/basic/svc/00_ko/home/temp/@tm_720x406.gif';
			if( json.PREVIEW ) { preview = json.PREVIEW.replace("_P1","") };
			var template = yq.getTemplate('tmpl_mp4',{ 
				url : url, 
				title : title, 
				preview : preview,
				viewid : viewid
			});
			console.log( url );
			//$('.article-video').html( template );
			return template;			
		}
		//영상이 2013년 이전이고 크롬일경우 실버라이트 
		else if( yq.browser.chrome ) {
			var template = yq.getTemplate('tmpl_silver',{ cid : cid });
			return template;
			//$('.article-video').html( template );
		} 
	},
	evt : function() {
		//디자인팀 - 박지선 2015/03/25 17:25
		$('.vid-skin02 .vjs-fullscreen-control').click(function(){
			if($(this).hasClass('full')){
				$(this).removeClass('full');
				$('body').removeClass('fullscreen-page');
			}else{
				$(this).addClass('full');
				$('body').addClass('fullscreen-page');
			}
		});		
		
		//ESC(escape)키 - qkrwltjs 2016-08-09
		$videoArticlePlayer = videojs('vid-view0');
		$videoArticlePlayer.on('keyup', function(e){
			if (e.which == 27) {
				$('body').removeClass('fullscreen-page');
			}
		});	
	}
}


$(document).ready(function(){
	if( $('.article-video').length > 0 ) {
		$('.article-video').hide();
//		$.ajaxSetup({cache: true});
		$.getScript("http://www.yonhapnews.co.kr/jscript/2014/yQuery.js", function(){
			$.getScript("http://img.yonhapnews.co.kr/basic/svc/00_ko/resources/js/video_js.js", function(){
				mpicInner.load();
				$('.article-video').show();
			});
		});
	}
});




//본문영역 하단의 주요뉴스 연동
var Main_Bottom_JuyoNews = {	
	url : 'http://www.yonhapnews.co.kr/data/0100000000_main.js',
	getNews : function()
	{ 
		var rnd = Math.round(Math.random() * 100000);

		$.getJSON(Main_Bottom_JuyoNews.url+'?'+rnd,function(data)
		{
			if(data) 
			{
				Main_Bottom_JuyoNews.show(data)
			}
		});
	},
	show : function(json)
	{
		var data = json.DATA;
		
		/* 2015개편으로 top1,top2 제거
		var top1 = '';	
		var descLen = 82;
		//Top1
		top1 = '<dt><a href="' + data[0]["TEMPLATE_ARTICLE_URL"] +'"  target="_blank">' + replaceHtmlChr(data[0]["TEMPLATE_ARTICLE_TITLE"]) + '</a></dt>';

		var strDesc = data[0]["TEMPLATE_ARTICLE_CONTENT"];
		if(strDesc.length > descLen)
		{
			strDesc = strDesc.substr(0,descLen) + '...';
		}
		top1 += '<dd><a href="' + data[0]["TEMPLATE_ARTICLE_URL"] +'"  target="_blank">' + replaceHtmlChr(strDesc) + '</a></dd>';
		$('.yonhapnews01').html(top1);	
		
		//Top2+Juyo
		var top2 = '';
		var i = 1;
		var strTitle = '';
		var titleLen = 28;
		for(i=1; i<=5;i++)
		{
			strTitle = data[i]["TEMPLATE_ARTICLE_TITLE"];
			if(strTitle.length > titleLen)
			{
				strTitle = strTitle.substr(0,titleLen) + '...';
			}
			top2 += '<li><a href="' + data[i]["TEMPLATE_ARTICLE_URL"] +'">' + replaceHtmlChr(strTitle) + '</a></li>';
		}
		$('.yonhapnews02').html(top2);
		*/
		
		//VisualNews
		var visualTag = '<a href="{URL}" ><span class="img-con"><img src="{TEMPLATE_IMAGE}" alt="{TITLE}"/></span><span class="tit-con"><strong class="tit">{TITLE}</strong></span></a>';
		var strTag = '';
		var cnt = 0;
	    var strTitle = '';
		var titleLen = 20;
		
		for(i=5; i<=8;i++)
		{
			strTag = visualTag;
			strTitle = data[i]["TEMPLATE_ARTICLE_TITLE"];
			if(strTitle.length > titleLen)
			{
				strTitle = strTitle.substr(0,titleLen) + '...';
			}
			strTitle = replaceHtmlChr(strTitle);
			strTag = strTag.replace('{URL}', data[i]["TEMPLATE_ARTICLE_URL"]);
			strTag = strTag.replace(/{TITLE}/g, strTitle);
			strTag = strTag.replace('{TEMPLATE_IMAGE}', data[i]["TEMPLATE_IMG_URL"]);
			
			$('.box-flex').eq(cnt).html(strTag);
			cnt++;
		}
	}
};

/*본문 SNS 연동
var SNS = {
    fbShare: function () {
        var url = 'https://www.facebook.com/sharer/sharer.php?sdk=joey&u=' + encodeURIComponent(document.location.href) + '&display=popup';
        var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
        window.open(url, '_fb', opt);
        //window.open(url);
    },
    twit: function () {
        var url = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(document.location.href) + '&source=tweetbutton';
        url += '&text=' + encodeURIComponent($('#articleWrap h1').text()) + '&url=' + encodeURIComponent(document.location.href.replace(/\?.*$/, '') + '?input=www.twitter.com');        
        var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
        window.open(url, '_tw', opt);
    },
    googlePlus: function() {
        var url = 'https://plus.google.com/share?url=' +  encodeURIComponent(document.location.href);
        var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
        window.open(url, '_gp', opt);
	},
	band: function() {
	    var url = "http://www.band.us/plugin/share?body=";
        url += encodeURIComponent(  $('#articleWrap h1').text()  );
        url += encodeURIComponent(document.location.href);
        var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
        window.open(url, '_band', opt);
	}
};
*/
//본문 SNS 연동
var SNS = {
	fbShare: function () {
		// 페이스북 공유, 20160513
		var link = $('#canonical').attr('href');
		if(link == undefined) var link = $('#canonical').attr('content');
		//var url = 'https://www.facebook.com/sharer/sharer.php?sdk=joey&u=' + encodeURIComponent(link) + '&display=popup';
		var url = 'https://www.facebook.com/sharer/sharer.php?sdk=joey&u=' + encodeURIComponent(link);
		var opt = 'left=0, top=0, width=553, height=400, scrollbars=0, resizable=1';
		window.open(url, '_fb', opt);
		/*
		var url = 'https://www.facebook.com/sharer/sharer.php?sdk=joey&u=' + encodeURIComponent(document.location.href) + '&display=popup';
		var opt = 'left=0, top=0, width=553, height=400, scrollbars=0, resizable=1';
		window.open(url, '_fb', opt);
		//window.open(url);
		*/
	},
	twit: function () {
		var url = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(document.location.href) + '&source=tweetbutton';
		url += '&text=' + encodeURIComponent($('#articleWrap h1').text()) + '&url=' + encodeURIComponent(document.location.href.replace(/\?.*$/, '') + '?input=www.twitter.com');
		var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
		window.open(url, '_tw', opt);
	},
	googlePlus: function() {
		var url = 'https://plus.google.com/share?url=' +  encodeURIComponent(document.location.href);
		var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
		window.open(url, '_gp', opt);
	},
	band: function() {
		var url = "http://www.band.us/plugin/share?body=";
		url += encodeURIComponent(  $('#articleWrap h1').text()  );
		url += encodeURIComponent(document.location.href);
		var opt = 'left=0, top=0, width=650, height=400, scrollbars=0, resizable=1';
		window.open(url, '_band', opt);
	},
	// 2015-12-16 네이버 블로그 추가 - 박지선
	blog: function() {
		var url = "http://blog.naver.com/openapi/share?url=";
		url += encodeURIComponent(document.location.href);
		url += '&title=' + encodeURIComponent($('#articleWrap h1').text());
		var opt = 'left=0, top=0, width=557, height=400, scrollbars=0, resizable=1';
		window.open(url, '_blog', opt);
	},
	// 2015-12-16 네이버 블로그
	kakaostory: function() {
		//var text = $('meta[property="og:description"]').attr('content');
		var url = "https://story.kakao.com/share?url=";
		url += encodeURIComponent(document.location.href);
		//url += encodeURIComponent(text);
		var opt = 'left=0, top=0, width=410, height=393, scrollbars=0, resizable=1';
		window.open(url, '_kakaostory', opt);
	}
};

//Kakao.init('645e607ecf562b7a571552649d2fd228');

var openPrint = function() {
	var url = 'http://www.yonhapnews.co.kr/dev/9601000000.html';
    var opt = 'left=0, top=0, width=637, height=620, scrollbars=yes, resizable=1';
    window.open(url, '_print', opt);

	/*
    if(navigator.userAgent.indexOf('Trident/4.0')>=0)
	{
		  //IE 8.0 용
		      var tmp = document.location.href;
			 var pos = -1;
			 pos = tmp.indexOf("AKR");
			 console.log('pos = ' + pos);
			 if(pos >=0 )
			{
			 var cid = tmp.substr(pos,20);
			 var url = 'http://www.yonhapnews.co.kr/OnAir/9902000000.html?cid='+cid;
			 var opt = 'left=0, top=0, width=637, height=620, scrollbars=yes, resizable=1';
			 window.open(url, '_print', opt);
			}
	}
	*/
}


var ForeignNews = {
	show : function()
	{
		
		   var data = FnewsJson.DATA;
		   var i;
		   
		   var strTag = '';
		   var strEnTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"en\" title=\"영어 새창\">English</a></li>";
		   var strCkTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"zh\" title=\"중국어 새창\">中文</a></li>";
		   var strJpTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"ja\" title=\"일본어 새창\">日本語</a></li>";
		   var strArTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"ar\" title=\"아랍어 새창\">عربي</a></li>";
		   var strSpTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"es\" title=\"스페인어 새창\">Español</a></li>";
		   var strFrTag = "<li><a href=\"{URL}\" target=\"_blank\" lang=\"fr\" title=\"프랑스어 새창\">Français</a></li>";
		   
		   if(data.length > 0)
		   {
			   for(i=0; i <data.length; i++)
			   {
				  if(data[i]["DOMAIN_INFO_ID"] == "3")  strTag += strEnTag.replace('{URL}',data[i]["CONTENTS_LINK"]); 
				  if(data[i]["DOMAIN_INFO_ID"] == "4")  strTag += strCkTag.replace('{URL}',data[i]["CONTENTS_LINK"]);
				  if(data[i]["DOMAIN_INFO_ID"] == "6")  strTag += strJpTag.replace('{URL}',data[i]["CONTENTS_LINK"]);
				  if(data[i]["DOMAIN_INFO_ID"] == "10")  strTag += strArTag.replace('{URL}',data[i]["CONTENTS_LINK"]);
				  if(data[i]["DOMAIN_INFO_ID"] == "342")  strTag += strSpTag.replace('{URL}',data[i]["CONTENTS_LINK"]);
				  if(data[i]["DOMAIN_INFO_ID"] == "362")  strTag += strFrTag.replace('{URL}',data[i]["CONTENTS_LINK"]);
			   }
		   }
		   $('.link-site').html(strTag);
	}

};

$(function(){
	$(function() {
		/* 외국어 기사 */
		ForeignNews.show();

		setPageFont();

		/* 기사본문버튼 */
		var article_btn = $('#content .link-btn');  // 기사본문 옵션버튼
        var article_sns = $('#content .article-sns .sns-con');  // 기사본문 SNS 버튼



		 // 본문상세 옵션 아이콘 
        article_btn.find('>li:not(.show)>a')
            .bind("mouseover focus", function(){
                $(this).parent().siblings().removeClass('on');
                $(this).parent().addClass('on');
            })

            .bind("mouseover", function(){
                $(this).parent().addClass('over');
            })

            .bind("mouseout blur", function(){
                $(this).parent().removeClass('on').removeClass('over');
            });

		  // 본문상세 SNS 아이콘  
        article_sns.find('>li:not(.show)>a')
            .bind("mouseover focus", function(){
                $(this).parent().siblings().removeClass('on');
                $(this).parent().addClass('on');
            })

            .bind("mouseover", function(){
                $(this).parent().addClass('over');
            })

            .bind("mouseout blur", function(){
                $(this).parent().removeClass('on').removeClass('over');
            });




        /* band 공유버튼 추가 */
       //$('<li class="band"><a href="javascript:SNS.band();">밴드</a></li>').insertAfter('.facebook');

		/* 기사본문 SNS : 개발수정*/
		article_btn.find('.btn_sns').toggleContents({
			conEl : ">ul",
			eventEl : ">a",
			containerOn : "show"
		});


		/* 기사본문 사이즈(크게) */
		$('#content .link-btn .btn_zoom_in>a').bind('click',function(){
			article_fontSize++;
			if(article_fontSize>9) article_fontSize=9;
			setPageFont();
		});

		/* 기사본문 사이즈(작게) */
		$('#content .link-btn .btn_zoom_out>a').bind('click',function(){
			article_fontSize = article_fontSize-1;
			if(article_fontSize<1) article_fontSize=1;
			setPageFont();
		});


		/* 기사본문버튼(2015년 부분 개편) */
		var article_btn = $('#content .link-btn-md');  
		//기사본문 크게
		$('#content .link-btn-md .btn_zoom_in>a').bind('click',function(ev){
				ev.preventDefault();
				article_fontSize++;
				if(article_fontSize>9) article_fontSize=9;

				if ( window.localStorage ){ window.localStorage.setItem("article_fontSize", article_fontSize); };	// 2016.07.07 font처리 수정

				setPageFont();
		});

		//기사본문 작게
		$('#content .link-btn-md .btn_zoom_out>a').bind('click',function(ev){
				ev.preventDefault();
				article_fontSize = article_fontSize-1;
				if(article_fontSize<1) article_fontSize=1;

				if ( window.localStorage ){ window.localStorage.setItem("article_fontSize", article_fontSize); };	// 2016.07.07 font처리 수정

				setPageFont();
		});

		/* 기사본문 텍스트 클래스 설정 */
		function setPageFont(){
			var class_list = $("#articleWrap").attr("class").split(" ");
			for(i=0;i<class_list.length;i++){
				if(class_list[i].match(/^article-font/)) $("#articleWrap").removeClass(class_list[i]);
			}
			$("#articleWrap").addClass("article-font"+article_fontSize);
			//setCookie("article_fontSize",article_fontSize, 1);	// 2016.07.07 font처리 수정
		}

	});
});

// 레퍼런스 변환 스크립트 by ldh82.  20160805 
$.when(
	$.getScript("http://www.yonhapnews.co.kr/jscript/lib/YNAReference.min.js"),
	$.getScript("http://www.yonhapnews.co.kr/jscript/lib/dlink.min.js")
)
.done(function() {
	$(function() {
		YNAReference.merge({
			selector: '.article',
			done: function(data) {
				DLinker.link('.article','point01');

				$('.desc-zone .txt').each(function() {
					if ($(this).text() === '') $(this).remove();
				});

				$('.article a.anc-link').each(function() {
					var href = $(this).attr('href');
					if (href.search(/yna\.co\.kr|yonhapnews\.co\.kr/) !== -1) {
						$(this).removeAttr('target');
					}
				});
			}
		});
	});
});
