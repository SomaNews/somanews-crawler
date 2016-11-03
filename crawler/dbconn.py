from pymongo import MongoClient
import datetime

class NewsDatabase:
    def __init__(self, server, dbname):
        self.client = MongoClient(server)
        self.db = self.client.get_database(dbname)
        self.articles = self.db.get_collection('articles')
        self.failedCrawls = self.db.get_collection('failedCrawls')

    def close(self):
        self.client.close()

    def hasNews(self, provider, providerNewsID):
        article = self.articles.find_one({
            'provider': provider,
            'providerNewsID': providerNewsID
        })
        return bool(article)

    def isValidNews(self, news):
        return all(k in news for k in [
            'title', 'author', 'link', 'provider', 'category',
            'description', 'publishedAt', 'content', 'providerNewsID'
        ])

    def addNews(self, news):
        assert self.isValidNews(news)

        # insert_one 함수에서 인자로 들어온 dict를 변경합니다 (_id 추가)
        # 이를 방지하기 위해 dict()를 이용해 복사본을 insert하도록 합니다.
        news = dict(news)
        news['publishedAt'] = datetime.datetime.fromtimestamp(news['publishedAt'])

        # articleID를 추가합니다.
        news['_id'] = news['provider'] + '_' + str(news['providerNewsID'])
        self.articles.update(
            {
                '_id': news['_id'],
            },
            dict(news),
            upsert=True
        )

    def addFailedCrawl(self, entry):
        entry = dict(entry)
        self.failedCrawls.insert({
            'provider': entry['provider'],
            'title': entry['title'],
            'url': entry['url'],
        })

    def addMultipleNews(self, newsList):
        for news in newsList:
            assert self.isValidNews(news)
        self.articles.insert_many(newsList)

    def getLatestNews(self, provider=None):
        if provider:
            cond = {'provider': provider}
        else:
            cond = {}
        try:
            article = self.articles.find(cond).sort('publishedAt', -1).limit(1).next()
            del article['_id']
            article['publishedAt'] = article['publishedAt'].timestamp()
            return article
        except StopIteration:
            return None

    def getNewsCount(self, provider=None):
        if not provider:
            return self.articles.count()
        else:
            return self.articles.count({'provider': provider})

    def getFailedCrawlCount(self):
        return self.failedCrawls.count()
