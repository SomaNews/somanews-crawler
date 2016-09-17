// JavaScript Document for chosun.com article top ad (970*90 or 728*90) div.art_ad_top

/*
	2016.03.31 ( 이근호 수정 )
	- 광고 지역코드로 수정__마케팅팀 요청 사항
	- 경제, 오피니언형 제외하고 코드 수정됨	

*/

if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){

}else {
	// for pc ad
	if(CatID.substring(0,1) !== "" && CatID.substring(0,3) !== "3N3"){

		if (outlinkReferrer()) {
			
			// 인링크_ 조선닷컴내에서 왔을 경우

			// chosun.com
			// 1 경제 / 2 정치 / 3 사회 / 4 국제 / 5 문화 / 6 오피니언 / G 스포츠연예
			var GnbAd = CatID.substring(0, 1);
			var GnbAd2 = CatID.substring(0, 2);
			var GnbAd3 = CatID.substring(0, 3);

			if ( GnbAd == '1' ) {
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/e_news@Top1"></iframe>');
			}
			else if ( GnbAd == '2' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 정치
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/p_news@Top1"></iframe>');

			}
			else if ( GnbAd == '3' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- 사회
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/o_news@Top1"></iframe>');

			}
			else if ( GnbAd =='4' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 국제
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/w_news@Top1"></iframe>');

			}
			else if ( GnbAd == '5' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- 문화
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/m_news@Top1"></iframe>');

			}
			else if ( GnbAd == '6' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- 오피니언
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Top1"></iframe>');

			}
			else if ( GnbAd == 'G' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- 스포츠연예
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/s_news@Top1"></iframe>');

			}
			else {
				
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Top1"></iframe>');

			}
		}
		else { 

			// JavaScript Document for chosun.com article center up ad(x74) --------------- outlink
			document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/outlink@Top1"></iframe>');

		}
	}
	// for pc ad

}

