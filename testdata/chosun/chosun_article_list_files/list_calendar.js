var Request = function()
{
	this.getParameter = function( name )
	{
		var rtnval = '';
		var nowAddress = unescape(location.href);
		var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');

		for(var i = 0 ; i < parameters.length ; i++)
		{
			var varName = parameters[i].split('=')[0];
			if(varName.toUpperCase() == name.toUpperCase())
			{
				rtnval = parameters[i].split('=')[1];
				break;
			}
		}
		return rtnval;
	}
}
var request = new Request();

function viewCalendar() {
	var ls_today = new Date();
	var ls_time = new Date();
	var ls_date = (arguments.length > 0 ? arguments[0] : "");
	var ls_year;
	var ls_month;
	
	if (ls_date != "" && ls_date.length == 8) {
		ls_year = ls_date.substring(0,4);	
		ls_month = (ls_date.charAt(4) == '0' ? ls_date.charAt(5) : ls_date.substring(4,6));
		tmp_month = parseInt(ls_month)-1;
		tmp_date = (ls_date.charAt(6) == '0' ? ls_date.charAt(7) : ls_date.substring(6,8));
		ls_time.setFullYear (ls_date.substring(0,4));
		ls_time.setMonth (tmp_month, tmp_date);
		ls_time.setDate (tmp_date);
	}
	else {
		ls_year = ls_time.getFullYear();
		ls_month = ls_time.getMonth()+1;
		ls_date = "" + ls_time.getFullYear() + (ls_time.getMonth()<9 ? "0"+(ls_time.getMonth()+1) : ""+(ls_time.getMonth()+1)) + (ls_time.getDate()<10 ? "0"+ls_time.getDate() : ""+ls_time.getDate());
	}

	ls_time.setDate (1);
	var ls_week = ls_time.getDay ();	//요일 값(0 ~ 6) 일요일 0
	
	var ls_caldays = Array (31,28,31,30,31,30,31,31,30,31,30,31);
	var ls_lastday = ls_caldays[ls_month-1];
	if (ls_year % 4 == 0 && ls_month == 2) ls_lastday = 29;
	var ls_lastdate = new Date(ls_time.getTime());
	ls_lastdate.setDate (ls_lastday);
	
	var ls_prevtime = new Date (ls_time - (24*60*60*1000));
	var ls_nexttime = new Date (ls_lastdate.getTime() + (24*60*60*1000));
	var ls_prevdate = "" + ls_prevtime.getFullYear() + (ls_prevtime.getMonth()<9 ? "0"+(ls_prevtime.getMonth()+1) : ""+(ls_prevtime.getMonth()+1)) + (ls_prevtime.getDate()<10 ? "0"+ls_prevtime.getDate() : ""+ls_prevtime.getDate());
	var ls_nextdate = "" + ls_nexttime.getFullYear() + (ls_nexttime.getMonth()<9 ? "0"+(ls_nexttime.getMonth()+1) : ""+(ls_nexttime.getMonth()+1)) + (ls_nexttime.getDate()<10 ? "0"+ls_nexttime.getDate() : ""+ls_nexttime.getDate());
	
	var ls_str = " \
		<div class='cal_box'> \
		<div class='btn_close' onclick='javascript:parent.view_bn_layer()' style='cursor:pointer'></div> \
		<a href=\"javascript:viewCalendar('" + ls_prevdate + "')\" class='btn_pre' style='cursor:pointer'></a> \
		<div class='n_day'><strong>" + ls_year + "." + ls_month + "</strong></div> \
		<a href=\"javascript:viewCalendar('" + ls_nextdate + "')\" class='btn_next' style='cursor:pointer'></a> \
		<div class='d_day'> \
		<table border='0' cellspacing='0' cellpadding='0' width='100%' id='calT'> \
		<tr>";

	for (idx = 0; idx < ls_week; idx++) {
		if (idx == 0) ls_str += "<th><span class='off'></span></th>";
		else ls_str += "<td><span class='off'></span></td>";
	}
	
	var ls_catid = request.getParameter("catid");
	var ls_source = request.getParameter("source");
	var ls_url = "http://" + window.parent.location.host + window.parent.location.pathname + "?catid=" + ls_catid + "&source=" + ls_source + "&indate=";
	for (idx = 1; idx <= ls_lastday; idx++) {
		ls_time.setDate (idx);
		ls_week = ls_time.getDay ();
		
		if (ls_week == 0) ls_str += "</tr><tr>";
		
		if (ls_time.getTime() > ls_today.getTime())
			ls_str += "<td class='off'>"+idx+"</td>";
		else
			ls_str += "<td><a href=\"javascript:parent.location.href='"+ls_url+ls_date.substring(0,4)+ls_date.substring(4,6)+(idx < 10 ? "0"+idx : ""+idx)+"';parent.view_bn_layer();\" title='" +ls_date.substring(0,4)+ "-" +ls_date.substring(4,6)+ "-" +(idx < 10 ? "0"+idx : ""+idx)+ "'>" + idx + "</a></td>";
	}
	
	for (idx = ls_week; idx < 6; idx++) {
		if (idx == 5) ls_str += "<th class='off'></th>";
		else ls_str += "<td class='off'></td>";
	}
	
	ls_str += "</tr>";

	ls_str += " \
		</tr> \
		</table> \
		</div> \
		</div>";
	
	var ls_obj = document.getElementById("CALENDAR");
	if (ls_obj != null) {
		document.getElementById("CALENDAR").innerHTML = ls_str;
	}
}
viewCalendar();
