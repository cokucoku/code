(function (lee) {
    /* 日常常用操作製作打包成JS工具集*/
    lee.element = {
        version: lee.version
    }
//創建DOM函數
    lee.element.createDom = function (tagName, classList) {
        let dom = document.createElement(tagName)
        let cList = classList.split(',')
        for (let i = 0; i < cList.length; i++) {
            dom.classList.add(cList[i])
        }
        return dom
    }
//批量Append函數
    lee.element.appendAll = function (node, newItemArray) {
        newItemArray.map(function (elem) {
            node.appendChild(elem)
        })
    }
//缓动移动
    lee.element.move = function (target, beginX, endX, beginY, endY) {
        if (beginX != undefined || endX != undefined) {
            let timerX = setInterval(function () {
                let diffX = endX - beginX;
                let speedX = Math.ceil(diffX / 126);
                target.style.left = beginX + 'px';
                beginX += speedX;
                if (Math.abs(speedX) <= 0) {
                    clearInterval(timerX)
                }
            }, 1)
        }
        if (beginY != undefined || endY != undefined) {
            let timerY = setInterval(function () {
                let diffY = endY - beginY;
                let speedY = Math.ceil(diffY / 126);
                target.style.top = beginY + 'px';
                beginY += speedY;
                if (Math.abs(speedY) <= 0) {
                    clearInterval(timerY)
                }
            }, 1)
        }

    }
//获取元素在父元素下索引序号
    lee.element.index = function (target) {
        let ind;
        let all = target.parentNode.children
        all = Array.from(all)
        ind = all.indexOf(target)
        return ind;
    }
//元素插入
    lee.element.inAfter = function (newElement, targetElement) {
        let cloneTarget = newElement.cloneNode(true)
        let parent = targetElement.parentNode;
        parent.insertBefore(cloneTarget, targetElement.nextElementSibling);
    }
    lee.element.inBefore = function (newElement, targetElement) {
        let cloneTarget = newElement.cloneNode(true)
        let parent = targetElement.parentNode;
        parent.insertBefore(cloneTarget, targetElement);
    }
//获取相邻兄弟元素
    Node.prototype.brothers = function () {
        let _elment = this;
        let result = [];
        while (_elment.previousElementSibling != null && _elment.previousElementSibling.localName != 'script' && _elment.previousElementSibling.localName != 'style') {
            result.push(_elment.previousElementSibling);
            _elment = _elment.previousElementSibling;
        }
        _elment = this;
        while (_elment.nextElementSibling != null && _elment.nextElementSibling.localName != 'script' && _elment.nextElementSibling.localName != 'style') {
            result.push(_elment.nextElementSibling);
            _elment = _elment.nextElementSibling;
        }
        return result;
    }
//获取父元素
    Node.prototype.parents = function (el) {
        let classel = el.slice(1);
        let _elment = this;
        do {
            _elment = _elment.parentElement;
        } while (_elment.parentElement != null && _elment.className.indexOf(classel) < 0);
        if (_elment.className.indexOf(classel) < 0) {
            _elment = ""
        }
        return _elment;
    }

//时间处理相关--------------------------------------------------------------
    lee.dateCollect = {
        version: lee.version
    }
//时间戳转时间
    lee.dateCollect.toDate = function (timestamp) {
        let date = new Date(timestamp * 1000); //如果date为10位需要乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + h + m + s;
    }
//获取日期对应周几
    lee.dateCollect.getWeek = function (date) {
        let iDate = new Date(date);
        switch (iDate.getDay()) {
            case 0:
                return "周日";
            //break;
            case 1:
                return "周一";
            //break;
            case 2:
                return "周二";
            //break;
            case 3:
                return "周三";
            //break;
            case 4:
                return "周四";
            //break;
            case 5:
                return "周五";
            //break;
            case 6:
                return "周六";
            //break;
        }
    };
//两个日期差
    lee.dateCollect.dateDiff = function (beginDate, endDate) {
        let diff, diffSec, diffMin, diffHou, diffDay;
        let endD = new Date(endDate);
        let beginD = new Date(beginDate);
        diff = Math.floor((endD - beginD) / 1000);
        diffDay = Math.floor(diff / (60 * 60 * 24));
        diffHou = Math.floor((diff / (60 * 60))) - (diffDay * 24);
        diffMin = Math.floor(diff / (60)) - (diffDay * 24 * 60) - (diffHou * 60);
        diffSec = Math.floor(diff) - (diffDay * 24 * 60 * 60) - (diffHou * 60 * 60) - (diffMin * 60);
        return "两个日期相差：" + diffDay + "天" + diffHou + "小时" + diffMin + "分" + diffSec + "秒";
    };
//获取时间对应几天前，多少小时前
    lee.dateCollect.dateAgo = function (date) {
        let diff, diffSec, diffMin, diffHou, diffDay;
        let now = new Date();
        let old = new Date(date)
        diff = Math.floor((now - old) / 1000);
        diffDay = Math.floor(diff / (60 * 60 * 24));
        diffHou = Math.floor((diff / (60 * 60))) - (diffDay * 24);
        diffMin = Math.floor(diff / (60)) - (diffDay * 24 * 60) - (diffHou * 60);
        diffSec = Math.floor(diff) - (diffDay * 24 * 60 * 60) - (diffHou * 60 * 60) - (diffMin * 60);
        if (diffDay >= 1) {
            return diffDay + "天前"
        } else if (diffHou >= 1) {
            return diffHou + "小时前"
        } else if (diffMin >= 1) {
            return diffMin + "分钟前"
        } else if (diffSec >= 1) {
            return diffSec + "秒前"
        }

    };
    lee.array = {}
//数组去重
    lee.array.removeDuplicate = function (arr) {
        let n = [];
        for (let i = 0; i < arr.length; i++) {
            if (n.indexOf(arr[i]) == -1) {
                n.push(arr[i]);
            }
        }
        return n;
    }
//数组随机获取不重复的N条数据
    lee.array.getRandom = function (arr, number) {
        let n = [];
        let len = arr.length;
        let del = [];
        for (let i = 0; i < number; i++) {
            let rnd = Math.round(Math.random() * (len - 1));
            if (del.indexOf(rnd) < 0) {
                del.push(rnd);
            } else {
                i--
            }
        }
        for (let i = 0; i < del.length; i++) {
            n.push(arr[del[i]])
        }
        return n
    }
//数组随机排序
    lee.array.shuffle = function (arr) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr
    }
//骰子产生
    lee.array.dice = function () {
        let arr = [];
        for (let i = 0; i < 6; i++) {
            let t = Math.ceil(Math.random() * 6)
            arr.push(t)
        }
        return arr

    }
//对象在对象数组的索引
    lee.array.getIndex = function (arr, obj) {
        let index = null;
        let key = Object.keys(obj)[0];
        arr.every(function (value, i) {
            if (value[key] === obj[key]) {
                index = i;
                return false;
            }
            return true;
        });
        return index;
    }
//统计数组中元素出现的次数
    lee.array.repeatNum = function (arr) {
        return arr.reduce((acc, cur) => {
            if (!acc[cur]) {
                acc[cur] = 1
            } else {
                acc[cur]++
            }
            return acc
        }, {})
    }
//随机生成数量为num的不重复数组对象
    lee.array.randomArrayObject = function (num, keys) {
        let thePosition = []
        for (let i = 0; i < num; i++) {
            let pushData = {}
            for (let j = 0; j < keys.length; j++) {
                pushData[keys[j]] = Math.ceil(Math.random() * num)
            }
            let fi = thePosition.filter((el) => {
                for (let j = 0; j < keys.length; j++) {
                    return el[keys[j]] === pushData[keys[j]]
                }
            })
            if (fi.length < 1) {
                thePosition.push(pushData)
            } else {
                i--
            }
        }
        return thePosition
    }
//将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
    lee.array.chunk = function (arr, size) {
        let lastArr = []
        let len = Math.floor(arr.length / size)
        let mod = arr.length % size
        // let modArr=[]
        for (let i = 0; i < len; i++) {
            lastArr[i] = arr.slice(i * size, i * size + size)
        }
        if (mod > 0) {
            lastArr[len] = arr.slice(len * size)
        }

        return lastArr
    }


//Cookie 操作
    lee.setCookie = function (cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    lee.getCookie = function (cname) {
        let name = cname + "=";
        let allCookie = document.cookie
        let ca = allCookie.split(';')
        let el, result;
        ca.map(function (elem) {
            el = elem.replace(/\s+/g, "");
            if (el.indexOf(name) == 0) {
                result = el.substring(name.length, el.length);
            }
        })
        return result
    }
    lee.removeCookie = function (cname) {
        //获取当前时间
        let date = new Date();
        //将date设置为过去的时间
        date.setTime(date.getTime());
        let expires = "expires=" + date.toUTCString();
        document.cookie = cname + "=del;" + expires + ";path=/";

    }
//localStorage 本地存储
    lee.setItem = function (key, data, time) {
        try {
            if (!localStorage) {
                return false;
            }
            if (!time || isNaN(time)) {
                time = 60 * 60 * 24;
            }
            var cacheExpireDate = new Date().getTime() + time * 1000;
            var cacheVal = {val: data, exp: cacheExpireDate};
            localStorage.setItem(key, JSON.stringify(cacheVal)); //存入缓存值
        } catch (e) {
            console.log(e)
        }
    }
    lee.getItem = function (key) {
        try {
            if (!localStorage) {
                return false;
            }
            var cacheVal = localStorage.getItem(key);
            var result = JSON.parse(cacheVal);
            var now = new Date().getTime();
            //缓存不存在
            if (!result) {
                return null;
            }
            //缓存过期
            if (now > result.exp) {
                this.removeItem(key);
                return "";
            }
            return result.val;
        } catch (e) {
            lee.removeItem(key);
            return null;
        }
    }
    lee.removeItem = function (key) {
        if (!localStorage) {
            return false;
        }
        localStorage.removeItem(key);
    }
    lee.color = {}
//将16进制转RGB
    lee.color.toRgb = function (color) {
        let colors = color.split('#')[1]
        let lastColor = ''
        let zero = ''
        if (colors.length === 3) {
            lastColor = colors.slice(0, 1) + colors.slice(0, 1) + colors.slice(1, 2) + colors.slice(1, 2) + colors.slice(2, 3) + colors.slice(2, 3)

        } else {
            let buzeroNum = 6 - colors.length
            for (let i = 0; i < buzeroNum; i++) {
                zero += '0'
            }
            lastColor = zero + colors
        }
        let r = lastColor.slice(0, 2)
        let r1 = r.slice(0, 1)
        let r2 = r.slice(1, 2)
        let g = lastColor.slice(2, 4)
        let g1 = g.slice(0, 1)
        let g2 = g.slice(1, 2)
        let b = lastColor.slice(4, 6)
        let b1 = b.slice(0, 1)
        let b2 = b.slice(1, 2)
        let R = Number(tonum(r1) * 16) + Number(tonum(r2))
        let G = Number(tonum(g1) * 16) + Number(tonum(g2))
        let B = Number(tonum(b1) * 16) + Number(tonum(b2))
        let rgb = 'rgb(' + R + ',' + G + ',' + B + ')'
        return rgb
    }

    function tonum(str) {
        switch (str) {
            case 'a':
            case 'A':
                str = 10
                break;
            case 'b':
            case 'B':
                str = 11
                break;
            case 'c':
            case 'C':
                str = 12
                break;
            case 'd':
            case 'D':
                str = 13
                break;
            case 'e':
            case 'E':
                str = 14
                break;
            case 'f':
            case 'F':
                str = 15
                break;
        }
        return str
    }

//将RGB转16进制
    lee.color.rgbTo16 = function (color) {
        let lastColor = ''
        let colors = color.split(',')
        if (colors.length != 3) {
            console.warn('你输入的RGB值错误')
            lastColor = '你输入的RGB值错误'
            return lastColor
        }
        let r = colors[0]
        let g = colors[1]
        let b = colors[2]
        let fr = String(toletter(Math.floor(r / 16)))
        let lr = String(toletter(r % 16))
        let fg = String(toletter(Math.floor(g / 16)))
        let lg = String(toletter(g % 16))
        let fb = String(toletter(Math.floor(b / 16)))
        let lb = String(toletter(b % 16))
        lastColor = '#' + fr + lr + fg + lg + fb + lb
        return lastColor
    }

    function toletter(str) {
        switch (str) {
            case 10:
                str = 'a'
                break;
            case 11:
                str = 'b'
                break;
            case 12:
                str = 'c'
                break;
            case 13:
                str = 'd'
                break;
            case 14:
                str = 'e'
                break;
            case 15:
                str = 'f'
                break;
        }
        return str
    }

//将Hsv转RGB
    lee.color.hsvToRgb = function (hsv) {
        let r, g, b, i, f, p, q, t;
        let h=hsv.split(',')[0]
        let s=hsv.split(',')[1]
        let v=hsv.split(',')[2]
        //自己写的补充
        h=h/360
        s=s/100
        v=v/100

        //
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };

    }
//将RGB转Hsv
    lee.color.rgbToHsv = function (rgb) {
        let r=Number(rgb.split(',')[0])
        let g=Number(rgb.split(',')[1])
        let b=Number(rgb.split(',')[2])
        let max = Math.max(r, g, b), min = Math.min(r, g, b),
            d = max - min,
            h,
            s = (max === 0 ? 0 : d / max),
            v = max / 255;

        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }

        return {
            h: Math.round(h*360),
            s: Math.round(s*100),
            v: Math.round(v*100)
        };

    }
//将Object格式的发送参数转为连接字符串参数
    lee.objToStr = function (obj) {
        let params = Object.keys(obj).map(function (key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        }).join("&");
        return params
    }
//api请求
    lee.api = function (apiurl, params, fmt, method) {
        let xmlhttp = new XMLHttpRequest();
        params = typeof (params) == 'object' ? lee.objToStr(params) : encodeURI(params);
        apiurl = method.toLowerCase() == "post" ? apiurl : apiurl.indexOf("?") < 0 ? apiurl + '?' + params : apiurl.replace(/[&?]*/g, "") + '&' + params;
        xmlhttp.open(method, apiurl, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(params || null);
        xmlhttp.onreadystatechange = function () {
            var rs
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (fmt.toLowerCase() == 'json') {
                    try {
                        rs = JSON.parse(xmlhttp.responseText)
                    } catch (e) {
                        rs = xmlhttp.responseText
                    }
                    xmlhttp.onComplete.call(xmlhttp, rs)
                } else {
                    rs = xmlhttp.responseXml
                    xmlhttp.onComplete.call(xmlhttp, rs)
                }
            }

        }
        return xmlhttp
    }
})(window['lee'] || (window['lee'] = {version: '1.0'}));
