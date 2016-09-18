import unittest
from unittest.mock import patch
from crawler import donga


class TestDongaParser(unittest.TestCase):
    @patch('crawler.utils.readURL')
    def test_parsenewsurl(self, mock_urlReader):
        rawhtml = open('testdata/donga/donga_article_20160918_80317105.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = donga.ParserDonga()
        news = parser.parseNews('http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['title'], "예산 증액… 협회 통합… “룰 바꿔 기술씨름 되살려야”")
        self.assertEqual(news['author'], '홍정수기자')
        self.assertEqual(news['link'], 'http://news.donga.com/List/3/all/20160918/80317105/1')
        self.assertEqual(news['provider'], 'donga')
        self.assertEqual(news['category'], '뉴스 > 스포츠 > 씨름')
        self.assertEqual(news['description'], '[커버스토리/ 씨름, 부활의 샅바]')
        self.assertEqual(news['publishedAt'], 1474135200)  # 2016-09-18 03:00:00
        self.assertEqual(news['imageURL'], './donga_article_20160918_80317105_files/80317103.1.jpg')
        self.assert_(news['content'].startswith('''\
영화 제작자인 이앤엠필름 김동현 대표는 요즘 새 영화 ‘한라장사―요요’의 제작 준비에 한창이다. 2006년 개봉한 ‘천하장사 마돈나’ 이후 씨름을 소재로 한 두 번째 상업영화다. 하지만 천하장사 마돈나가 씨름을 통해 성소수자의 고민을 다뤘기 때문에 민속씨름을 전면에 내세운 건 한라장사―요요가 처음인 셈이다.

○ 씨름의 ‘부활’을 꿈꾸는 사람들
'''))
        self.assert_(news['content'].endswith("홍정수 기자 hong@donga.com"))

    @patch('crawler.utils.readURL')
    def test_parsenewslist(self, mock_urlReader):
        rawhtml = open('testdata/donga/donga_article_list.htm', 'r', encoding='utf-8').read()
        mock_urlReader.return_value = rawhtml

        parser = donga.ParserDonga()

        newslist = parser.parseNewsList(1)
        self.assertEqual(len(newslist), 16)

        self.assertEqual(newslist[0]['title'], "제주 中관광객, 이번엔 성당서 묻지마 흉기난동")
        self.assertEqual(newslist[0]['url'], "http://news.donga.com/List/3/all/20160918/80317130/1")
        self.assertEqual(newslist[0]['providerNewsID'], "20160918/80317130/1")
        self.assertEqual(newslist[-1]['title'], "‘사드 반대’ 출구전략 찾는 야권")
        self.assertEqual(newslist[-1]['url'], "http://news.donga.com/List/3/all/20160918/80317006/1")
