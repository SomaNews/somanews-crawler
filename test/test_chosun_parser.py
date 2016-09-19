import unittest
from unittest.mock import patch
from crawler import chosun
from nose.plugins.attrib import attr


class TestChosunCrawler(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/chosun/chosun_article.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml

        parser = chosun.ParserChosun()
        news = parser.parseNews('http://news.chosun.com/site/data/html_dir/2016/09/17/2016091700921.html')
        self.assertEqual(news['title'], "정부, 北 핵실험 '방사성 제논' 이번에도 검출 실패")
        self.assertEqual(news['author'], '박건형 기자')
        self.assertEqual(news['link'], 'http://news.chosun.com/site/data/html_dir/2016/09/17/2016091700921.html')
        self.assertEqual(news['provider'], 'chosun')
        self.assertEqual(news['imageURL'], 'http://image.chosun.com/sitedata/image/201609/17/2016091700921_0.jpg')
        self.assertEqual(news['category'], '정치 > 정부ㆍ지자체')
        self.assertEqual(news['description'], '''\
북핵 실험 분석할 유일한 단서
실험 장소와 수백km 거리
한국 땅·공해선 포집 어렵고 장비 성능 떨어진다는 지적도''')
        self.assertEqual(news['publishedAt'], 1474106340)  # 2016.09.17 18:59
        self.assert_(news['content'].startswith("정부가 지난 9일 북한이 실시한 5차 핵실험을"))
        self.assert_(news['content'].endswith("전면적으로 시스템을 개편해야 한다”고 말했다."))


    @patch('crawler.utils.readURL')
    def test_newslist_reader(self, mock_urlReader):
        rawhtml = open('testdata/chosun/chosun_article_list.html', 'r', encoding='euc-kr').read()
        mock_urlReader.return_value = rawhtml

        parser = chosun.ParserChosun()
        newslist = parser.parseNewsList(1)
        self.assertEqual(len(newslist), 10)

        self.assertEqual(newslist[0]['title'], "이통사, 오늘부터 갤노트7 새 제품 교환")
        self.assertEqual(newslist[0]['url'], "http://news.chosun.com/site/data/html_dir/2016/09/19/2016091901279.html")
        self.assertEqual(newslist[0]['providerNewsID'], "2016091901279")

        self.assertEqual(newslist[-1]['title'], "[조용헌 살롱] [1058] 동양철학 고택")
        self.assertEqual(newslist[-1]['url'], "http://news.chosun.com/site/data/html_dir/2016/09/18/2016091802104.html")
