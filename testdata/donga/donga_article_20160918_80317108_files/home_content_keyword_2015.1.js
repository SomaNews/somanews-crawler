document.write("<div class='hot_issue'><div id='rolling' ><ol><li id='hot1'><a href='http://news.donga.com/search?query=%EA%B2%BD%EC%A3%BC+%EC%B5%9C%EB%8C%80%EA%B7%9C%EB%AA%A8+%EC%A7%80%EC%A7%84' alt='경주 최대규모 지진' title='경주 최대규모 지진'><strong>1</strong>경주 최대규모 지진</a></li><li id='hot2' style='display:none'><a href='http://news.donga.com/search?query=%ED%83%9C%ED%92%8D+%EB%A7%90%EB%9D%BC%EC%B9%B4%EC%8A%A4' alt='태풍 말라카스' title='태풍 말라카스'><strong>2</strong>태풍 말라카스</a></li><li id='hot3' style='display:none'><a href='http://news.donga.com/search?query=%EA%B0%95%EC%A0%95%ED%98%B8+19%ED%98%B8+%ED%99%88%EB%9F%B0' alt='강정호 19호 홈런' title='강정호 19호 홈런'><strong>3</strong>강정호 19호 홈런</a></li><li id='hot4' style='display:none'><a href='http://news.donga.com/search?query=%EA%B0%A4%EB%9F%AD%EC%8B%9C%EB%85%B8%ED%8A%B87+%EB%A6%AC%EC%BD%9C' alt='갤럭시노트7 리콜' title='갤럭시노트7 리콜'><strong>4</strong>갤럭시노트7 리콜</a></li><li id='hot5' style='display:none'><a href='http://news.donga.com/search?query=%E5%8C%97+5%EC%B0%A8+%ED%95%B5%EC%8B%A4%ED%97%98+%EA%B0%95%ED%96%89' alt='北 5차 핵실험 강행' title='北 5차 핵실험 강행'><strong>5</strong>北 5차 핵실험 강행</a></li><li id='hot6' style='display:none'><a href='http://news.donga.com/search?query=%ED%95%9C%EC%A7%84%ED%95%B4%EC%9A%B4' alt='한진해운' title='한진해운'><strong>6</strong>한진해운</a></li><li id='hot7' style='display:none'><a href='http://news.donga.com/search?query=%ED%8C%A8%ED%84%B0%EC%8A%A8+%EC%9D%B4%ED%83%9C%EC%9B%90+%EC%82%B4%EC%9D%B8+%EC%A7%84%EB%B2%94' alt='패터슨 이태원 살인 진범' title='패터슨 이태원 살인 진범'><strong>7</strong>패터슨 이태원 살인 진범</a></li><li id='hot8' style='display:none'><a href='http://news.donga.com/search?query=%EC%8A%A4%ED%8F%B0%EC%84%9C+%EB%B6%80%EC%9E%A5+%EA%B2%80%EC%82%AC' alt='스폰서 부장 검사' title='스폰서 부장 검사'><strong>8</strong>스폰서 부장 검사</a></li><li id='hot9' style='display:none'><a href='http://news.donga.com/search?query=%ED%9E%90%EB%9F%AC%EB%A6%AC+%ED%81%B4%EB%A6%B0%ED%84%B4' alt='힐러리 클린턴' title='힐러리 클린턴'><strong>9</strong>힐러리 클린턴</a></li><li id='hot10' style='display:none'><a href='http://news.donga.com/search?query=%EC%95%84%EC%9D%B4%ED%8F%B07+%EA%B3%B5%EA%B0%9C' alt='아이폰7 공개' title='아이폰7 공개'><strong>10</strong>아이폰7 공개</a></li><li id='hot11' style='display:none'><a href='http://news.donga.com/search?query=%ED%95%9C%EC%A7%84%ED%95%B4%EC%9A%B4+%EB%B2%95%EC%A0%95%EA%B4%80%EB%A6%AC' alt='한진해운 법정관리' title='한진해운 법정관리'><strong>11</strong>한진해운 법정관리</a></li><li id='hot12' style='display:none'><a href='http://news.donga.com/search?query=NBA' alt='NBA' title='NBA'><strong>12</strong>NBA</a></li><li id='hot13' style='display:none'><a href='http://news.donga.com/search?query=LPGA' alt='LPGA' title='LPGA'><strong>13</strong>LPGA</a></li></ol></div><a href='#' id='searchBtn'><img src='http://image.donga.com/donga2015/images/common/btn_view_sch.gif' alt='기사 바로가기'></a></div>");var hot_id = 2 ;

setInterval ( function(){
    $("#rolling ol li").hide('slide', {direction: 'up'}) ;
    $('#hot' + hot_id).show('slide', {direction: 'down'}) ;
    var thisUrl = $('#hot' + hot_id + ' a').attr('href') ;
    $('#searchBtn').attr('href', thisUrl) ;

    hot_id++ ;
    if ( hot_id > 10) hot_id = 1 ;
}, 4000 ) ;