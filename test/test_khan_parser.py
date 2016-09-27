import unittest
from unittest.mock import patch
from crawler import khan


class TestKhanParser(unittest.TestCase):
    @patch('crawler.utils.readURLWithRedirect')
    def test_parsenewsurl_type_biz(self, mock_urlReader):
        rawhtml = open('testdata/khan/khan_article_201609260957011.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml, 'http://biz.khan.co.kr/khan_art_view.html?artid=201609260957011&code=920100'

        parser = khan.ParserKhan()
        news = parser.parseNews('http://biz.khan.co.kr/khan_art_view.html?artid=201609260957011&code=920100', '201609260957011')
        self.assertEqual(news['title'], "[국감]소비자 80% “단통법, 가계통신비 인하 효과 못 느껴”")
        self.assertEqual(news['author'], '이윤주 기자 runyj@kyunghyang.com')
        self.assertEqual(news['link'], 'http://biz.khan.co.kr/khan_art_view.html?artid=201609260957011&code=920100')
        self.assertEqual(news['provider'], 'khan')
        self.assertEqual(news['category'], '마켓·비즈 > 경제일반')
        self.assertEqual(news['imageURL'], 'http://img.khan.co.kr/news/2016/09/26/l_2016092601003029200228191.jpg')
        self.assertEqual(news['description'], '')
        self.assertEqual(news['publishedAt'], 1474851421)  # 2016.09.26 09:57:01


    @patch('crawler.utils.readURLWithRedirect')
    def test_parsenewsurl_type_h2(self, mock_urlReader):
        rawhtml = open('testdata/khan/khan_article_201609270932001.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml, 'http://h2.khan.co.kr/201609270932001'

        parser = khan.ParserKhan()
        news = parser.parseNews('http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609270932001&code=940100', '201609270932001')
        self.assertEqual(news['title'], "[가지가지뉴스]9월 셋째주 경향 독자들이 가장 많이 본 뉴스")
        self.assertEqual(news['author'], '박홍두 기자 phd@kyunghyang.com')
        self.assertEqual(news['link'], 'http://h2.khan.co.kr/201609270932001')
        self.assertEqual(news['provider'], 'khan')
        self.assertEqual(news['category'], '향이네 > 가지가지뉴스')
        self.assertEqual(news['imageURL'], 'http://img.khan.co.kr/news/2016/09/27/l_2016092501002858500214381.jpg')
        self.assertEqual(news['description'], '')
        self.assertEqual(news['publishedAt'], 1474936320)  # 2016-09-27 09:32:00


    @patch('crawler.utils.readURLWithRedirect')
    def test_parsenewsurl_type_news(self, mock_urlReader):
        rawhtml = open('testdata/khan/khan_article_201609262218015.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml, 'http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609262218015&code=970201'

        parser = khan.ParserKhan()
        news = parser.parseNews('http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609262218015&code=970201', '201609262218015')
        self.assertEqual(news['title'], "[2016 미국의 선택]트럼프가 ‘민주당원’이라던 사회자, 알고 보니 공화당원")
        self.assertEqual(news['author'], '정환보 기자 botox@kyunghyang.com')
        self.assertEqual(news['link'], 'http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201609262218015&code=970201')
        self.assertEqual(news['provider'], 'khan')
        self.assertEqual(news['category'], '국제 > 미국·중남미')
        self.assertEqual(news['imageURL'], 'http://img.khan.co.kr/news/2016/09/26/l_2016092701003151500239961.jpg')
        self.assertEqual(news['description'], '''\
ㆍ미 대선 첫 토론 이모저모
ㆍ일부 규칙 동전 던지기로 결정…호프스트라대 ‘중립의 상징’''')
        self.assertEqual(news['publishedAt'], 1474895881)  # 2016.09.26 22:18:01


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
