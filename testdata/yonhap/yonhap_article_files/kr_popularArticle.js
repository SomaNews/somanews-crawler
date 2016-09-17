/*
	mostview article, 2014
*/
var popArticle = {
	dataUrl: "http://www.yonhapnews.co.kr/data/2014_mostview.js",
	CatId: ["popularTotal", "popularPolitics", "popularEconomy", "popularSociety", "popularLocal", "popularSports", "popularEntertainment", "popularWorld"],
	jsonArr: undefined,
	load: function() {
		$.ajax({
			url: popArticle.dataUrl,
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			success: function(data, textStatus, jqXHR) {
				var s = jqXHR.responseText;
				popArticle.callback(s);
			}
		});
	},

	callback: function (obj) {
		var json = $.parseJSON(obj);
		popArticle.jsonArr = [json["RETURNSET"]["DATA"], json["RETURNSET2"]["DATA"], json["RETURNSET3"]["DATA"], json["RETURNSET4"]["DATA"], json["RETURNSET8"]["DATA"], json["RETURNSET5"]["DATA"], json["RETURNSET6"]["DATA"], json["RETURNSET7"]["DATA"]];

		for (var i=0; i<popArticle.jsonArr.length; i++) {
			popArticle.makeHtml(popArticle.jsonArr[i], i);
		}

		popArticle.imgNumMain(); //추가 2015-08-11
	},

	makeHtml: function (data, idx) {
		var t = '';
		for (var i=0; i<data.length; i++) {
			t += '<li>\n';
			//t += '\t<a href="' + data[i]["CONTENTS_LINK"] + '?template=7255" title="' + replaceHtmlChr(data[i]["TITLE"]) + '" target="_top">\n';
			if(parent.$('#wrap').hasClass('main-wrap')){
				t += '\t<a href="' + data[i]["CONTENTS_LINK"] + '?template=8275" title="' + replaceHtmlChr(data[i]["TITLE"]) + '" target="_top">\n';
			} else {
				t += '\t<a href="' + data[i]["CONTENTS_LINK"] + '?template=7255" title="' + replaceHtmlChr(data[i]["TITLE"]) + '" target="_top">\n';
			}

			t += '\t\t<img src="http://img.yonhapnews.co.kr/basic/svc/14_images/icon_num_gray0' + (i + 1) + '.gif" class="num" alt="' + (i + 1) + '" />\n' + replaceHtmlChr(data[i]["TITLE"]) + '\n';
			t += '\t</a>\n';
			t += '</li>\n';
		}

		$("#" + popArticle.CatId[idx] + " > ul").html(t);
	},

	 //추가 2015-08-11
	imgNumMain: function () {
		if($('.main-wrap',parent.document).parent().hasClass('main2015')){
			$('body').addClass('main2015');
			$('.list-wrap .num').each(function(){
				$(this).attr('src', $(this).attr('src').replace('.gif','_new.gif'));
			});
		}
	}

}

$(document).ready(function() {
	popArticle.load();
});
