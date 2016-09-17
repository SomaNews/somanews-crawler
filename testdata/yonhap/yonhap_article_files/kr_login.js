/***********************************************
* 로그인 되었는지 확인
************************************************/

var lgn={

	init: function(){	
		lgn.checkLogin();
	},

	checkLogin: function(){
		var memberCode = lgn.getCookie('YNA_MEMBER_CODE');			
		if(memberCode == null){	
			$(".acc-active").show();
            $(".acc-disable").hide();
			$('.agency-svc').removeClass('active'); 

		}
		else{			
			$(".acc-active").hide();
            $(".acc-disable").show();
            $(".acc-disable").attr("onclick","lgn.codeCheck()");
			$('.agency-svc').addClass('active'); 

		}
	},

	getCookie: function(varname){
		varname += "=";
		startpos = document.cookie.indexOf(varname);
		if (startpos >= 0) {
			startpos += varname.length;
			endpos = document.cookie.indexOf(";", startpos);
			if (endpos == -1) endpos = document.cookie.length;
						
			return unescape(document.cookie.substring(startpos, endpos));			
		}
	},   

	codeCheck: function(){
		var result ="";
	   $.ajax({
			type: "POST",
			url: "https://app.yonhapnews.co.kr/yna/basic/2013_member/codeCheck2014.aspx",
			contentsType: "application/json",	
			callback:lgn.test,
			dataType: 'jsonp',
			success: function(data){
				lgn.afterCheck(data);
			}
			,error : function(xhr) {
				lgn.afterCheck(eval('(' + xhr.responseText + ')'));
			}
		});
	},

	afterCheck: function(data)
		{
			if (data.result=="qualified"){
				$(".tooltip-box a:first-child").attr("href","https://app.yonhapnews.co.kr/yna/basic/2013_member/logout2014.html?template=2971");
				$(".tooltip-box a:nth-child(2)").attr("href","https://app.yonhapnews.co.kr/yna/basic/2013_member/update_form.html?template=2971");
			}
			else{
			}
		}
}


$(document).ready(function(){
	lgn.init();
});
