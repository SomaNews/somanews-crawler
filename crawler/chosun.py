import time
import re
from pyquery import PyQuery as pq
import logging
from crawler import utils as ut


class ParserChosun:
    def parseNews(self, url):
        newshtml = ut.readURL(url, 'euc-kr')
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
            'link': url,
            'provider': 'chosun',
            'category': d('title').text().rsplit('-', 1)[-1].strip(),
            'description': description,
            'publishedAt': publishedAt,
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
