import logging

def crawlSince(parser, since):
    def newsEntryGenerator():
        page = 1
        while True:
            yield from parser.parseNewsList(page)
            page += 1

    newsList = []
    try:
        for newsEntry in newsEntryGenerator():
            try:
                news = parser.parseNews(newsEntry['url'])
                logging.info('Crawling news "%s"' % news['title'])
                if news['publishedAt'] < since:
                    break
                newsList.append(news)
            except:
                # 뭐든지 오류가 나면 나중에 디버깅을 하고 일단 씹는다.
                logging.exception('Error while crawling news "%s"', news['title'])
    except:
        # 일단 지금까지 크롤링한거라도
        logging.exception('Error in newsEntryGenerator')

    return newsList
