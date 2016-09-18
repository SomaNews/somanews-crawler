from sortedcontainers import SortedListWithKey


class NewsEntry:
    def __init__(self, data):
        self.data = data

        # 데이터 구분용으로 필요한것
        self.source = data['source']  # 뉴스사
        self.newsID = data['newsID']
        self.cTime = data['cTime']

    # Equality check
    def __eq__(self, rhs):
        return (
            self.source == rhs.source and
            self.newsID == rhs.newsID
        )


class NewsDatabase:
    def __init__(self):
        self.newsList = SortedListWithKey(key=lambda x: -x.cTime)

    def addNews(self, news):
        entry = NewsEntry(news)
        if entry in self.newsList:
            raise ValueError('Duplicate news')
        self.newsList.add(entry)

    def getLatestNews(self):
        return self.newsList[0]

    def getLatestNewsTime(self):
        return self.newsList[0].cTime

    def getLatestNewses(self, count):
        return self.newsList[:count]


