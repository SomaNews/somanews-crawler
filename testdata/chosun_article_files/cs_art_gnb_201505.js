// JavaScript Document for chosun.com news article gnb 201505

// JavaScript Document for chosun.com GNB

document.write('\
<div class="csh_art_in"> <h2 id="csh_brand"><a href="http://www.chosun.com/index.html"><img src="http://image.chosun.com/main/201505/csh_art_logocsc.png" alt="" class="csh_logo_art_csc"><span class="csh_logo_title">1등 인터넷뉴스 조선닷컴 - </span></a><span class="csh_art_cat"><a id="csh_art_cat_id" href=""></a></span></h2> <div class="csh_login"><a id="logLink" href="https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl=" target="_top">로그인</a> | <a id="memberLink" href="https://membership.chosun.com/join/registUser.jsp?site=chosun" target="_top">회원가입</a></div></div><div class="csh_art_bg black"> <div class="csh_art_in"><h4 class="hide">조선닷컴 메뉴</h4><ul id="csh_menu_id" class="csh_menu"> <li><a href="http://www.chosun.com/index.html" id="cm_news" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_news\');">뉴스</a></li><li><a href="http://news.chosun.com/editorials/index.html" id="cm_opi" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_opinion\');">오피니언</a></li><li><a href="http://biz.chosun.com/index.html" id="cm_eco" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_economy\');" target="cs_new">경제</a></li><li><a href="http://news.chosun.com/sports/index.html" id="cm_spo" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_sports\');">스포츠</a></li><li><a href="http://news.chosun.com/ent/index.html" id="cm_ent" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_ent\');">연예</a></li><li><a href="http://life.chosun.com/index.html" id="cm_life" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_life\');">라이프</a></li><li><a href="http://health.chosun.com/index.html" target="cs_new" id="cm_health" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_health\');">건강</a></li><li><a href="http://photo.chosun.com/index.html" id="cm_phomo" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_photovideo\');">포토&middot;영상</a></li></ul><div class="csh_all_trig"> <a href="javascript:void(0)" onclick="csh_menu_all()" id="csh_all_trig_id" title="메뉴 전체보기" class="">메뉴 전체보기</a> </div><div id="csh_search"> <h4 class="hide">검색</h4> <div class="csh_search_inputbox_trig"><a href="javascript:void(0)" onclick="csh_search_open()" id="csh_search_inputbox_trig_id" title="검색창 열기">검색창 열기</a></div><div id="csh_search_inputbox_id" class="csh_search_inputbox" style="display:none;"><form method="get" id="id_searchForm" name="id_searchForm" action="http://search.chosun.com/search/total.search" target="_blank" accept-charset="utf-8" onsubmit="goSearch(); return false;"> <fieldset><legend>통합검색</legend><span class="InputOutline"><input type="text" value="" class="searchTerm" id="query" name="query" title="검색어 입력" placeholder="검색어를 입력하세요."></span><input type="submit" alt="검색" title="검색" class="searchBtn" value="검색"><input type="hidden" name="pageconf" id="pageconf" value="total"> </fieldset></form> </div></div><div id="csh_all_id" class="csh_all" style="display:none;"> <h4 class="hide">전체 메뉴</h4> <ul class="csh_all_list"> <li class="dep1"><a href="http://www.chosun.com" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_news\');">뉴스</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_newslist\');">전체</a></li><li><a href="http://news.chosun.com/politics/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_politics\');">정치</a></li><li><a href="http://news.chosun.com/national/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_national\');">사회</a> / <a href="http://news.chosun.com/national/metro/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_national\');">전국</a></li><li><a href="http://news.chosun.com/international/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_international\');">국제</a></li><li><a href="http://news.chosun.com/culture/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_culture\');">문화</a></li><li class="empty"></li><li><a href="http://news.chosun.com/svc/list_in/list_newsq.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_newsq\');">뉴스Q</a> / <a href="http://thestory.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_infographics\');">더스토리</a></li><li><a href="http://news.chosun.com/svc/list_in/list_inside.html?in_theme=4&in_sitecd=H&in_categ=H1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_why\');">Why</a> / <a href="http://news.chosun.com/inside/track/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_issue\');">이슈트랙</a></li><li><a href="http://snac.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_card\');">카드뉴스</a> / <a href="http://issue.chosun.com/poll/quiz_list.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_quiz\');">퀴즈</a></li><li class="empty"></li><li class="dep1"><a href="http://photo.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">포토&middot;영상</a></li><li><a href="http://photo.chosun.com/svc/list/photovideo.html?catid=9" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">SeeSun</a> / <a href="http://photo.chosun.com/svc/list/photovideo.html?catid=I" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">Video C</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://news.chosun.com/editorials/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">오피니언</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=6" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">전체</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=61" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">사내칼럼</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=617" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">사설</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">전문가칼럼</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=621" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">시론&middot;기고</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=613" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">만물상</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=61D" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">팔면봉</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=624" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">독자의견</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62b" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">발언대</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=62c" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">아침편지</a></li><li class="empty"></li><li class="dep1"><a href="http://premium.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">프리미엄조선</a></li><li><a href="http://issue.chosun.com/issue/timeline_index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">이슈&amp;</a> / <a href="http://issue.chosun.com/issue/issue_index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">스페셜리포트</a></li><li><a href="http://writers.chosun.com/" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">기자채널</a></li><li><a href="http://premium.chosun.com/svc/news/plist_newsq.html?catid=W" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">더테이블</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://biz.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">경제</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">전체</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=2" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">증권</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=4" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">부동산</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1A" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">정책&middot;금융</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1C" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">기업</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=8" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">Weekly Biz</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=1M" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">산업</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=16" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">IT</a>&middot;<a href="http://news.chosun.com/svc/list_in/list.html?catid=1S" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">과학</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=15" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">유통&middot;소비자</a></li><li class="empty"></li><li><a href="http://car.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">자동차</a></li><li><a href="http://review.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">리뷰</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://news.chosun.com/sports/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">스포츠</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">전체</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G11" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">야구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G12" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">축구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G13" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">종합</a></li><li class="empty"></li><li class="dep1"><a href="http://news.chosun.com/ent/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">연예</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G2" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">전체</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G21" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">연예존</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G22" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">영화</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G27" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">TV/방송</a></li><li><a href="http://thestar.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">더스타</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://life.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">라이프</a></li><li><a href="http://danmee.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">홈&amp;리빙</a></li><li><a href="http://fashion.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">패션&middot;뷰티</a></li><li><a href="http://travel.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">여행</a> / <a href="http://food.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">푸드</a></li><li><a href="http://books.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">북스</a> / <a href="http://art.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">전시&middot;공연</a></li><li><a href="http://bike.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">바이크</a></li><li><a href="http://senior.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">시니어</a></li><li><a href="http://boomup.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">아시아여행</a></li><li><a href="http://newsplus.chosun.com/inside/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">인사이드</a> / <a href="http://travel.chosun.com/inside/zine/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">주말매거진</a></li><li class="empty"></li><li class="dep1"><a href="http://health.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">건강</a></li><li><a href="http://health.chosun.com/list.html " target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">전체</a></li><li><a href="http://health.chosun.com/bestdoctor/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">명의</a></li></ul> <ul class="csh_all_list"> <li class="dep1">주요서비스</li><li><a href="https://members.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">조선멤버스</a></li><li><a href="https://members.chosun.com/service/supp/pr_supp_1191_double.jsp" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">구독신청</a> / <a href="http://srchdb1.chosun.com/pdf/i_service/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">지면보기</a></li><li><a href="http://db.chosun.com/photo" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">사진검색</a> / <a href="http://db.chosun.com/people/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">인물검색</a></li><li><a href="http://inside.chosun.com/newsletter_new/Newsletter.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">뉴스레터</a></li><li><a href="http://newsplus.chosun.com/ranking/scrap/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">내스크랩</a></li><li class="empty"></li><li><a href="http://news.chosun.com/ranking/list.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">랭킹뉴스</a></li><li><a href="http://focus.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">포커스</a></li><li><a href="http://forum.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">토론마당</a></li><li><a href="http://picpen.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">PiCPEN</a></li><li><a href="http://blogs.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">weblog</a></li><li><a href="http://bemil.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">유용원의 군사세계</a></li></ul> <div class="csh_all_others"> <ul class="csh_all_sns"> <li class="fb"><a href="http://www.facebook.com/chosun" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">페이스북</a></li><li class="tw"><a href="http://twitter.com/Chosun" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">트위터</a></li><li class="gp"><a href="https://plus.google.com/+Chosun/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">구글플러스</a></li><li class="kas"><a href="https://story.kakao.com/ch/chosunmedia" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">카카오스토리</a></li></ul> <ul class="csh_all_sites"> <li><a href="http://tv.chosun.com/main.html" target="cs_new" class="site_tvcs" title="TV조선(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_tvcs\');">TV조선</a></li><li><a href="http://biz.chosun.com/index.html" target="cs_new" class="site_csbiz" title="조선비즈(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_biz\');">조선비즈</a></li><li><a href="http://sports.chosun.com/index.htm" target="cs_new" class="site_spocs" title="스포츠조선(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_sports\');">스포츠조선</a></li><li><a href="http://health.chosun.com/index.html" target="cs_new" class="site_health" title="헬스조선(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_health\');">헬스조선</a></li><li><a href="http://pub.chosun.com/index_main.asp" target="cs_new" class="site_cspub" title="조선pub(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_pub\');">조선pub</a></li><li><a href="http://edu.chosun.com/index.html" target="cs_new" class="site_csedu" title="조선에듀(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_edu\');">조선에듀</a></li><li><a href="http://it.chosun.com/" target="cs_new" class="site_csit" title="IT조선(새창)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_it\');">IT조선</a></li></ul> <div class="csh_all_close_trig"> <a href="javascript:void(0)" onclick="csh_menu_all()" id="csh_all_close_id" title="전체보기 메뉴 닫기">전체보기 메뉴 닫기</a> </div></div></div><!-- csh_all_id --></div></div><div id="csh_art_min_id" class="csh_art_min"> <div class="csh_art_in"> <h2 id="csh_min_brand"><a href="http://news.chosun.com/index.html?gnb_logo"><img src="http://image.chosun.com/main/201505/csh_art_logocsc_min.png" alt="" class="csh_logo_art_csc"><span class="csh_logo_title">1등 인터넷뉴스 조선닷컴 - </span></a></h2> <dl id="csh_min_title"> <dd class="prev"><a href="javascript:_getContent(\'prev\')">이전기사</a></dd> <dd class="cat"><span class="csh_art_cat"><a href="#" id="csh_art_cat_min_id"></a></span></dd> <dt>'+ ArtTitleMin +'</dt> <dd class="cmt_count"><a href="#news_comment_id"></a></dd> <dd class="next"><a href="javascript:_getContent(\'next\')">다음기사</a></dd> </dl> <div class="csh_all_trig"> <a href="javascript:void(0)" onclick="csh_menu_all_2()" id="csh_all_trig_id_2" title="메뉴 전체보기" class="">메뉴 전체보기</a> </div><ul class="csh_min_sns"> <li class="fb"><a href="javascript:facebookOpen()">페이스북 공유</a></li><li class="tw"><a href="javascript:twitterOpen()">트위터 공유</a></li><li class="gp"><a href="javascript:googleplusOpen()">구글플러스 공유</a></li><li class="kas"><a href="javascript:kakaostoryOpen()">카카오스토리 공유</a></li></ul> </div><div class="c"></div></div>\
');

function csh_menu_all () {
		var csmenu_more_btn = document.getElementById("csh_all_trig_id");
		var csmenu_more = document.getElementById("csh_all_id").style;
		if (csmenu_more.display == "none") {
            csmenu_more.display = "block";
			csmenu_more_btn.className = "csh_all_trig_on";
        } else {
            csmenu_more.display = "none";
			csmenu_more_btn.className = "csh_all_trig_off";
        }
    }

function csh_menu_all_2 () {
		var csmenu_more_btn = document.getElementById("csh_all_trig_id");
		var csmenu_more_btn_2 = document.getElementById("csh_all_trig_id_2");
		var csmenu_more = document.getElementById("csh_all_id");
		if (csmenu_more.style.display == "none") {
            csmenu_more.style.display = "block";
			csmenu_more.className = "fixed";
			csmenu_more_btn.className = "csh_all_trig_on";
			csmenu_more_btn_2.className = "csh_all_trig_on";
        } else {
            csmenu_more.style.display = "none";
			csmenu_more.className = "";
			csmenu_more_btn.className = "csh_all_trig_off";
			csmenu_more_btn_2.className = "csh_all_trig_off";
        }
    }

function csh_search_open () {
		var cs_search_btn = document.getElementById("csh_search_inputbox_trig_id");
		var cs_search_open = document.getElementById("csh_search_inputbox_id").style;
		if (cs_search_open.display == "none") {
            cs_search_open.display = "block";
			cs_search_btn.style.display = "none";
        } else {
            cs_search_open.display = "none";
			cs_search_btn.className = "csh_search_inputbox_trig_off";
        }
    }

function s_clear(){
	document.getElementById('id_searchForm').query.value ="";
}

$(window).scroll(function(){
  var gnb_art_min = $('#csh_art_min_id');
  var gnb_scroll = $(window).scrollTop();
  var gnb_art_all = $('#csh_all_id');

  if (gnb_scroll >= 150){
	  gnb_art_min.addClass('fixed');
  }
  else {
  	gnb_art_min.removeClass('fixed');
	gnb_art_all.removeClass('fixed').hide();
	$('#csh_all_trig_id, #csh_all_trig_id_2').removeClass('csh_all_trig_on').addClass('csh_all_trig_off');
  }

});
$(window).load(function() {
	var cmt_count_from = $('#BBSCNT').html();
	var cmt_count_to = $('.cmt_count a').html(cmt_count_from);

	// 100자평까지 스크롤
    $('dd.cmt_count a, li.cmt a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 400, 'swing', function () {
            //window.location.hash = target;
            $(window).on("scroll", onScroll);
			//$(window).on("scroll", onS);
        });
    });
});

//========== 쿠키값 처리 함수 S
function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {	//while open
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0)
			break;
	}	//while close
	return null;
}
function GetAuthCookie(name) {
	var cookies = document.cookie;
	var value  = "";
	if(cookies.indexOf(name) != -1) {
		var start = cookies.indexOf(name) + name.length + 1;
		var end   = cookies.indexOf(";",start);

		if(end == -1) end = cookies.length;

		value = cookies.substring(start,end);
		value = unescape(value);
	}

	return value;
}
//========== 쿠키값 처리 함수 E

function moveMobile(){
	try {
		var frmUrl = document.location.href;

		if(frmUrl.indexOf("html_dir") == -1 || typeof(ArtID) == 'undefined'){
			return;
		}

		var rsMobile = GetCookie("csMobile");
		rsMobile = rsMobile != null && rsMobile != "false" ? rsMobile : "";
		if (rsMobile == "pc") {
			NewsSource.init("copy", NewsSource.addSource);
			return;
		}

		var navUA = navigator.userAgent;
		var isWinCE = navUA.indexOf("Windows CE") >= 0;
		var isMobile = navUA.indexOf("Mobile") >= 0;
		var isiPAD = navUA.indexOf("iPad") >= 0;

		var _appService = "";
		if((isWinCE || isMobile) && !isiPAD) _appService = "mobile";
		var _tabList = "/SM-P605|SM-P600|SHV-E230|SHW-M480|SHW-M480W|SHW-M485W|SHW-M500W|SM-P900|SHW-M300W|SHW-M300|SHW-M305W|SHV-E140|SM-T320|SM-T310|SM-T530|SM-T335|SM-T330|SM-T800|SM-T700|SM-T255S|ASUS-1B32|ASUS-1B32-4G|ASUS-2B16|ASUS-2B32|LG-V400|LG-V480|LG-V700|LG-V500|SHW-M380|iPad|SM-T805|Nexus 9|SM-T550|SM-T555|SM-P550|SM-P555|SM-T350|SM-T355|SM-P350|SM-P355|SM-T715|SM-T815/";
		if (navUA.match(_tabList) != null) _appService = "pc";

		if ((_appService == "tablet" || _appService == "mobile") && rsMobile != "") _appService = rsMobile;

		if (_appService == "mobile") {
			var para = location.search;
			if(para != "" && para.indexOf("?") == 0) {
				para = para.substring(1);
				para = para.length > 0 ? "&"+para : "";
			}
			else para = "";
			var ref = document.referrer;
			if (ref != null && ref != "") {
				var para_ref = "", exp = /(\/\/)([^/]+)/;
				if (ref.match(exp) != null) para_ref = RegExp.$2;
				if (para_ref != "") para += "&Dep0=" + para_ref;
			}

			document.location.replace ("http://m.chosun.com/svc/article.html?sname=news&contid=" + ArtID + para);
			return;
		}
	}
	catch (e) {}

	NewsSource.init("copy", NewsSource.addSource);
}

var NewsSource = {
	init : function(eventName, eventHandler) {
		if (document.addEventListener) {
			document.addEventListener(eventName, eventHandler, false);
		} else if (document.attachEvent) {
			document.attachEvent("on"+eventName, eventHandler);
		}
	},
	addSource : function() {
		var getSelection = window.getSelection ? window.getSelection() : document.selection;
		var getRange = getSelection.getRangeAt ? getSelection.getRangeAt(0) : getSelection.createRange();
		if(!getSelection.rangeCount) return null;
		var pagesource = "<br /><br />[출처] 본 기사는 조선닷컴에서 작성된 기사 입니다";
		var body = document.getElementsByTagName("body")[0];
		var span = document.createElement("span");
		span.appendChild(getRange.cloneContents());
		if(span.innerHTML == "") return null;
		var copytext = span.innerHTML + pagesource;
		var newdiv = document.createElement("div");
		newdiv.style.position="absolute";
		newdiv.style.left="-99999px";
		newdiv.id="_newdiv";
		body.appendChild(newdiv);
		newdiv.innerHTML = copytext;
		getSelection.selectAllChildren(newdiv);
		newdiv.style="";
		window.setTimeout(function() {
			body.removeChild(newdiv);
			getSelection.removeAllRanges();
			getSelection.addRange (getRange);},0);
	}
}

moveMobile();

var CatID;
var Getcatid;

var search_word;/*표시 될 검색어들*/
var s_w_count;
var ArtID;
//검색관련
function goSearch() {
             var f = document.getElementById('id_searchForm');

             if(f.query.value == ""){
                          alert("검색어를 입력하세요.");
                          f.query.focus();
                          return false;
             }

             document.charset = 'utf-8';
             f.submit();
             document.charset = 'euc-kr';
}


//로그인
function loginFrame () {
	//페이지 URL
	var returl = document.location;
	if (returl == null || returl == ""){
		returl = M_SITE;
	}
	returl = escape(returl);

	var login_url = "https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl="+returl;
	var logout_url = "https://membership.chosun.com/login/logout.jsp?returl="+returl;
	var regist_url = "https://membership.chosun.com/join/registUser.jsp?site=chosun";
	var join_url = "https://membership.chosun.com/join/registUser.jsp?act=myindex&site=chosun";
	var idpw_url = "https://membership.chosun.com/join/registUser.jsp?act=idpw&site=chosun";
	var logStr;

	var logLink = document.getElementById("logLink");
	var logImg = document.getElementById("logImg");
	var memberLink = document.getElementById("memberLink");
	var memberImg = document.getElementById("memberImg");

	//로그인여부 - 쿠키값 확인
	if (GetAuthCookie('SMSESSION')=="" || GetAuthCookie('SMSESSION') == "LOGGEDOFF" || GetAuthCookie('SM_USER') =="") {
		logLink.href = login_url;
		logLink.innerHTML = "로그인";
		memberLink.href = regist_url;
		memberLink.innerHTML = "회원가입";
	}
	else if (GetAuthCookie('dz_nm')=="" || GetAuthCookie('dz_info')=="") {
	var relogin_url = "https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl="+returl;
		parent.location.href = relogin_url;
	} else {
		logLink.href = logout_url;
		logLink.innerHTML = "로그아웃";
		memberLink.href = join_url;
		memberLink.innerHTML = "정보수정";
	}
	return logStr;
}
loginFrame();

/* 섹션 */
if(CatID){
	Getcatid = CatID.substring(0,1);
	Getcatid2 = CatID.substring(0,2);
	Getcatid3 = CatID.substring(0,3);
	if(Getcatid == "0" || Getcatid == "2" || Getcatid == "3" || Getcatid == "4" || Getcatid == "5"){
		document.getElementById('cm_news').className = "current";
	}else if(Getcatid == "1"){
		document.getElementById('cm_eco').className = "current";
	}else if(Getcatid == "6"){
		document.getElementById('cm_opi').className = "current";
	}else if(Getcatid2 == "G1"){
		document.getElementById('cm_spo').className = "current";
	}else if(Getcatid2 == "G2"){
		document.getElementById('cm_ent').className = "current";
	}else if(Getcatid == "B"){
		document.getElementById('cm_life').className = "current";
	}else if(Getcatid == "H"){
		document.getElementById('cm_news').className = "current";
	}
	// 헬스, 포토영상 추가 필요
}else{
	document.getElementById('cm_news').className = "current";
}
if(CatID){
	var l_link = document.getElementById('csh_art_cat_id');
	var l_min_link = document.getElementById('csh_art_cat_min_id');
	//var l_img = document.getElementById('Catlogo_img');
	if(Getcatid == "1"){
		l_link.href = "http://biz.chosun.com/index.html?gnb_menu";
		l_link.innerHTML = "경제";
		l_min_link.href = "http://biz.chosun.com/index.html?gnb_menu";
		l_min_link.innerHTML = "경제";
		//l_img.src = "http://image.chosun.com/main/201109/title_economy.gif";
	}else if(Getcatid == "2"){
		l_link.href = "http://news.chosun.com/politics/index.html?gnb_menu";
		l_link.innerHTML = "정치";
		l_min_link.href = "http://news.chosun.com/politics/index.html?gnb_menu";
		l_min_link.innerHTML = "정치";
		//l_img.src = "http://image.chosun.com/main/201109/title_politics.gif";
	}else if(Getcatid2 == "3F"){
		l_link.href = "http://news.chosun.com/national/metro/index.html?gnb_menu";
		l_link.innerHTML = "전국뉴스";
		l_min_link.href = "http://news.chosun.com/national/metro/index.html?gnb_menu";
		l_min_link.innerHTML = "전국뉴스";
		//l_img.src = "http://image.chosun.com/main/201309/title_country.gif";
	}else if(Getcatid == "3"){
		l_link.href = "http://news.chosun.com/national/index.html?gnb_menu";
		l_link.innerHTML = "사회";
		l_min_link.href = "http://news.chosun.com/national/index.html?gnb_menu";
		l_min_link.innerHTML = "사회";
		//l_img.src = "http://image.chosun.com/main/201109/title_society.gif";
	}else if(Getcatid == "4"){
		l_link.href = "http://news.chosun.com/international/index.html?gnb_menu";
		l_link.innerHTML = "국제";
		l_min_link.href = "http://news.chosun.com/international/index.html?gnb_menu";
		l_min_link.innerHTML = "국제";
		//l_img.src = "http://image.chosun.com/main/201109/title_international.gif";
	}else if(Getcatid == "5"){
		l_link.href = "http://news.chosun.com/culture/index.html?gnb_menu";
		l_link.innerHTML = "문화";
		l_min_link.href = "http://news.chosun.com/culture/index.html?gnb_menu";
		l_min_link.innerHTML = "문화";
		//l_img.src = "http://image.chosun.com/main/201109/title_culture.gif";
	}else if(Getcatid == "6"){
		l_link.href = "http://news.chosun.com/editorials/index.html?gnb_menu";
		l_link.innerHTML = "오피니언";
		l_min_link.href = "http://news.chosun.com/editorials/index.html?gnb_menu";
		l_min_link.innerHTML = "오피니언";
		//l_img.src = "http://image.chosun.com/cs/201003/opinion_tit.gif";
	}else if(Getcatid2 == "G1"){
		l_link.href = "http://news.chosun.com/sports/index.html?gnb_menu";
		l_link.innerHTML = "스포츠";
		l_min_link.href = "http://news.chosun.com/sports/index.html?gnb_menu";
		l_min_link.innerHTML = "스포츠";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_sp.gif";
	}else if(Getcatid3 == "G22"){
		l_link.href = "http://news.chosun.com/ent/movie/index.html?gnb_menu";
		l_link.innerHTML = "영화";
		l_min_link.href = "http://news.chosun.com/ent/movie/index.html?gnb_menu";
		l_min_link.innerHTML = "영화";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_mov.gif";
	}else if(Getcatid2 == "G2"){
		l_link.href = "http://news.chosun.com/ent/index.html?gnb_menu";
		l_link.innerHTML = "연예";
		l_min_link.href = "http://news.chosun.com/ent/index.html?gnb_menu";
		l_min_link.innerHTML = "연예";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_ent.gif";
	}else if(Getcatid == "B"){
		l_link.href = "http://life.chosun.com/index.html";
		l_link.innerHTML = "라이프";
		l_min_link.href = "http://life.chosun.com/index.html";
		l_min_link.innerHTML = "라이프";
	}  else if(Getcatid == "H"){
		l_link.href = "http://news.chosun.com/index.html";
		l_link.innerHTML = "뉴스";
		l_min_link.href = "http://news.chosun.com/index.html";
		l_min_link.innerHTML = "뉴스";
	}
	//document.getElementById('news_logoh1').style.display = "block";
}



// 파라미터 체크
function getParameter(paraName){
	var uri_split = document.location.href.split("?");
	if(uri_split == null || uri_split.length < 2) return null;
	var paraVal = null;
	if(uri_split[1].indexOf("&") >= 0){
		var varList = uri_split[1].split("&");
		for(var i = 0; i < varList.length; i++){
			var varTemp = varList[i].split("=");
			if(varTemp[0] == paraName){
				paraVal = varTemp[1];
				break;
			}
		}
	}else{
		var varList = uri_split[1];
		var varTemp = varList.split("=");
		if(varTemp[0] == paraName){
			paraVal = varTemp[1];
		}
	}
	return paraVal;
}


// google analytics test 2015311
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58940796-1', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');

  ga('create', 'UA-58940796-24', 'auto',{'name':'chosun_total'});
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('chosun_total.send', 'pageview');
