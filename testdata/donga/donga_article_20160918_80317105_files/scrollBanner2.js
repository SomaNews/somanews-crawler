function initMoving2(target, position, topLimit, btmLimit, newTop) {
    if (!target)
        return false;

    var obj = target;
    obj.initTop = position + 5;
    obj.topLimit = topLimit;
    obj.bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;

    obj.style.position = "absolute";
    obj.top = obj.initTop;
    obj.left = obj.initLeft;

    if (typeof(window.pageYOffset) == "number") {    //WebKit
        obj.getTop = function () {
            return window.pageYOffset;
        }
    } else if (typeof(document.documentElement.scrollTop) == "number") {
        obj.getTop = function () {
            if (document.documentElement.scrollTop > 235)
                return Math.max(document.documentElement.scrollTop, document.body.scrollTop) - 0;
            else return 0;
        }
    } else {
        obj.getTop = function () {
            return 0;
        }
    }

    if (self.innerHeight) {    //WebKit
        obj.getHeight = function () {
            return self.innerHeight;
        }
    } else if (document.documentElement.clientHeight) {
        obj.getHeight = function () {
            return document.documentElement.clientHeight;
        }
    } else {
        obj.getHeight = function () {
            return 500;
        }
    }

    obj.move = setInterval(function () {
        if (obj.initTop > 0) {
            pos = obj.getTop() + obj.initTop;
        } else {
            pos = obj.getTop() + obj.getHeight() + obj.initTop;
            //pos = obj.getTop() + obj.getHeight() / 2 - 15;
        }

        if (pos > obj.bottomLimit) pos = obj.bottomLimit;
        if (pos < obj.topLimit) pos = obj.topLimit;
        if (pos > newTop) pos = obj.getTop() - obj.initTop - 20;


        interval = obj.top - pos;
        obj.top = obj.top - interval / 3;
        obj.style.top = obj.top + "px";
    }, 30)
}