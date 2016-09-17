import urllib

def readURL(url, encoding):
    """URL에 따라 파일을 읽는다.

    Arguments:
        url (str) -- 읽어올 URL
        encoding (str) -- 해당 파일이 인코딩된 형식

    Returns:
        str -- 읽은 내용
    """
    return urllib.request.urlopen(url).read().decode(encoding)
