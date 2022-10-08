/*
 *  滑块插件.
 *
 *
 *  * Copyright 2016 (c) liguangfa
 *  * https://github.com/cokucoku/myplugin
 *  *
 *
 *  Date: 2016.6.16
 */
let Slider = function(el, option) {
    let _this = this
    let setoption = {
        theme: 'blue', //red,yellow,black,green,
        size: 'm', //s,m,l
        initvalue: 0,
        showtip: true,
        min:0,
        max:100,
        step: 1,
        showstop: false,
        slideend: function(val) {}
    }
    let settheme = 'red,yellow,black,green,blue'
    let setsize = 's,m,l'
    let myoption = Object.assign(setoption, option)
    let theme = myoption.theme
    let size = myoption.size
    let showtip = myoption.showtip
    let initvalue = myoption.initvalue
    let min = myoption.min
    let max = myoption.max
    let step = myoption.step
    if(step<=0){
        step=1
    }
    let showstop = myoption.showstop
    if (settheme.indexOf(theme) == -1) {
        theme = 'blue'
    }
    if (setsize.indexOf(size) == -1) {
        size = 'm'
    }
    if(initvalue>max){
        initvalue=max
    }else if(initvalue<min){
       initvalue=min
    }else{
        initvalue=initvalue
    }
    max=max-min
    initvalue=(initvalue-min)/max*100//转成对应的百分比位置
    //建立骨骼
    let evstep=(step /max )*100//每隔多少量
    let runway = document.createElement("div")
    let bar = document.createElement("div")
    let wrap = document.createElement("div")
    let tooltip = document.createElement("div")
    if (showstop) {
        let stops = []
        for (let i = 1; i <= Math.floor(max / step) - 1; i++) {
            let stop = document.createElement("div")
            stop.classList.add('stop')
            stops.push(stop)
        }
        stops.map(function(item, index) {
            item.style.left = (index + 1) * evstep+ "%"
            runway.appendChild(item)
        });
    }
    let button = document.createElement("div")
    runway.classList.add('slider-runway', theme, size)
    bar.classList.add('slider-bar')
    wrap.classList.add('slider-wrap')
    button.classList.add('slider-button')
    tooltip.classList.add('slider-tooltip')
    wrap.appendChild(button)
    wrap.appendChild(tooltip)
    runway.appendChild(bar)
    runway.appendChild(wrap)
    if (typeof(el) == 'string') {
        el = document.querySelector(el);
    } else {
        el = el
    }
    if (!showtip) {
        tooltip.style.display = 'none'
    }
    el.appendChild(runway)

    //如果外層有DISPLAY：none判斷 BEGIN
    let thew, theleft, elp,wrapleft,fullw
    if (el.offsetWidth == 0) {
        elp = pa(el)
        if (elp != undefined) {
            elp.style.display = "block"
            fullw = runway.offsetWidth
            wrapleft = el.offsetWidth * initvalue * 0.01
            elp.style.display = "none"
        }
    }else{
        fullw = runway.offsetWidth//轨道总长度
        wrapleft = el.offsetWidth * initvalue * 0.01

    }
    function pa(elm) {
        do {
            elm = elm.parentElement;
        } while (elm.parentElement != null && elm.offsetWidth == 0)
        if (elm.tagName == 'BODY') {
            return
        }
        return elm.children[0]
    }
     //如果外層有DISPLAY：none判斷 END
    let down = false,
        ov = false, //为了tooltip
        drag = false //为了判断是否有拖动滑块与否
    let old_x,
        new_x = initvalue * fullw * 0.01;
    chuli()

    wrap.addEventListener('mouseenter', function(e) {
        ov = true
    })
    wrap.addEventListener('mouseleave', function(e) {
        ov = false
    })
    wrap.addEventListener('mousedown', function(e) {
        wrapleft=wrap.offsetLeft
        //e.stopPropagation()
        down = true
        drag = true
        old_x = e.pageX - wrapleft;

    })
    wrap.addEventListener('touchstart', function(e) {
        //e.stopPropagation()
        down = true
        drag = true
        old_x = e.targetTouches[0].clientX - wrapleft;
    }, { passive: true })
    document.addEventListener('mouseup', function(e) {
        e.preventDefault()
        down = false
        if (drag) {
            chuli('end')
        }
        drag = false
        wrapleft = wrap.offsetLeft
    })
    document.addEventListener('mousemove', function(e) {
        e.preventDefault()
        if (down) {
            tooltip.style.opacity = '1'
            new_x = e.pageX - old_x
            chuli()
            wrapleft = wrap.offsetLeft
        } else if (ov) {
            tooltip.style.opacity = '1'
        } else {
            tooltip.style.opacity = ''
        }
    })
    document.addEventListener('touchend', function(e) {
        //e.preventDefault()
        down = false
        if (drag) {
            chuli('end')
        }
        drag = false
        wrapleft = wrap.offsetLeft
    }, { passive: true })
    document.addEventListener('touchmove', function(e) {
        //e.preventDefault()
        if (down) {
            //wrap.classList.add('hover')
            new_x = e.targetTouches[0].clientX - old_x
            chuli()
            wrapleft = wrap.offsetLeft
        } else {
            //wrap.classList.remove('hover')
        }
    }, { passive: true })

    window.addEventListener('resize', function(e) {
        fullw = runway.offsetWidth
        wrapleft = wrap.offsetLeft
    })

    function chuli(string) {
        if (new_x <= 0) {
            new_x = 0
        } else if (new_x >= fullw) {
            new_x = fullw
        }
        var po = (new_x / fullw) * 100//本来有加Math.floor
        if (po % evstep == 0) {
            po = po
        } else {
            if (po % evstep >= evstep * 0.5*step) {
                po = po - (po % evstep) + evstep
            } else {
                po = po - (po % evstep)

            }

        }
        string=string==undefined?'scroll':string
        myoption.slideend.call(_this, Math.floor(po/evstep)*step+min, string);
        wrap.style.left = po + '%'
        bar.style.width = po + '%'
        tooltip.innerText =Math.floor(po/evstep)*step+min
    }
    this.go = function(po) {
        wrap.style.left = po + '%'
        bar.style.width = po + '%'
        tooltip.innerText = po
        wrapleft = wrap.offsetLeft //滑塊的位置 因為整個拖動關係跟滑塊位置有關係，所以從新要獲取
    }
    this.disabled = function() {
        el.style.cssText = "pointer-events: none"
    }
    this.enabled = function() {
        el.style.cssText = ""
    }
}
