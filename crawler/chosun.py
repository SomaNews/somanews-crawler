import time
import re
from pyquery import PyQuery as pq
import logging
from crawler import utils as ut


class ParserChosun:
    def parseNews(self, url, providerNewsID):
        newshtml = ut.readURL(url, 'euc-kr')
        d = pq(newshtml)

        # publishedAt
        timeStr = d('.news_date').text()
        timeStr = re.match(r'입력 : (\d+.\d+.\d+ \d+:\d+)', timeStr).group(1)
        publishedAt = time.mktime(time.strptime(timeStr, "%Y.%m.%d %H:%M"))

        return {
            'title': d('.news_title_text h1').text(),
            'author': d('.news_title_author').text(),
            'link': url,
            'provider': 'chosun',
            'category': d('title').text().rsplit('-', 1)[-1].strip(),
            'description': ut.textWithNewline(d('.news_subtitle')),
            'publishedAt': publishedAt,
            'content': ut.textWithNewline(d('.par')),
            'imageURL': d('.news_imgbox img').attr('src') or '',
            'providerNewsID': providerNewsID,
        }

    def parseNewsList(self, page):
        pageStr = "http://news.chosun.com/svc/list_in/list.html?source=1&pn=%d" % page
        pageHTML = ut.readURL(pageStr, 'euc-kr')
        d = pq(pageHTML)
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
