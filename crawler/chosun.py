import feedparser as fp
import time
import re
from pyquery import PyQuery as pq


chosun_url_regex = re.compile(
    r'http://news.chosun.com/site/data/html_dir/\d+/\d+/\d+/(\d+).html'
)

chosun_desc_regex = re.compile(
    r'''<table border=0 cellspacing=3 cellpadding=0 width=100%><tr><td><img src="([^"]+)" border=0></td></tr></table>((.|[\r\n])+)'''
)


def chosun_readrss(rssdata):
    rssfeeds = fp.parse(rssdata)
    feeds = []

    for entry in rssfeeds.entries:
        # newsID
        url = entry.link
        url_matched = chosun_url_regex.match(url)
        newsID = url_matched.group(1)

        # mainImageURL
        desc = entry.description.strip()
        desc_matched = chosun_desc_regex.match(desc)
        if not desc_matched:  # no thumbnail
            mainImageURL = ''
        else:
            mainImageURL = desc_matched.group(1)

        # cTime
        cTime = time.mktime(entry.published_parsed) + 9 * 3600

        feeds.append({
            'source': 'chosun',
            'newsID': newsID,

            'title': entry.title,
            'cTime': cTime,
            'mainImage': mainImageURL,
            'link': url,
        })

    return feeds


def chosun_getcontent(newshtml):
    d = pq(newshtml)
    return d('div.par').text().strip()


def chosun_parse_newslist(newshtml):
    d = pq(newshtml)
    newslist = []
    for item in d('dl.list_item').items():
        headline = item.find('dt')
        url = headline.find('a').attr('href')
        title = headline.text().strip()
        newslist.append({
            'title': title,
            'url': url
        })

    return newslist
