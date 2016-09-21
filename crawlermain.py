from crawler import (
    crawler,
    dbconn,
    chosun,
    donga,
    hani
)

import sys

def main():
    if len(sys.argv) != 3:
        print('Usage : crawlermain [source] [crawlStartTime]')
        sys.exit(1)

    parserClassDict = {
        'chosun': chosun.ParserChosun,
        'donga': donga.ParserDonga,
        'hani': hani.ParserHani,
    }

    parserType = sys.argv[1]
    crawlStartTime = int(sys.argv[2])

    parser = parserClassDict[parserType]()
    # db = dbconn.NewsDatabase('mongodb://ssomanews:ssomanews1029@ds021346.mlab.com:21346/somanews', 'somanews')
    db = dbconn.NewsDatabase('mongodb://localhost:27017/', 'test')
    crawler.crawlSince(db, parser, crawlStartTime)


if __name__ == '__main__':
    main()
