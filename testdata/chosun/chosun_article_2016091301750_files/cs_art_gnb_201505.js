// JavaScript Document for chosun.com news article gnb 201505

// JavaScript Document for chosun.com GNB

document.write('\
<div class="csh_art_in"> <h2 id="csh_brand"><a href="http://www.chosun.com/index.html"><img src="http://image.chosun.com/main/201505/csh_art_logocsc.png" alt="" class="csh_logo_art_csc"><span class="csh_logo_title">1�� ���ͳݴ��� �������� - </span></a><span class="csh_art_cat"><a id="csh_art_cat_id" href=""></a></span></h2> <div class="csh_login"><a id="logLink" href="https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl=" target="_top">�α���</a> | <a id="memberLink" href="https://membership.chosun.com/join/registUser.jsp?site=chosun" target="_top">ȸ������</a></div></div><div class="csh_art_bg black"> <div class="csh_art_in"><h4 class="hide">�������� �޴�</h4><ul id="csh_menu_id" class="csh_menu"> <li><a href="http://www.chosun.com/index.html" id="cm_news" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_news\');">����</a></li><li><a href="http://news.chosun.com/editorials/index.html" id="cm_opi" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_opinion\');">���ǴϾ�</a></li><li><a href="http://biz.chosun.com/index.html" id="cm_eco" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_economy\');" target="cs_new">����</a></li><li><a href="http://news.chosun.com/sports/index.html" id="cm_spo" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_sports\');">������</a></li><li><a href="http://news.chosun.com/ent/index.html" id="cm_ent" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_ent\');">����</a></li><li><a href="http://life.chosun.com/index.html" id="cm_life" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_life\');">������</a></li><li><a href="http://health.chosun.com/index.html" target="cs_new" id="cm_health" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_health\');">�ǰ�</a></li><li><a href="http://photo.chosun.com/index.html" id="cm_phomo" onclick="ga(\'send\', \'event\', \'GNB\', \'redbar\', \'menu_photovideo\');">����&middot;����</a></li></ul><div class="csh_all_trig"> <a href="javascript:void(0)" onclick="csh_menu_all()" id="csh_all_trig_id" title="�޴� ��ü����" class="">�޴� ��ü����</a> </div><div id="csh_search"> <h4 class="hide">�˻�</h4> <div class="csh_search_inputbox_trig"><a href="javascript:void(0)" onclick="csh_search_open()" id="csh_search_inputbox_trig_id" title="�˻�â ����">�˻�â ����</a></div><div id="csh_search_inputbox_id" class="csh_search_inputbox" style="display:none;"><form method="get" id="id_searchForm" name="id_searchForm" action="http://search.chosun.com/search/total.search" target="_blank" accept-charset="utf-8" onsubmit="goSearch(); return false;"> <fieldset><legend>���հ˻�</legend><span class="InputOutline"><input type="text" value="" class="searchTerm" id="query" name="query" title="�˻��� �Է�" placeholder="�˻�� �Է��ϼ���."></span><input type="submit" alt="�˻�" title="�˻�" class="searchBtn" value="�˻�"><input type="hidden" name="pageconf" id="pageconf" value="total"> </fieldset></form> </div></div><div id="csh_all_id" class="csh_all" style="display:none;"> <h4 class="hide">��ü �޴�</h4> <ul class="csh_all_list"> <li class="dep1"><a href="http://www.chosun.com" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_news\');">����</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_newslist\');">��ü</a></li><li><a href="http://news.chosun.com/politics/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_politics\');">��ġ</a></li><li><a href="http://news.chosun.com/national/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_national\');">��ȸ</a> / <a href="http://news.chosun.com/national/metro/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_national\');">����</a></li><li><a href="http://news.chosun.com/international/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_international\');">����</a></li><li><a href="http://news.chosun.com/culture/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_culture\');">��ȭ</a></li><li class="empty"></li><li><a href="http://news.chosun.com/svc/list_in/list_newsq.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_newsq\');">����Q</a> / <a href="http://thestory.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_infographics\');">�����丮</a></li><li><a href="http://news.chosun.com/svc/list_in/list_inside.html?in_theme=4&in_sitecd=H&in_categ=H1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_why\');">Why</a> / <a href="http://news.chosun.com/inside/track/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_issue\');">�̽�Ʈ��</a></li><li><a href="http://snac.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_card\');">ī�崺��</a> / <a href="http://issue.chosun.com/poll/quiz_list.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_quiz\');">����</a></li><li class="empty"></li><li class="dep1"><a href="http://photo.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">����&middot;����</a></li><li><a href="http://photo.chosun.com/svc/list/photovideo.html?catid=9" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">SeeSun</a> / <a href="http://photo.chosun.com/svc/list/photovideo.html?catid=I" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_photovideo\');">Video C</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://news.chosun.com/editorials/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">���ǴϾ�</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=6" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">��ü</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=61" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�系Į��</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=617" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�缳</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">������Į��</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=621" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�÷�&middot;���</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=613" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">������</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=61D" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�ȸ��</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=624" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�����ǰ�</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62b" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">�߾��</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=62c" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_opinion\');">��ħ����</a></li><li class="empty"></li><li class="dep1"><a href="http://premium.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">�����̾�����</a></li><li><a href="http://issue.chosun.com/issue/timeline_index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">�̽�&amp;</a> / <a href="http://issue.chosun.com/issue/issue_index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">����ȸ���Ʈ</a></li><li><a href="http://writers.chosun.com/" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">����ä��</a></li><li><a href="http://premium.chosun.com/svc/news/plist_newsq.html?catid=W" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_premium\');">�����̺�</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://biz.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">����</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">��ü</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=2" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">����</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=4" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">�ε���</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1A" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">��å&middot;����</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1C" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">���</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=8" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">Weekly Biz</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=1M" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">���</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=16" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">IT</a>&middot;<a href="http://news.chosun.com/svc/list_in/list.html?catid=1S" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">����</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=15" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">����&middot;�Һ���</a></li><li class="empty"></li><li><a href="http://car.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_biz\');">�ڵ���</a></li><li><a href="http://review.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_economy\');">����</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://news.chosun.com/sports/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">������</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">��ü</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G11" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">�߱�</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G12" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">�౸</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G13" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">����</a></li><li class="empty"></li><li class="dep1"><a href="http://news.chosun.com/ent/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">����</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G2" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sports\');">��ü</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G21" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">������</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G22" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">��ȭ</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G27" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">TV/���</a></li><li><a href="http://thestar.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_ent\');">����Ÿ</a></li></ul> <ul class="csh_all_list"> <li class="dep1"><a href="http://life.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">������</a></li><li><a href="http://danmee.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">Ȩ&amp;����</a></li><li><a href="http://fashion.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�м�&middot;��Ƽ</a></li><li><a href="http://travel.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">����</a> / <a href="http://food.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">Ǫ��</a></li><li><a href="http://books.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�Ͻ�</a> / <a href="http://art.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">����&middot;����</a></li><li><a href="http://bike.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">����ũ</a></li><li><a href="http://senior.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�ôϾ�</a></li><li><a href="http://boomup.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�ƽþƿ���</a></li><li><a href="http://newsplus.chosun.com/inside/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�λ��̵�</a> / <a href="http://travel.chosun.com/inside/zine/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_life\');">�ָ��Ű���</a></li><li class="empty"></li><li class="dep1"><a href="http://health.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">�ǰ�</a></li><li><a href="http://health.chosun.com/list.html " target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">��ü</a></li><li><a href="http://health.chosun.com/bestdoctor/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_health\');">����</a></li></ul> <ul class="csh_all_list"> <li class="dep1">�ֿ伭��</li><li><a href="https://members.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">���������</a></li><li><a href="https://members.chosun.com/service/supp/pr_supp_1191_double.jsp" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">������û</a> / <a href="http://srchdb1.chosun.com/pdf/i_service/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">���麸��</a></li><li><a href="http://db.chosun.com/photo" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">�����˻�</a> / <a href="http://db.chosun.com/people/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">�ι��˻�</a></li><li><a href="http://inside.chosun.com/newsletter_new/Newsletter.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">��������</a></li><li><a href="http://newsplus.chosun.com/ranking/scrap/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service1\');">����ũ��</a></li><li class="empty"></li><li><a href="http://news.chosun.com/ranking/list.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">��ŷ����</a></li><li><a href="http://focus.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">��Ŀ��</a></li><li><a href="http://forum.chosun.com/index.html" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">��и���</a></li><li><a href="http://picpen.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">PiCPEN</a></li><li><a href="http://blogs.chosun.com/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">weblog</a></li><li><a href="http://bemil.chosun.com/index.html" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_service2\');">������� ���缼��</a></li></ul> <div class="csh_all_others"> <ul class="csh_all_sns"> <li class="fb"><a href="http://www.facebook.com/chosun" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">���̽���</a></li><li class="tw"><a href="http://twitter.com/Chosun" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">Ʈ����</a></li><li class="gp"><a href="https://plus.google.com/+Chosun/" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">�����÷���</a></li><li class="kas"><a href="https://story.kakao.com/ch/chosunmedia" target="cs_new" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'layer_sns\');">īī�����丮</a></li></ul> <ul class="csh_all_sites"> <li><a href="http://tv.chosun.com/main.html" target="cs_new" class="site_tvcs" title="TV����(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_tvcs\');">TV����</a></li><li><a href="http://biz.chosun.com/index.html" target="cs_new" class="site_csbiz" title="��������(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_biz\');">��������</a></li><li><a href="http://sports.chosun.com/index.htm" target="cs_new" class="site_spocs" title="����������(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_sports\');">����������</a></li><li><a href="http://health.chosun.com/index.html" target="cs_new" class="site_health" title="�ｺ����(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_health\');">�ｺ����</a></li><li><a href="http://pub.chosun.com/index_main.asp" target="cs_new" class="site_cspub" title="����pub(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_pub\');">����pub</a></li><li><a href="http://edu.chosun.com/index.html" target="cs_new" class="site_csedu" title="��������(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_edu\');">��������</a></li><li><a href="http://it.chosun.com/" target="cs_new" class="site_csit" title="IT����(��â)" onclick="ga(\'send\', \'event\', \'GNB\', \'layer\', \'c_it\');">IT����</a></li></ul> <div class="csh_all_close_trig"> <a href="javascript:void(0)" onclick="csh_menu_all()" id="csh_all_close_id" title="��ü���� �޴� �ݱ�">��ü���� �޴� �ݱ�</a> </div></div></div><!-- csh_all_id --></div></div><div id="csh_art_min_id" class="csh_art_min"> <div class="csh_art_in"> <h2 id="csh_min_brand"><a href="http://news.chosun.com/index.html?gnb_logo"><img src="http://image.chosun.com/main/201505/csh_art_logocsc_min.png" alt="" class="csh_logo_art_csc"><span class="csh_logo_title">1�� ���ͳݴ��� �������� - </span></a></h2> <dl id="csh_min_title"> <dd class="prev"><a href="javascript:_getContent(\'prev\')">�������</a></dd> <dd class="cat"><span class="csh_art_cat"><a href="#" id="csh_art_cat_min_id"></a></span></dd> <dt>'+ ArtTitleMin +'</dt> <dd class="cmt_count"><a href="#news_comment_id"></a></dd> <dd class="next"><a href="javascript:_getContent(\'next\')">�������</a></dd> </dl> <div class="csh_all_trig"> <a href="javascript:void(0)" onclick="csh_menu_all_2()" id="csh_all_trig_id_2" title="�޴� ��ü����" class="">�޴� ��ü����</a> </div><ul class="csh_min_sns"> <li class="fb"><a href="javascript:facebookOpen()">���̽��� ����</a></li><li class="tw"><a href="javascript:twitterOpen()">Ʈ���� ����</a></li><li class="gp"><a href="javascript:googleplusOpen()">�����÷��� ����</a></li><li class="kas"><a href="javascript:kakaostoryOpen()">īī�����丮 ����</a></li></ul> </div><div class="c"></div></div>\
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

	// 100������� ��ũ��
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

//========== ��Ű�� ó�� �Լ� S
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
//========== ��Ű�� ó�� �Լ� E

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
		var pagesource = "<br /><br />[��ó] �� ���� �������Ŀ��� �ۼ��� ��� �Դϴ�";
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

var search_word;/*ǥ�� �� �˻����*/
var s_w_count;
var ArtID;
//�˻�����
function goSearch() {
             var f = document.getElementById('id_searchForm');

             if(f.query.value == ""){
                          alert("�˻�� �Է��ϼ���.");
                          f.query.focus();
                          return false;
             }

             document.charset = 'utf-8';
             f.submit();
             document.charset = 'euc-kr';
}


//�α���
function loginFrame () {
	//������ URL
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

	//�α��ο��� - ��Ű�� Ȯ��
	if (GetAuthCookie('SMSESSION')=="" || GetAuthCookie('SMSESSION') == "LOGGEDOFF" || GetAuthCookie('SM_USER') =="") {
		logLink.href = login_url;
		logLink.innerHTML = "�α���";
		memberLink.href = regist_url;
		memberLink.innerHTML = "ȸ������";
	}
	else if (GetAuthCookie('dz_nm')=="" || GetAuthCookie('dz_info')=="") {
	var relogin_url = "https://membership.chosun.com/login/protect_sso/sso_user_info.jsp?returl="+returl;
		parent.location.href = relogin_url;
	} else {
		logLink.href = logout_url;
		logLink.innerHTML = "�α׾ƿ�";
		memberLink.href = join_url;
		memberLink.innerHTML = "��������";
	}
	return logStr;
}
loginFrame();

/* ���� */
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
	// �ｺ, ���俵�� �߰� �ʿ�
}else{
	document.getElementById('cm_news').className = "current";
}
if(CatID){
	var l_link = document.getElementById('csh_art_cat_id');
	var l_min_link = document.getElementById('csh_art_cat_min_id');
	//var l_img = document.getElementById('Catlogo_img');
	if(Getcatid == "1"){
		l_link.href = "http://biz.chosun.com/index.html?gnb_menu";
		l_link.innerHTML = "����";
		l_min_link.href = "http://biz.chosun.com/index.html?gnb_menu";
		l_min_link.innerHTML = "����";
		//l_img.src = "http://image.chosun.com/main/201109/title_economy.gif";
	}else if(Getcatid == "2"){
		l_link.href = "http://news.chosun.com/politics/index.html?gnb_menu";
		l_link.innerHTML = "��ġ";
		l_min_link.href = "http://news.chosun.com/politics/index.html?gnb_menu";
		l_min_link.innerHTML = "��ġ";
		//l_img.src = "http://image.chosun.com/main/201109/title_politics.gif";
	}else if(Getcatid2 == "3F"){
		l_link.href = "http://news.chosun.com/national/metro/index.html?gnb_menu";
		l_link.innerHTML = "��������";
		l_min_link.href = "http://news.chosun.com/national/metro/index.html?gnb_menu";
		l_min_link.innerHTML = "��������";
		//l_img.src = "http://image.chosun.com/main/201309/title_country.gif";
	}else if(Getcatid == "3"){
		l_link.href = "http://news.chosun.com/national/index.html?gnb_menu";
		l_link.innerHTML = "��ȸ";
		l_min_link.href = "http://news.chosun.com/national/index.html?gnb_menu";
		l_min_link.innerHTML = "��ȸ";
		//l_img.src = "http://image.chosun.com/main/201109/title_society.gif";
	}else if(Getcatid == "4"){
		l_link.href = "http://news.chosun.com/international/index.html?gnb_menu";
		l_link.innerHTML = "����";
		l_min_link.href = "http://news.chosun.com/international/index.html?gnb_menu";
		l_min_link.innerHTML = "����";
		//l_img.src = "http://image.chosun.com/main/201109/title_international.gif";
	}else if(Getcatid == "5"){
		l_link.href = "http://news.chosun.com/culture/index.html?gnb_menu";
		l_link.innerHTML = "��ȭ";
		l_min_link.href = "http://news.chosun.com/culture/index.html?gnb_menu";
		l_min_link.innerHTML = "��ȭ";
		//l_img.src = "http://image.chosun.com/main/201109/title_culture.gif";
	}else if(Getcatid == "6"){
		l_link.href = "http://news.chosun.com/editorials/index.html?gnb_menu";
		l_link.innerHTML = "���ǴϾ�";
		l_min_link.href = "http://news.chosun.com/editorials/index.html?gnb_menu";
		l_min_link.innerHTML = "���ǴϾ�";
		//l_img.src = "http://image.chosun.com/cs/201003/opinion_tit.gif";
	}else if(Getcatid2 == "G1"){
		l_link.href = "http://news.chosun.com/sports/index.html?gnb_menu";
		l_link.innerHTML = "������";
		l_min_link.href = "http://news.chosun.com/sports/index.html?gnb_menu";
		l_min_link.innerHTML = "������";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_sp.gif";
	}else if(Getcatid3 == "G22"){
		l_link.href = "http://news.chosun.com/ent/movie/index.html?gnb_menu";
		l_link.innerHTML = "��ȭ";
		l_min_link.href = "http://news.chosun.com/ent/movie/index.html?gnb_menu";
		l_min_link.innerHTML = "��ȭ";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_mov.gif";
	}else if(Getcatid2 == "G2"){
		l_link.href = "http://news.chosun.com/ent/index.html?gnb_menu";
		l_link.innerHTML = "����";
		l_min_link.href = "http://news.chosun.com/ent/index.html?gnb_menu";
		l_min_link.innerHTML = "����";
		//l_img.src = "http://image.chosun.com/main/201003/spn/chosun_title_ent.gif";
	}else if(Getcatid == "B"){
		l_link.href = "http://life.chosun.com/index.html";
		l_link.innerHTML = "������";
		l_min_link.href = "http://life.chosun.com/index.html";
		l_min_link.innerHTML = "������";
	}  else if(Getcatid == "H"){
		l_link.href = "http://news.chosun.com/index.html";
		l_link.innerHTML = "����";
		l_min_link.href = "http://news.chosun.com/index.html";
		l_min_link.innerHTML = "����";
	}
	//document.getElementById('news_logoh1').style.display = "block";
}



// �Ķ���� üũ
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
