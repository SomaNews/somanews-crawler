function viewRelatedList (contid, relatedId){
	try {
		if (contid == "" || relatedId == "") return;
		var obj = $("#related_" + contid), obj2 = $("#relative_" + contid);
		if (obj.css("display") == "block") {
			obj.css("display", "none");
			//obj.html("");
			obj2.attr("class", "rel_off");
			return;
		}
		else {
			$(".rel_trig a").attr("class", "rel_off");
			$(".rel_box").css("display", "none");

			if (obj.html() != "") {
				obj.css("display", "block");
				obj2.attr("class", "rel_on");
				return;
			}
		}

		var path = "http://news.chosun.com/svc/list_in/n_related.html";
		$.ajax({
			type : 'post'
			, url : path
			, dataType: "xml"
			, data : {contid: contid, rid: relatedId}
			, success : function(data){
				if (data != null) resultRelatedList (contid, relatedId, data);
			}
			, error : function(request, status, error){
			}
		});
	}
	catch (e) {
	}
}
function resultRelatedList (contid, relatedId, resultXML){
        try{
		var htmlstr = '';
                var contList = $(resultXML).find("relatedContent");
		if (contList == null) return;

                for(var no=0; no < contList.length; no++){

			var _contid = '', _title = '', _href = '', _date = '', _target = '';
		
                        var contidElement = $(contList[no]).find("contid");
			_contid = $(contidElement).text();
			var titleElement = $(contList[no]).find("title");
			_title = $(titleElement).text();
			var hrefElement = $(contList[no]).find("href");
			_href = $(hrefElement).text();
			var dateElement = $(contList[no]).find("date");
			_date = $(dateElement).text();
			if (_href.indexOf("biz.chosun.com") != -1) _target = ' target="new"';

			htmlstr += '<li><a href="' + _href + '"' + _target + '>' + _title + '</a><em class="date">' + _date + '</em></li>';
                }

		htmlstr = '<a href="javascript:viewRelatedList(\'' + contid + '\',\'' + relatedId + '\')" class="rel_close"></a>'
			+ '<ul class="rel_list">' + htmlstr + '</ul>';

		var obj = $("#related_" + contid), obj2 = $("#relative_" + contid);
		obj.append(htmlstr);
		obj.css("display", "block");
		obj2.attr("class", "rel_on");
        }
	catch(e){
        }
}
