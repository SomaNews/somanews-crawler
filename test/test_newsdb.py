import unittest
from crawler import dbconn
from test.dummyparser import DummyParser
from nose.tools import nottest

class TestNewsDB(unittest.TestCase):
    def test_add_news(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html')

        db = dbconn.NewsDatabase()
        db.addNews(n1)
        should_be_n1 = db.getLatestNews()
        self.assertEqual(n1, should_be_n1)

    def test_news_ordering(self):
        parser = DummyParser()
        n1 = parser.parseNews('dummy://news1.html')
        n2 = parser.parseNews('dummy://news2.html')

        # Try in original order
        db = dbconn.NewsDatabase()
        db.addMultipleNews([n1, n2])
        n = db.getLatestNews()
        self.assertEqual(n['title'], n2['title'])
        db.close()

        # Try in reverse order
        db = dbconn.NewsDatabase()
        db.addMultipleNews([n2, n1])
        n = db.getLatestNews()
        self.assertEqual(n['title'], n2['title'])
        db.close()


    @nottest
    def test_duplicate_filtering(self):
        n1 = {'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'}
        db = dbconn.NewsDatabase()
        db.addNews(n1)
        self.assertRaises(ValueError, db.addNews, n1)

    @nottest
    def test_get_lastest_news(self):
        db = dbconn.NewsDatabase()
        db.addNews({'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'})
        db.addNews({'source': 'chosun', 'cTime': 2, 'newsID': 2, 'title': '뉴스2'})
        self.assertEqual(db.getLatestNewsTime(), 2)


