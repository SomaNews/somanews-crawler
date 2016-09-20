import logging


def fetchNewsList(parser, startIndex=0):
    '''
    뉴스를 언론사로부터 가져옵니다

    Args:
        parser: 뉴스사에 대한 파서
        startIndex: 시작 인덱스. 최신 뉴스 몇개를 스킵할지를 결정합니다

    Returns:
        뉴스를 가져오는 generator
    '''

    page = 1
    newsIndex = 0

    # Skip previous newses
    while newsIndex < startIndex:
        pageNewses = parser.parseNewsList(page)
        if len(pageNewses) + newsIndex <= startIndex:
            newsIndex += len(pageNewses)
        else:
            for news in pageNewses:
                newsIndex += 1
                if newsIndex >= startIndex:
                    yield news
        page += 1

    # Crawl news since
    while True:
        for news in parser.parseNewsList(page):
            yield news
        page += 1


def crawlSince(db, parser, since):
    try:
        for newsEntry in fetchNewsList(parser):
            if db.hasNews(parser.provider, newsEntry['providerNewsID']):
                continue  # Already have one

            try:
                news = parser.parseNews(newsEntry['url'], newsEntry['providerNewsID'])
                if news['publishedAt'] < since:
                    break
                logging.info('Crawling news "%s"' % news['title'])
                db.addNews(news)
            except:
                # 뭐든지 오류가 나면 나중에 디버깅을 하고 일단 씹는다.
                logging.exception('Error while crawling news "%s"' % newsEntry['title'])

    except:
        # 일단 지금까지 크롤링한거라도
        logging.exception('Error in newsEntryGenerator')

