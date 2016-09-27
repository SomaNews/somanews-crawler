import urllib
import lxml

def readURL(url, encoding):
    """URL에 따라 파일을 읽는다.

    Arguments:
        url (str) -- 읽어올 URL
        encoding (str) -- 해당 파일이 인코딩된 형식

    Returns:
        str -- 읽은 내용
    """
    return urllib.request.urlopen(url).read().decode(encoding)


def readURLWithRedirect(url, encoding):
    """URL에 따라 파일을 읽는다.

    Arguments:
        url (str) -- 읽어올 URL
        encoding (str) -- 해당 파일이 인코딩된 형식

    Returns:
        str -- 읽은 내용
    """
    page = urllib.request.urlopen(url)
    content = page.read().decode(encoding)
    url = page.geturl()
    return content, url


def textWithNewline(element):
    if not element:
        return ''

    text = []

    def add_text(tag, no_tail=False):
        if tag.text and not isinstance(tag, lxml.etree._Comment):
            text.append(tag.text.strip())

        for child in tag.getchildren():
            add_text(child)

        if tag.tag == 'p' or tag.tag == 'br':
            text.append('\n')

        if not no_tail and tag.tail:
            text.append(tag.tail.strip())

    for tag in element:
        add_text(tag, no_tail=True)
    return ' '.join(text).strip().replace(' \n', '\n').replace('\n ', '\n')
