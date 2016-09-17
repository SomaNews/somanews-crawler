import time
import re
from pyquery import PyQuery as pq
import logging
from crawler import utils as ut


def parseNewsFromURL(url):
    """
    url로부터 뉴스를 읽어온다

    Args:
        url: 뉴스 url

    Returns:
        뉴스 데이터를 가진 dict

    """
    newshtml = ut.readURL(url, 'utf-8')
    d = pq(newshtml)

    header = d('div.article_title02')

    # publishedAt
    timeStr = d('p.title_foot span.date').text()
    publishedAt = time.mktime(time.strptime(timeStr, "%Y-%m-%d %H:%M:%S"))

    # category
    location = header.find('.location')
    category = []
    for subCategory in location.find('span').items():
        category.append(subCategory.text())
    category.append(location.find('strong a').eq(0).text())
    category = ''.join(category)

    # content
    article_txt = d('div.article_txt')
    article_txt.find('.recommend').next_all().remove()
    article_txt.find('.recommend').remove()

    firstChild = article_txt.children().eq(0)
    if firstChild.is_('strong'):
        description = firstChild.text()
        firstChild.remove()
    else:
        description = ''


    return {
        'title': header.find('h1').text(),
        'author': header.find('.repoter').text(),
        'link': url,
        'provider': 'donga',
        'category': category,
        'description': description,
        'publishedAt': publishedAt,
    }

