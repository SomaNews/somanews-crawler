import unittest
from crawler import dbconn
from test.dummyparser import DummyParser
from pymongo import MongoClient


class TestNewsDB(unittest.TestCase):
    def setUp(self):
        client = MongoClient('localhost', 27017)
        client.drop_database('test')
        client.close()

    def test_add_news(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)

        db = dbconn.NewsDatabase('test')
        db.addNews(n1)
        should_be_n1 = db.getLatestNews()
        self.assertEqual(n1, should_be_n1)

    def test_get_lastest_news(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)
        n2 = parser.parseNews('dummy://news2.html', 2)

        db = dbconn.NewsDatabase('test')
        db.addNews(n1)
        db.addNews(n2)
        self.assertEqual(db.getLatestNews()['publishedAt'], 2)

    def test_get_latest_news_reverse(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)
        n2 = parser.parseNews('dummy://news2.html', 2)

        db = dbconn.NewsDatabase('test')
        db.addNews(n2)
        db.addNews(n1)
        self.assertEqual(db.getLatestNews()['publishedAt'], 2)

    def test_duplicate_filtering(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html', 1)

        db = dbconn.NewsDatabase('test')
        db.addNews(n1)
        self.assertRaises(ValueError, db.addNews, n1)


