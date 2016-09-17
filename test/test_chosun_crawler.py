import unittest
from unittest.mock import patch
from crawler import chosun
from nose.plugins.attrib import attr


class TestChosunCrawler(unittest.TestCase):
    @patch('crawler.chosun.readURL')
    def test_crawl_since(self, mock_readURL):
        urlmap = {
            'http://news.chosun.com/svc/list_in/list.html?source=1&pn=1': 'testdata/chosun_article_list.html',
            'http://news.chosun.com/site/data/html_dir/2016/09/13/2016091301378.html': 'testdata/chosun_article_2016091301378.htm',
            'http://news.chosun.com/site/data/html_dir/2016/09/13/2016091301145.html': 'testdata/chosun_article_2016091301145.htm',
            'http://news.chosun.com/site/data/html_dir/2016/09/13/2016091301750.html': 'testdata/chosun_article_2016091301750.htm',
            'http://news.chosun.com/site/data/html_dir/2016/09/13/2016091302449.html': 'testdata/chosun_article_2016091302449.htm',
        }
        mock_readURL.side_effect = lambda url, _: open(urlmap[url], 'r', encoding='euc-kr').read()

        articles = chosun.crawlSince(1473858000)
        self.assertEqual(len(articles), 3)
        self.assertEqual(articles[1]['publishedAt'], 1473915600)  # 2016.09.15 14:00
        self.assertEqual(articles[2]['publishedAt'], 1473858000)  # 2016.09.14 22:00
