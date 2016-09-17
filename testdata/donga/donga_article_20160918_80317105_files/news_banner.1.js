document.write('<div class=\'notice_banner\'><div class=\'NewsBanner\' style=\'display:block;\'><a href=\'http://bigtoon.donga.com/?user_from=donga\' taget=\'_blank\'><img src=\'http://dimg.donga.com/carriage/NEWS/images/news_banner/1460965450_news_banner_image_0.jpg\' width=\'260\' height=\'100\'></a></div><div class=\'NewsBanner\' style=\'display:none;\'><a href=\'http://news.donga.com/3/all/20160912/80268449/1\' taget=\'_blank\'><img src=\'http://dimg.donga.com/carriage/NEWS/images/news_banner/1473745467_news_banner_image_1.jpg\' width=\'260\' height=\'100\'></a></div><div class=\'NewsBanner\' style=\'display:none;\'><a href=\'http://news.donga.com/3/all/20160912/80269871/1\' taget=\'_blank\'><img src=\'http://dimg.donga.com/carriage/NEWS/images/news_banner/1473745467_news_banner_image_5.jpg\' width=\'260\' height=\'100\'></a></div><div class=\'NewsBanner\' style=\'display:none;\'><a href=\'http://photo.donga.com/list.php?category=0047\' taget=\'_blank\'><img src=\'http://dimg.donga.com/carriage/NEWS/images/news_banner/1360111581_news_banner_image_5.jpg\' width=\'260\' height=\'100\'></a></div><div class=\'NewsBanner\' style=\'display:none;\'><a href=\'http://news.donga.com/Series/70040100000215\' taget=\'_blank\'><img src=\'http://dimg.donga.com/carriage/NEWS/images/news_banner/1471396103_news_banner_image_1.gif\' width=\'260\' height=\'100\'></a></div></div><p class=\'p_btn\'><a href=\'#\' id=\'btn_left\'><img src=\'http://image.donga.com/donga2015/images/common/btn_p_btn_left.gif\' width=\'14\' height=\'14\' alt=\'prev\'></a><a href=\'#\' id=\'btn_right\'><img src=\'http://image.donga.com/donga2015/images/common/btn_p_btn_right.gif\' width=\'15\' height=\'14\' alt=\'next\'></a></p>');
var bannerCurPos = 0 ;
var bannerStop = false ;

function bannerMove(m)
{
    bannerCurPos = ( bannerCurPos + m ) % 5 ;

    $(".NewsBanner").hide() ;
    $(".NewsBanner").eq(bannerCurPos).show() ;
}

$(".p_btn").mouseover( function(){
    bannerStop = true ;
});

$(".p_btn").mouseout( function(){
    bannerStop = false ;
});

$("#btn_left").click( function(){
    bannerMove(-1) ;
    return false;
});

$("#btn_right").click( function(){
    bannerMove(1) ;
    return false;
});

setInterval ( "if (!bannerStop) bannerMove(1);", 3000 ) ;