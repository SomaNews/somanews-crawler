import unittest
from unittest.mock import patch
from crawler import yonhap, donga


class TestDongaParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/yonhap/yonhap_article.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = yonhap.ParserYonhap()
        news = parser.parseNews('http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['title'], '''포체티노, '뎀벨레 대신 손흥민 선발' 비판에 "실수 아니다"''')
        self.assertEqual(news['link'], 'http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['provider'], 'yonhap')
        self.assertEqual(news['publishedAt'], 1474079700)  # 2016-09-18 03:00:00

