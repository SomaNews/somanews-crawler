import unittest
from crawler import dbconn


class TestNewsDB(unittest.TestCase):
    def test_add_news(self):
        news1 = {'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'}
        db = dbconn.NewsDatabase()
        db.addNews(news1)
        news1_1 = db.getLatestNews().data
        self.assertEqual(news1_1['title'], news1['title'])

    def test_news_ordering(self):
        n1 = {'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'}
        n2 = {'source': 'center', 'cTime': 2, 'newsID': 1, 'title': '뉴스2'}

        # Try in original order
        db = dbconn.NewsDatabase()
        db.addNews(n1)
        db.addNews(n2)
        n = db.getLatestNews().data
        self.assertEqual(n['title'], n2['title'])

        # Try in reverse order
        db = dbconn.NewsDatabase()
        db.addNews(n2)
        db.addNews(n1)
        n = db.getLatestNews().data
        self.assertEqual(n['title'], n2['title'])

    def test_duplicate_filtering(self):
        n1 = {'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'}
        db = dbconn.NewsDatabase()
        db.addNews(n1)
        self.assertRaises(ValueError, db.addNews, n1)

    def test_get_lastest_news(self):
        db = dbconn.NewsDatabase()
        db.addNews({'source': 'chosun', 'cTime': 1, 'newsID': 1, 'title': '뉴스1'})
        db.addNews({'source': 'chosun', 'cTime': 2, 'newsID': 2, 'title': '뉴스2'})
        self.assertEqual(db.getLatestNewsTime(), 2)


