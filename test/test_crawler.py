import unittest
from crawler import crawler
import re
from test.dummyparser import DummyParser

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

        news1 = parser.parseNews('dummy://news1.html', 1)
        self.assertEqual(news1['title'], '뉴스 #1')
        self.assertEqual(news1['publishedAt'], 1)


    def test_newsGenerator(self):
        parser = DummyParser()
        for i, news in enumerate(crawler.fetchNewsList(parser)):
            if i == 30:
                break

            self.assertEqual(news['title'], '뉴스 #%d' % (i + 1))
