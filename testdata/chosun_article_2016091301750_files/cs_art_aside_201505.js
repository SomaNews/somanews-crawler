// JavaScript Document for chosun.com news article aside

// JavaScript Document for chosun.com article aside ad (300*250)
if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){
	document.write('<div id="banner02"></div>');
	Tcode ="mm41p2";
	ADtype ="12";
	Stype="1"; //사용유무 0:사용안함 1: 사용
	Vid = "banner02"; //광고가 삽입될 div를 지정해주세요.
	var APP_URL2 = 'http://mobilemove.g.ucloudbiz.com' + '/vcount/vcount.js';
	document.writeln("<scr"+"ipt language='javascript' src='" + APP_URL2 + "'></scr"+"ipt>");
}else {
	// aside rectangle ad start
	if(CatID.substring(0,1) !== "" && CatID.substring(0,3) !== "3N3"){
		document.write ('<div class="art_ad_aside">');
		if (outlinkReferrer()) {
			// 1 경제 / 2 정치 / 3 사회 / 4 국제 / 5 문화 / 6 오피니언 / G 스포츠연예
			var GnbAd = CatID.substring(0, 1);
			var GnbAd2 = CatID.substring(0, 2);
			var GnbAd3 = CatID.substring(0, 3);

			if ( GnbAd == '1' ) {
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/e_news@Right2"></iframe>');
			}
			else if ( GnbAd == '2' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 정치
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/p_news@Right2"></iframe>');

			}
			else if ( GnbAd == '3' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 사회
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/o_news@Right2"></iframe>');

			}
			else if ( GnbAd =='4' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 국제
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/w_news@Right2"></iframe>');

			}
			else if ( GnbAd == '5' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 문화
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/m_news@Right2"></iframe>');

			}
			else if ( GnbAd == '6' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 오피니언
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Right2"></iframe>');

			}
			else if ( GnbAd == 'G' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 스포츠연예
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/s_news@Right2"></iframe>');

			}
			else {
				document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Right2"></iframe>');
			}
		}
		else {

			// JavaScript Document for chosun.com article center up ad(x74) --------------- outlink
			document.write ('<iframe width=300 height=250 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/outlink@Right2"></iframe>');

		}
		document.write ('</div>');
	}
	// aside rectangle ad end
}


if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){
}else {
	if ( CatID.substring(0,3) !== "3N3" ) {
	document.write ('<iframe class="art_ad_aside_if_5" width="290" height="100" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Position3"></iframe>');
	}
}

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


document.write('<div class=news_aside_box> <div class="sec_headline_popular"> <div id="sec_headline_popular_id"> <div class="sec_headline_popular_item"> <h5><a href="http://news.chosun.com/ranking/list.html">인기기사</a></h5> <ul class="sec_headline_popular_tab"> <li><a href="#" rel="sec_headline_popular_pan_1">종합</a></li><li><a href="#" rel="sec_headline_popular_pan_2">정치</a></li></ul> <div class="sec_headline_popular_pan" id="sec_headline_popular_pan_1"> </div><div class="sec_headline_popular_pan" id="sec_headline_popular_pan_2"> </div></div></div></div><div class=sec_headline_newsq> <h5>Today\'s Pick</h5> <div id="sec_headline_newsq_id"> <ul class="container"> </ul> </div></div></div>\
');

// 8 month
if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){
}else {
		if(CatID.substring(0,1) !== "" && CatID.substring(0,3) !== "3N3"){
				var heycatid = CatID.substring(0, 1);
				if ( heycatid == '3' ) {
					document.write ('<!-- div style="line-height:0"><iframe src="http://news.chosun.com/event/seoul_bn_2016.html" width="320" height="100" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe></div -->');
				}
				else {}
		}
}

document.write('<div class="art_ad_promo_ifbox"> <iframe class="art_ad_aside_if_promo" width="280" height="110" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://news.chosun.com/event/right_common/"></iframe></div>')

if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){
}else {
		if(CatID.substring(0,1) !== "" && CatID.substring(0,3) !== "3N3"){
				var heycatid = CatID.substring(0, 4);
				if ( heycatid == '6241' ) {
				}
				else {
					document.write ('<div class="art_aisde_ads">');
					document.write ('<iframe class="art_ad_aside_if_16_1" width="300" height="250" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Right3"></iframe>');
					document.write ('<iframe class="art_ad_aside_if_16_2" width="260" height="250" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@x75"></iframe>');
					document.write ('<iframe class="art_ad_aside_if_16_3" width="300" height="600" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0" src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Right"></iframe>');
					document.write ('</div>');
				}
		}
}




// popluar article by internet dev
function _getSubString() {
	var str = arguments.length > 0 ? arguments[0] : "";
	var len = arguments.length > 1 ? arguments[1] : "";
	if (str == "" || len == "") return;
	try {
		var nbytes = 0, inc = 0, retval = "";
		for (i=0; i<str.length; i++) {
			var ch = str.charAt(i);
			if(escape(ch).length > 4) {
				inc = 2;
			} else if (ch == '\n') {
				if (str.charAt(i-1) != '\r') {
					inc = 1;
				}
			} else if (ch == '<' || ch == '>') {
				inc = 4;
			} else {
				inc = 1;
			}
			if ((nbytes+inc) > len) break;
			nbytes += inc;
			retval += ch;
		}
		if (str != retval) str = retval + (retval.lastIndexOf("..") == -1 ? '..' : '');
	}
	catch (e) { }

	return str;
}
function _getRankingList() {
	var ranking = [["2", "정치", "/www/politics"]
			,["1", "경제", "/chosunbiz/index"]
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

				var idx = 0, htmlstr = '', len = 50;
				for(var no=0; no<itemList.length; no++){

					var title_element = $(itemList[no]).find("title");
					var link_element = $(itemList[no]).find("link");
					var thumb_element = $(itemList[no]).find("comments");
					if (title_element == null || link_element == null || thumb_element == null) continue;

					var title = $(title_element).text();
					var link = $(link_element).text();
					var thumb = $(thumb_element).text();
					if (thumb != '') title = _getSubString(title,len);
					else title = _getSubString(title,len+15);

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
	var path = "/section/tag_www.xml";
	var tags = [["news_q_1", "news_q_2", "newsq_img_1"], ["newsq_img_2", "picpen_img_1", "picpen_img_2"]];
	var ri = Math.floor(Math.random()*10)%2;
	try {
		$.ajax({
			url: path
			, type: 'GET'
			, async: true
			, dataType: 'xml'
			, success: function(xmlData){
				var infos = [new Array(), new Array()];
				$items = $(xmlData).find("ITEM");
				$items.each(function(){
					$code = $(this).find("CODE");
					_code = $code.text();
					var find_tag = false;
					var _tag = "";
					var _ind = 0;
					for(j=0; j < tags[ri].length; j++){
						if(_code == tags[ri][j]){
							$type = $(this).find("TYPE");
							var _type = $type.text();
							var _title = "";
							var _img = "";
							var _link = "";
							if(_type == "SIDEART"){
								$title = $(this).find("INDEX_TITLE");
								_title = $title.text();
								$img = $(this).find("IMG1 SRC");
								_img = $img.text();
								$link = $(this).find("CONT_LINK");
								_link = $link.text();
							}else if(_type = "IMG"){
								$title = $(this).find("IMG_DESC");
								_title = $title.text();
								$img = $(this).find("IMG_SRC");
								_img = $img.text();
								$link = $(this).find("URL");
								_link = $link.text();
							}
							infos[_code] = {"title":_title, "img":_img, "link":_link};
							find_tag = true;
							break;
						}
					}
				});
				var htmlstr = '';
				for(var j=0; j<tags[ri].length; j++){
					var info = infos[tags[ri][j]];
					var title = info["title"].replace (/&lt;/gi,"<").replace (/&gt;/gi,">");
					htmlstr += '<li><dl class="' + (j == 0 ? 'newsq_item_big' : 'newsq_item') + '">'
						+ '<dd class=thumb><a target=_top href="' + info["link"] +'"><img src="' + info["img"] +'" alt="" onError="this.style.display=\'none\';"></a>' + (j == 0 ? '<span></span>' : '') + '</dd>'
						+ '<dt><a target=_top href="' + info["link"] + '">' + title + '</a></dt>'
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
