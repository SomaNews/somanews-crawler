import logging
import time


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
        if not pageNewses:  # News ended
            return
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
        pageNewses = parser.parseNewsList(page)
        if not pageNewses:  # News ended
            break
        for news in pageNewses:
            yield news
        page += 1


def crawlSince(db, parser, since):
    failedCrawls = 0
    with open('log.txt', 'a') as logFile:
        try:
            for newsEntry in fetchNewsList(parser):
                try:
                    news = parser.parseNews(newsEntry['url'], newsEntry['providerNewsID'])
                    if news['publishedAt'] < since:
                        break

                    currentTime = time.strftime("%a, %d %b %Y %H:%M:%S", time.localtime())
                    publishedAt = time.strftime("%a, %d %b %Y %H:%M:%S", time.localtime(news['publishedAt']))
                    logString = '[%s] [Written at %s] Crawling news "%s"' % (currentTime, publishedAt, news['title'])
                    print(logString)
                    logFile.write(logString + "\n")
                    db.addNews(news)

                except Exception as e:
                    # 뭐든지 오류가 나면 나중에 디버깅을 하고 일단 씹는다.
                    print('Error while crawling news "%s"' % newsEntry['title'])
                    if isinstance(e, KeyboardInterrupt):
                        raise

                    newsEntry['provider'] = parser.provider
                    db.addFailedCrawl(newsEntry)

                    failedCrawls += 1
                    if failedCrawls == 30:
                        print('30 failed crawls. Aborting')
                        return

        except Exception as e:
            # 일단 지금까지 크롤링한거라도
            logging.exception('Error in newsEntryGenerator')
            if isinstance(e, KeyboardInterrupt):
                raise

