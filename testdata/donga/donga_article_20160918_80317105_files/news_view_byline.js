var d = new Date();
var n = d.getSeconds();
n = n % 2 ;

var adHtml = '' ;

adHtml += "<span class='icon_ad'>AD</span>" ;
adHtml += "<div class='sub_cont_AD07'>" ;

adHtml += "<ul>" ;


adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle' alt='TextBanner'></a></iframe></li>" ;

if ( n == 0 ) 
{
    adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle1'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle1'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle1' alt='TextBanner'></a></iframe></li>" ;
    adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle2'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle2'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle2' alt='TextBanner'></a></iframe></li>" ;
}
else
{
    adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle2'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle2'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle2' alt='TextBanner'></a></iframe></li>" ;
    adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle1'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle1'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle1' alt='TextBanner'></a></iframe></li>" ;
}

adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Middle3'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Middle3'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Middle3' alt='TextBanner'></a></iframe></li>" ;

adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Bottom'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Bottom'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Bottom' alt='TextBanner'></a></iframe></li>" ;

//adHtml += "<li><iframe width='580' height='20' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' src='http://ar.donga.com/RealMedia/ads/adstream_sx.ads/2012.donga.com/news@Bottom1'><a href='http://ar.donga.com/RealMedia/ads/click_nx.ads/2012.donga.com/news@Bottom1'><img src='http://ar.donga.com/RealMedia/ads/adstream_nx.ads/2012.donga.com/news@Bottom1' alt='TextBanner'></a></iframe></li>" ;

adHtml += "</ul>" ;
adHtml += "</div>" ;

document.write(adHtml) ;