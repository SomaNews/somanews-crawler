
from crawler import (
    dbconn,
    crawler,

    chosun,
    donga,
    hani,
    khan
)

def main():
    parserClassDict = {
        'chosun': chosun.ParserChosun,
        'donga': donga.ParserDonga,
        'hani': hani.ParserHani,
        'khan': khan.ParserKhan
    }

    db = dbconn.NewsDatabase('mongodb://ssomanews:ssomanews1029@localhost:27017/somanews', 'somanews')

    for provider, parserClass in parserClassDict.items():
        print('Crawling from provider %s...' % provider)
        latestNews = db.getLatestNews(provider)

        if not latestNews:
            # Cronable crawler only accept provider
            continue

        parser = parserClass()
        crawlStartTime = latestNews['publishedAt']
        crawler.crawlSince(db, parser, crawlStartTime)


if __name__ == '__main__':
    main()
