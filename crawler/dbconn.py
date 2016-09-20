from pymongo import MongoClient


class NewsDatabase:
    def __init__(self):
        self.client = MongoClient('localhost', 27017)
        self.client.drop_database('test')
        self.db = self.client.get_database('test')
        self.articles = self.db.get_collection('articles')


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

        if self.hasNews(news['provider'], news['providerNewsID']):
            raise ValueError('Duplicate news')

        # insert_one 함수에서 인자로 들어온 dict를 변경합니다 (_id 추가)
        # 이를 방지하기 위해 dict()를 이용해 복사본을 insert하도록 합니다.
        self.articles.insert_one(dict(news))

    def addMultipleNews(self, newsList):
        for news in newsList:
            assert self.isValidNews(news)
        self.articles.insert_many(newsList)

    def getLatestNews(self):
        article = self.articles.find().sort('publishedAt', -1).limit(1).next()
        del article['_id']
        return article
