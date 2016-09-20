import unittest
from crawler import crawler
import re

class DummyParser:
    def parseNews(self, url):
        newsID = int(re.match(r"dummy://news(\d+).html", url).group(1))
        return {
            'title': '뉴스 #%d' % newsID,
            'author': '%d번 뉴스 작성자' % newsID,
            'link': url,
            'provider': 'dummy',
            'category': '테스트 데이터 > 테스트',
            'description': '',
            'publishedAt': newsID,
            'content': 'qwertyuiop',
            'imageURL': ''
        }


    def parseNewsList(self, page):
        newsList = []
        for newsID in range(10 * (page - 1) + 1, 10 * page + 1):
            newsURL = 'dummy://news%d.html' % newsID
            newsList.append({
                'title': '뉴스 #%d' % newsID,
                'url': newsURL,
                'providerNewsID': newsID
            })

        return newsList


class TestCrawler(unittest.TestCase):
    def test_dummyParser(self):
        '''
        더미 파서가 제대로 작동하는지 확인합니다
        '''
        parser = DummyParser()

        newsList = parser.parseNewsList(1)
        self.assertEqual(len(newsList), 10)
        self.assertEqual(newsList[0]['title'], '뉴스 #1')
        self.assertEqual(newsList[0]['url'], 'dummy://news1.html')
        self.assertEqual(newsList[0]['providerNewsID'], 1)
        self.assertEqual(newsList[-1]['title'], '뉴스 #10')

        news1 = parser.parseNews('dummy://news1.html')
        self.assertEqual(news1['title'], '뉴스 #1')
        self.assertEqual(news1['publishedAt'], 1)


    def test_newsGenerator(self):
        parser = DummyParser()
        for i, news in enumerate(crawler.fetchNewsList(parser)):
            if i == 30:
                break

            self.assertEqual(news['title'], '뉴스 #%d' % (i + 1))
