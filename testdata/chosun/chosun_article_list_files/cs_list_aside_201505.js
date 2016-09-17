// JavaScript Document for chosun.com news article aside

// JavaScript Document for chosun.com article aside ad (300*250)
if(CatID.substring(0,1) !== ""){
	document.write ('<div class="art_ad_aside">');
	if (outlinkReferrer()) {
		// 1 경제 / 2 정치 / 3 사회 / 4 국제 / 5 문화 / 6 오피니언
		var GnbAd = CatID.substring(0, 1);
		var GnbAd2 = CatID.substring(0, 2);
		var GnbAd3 = CatID.substring(0, 3);

		if ( GnbAd == '1' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/e_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd == '2' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/p_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd == '3' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/o_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd =='4' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/w_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd == '5' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/m_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd == '6' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/c_news@Right2"></scr' + 'ipt>');
		}
		else if ( GnbAd == 'G' ) {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/s_news@Right2"></scr' + 'ipt>');
		}
		else {
		document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/others@Right2"></scr' + 'ipt>');
		}
	}
	else { // outlink
	document.write ('<scr' + 'ipt type="text/javascript" src="http://cad.chosun.com/RealMedia/ads/adstream_jx.ads/www.chosun.com/outlink@Right2"></scr' + 'ipt>');
	}
	document.write ('</div>');
}
document.write ('<iframe class="art_ad_aside_if_5" width="290" height="100" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Position3"></iframe>');

// aside today language start
if (CatID.substring(0,1) !== "") {
  var lang_id = CatID.substring(0, 3);
  if ( lang_id == '321' || lang_id == '322' || lang_id == '323' || lang_id == '324' ) {
    function today_lang() {
      document.write ('<div id="today_lang_box"><iframe src="http://news.chosun.com/chosun/common/cs_art_aside_today_lang.html" width="320" height="150" scrolling="no" frameborder="0"></iframe></div>');
    }
    today_lang()
  }

}
  // aside today language end

document.write('<div class=news_aside_box> <div class=sec_headline_newsq> <h5><a href="http://news.chosun.com/svc/list_in/list_newsq.html">뉴스Q</a> <span class=more><a href="http://news.chosun.com/svc/list_in/list_newsq.html">더보기</a></span></h5> <div id="sec_headline_newsq_id"> <ul class="container"></ul> </div></div><div class="sec_headline_popular"> <div id="sec_headline_popular_id"> <div class="sec_headline_popular_item"> <h5><a href="http://news.chosun.com/ranking/list.html">인기기사</a></h5> <ul class="sec_headline_popular_tab"> <li><a href="#" rel="sec_headline_popular_pan_1">종합</a></li><li><a href="#" rel="sec_headline_popular_pan_2"></a></li></ul> <div class="sec_headline_popular_pan" id="sec_headline_popular_pan_1"> </div><div class="sec_headline_popular_pan" id="sec_headline_popular_pan_2"> </div></div></div></div></div>\
');


// popluar article by internet dev
function _getRankingList() {
	var ranking = [["1", "경제", "/chosunbiz/index"]
			,["2", "정치", "/www/politics"]
			,["3", "사회", "/www/national"]
			,["4", "국제", "/www/international"]
			,["5", "문화", "/www/culture"]
			,["6", "오피니언", "/www/editorials"]
			,["G1", "스포츠", "/www/sports"]
			,["G2", "연예", "/www/star"]
		];
	var path = '/ranking/rss', rsspath = '/index', rss = path + rsspath + '/index.xml';
	var catid = arguments.length > 0 ? arguments[0] : '', catname = '';
	if (catid != '') {
		if (catid.charAt(0) == "G") catid = catid.substring(0,2);
		else catid = catid.substring(0,1);
		for (var no = 0; no < ranking.length; no++) {
			if (catid == ranking[no][0]) {
				catname = ranking[no][1];
				rsspath = ranking[no][2];
				break;
			}
		}
		if (catname == '') {
			$(".sec_headline_popular_pan:eq(0)").show();
			$("ul.sec_headline_popular_tab li:eq(0) > a").addClass("current");
			return;
		}
		rss = path + rsspath + '/index.xml';
	}
	try {
		$.ajax({
			url: rss
			, type: 'GET'
			, async: true
			, dataType: 'xml'
			, success: function(resultXML){

				var itemList = $(resultXML).find("item");
				if (itemList == null || itemList.length == 0) return;
				var tot = itemList.length < 5 ? itemList.length : 5;

				var idx = 0, htmlstr = '';
				for(var no=0; no<itemList.length; no++){

					var title_element = $(itemList[no]).find("title");
					var link_element = $(itemList[no]).find("link");
					var thumb_element = $(itemList[no]).find("comments");
					if (title_element == null || link_element == null || thumb_element == null) continue;

					var title = $(title_element).text();
					var link = $(link_element).text();
					var thumb = $(thumb_element).text();

					htmlstr += '<dl class=cmt_favnews_item>';
					if (thumb != '')
						htmlstr += '<dd class=thumb>'
							+ '<a target=_top href="' + link +'"><img src="' + thumb +'" alt="" onError="this.style.display=\'none\';"></a>'
							+ '</dd>';
					htmlstr += '<dt>'
						+ '<a target=_top href="' + link + '">' + title + '</a>'
						+ '</dt>'
						+ '</dl>';

					idx++;
					if (idx >= tot) break;
				}
				if (catid == '') {
					$(".sec_headline_popular div.sec_headline_popular_pan").eq(0).html(htmlstr);
				}
				else {
					$(".sec_headline_popular_tab li a").eq(1).html(catname);
					$(".sec_headline_popular div.sec_headline_popular_pan").eq(1).html(htmlstr);
				}
			}
			, error: function(status, error) {
			}
		});
	}
	catch (e) {
	}
}
function _getNewsqList() {
	var path = "/svc/list_in/list_newsq_top.html";
	try {
		$.ajax({
			url: path
			, type: 'GET'
			, async: true
			, dataType: 'json'
			, success: function(jsonData){

				var item = jsonData.item;
				if (item == null) return;

				var htmlstr = '';
				for(var no=0; no<item.length; no++){
					var title = item[no].title.replace (/&lt;/gi,"<").replace (/&gt;/gi,">");
					htmlstr += '<li><dl class="' + (no == 0 ? 'newsq_item_big' : 'newsq_item') + '">'
						+ '<dd class=thumb><a target=_top href="' + item[no].link +'"><img src="' + item[no].thumb +'" alt="" onError="this.style.display=\'none\';"></a>' + (no == 0 ? '<span></span>' : '') + '</dd>'
						+ '<dt><a target=_top href="' + item[no].link + '">' + title + '</a></dt>'
						+ '</li>';
				}
				$("#sec_headline_newsq_id ul.container").html(htmlstr);
			}
			, error: function(status, error) {
			}
		});
	}
	catch (e) {
	}
}
$("#sec_headline_newsq_id").ready(function() {
	_getNewsqList();
});
$(".sec_headline_popular_tab").ready(function() {
	_getRankingList();
	if (typeof(CatID) != "undefined") _getRankingList(CatID);
});
