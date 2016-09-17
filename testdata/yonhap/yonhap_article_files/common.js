;(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);//http://jquery.thewikies.com/browser/

/***********************************************
* 전역변수 설정
- cHotMode : [쿠키] 핫뉴스 리스트 모드
- cFontSize : [쿠키] 기사본문 텍스트 사이즈
- gnb_deps1, gnb_deps2, gnb_cate, gnb_info : 페이지 네비게이션 및 카테고리 관리용
************************************************/
var cHotMode, article_fontSize;

if(getCookie("cHotMode")) cHotMode = getCookie("cHotMode");
else cHotMode = "list";
//else cHotMode = "tile";  /* 2014-10-30 수정 */

/* 폰트 셋팅 수정 2016-07-07 */
//if(getCookie("article_fontSize")) article_fontSize = getCookie("article_fontSize");
//else article_fontSize = 3;
if(window.localStorage.article_fontSize){
	article_fontSize = window.localStorage.article_fontSize;
}else{
	article_fontSize = 3;
	window.localStorage.setItem("article_fontSize", article_fontSize);
};

var gnb_deps1="", gnb_deps2="", gnb_cate;

var gnb_info = {
	"news" : {
		"00" : {"text" : "최신기사"},
		"01" : {"text" : "정치"},
		"02" : {"text" : "북한"},
		"03" : {"text" : "산업/경제"},
		"04" : {"text" : "금융/증권"},
		"05" : {"text" : "IT/과학"},
		"06" : {"text" : "사회"},
	    "07" : {"text" : "전국", "sub" : { "00" : "경기", "01" : "인천", "02" : "부산", "03" : "울산", "04" : "경남", "05" : "대구/경북", "06" : "광주/전남", "07" : "전북", "08" : "대전/충남/세종", "09" : "충북", "10" : "강원", "11" : "제주" }},
    	"08" : {"text" : "연예"},
		"09" : {"text" : "문화"},
		"10" : {"text" : "스포츠", "sub" : { "00" : "야구", "01" : "축구", "02" : "농구/배구", "03" : "골프"}},
		"11" : {"text" : "세계", "sub" : {"00" : "특파원", "01" : "미국/북미", "02" : "중국", "03" : "일본", "04" : "아시아,호주", "05" : "유럽", "06" : "중남미", "07" : "중동/아프리카", "08" : "국제기구", "09" : "아시아넷", "10" : "PR Newswire"}},
		"12" : {"text" : "한민족"},
		"13" : {"text" : "사람들", "sub" : { "00" : "인사", "01" : "부고", "02" : "동정", "03" : "CEO", "04" : "인터뷰"}},
		"14" : {"text" : "여행/축제"},
		"15" : {"text" : "시론"}
	},
	"photo" : {
		"00" : {"text" : "포토", "sub" : { "00" : "포토홈", "01" : "정치", "02" : "북한", "03" : "산업/경제", "04" : "IT/과학", "05" : "사회", "06" : "전국", "07" : "스포츠", "08" : "연예", "09" : "문화", "10" : "세계", "11" : "연합photo톡talk"}},
		"01" : {"text" : "화보"},
		"02" : {"text" : "포토무비"},
		"03" : {"text" : "그래픽"},
		//"04" : {"text" : "영상", "sub" : { "00" : "영상홈", "01" : "정치", "02" : "북한", "03" : "경제", "04" : "IT/과학", "05" : "생활경제", "06" : "사회", "07" : "전국", "08" : "스포츠", "09" : "연예", "10" : "문화", "11" : "세계"}},
		"04" : {"text" : "영상", "sub" : { "00" : "영상홈", "01" : "현장영상", "02" : "정치", "03" : "경제", "04" : "사회", "05" : "전국", "06" : "스포츠", "07" : "연예", "08" : "문화", "09" : "세계"}},
		"05" : {"text" : "인터랙티브"}
	},
	"policy" : {
		"00" : {"text" : "기사제보"},
		"01" : {"text" : "저작권규약"},
		"02" : {"text" : "수용자권익위원회"},
		"03" : {"text" : "고충처리"},
		"04" : {"text" : "개인정보취급방침"},
		"05" : {"text" : "독자게시판"}
	}
};

/***********************************************
* 온로드 실행 함수
************************************************/
$(function(){
	$(function() {

		/* body addClass : 브라우져별 디버깅용 body 클래스 */
		if($.browser.name == 'msie') $('body').addClass($.browser.className);
		else $('body').addClass($.browser.name);

		if('ontouchstart' in window){

		}else{
			$("#btnGoMobile").hide();
		}

		/* 로그인 체크 */
		function checkLogin(){
			var userId = getCookie('YNA_MEMBER_ID');
			if(userId == null) $('.top-link02').addClass('session-in');
			else $('.top-link02').addClass('session-out');
		}

		checkLogin();

		/* 현재페이지 메뉴카테고리 : 일반페이지, 아이프레임 페이지에 따라 카테고리 클래스 객체구분 */
		var gnb_check;

		if($('#wrap').length>0) gnb_check = $('#wrap').attr('class');
		else if($('#popWrap').length>0) gnb_check = "";
		else gnb_check = $("#wrap", parent.document).attr('class');

		if (gnb_check && gnb_check.match('gnb')){
			var gnb_value = gnb_check.split('gnb')[1].split(' ')[0].split('-');
			gnb_cate = gnb_value[1];
			gnb_deps1 = gnb_value[2].substr(0,2);
			gnb_deps2 = gnb_value[2].substr(2,2);
		}

		/* CSS디버깅 : 보더 없애기 */
		$('#header .wholemenu-top-wrap>.wholemenu-top:first').addClass('first');		//전체메뉴
		$('#footer .service-top-wrap>dl:last').addClass('last');									//서비스 안내

		//$('#content .headlines>ul:last-child').find('>li:last').addClass('bd-none');		//메인-주요뉴스
		var renewalMain = $('body').hasClass('main2015');
		if(renewalMain){
		}else{
			$('#content .headlines>ul:last-child').find('>li:last').addClass('bd-none');		//메인-주요뉴스
		}

		$('#content .list-style03').find('.photo-section01:last').addClass('bd-none');		//메인-분야별 사진

		$('#policy-gnb>li:last-child').find('>a').addClass('last');									//제휴사-GNB
		$('#policy-tab>li:last-child').find('>a').addClass('last');									//제휴사-TAB

		/* CSS디버깅 : 톱뉴스-통단C */
		$('#content .top-news-C .related-wrap li:nth-child(3n)').addClass('last');

		/* CSS디버깅 : hover 스타일 */
		$("#content .photo-list a").bind("focus mouseover",function(){ $(this).parent().parent().addClass("on");});
		$("#content .photo-list a").bind("blur mouseout",function(){ $(this).parent().parent().removeClass("on");});

		/* CSS디버깅 : 포토 리스트 : 마지막 마진없애기*/
		$('.photo-section01>li:last-child').addClass('mg-none');

		/* 위로가기*/
		var btnScrollTop = $('#btnScrollTop');

		windowResize();

		btnScrollTop.click(function(){
			$('html,body').animate({scrollTop: 0}, 500);
		});

		$(window).bind('resize', function(e){
			btnScrollTop.addClass('resize');
			windowResize();
		});

		function windowResize(){
			if($(window).width()>1122){
				btnScrollTop.attr('style','');
			}else{
				var new_position = ($(window).width()-976)/2-53;
				btnScrollTop.css('right',new_position + 'px');
			}
		}

		/* 전체메뉴 */
		$('#header .wholemenu-wrap').toggleContents({
			conEl : ">div",
			//conEl : ".wholemenu",
			eventEl : ".btn-wholemenu",
			conEventEl : "a",
			closeEl : ".btn-close",
			eventOn : "on",
			effect : "fade",
			aniTimer : 200
		});

		/* 스킵네비 */
		$('.skip-link a').each(function(){
			$(this).click(function(){
				var thisHref = $(this).attr('href');
				$(thisHref).attr('tabindex','-1');
				$(thisHref).focus();
			});
		});

		/* 페이지카테고리 추출 : #wrap 클래스 */
		/* gnb navigation */
		var gnbNavi = (function(){
			var wrapper = $('#gnb'),
			header = $('#header'),
			gnb = wrapper.find('>ul'),
			gnb_sub = gnb.find('>li>ul'),
			gnb_1depth = gnb.find('>li>a'),
			gnb_2depth = gnb.find('>li>ul>li>a'),
			gnb_timer = null;

			return {
				init: function(){

					if(gnb_deps1!="") gnb.find(">li").eq(gnb_deps1).find(">a").addClass("on");
					if(gnb_deps2!="") gnb.find(">li").eq(gnb_deps1).find(">ul>li").eq(gnb_deps2).find(">a").addClass("on");

					//초기화 및 현재메뉴세팅
					wrapper.find('a.on').addClass('active');
					this.activeNavi();

					var self = this;

					//이벤트 설정
					gnb_1depth.bind('focus mouseover', function(ev){
						ev.preventDefault();
						var this_el = $(this);
						gnb_1depth.removeClass("on");

						gnb_1depth.each(function(index){
							if(gnb_1depth.index(this_el)==index){
								//this_el.addClass('on');
								if($(this).next('ul').length){
									if($(this).next('ul').hasClass('last-sub')){
										wrapper.stop().animate({'paddingBottom':0},100);
										this_el.next('ul').show();
									}else{
										wrapper.stop().animate({'paddingBottom':27},100);
										this_el.next('ul').show();
										this_el.next('ul').css("left",self.positionReset(this_el));
									}
								} else if($(this).hasClass('gnb-other')){
									$(this).parent().siblings().find('.active').next('.gnb-sub').show();
								}
							}else{
								$(this).removeClass('on');
								$(this).next('ul').hide();
							}
						});
					});

					gnb_1depth.bind('focus', function(ev){clearTimeout(gnb_timer);});
					gnb_2depth.bind('focus', function(ev){clearTimeout(gnb_timer);});

					gnb_1depth.bind('blur', function(ev){gnb_timer = setTimeout(self.hideNavi,500);});
					gnb_2depth.bind('blur', function(ev){gnb_timer = setTimeout(self.hideNavi,500);});

					$(document).on('mouseover.gnbNavi', function(e){
						if (!$(e.target).closest(wrapper).length) {
							self.hideNavi();
						}
					});
				},
				hideNavi : function(){
					wrapper.stop().animate({'paddingBottom':0},100);
					gnb_1depth.removeClass("on");
					gnb_sub.hide();
					gnbNavi.activeNavi();
				},
				activeNavi : function(){
					gnb.find('>li>a.active').addClass('on');
					if(gnb.find('>li>a.active').next("ul").length>0){
						wrapper.stop().animate({'paddingBottom':27},100);
						gnb.find('>li>a.active').next("ul")
							.show()
							.css("left",this.positionReset(gnb.find('>li>a.active')));
					}
				},
				positionReset : function(obj){
					var new_value = (obj.parent().position().left + (obj.parent().outerWidth()/2)) - (obj.next('ul').outerWidth()/2);
					if(new_value<0) new_value = 12;
					if(new_value+obj.next('ul').outerWidth()>gnb.outerWidth()) new_value = gnb.outerWidth()-obj.next('ul').outerWidth()-12;
					return new_value;
				}
			};
		}());
		gnbNavi.init();

		if ( parent == self ) {
			/* 티커 : 날씨 */
			tickerWeather.loadData();

			/* 긴급뉴스 */
			tickerNewsBreak.loadData();

			/* 속보 */
			tickerNewsFlash.loadData();
		}

		/* 기본탭 + 스크롤링 : 기본 */
		$(".tab-wrap01:not(.tab-setting)").moveContents({
			conEl:">ul>li",
			iconFlag : false,
			effect : "slide",
			btnPrev : ".btn_prev",
			btnNext : ".btn_next",
			btnFlag : true,
			btnFlagAll : true,
			slideRepeat : true,
			slideValue : 85,
			slideView : 3,
			aniTimer : 300, //2014-07-04 추가
			changeCallBack : tabContent
		});

		function tabContent(){
			$(this).find("li.on>a").trigger("click");
		}

		/* 기본탭 + 스크롤링 : 카테고리세팅(뉴스컨텐츠용) */
		$(".tab-setting").moveContents({
			conEl:">ul>li",
			iconFlag : false,
			effect : "slide",
			btnPrev : ".btn_prev",
			btnNext : ".btn_next",
			btnFlag : true,
			btnFlagAll : true,
			slideRepeat : true,
			slideValue : 85,
			slideView : 3,
			aniTimer : 300, //2014-07-04 추가
			defaultIndexCallBack : tabCategory,
			changeCallBack : tabContent
		});

		function tabCategory(){
			var tab_default_index = 0;
			var tab_list = $(this).find('li a');

			if(gnb_deps1){
				var tab_select = $(this).find('li a:contains('+gnb_info[gnb_cate][gnb_deps1]["text"]+')');

				if(tab_select.length>0){
					tab_default_index = tab_list.index(tab_select);
				}
			}
			tab_list.removeClass('on');
			tab_list.eq(tab_default_index).addClass('on');

			return tab_default_index;
		}

		/* 기본탭 */
		$('.tab-wrap01 ul li a').tabMenu();

		/* 섹션별 주요포토 */
		$(".politicphoto-wrap").moveContents({
			eventEl : ">span>a",
			conEl : ">ul>li",
			effect : "fade",
			setId : "sectionPhoto"
		});

	});
});

/***********************************************
* 공통 : cookie setting
************************************************/
function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name){
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name){
			return unescape(y);
		}
	}
}

/********************************************************************************
* 공통 : html replace
*********************************************************************************/
var replaceHtmlChr = function(CheckValue){
	var s = new String(CheckValue);
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/"/g, "&quot;");
	return s;
};

/********************************************************************************
* 공통 : date replace
*********************************************************************************/
var replaceDateTime = function(checkValue){
	var d =checkValue.substr(0,4) + '-' + checkValue.substr(4,2) + '-' + checkValue.substr(6,2);
	if(checkValue.length>8) d = d + ' ' + checkValue.substr(8,2) + ':' + checkValue.substr(10,2);
	return d;
}

var replaceDate = function(checkValue){
	var d =checkValue.substr(0,4) + '.' + checkValue.substr(4,2) + '.' + checkValue.substr(6,2);
	return d;
}

/********************************************************************************
* 공통 : 페이징
*********************************************************************************
- data_cnt	: 전체데이터갯수
- list_cnt : 한페이지당 출력갯수
- page_this : 현재페이지
- page_cnt : 페이지 출력갯수
- page_total : 총 페이지수
- page_start : 시작페이징 넘버
- page_end : 종료페이지 넘버
- page_prev : 이전페이지 넘버
- page_next : 다음페이지 넘버
*********************************************************************************/
var printPaging = function(obj, page_link, page_param, data_cnt, list_cnt, page_this, page_cnt){
	var paging_list = '';
	var page_total, page_start, page_start, page_prev, page_next;

	//총 페이지 갯수 설정
	page_total = Math.ceil(data_cnt/list_cnt);

	//시작페이징 넘버
	page_start = Math.floor(((page_this-1)/page_cnt))*page_cnt+1;

	//종료페이징 넘버
	page_end = page_start + (page_cnt-1);
	if(page_end>=page_total) page_end = page_total;

	//이전페이지
	page_prev = Number(page_this)-1;
	if(page_prev<1) page_prev = 1;

	//다음페이지
	page_next = Number(page_this)+1;
	if(page_next>page_total) page_next = page_total;

	//페이징출력(처음,이전페이지)
	if(page_this>1){
		paging_list += '<a href="'+page_link+'?page=1'+page_param+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_first.gif" alt="처음 페이지"/></a> ';
		paging_list += '<a href="'+page_link+'?page='+page_prev+''+page_param+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_prev.gif" alt="이전 페이지"/></a> ';
	}else{
		paging_list += '<span><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_first.gif" alt="처음 페이지"/></span> ';
		paging_list += '<span><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_prev.gif" alt="이전 페이지"/></span> ';
	}

	//페이징출력(넘버링)
	for(i=page_start;i<=page_end;i++){
		if(i==page_this) paging_list += '<strong>'+i+'</strong> ';
		else paging_list += '<a href="'+page_link+'?page='+i+''+page_param+'">'+i+'</a> ';
	}

	//페이징출력(다음,마지막페이지)
	if(page_this<page_total){
		paging_list += '<a href="'+page_link+'?page='+page_next+''+page_param+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_next.gif" alt="다음 페이지"/></a> ';
		paging_list += '<a href="'+page_link+'?page='+page_total+''+page_param+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_last.gif" alt="마지막 페이지"/></a> ';
	}else{
		paging_list += '<span><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_next.gif" alt="다음 페이지"/></span> ';
		paging_list += '<span><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_last.gif" alt="마지막 페이지"/></span> ';
	}

	obj.empty().append(paging_list);
}

/***********************************************
* ticker : 날씨정보
***********************************************/
var tickerWeather = (function(){
	var weather_data;
	return {
		loadData : function(){
			var self = this;
			$.ajax({
				url : '/weather/wx_current.xml',
				dataType: 'xml',
				success: function(data){
					weather_data = $(data);
					self.displayData();
				},
				error  : function(){
				}
			});
		},
		displayData : function(){
			var str_data = weather_data.find("RECORD");
			var data_list ="";

			for(i=0;i<str_data.length;i++){
				var w_info1 = $(str_data[i]).find("POINT_NAME").text();
				var w_info2 = $(str_data[i]).find("WX_CODE").text().length == 1 ? '0' + $(str_data[i]).find("WX_CODE").text() : $(str_data[i]).find("WX_CODE").text();
				var w_info3 = $(str_data[i]).find("WX").text();
				var w_info4 = $(str_data[i]).find("TEMPERATURE").text();

				data_list+='<li>';
				//data_list+='	<a href="/weather/index.html">';
				/* 2014-09-02 */
				if($('#wrap').hasClass('main-wrap')){
					data_list+='	<a href="/weather/index.html?template=8273">';
				}else{
					data_list+='	<a href="/weather/index.html">';
				}
				data_list+='	<img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_w_'+w_info2+'.gif" alt="'+w_info3+'"/>';
				data_list+='	<strong>'+w_info1+'</strong>';
				data_list+='	<em>'+w_info4+' &deg;C</em>';
				data_list+='	</a>';
				data_list+='</li>';
			}

			var w_date = $(str_data[0]).find("OBS_TIME").text().split(" ")[0];
			var w_date_d = new Date(w_date.split("-")[0], w_date.split("-")[1]-1, w_date.split("-")[2]).getDay();
			var w_date_dv = new Array('일', '월', '화', '수', '목', '금', '토');

			$("#tickerWeatherDate").find("strong").empty().text(w_date.replace(/-/g,"."));
			$("#tickerWeatherDate").find("em").empty().text("("+w_date_dv[w_date_d]+")");

			$("#tickerWeather").empty().append(data_list);
			$("#tickerWeather").moveContents({
				conEl:">li",
				iconFlag:false,
				autoPlay:true,
				changeTimer : 3000
			});
		}
	};
}());

/***********************************************
* ticker : 지수정보
***********************************************/
var tickerStock = (function(){
	var stock_data,
	stock_url = '/maketpl/home/ref/stock.tpl';
	return {
		loadData : function(){
			var self = this;
			$.ajax({
				type: "get",
				url: stock_url + '?' + new Date(),
				dataType: "json",
				success: function (data) {
					stock_data = data[0];
					//setTimeout(tickerStock.loadData, 1000 * 60 * 5);
					self.setData();
				},
				error  : function(error){
				}
			});
		},
		setData : function(){
			var info1_el = $("#kospiWrap dd.kospi");
			var info2_el = $("#kospiWrap dd.kosdaq");
			this.printData(info1_el,"KOSPI");
			this.printData(info2_el,"KOSDAQ");
			this.makeTimeHtml();
		},
		printData : function(obj,kindvalue){

			obj.find("span").eq(0).text(this.makeNumber(stock_data[kindvalue]["rate"]));

			if(stock_data[kindvalue]["updn"]=="5"){
				var class_name = "down";
				var img_src = function(){ return obj.find("img").attr("src").replace("_up","_down") };
				var img_alt = "하락";
			}else{
				var class_name = "up";
				var img_src = function(){ return obj.find("img").attr("src").replace("_down","_up") };
				var img_alt = "상승";
			}
			obj.find("strong").text(stock_data[kindvalue]["gap"]).removeClass().addClass(class_name);
			obj.find("img").attr("src",img_src);
			obj.find("img").attr("alt",img_alt);
		},
		makeNumber: function(value) {
			value = value.replace(/^([0-9]+)([0-9]{2})$/, '$1.$2');
			value = value.replace(/^([0-9]+)([0-9]{3}\.[0-9]{2})$/, '$1,$2');
			return value;
		},
		makeTimeHtml: function () {
			// current time of stock market
			var date = stock_data["KOSPI"]["date"];
			var tmpHour = date.substring(8, 12);

			if (tmpHour >= 8888) {
				$('.k-time').html('<p>장마감 (' + date.substring(0, 4) + '.' + date.substring(4, 6) + '.' + date.substring(6, 8) + ')</p>');
			} else {
				$('.k-time').html('<p>' + date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6, 8) + '  ' + date.substring(8, 10) + ':' + date.substring(10, 12) + '</p>');
			}
		}
	};
}());

/***********************************************
* ticker : 긴급속보
***********************************************/
var tickerNewsBreak = (function(){
	var break_data, break_url = '/data/urgency.js';
	return {
		loadData : function()
		{
			var self = this;
			//var rnd = Math.round(Math.random() * 100000);
			var rnd = Math.floor(new Date().getTime() / 1000 / 60);
			$.ajax({
				type: "get",
				url: break_url+'?'+rnd,
				dataType: "json",
				success: function (data) {
					break_data = data;
					self.setData()
				},
				error  : function(error){
				}
			});
		},
		setData : function()
		{
			var data = break_data.DATA[0];
			if ( data["CONTENTS_ID"].length > 0 )	 {
				$('.search-wrap').css({'z-index':'680'});
				if ( getCookie("cBreak"+data["CONTENTS_ID"]) != data["CONTENTS_ID"] ){
					data_html ='<strong class="tit">긴급</strong>';
					data_html +='<p class="emergency-list" id="cBreak'+data["CONTENTS_ID"]+'"><a href="'+data["CONTENTS_LINK"]+'">'+replaceHtmlChr(data["TITLE"]).replace(/\"/, "") +'</a></p>';
					data_html +='<span class="emergency-btn">';
					data_html +='	<input type="button" value="긴급뉴스 닫기" class="btn_close"/>';
					data_html +='</span>';
					var ui_wrap = $('#emergency');
					ui_wrap.html(data_html).show();
					$('body').addClass('em-news');
					ui_wrap.find('.emergency-btn .btn_close').click(function(){
						$(this).parent().parent().fadeOut();
						$('body').removeClass('em-news');
						$('.search-wrap').css({'z-index':'700'});
						var cookie_name = ui_wrap.find('.emergency-list').attr("id");
						setCookie(cookie_name,cookie_name.replace("cBreak",""), 1);
					});
				}
			} else {
				$('#emergency').fadeOut(500);
				$('body').removeClass('em-news');
				$('.search-wrap').css({'z-index':'700'});
			}
			setTimeout('tickerNewsBreak.loadData()', 1000 * 60);
		}
	}
}());

/***********************************************
* ticker : 속보정보
***********************************************/
var tickerNewsFlash = (function(){
	var news_data, news_url = '/data/sokbo_ticker.js';
	return {
		loadData : function()
		{
			var self = this;
			//var rnd = Math.round(Math.random() * 100000);
			var rnd = Math.floor(new Date().getTime() / 1000 / 60);
			$.ajax({
				type: "get",
				url: news_url+'?'+rnd,
				dataType: "json",
				success: function (data) {
					news_data = data;
					self.setData()
				},
				error  : function(error){
				}
			});
		},
		setData : function()
		{
			var data = news_data.DATA;
			var data_list ="";

			var this_date = new Date();
			/*
			for(i=0;i<data.length;i++){
				var news_yy = data[i]["SEND_DATETIME"].substr(0,4);
				var news_mm = data[i]["SEND_DATETIME"].substr(4,2) -1;
				var news_dd = data[i]["SEND_DATETIME"].substr(6,2);
				var news_hh = data[i]["SEND_DATETIME"].substr(8,2);
				var news_tt = data[i]["SEND_DATETIME"].substr(10,2);
				var news_ss = data[i]["SEND_DATETIME"].substr(12,2);

				var news_date = new Date(news_yy, news_mm, news_dd, news_hh, news_tt, news_ss);
				var time_term = parseInt((this_date.getTime() - news_date.getTime()) / 60000);

				data_list+='<li>';
				if (data[i]["URGENCY"] == '0' || data[i]["URGENCY"] == '1') data_list+='<strong>[긴급]</strong>';
				data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+time_term+'분 전</span>';
				data_list+='</li>';
			}
			*/

			/* 2014-08-26 */
			for(i=0;i<data.length;i++){
				var news_yy = data[i]["SEND_DATETIME"].substr(0,4);
				var news_mm = data[i]["SEND_DATETIME"].substr(4,2) -1;
				var news_dd = data[i]["SEND_DATETIME"].substr(6,2);
				var news_hh = data[i]["SEND_DATETIME"].substr(8,2);
				var news_tt = data[i]["SEND_DATETIME"].substr(10,2);
				var news_ss = data[i]["SEND_DATETIME"].substr(12,2);

				var news_date = new Date(news_yy, news_mm, news_dd, news_hh, news_tt, news_ss);
				var time_term = parseInt((this_date.getTime() - news_date.getTime()) / 60000);
				var timeH = parseInt(time_term/60);

				data_list+='<li>';
				if (data[i]["URGENCY"] == '0' || data[i]["URGENCY"] == '1') data_list+='<strong>[긴급]</strong>';
				/*
				if(timeH >= 1){
					data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=7067">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+timeH+'시간 전</span>';
				}else{
					data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=7067">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+time_term+'분 전</span>';
				}
				*/
				/* 2014-09-02 */
				if(timeH >= 1){
					if($('#wrap').hasClass('main-wrap')){
						data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=8274">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+timeH+'시간 전</span>';
					}else{
						data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=7067">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+timeH+'시간 전</span>';
					}
				}else{
					if($('#wrap').hasClass('main-wrap')){
						data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=8274">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+time_term+'분 전</span>';
					}else{
						data_list+='	<a href="'+data[i]["CONTENTS_LINK"]+'?template=7067">'+replaceHtmlChr(data[i]["TITLE"])+'</a><span>'+time_term+'분 전</span>';
					}
				}
				data_list+='</li>';
			}

			$("#newsFlash .update>span").empty().text(this_date.getFullYear()+"-"+tickerNewsFlash.getMonth(this_date)+"-"+tickerNewsFlash.getNum(this_date.getDate())+" "+tickerNewsFlash.getNum(this_date.getHours())+":"+tickerNewsFlash.getNum(this_date.getMinutes())+":"+tickerNewsFlash.getNum(this_date.getSeconds()));
			$("#newsFlash>ul").empty().append(data_list);
			$("#newsFlash").moveContents({
				conEl:">ul>li",
				iconFlag:false,
				autoPlay:true,
				effect:"slide",
				slideFor:"top",
				slideRepeat:true,
				playClass : "play",
				btnPlay : ".btn_play",
				btnStop : ".btn_pause",
				btnOpen : ".btn_show",
				btnClose : ".btn_close",
				changeTimer : 3000,
				controlFlag : true,
				btnOpenFlag : true
			});
		},
		getMonth : function(datevalue){
			var month_value = parseInt(datevalue.getMonth())+1;
			month_value = tickerNewsFlash.getNum(month_value);
			return month_value;
		},
		getNum : function(numvalue){
			if(numvalue<10) numvalue = "0"+numvalue;
			return numvalue;
		}
	}
}());

/***********************************************
* ticker : 주요키워드
***********************************************/
var tickerKeyword = (function(){
	var keyword_data,
	rnd = Math.round(Math.random() * 1000),
	keyword_url = '/maketpl/PopularKeyWord_Make_Manual.xml?'+rnd;
	return {
		loadData : function(){
			var self = this;
			$.ajax({
				url: keyword_url + '?' + new Date(),
				dataType: "xml",
				success: function (data) {
					keyword_data = $(data);
					self.displayData();
				},
				error  : function(error){
				}
			});
		},
		displayData : function(){
			var str_data = keyword_data.find("keyword");
			var data_list ="";
			for(i=0;i<str_data.length;i++){
				/*
				var text_value = $(str_data[i]).text().replace(/^\s*|\s*$/g, '');
				var text_link = 'http://www.yonhapnews.co.kr/home09/7091000000.html?template=5690&query='+encodeURIComponent(text_value);
				data_list+='<li>';
				data_list+='	<a href="'+text_link+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_num_blue0'+(i+1)+'.gif" alt="'+(i+1)+'"/>'+text_value+'</a>';
				*/
				/* 2014-09-02 */
				var text_value = $(str_data[i]).text().replace(/^\s*|\s*$/g, '');
				var text_link = 'http://www.yonhapnews.co.kr/home09/7091000000.html?template=5690&query='+encodeURIComponent(text_value);
				var text_link_Main = 'http://www.yonhapnews.co.kr/home09/7091000000.html?template=8276&query='+encodeURIComponent(text_value);
				data_list+='<li>';
				if($('#wrap').hasClass('main-wrap')){
					data_list+='	<a href="'+text_link_Main+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_num_blue0'+(i+1)+'.gif" alt="'+(i+1)+'"/>'+text_value+'</a>';
				}else{
					data_list+='	<a href="'+text_link+'"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_num_blue0'+(i+1)+'.gif" alt="'+(i+1)+'"/>'+text_value+'</a>';
				}
				data_list+='</li>';
			}
			$("#keyWord>ul").empty().append(data_list);
			$("#keyWord").moveContents({
				conEl:">ul>li",
				iconFlag:false,
				autoPlay:true,
				effect:"slide",
				slideFor:"top",
				slideRepeat:true,
				changeTimer : 3000,
				btnOpenFlag : true,
				btnOpen : ".btn_show",
				btnClose : ".btn_close"
			});
		}
	};
}());

/***********************************************
* ticker : 환율정보
***********************************************/
var tickerCharge = (function(){
	var charge_data, charge_url = '/maketpl/home/ref/cd.tpl';
	return {
		loadData : function(){
			var self = this;
			$.ajax({
				type: "get",
				url: charge_url + '?' + new Date(),
				dataType: "json",
				success: function (data) {
					charge_data = data[0];
					//setTimeout(tickerCharge.loadData, 1000 * 60 * 5);
					self.setData();
				},
				error  : function(error){
				}
			});
		},
		setData : function(){
			var info1_el = $("#kospiWrap dd.dollar");
			var info2_el = $("#kospiWrap dd.yen");
			var info3_el = $("#bondWrap dd.corporate");		//회사채(CORP03Y)
			var info4_el = $("#bondWrap dd.exchequer");		//국고채(KTB05Y)
			var info5_el = $("#bondWrap dd.cd");					//CD(CD91)

			if(info1_el.length) this.printData(info1_el,"USD");
			if(info2_el.length) this.printData(info2_el,"JPY");
			if(info3_el.length) this.printData(info3_el,"CORP03Y");
			if(info4_el.length) this.printData(info4_el,"KTB05Y");
			if(info5_el.length) this.printData(info5_el,"CD91");
		},
		printData : function(obj,kindvalue){
			if(kindvalue=="JPY" || kindvalue=="USD"){
				obj.text(this.makeNumber(Number(charge_data[kindvalue]["rate"]).toFixed(2)));
			}else{
				obj.find("span").eq(0).text(charge_data[kindvalue]["rate"]);

				if(charge_data[kindvalue]["gap"]<0){
					var class_name = "down";
					var img_src = function(){ return obj.find("img").attr("src").replace("_up","_down") };
					var img_alt = "하락";
				}else{
					var class_name = "up";
					var img_src = function(){ return obj.find("img").attr("src").replace("_down","_up") };
					var img_alt = "상승";
				}
				obj.find("strong").text(charge_data[kindvalue]["gap"]).removeClass().addClass(class_name);
				obj.find("img").attr("src",img_src);
				obj.find("img").attr("alt",img_alt);
			}
		},
		makeNumber: function(value) {
			value = value.replace(/^([0-9]+)([0-9]{2})$/, '$1.$2');
			value = value.replace(/^([0-9]+)([0-9]{3}\.[0-9]{2})$/, '$1,$2');
			return value;
		}
	};
}());

/***********************************************
* ticker : 외국어뉴스
***********************************************/
var tickerFNews = (function(){
	var fnews_data, fnews_url = '/data/foreign_topnews.js';
	return {
		loadData : function()
		{
			var self = this;
			//var rnd = Math.round(Math.random() * 100000);
			var rnd = Math.floor(new Date().getTime() / 1000 / 60);
			$.ajax({
				type: "get",
				url: fnews_url+'?'+rnd,
				dataType: "json",
				success: function (data) {
					fnews_data = data;
					self.setData()
				},
				error  : function(error){
				}
			});
		},
		setData : function()
		{
			var data = fnews_data.RETURNSET.DATA;

			for(i=0;i<data.length;i++){
				var $news_el = $("#foreign"+data[i]["LANG"]);
				var title_el = $news_el.find("dt");
				var text_el = $news_el.find("dd");

				title_el.empty().html('<a href="' + data[i]["URL"] + '?template=7233" target="_blank" title="새창">' + replaceHtmlChr(data[i]["TEMPLATE_ARTICLE_TITLE"]) + '</a>');
				text_el.empty().html('<a href="' + data[i]["URL"] + '?template=7233" target="_blank" title="새창">' + replaceHtmlChr(data[i]["BODY"]) + '</a>');
			}
		}
	}
}());

/***********************************************
* 컨텐츠 : 많이 본 사진
***********************************************/
var mostViewPhoto = (function(){
	var mphoto_data, mphoto_url = '/data/popular_photo.js';
	return {
		loadData : function(pagetype)
		{
			var self = this;
			//var rnd = Math.round(Math.random() * 100000);
			var rnd = Math.floor(new Date().getTime() / 1000 / 60);
			$.ajax({
				type: "get",
				url: mphoto_url+'?'+rnd,
				dataType: "json",
				success: function (data) {
					mphoto_data = data.DATA;
					if(pagetype=='order') self.setDataOrder();
					else self.setDataModule();
				},
				error  : function(error){
				}
			});
		},
		setDataOrder : function()
		{
			var new_list = "<ul>";

			for(i=0;i<5;i++){
				new_list+='<li class="section">';
				new_list+='		<span class="num';
				if(i==0) new_list+=' first';
				new_list+='">'+Number(i+1)+'</span>';
				new_list+='		<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
				new_list+='			<span>';
				new_list+='				<img src="http://img.yonhapnews.co.kr'+mphoto_data[i]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'"/>';
				new_list+='			</span>';
				new_list+='			<strong>'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'</strong>';
				new_list+='		</a>';
				new_list+='	</li>';
			}

			new_list+='</ul>';
			$("#popularPhotoWrap").find(">div").append(new_list);
		},
		/* 2014-08-26 */
		setDataModule : function()
		{
			var new_list = "";
			var popPhoLast = $('#popularPhotoWrap>div>ul:last');

			if(mphoto_data.length == 1){
				i=0;
				new_list+='<ul class="popularphoto">';
				new_list+='		<li class="sector">';
				new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
				new_list+='				<span>';
				new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'"/>';
				new_list+='				</span>';
				new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'</strong>';
				new_list+='			</a>';
				new_list+='		</li>';
				new_list+='	</ul>';
			}else{
				if(mphoto_data.length%2!=0){
					/* 홀수일때(마지막 요소만 낱개 형식) */
					for(i=0;i<mphoto_data.length-1;i=i+2){
						new_list+='<ul class="popularphoto">';
						new_list+='		<li class="sector">';
						new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
						new_list+='				<span>';
						new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'"/>';
						new_list+='				</span>';
						new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'</strong>';
						new_list+='			</a>';
						new_list+='		</li>';
						new_list+='		<li class="sector mg-none">';
						new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i+1]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
						new_list+='				<span>';
						new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i+1]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i+1]["TITLE"])+'"/>';
						new_list+='				</span>';
						new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i+1]["TITLE"])+'</strong>';
						new_list+='			</a>';
						new_list+='		</li>';
						new_list+='	</ul>';
					}
					if(popPhoLast){
						i=0;
						new_list+='<ul class="popularphoto">';
						new_list+='		<li class="sector">';
						new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
						new_list+='				<span>';
						new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'"/>';
						new_list+='				</span>';
						new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'</strong>';
						new_list+='			</a>';
						new_list+='		</li>';
						new_list+='	</ul>';
					}
				}else{
					/* 짝수일때 */
					for(i=0;i<mphoto_data.length-1;i=i+2){
						new_list+='<ul class="popularphoto">';
						new_list+='		<li class="sector">';
						new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
						new_list+='				<span>';
						new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'"/>';
						new_list+='				</span>';
						new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i]["TITLE"])+'</strong>';
						new_list+='			</a>';
						new_list+='		</li>';
						new_list+='		<li class="sector mg-none">';
						new_list+='			<a href="javascript:vc.goPhotoView(\'' + mphoto_data[i+1]["CONTENTS_ID"] + '\', \'\', \'L\', \'\');">';
						new_list+='				<span>';
						new_list+='					<img src="http://img.yonhapnews.co.kr'+mphoto_data[i+1]["FILE_NAME"]+'" alt="'+replaceHtmlChr(mphoto_data[i+1]["TITLE"])+'"/>';
						new_list+='				</span>';
						new_list+='				<strong>'+replaceHtmlChr(mphoto_data[i+1]["TITLE"])+'</strong>';
						new_list+='			</a>';
						new_list+='		</li>';
						new_list+='	</ul>';
					}
				}
			}

			$("#popularPhotoWrap").find(">div").append(new_list);
			$("#popularPhotoWrap").moveContents({
				conEl : ">div>ul",
				iconFlag : false,
				btnFlag : true,
				btnFlagAll : true,
				btnPrev : ".btn_prev",
				btnNext : ".btn_next",
				pagingFlag : true,
				setId : "areaTopWrap"
			});
		}
	}
}());

/***********************************************
* 컨텐츠 : 오늘의 주요사진(소셜뉴스출력)
***********************************************/
var mainTodayPhoto = (function(){
	var photo_data, g_list_photo,
	photo_url = '/widget/main_photo.xml?';

	var d = new Date();

	if(d.getHours() < 10) photo_url += "0";
	photo_url += d.getHours();

	if(d.getMinutes() < 10) photo_url += "0";
	photo_url += d.getMinutes();

	return {
		loadData : function(){
			var self = this;
			$.ajax({
				url: photo_url,
				dataType: "xml",
				success: function (data) {
					photo_data = $(data);
					self.displayData();
				},
				error  : function(error){
				}
			});
		},
		displayData : function(){
			var str_data = photo_data.find("news");
			var data_list ="<ul>";

			g_list_photo = new Array();

			for(i=0;i<str_data.length;i++){
				var info_cid = $(str_data[i]).find("cid").text();
				var info_link = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + info_cid;
				var info_title = replaceHtmlChr($(str_data[i]).find("title").text());
				var info_img = $(str_data[i]).find("url1").text();
				var info_sns1 = "pop_fb(\'"+info_link+"\',\'"+info_title+"\')";
				var info_sns2 = "http://twitter.com/share?url="+info_link+'&text='+info_title;

				data_list+='<li>';
				data_list+='		<img src="'+info_img+'" alt="'+info_title+'"/>';
				data_list+='		<a href="'+info_link+'" class="btn-view" target="_blank" title="(새창)"><strong>'+info_title+'</strong></a>';
				data_list+='		<a href="#none" class="btn-sns1" onclick="'+info_sns1+'">페이스북 공유하기</a>';
				data_list+='		<a href="'+info_sns2+'" class="btn-sns2" target="_blank" title="새창">트위터 공유하기</a>';
				data_list+='</li>';
			}
			data_list+='</ul>';

			$("#mainTodayPhoto").empty().append(data_list);
		}
	};
}());

function pop_fb(link, title){
	var strHeadline = 'http://www.facebook.com/sharer.php?u='+link+'&t='+encodeURIComponent(title);
	window.open(strHeadline, 'Facebook', 'width=680, height=524 ,scrollbars=no, resizable=no');
}

/***********************************************
* jquery tabMenu
* copyright : webpublish.co.kr
***********************************************/
(function($) {

	var methods = {

		init: function(options) {
			var opts = $.extend({}, $.fn.tabMenu.defaults, options);

			return this.each(function(n) {
				$.extend(this, tabMenu);

				that = this;
				var $self = $(this);
				that.tab_target = $self.attr('href');
				that.tab_active_class = opts.tab_active_class || 'on';
				that.callbackBefore = opts.callbackBefore;
				that.callbackAfter = opts.callbackAfter;

				that.setup();
				$self.on('click.tab', that.toggle);
			});
		},
		setOpen: function(obj) {
			obj.trigger('click.tab');
		},
		bind: function(obj){

		},
		setCallbackBefore: function(callback) {
			return this.each(function() {
				this.callbackBefore = callback;
			});
		},
		setCallbackAfter: function(callback) {
			return this.each(function() {
				this.callbackAfter = callback;
			});
		}
	};

	var tabMenu = {

		setup: function(n) {

			if ($(this).hasClass(this.tab_active_class)) {
				$(this).addClass(this.tab_active_class);
				this.open(this.tab_target);
			} else {
				$(this).removeClass(this.tab_active_class);
				this.close(this.tab_target);
			}
		},

		open: function(obj) {
			$(obj).show();
			this.isCallback(this.callbackBefore);
		},

		close: function(obj) {
			$(obj).hide();
			this.isCallback(this.callbackAfter);
		},

		toggle: function(ev) {
			var that = this, $tab, target;

			if ($(this).data('checked') === false) return;

			if($(that).parent().prop("tagName")=="LI") $tab = $(that).parent().parent().find('a');
			else $tab = $(that).parent().find('a');

			if(that.tab_target.split('#').length>1) ev.preventDefault();
			$tab.each(function() {
				target = $(this).attr('href');
				if (that.tab_target === target) {
					$(this).addClass(this.tab_active_class);
					that.open(target);
				} else {
					$(this).removeClass(this.tab_active_class);
					that.close(target);
				}
			});
		},
		isCallback: function(callback) {
			if (typeof callback === 'function') {
				callback.call(this);
			}
		}
	};

	$.fn.tabMenu = function(method){
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jSlider' );
		}
	};

	$.fn.tabMenu.defaults = {
		callbackBefore: function() {},
		callbackAfter: function() {}
	};

})(jQuery);

/***********************************************
* jquery toggleContent
* copyright : webpublish.co.kr
***********************************************/
(function($) {

	/* 펼침메뉴 */
	$.fn.toggleContents = function(options){
		options = options || {};
		var opts = $.extend({}, $.fn.toggleContents.defaults, options || {});

		var $cont = $(this);
		var $eventEl = $cont.find(opts.eventEl);
		var $conEl = $cont.find(opts.conEl);
		var $conTimer;

		return this.each(function() {

			//초기화
			$conEl.hide();
			$cont.removeClass(opts.containerOn);

			//이벤트설정
			if(opts.openEvent=="hover"){
				$eventEl.hover(function(){
					displayOpen();
				},function(){
					$conTimer = setTimeout(displayClose,1000);
				});

				$conEl.hover(function(){
					clearTimeout($conTimer);
				},function(){
					displayClose();
				});
			}else{
				$eventEl.bind("click",function(ev){
					ev.preventDefault();
					if($conEl.is(":hidden")) displayOpen();
					else displayClose();
				});
			}

			$(document).on('click.toggleContent', function(e){
				if (!$(e.target).closest($cont).length) {
					displayClose();
				}
			});

			$(document).find("a, input").bind('focus.toggleContent', function(e){
				if (!$(e.target).closest($cont).length) {
					displayClose();
				}
			});

			//컨텐츠내 이벤트 발생시 메뉴초기화
			if(opts.conEventEl){
				$conEl.find(opts.conEventEl).bind('click',function(){
					displayClose();
				});
			}

			//닫기버튼 있을경우 이벤트추가
			if(opts.closeEl){
				$cont.find(opts.closeEl).bind('click',function(){
					displayClose();
					return false;
				});
			}

			//디스플레이(open)
			function displayOpen(){

				if(opts.containerOn) $cont.addClass(opts.containerOn);
				if(opts.eventOn) $eventEl.addClass(opts.eventOn);

				switch(opts.effect)
				{
					case "slide":
					$conEl.slideDown(opts.aniTimer, opts.easing);
					break;

					case "fade":
					$conEl.fadeIn(opts.aniTimer, opts.easing);
					break;

					default:
					$conEl.show();
					break;
				}
			}

			//디스플레이(close)
			function displayClose(){
				if(opts.containerOn) $cont.removeClass(opts.containerOn);
				if(opts.eventOn) $eventEl.removeClass(opts.eventOn);
				switch(opts.effect)
				{
					case "slide":
					$conEl.slideUp(opts.aniTimer, opts.easing);
					break;

					case "fade":
					$conEl.fadeOut(opts.aniTimer, opts.easing);
					break;

					default:
					$conEl.hide();
					break;
				}
			}
		});
	};

	$.fn.toggleContents.defaults = {
		eventEl : ">button",
		conEl : ">div",
		conEventEl : null,
		closeEl : null,
		containerOn : null,
		eventOn : null,
		effect : "show",
		aniTimer : 600,
		easing : "linear",
		openEvent : "click"
	};

})(jQuery);

/***********************************************
* jquery moveContents
* copyright : webpublish.co.kr
***********************************************/
(function($) {

	$.fn.moveContents = function(options){
		return this.each(function(){
			var opts = $.extend({}, $.fn.moveContents.defaults, options || {});
			options = options || {};
			var $cont = $(this);																		//이동컨텐츠 전체 element
			var $contEventEl = opts.iconFlag? $cont.find(opts.eventEl) : null;		//클릭이벤트 element
			var $contEventCon = $cont.find(opts.conEl);									//실제 변경컨텐츠 element
			var $contConCnt = $contEventCon.length;										//변경컨텐츠갯수
			var $contSelIndex = opts.defaultIndex;											//현재선택된 컨텐츠의 index값
			var $contTimer;																			//오토플레이 시간변수
			var $btnPrev = $cont.find(opts.btnPrev);											//이전버튼
			var $btnNext = $cont.find(opts.btnNext);											//다음버튼
			var $btnPlay = $cont.find(opts.btnPlay);											//사용자컨트롤 플레이버튼
			var $btnStop = $cont.find(opts.btnStop);											//사용자컨트롤 정지버튼
			var $btnOpen = $cont.find(opts.btnOpen);										//사용자컨틀로 정지 및오픈
			var $btnClose = $cont.find(opts.btnClose);										//사용자컨틀로 플레이 및 닫기
			var $moveMode = true;																//오토플레이 slide시 자동변경 방향
			var $playMode = true;																	//사용자 컨트롤러에 의한 애니메이션 상태
			var $oldSelIndex;																		//선택된 컨텐츠 이전 선택 index값
			var $iconMode;																			//아이콘클릭이벤트일때만 true

			if(opts.slideValue){
				var $slideValue = opts.slideValue;
			}
			else{
				if(opts.slideFor=="left" || opts.slideFor=="right") var $slideValue = $contEventCon.eq(0).outerWidth();
				else var $slideValue = $contEventCon.eq(0).outerHeight();
			}

			if(opts.addContain) $cont.addClass(opts.addContain);

			/* 아이디값 세팅 */
			if(opts.setId){
				var chkid = 0;
				$contEventCon.each(function(index){
					$(this).attr("id",opts.setId+chkid);
					if(opts.iconFlag){
						$contEventEl.eq(index).attr("href","#"+opts.setId+chkid);
					}
					chkid++;
				});
			}

			if(typeof opts.defaultIndexCallBack === 'function') {
				$contSelIndex = opts.defaultIndexCallBack.call(this);
			}

			/*********************************************************
			//컨텐츠갯수가 복수일때 이벤트 설정(하나일때는 아이콘 버튼 미출력)
			**********************************************************/
			if($contConCnt>1){

				/* 디스플레이 초기화 - effect : slide */
				if(opts.effect=="slide"){
					$contEventCon.each(function(){
						var new_position = newPosition($(this));
						switch(opts.slideFor)
						{
							case "right":
							$(this).css({"right":new_position});
							break;

							case "top":
							$(this).css({"top":new_position});
							break;

							case "bottom":
							$(this).css({"bottom":new_position});
							break;

							default:
							$(this).css({"left":new_position});
							break;
						}

						if($contEventEl) $contEventEl.eq($contSelIndex).addClass(opts.onClass);
					});

				/* 디스플레이 초기화 - effect : circle  */
				}else if(opts.effect=="circle"){
					$contEventCon.eq(0).addClass("on");
					var viewSize = opts.circleSide;
					var $sideDeps = Math.floor(($contConCnt+2)/3);

					//$cont.css("width",$contEventCon.eq(0).outerWidth()+(($contConCnt-1)*viewSize));

					//출력사이즈 정보
					var $circle_info = new Array();

					$circle_info[0] = new Array();
					$circle_info[0]["width"] = $contEventCon.eq(0).width();
					$circle_info[0]["height"] = $contEventCon.eq(0).height();
					$circle_info[0]["left"] = "50%";
					$circle_info[0]["top"] = 0;
					$circle_info[0]["marginLeft"] = $contEventCon.eq(0).width()/2*(-1);
					$circle_info[0]["z-index"] = $contEventCon.eq(0).css("z-index");

					$contEventCon.eq($contSelIndex)
						.addClass("on")
						.css({
							"z-index" : $circle_info[0]["z-index"],
							"opacity" : 1,
							"marginLeft" : $circle_info[0]["marginLeft"],
							"top" : $circle_info[0]["top"],
							"width" : $circle_info[0]["width"],
							"height" : $circle_info[0]["height"]
						}, opts.aniTimer, opts.easing);

					for(i=1;i<=$sideDeps;i++){
						prevIndex = $contSelIndex-i;
						if(prevIndex<0) prevIndex = prevIndex+$contConCnt;

						nextIndex = $contSelIndex+i;
						if(nextIndex>=$contConCnt) nextIndex = nextIndex-$contConCnt;

						$circle_info[i] = new Array();
						$circle_info[i]["width"] = $circle_info[i-1]["width"]*opts.circleRatio;
						$circle_info[i]["height"] = $circle_info[i-1]["height"]*opts.circleRatio;
						$circle_info[i]["top"] = ($circle_info[0]["height"]-$circle_info[i]["height"])/2;
						if(i==1){
							$circle_info[i]["margin_prev"] = $circle_info[i-1]["marginLeft"]-opts.circleSide;
							$circle_info[i]["margin_next"] = $circle_info[i-1]["marginLeft"]+opts.circleSide;
						}else{
							$circle_info[i]["margin_prev"] = $circle_info[i-1]["margin_prev"]-opts.circleSide;
							$circle_info[i]["margin_next"] = $circle_info[i-1]["margin_next"]+opts.circleSide;
						}

						$contEventCon.eq(prevIndex)
							.removeClass("on")
							.css({
								"opacity" : opts.circleOpacity,
								"marginLeft" : $circle_info[i]["margin_prev"],
								"top" : $circle_info[i]["top"],
								"width" : $circle_info[i]["width"],
								"height" : $circle_info[i]["height"]
							}, opts.aniTimer, opts.easing);

						$contEventCon.eq(nextIndex)
							.removeClass("on")
							.css({
								"opacity" : opts.circleOpacity,
								"marginLeft" : $circle_info[i]["margin_next"],
								"top" : $circle_info[i]["top"],
								"width" : $circle_info[i]["width"],
								"height" : $circle_info[i]["height"]
							}, opts.aniTimer, opts.easing);
					}

					//moveAni_circle();
					$contEventCon.find("a")
						.bind("focus",function(){
							clearTimeout($contTimer);
							$oldSelIndex = $contSelIndex;
							$contSelIndex = $contEventCon.index($(this).parents("li"));
							if($oldSelIndex!=$contSelIndex) moveContentsAnimation();
						})
						.bind("blur",function(){
							if(opts.autoPlay) callAnimation();
						});

				/* 디스플레이 초기화 - effect : accordion */
				}else if(opts.effect=="accordion"){
					var $accordionMax = opts.accordionMax?opts.accordionMax:$contEventCon.eq(0).outerWidth();
					$cont.css("width",($contConCnt-1)*opts.accordionMin+$accordionMax);
					$contEventCon.bind(opts.conEvent,function(){
						$contSelIndex = $contEventCon.index($(this));
						moveAni_accordion();
					});

					if(opts.autoPlay && opts.conEvent=="mouseover"){
						$contEventCon.hover(function(){
							clearTimeout($contTimer);
						},function(){
							$contTimer = setTimeout(moveIndexPlus,opts.changeTimer);
						});
					}
					moveAni_accordion();

				/* 디스플레이 초기화 - effect : show , fade, transition */
				}else{
					$cont.each(function(){
						$contEventCon.hide();
						$contEventCon.eq($contSelIndex).show();
						if($contEventEl) $contEventEl.eq($contSelIndex).addClass(opts.onClass);
					});
				}

				/* 아이콘버튼 디스플레이 */
				if(opts.iconFlag) displayIcon();

				/* 이동버튼(이전,다음) 디스플레이 및 이벤트설정 */
				if(opts.btnFlag){
					moveContentsBtn();
					if($contConCnt>opts.slideView){
						$btnNext.bind("click",function(ev){ ev.preventDefault(); if(!$(this).hasClass(opts.btnNextOff)) moveIndexPlus();});
						$btnPrev.bind("click",function(ev){ ev.preventDefault(); if(!$(this).hasClass(opts.btnPrevOff)) moveIndexMinus();});
					}
				}else{
					$btnPrev.hide();
					$btnNext.hide();
				}

				/* $contEventEl 이벤트설정 */
				if(opts.iconFlag){
					$contEventEl.bind(opts.iconFlagEvent,function(){
						$moveMode = $contEventEl.index($(this))-$contSelIndex>0? true : false;
						$iconMode=true;
						$oldSelIndex = $contSelIndex;
						$contSelIndex = $contEventEl.index($(this));
						if($oldSelIndex!=$contSelIndex){
							moveContentsAnimation();
							return opts.eventReturn;
						}else{
							return false;
						}
					});
				}else{
					if($contEventEl) $contEventEl.hide();
				}

				/* 오토플레이 이벤트 설정(컨텐츠 오버시 오토플레이 일시멈춤) */
				$contEventCon.hover(function(){
					clearTimeout($contTimer);
				},function(){
					if($playMode && opts.autoPlay) callAnimation();
				});

				/* delayTimer에 의한 자동애니메시션 설정*/
				if($playMode && opts.autoPlay){
					setTimeout(callAnimation,opts.delayTimer);
					displayControlBtn();
				}

				/* 플레이 컨트롤러 설정 */
				if(opts.controlFlag){
					$btnPlay.bind("click",function(ev){
						ev.preventDefault();
						$playMode = true;
						$contTimer = setTimeout(moveIndexPlus,opts.changeTimer);
						if(opts.playCallBack) opts.playCallBack();
						displayControlBtn();
					});
					$btnStop.bind("click",function(ev){
						ev.preventDefault();
						$playMode = false;
						clearTimeout($contTimer);
						if(opts.stopCallBack) opts.stopCallBack();
						displayControlBtn();
					});
				}

				/* 페이징 설정 */
				if(opts.pagingFlag) displayPaging();

				/* 오픈 디스플레이 설정 */
				if(opts.btnOpenFlag){
					$btnOpen.bind("click",function(ev){
						ev.preventDefault();
						moveContentsOpen();
						$(document).bind('click.moveContent', function(ev){
							if (!$(ev.target).closest($cont).length) {
								moveContentsClose($(ev.target));
							}
						});
						$(document).find("a, input").bind('focus.moveContent', function(ev){
							if (!$(ev.target).closest($cont).length) {
								moveContentsClose($(ev.target));
							}
						});
					});
					$btnClose.bind("click",function(ev){
						ev.preventDefault();
						moveContentsClose($(ev.target));
					});
				}

				/* 콜백함수설정 */
				if(opts.conCallBack){
					$contEventCon.bind("click",function(ev){
						ev.preventDefault();
						$contEventCon.removeClass("sel");
						$(this).addClass("sel");
						opts.conCallBack();
					});
				}
			}
			/* 2014-08-26 */
			else if($contConCnt==1){
				/* 페이징 설정 */
				if(opts.pagingFlag) displayPaging();
			}
			else{
				//$contEventEl.hide();
				if(opts.iconFlag) $contEventEl.hide(); //2014-07-09 추가
			}

			/********************************************************
			//다음컨텐츠보기
			********************************************************/
			function moveIndexPlus(){
				if($cont.find(opts.conEl+":animated").length>0){
					return false;
				}else{
					$moveMode = true;
					$oldSelIndex = $contSelIndex;
					$contSelIndex++;
					if($contSelIndex>$contConCnt-1) $contSelIndex=0;
					moveContentsAnimation();
				}
			}

			/*********************************************************
			//이전컨텐츠보기
			*********************************************************/
			function moveIndexMinus(){
				if($cont.find(opts.conEl+":animated").length>0){
					return false;
				}else{
					$moveMode = false;
					$oldSelIndex = $contSelIndex;
					$contSelIndex--;
					if($contSelIndex<0) $contSelIndex = $contConCnt-1;
					moveContentsAnimation();
				}
			}

			/*********************************************************
			//오토플레이 호출 함수
			*********************************************************/
			function callAnimation(){
				clearTimeout($contTimer);
				$contTimer = setTimeout(moveIndexPlus,opts.changeTimer);
			}

			/*********************************************************
			//아이콘버튼 디스플레이함수
			*********************************************************/
			function displayIcon(){
				$contEventCon.each(function(){
					if($contEventCon.index($(this))!=$contSelIndex){
						$contEventEl.eq($contEventCon.index($(this))).removeClass(opts.onClass);
						if(opts.onImage){
							$contEventEl.eq($contEventCon.index($(this))).find('img').attr('src', function() {return $(this).attr("src").replace("_on", "_off");});
						}
					}else{
						$contEventEl.eq($contEventCon.index($(this))).addClass(opts.onClass);
						if(opts.onImage){
							$contEventEl.eq($contEventCon.index($(this))).find('img').attr('src', function() {return $(this).attr("src").replace("_off", "_on");});
						};
					}
				});
			}

			/*********************************************************
			//버튼 디스플레이 설정 함수
			*********************************************************/
			function moveContentsBtn(){
				if(opts.btnFlagDisabled){
					if($contSelIndex<1 && !opts.btnFlagAll) $btnPrev.addClass(opts.btnPrevOff);
					else $btnPrev.removeClass(opts.btnPrevOff);

					if($contSelIndex+opts.slideView>=$contConCnt && !opts.btnFlagAll) $btnNext.addClass(opts.btnNextOff);
					else $btnNext.removeClass(opts.btnNextOff);
				}else{
					if($contSelIndex<1 && !opts.btnFlagAll) $btnPrev.hide();
					else $btnPrev.show();

					if(($contSelIndex>=$contConCnt-opts.slideView) && !opts.btnFlagAll) $btnNext.hide();
					else $btnNext.show();
				}
			}

			/*********************************************************
			//기타버튼(open, close, play, stop) 설정 함수
			*********************************************************/
			function moveContentsOpen(){
				clearTimeout($contTimer);
				$cont.addClass(opts.openClass);
				$contEventCon.parent().hide().slideDown().scrollTop(0);
			}

			function moveContentsClose(obj){
				if($playMode && opts.autoPlay) callAnimation();

				if (!obj.closest($cont).length) {
					$contEventCon.parent().show();
					$cont.removeClass(opts.openClass);
				}else{
					$contEventCon.parent().slideUp(function(){
						$contEventCon.parent().show();
						$cont.removeClass(opts.openClass);
					});
				}
			}

			function displayControlBtn(){
				if(opts.playClass && $playMode) $cont.addClass(opts.playClass);
				else $cont.removeClass(opts.playClass);
			}

			/*********************************************************
			//넘버링 페이징 출력
			*********************************************************/
			function displayPaging(){
				var $pageEl = $cont.find(opts.pagingPrint);
				$pageEl.empty().text(($contSelIndex+1)+"/"+$contConCnt);
			}

			/*********************************************************
			//선택된 index에 따른 새 위치값 계산
			*********************************************************/
			function newPosition(obj){
				var value = $contEventCon.index(obj) - $contSelIndex;
				if(opts.slideRepeat && !$iconMode){
					if($moveMode){
						if(value>=opts.slideView) value = value - $contConCnt;
						if(value<-1) value = value + $contConCnt;
					}else{
						if(value>opts.slideView) value = value - $contConCnt;
						if(value<=(-1)*($contConCnt-opts.slideView)) value = value + $contConCnt;
					}
				}
				value = value * $slideValue;
				return value;
			}

			/*********************************************************
			//Animation - effect : show일때
			*********************************************************/
			function moveAni_show(){
				$contEventCon.each(function(){

					if($contSelIndex==$contEventCon.index($(this))) $(this).addClass(opts.onClass);
					else $(this).removeClass(opts.onClass);

					if($contEventCon.index($(this))!=$contSelIndex) $(this).hide();
					else $(this).show();
				});
			}

			/*********************************************************
			//Animation -effect : fade일때
			*********************************************************/
			function moveAni_fade(){
				$contEventCon.each(function(index){
					if($contSelIndex==index){
						$(this).addClass(opts.onClass);
						$(this).find("img").fadeTo(opts.aniTimer,1);
						$(this).fadeTo(opts.aniTimer,1);
					}
					else{
						$(this).removeClass(opts.onClass);
						$(this).find("img").fadeTo(opts.aniTimer,0);
						$(this).fadeTo(opts.aniTimer,0);
					}
				});
			}

			/*********************************************************
			//Animation - effect : slide일때
			*********************************************************/
			function moveAni_slide(){

				/* 슬라이드반복설정일때 애니메이션 효과를 위한 시작위치 재설정 */
				if(opts.slideRepeat){
					$contEventCon.each(function(){
						var value = Number($(this).css(opts.slideFor).replace("px",""))/$slideValue;
						if($moveMode){
							if(value<0) value = value + $contConCnt;
						}
						else{
							if(value>=opts.slideView) value = value - $contConCnt;
						}
						value = value*$slideValue;
						$(this).css(opts.slideFor,value);
					});
				}

				/* 새위치설정 */
				$contEventCon.each(function(){

					var new_position = newPosition($(this));

					if($contSelIndex==$contEventCon.index($(this))) $(this).addClass(opts.onClass);
					else $(this).removeClass(opts.onClass);

					switch(opts.slideFor)
					{
						case "right":
						$(this).animate({"right":new_position}, opts.aniTimer, opts.easing);
						break;

						case "top":
						$(this).animate({"top":new_position}, opts.aniTimer, opts.easing);
						break;

						case "bottom":
						$(this).animate({"bottom":new_position}, opts.aniTimer, opts.easing);
						break;

						default:
						$(this).animate({"left":new_position}, opts.aniTimer, opts.easing);
						break;
					}
				});
			}

			/*********************************************************
			//Animation - effect : circle일때
			*********************************************************/
			function moveAni_circle(){
				$contEventCon.eq($contSelIndex)
					.addClass("on")
					.css("z-index",$circle_info[0]["z-index"])
					.css({
						"opacity" : 1,
						"marginLeft" : $circle_info[0]["marginLeft"],
						"top" : $circle_info[0]["top"],
						"width" : $circle_info[0]["width"],
						"height" : $circle_info[0]["height"]
					}, opts.aniTimer, opts.easing);

				for(i=1;i<=$sideDeps;i++){
					prevIndex = $contSelIndex-i;
					if(prevIndex<0) prevIndex = prevIndex+$contConCnt;

					nextIndex = $contSelIndex+i;
					if(nextIndex>=$contConCnt) nextIndex = nextIndex-$contConCnt;

					var newIndex = $circle_info[0]["z-index"]-(i*2);
					if($moveMode){
						var newIndex_prev = newIndex-1;
						var newIndex_next = newIndex-2;
					}else{
						var newIndex_prev = newIndex-2;
						var newIndex_next = newIndex-1;
					}

					$contEventCon.eq(prevIndex)
						.removeClass("on")
						.css("z-index",newIndex_prev)
						.css({
							"opacity" : opts.circleOpacity,
							"marginLeft" : $circle_info[i]["margin_prev"],
							"top" : $circle_info[i]["top"],
							"width" : $circle_info[i]["width"],
							"height" : $circle_info[i]["height"]
						}, opts.aniTimer, opts.easing);

					$contEventCon.eq(nextIndex)
						.removeClass("on")
						.css("z-index",newIndex_next)
						.css({
							"opacity" : opts.circleOpacity,
							"marginLeft" : $circle_info[i]["margin_next"],
							"top" : $circle_info[i]["top"],
							"width" : $circle_info[i]["width"],
							"height" : $circle_info[i]["height"]
						}, opts.aniTimer, opts.easing);
				}
			}

			/*********************************************************
			//Animation - effect : accordion일때
			*********************************************************/
			function moveAni_accordion(){
				$contEventCon.each(function(){
					var new_position = opts.accordionMin*$contEventCon.index($(this));
					if($contSelIndex<$contEventCon.index($(this))) new_position = new_position + ($accordionMax-opts.accordionMin);

					$(this).stop(true).animate({
						"left" : new_position
					}, opts.aniTimer, opts.easing);

					if($contEventCon.index($(this))==$contSelIndex) $(this).addClass(opts.onClass);
					else $(this).removeClass(opts.onClass);
				});
			}

			/*********************************************************
			//Animation - effect : transition 일때
			*********************************************************/
			function moveAni_transition(){

				var effectMode = new Array("vertical","horizon","double");

				if(opts.transMode=="random") var $transMode = effectMode[Math.floor(Math.random() * 3)];
				else var $transMode = opts.transMode;

				/* 애니메이션 시킬 overlay갯수(가로, 세로, 총개) */
				var $transWidth = $contEventCon.eq(0).outerWidth();
				var $transHeight = $contEventCon.eq(0).outerHeight();

				if($transMode=="vertical") var $transLength = opts.transNumX;
				else if($transMode=="horizon") var $transLength = opts.transNumY;
				else var $transLength = opts.transNumX*opts.transNumY;

				var $posX = 0;				//오버레이div position x
				var $posY = 0;				//오버레이div position y
				var $bgX = 0;				//배경이미지 position x
				var $bgY = 0;				//배경이미지 position y
				var $sizeX = $transWidth/opts.transNumX;		//오버레이div width
				var $sizeY = $transHeight/opts.transNumY;		//오버레이div height

				/* 오버레이객체생성(마크업은 opts.conEl의 마크업을 따름) */
				var $overlay = $('<'+$contEventCon.eq(0).prop('tagName')+'>');
				$overlay.addClass(opts.transOverlay).css({
					position : "absolute",
					width : $transWidth,
					height : $transHeight,
					left : 0,
					top : 0,
					zIndex : 999
				});

				for (var x = 0; x < $transLength ; x++) {

					var bg_url;
					var bg_position;

					//이미지 css타입에 따른 오버레이의 배경이미지 경로
					if(opts.transImg=="img") bg_url = $cont.find(opts.conEl+"."+opts.onClass).eq(0).find("img").eq(0).attr("src");
					else bg_url = $cont.find(opts.conEl+"."+opts.onClass).eq(0).css("backgroundImage");

					if($transMode=="double"){
						$posX = parseInt(x%opts.transNumX)*$sizeX;
						$posY = parseInt(x/opts.transNumX)*$sizeY;
						$bgX = (-1)*$posX;
						$bgY = (-1)*$posY;
					}

					//배경위치값
					if($transMode=="vertical"){
						bg_position = $bgX + "px 0px";
						$sizeY = $transHeight;
					}
					else if($transMode=="horizon"){
						bg_position = "0px "+ $bgY+"px";
						$sizeX = $transWidth;
					}
					else{
						bg_position = $bgX+"px "+$bgY+"px";
					}

					//오버레이 div 위치
					$("<div></div>", {
						width: $sizeX,
						height: $sizeY,
						css: {
							position : "absolute",
							backgroundImage: bg_url,
							backgroundPosition: bg_position,
							left: $posX,
							top: $posY
						}
					}).appendTo($overlay);

					//다음위치값 재계산
					if($transMode=="vertical"){
						$bgX -=$sizeX;
						$posX +=$sizeX;
					}
					else if($transMode=="horizon"){
						$bgY -=$sizeY;
						$posY +=$sizeY;
					}
					else{

					}
				}

				/* 오버레이객체 추가 */
				$cont.append($overlay);

				/* 오버레이객체 애니메이션 */
				var $transEl = $overlay.children();

				$transEl.each(function(i) {

					var delayTerm = opts.transDelay*i;

					if($transMode=="vertical"){
						$transEl.eq(i).delay(delayTerm).animate({width: 0}, opts.aniTimer, opts.easing, function() {
							if (i === $transEl.length-1) {
								$overlay.remove();
							}
						});
					}else if($transMode=="horizon"){
						$transEl.eq(i).delay(delayTerm).animate({height: 0}, opts.aniTimer, opts.easing, function() {
							if (i === $transEl.length-1) {
								$overlay.remove();
							}
						});
					}else{
						$transEl.eq(i).delay(delayTerm).animate({width: 0, height: 0}, opts.aniTimer, opts.easing, function() {
							if (i === $transEl.length-1) {
								$overlay.remove();
							}
						});
					}
				});

				/* 최종컨텐츠 디스플레이 */
				$contEventCon.each(function(){
					if($contSelIndex==$contEventCon.index($(this))) $(this).addClass(opts.onClass);
					else $(this).removeClass(opts.onClass);

					if($contEventCon.index($(this))!=$contSelIndex) $(this).hide();
					else $(this).show();
				});
			}

			/*********************************************************
			//컨텐츠 디스플레이 함수
			*********************************************************/
			function moveContentsAnimation(){

				clearTimeout($contTimer);

				switch(opts.effect)
				{
					case "fade":
					moveAni_fade();
					break;

					case "slide":
					moveAni_slide();
					break;

					case "circle":
					moveAni_circle();
					break;

					case "accordion":
					moveAni_accordion();
					break;

					case "trans":
					moveAni_transition();
					break;

					default:
					moveAni_show();
					break;
				}

				//아이콘버튼 재설정
				if(opts.iconFlag) displayIcon();

				//이동버튼출력 재설정
				if(opts.btnFlag) moveContentsBtn();

				//오토플레이 재설정
				if(opts.autoPlay && $playMode) callAnimation();

				//콜백함수
				if(opts.changeCallBack) opts.changeCallBack.call($cont);


				//페이징 설정
				if(opts.pagingFlag) displayPaging();

				$iconMode = false;
			}
		});
	};

	$.fn.moveContents.defaults = {
		eventEl : ">ul a",
		conEl : ">div",
		defaultIndex : 0,
		addContain : null,
		onClass : "on",
		playClass : null,
		onImage : false,
		iconFlag : true,
		iconFlagEvent : "click",
		btnFlag : false,
		btnFlagAll : false,
		btnFlagDisabled : false,
		btnPrev : ".btn-prev",
		btnNext : ".btn-next",
		btnPrevOff : "btn-prev-off",
		btnNextOff : "btn-next-off",
		autoPlay : false,
		delayTimer : 0,
		changeTimer : 2000,
		controlFlag : false,
		btnPlay : ".btn-play",
		btnStop : ".btn-stop",
		btnOpenFlag : false,
		btnOpen : ".btn-open",
		openClass : "on",
		pagingFlag : false,
		pagingPrint : ".page-nation",
		effect : "show",
		easing : "linear",
		aniTimer : 600,
		slideFor : "left",
		slideValue : null,
		slideView : 1,
		slideRepeat : false,
		circleRatio : 0.8,
		circleSide : 20,
		circleOpacity : 1.0,
		accordionMin : 50,
		accordionMax : null,
		transNumX:  10,
		transNumY: 1,
		transMode : "vertical",		//vertical(세로분할), horizon(가로분할), double(가로세로)
		transOverlay: "overlay-trans",
		transImg : "background",
		transDelay : 0,
		conEvent : "click",
		defaultIndexCallBack : null,
		changeCallBack : null,
		conCallBack : null,
		stopCallBack : null,
		playCallBack : null,
		eventReturn : false
	};

})(jQuery);


/***********************************************
* 임시 테스트용
* 연합뉴스 본문인쇄
***********************************************/
function sendprint(pagepart, contents_id)
{
	var sWinName = "printarticle";
	var cScroll = 1;
	var cResize = 1;
	var cTool = 1;
	var sWinopts = 'left='+0+', top='+0+', width='+655+', scrollbars='+cScroll+', resizable='+cResize;
	var fileurl = '';

	if(contents_id.substring(1,3)=="KR")
	{
		if(pagepart == 'article') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showArticlePrintView.aspx?contents_id=' + contents_id;
		else if(pagepart == 'press') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showPressPrintView.aspx?contents_id=' + contents_id;
	}
	else if(contents_id.substring(1,3)=="AR")
	{
		if(pagepart == 'article') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showARArticlePrintView.aspx?contents_id=' + contents_id;
		else if(pagepart == 'press') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showPressPrintView.aspx?contents_id=' + contents_id;
	}
	else if(contents_id.substring(1,3)=="EN")
	{
		if(pagepart == 'article') fileurl = 'http://english.yonhapnews.co.kr/jscript/EnPrint.html';
	}
	else
	{
		if(pagepart == 'article') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showEnArticlePrintView.aspx?contents_id=' + contents_id;
		else if(pagepart == 'press') fileurl = 'http://app.yonhapnews.co.kr/YNA/Basic/Article/Print/YIBW_showPressPrintView.aspx?contents_id=' + contents_id;
	}
	window.open(fileurl, sWinName, sWinopts);
}

var vc = {
	goPhotoView: function (cid, div, childType, template) {
		if ( childType == "P" ) {
			if ( div != '') {
				if (template != '') {
					window.open('http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div + '&template=' + template);
				} else {
					window.open('http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div);
				}
			} else {
				if (template != '') {
					window.open('http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&template=' + template);
				} else {
					window.open('http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid);
				}
			}
		} else {
			if ( parent ) {
				if ( div != '' ) {
					if (template != '') {
						parent.location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div + '&template=' + template;
					} else {
						parent.location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div;
					}
				} else {
					if (template != '') {
						parent.location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&template=' + template;
					} else {
						parent.location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid;
					}
				}
			} else {
				if ( div != '' ) {
					if (template != '') {
						location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div + '&template=' + template;
					} else {
						location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div;
					}
				} else {
					if (template != '') {
						location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&template=' + template;
					} else {
						location.href = 'http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid;
					}
				}
			}
		}
	},

	goPhotoViewSection: function (cid, div, idx) {
		window.open('http://www.yonhapnews.co.kr/photos/1990000000.html?cid=' + cid + '&div=' + div + '&pType=list&idx=' + idx);
	},

	goTalkGraphic: function (cid, childType, template) {
		if ( childType == "P" ) {
			if ( cid.substr(0, 1) == "P" ) {
				if (template != '') {
					window.open('http://www.yonhapnews.co.kr/photos/1992000000.html?cid=' + cid + '&pType=list&template=' + template);
				} else {
					window.open('http://www.yonhapnews.co.kr/photos/1992000000.html?cid=' + cid + '&pType=list');
				}
			} else if ( cid.substr(0, 1) == "G" ) {
				if (template != '') {
					window.open('http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + cid + '&pType=list&template=' + template);
				} else {
					window.open('http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + cid + '&pType=list');
				}
			}
		} else {
			if ( cid.substr(0, 1) == "P" ) {
				if (template != '') {
					location.href = 'http://www.yonhapnews.co.kr/photos/1992000000.html?cid=' + cid + '&template=' + template;
				} else {
					location.href = 'http://www.yonhapnews.co.kr/photos/1992000000.html?cid=' + cid;
				}
			} else if ( cid.substr(0, 1) == "G" ) {
				if (template != '') {
					location.href = 'http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + cid + '&template=' + template;
				} else {
					location.href = 'http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + cid;
				}
			}
		}
	},

	goGalleryIssue: function (issue, template) {
		if (template != '') {
			location.href = 'http://www.yonhapnews.co.kr/pictorial/index.html?issue_id=' + issue + '&issue_div=all&template=' + template;
		} else {
			location.href = 'http://www.yonhapnews.co.kr/pictorial/index.html?issue_id=' + issue + '&issue_div=all';
		}
	},

	goPhotoMovie: function (cid, template) {
		if (template != '') {
			if(cid.substr(17) == 355){
				location.href = 'http://www.yonhapnews.co.kr/photomovie/?cid=' + cid + '&template=' + template;
			} else{
				location.href = 'http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + cid + '&template=' + template;
			}
		} else {
			location.href = 'http://www.yonhapnews.co.kr/photomovie/?cid=' + cid;
		}
	},

	goMpicPop: function (cid, template) {
		if (template != '') {
			window.open('http://www.yonhapnews.co.kr/local/0899000000.html?cid=' + cid + '&template=' + template, 'mpic', 'width=799px, height=739px, menubar=no, toolbar=no, resizable=no, scrollbars=no');
		} else {
			window.open('http://www.yonhapnews.co.kr/local/0899000000.html?cid=' + cid, 'mpic', 'width=799px, height=739px, menubar=no, toolbar=no, resizable=no, scrollbars=no');
		}
	},

	goMpicView: function (cid, template) {
		if (template != '') {
			if(cid.substr(17) == 355){
				location.href = 'http://www.yonhapnews.co.kr/photomovie/index.html?cid=' + cid + '&template=' + template;
			} else{
				location.href = 'http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + cid + '&template=' + template;
			}
		} else {
			location.href = 'http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + cid;
		}
	}

}