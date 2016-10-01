import unittest
from unittest.mock import patch
from crawler import crawler, dbconn
from pymongo import MongoClient
from test.dummyparser import DummyParser

class TestCrawler(unittest.TestCase):
    def setUp(self):
        client = MongoClient('localhost', 27017)
        client.drop_database('test')
        client.close()

    def test_dummyParser(self):
        '''
        더미 파서가 제대로 작동하는지 확인합니다
        '''
        parser = DummyParser()

        newsList = parser.parseNewsList(1)
        self.assertEqual(len(newsList), 10)
        self.assertEqual(newsList[0]['title'], '뉴스 #50')
        self.assertEqual(newsList[0]['url'], 'dummy://news50.html')
        self.assertEqual(newsList[0]['providerNewsID'], 50)
        self.assertEqual(newsList[-1]['title'], '뉴스 #41')

        news1 = parser.parseNews('dummy://news1.html', 1)
        self.assertEqual(news1['title'], '뉴스 #1')
        self.assertEqual(news1['publishedAt'], 1)


    def test_newsGenerator(self):
        parser = DummyParser()
        for i, news in enumerate(crawler.fetchNewsList(parser)):
            if i == 30:
                break

            self.assertEqual(news['title'], '뉴스 #%d' % (50 - i))

    def test_crawlSince(self):
        db = dbconn.NewsDatabase('mongodb://localhost:27017/', 'test')
        parser = DummyParser()

        crawler.crawlSince(db, parser, 40)
        self.assertEqual(db.getLatestNews()['title'], '뉴스 #50')
        self.assertEqual(db.getNewsCount(), 11)  # 50 ~ 40

    def test_crawlSince_skip_duplicates(self):
        db = dbconn.NewsDatabase('mongodb://localhost:27017/', 'test')
        parser = DummyParser()

        crawler.crawlSince(db, parser, 40)
        crawler.crawlSince(db, parser, 30)
        self.assertEqual(db.getLatestNews()['title'], '뉴스 #50')
        self.assertEqual(db.getNewsCount(), 21)  # 50 ~ 30

    def test_addFailedCrawl(self):
        db = dbconn.NewsDatabase('mongodb://localhost:27017/', 'test')
        db.addFailedCrawl({
            'provider': 'dummy',
            'title': 'TestTitle',
            'url': 'TestURL',
        })
        self.assertEqual(db.getFailedCrawlCount(), 1)

    @patch('test.dummyparser.DummyParser.parseNews')
    def test_crawlSince_addFailedCrawl(self, mock_parseNews):
        mock_parseNews.side_effect = ValueError()

        db = dbconn.NewsDatabase('mongodb://localhost:27017/', 'test')
        parser = DummyParser()
        self.assertRaises(ValueError, parser.parseNews, 'dummy://news1.html', 1)

        crawler.crawlSince(db, parser, 0)
        self.assertEqual(db.getFailedCrawlCount(), 30)  # Maximum 30 failed crawl allowed per provider