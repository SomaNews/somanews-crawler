import urllib
from urllib import request
import os
import re

for path, dir, files in os.walk("."):
    for filename in files:
        try:
            ext = os.path.splitext(filename)[-1]
            if ext == '.html' or ext == '.htm':
                fpath = "%s/%s" % (path, filename)
                fcontent = open(fpath, "rb").read()

                matchURL = re.search(b'<!-- saved from url=\\(\\d+\\)(.+) -->', fcontent)
                if matchURL:
                    matchCharset = re.search(b"""((?i)charset)\\s*=\\s*['"]?([a-zA-Z0-9-]+)['"]?""", fcontent)
                    if matchCharset:
                        charset = matchCharset.group(2).decode('ascii')
                    else:
                        charset = 'utf-8'

                    furl = matchURL.group(1).decode(charset)
                    print("Purining %s -> %s" % (fpath, furl))

                    real_fcontent = urllib.request.urlopen(furl).read()
                    open(fpath, "wb").write(real_fcontent)
        except UnicodeError:
            print('exception on %s/%s' % (path, filename))
