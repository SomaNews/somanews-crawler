import unittest
from crawler import chosun

class TestChosunCrawler(unittest.TestCase):
    def test_rssread(self):
        rawrss = open('testdata/chosun_rss.xml', 'r', encoding='utf-8').read()
        feeds = chosun.chosun_readrss(rawrss)

        firstEntry = feeds[0]
        self.assertEqual(firstEntry['title'], '추석 연휴 이후 강력한 투쟁, 현대차 노조 "강력한 투쟁전술로 사측 타격할 것…추가제시할 임금안이 있다면 교섭 고민"')
        self.assertEqual(firstEntry['mainImage'], 'http://image.chosun.com/sitedata/thumbnail/201609/16/2016091600823_0_thumb.jpg')
        self.assertEqual(firstEntry['cTime'], 1474014892.0)

    def test_content_from_html(self):
        rawhtml = open('testdata/chosun_article.html', 'r', encoding='euc-kr').read()
        content = chosun.chosun_getcontent(rawhtml)
        self.assert_(content.startswith('정부가 지난 9일 북한이 실시한 5차 '))
        self.assert_(content.endswith('시스템을 개편해야 한다”고 말했다.'))

    def test_newslist_reader(self):
        rawhtml = open('testdata/chosun_article_list.html', 'r', encoding='euc-kr').read()
        newslist = chosun.chosun_parse_newslist(rawhtml)
        self.assertEqual(len(newslist), 10)

        self.assertEqual(newslist[0]['title'], "[카드뉴스] 자녀가 代이은 '키다리 아저씨'의 쌀가마 선행")
        self.assertEqual(newslist[0]['url'], "http://news.chosun.com/site/data/html_dir/2016/09/13/2016091301378.html")

        self.assertEqual(newslist[-1]['title'], "[시론] 北核의 목적은 적화통일이다")
        self.assertEqual(newslist[-1]['url'], "http://news.chosun.com/site/data/html_dir/2016/09/13/2016091302464.html")
