from crawler import (
    crawler,
    chosun,
    donga,
    hani
)

import sys
import json


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
    data = crawler.crawlSince(parser, crawlStartTime)
    print(json.dumps(data))


if __name__ == '__main__':
    main()
