import unittest
from crawler import dbconn
from test.dummyparser import DummyParser
from nose.tools import nottest

class TestNewsDB(unittest.TestCase):
    def test_add_news(self):
        '''
        addNews가 정상 작동하는지 본다
        '''
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)

        db = dbconn.NewsDatabase()
        db.addNews(n1)
        should_be_n1 = db.getLatestNews()
        self.assertEqual(n1, should_be_n1)

    def test_get_lastest_news(self):
        '''
        db.getLatestNews()가 제일 최신 뉴스를 반환하는지 테스트
        '''
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)
        n2 = parser.parseNews('dummy://news2.html', 2)

        db = dbconn.NewsDatabase()
        db.addMultipleNews([n1, n2])
        self.assertEqual(db.getLatestNews()['publishedAt'], 2)


    def test_news_ordering(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)
        n2 = parser.parseNews('dummy://news2.html', 2)

        # Try in original order
        db = dbconn.NewsDatabase()
        db.addNews(n1)
        db.addNews(n2)
        n = db.getLatestNews()
        self.assertEqual(n['title'], n2['title'])
        db.close()

        # Try in reverse order
        db = dbconn.NewsDatabase()
        db.addNews(n2)
        db.addNews(n1)
        n = db.getLatestNews()
        self.assertEqual(n['title'], n2['title'])
        db.close()

    def test_duplicate_filtering(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)

        db = dbconn.NewsDatabase()
        db.addNews(n1)
        self.assertRaises(ValueError, db.addNews, n1)


