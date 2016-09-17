/*
	today's major news, 2014
*/
var todayMN = {
	dataUrl: "http://www.yonhapnews.co.kr/data/2014_juyonews.js",
	divId: ["todayTotal", "todayPolitics", "todayEconomy", "todaySociety", "todaySports", "todayWorld"],
	jsonArr: undefined,
	load: function() {
		$.ajax({
			url: todayMN.dataUrl,
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			success: function(data, textStatus, jqXHR) {
				var s = jqXHR.responseText;
				todayMN.callback(s);
			}
		});
	},

	callback: function (obj) {
		var json = $.parseJSON(obj);
		todayMN.jsonArr = [json["RETURNSET"]["DATA"], json["RETURNSET2"]["DATA"], json["RETURNSET3"]["DATA"], json["RETURNSET4"]["DATA"], json["RETURNSET5"]["DATA"], json["RETURNSET6"]["DATA"]];

		for (var i=0; i<todayMN.jsonArr.length; i++) {
			todayMN.makeHtml(todayMN.jsonArr[i], i);
		}
	},

	makeHtml: function (data, idx) {
		var h1 = '';
		var h2 = '';

		for (var i=0; i<data.length; i++) {

			if ( i < 5 ) {
				h1 += '<li id="' + data[i]["CONTENTS_ID"] + '">\n';
				h1 += '\t<a href="' + data[i]["TEMPLATE_ARTICLE_URL"] + '" title="' + replaceHtmlChr(data[i]["TITLE"]) + '" target="_top">' + replaceHtmlChr(data[i]["TITLE"]) + '</a>';
				h1 += '</li>\n';
			} else {
				h2 += '<li id="' + data[i]["CONTENTS_ID"] + '">\n';
				h2 += '\t<a href="' + data[i]["TEMPLATE_ARTICLE_URL"] + '" title="' + replaceHtmlChr(data[i]["TITLE"]) + '" target="_top">' + replaceHtmlChr(data[i]["TITLE"]) + '</a>';
				h2 += '</li>\n';
			}

		}

		$("#" + todayMN.divId[idx] + " > ul:eq(0)").html(h1);
		$("#" + todayMN.divId[idx] + " > ul:eq(1)").html(h2);
	}
}

$(document).ready(function() {
	todayMN.load();
});
