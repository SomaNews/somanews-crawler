// JavaScript Document for chosun.com article top ad (970*90 or 728*90) div.art_ad_top

/*
	2016.03.31 ( �̱�ȣ ���� )
	- ���� �����ڵ�� ����__�������� ��û ����
	- ����, ���ǴϾ��� �����ϰ� �ڵ� ������	

*/

if(/Android|iPad|iPhone|iPod/i.test(navigator.userAgent)){

}else {
	// for pc ad
	if(CatID.substring(0,1) !== "" && CatID.substring(0,3) !== "3N3"){

		if (outlinkReferrer()) {
			
			// �θ�ũ_ �������ĳ����� ���� ���

			// chosun.com
			// 1 ���� / 2 ��ġ / 3 ��ȸ / 4 ���� / 5 ��ȭ / 6 ���ǴϾ� / G ����������
			var GnbAd = CatID.substring(0, 1);
			var GnbAd2 = CatID.substring(0, 2);
			var GnbAd3 = CatID.substring(0, 3);

			if ( GnbAd == '1' ) {
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/e_news@Top1"></iframe>');
			}
			else if ( GnbAd == '2' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- ��ġ
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/p_news@Top1"></iframe>');

			}
			else if ( GnbAd == '3' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- ��ȸ
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/o_news@Top1"></iframe>');

			}
			else if ( GnbAd =='4' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- ����
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/w_news@Top1"></iframe>');

			}
			else if ( GnbAd == '5' ) {

				// JavaScript Document for chosun.com article center up ad(x74) --------------- ��ȭ
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/m_news@Top1"></iframe>');

			}
			else if ( GnbAd == '6' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- ���ǴϾ�
				document.write ('<iframe width=728 height=90 noresize scrolling=no frameborder=0 marginheight=0 marginwidth=0 src="http://cad.chosun.com/RealMedia/ads/adstream_sx.ads/www.chosun.com/news@Top1"></iframe>');

			}
			else if ( GnbAd == 'G' ) {
				
				// JavaScript Document for chosun.com article center up ad(x74) --------------- ����������
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

