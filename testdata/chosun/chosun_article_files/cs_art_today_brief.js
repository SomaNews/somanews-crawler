// JavaScript for chosun.com article today news Document

document.write('<div class="today_cs_box"><div class="sec_tit"><h3>오늘의<br>뉴스 브리핑</h3></div><div class="sec_con"><iframe id="nb_if" src="" name="newsb" width="970px" height="380px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="오늘의 뉴스 브리핑"></iframe>');
	var subcat = CatID.substring(0,1);	document.getElementById('nb_if').src="http://news.chosun.com/special/issue_news/index.html";
document.write('</div></div>');