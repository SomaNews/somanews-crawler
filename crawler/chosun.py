import time
import re
from urllib.request import urlopen
from pyquery import PyQuery as pq


def parseNewsHtml(newshtml):
    d = pq(newshtml)

    # description
    description = d('.news_subtitle').html().replace('<br/>', '\n').strip()

    # publishedAt
    timeStr = d('.news_date').text()
    timeStr = re.match(r'입력 : (\d+.\d+.\d+ \d+:\d+)', timeStr).group(1)
    publishedAt = time.mktime(time.strptime(timeStr, "%Y.%m.%d %H:%M"))

    # author
    authorStr = d('.news_title_author').text()
    author = re.match(r'(.+) 기자', authorStr).group(1)

    return {
        'title': d('.news_title_text h1').text(),
        'author': author,
        'provider': 'chosun',
        'category': d('.news_title_cat a').eq(0).text(),
        'description': description,
        'publishedAt': publishedAt,
        'content': d('.par').text()
    }


def parseNewsFromURL(url):
    rawhtml = urlopen(url).read().decode('euc-kr')
    news = parseNewsHtml(rawhtml)
    news['link'] = url
    return news


def parseNewsListHtml(newshtml):
    d = pq(newshtml)
    newslist = []
    for item in d('dl.list_item').items():
        headline = item.find('dt')
        newslist.append({
            'title': headline.text().strip(),
            'url': headline.find('a').attr('href')
        })
    return newslist
