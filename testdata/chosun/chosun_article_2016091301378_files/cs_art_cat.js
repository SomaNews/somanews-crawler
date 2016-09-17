// JavaScript Document for chosun.com category id

var TEMP_ID = CatID.substring(0, 1);
var TEMP_ID2 = CatID.substring(0, 2);
var TEMP_ID3 = CatID.substring(0, 3);
var TEMP_ID4 = CatID.substring(0, 4);
var TEMP_ID5 = CatID.substring(0, 5);

var list_addr = "http://news.chosun.com/svc/list_in/list.html?catid="
var list_addr1 = "http://news.chosun.com/svc/list_in/rio_list.html?catid="

			if (TEMP_ID =="1") {
				if (TEMP_ID2 =="11") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">증권ㆍ금융</a>'); }
				else if (TEMP_ID2 == "12") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">부동산</a>'); }
				else if (TEMP_ID2 == "13") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">재테크</a>'); }
				else if (TEMP_ID2 == "14") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">취업·채용·창업</a>'); }
				else if (TEMP_ID2 == "15") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">유통ㆍ소비자</a>'); }
				else if (TEMP_ID2 == "16") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">IT</a>'); }
				else if (TEMP_ID2 == "1S") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">과학</a>'); }
				else if (TEMP_ID2 == "17") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">경제정책</a>'); }
				else if (TEMP_ID2 == "18") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">글로벌경제</a>'); }
				else if (TEMP_ID2 == "19") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">자동차</a>'); }
				else if (TEMP_ID2 == "1A") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">핫경제인</a>'); }
				else if (TEMP_ID2 == "1L") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">기업</a>'); }
				else if (TEMP_ID2 == "1M") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">산업</a>'); }
				else if (TEMP_ID2 == "1W") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">보도자료</a>'); }
				else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=1">경제 일반</a>'); }
				document.write ('<ul class="news_title_cat_sub"><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=2">증권</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=4">부동산</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1A">정책 &middot; 금융</a></li><li><a href="http://biz.chosun.com/svc/list_in/list.html?catid=1C">기업</a></li><li class="sub_line"><a href="http://biz.chosun.com/svc/list_in/list.html?catid=8">위클리비즈</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=1M">산업</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=16">IT</a> / <a href="http://news.chosun.com/svc/list_in/list.html?catid=1S">과학</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=15">유통 &middot; 소비자</a></li><li class="sub_line"><a href="http://news.chosun.com/svc/list_in/list.html?catid=1">경제 일반</a></li><li><a href="http://car.biz.chosun.com/index.html">자동차</a></li><li><a href="http://review.chosun.com/">리뷰</a></li></ul>');
			}
			else if (TEMP_ID =="2") {
				if (TEMP_ID2 =="21") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">국회ㆍ정당</a>'); }
					else if (TEMP_ID2 == "22") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">북한</a>'); }
					else if (TEMP_ID2 == "23") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">정부ㆍ지자체</a>'); }
					else if (TEMP_ID2 == "24") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">청와대</a>'); }
					else if (TEMP_ID2 == "25") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">외교</a>'); }
					else if (TEMP_ID2 == "27") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">정가 말말말(言)</a>'); }
					else if (TEMP_ID2 == "2D") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">통일나눔</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=2">정치 일반</a>'); }
					document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=21">국회 &middot; 정당</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=22">북한</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=23">행정 &middot; 자치</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=25">외교</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=24">청와대</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=2">정치 일반</a></li></ul>');
			}
			else if (TEMP_ID =="3") {
					if (TEMP_ID2 =="31") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">법원·검찰·경찰</a>'); }
					else if (TEMP_ID2 == "32") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">교육ㆍ시험</a>'); }
					else if (TEMP_ID2 == "37") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">환경ㆍ재해</a>'); }
					else if (TEMP_ID2 == "38") { document.write ('<a href="http://weather.chosun.com/">날씨</a>'); }
					else if (TEMP_ID2 == "3A") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">사건ㆍ사고</a>'); }
					else if (TEMP_ID2 == "3B") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">국방</a>'); }
					else if (TEMP_ID2 == "3C") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">교통·관광·항공</a>'); }
					else if (TEMP_ID2 == "3D") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">노동ㆍ복지</a>'); }
					else if (TEMP_ID2 == "3E") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">우리이웃</a>'); }
					else if (TEMP_ID2 == "3F") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">전국뉴스</a>'); }
					else if (TEMP_ID2 == "3N") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">사람들</a>'); }
					else if (TEMP_ID2 == "3S") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">의료ㆍ보건</a>'); }
					else if (TEMP_ID2 == "3W") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">리빙포인트</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=3">사회 일반</a>'); }
					document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/national/metro/index.html">전국뉴스</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=3A">사건 &middot; 사고</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=31">법원 &middot; 검찰 &middot; 경찰</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=32">교육 &middot; 시험</a></li><li class="mb"><a href="http://news.chosun.com/svc/list_in/list.html?catid=3B">국방</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=3">사회 일반</a></li></ul>');
			}
			else if (TEMP_ID =="4") {
					document.write ('');
					if (TEMP_ID2 =="41") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">아시아</a>'); }
					else if (TEMP_ID2 == "42") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">미국ㆍ중남미</a>'); }
					else if (TEMP_ID2 == "43") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">유럽</a>'); }
					else if (TEMP_ID2 == "48") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">대양주</a>'); }
					else if (TEMP_ID2 == "44") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">중동ㆍ아프리카</a>'); }
					else if (TEMP_ID2 == "45") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">국제기구ㆍ회의</a>'); }
					else if (TEMP_ID2 == "47") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">해외화제</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=4">국제 일반</a>'); }
					document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=42">미국 &middot; 중남미</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=41">아시아</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=43">유럽</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=48">대양주</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=44">중동 &middot; 아프리카</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=4">국제 일반</a></li></ul>');
					
			}
			else if (TEMP_ID =="5") {
				if (TEMP_ID2 =="51") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">건강정보</a>'); }
					else if (TEMP_ID2 == "52") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">북스</a>'); }
					else if (TEMP_ID2 == "59") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">미디어</a>'); }
					else if (TEMP_ID2 == "5A") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">종교ㆍ학술</a>'); }
					else if (TEMP_ID2 == "5B") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">문화인물</a>'); }
					else if (TEMP_ID2 == "5C") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">바둑</a>'); }
					else if (TEMP_ID2 == "5D") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">생활ㆍ여성</a>'); }
					else if (TEMP_ID2 == "5F") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">문화가산책</a>'); }
					else if (TEMP_ID2 == "5G") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">전시ㆍ공연</a>'); }
					else if (TEMP_ID2 == "5N") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">디자인</a>'); }
					else if (TEMP_ID2 == "5O") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">오늘의 운세</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=5">문화 일반</a>'); }
					document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=51">건강정보</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=52">북스</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=59">미디어</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=5A">종교 &middot; 학술</a></li><li class="mb"><a href="http://news.chosun.com/svc/list_in/list.html?catid=5G">전시 &middot; 공연</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=5">문화 일반</a></li></ul>');
			}
			else if (TEMP_ID =="6") {
				if  (TEMP_ID2 == "611") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">김대중 칼럼</a>'); }
					else if (TEMP_ID3 == "61E") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">강천석 칼럼</a>'); }
					else if (TEMP_ID3 == "634") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">송희영 칼럼</a>'); }
					else if (TEMP_ID3 == "61W") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">한삼희 칼럼</a>'); }
					else if (TEMP_ID3 == "61I") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">양상훈 칼럼</a>'); }
					else if (TEMP_ID3 == "61N") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">김창균 칼럼</a>'); }
					else if (TEMP_ID3 == "61X") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">최보식 칼럼</a>'); }
					else if (TEMP_ID3 == "61S") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">박두식 칼럼</a>'); }
					else if (TEMP_ID3 == "61j") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">강경희 칼럼</a>'); }
					else if (TEMP_ID3 == "61k") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">주용중 칼럼</a>'); }
					else if (TEMP_ID3 == "61l") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">선우정 칼럼</a>'); }
					else if (TEMP_ID3 == "61J") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">홍준호 칼럼</a>'); }
					else if (TEMP_ID3 == "621") {
						if (TEMP_ID4 == "6211") { document.write ('<a href="' + list_addr + TEMP_ID4 + '&title">朝鮮칼럼 <br>The Column</a>'); }
						else { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">시론ㆍ기고</a>'); }
					}
					else if (TEMP_ID3 == "627") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">조용헌 살롱</a>'); }
					else if (TEMP_ID3 == "629") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">이덕일 사랑</a>'); }
					else if (TEMP_ID3 == "623") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">일사일언</a>'); }
					else if (TEMP_ID3 == "61F") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">태평로</a>'); }
					else if (TEMP_ID3 == "618") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">데스크에서</a>'); }
					else if (TEMP_ID3 == "61U") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">동서남북</a>'); }
					else if (TEMP_ID3 == "62E") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">경제초점</a>'); }
					else if (TEMP_ID3 == "633") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">전문기자칼럼</a>'); }
					else if (TEMP_ID3 == "61G") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">특파원칼럼</a>'); }
					else if (TEMP_ID3 == "613") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">만물상</a>'); }
					else if (TEMP_ID3 == "614") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">기자수첩</a>'); }
					else if (TEMP_ID3 == "61D") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">팔면봉</a>'); }
					else if (TEMP_ID3 == "632") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">해외 칼럼</a>'); }
					else if (TEMP_ID3 == "62G") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">동아시아 칼럼</a>'); }
					else if (TEMP_ID3 == "636") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">차이나 칼럼</a>'); }
					else if (TEMP_ID3 == "62D") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">문화비전</a>'); }
					else if (TEMP_ID3 == "624") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">독자의견</a>'); }
					else if (TEMP_ID3 == "62b") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">발언대</a>'); }
					else if (TEMP_ID3 == "62c") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">아침편지</a>'); }					
					else if (TEMP_ID3 == "616") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">여론조사</a>'); }
					else if (TEMP_ID3 == "61V") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">News Cartoon</a>'); }
					else if (TEMP_ID3 == "63B") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">그것은 이렇습니다</a>'); }
					else if (TEMP_ID3 == "631") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">이규태 유작</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=6&title">사설ㆍ칼럼</a>'); }
					document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=617">사설</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=61">사내칼럼</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62">전문가칼럼</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=621">시론 &middot; 기고</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=61D">팔면봉</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=624">독자의견</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62b">발언대</a></li><li><a href="http://news.chosun.com/svc/list_in/list.html?catid=62c">아침편지</a></li></ul>');
			}
			else if (TEMP_ID =="7") {
				if (TEMP_ID2 =="71") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">조선일보 사고</a>'); }
					else if (TEMP_ID2 == "72") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">조선닷컴 알림</a>'); }
					else if (TEMP_ID2 == "73") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">이벤트공지</a>'); }
					else if (TEMP_ID2 == "74") { document.write ('<a href="' + list_addr + TEMP_ID2 + '&title">바로잡습니다</a>'); }
					else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=7&title">사고</a>'); }
			}
			else if (TEMP_ID =="9") {
			}
			else if (TEMP_ID =="P") {
				document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=1&title">www_test</a>');
			}
			else if (TEMP_ID2 =="G1") {
				if (TEMP_ID3 == "G11") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">야구</a>'); }
				else if (TEMP_ID3 == "G12") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">축구</a>'); }
				else if (TEMP_ID3 == "G13") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">종합</a>'); }
				else if (TEMP_ID3 == "G14") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">핫포토</a>'); }
				else if (TEMP_ID3 == "G1H") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">농구</a>'); }
				else if (TEMP_ID3 == "G1J") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">골프</a>'); }
				else if (TEMP_ID3 == "G1I") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">배구</a>'); }
				else if (TEMP_ID4 == "G19C") { document.write ('<a href="http://news.chosun.com/svc/list_in/rio_photo.html">포토·갤러리</a>'); }
				else if (TEMP_ID3 == "G1Q")  {
						if (TEMP_ID5 == "G1Q11") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">골프</a>'); }
						else if (TEMP_ID5 == "G1Q12") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">근대5종</a>'); }
						else if (TEMP_ID5 == "G1Q13") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">농구</a>'); }
						else if (TEMP_ID5 == "G1Q14") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">럭비</a>'); }
						else if (TEMP_ID5 == "G1Q15") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">레슬링</a>'); }
						else if (TEMP_ID5 == "G1Q16") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">배구</a>'); }
						else if (TEMP_ID5 == "G1Q17") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">배드민턴</a>'); }
						else if (TEMP_ID5 == "G1Q18") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">복싱</a>'); }
						else if (TEMP_ID5 == "G1Q19") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">사격</a>'); }
						else if (TEMP_ID5 == "G1Q1A") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">사이클</a>'); }
						else if (TEMP_ID5 == "G1Q1B") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">수영</a>'); }
						else if (TEMP_ID5 == "G1Q1C") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">승마</a>'); }
						else if (TEMP_ID5 == "G1Q1D") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">양궁</a>'); }
						else if (TEMP_ID5 == "G1Q1E") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">역도</a>'); }
						else if (TEMP_ID5 == "G1Q1F") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">요트</a>'); }
						else if (TEMP_ID5 == "G1Q1G") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">유도</a>'); }
						else if (TEMP_ID5 == "G1Q1H") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">육상</a>'); }
						else if (TEMP_ID5 == "G1Q1I") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">조정</a>'); }
						else if (TEMP_ID5 == "G1Q1J") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">철인3종</a>'); }
						else if (TEMP_ID5 == "G1Q1K") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">체조</a>'); }
						else if (TEMP_ID5 == "G1Q1L") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">축구</a>'); }
						else if (TEMP_ID5 == "G1Q1M") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">카누카약</a>'); }
						else if (TEMP_ID5 == "G1Q1N") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">탁구</a>'); }
						else if (TEMP_ID5 == "G1Q1O") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">태권도</a>'); }
						else if (TEMP_ID5 == "G1Q1P") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">테니스</a>'); }
						else if (TEMP_ID5 == "G1Q1Q") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">펜싱</a>'); }
						else if (TEMP_ID5 == "G1Q1R") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">하키</a>'); }
						else if (TEMP_ID5 == "G1Q1S") { document.write ('<a href="' + list_addr1 + TEMP_ID5 + '&title">핸드볼</a>'); }
						else { document.write ('<a href="http://news.chosun.com/svc/list_in/rio_list.html">올림픽</a>');}
					}
				else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=G1">스포츠 일반</a>'); }
				document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G11">야구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G12">축구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1H">농구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1I">배구</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1J">골프</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G13">스포츠 종합</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G1">전체뉴스</a></li><li><a href="http://news.chosun.com/svc/list_in/rio_list.html">리우올림픽</a></li></ul>');
			}
			else if (TEMP_ID2 =="G2") {
				if (TEMP_ID3 == "G21") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">연예</a>'); }
				else if (TEMP_ID3 == "G22") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">영화</a>'); }
				else if (TEMP_ID3 == "G27") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">TV·방송</a>'); }
				else if (TEMP_ID3 == "G24") { document.write ('<a href="' + list_addr + TEMP_ID3 + '&title">포토</a>'); }
				else { document.write ('<a href="http://news.chosun.com/svc/list_in/list.html?catid=G2">연예 일반</a>'); }
				document.write ('<ul class="news_title_cat_sub"><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G21">연예&middot;음악</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G22">영화</a></li><li><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G2\7">TV &middot;방송 </a></li><li class="sub_line"><a href="http://news.chosun.com/svc/list_in/se_list.html?catid=G2">전체뉴스</a></li><li><a href="http://thestar.chosun.com/">더스타</a></li></ul>');
			}