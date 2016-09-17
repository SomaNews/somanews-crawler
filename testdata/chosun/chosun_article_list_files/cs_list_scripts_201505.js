// JavaScript Document for chosun.com article 2015

//페이스북
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
function twitterOpen() {
	var titl = _getArticleTitle();
	titl = titl.replace (/'/gi,"´");
	titl = titl.replace (/"/gi,"˝");
	titl = encodeURIComponent(titl);

	var link = encodeURIComponent(_getArticleLink() + "?outlink=twitter"); 
	var id = _getArticleID();
	if (id != "") link = encodeURIComponent("http://chosun.com/tw/?id=" + id); 

	var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
	windowOpen (url, 800, 400, 'yes');
	_getHitlogLinkNew("TW");
	_getHitlogLink("sec_00011");
}
//구글플러스
function googleplusOpen() {
	var titl = encodeURIComponent(_getArticleTitle());
	var link = encodeURIComponent(_getArticleLink() + "?outlink=googleplus"); 
	var url = "https://plus.google.com/share?url=" + link;
	windowOpen (url, 500, 500, 'no');
	_getHitlogLinkNew("GP");
	_getHitlogLink("sec_00015");
}
//카카오스토리
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

	
	//body click 
	$("body").bind("click", function(e) {
        if( left_sns_layer.hasClass("open")
            && !$(e.target).is(".left_aside_sns, #left_aside_sns_more_id")
            && !$(e.target).closest(left_sns_layer).length
        ) {
            left_sns_layer.slideUp('fast').removeClass("open");
        }
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
function _getArticleLink() {
	var link = location.protocol + "//" + location.hostname + "" + (location.port!="" ? ":"+location.port : "") + location.pathname;
	return link;
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

function _getArticleLink() {
	var _url = location.href;
	//test
	_url = 'http://news.chosun.com/site/data/html_dir/2015/05/07/2015050700147.html';
	return _url;
}
