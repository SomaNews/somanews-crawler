
/*
	2013-03-07 19:01
	2013-03-13 18:50 - woong - Livere Crash ( jQuery )
	2013-03-14 09:35 - woong - IE Edge adder, Remove
	2015-01-19 17:46 - woong - doctype 변경으로 인해 IE7,8에서 동작을 안하길래 새로 개발
*/

//jQuery add 
if( !($ && $.hasOwnProperty('fn') && $.fn.hasOwnProperty('jquery')) ) {
	var jq = document.createElement('script');
	jq.src = 'http://www.yonhapnews.co.kr/jscript/2014/jquery-1.8.3.min.js';
	document.getElementsByTagName('head')[0].appendChild(jq);
}

//IE콘솔에러 방지
if( window.console == undefined ) { console = { log : function() {}}; }

//예측 검색
var PredictiveSearch = {
	search : $('#search') 		//검색창
	, btn : $('.btn_search') 	//검색버튼 
	, form : $('form.search-wrap')  //검색폼
	, use : true 			//사용 FLAG
	, cr : 0 			//현재 커서위치(목록)
	, init : function() {

		//입력이벤트 처리및 자동완성 정지 ( 모던브라우저 )
		this.search.keyup( function(e) {PredictiveSearch.letterCheck(e);}).attr('autocomplete','off');

		//기본 form 이벤트 사용 금지
		this.search.attr("name","query");
		this.form.submit(function(e){ e.preventDefault(); });
		$('.search-wrap').attr('action', 'http://www.yonhapnews.co.kr/home09/7091000000.html');
	}
	, goSearch : function() {
		//검색고고 - 기존코드(bjh)
		var tmp = document.getElementById('search').value;
		var tmp2 = tmp.replace(/^\s*|\s*$/g, ''); 
		var encodeList = encodeURIComponent(tmp2);
		document.location.href = 'http://www.yonhapnews.co.kr/home09/7091000000.html?query=' + encodeList;
	}
	, checkString : function() {
		//쿼리 체크
		var query = PredictiveSearch.getQuery();
		if( query && query.length > 0 ) {
			PredictiveSearch.goSearch( query );
		}
		else {
			alert('검색어를 입력하세요'); 
			document.getElementById('search').focus(); 
		}
	}
	, moveKeyword : function(key) {
		//기존코드
		var list = $('#suggest ul li');
		var len = list.length;
		
		//위아래 방향키
		switch (key) {
			case 38: this.cr < 0 ? this.cr = -1 : this.cr--; break;
			case 40: this.cr == len - 1 ? this.cr = len - 1 : this.cr++; break;
		}

		//현재 커서위치 클래스
		list.removeClass('word');
		if (this.cr > -1) {
			//배경설정
			var keywordElement = list.eq(this.cr).addClass('word');
			$('#search').val(keywordElement.find('a').text());
		}
	}
	, off : function() {
		//사용안함설정 ( 새로고침이전 까지만 적용됨 )
		this.use = false;
		this.removeList();
	}
	, removeList : function() {
		//목록제거
		$('#suggest').remove();
	}
	, setData : function( data ) {
		//예측검색 목록 제거
		PredictiveSearch.removeList();
		
		//기존코드
		var query = data.query;
		var mainnode = data.result;
		var srchUrl="http://www.yonhapnews.co.kr/home09/7091000000.html?query="
		var html="<div class='auto-search' id='suggest' style='display:block;'><ul>";	
		$.each(mainnode, function(i,item){
			var keyword = item.keyword.replace(query,"<strong>"+query+"</strong>");
			html += "<li><a href='"+srchUrl+item.keyword+"'>"+keyword+"</a></li>";
		});					
		html += "</ul>";
		html += "<span>";
		html += "	<input type='button' value='자동완성 끄기' class='btn_off' onclick='PredictiveSearch.off()'/>";
		html += "</span></div>";
		
		//만들어진 html추가
		$('.search-wrap fieldset').append(html);
	}
	, getQuery : function() {
		//기존코드 
		return this.search.val().replace(/\(/g, '\\(').replace(/\)/g, '\\)')
			.replace(/^\s*|\s*$/g, '').replace(/\s+/g, '\\s*').replace(' ','');
	}
	, getData : function() {
		var query = this.getQuery();
		if( this.use == true && query ) {
			//예측검색 데이터 요청
			$.ajax({
				url : "http://srch.yonhapnews.co.kr/Suggest.aspx",
				data : {
					cn : "basic_kr",
					q : query,
					type : "suggest",
					l : 10,
					cb : "PredictiveSearch.setData"
				},
				dataType: 'jsonp',
				jsonp: 'callback'
			});
		}
		else if ( !query ) {
			this.removeList();
		}
	}
	, letterCheck : function(e) {
		var PS = this, key =  (window.netscape) ? e.which : event.keyCode;
		switch( key ) {
			case 13 : PS.checkString(); break;
			case 38 : case 40 : PS.moveKeyword( key ); break;
			default : PS.getData(); 
		}
	}
}

//구 자동완성 ( 이미 생성된 html 본문에 박혀있는 놈들때문에 이걸 남겨둬야 했음.. 망할.. - woong -)
var AC = { ClickBtn : PredictiveSearch.checkString };


//온로드시 실행
$(document).ready(function(){ PredictiveSearch.init(); });

