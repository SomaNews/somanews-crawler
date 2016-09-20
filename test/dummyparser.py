import re

class DummyParser:
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
        newsList = []
        for newsID in range(10 * (page - 1) + 1, 10 * page + 1):
            newsURL = 'dummy://news%d.html' % newsID
            newsList.append({
                'title': '뉴스 #%d' % newsID,
                'url': newsURL,
                'providerNewsID': newsID
            })

        return newsList
