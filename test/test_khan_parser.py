import unittest
from unittest.mock import patch
from crawler import khan


class TestKhanParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/khan/khan_article_201609260957011.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml

        parser = khan.ParserKhan()
        news = parser.parseNews('http://biz.khan.co.kr/khan_art_view.html?artid=201609260957011&code=920100', '761484')
        self.assertEqual(news['title'], "[국감]소비자 80% “단통법, 가계통신비 인하 효과 못 느껴”")
        self.assertEqual(news['author'], '이윤주 기자 runyj@kyunghyang.com')
        self.assertEqual(news['link'], 'http://biz.khan.co.kr/khan_art_view.html?artid=201609260957011&code=920100')
        self.assertEqual(news['provider'], 'khan')
        self.assertEqual(news['category'], '경제일반')
        self.assertEqual(news['imageURL'], 'http://img.khan.co.kr/news/2016/09/26/l_2016092601003029200228191.jpg')
        self.assertEqual(news['description'], '')
        self.assertEqual(news['publishedAt'], 1474851421)  # 2016.09.26 09:57:01


    @patch('crawler.utils.readURL')
    def test_parsenewslist(self, mock_urlReader):
        rawhtml = open('testdata/khan/khan_article_list.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml

        parser = khan.ParserKhan()

        newslist = parser.parseNewsList(1)
        self.assertEqual(len(newslist), 15)

        self.assertEqual(newslist[0]['title'], "장애인이 소 키워 판 돈 8000만원 훔친 40대…하룻만에 1000만원 탕진")
        self.assertEqual(newslist[0]['url'], "http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609260947011&code=940202")
        self.assertEqual(newslist[0]['providerNewsID'], "201609260947011")

        self.assertEqual(newslist[-1]['title'], "[단독][서울 역세권 주거비 급등]소득 절반을 전·월세에 썼다")
        self.assertEqual(newslist[-1]['url'], "http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609260600055&code=920202")
