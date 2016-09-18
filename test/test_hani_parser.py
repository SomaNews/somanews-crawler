import unittest
from unittest.mock import patch
from crawler import hani


class TestHaniParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/hani/hani_article_761484.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = hani.ParserHani()
        news = parser.parseNews('http://www.hani.co.kr/arti/society/labor/761484.html')
        self.assertEqual(news['title'], "“고용 최고, 실업 최저” 제주의 비결은?")
        self.assertEqual(news['author'], '이창곤 선임기자 goni@hani.co.kr')
        self.assertEqual(news['link'], 'http://www.hani.co.kr/arti/society/labor/761484.html')
        self.assertEqual(news['provider'], 'hani')
        self.assertEqual(news['category'], '사회 > 노동')
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

        self.assertEqual(newslist[0]['title'], "이통3사 과징금 3129억원 국고로…가입자 위한 사용은 ‘0’원")
        self.assertEqual(newslist[0]['url'], "http://www.hani.co.kr/arti/economy/it/761487.html")
        self.assertEqual(newslist[0]['providerNewsID'], "761487")

        self.assertEqual(newslist[-1]['title'], "연휴 막바지 고속도로 정체 시작…“오후 3∼4시 절정”")
        self.assertEqual(newslist[-1]['url'], "http://www.hani.co.kr/arti/society/society_general/761473.html")
