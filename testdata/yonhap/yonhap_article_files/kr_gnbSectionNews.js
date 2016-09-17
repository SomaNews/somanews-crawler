var gsn = {
	//gnbNameArr: [ "정치", "북한", "산업/경제", "금융/증권", "IT/과학", "사회", "전국", "연예", "문화", "스포츠", "세계", "한민족", "여행/축제", "비주얼뉴스"],
	gnbArr: ["m02","m03","m04","m05","m06","m07","m08","m09","m10","m11","m12","m13","m15","m17"],
	/* 비주얼뉴스 순서 변경 (화보, 포토무비, 현장영상/클립영상, 카드뉴스 -> 포토무비, 현장영상/클립영상, 카드뉴스, 그래픽뉴스), 2015.08.18 */
	//gnbTopArr: ["101", "6425", "23", "25", "6662", "110", "48", "2524", "132", "2198", "121", "6247", "7372","2429"],
	//gnbJuyoArr: ["7305,102", "7309,6426", "7311,13", "7313,26", "7315,6667", "7319,111", "7321,49", "5061,5062,2550", "7326,133", "5052,5053,2219", "7331,122", "7333,6248", "7373", "7382,98,7383"],
	/* 2015.08.21일 카드뉴스(3), 그래픽(4)의 위치 변경(그래픽, 카드뉴스) */
	//gnbTopArr: ["101", "6425", "23", "25", "6662", "110", "48", "2524", "132", "2198", "121", "6247", "7372","7382"],
	//gnbJuyoArr: ["7305,102", "7309,6426", "7311,13", "7313,26", "7315,6667", "7319,111", "7321,49", "5061,5062,2550", "7326,133", "5052,5053,2219", "7331,122", "7333,6248", "7373", "98,7383,7384"],
	gnbTopArr: ["101", "6425", "23", "25", "6662", "110", "48", "2524", "132", "2198", "121", "6247", "7372","7382"],
	gnbJuyoArr: ["7305,102", "7309,6426", "7311,13", "7313,26", "7315,6667", "7319,111", "7321,49", "5061,5062,2550", "7326,133", "5052,5053,2219", "7331,122", "7333,6248", "7373", "98,7384,7383"],
	templateURL: "http://apps.yonhapnews.co.kr/api/template/?",
	//festURL : "http://apps.yonhapnews.co.kr/api/site/?domain=2&site=3201000000&count=3",		// 여행 사이트
	festURL : "http://apps.yonhapnews.co.kr/api/site/?domain=2&site=3204010000&count=3",		// 축제 사이트
	idx: 0,
	jsonFest: undefined,
	mapTop: {},
	mapJuyo: {},
	isGNBmap: {},
	isLock: false,
	init: function () {
		$("#nav > ul > li[name!='m01'][name!='m14'][name!='m16']").mouseenter( function () { 
				for (var i=0; i<gsn.gnbArr.length; i++ ) {
					if ( $(this).attr("name") == gsn.gnbArr[i] ) {
						gsn.idx = i;
						break;
					}
				}

				gsn.load();
			}
		);
	},

	load: function () {
		// 톱기사 조회
		gsn.topLoad();
		// 주요기사 조회
		gsn.juyoLoad();

		if (gsn.isGNBmap[gsn.idx] != true) {
			// html이 생성 안되는 경우 방지하기 위해 setTimeout이용
			setTimeout('gsn.makeHtml()', 50);
		}
	},

	topLoad: function () {
		if ( gsn.mapTop[gsn.idx] == undefined ) {
			$.ajax({
					cache: true,
					//async: false,
					url: gsn.templateURL + "tid=" + gsn.gnbTopArr[gsn.idx] + "&callback=gsn.topCallback",
					dataType: 'script'
			});
		}
	},

	topCallback: function (data) {
		// 데이터 꼬임 방지
		for (var i=0; i<gsn.gnbTopArr.length; i++) {
			if (data["PARAMETERS"]["VCTEMPLATEID"] == gsn.gnbTopArr[i]) {
				gsn.mapTop[i] = data;
				break;
			}
		}
	},

	juyoLoad: function () {
		if ( gsn.mapJuyo[gsn.idx] == undefined ) {
			$.ajax({
					cache: true,
					//async: false,
					url: gsn.templateURL + "tid=" + gsn.gnbJuyoArr[gsn.idx] + "&count=4&callback=gsn.juyoCallback",
					dataType: 'script'
			});
		}
	},
	
	juyoCallback: function (data) {
		// 데이터 꼬임 방지
		for (var i=0; i<gsn.gnbJuyoArr.length; i++) {
			if (data["PARAMETERS"]["VCTEMPLATEID"] == gsn.gnbJuyoArr[i]) {
				gsn.mapJuyo[i] = data;
				break;
			}
		}

		if (gsn.idx == 12) {
			// festival은 데이터 조회가 3번
			if ( gsn.jsonFest == undefined ) {
				$.ajax({
						cache: true,
						//async: false,
						url: gsn.festURL + "&callback=gsn.festCallback",
						dataType: 'script'
				});
			}
		}
	},

	festCallback: function (data) {
		gsn.jsonFest = data["RESULTSET"]["DATA"];
	},

	makeHtml: function () {
		var tHtml = '';
		try
		{
			// 비주얼뉴스는 HTML 형식이 다름
			if (gsn.idx != 13) {
				tHtml += '\t\t\t\t\t\t\t<div class="sect-top">\n';
				tHtml += '\t\t\t\t\t\t\t\t<a href="' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["URL"] + '">\n';
				// 템플릿 이미지가 없는 경우
				if ((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TEMPLATE_IMAGE"] != "") {
					tHtml += '\t\t\t\t\t\t\t\t\t<div class="img-con"><img src="' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '"></div>\n';
				}
				tHtml += '\t\t\t\t\t\t\t\t\t<div class="news-con">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '</h3>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\</div>\n';
				tHtml += '\t\t\t\t\t\t\t\t\</a>\n';
				tHtml += '\t\t\t\t\t\t\t</div>\n';
				tHtml += '\t\t\t\t\t\t\t<div class="sect-list">\n';
				tHtml += '\t\t\t\t\t\t\t\t<ul>\n';

				if ( gsn.idx != 12) {
					for (var i=0; i<(gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"].length; i++ ) {
						tHtml += '\t\t\t\t\t\t\t\t\t<li><a href="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["URL"] + '">' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '</a></li>\n';
					}
				} else {
					tHtml += '\t\t\t\t\t\t\t\t\t<li><a href="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][0]["URL"] + '">' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '</a></li>\n';
					for (var i=0; i<gsn.jsonFest.length; i++ ) {
						tHtml += '\t\t\t\t\t\t\t\t\t<li><a href="' + gsn.jsonFest[i]["URL"] + '">' + gsn.replaceChar(gsn.jsonFest[i]["TITLE"]) + '</a></li>\n';
					}
				}
				tHtml += '\t\t\t\t\t\t\t\t</ul>\n';
				tHtml += '\t\t\t\t\t\t\t</div>\n';
			} else {
				/* // 비주얼뉴스 순서(화보, 포토무비, 현장영상/클립영상, 카드뉴스), orgin
				tHtml += '\t\t\t\t\t\t\t\t<li>\n'
				tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_pictorial.png" alt="화보"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/pictorial/index.html?issue_id=' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["CONTENTS_ID"] + '">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '</h3>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
				tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				for (var i=0; i<(gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"].length; i++) {
					tHtml += '\t\t\t\t\t\t\t\t<li>\n';
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_photomovie.png" alt="포토무비"></span>\n';
					} else if (i == 1) {
						tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_picture.png" alt="영상"></span>\n';
					}
					tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/photomovie/index.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					} else if (i == 1) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					} else {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["URL"] + '">\n';
					}
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '"></span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '</h3>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
					tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				}
				*/

				// 비주얼뉴스 순서(포토무비, 현장영상/클립영상, 카드뉴스, 그래픽뉴스), 콘텐츠 순서 변경-2015.08.18
				/*
				tHtml += '\t\t\t\t\t\t\t\t<li>\n'
				tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_photomovie.png" alt="포토무비"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/photomovie/index.html?cid=' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["CONTENTS_ID"] + '">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '</h3>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
				tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				for (var i=0; i<(gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"].length; i++) {
					tHtml += '\t\t\t\t\t\t\t\t<li>\n';
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_picture.png" alt="영상"></span>\n';
					}

					tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
					
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					} else if (i == 1) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["URL"] + '">\n';
					} else {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					}
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '"></span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '</h3>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
					tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				}
				*/

				// 2015.08.21일 카드뉴스(3), 그래픽(4)의 위치 변경(그래픽, 카드뉴스)
				tHtml += '\t\t\t\t\t\t\t\t<li>\n'
				tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_photomovie.png" alt="포토무비"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/photomovie/index.html?cid=' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["CONTENTS_ID"] + '">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '"></span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapTop[gsn.idx])["RESULTSET"]["DATA"][0]["TITLE"]) + '</h3>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
				tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
				tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				for (var i=0; i<(gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"].length; i++) {
					tHtml += '\t\t\t\t\t\t\t\t<li>\n';
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t<span class="ico"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_picture.png" alt="영상"></span>\n';
					}

					tHtml += '\t\t\t\t\t\t\t\t\t<div class="box-flex">\n';
					
					if (i == 0) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/video/2602000001.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					} else if (i == 1) {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="http://www.yonhapnews.co.kr/photos/1991000000.html?cid=' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["CONTENTS_ID"] + '">\n';
					} else {
						tHtml += '\t\t\t\t\t\t\t\t\t\t<a href="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["URL"] + '">\n';
					}
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="img-con"><img src="' + (gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TEMPLATE_IMAGE"] + '" alt="' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '"></span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t<span class="news-con">\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="tit-news">' + gsn.replaceChar((gsn.mapJuyo[gsn.idx])["RESULTSET"]["DATA"][i]["TITLE"]) + '</h3>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t\t</span>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t\t</a>\n';
					tHtml += '\t\t\t\t\t\t\t\t\t</div>\n';
					tHtml += '\t\t\t\t\t\t\t\t</li>\n';
				}
			}

			if (gsn.idx != 13) {
				$("#nav > ul > li[name!='m01'][name!='m14'][name!='m16']").eq(gsn.idx).find(".story-zone").html(tHtml);
			} else {
				$("#nav > ul > li[name!='m01'][name!='m14'][name!='m16']").eq(gsn.idx).find(".visual-list").html(tHtml);
			}
			gsn.isGNBmap[gsn.idx] = true;
		}
		catch (err)
		{
			gsn.isGNBmap[gsn.idx] = false;
		}

		// 데이터 없는 경우 재 조회
		if (gsn.isGNBmap[gsn.idx] != true) {
			gsn.topLoad();
			gsn.juyoLoad();

			setTimeout('gsn.makeHtml()', 50);
		}
	},

	replaceChar: function (tChar) {
		return tChar.replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;');
	}

}

$(document).ready(function ( ) {
	gsn.init();
});