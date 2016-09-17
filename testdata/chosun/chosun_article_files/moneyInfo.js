var stock_info = new Array();

//var stock_num = Math.floor(Math.random() * 5)+1;
var stock_num = Math.floor(Math.random() * 3)+1;
var stock_st;
var stock_error;

function stockView(){
	$.ajax({
		url:"/svc/wsdata/data/stockInfo.xml",
		dataType:"xml",
		success:function(resultXML){
			var stockElement = $(resultXML).find("jisu");
			var moneyElement = $(resultXML).find("money");

			var stock_class = "";
			var str1 = "";
			//kospi
			var kospiElement = $(stockElement[0]).find("kospi");
			var kospi_valueElement = $(kospiElement[0]).find("value");
			var kospi_udchkElement = $(kospiElement[0]).find("udchk");
			var kospi_updownElement = $(kospiElement[0]).find("updown");

			if(kospi_valueElement != null)
				var kospi_value = $(kospi_valueElement).text();
			if(kospi_udchkElement != null)
				var kospi_udchk = $(kospi_udchkElement).text();
			if(kospi_updownElement != null)
				var kospi_updown = $(kospi_updownElement).text();
			if(kospi_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str1 = str1+ "<li><p>코스피</p>"+kospi_value+" "+stock_class+kospi_updown+"</span></li>";
			stock_info[0] = str1;

			var str2 = "";
			//kosdaq
			var kosdaqElement = $(stockElement[0]).find("kosdaq");
			var kosdaq_valueElement = $(kosdaqElement[0]).find("value");
			var kosdaq_udchkElement = $(kosdaqElement[0]).find("udchk");
			var kosdaq_updownElement = $(kosdaqElement[0]).find("updown");

			if(kosdaq_valueElement != null)
				var kosdaq_value = $(kosdaq_valueElement).text();
			if(kosdaq_udchkElement != null)
				var kosdaq_udchk = $(kosdaq_udchkElement).text();
			if(kosdaq_updownElement != null)
				var kosdaq_updown = $(kosdaq_updownElement).text();
			if(kosdaq_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str2 = str2+ "<li><p>코스닥</p>"+kosdaq_value+" "+stock_class+kosdaq_updown+"</span></li>";
			stock_info[1] = str2;

/*
			var str3 = "";
			//dow
			var dowElement = $(stockElement[0]).find("dow");
			var dow_valueElement = $(dowElement[0]).find("value");
			var dow_udchkElement = $(dowElement[0]).find("udchk");
			var dow_updownElement = $(dowElement[0]).find("updown");

			if(dow_valueElement != null)
				var dow_value = $(dow_valueElement).text();
			if(dow_udchkElement != null)
				var dow_udchk = $(dow_udchkElement).text();
			if(dow_updownElement != null)
				var dow_updown = $(dow_updownElement).text();
			if(dow_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str3 = str3+ "<li><p>다우</p>"+dow_value+" "+stock_class+dow_updown+"</span></li>";
			stock_info[2] = str3;

			var str4 = "";
			//nasdaq
			var nasdaqElement = $(stockElement[0]).find("nasdaq");
			var nasdaq_valueElement = $(nasdaqElement[0]).find("value");
			var nasdaq_udchkElement = $(nasdaqElement[0]).find("udchk");
			var nasdaq_updownElement = $(nasdaqElement[0]).find("updown");

			if(nasdaq_valueElement != null)
				var nasdaq_value = $(nasdaq_valueElement).text();
			if(nasdaq_udchkElement != null)
				var nasdaq_udchk = $(nasdaq_udchkElement).text();
			if(nasdaq_updownElement != null)
				var nasdaq_updown = $(nasdaq_updownElement).text();
			if(nasdaq_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str4 = str4+ "<li><p>나스닥</p>"+nasdaq_value+" "+stock_class+nasdaq_updown+"</span></li>";
			stock_info[3] = str4;
*/
			var str5 = "";
			//usd
			var usdElement = $(moneyElement[0]).find("usd");
			var usd_valueElement = $(usdElement[0]).find("value");
			var usd_udchkElement = $(usdElement[0]).find("udchk");
			var usd_updownElement = $(usdElement[0]).find("updown");

			if(usd_valueElement != null)
				var usd_value = $(usd_valueElement).text();
			if(usd_udchkElement != null)
				var usd_udchk = $(usd_udchkElement).text();
			if(usd_updownElement != null)
				var usd_updown = $(usd_updownElement).text();
			if(usd_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str5 = str5+ "<li><p>달러<span class=\"normal\">($)</span></p>"+usd_value+" "+stock_class+usd_updown+"</span></li>";
			//stock_info[4] = str5;
			stock_info[2] = str5;

			var str6 = "";
			//jpy
			var jpyElement = $(moneyElement[0]).find("jpy");
			var jpy_valueElement = $(jpyElement[0]).find("value");
			var jpy_udchkElement = $(jpyElement[0]).find("udchk");
			var jpy_updownElement = $(jpyElement[0]).find("updown");

			if(jpy_valueElement != null)
				var jpy_value = $(jpy_valueElement).text();
			if(jpy_udchkElement != null)
				var jpy_udchk = $(jpy_udchkElement).text();
			if(jpy_updownElement != null)
				var jpy_updown = $(jpy_updownElement).text();
			if(jpy_udchk=="U"){
				stock_class = "<span class=\"stockUP\"><strong>▲</strong>";
			}else{
				stock_class = "<span class=\"stockDW\"><strong>▼</strong>";
			}
			str6 = str6+ "<li><p>엔화<span class=\"normal\">(￥)</span></p>"+jpy_value+" "+stock_class+jpy_updown+"</span></li>";
			//stock_info[5] = str6;
			stock_info[3] = str6;

			$("#stock_info").html(stock_info[0]);

			clearTimeout(stock_st);
			clearTimeout(stock_error);
			stock_roll();
		},
		error: function(xhr, status, error) {
			if(stock_info.length==0){
				stock_error = setTimeout("stockView()",1000*15);
			}
		}
	});
}

function stockLoad(){
	stockView();
	//setTimeout("stockLoad()",1000*60*1);
}

function stock_roll() {
	stock_num++;
	//if(stock_num > 5){
		if(stock_num > 3){
		stock_num = 0;
	}
	document.getElementById("stock_info").innerHTML = stock_info[stock_num];
	stock_st = setTimeout("stock_roll()", 5000);
}
