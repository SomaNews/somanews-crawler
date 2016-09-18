import time
import re
from pyquery import PyQuery as pq
from crawler import utils as ut

class ParserHani:
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

        header = d('div.article-head')

        # publishedAt
        timeStr = d('.date-time').text()
        publishedAt = time.mktime(time.strptime(timeStr, "등록 : %Y-%m-%d %H:%M"))

        # category
        categoryDiv = header.find('.category')
        category = ' > '.join(
        [
            categoryDiv.find('strong').text().strip(),
            categoryDiv.find('span').text().strip(),
        ])

        # content
        description = ut.textWithNewline(d('div.article-text .subtitle'))
        content = (
            ut.textWithNewline(d('div.article-text .text'))
        )
        return {
            'title': header.find('.title').text(),
            'author': content.rsplit('\n', 1)[-1],
            'link': url,
            'provider': 'hani',
            'category': category,
            'description': description,
            'publishedAt': publishedAt,
            'content': content,
            'imageURL': d('.image-area .imageC img').attr('src') or ''
        }


    def parseNewsList(self, page):
        pageURL = 'http://www.hani.co.kr/arti/list%d.html' % page
        pageHTML = ut.readURL(pageURL, 'utf-8')
        d = pq(pageHTML)
        newslist = []

        contents = d('div.section-list-area')

        for item in contents.find('div.list').items():
            titleItem = item.find('.article-title a')
            url = titleItem.attr('href')
            title = re.sub(r'\n *', ' ', titleItem.text())
            newsID = re.match(r'.+/(\d+).html', url).group(1)
            newslist.append({
                'title': title,
                'url': url,
                'providerNewsID': newsID,
            })
        return newslist

