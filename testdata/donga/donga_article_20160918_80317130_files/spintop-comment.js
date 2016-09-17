var spinTopUrl = "http://spintop.donga.com/comment?jsoncallback=?" ;
var spinTopMyUrl = "http://spintop.donga.com/comment/my?jsoncallback=?" ;
var spinTopFavoriteUrl = "http://spintop.donga.com/favorite?jsoncallback=?" ;
var spinTopSnsConnectUrl = "http://spintop.donga.com/connect" ;
var spinTopListSort = "date" ;
var spinTopFirstFocus = false ;
var spinTopLogined = false ;
var spinTopLoginSite = -1 ;

var spinTopMaxLength = 150;
            
function _jsPageLinkAct ( page, etc )
{
    _spinTop (spinTopParams, page, 1 ) ;
    return false ;
}
function _spinTopError ( msg )
{
    if ( msg == "NeedLogin" )
    {
        alert ( '로그인이 필요합니다.') ;
    }
    if ( msg == "Participated" )
    {
        alert ( '이미 참여 하셨습니다.') ;
    }
    if ( msg == "Blockedcontent" )
    {
        alert ( '비속어나 금지어가 사용되었습니다. ') ;
    }
    if ( msg == "Successiveerror" )
    {
        alert ( '연속해서 3회까지만 댓글 작성이 가능합니다.') ;
    }
    else
    {
        console.log (msg) ;
    }
    
}

function _spinTopWriteReplyOn(site, newsid, cidx, refresh )
{
    var res = cidx.split("_"); 
    var cid = res[0] ;

    if ( refresh == 0 ) $('#spinTopList_'+ cidx).toggle() ;
    if ( $('#spinTopList_'+ cidx).css('display') == 'block' )
    {
        $.getJSON( spinTopUrl, {
            m: "replylist" ,
            p3: site ,
            p4: newsid ,
            p6: spinTopParams['newsurl'] ,
            p7: spinTopParams['newstitle'] ,
            p8: spinTopParams['newsimage'] ,
            cid: cid
        })  
        .done ( function( result ) {   
            $('#spinTopList_'+ cidx).html( result ) ;
        })
        .error ( function( result ) {   
            _spinTopError ( result ) ;
        });
    }
    
    return false;
}

function _spinTopRefer(site, newsid, cid, refer)
{
    $.getJSON( spinTopUrl, {
        m: "incr" ,
        p3: site ,
        p4: newsid ,
        cid: cid ,
        pid: refer,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val()            
    })  
    .done ( function( result ) {   
        if ( result == 'ok' )
        {
            $('#spinTop'+ refer + cid).html( parseInt($('#spinTop'+ refer + cid).html()) + 1) ;
        }
        else _spinTopError(result) ;
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    return false;    
}
function _spinTopDelete(site, newsid, cid, pnewsid, pcid)
{
    $.getJSON( spinTopUrl, {
        m: "delete" ,
        p3: site ,
        p4: newsid ,
        cid: cid,
        pcid: pcid,
        pnewsid: pnewsid,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val() 
    })  
    .done ( function( result ) {   
        if ( result == 'ok' ) 
        {
            alert('삭제하시겠습니까?');
            if ( cid == pcid ) 
            {
                _spinTop (spinTopParams) ;
            }
            else
            {
                _spinTopWriteReplyOn( site, pnewsid, pcid, 1 ) ;
                $('#spinTopReplyCnt_' + pcid).html( parseInt ( $('#spinTopReplyCnt_' + pcid).html() ) - 1) ;
                
                if (  $('#spinTopList_'+ pcid + '_best').length > 0 ) 
                {
                    _spinTopWriteReplyOn( site, pnewsid, pcid + '_best', 1 ) ;
                    $('#spinTopReplyCnt_' + pcid + '_best').html( parseInt ( $('#spinTopReplyCnt_' + pcid + '_best').html() ) - 1) ;                    
                }
            }
        }
        else _spinTopError(result) ;
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    return false;    
}

function _spinTopMyDelete(sns, userid, site, newsid, cid, pnewsid, pcid)
{
    $.getJSON( spinTopMyUrl, {
        m: "delete" ,
        p0: sns,
        p1: userid,
        p3: site ,
        p4: newsid ,
        cid: cid,
        pcid: pcid,
        pnewsid: pnewsid,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val() 
    })  
    .done ( function( result ) {   
        if ( result == 'ok' ) 
        {
            alert('삭제하시겠습니까?');
            location.reload();
        }
        else _spinTopError(result) ;
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    return false;    
}

function _spinTopSubmit()
{
    $.getJSON( spinTopUrl, {
        m: "publish" ,
        p3: $('#spinTopP3').val() ,
        p4: $('#spinTopP4').val() ,
        p6: $('#spinTopP6').val() ,
        p7: $('#spinTopP7').val() ,
        p8: $('#spinTopP8').val() ,
        p9: $('#spinTopP9').val() ,
        fc: $('#spinTop_sns_check_facebook').attr("checked") ,
        tc: $('#spinTop_sns_check_twitter').attr("checked") ,
        mc: $('#spinTop_sns_check_kakao').attr("checked") ,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val()    
    })  
    .done ( function( result ) {

    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });
        
    $.getJSON( spinTopUrl, {
        m: "insert" ,
        p3: $('#spinTopP3').val() ,
        p4: $('#spinTopP4').val() ,
        p6: $('#spinTopP6').val() ,
        p7: $('#spinTopP7').val() ,
        p8: $('#spinTopP8').val() ,
        p9: $('#spinTopP9').val() ,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val()    
    })  
    .done ( function( result ) {   
        if ( result == 'ok' ) 
        {
            _spinTop (spinTopParams,1,1) ;
        }
        else if ( result == 'eventok' ) 
        {
            _spinTop (spinTopParams,1,1) ;
            _spinTopEvent() ;
        }
        else 
        {
            _spinTopError(result) ;
        }
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    return false;
}


function _spinTopReplySubmit(cid)
{

    $.getJSON( spinTopUrl, {
        m: "publish" ,
        p3: $('#'+cid+'_spinTopP3').val() ,
        p4: $('#'+cid+'_spinTopP4').val() ,
        p6: $('#'+cid+'_spinTopP6').val() ,
        p7: $('#'+cid+'_spinTopP7').val() ,
        p8: $('#'+cid+'_spinTopP8').val() ,
        p9: $('#'+cid+'_spinTopP9').val() ,
        fc: $('#spinTop_sns_check_facebook').val() ,
        tc: $('#spinTop_sns_check_twitter').val() ,
        mc: $('#spinTop_sns_check_kakao').val() ,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val()    
    })  
    .done ( function( result ) {   
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    $.getJSON( spinTopUrl, {
        m: "replyinsert" ,
        p3: $('#'+cid+'_spinTopP3').val() ,
        p4: $('#'+cid+'_spinTopP4').val() ,
        p6: $('#'+cid+'_spinTopP6').val() ,
        p7: $('#'+cid+'_spinTopP7').val() ,
        p8: $('#'+cid+'_spinTopP8').val() ,
        p9: $('#'+cid+'_spinTopP9').val() ,
        cid: $('#'+cid+'_spinTopCID').val() ,
        sigCurrent: $('#sigCurrent').val() ,
        sigPos: $('#sigPos').val() ,
        sigSize: $('#sigSize').val() ,
        sigToken: $('#sigToken').val()    
    })  
    .done ( function( result ) {   
        if ( result == 'ok' ) 
        {
            _spinTopWriteReplyOn( $('#'+cid+'_spinTopP3').val(), $('#'+cid+'_spinTopP4').val(), cid, 1 ) ;
            $('#spinTopReplyCnt_'+cid).html( parseInt( $('#spinTopReplyCnt_'+cid).html() ) + 1 ) ;
            if (  $('#spinTopList_'+ cid + '_best').length > 0 ) 
            {
                 _spinTopWriteReplyOn( $('#'+cid+'_spinTopP3').val(), $('#'+cid+'_spinTopP4').val(), cid + '_best', 1 ) ;
                 $('#spinTopReplyCnt_'+cid + '_best').html( parseInt( $('#spinTopReplyCnt_'+cid + '_best').html() ) + 1 ) ; 
            }             
        }
        else _spinTopError(result) ;
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });

    return false;
}

function _spinTop ( params, p, anchor )
{
    $.getJSON( spinTopUrl, {
        m: "bestloginformlist" ,
        l: params['length'] ,
        p: p ,
        p3: params['site']  ,
        p4: params['newsid'] ,
        p6: params['newsurl'] ,
        p7: params['newstitle']  ,
        p8: params['newsimage'] ,
        s: spinTopListSort
    })  
    .done ( function( result ) {   
        //spinTopFirstFocus = false;
        $('#spinTopLayer').html(result) ;
        if (anchor == '1')
        {
            _spinTopanchorLink() ;
        }
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });
}    

function _spinTopSetListSort (sort)
{
    var obj = $(".spinTopLayerListSort a span").eq(sort) ;
    spinTopListSort = obj.html() ;

    obj.addClass("on") ;
    _spinTop ( spinTopParams, 1, 0 ) ;
    return false;
}
function _spinTopDelCookie( name ) 
{
    $.getJSON( spinTopSnsConnectUrl + "?jsoncallback=?", {
        e: name
    })  
    .done ( function( result ) {  
        $("#spinTop_" + name).removeClass("on"); 
        _spinTop (spinTopParams, 1, 0 ) ;        
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });
}
 
function _spinTopChkCookie(name)
{
    var cname = name + '=';
    var dc = document.cookie;
    var val = '';
        
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(';', begin);
            if (end == -1) end = dc.length;
            val += unescape(dc.substring(begin, end));
        }
    }
    return val;
}

function _spinTopChkLogin()
{
    var snsSites = new Array(3) ;
    snsSites[1] = 'facebook' ;
    snsSites[2] = 'twitter' ;
    snsSites[3] = 'kakao' ;
    
    var thisLoginSite = -1 ;
    spinTopLogined = false;


    for ( i=1;i<=snsSites.length;i++ )
    {
        logName = "sns_" + snsSites[i] ;
        chkName = "sns_check_" + snsSites[i] ;

        if ( _spinTopChkCookie ('sns_login') ==  snsSites[i]  )
        {
            //spinTopFirstFocus = true;
            $('#spinTopP9').removeAttr('readonly');
            $('.spinTopLayerReplyArea').removeAttr('readonly');
            $("#spinTop_" + logName).addClass("on"); 
            $("#spinTop_" + chkName).parent().addClass("on"); 
            $('#spinTopLayerLogTxt').removeClass("on") ;
            $('#spinTopLayerLogoutBtn_'+i).attr("style", "display:block");
            spinTopLogined = true;
            thisLoginSite = i ;
        }
        else
        {
            $("#spinTop_" + logName).removeClass("on"); 
            $("#spinTop_" + chkName).parent().removeClass("on"); 
            $('#spinTopLayerLogoutBtn_'+i).attr("style", "display:none");
        }
    }
 
    if ( _spinTopChkCookie ('dongauserid') != "" ) 
    {
        //spinTopFirstFocus = true;
        $('#spinTopP9').removeAttr('readonly');
        $('.spinTopLayerReplyArea').removeAttr('readonly');
        $("#spinTop_sns_donga").addClass("on"); 
        $('#spinTopLayerLogTxt').removeClass("on") ;
        $('#spinTopLayerLogoutBtn').attr("style", "display:block"); 
        spinTopLogined = true;
        thisLoginSite = 0 ;
    }
    else 
    {
        $("#spinTop_sns_donga").removeClass("on"); 
        $('#spinTopLayerLogoutBtn').attr("style", "display:none");
        $('#spinTop_sns_donga').find("a").attr("href", $('#spinTopNativeLoginUrl').html() ); 
    }
    
    if ( thisLoginSite != spinTopLoginSite && spinTopLoginSite != -1 )
    {
        _spinTop (spinTopParams, 1, 0 ) ;
        spinTopLoginSite = thisLoginSite ;
    }
    else if ( spinTopLoginSite == -1 && spinTopLogined )
    {
        try {
            _spinTop (spinTopParams, 1, 0 ) ;
            spinTopLoginSite = thisLoginSite ;    
        }  catch(e) {}
    }
    else if ( spinTopLogined )
    {
        spinTopLoginSite = thisLoginSite ;
    }

}

function _spinTopWinOpen (idx, logout)
{
    if ( idx == 1 ) // facebook
    {
        if ( _spinTopChkCookie ( 'sns_login') == "facebook" )
        {
             _spinTopDelCookie( 'sns_facebook' )  ;
             _spinTopDelCookie( 'sns_login' )  ;
        }
        else
        {
            if ( logout == 0 )
            {
                _spinTopDelCookie( 'sns_facebook' )  ;
                _spinTopDelCookie( 'sns_login' )  ;                
            }
            else
            {
              var snsWin1 = window.open( spinTopSnsConnectUrl + "?sid=1", "SNSConWin", "width=1000, height=700, scrollbars=yes, resizable=yes");
            }
        }
    }
    else if ( idx == 2 ) // twitter
    {
        if ( _spinTopChkCookie ( 'sns_login') == "twitter" )
        {
             _spinTopDelCookie( 'sns_twitter' )  ;
             _spinTopDelCookie( 'sns_login' )  ;             
        }
        else
        {
            if ( logout == 0 )
            {
                _spinTopDelCookie( 'sns_twitter' )  ;
                 _spinTopDelCookie( 'sns_login' )  ;                
            }
            else
            {
                var snsWin2 = window.open( spinTopSnsConnectUrl + "?sid=2", "SNSConWin", "width=1000, height=700, scrollbars=yes, resizable=yes");
            }
        }
    }
    else if ( idx == 3 ) // kakao
    {
        if ( _spinTopChkCookie ( 'sns_login') == "kakao" )
        {
             _spinTopDelCookie( 'sns_kakao' )  ;
             _spinTopDelCookie( 'sns_login' )  ;             
        }
        else
        {
            if ( logout == 0 )
            {
                _spinTopDelCookie( 'sns_kakao' )  ;
                 _spinTopDelCookie( 'sns_login' )  ;                
            }
            else
            {
                var snsWin2 = window.open( spinTopSnsConnectUrl + "?sid=3", "SNSConWin", "width=1000, height=700, scrollbars=yes, resizable=yes");
            }
        }
    }
    return false;
}  

function _spinTopChkSize()
{
    try{
        if (spinTopLogined)
        {

            var text = $('#spinTopP9').val();
            var textLength = text.length;
    
            if(textLength > spinTopMaxLength)
            {
                alert( spinTopMaxLength + '자가 초과되었습니다.');
                $('#spinTopP9').blur() ;
                $('#spinTopP9').val( text.substring(0,spinTopMaxLength) );
                $('#spinTopP9').focus() ;
            }
            else
            {
                textSize = textLength ;
                $('#contextsize').html(textSize) ;
            }
        }
    } catch(e) {}
}

function _spinTopListCount(div, site, newsid, fn)
{
    $.getJSON( spinTopUrl, {
        m: "count" ,
        p3: site  ,
        p4: newsid 
    })  
    .done ( function( result ) {   
        $('#' + div).html(result) ;
        if ( fn ) setTimeout( fn(result), 0 )   ;
    })
    .error ( function( result ) {   
        _spinTopError ( result ) ;
    });
}

function _spinTopP9Focus()
{
    if ( !spinTopFirstFocus )
    {
        if ( !spinTopLogined ) 
        {
            alert('로그인이 필요합니다.') ;
            $('#spinTopLayerLogTxt').addClass("on") ;    
            return ;
        }
        else
        {
            $('#spinTopP9').val ('') ;
        }
        spinTopFirstFocus = true;
        $('#spinTopP9').removeAttr('readonly');        
        $('#spinTopLayerLogTxt').removeClass("on") ;        
    }
}

function _spinTopReplyFocus()
{
    if ( !spinTopFirstFocus )
    {
        if ( !spinTopLogined ) 
        {        
            alert('로그인이 필요합니다.') ;
        }
    }
}

function _spinTopanchorLink()
{
    $('html,body').animate({scrollTop: $("#anchorLink").offset().top},'slow');
}

function _spinTopPopup(url, name, width, height) 
{
    window.open(url, name, "width="+width+", height="+height+", scrollbars=yes, resizable=yes, location=no");
    return false;
}

function _spinTopEvent() 
{

}

function _spinTopLike ( params )
{
    $.getJSON( spinTopUrl, {
        m: "like" ,
        p3: params['site']  ,
        p4: params['newsid'] ,
        p6: params['newsurl'] ,
        p7: params['newstitle']  ,
        p8: params['newsimage'] 
    })  
    .done ( function( result ) {   
        var thisRes = $.parseJSON(result);
        if ( thisRes['HEAD']['STATUS'] == 'ok' ) 
        {
            try {
                var cnt = Number( $('#likeCnt').html() ) + 1 ;
                $('#likeCnt').html(cnt) ;
            }  catch(e) {}
            alert('추천되었습니다.') ;
        }
        else alert('이미 추천하였습니다.') ;
    })
    .error ( function( result ) {
        alert('이미 추천하였습니다.') ;
    });
    
    return false;
}    

function _spinTopDisLike ( params )
{
    $.getJSON( spinTopUrl, {
        m: "dislike" ,
        p3: params['site']  ,
        p4: params['newsid'] ,
        p6: params['newsurl'] ,
        p7: params['newstitle']  ,
        p8: params['newsimage'] 
    })  
    .done ( function( result ) {   
        var thisRes = $.parseJSON(result);
        if ( thisRes['HEAD']['STATUS'] == 'ok' ) 
        {
            try {
                var cnt = Number( $('#dislikeCnt').html() ) + 1 ;
                $('#dislikeCnt').html(cnt) ;
            }  catch(e) {}
            alert('비추천되었습니다.') ;
        }
        else alert('이미 비추천하였습니다.') ;
    })
    .error ( function( result ) {
        alert('이미 비추천하였습니다.') ;
    });
    
    return false;
} 
function _spinTopViewCount ( params )
{
    $.getJSON( spinTopUrl, {
        m: "viewcount" ,
        p3: params['site']  ,
        p4: params['newsid'] ,
        p6: params['newsurl'] ,
        p7: params['newstitle']  ,
        p8: params['newsimage'] 
    })  
    .done ( function( result ) { 
    })
    .error ( function( result ) {
         alert('viewcount error') ;
    });
    
    return false;
}
function _spinTopFavorite ( params , dividx )
{
    if ( !spinTopLogined ) 
    {        
        alert('로그인이 필요합니다.') ;
        return ;
    }
    else { 
        $.getJSON( spinTopFavoriteUrl, {
            m: "insert" ,
            p2: params['program_title']  ,
            p3: params['newsurl'] ,
            p4: params['newsimage'] ,
            prod: params['prod']  , 
            sid: params['service'] ,
            idx: params['program_cid']
        })  
        .done ( function( result ) {   
            var thisRes = $.parseJSON(result);
            if ( thisRes['HEAD']['STATUS'] == 'ok' ) 
            {
                //alert('구독되었습니다.') ;
                $('#favorite'+dividx).hide();
                $('#disfavorite'+dividx).show();
                
                var favoriteid = thisRes['DATA']['favoriteid'] ;
                var p = thisRes['DATA']['product'] ;
                var s = thisRes['DATA']['service'] ;
                var t = thisRes['DATA']['target'] ;
                
                var subcookie = p+'_'+s+'_'+t;
                $.cookie(subcookie, favoriteid, { expires: 1, domain: 'donga.com' });  
    
            }
            else if ( thisRes['HEAD']['STATUS'] == 'exist' ) {  alert('이미 구독하였습니다.') ; } 
        })
        .error ( function( result ) {
            alert('이미 구독하였습니다..') ;
        });
    }
    return false;
}
function _spinTopDisFavorite ( params, dividx )
{
    if ( !spinTopLogined ) 
    {        
        alert('로그인이 필요합니다.') ;
        return ;
    }
    else { 
        var p = params['prod'];
        var s = params['service'];
        var t = params['program_cid'];
        var subcookie = p+'_'+s+'_'+t; 
        var favoriteid = params['favoriteid'];
        if( favoriteid == "") { 
            favoriteid = $.cookie(subcookie)  ;
        }
        if( favoriteid != "") { 
            $.getJSON( spinTopFavoriteUrl, {
                m: "delete" ,
                prod: params['prod']  , 
                sid: params['service'] ,
                idx: favoriteid
            })  
            .done ( function( result ) {   
                var thisRes = $.parseJSON(result);
                if ( thisRes['HEAD']['STATUS'] == 'ok' ) 
                {
                    $('#favorite'+dividx ).show();
                    $('#disfavorite'+dividx ).hide();
                    $.cookie(subcookie, null);
                }
                else if ( thisRes['HEAD']['STATUS'] == 'exist' ) {  alert('이미 구독해지하였습니다.') ; }
            })
            .error ( function( result ) {
                alert('이미 구독해지하였습니다..') ;
            });
        }
    }
    return false;
}
function _spinTopLogOut ( sid )
{
    $.getJSON( "http://spintop.donga.com/connect", {
        sid: sid ,
        n: 1
    })  
    .done ( function( result ) {} )
    .error ( function( result ) {} )
    ;
    return false;
} 

$(document).ready( function() {
    setInterval ( "_spinTopChkLogin()", 300 ) ;
    setInterval ( "_spinTopChkSize()", 300 ) ;    
}) ;