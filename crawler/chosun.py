import feedparser as fp
import time
import re
from pyquery import PyQuery as pq


def parseNewsHtml(newshtml):
    d = pq(newshtml)

    # description
    description = d('.news_subtitle').html().replace('<br/>', '\n').strip()

    # publishedAt
    publishedAtString = d('.news_date').text()
    timeStr = re.match(
        r'입력 : (\d+.\d+.\d+ \d+:\d+)',
        publishedAtString
    ).group(1)
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



def parseNewsListHtml(newshtml):
    d = pq(newshtml)
    newslist = []
    for item in d('dl.list_item').items():
        headline = item.find('dt')
        url = headline.find('a').attr('href')
        title = headline.text().strip()
        newslist.append({
            'title': title,
            'url': url
        })

    return newslist
