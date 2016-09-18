import unittest
from pyquery import PyQuery as pq
from crawler import utils


class TestUtils(unittest.TestCase):
    def test_textWithNewline(self):
        self.assertEqual(utils.textWithNewline(pq('abcde')), 'abcde')
        self.assertEqual(utils.textWithNewline(pq('<div>a<br>b</div>')), 'a\nb')
        self.assertEqual(utils.textWithNewline(pq('<div>a<br><br>b</div>')), 'a\n\nb')
        self.assertEqual(utils.textWithNewline(pq('<div>a<br><div>c</div><br>b</div>')), 'a\nc\nb')

