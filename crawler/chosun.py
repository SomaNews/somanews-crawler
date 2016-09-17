import time
import re
from pyquery import PyQuery as pq
import logging
from crawler import utils as ut


def parseNewsHtml(newshtml):
    d = pq(newshtml)

    # description
    subtitleHtml = d('.news_subtitle').html()
    if subtitleHtml:
        description = d('.news_subtitle').html().replace('<br/>', '\n').strip()
    else:
        description = ''

    # publishedAt
    timeStr = d('.news_date').text()
    timeStr = re.match(r'입력 : (\d+.\d+.\d+ \d+:\d+)', timeStr).group(1)
    publishedAt = time.mktime(time.strptime(timeStr, "%Y.%m.%d %H:%M"))

    return {
        'title': d('.news_title_text h1').text(),
        'author': d('.news_title_author').text(),
        'provider': 'chosun',
        'category': d('.news_title_cat a').eq(0).text(),
        'description': description,
        'publishedAt': publishedAt,
        'content': d('.par').text()
    }


def parseNewsFromURL(url):
    rawhtml = ut.readURL(url, 'euc-kr')
    news = parseNewsHtml(rawhtml)
    news['link'] = url
    return news


def parseNewsListHtml(newshtml):
    d = pq(newshtml)
    newslist = []
    for item in d('dl.list_item').items():
        headline = item.find('dt')
        url = headline.find('a').attr('href')
        newsID = re.match(r'.+/(\d+)\.html', url).group(1)
        newslist.append({
            'title': headline.text().strip(),
            'url': url,
            'providerNewsID': newsID,
        })
    return newslist


def crawlSince(since):
    """뉴스를 특정 시간대로부터 전부 크롤링을 해옵니다.

    Arguments:
        since (int) -- since 이후의 뉴스만 크롤링합니다. epoch 기준

    Yields:
        list -- 뉴스 리스트. 시간순으로 정렬되며, 최신이 [0]
    """

    def newsEntryGenerator():
        page = 1
        while True:
            pageStr = "http://news.chosun.com/svc/list_in/list.html?pn=%d" % page
            pageHTML = ut.readURL(pageStr, 'euc-kr')
            for entry in parseNewsListHtml(pageHTML):
                yield entry
            page += 1

    newsList = []
    for newsEntry in newsEntryGenerator():
        try:
            news = parseNewsFromURL(newsEntry['url'])
            logging.info('Crawling news "%s"' % news['title'])
            if news['publishedAt'] < since:
                break
            newsList.append(news)
        except:
            # 뭐든지 오류가 나면 나중에 디버깅을 하고 일단 씹는다.
            logging.exception('Error while crawling news "%s"', news['title'])
    return newsList
