import unittest
from unittest.mock import patch
from crawler import donga


class TestDongaParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/donga/donga_article_20160918_80317105.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        news = donga.parseNewsFromURL('http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['title'], "예산 증액… 협회 통합… “룰 바꿔 기술씨름 되살려야”")
        self.assertEqual(news['author'], '홍정수기자')
        self.assertEqual(news['link'], 'http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['provider'], 'donga')
        self.assertEqual(news['category'], '뉴스>스포츠>씨름')
        self.assertEqual(news['description'], '[커버스토리/ 씨름, 부활의 샅바]')
        self.assertEqual(news['publishedAt'], 1474135200)  # 2016-09-18 03:00:00
