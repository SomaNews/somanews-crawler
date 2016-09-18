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
        timeStr = d('p.title_foot .date-time').text()
        publishedAt = time.mktime(time.strptime(timeStr, "%Y-%m-%d %H:%M:%S"))

        # category
        location = header.find('.location')
        category = []
        for subCategory in location.find('span').items():
            category.append(subCategory.text())
        category.append(location.find('strong a').eq(0).text())
        category = ''.join(category)

        # content
        article_txt = d('div.article_txt')
        article_txt.find('.recommend').next_all().remove()
        article_txt.find('.recommend').remove()

        firstChild = article_txt.children().eq(0)
        if firstChild.is_('strong'):
            description = firstChild.text()
            firstChild.remove()
        else:
            description = ''


        return {
            'title': header.find('h1').text(),
            'author': header.find('.repoter').text(),
            'link': url,
            'provider': 'donga',
            'category': category,
            'description': description,
            'publishedAt': publishedAt,
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

