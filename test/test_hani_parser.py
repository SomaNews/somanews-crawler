import unittest
from unittest.mock import patch
from crawler import hani


class TestHaniParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/hani/hani_article_761484.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = hani.ParserHani()
        news = parser.parseNews('http://www.hani.co.kr/arti/society/labor/761484.html', '761484')
        self.assertEqual(news['title'], "“고용 최고, 실업 최저” 제주의 비결은?")
        self.assertEqual(news['author'], '이창곤 선임기자 goni@hani.co.kr')
        self.assertEqual(news['link'], 'http://www.hani.co.kr/arti/society/labor/761484.html')
        self.assertEqual(news['provider'], 'hani')
        self.assertEqual(news['category'], '사회 > 노동')
        self.assertEqual(news['imageURL'], '')  # no main image present here
        self.assertEqual(news['description'], '''\
전국 16개 시도 고용률 분석 결과
제주, 올 2분기 고용률 68.1%로 최고
실업률도 2.2%로 가장 낮아
“경기 좋아 인구유입이 많고 살만해서”''')
        self.assertEqual(news['publishedAt'], 1474089960)  # 2016-09-17 14:26


    @patch('crawler.utils.readURL')
    def test_parsenewslist(self, mock_urlReader):
        rawhtml = open('testdata/hani/hani_article_list.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = hani.ParserHani()

        newslist = parser.parseNewsList(1)
        self.assertEqual(len(newslist), 15)

        self.assertEqual(newslist[0]['title'], "우정사업본부, 국제선편 우편물 접수 20일부터 순차적으로 재개")
        self.assertEqual(newslist[0]['url'], "http://www.hani.co.kr/arti/economy/economy_general/761648.html")
        self.assertEqual(newslist[0]['providerNewsID'], "761648")

        self.assertEqual(newslist[-1]['title'], "민변 “정부, 함경북도 수해 복구 즉시 나서야”")
        self.assertEqual(newslist[-1]['url'], "http://www.hani.co.kr/arti/politics/defense/761634.html")
