import re

class DummyParser:
    provider = 'dummy'
    def parseNews(self, url, providerNewsID):
        newsID = int(re.match(r"dummy://news(\d+).html", url).group(1))
        return {
            'title': '뉴스 #%d' % newsID,
            'author': '%d번 뉴스 작성자' % newsID,
            'link': url,
            'provider': 'dummy',
            'category': '테스트 데이터 > 테스트',
            'description': '',
            'publishedAt': newsID,
            'content': 'qwertyuiop',
            'imageURL': '',
            'providerNewsID': providerNewsID,
        }


    def parseNewsList(self, page):
        if page >= 6:
            return []

        newsList = []
        for newsID in range(50 - 10 * (page - 1), 50 - 10 * page, -1):
            newsURL = 'dummy://news%d.html' % newsID
            newsList.append({
                'title': '뉴스 #%d' % newsID,
                'url': newsURL,
                'providerNewsID': newsID
            })

        return newsList
