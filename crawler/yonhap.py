import time
import re
from pyquery import PyQuery as pq
from crawler import utils as ut

class ParserYonhap:
    def parseNews(self, url):
        """
        url로부터 뉴스를 읽어온다

        Args:
            url: 뉴스 url

        Returns:
            뉴스 데이터를 가진 dict

        """
        newshtml = ut.readURL(url, 'utf-8')
        d = pq(newshtml)

        # publishedAt
        timeStr = d('.share-info .tt em').text()
        publishedAt = time.mktime(time.strptime(timeStr, "%Y/%m/%d %H:%M"))

        return {
            'title': d('.tit-article').text(),
            'author': '연합뉴스',
            'link': url,
            'provider': 'yeonhap',
            'category': '연합뉴스',
            'description': '',
            'publishedAt': publishedAt,
            'content': d('.article').text(),
        }


    def parseNewsList(self, page):
        pageURL = 'http://www.yonhapnews.co.kr/bulletin/02%08d.html' % page
        pageHTML = ut.readURL(pageURL, 'utf-8')
        d = pq(pageHTML)
        newslist = []

        headlines = d('div.headline-list')

        for item in headlines.find('.section02').items():
            titleItem = item.find('.news-tl a')
            url = titleItem.attr('href')
            title = re.sub(r'\n *', ' ', titleItem.text())
            newsID = re.match(r'.+/(\w+).HTML', url).group(1)
            newslist.append({
                'title': title,
                'url': url,
                'providerNewsID': newsID,
            })
        return newslist

