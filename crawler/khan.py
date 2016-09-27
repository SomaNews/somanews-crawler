import time
import re
from pyquery import PyQuery as pq
from crawler import utils as ut

class ParserKhan:
    provider = 'khan'
    def parseNews(self, url, providerNewsID):
        """
        url로부터 뉴스를 읽어온다

        Args:
            url: 뉴스 url

        Returns:
            뉴스 데이터를 가진 dict

        """
        newshtml, url = ut.readURLWithRedirect(url, 'euc-kr')
        d = pq(newshtml)

        # category
        mainCategory = d('.sec_title').text().strip()
        subCategory = d('.navi_menu .on').text().strip()
        category = "%s > %s" % (mainCategory, subCategory)

        # 경제 관련
        if url.startswith('http://biz.khan.co.kr/'):
            # publishedAt
            timeStr = d('.byline').text()
            timeStr = re.match(r'입력 : (\d+.\d+.\d+ \d+:\d+:\d+).*', timeStr).group(1)
            publishedAt = time.mktime(time.strptime(timeStr, "%Y.%m.%d %H:%M:%S"))

            # content
            return {
                'title': d('#articleTtitle').text().strip(),
                'author': d('.subject span.name').text().strip(),
                'link': url,
                'provider': 'khan',
                'category': category,
                'description': '',
                'publishedAt': publishedAt,
                'content': ut.textWithNewline(d('.art_body')),
                'imageURL': d('.art_photo img').attr('src') or '',
                'providerNewsID': providerNewsID,
            }

        # 향이네
        elif url.startswith('http://h2.khan.co.kr/'):
            # publishedAt
            timeStr = d('.art_date').text()
            timeStr = re.match(r'입력 (\d+-\d+-\d+ \d+:\d+:\d+).*', timeStr).group(1)
            publishedAt = time.mktime(time.strptime(timeStr, "%Y-%m-%d %H:%M:%S"))

            # category
            title = d('.art_tit').text().strip()
            category = '향이네 > %s' % (
                re.match('\[(.+?)\].+', title).group(1)
            )
            # content
            return {
                'title': title,
                'author': d('.art_author').text().strip(),
                'link': url,
                'provider': 'khan',
                'category': category,
                'description': '',
                'publishedAt': publishedAt,
                'content': ut.textWithNewline(d('.art_text')),
                'imageURL': d('.art_thumb img').attr('src') or '',
                'providerNewsID': providerNewsID,
            }

        # 나머지
        else:
            # publishedAt
            timeStr = d('.byline').text()
            timeStr = re.match(r'입력 : (\d+.\d+.\d+ \d+:\d+:\d+).*', timeStr).group(1)
            publishedAt = time.mktime(time.strptime(timeStr, "%Y.%m.%d %H:%M:%S"))

            # content
            return {
                'title': d('#article_title').text().strip(),
                'author': d('.subject span.name').text().strip(),
                'link': url,
                'provider': 'khan',
                'category': category,
                'description': ut.textWithNewline(d('.art_subtit')),
                'publishedAt': publishedAt,
                'content': ut.textWithNewline(d('.art_body')),
                'imageURL': d('.art_photo img').attr('src') or '',
                'providerNewsID': providerNewsID,
            }


    def parseNewsList(self, page):
        pageURL = 'http://news.khan.co.kr/kh_recent/index.html?&page=%d' % page
        pageHTML = ut.readURL(pageURL, 'euc-kr')
        d = pq(pageHTML)
        newslist = []

        contents = d('.news_list')

        for item in contents.find('li').items():
            titleItem = item.find('.hd_title a')
            url = titleItem.attr('href')
            title = titleItem.text().strip()

            newsID = re.search(r'artid=(\d+)', url).group(1)
            newslist.append({
                'title': title,
                'url': url,
                'providerNewsID': newsID,
            })
        return newslist

