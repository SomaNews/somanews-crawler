// JavaScript Document for chosun.com article 2015

/*�˾� ��Ű�� �Լ�*/
function j_pop_op(which1){
	document.getElementById('j_popup'+which1).style.display="block";
	document.getElementById('author_arrow'+which1).src ="http://image.chosun.com/cs/article/2011/title_author_arrow_down.gif";
}

function j_pop_cl(which1){
	document.getElementById('j_popup'+which1).style.display="none";
	document.getElementById('author_arrow'+which1).src ="http://image.chosun.com/cs/article/2011/title_author_arrow_up.gif";
}
//���̽���
function facebookOpen() {
	var titl = encodeURIComponent(_getArticleTitle());
	var link = encodeURIComponent(_getArticleLink() + "?outlink=facebook"); 
	var url = "http://www.facebook.com/sharer.php?u=" + link + "&t=" + titl;
	windowOpen (url, 900, 450, 'no');
	_getHitlogLinkNew("FB");
	_getHitlogLink("sec_00010");
}
//twitter
function _getArticleID() {
	var artid = "";
	var tmp_host = location.hostname;
	try { 
		tmp_host = tmp_host.substring(0,tmp_host.indexOf(".chosun.com"));
		if (typeof(ArtID) != "undefined") artid = ArtID;
		if (artid == "") {
			var tmp_path = location.pathname;
			if (tmp_path.indexOf(".html") != -1)
				artid = tmp_path.substring(tmp_path.lastIndexOf("/")+1, tmp_path.indexOf(".html"));
		}
		if (artid != "" && tmp_host != "") artid = (tmp_host != "news" ? tmp_host+"*" : "") + artid;
	} catch (e) {}
	return artid;
}
function _getArticleLink() {
	var link = location.protocol + "//" + location.hostname + "" + (location.port!="" ? ":"+location.port : "") + location.pathname;
	return link;
}
function twitterOpen() {
	var titl = _getArticleTitle();
	titl = titl.replace (/'/gi,"��");
	titl = titl.replace (/"/gi,"��");
	titl = encodeURIComponent(titl);

	var link = encodeURIComponent(_getArticleLink() + "?outlink=twitter"); 
	var id = _getArticleID();
	if (id != "") link = encodeURIComponent("http://chosun.com/tw/?id=" + id); 

	var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
	windowOpen (url, 800, 400, 'yes');
	_getHitlogLinkNew("TW");
	_getHitlogLink("sec_00011");
}
//�����÷���
function googleplusOpen() {
	var titl = encodeURIComponent(_getArticleTitle());
	var link = encodeURIComponent(_getArticleLink() + "?outlink=googleplus"); 
	var url = "https://plus.google.com/share?url=" + link;
	windowOpen (url, 500, 500, 'no');
	_getHitlogLinkNew("GP");
	_getHitlogLink("sec_00015");
}
//īī�����丮
function kakaostoryOpen() {
	var titl = encodeURIComponent(_getArticleTitle());
	var link = encodeURIComponent(_getArticleLink() + "?outlink=kakaostory"); 
	var url = "https://story.kakao.com/share?url=" + link;
	windowOpen (url, 900, 450, 'no');
	_getHitlogLinkNew("KAS");
	//_getHitlogLink("sec_00010");
}


$(document).ready(function() {
	var left_sns_layer = $('#left_aside_sns_more_layer');
	var cat_list_layer = $('#cat_list_id');
	var cat_list_trig = $('#cat_list_trigger_id a');
	
	// article title tools apeend
	var tit_tools = $('#news_title_tools_id')
	var tit_tools_con = $( '<li class="print"><a href="javascript:printOpen();" title="��� �μ�">��� �μ�</a></li>\
    	<li class="email"><a onclick="mailOpen(); return false;"  title="�̸��Ϸ� ������">�̸��Ϸ� ������</a></li>\
    	<li class="scrap"><a onclick="showNewsScrap(); return false;" title="��� ��ũ��">��� ��ũ��</a></li>\
    	<li class="font"><a href="#" id="ntt_font_trig" title="�۲� ����">�۲� ����</a><div id="ntt_font_item"><a href="#" class="fontset_go_mal">�������</a><a href="#" class="fontset_go_gul">����</a></div></li>\
    	<li class="size_up"><a href="#" title="���� ũ��" id="font_sizeup">���� ũ��</a></li>\
    	<li class="size_dn"><a href="#" title="���� �۰�" id="font_sizedn">���� �۰�</a></li>\
	' )
	tit_tools.append( tit_tools_con );
	
	// left sns layer open
	$('#left_aside_sns_more_id').click(function(e) {
        e.preventDefault();
		if( left_sns_layer.hasClass("open")) {
			left_sns_layer.slideUp('fast').removeClass('open');
		} 
		else {
			left_sns_layer.slideDown('fast').addClass("open");
		}	
    });
	
	// category list layer open
	$(cat_list_trig).click(function(e) {
        e.preventDefault();
		if( cat_list_layer.hasClass("open")) {
			cat_list_layer.slideUp('fast').removeClass("open");
			cat_list_trig.removeClass("open");
		} 
		else {
			cat_list_trig.addClass("open");
			cat_list_layer.slideDown('fast').addClass("open");
		}	
    });
	
	//aside popluar news list
	var tab_count = $('ul.sec_headline_popular_tab').children('li').size();
	var tab_count_ran = Math.floor(Math.random()*(tab_count));
	$(".sec_headline_popular_pan:eq("+ tab_count_ran +")").show();
	$("ul.sec_headline_popular_tab li:eq("+ tab_count_ran +") > a").addClass("current");
    $("ul.sec_headline_popular_tab li a").click(function (e) {
        e.preventDefault();
		$("ul.sec_headline_popular_tab li a").removeClass("current");
        $(this).addClass("current");
        $(".sec_headline_popular_pan").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });

	
	// news body image zoom
	$(document).on('click', '.zoom_img a', function (e) {
		 e.preventDefault();
		
		if($(this).hasClass('zoom_clone')) {
			$(this).remove();
		} 
		else {
			$(this).clone().appendTo($(this).parent('span')).addClass('zoom_clone');
		}
	});

	//body click 
	$("body").bind("click", function(e) {
        if( left_sns_layer.hasClass("open")
            && !$(e.target).is(".left_aside_sns, #left_aside_sns_more_id")
            && !$(e.target).closest(left_sns_layer).length
        ) {
            left_sns_layer.slideUp('fast').removeClass("open");
        }
    });
	
	// image slider
	var imgSlider = $('.imgslider').lightSlider({
		item:1,
		thumbItem:5,
		slideMargin:0,
		thumbMargin:0,
		gallery:true,
		prevHtml:'����',
		nextHtml:'����',
		enableDrag: false,
		pager:true,
		currentPagerPosition:'middle',
		slideEndAnimation:false,
		onSliderLoad: function (el) {
		  var parent_box = el.parents('.news_imgslider');
		  var slide_num = parent_box.find('.slide_num');
		  slide_num.children('.slide_total').text(el.getTotalSlideCount());
		   },	 
		onBeforeSlide: function (el) {
		  var parent_box = el.parents('.news_imgslider');
		  var slide_num = parent_box.find('.slide_num');
		  slide_num.children('.slide_current').text(el.getCurrentSlideCount());
		   }
	});
	
	// comment export select
	//itdev 20150708
	/*
	$('#cmt_export_id span a').click(function(e) {
        e.preventDefault();
		if($(this).hasClass('selected')) {
			$(this).removeClass('selected');
		} 
		else {
			$(this).addClass('selected')
		}
    });
*/
});

// article font set and btn
$(document).ready(function() {
	var font_body = $('#news_body_id');
	var font_item = $('#ntt_font_item');

	function setCookie( name, value, expirehours ) { 
	 var todayDate = new Date(); 
	 todayDate.setHours( todayDate.getHours() + expirehours ); 
	 document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
	}
	
	$('#ntt_font_item .fontset_go_gul').click(function(e){
	 setCookie( "cs_font_family", "gul" , 8765 ); // 365days
	 font_body.removeClass("fontset_mal");
	 font_body.addClass("fontset_gul");
	 $("#ntt_font_item .fontset_go_mal").removeClass("selected");
	 $("#ntt_font_item .fontset_go_gul").addClass("selected");
	 $('#ntt_font_item').slideToggle('fast');
	 return false;
	});
	$('#ntt_font_item .fontset_go_mal').click(function(e){
	 setCookie( "cs_font_family", "mal" , 8765 ); 
	 font_body.removeClass("fontset_gul");
	 font_body.addClass("fontset_mal");
	 $("#ntt_font_item .fontset_go_gul").removeClass("selected");
	 $("#ntt_font_item .fontset_go_mal").addClass("selected");
	 $('#ntt_font_item').slideToggle('fast');
	 return false;
	});

	$('#ntt_font_trig').click(function(e){
		e.preventDefault();
		$(this).toggleClass('on');
		font_item.slideToggle('fast');
		return false;
	});

	cookiedata = document.cookie;   
	if ( cookiedata.indexOf("cs_font_family=gul") < 0 ){      
	 font_body.addClass("fontset_mal");
	 $("#ntt_font_item .fontset_go_mal").addClass("selected");
	}
	else {
	 font_body.addClass("fontset_gul"); 
	 $("#ntt_font_item .fontset_go_gul").addClass("selected");
	}
	//mobile
	var mobileKeyWords = new Array('iPhone', 'iPod', 'iPad', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'HTC','NEXUS', 'MOT', 'SAMSUNG', 'SonyEricsson');
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			$("#ntt_font_trig").hide();
			break;
		}
	}

	// document dlick to layer close
	$(document).click(function(event) { 
	  if(!$(event.target).closest(font_item).length) {
		  if(font_item.is(':visible')) {
			  font_item.slideToggle('fast');
		  }
	  }
	  if(!$(event.target).closest('a.zoom_clone, .zoom_img a').length) {
		  var clone_image = $('.zoom_clone');
		  if(clone_image.is(':visible')) {
			  clone_image.remove();
		  }
	  }
	  if(!$(event.target).closest('#cat_list_trigger_id a').length) {
		  var cat_list = $('#cat_list_id');
		  var cat_list_trig = $('#cat_list_trigger_id a');
		  if(cat_list.is(":visible")) {
			  cat_list.slideUp('fast').removeClass('open');
			  cat_list_trig.removeClass('open');
		  }
	  }   
	});
	
	// article body font size
	var art_body = $('#news_body_id');
	$('#font_sizeup').click(function(e) {
		e.preventDefault();
		var fontSize = parseInt(art_body.css('font-size'));
		fontCook = fontSize + 3 ;
		fontSize = fontSize + 3 + 'px';
		art_body.css({'font-size':fontSize});
		setCookie( "cs_font_size", fontCook , 8765 ); // 365days
	});
	$('#font_sizedn').click(function(e) {
		e.preventDefault();
		var fontSize = parseInt(art_body.css('font-size'));
		fontCook = fontSize - 3 ;
		fontSize = fontSize - 3 + 'px';
		art_body.css({'font-size':fontSize});
		setCookie( "cs_font_size", fontCook , 8765 ); // 365days
	});
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	var fontSZget = readCookie('cs_font_size');
	if ( fontSZget > 0 ){      
	 	fontSZget = fontSZget + 'px';
		art_body.css({'font-size':fontSZget});
	}
	else {
	}
	
	
	
	// �ϸ�ũ ��ũ��
    $('.bookmark a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 400, 'swing', function () {
            //window.location.hash = target;
            $(window).on("scroll", onScroll);
			//$(window).on("scroll", onS);
        });
    });

});

function getDzCookies(name) {
	var cookies = document.cookie;
	var value  = "";
	if(cookies.indexOf(name) != -1) {
		var start = cookies.indexOf(name) + name.length + 1;
		var end   = cookies.indexOf(";",start);

		if(end == -1) end = cookies.length;

		value = cookies.substring(start,end);
		value = unescape(value);
	}

	return value;
}
function setDzCookies() {
	var name; var value; var expire; var path; var domain;
	name = arguments[0];
	value = arguments[1];
	if (arguments.length > 2) path = arguments[2];
	if (arguments.length > 3) domain = arguments[3];
	if (arguments.length > 4) expire = arguments[4];
        
	document.cookie = name + "=" + escape(value)
		+ ( (expire) ? "; expires=" + expire : "")
		+ ( (path) ? "; path=" + path : "")
		+ ( (domain) ? "; domain=" + domain: "")
}
function checkLogin() {
	if(!getDzCookies('SMSESSION') || getDzCookies('SMSESSION') == "LOGGEDOFF" || !getDzCookies('SM_USER') || !getDzCookies('dz_info')) {
		return false;
	} else {
		return true;
	}
}
function windowOpen () {
	var nUrl; var nWidth; var nHeight; var nLeft; var nTop; var nScroll;
	nUrl = arguments[0];
	nWidth = arguments[1];
	nHeight = arguments[2];
	nScroll = (arguments.length > 3 ? arguments[3] : "no");
	nLeft = (arguments.length > 4 ? arguments[4] : (screen.width/2 - nWidth/2));
	nTop = (arguments.length > 5 ? arguments[5] : (screen.height/2 - nHeight/2));
	
	winopen=window.open(nUrl, 'pbml_win', "left="+nLeft+",top="+nTop+",width="+nWidth+",height="+nHeight+",scrollbars="+nScroll+",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");
}
function _getArticleTitle() {
	var metas = document.getElementsByTagName("META");
	var titl = "";
	for (var i=0;i<metas.length;i++){
		if (metas[i].name && metas[i].name == "description"){
			titl = metas[i].content;
			break;
		}
	}
	if (titl == "") titl = document.title;

	return titl;
}

function _getHitlogLink(sec) {
	var link = "http://hitweb2.chosun.com/php/In_Newht.php?sitecode=1&catcode=" + sec + "&artcode=sec_" + sec + "&ref=" + location.hostname + "&cur=" + location.hostname;
	(new Image).src = link;
}
function _getHitlogLinkNew(sns) {
	var _artid = '', _catid = '', _siteid = '1';
	if (typeof(ArtID) != 'undefined') _artid = ArtID;
	if (typeof(CatID) != 'undefined') _catid = CatID;
	if (_artid == '' || _catid == '') {
		var hitMetaCont = '';
		var hitAllMetas = document.getElementsByTagName("META");
		for (var i=0;i<hitAllMetas.length;i++){
			if (hitAllMetas[i].name && hitAllMetas[i].name == "HITLOG"){
				hitMetaCont = hitAllMetas[i].content;
				break;
			}
		}
		if (hitMetaCont != null || hitMetaCont != "") {
			var hitArticle = hitMetaCont.split(';');
			if (hitArticle != null && hitArticle.length == 3) {
				_siteid = hitArticle[0];
				_catid = hitArticle[1];
				_artid = hitArticle[2];
			}
		}
	}
	if (_artid != '') {
		var link = "http://hitweb2.chosun.com/php/In_Newht.php?sitecode=C31&catcode=" + sns + "_" + _siteid + "_" + _catid + "&artcode=" + _artid + "&ref=" + location.hostname + "&cur=" + location.hostname;
		(new Image).src = link;
	}
}


// not jquery 
function printOpen() {
	window.print();
	//var type = (arguments.length > 0 ? arguments[0] : "");
	//windowOpen ("/svc/news/www/printContentNews.html?type="+type, 750, 560, 'yes');
}
//�̸���
function mailOpen() {
	if(checkLogin() == false) {
		alert('��� �̸��Ϻ����� ����� �α��� �� ����Ͻ� �� �ֽ��ϴ�.');
		location.href = "https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl=" + escape(location.href);
		return false;
	}
	windowOpen ("/svc/news/www/sendContentNews.html", 540, 580);
}
//������ũ��
function showNewsScrap() {

	if (checkLogin() == false) {
		alert('��罺ũ�� ����� �α��� �� ����Ͻ� �� �ֽ��ϴ�.');
		location.href = "http://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl=" + escape(location.href);
		return;
	}

	var url = location.href;
	var sec = url.substring(7, url.indexOf(".chosun.com"));

	windowOpen ("http://myhome.chosun.com/scrap/folder.php?act=1&url="+url+"&sec="+sec+"&usr_id="+getDzCookies('SM_USER'), 440, 430, 'yes');
}

// get SNS counter

function _getContent () {
	try {
		if (typeof(ArtID) == "undefined" || ArtID == "") return;
		var _mode = arguments.length > 0 ? arguments[0] : "";
		var _url = "/svc/news/nextContent.html";
		if(location.href.indexOf("misaeng") > -1) _url = "/svc/misaeng/misaengNextContent.html";
		var _catid = (typeof(CatID) == "undefined" ? "" : (CatID.charAt(0) == "G" && CatID.length > 1 ? CatID.substring(0,2) : CatID.charAt(0)));
		var _para = "catid=" + _catid + "&contid=" + ArtID + "&mode="+_mode;
		_url += "?" + _para;

		$.ajax({
			url: _url 
			, type: 'GET'
			, async: true
			, dataType: 'jsonp'
			, success: function(data){
				if (data == "" || data[0].url == "") alert ("��簡 �������� �ʽ��ϴ�.");
				else location.href = data[0].url;
			}
			, error: function(status, error) {
				//alert("_getContent Error:"+error);
			}
		});
	}
	catch(e) {
		//alert("_getContent: " + e);
	}
}
function _toMoney (str) {
	var num = String(str);
	try {
		while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
			num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
		}
	} catch (e) {
		//alert(e);
	}
	return num;
}
function getFBCount() {
        var _article = _getArticleLink() + "?outlink=facebook";
        //var _url = "http://api.facebook.com/restserver.php?method=links.getStats&urls=" + encodeURIComponent(_article) + "&format=json";
		var _url = "http://news.chosun.com/svc/fb_count.html?id=" + encodeURIComponent(_article);
	try {
		$.ajax({
			url: _url 
			, type: 'GET'
			, async: true
			, dataType: 'jsonp'
			, success: function(data){
				//var _count = data[0].share_count;
				var _count = data.share.share_count;
				$("#FBCNT").html(_toMoney(_count));
			}
			, error: function(status, error) {
				//alert("getFBCount Error:"+error);
			}
		});
	}
	catch (e) {
		//alert(e);
	}
}
function getTWCount() {
        var _article = _getArticleLink();
	//_article += "?outlink=twitter";
	//var id = _getArticleID();
	//if (id != "") _article = "http://chosun.com/tw/?id=" + id; 
        var _url = "http://urls.api.twitter.com/1/urls/count.json?url=" + encodeURIComponent(_article);
	try {
		$.ajax({
			url: _url 
			, type: 'GET'
			, async: true
			, dataType: 'jsonp'
			, success: function(data){
				var _count = data.count;
				$("#TWCNT").html(_toMoney(_count));
			}
			, error: function(status, error) {
				//alert("getTWCount Error:"+error);
			}
		});
	}
	catch (e) {
		//alert(e);
	}
}
window.onload = function() {
	getFBCount();
	getTWCount();
}
