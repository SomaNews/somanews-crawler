nc_now = new Date()
nc_h=nc_now.getHours() 
nc_n=nc_now.getMinutes()
nc_s=nc_now.getSeconds()
code=nc_h+""+nc_n+""+nc_s;
var nc_ref = document.referrer;
var nc_ref_chk = nc_ref.indexOf("naver.com");


if(nc_ref_chk != -1) { 
adURL = "http://ar.donga.com/RealMedia/ads/adstream_jx.ads/2012.donga.com/news@x02";
adURL = adURL.replace(/@/, "/1" + ((String)(Math.random())).substring (2, 11) + "@");
document.write ("<SCR" + "IPT LANG" + "UAGE='JAVAS" + "CRIPT1.1' SRC='" + adURL + "'></SCR" + "IPT>");
}
else { 
adURL = "http://ar.donga.com/RealMedia/ads/adstream_jx.ads/2012.donga.com/news@x01";
adURL = adURL.replace(/@/, "/1" + ((String)(Math.random())).substring (2, 11) + "@");

document.write ( "<div style='z-index:999993;'>" ) ;
document.write ("<SCR" + "IPT LANG" + "UAGE='JAVAS" + "CRIPT1.1' SRC='" + adURL + "'></SCR" + "IPT>");
document.write ( "</div>" ) ;
}
