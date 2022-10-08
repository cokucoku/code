let relative = function (el, option) {
    let setoption = {
        relative: {},//数据
        fullscreen: true,//自适应视窗
        bgColor: "#fff",//背景颜色
        scale: 1,//缩放
        radius: 40,//圈的半径大小
        shadowColor:'#000',//圈投影颜色
        rectColor:'#fff',//矩形字体颜色
        lineColor: '#000',//线条颜色
        nameColor: '#000',//name字体颜色
        nameSize: 16,//name字体大小
        msColor: '#666',//ms字体颜色
        msSize: 13,//ms字体大小
    }
    const myoption = Object.assign(setoption, option)
    let elem
    if (typeof (el) == 'string') {
        elem = document.querySelector(el);
    } else {
        elem = el
    }
    //画布开始
    elem.style.backgroundColor = myoption.bgColor
    if (myoption.fullscreen) {
        let sw = window.innerWidth
        let sh = window.innerHeight
        chuli(sw, sh)
        window.addEventListener('resize', () => {
            let sw = window.innerWidth
            let sh = window.innerHeight
            chuli(sw, sh)
        })
    } else {
        let sw = elem.width
        let sh = elem.height
        chuli(sw, sh)
    }


    function chuli(sw, sh) {
        elem.width = sw
        elem.height = sh
        let ctx = elem.getContext("2d");
        let cx = sw / 2;
        let cy = sh / 2;
        ctx.translate(cx, cy);
        ctx.scale(myoption.scale, myoption.scale)
        let font_size = myoption.nameSize;
        let radius = myoption.radius;
        ctx.lineWidth = 1;
        ctx.strokeStyle = myoption.lineColor;
        ctx.fillStyle = myoption.nameColor;
        ctx.font = font_size + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        //画图
        let img = new Image()
        img.src = myoption.relative.pic
        img.onload = function () {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = myoption.shadowColor
            ctx.lineWidth = 5
            ctx.stroke()
            ctx.closePath()
            ctx.clip();
            ctx.drawImage(img, 0, 0, img.width, img.height, -radius, -radius, radius * 2, radius * 2);
            ctx.restore()
        }

        //画中间的圈人物
        ctx.save()
        ctx.shadowColor = myoption.shadowColor
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 24
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fill()
        ctx.closePath()
        ctx.restore()
        //字体
        ctx.save()
        ctx.fillText(myoption.relative.name, 0, radius + 20);
        ctx.font = myoption.msSize+"px Arial";
        ctx.fillStyle = myoption.msColor
        ctx.fillText(myoption.relative.ms, 0, radius + 38);
        ctx.restore()

        //旁边的支树

        let deg = 0;
        let linelong = cx - 2 * radius
        let midPotion = linelong / 2 - 25


        /*
            圆心坐标：(x0,y0)
            半径：r
            角度：a
            则圆上任一点为：（x1,y1）
            x1   =   x0   +   r   *   cos( a )
            y1   =   y0   +   r   *   sin( a )
            */

        for (let i = 0; i < myoption.relative.relative.length; i++) {


            ctx.beginPath()
            ctx.moveTo(0, 0)
            let x1 = linelong * Math.cos(deg)
            let y1 = linelong * Math.sin(deg)
            let x2 = Math.cos(deg)
            let y2 = Math.sin(deg)
            ctx.lineTo(x1, y1)
            ctx.stroke()
            ctx.closePath()
            //画图
            let img = new Image()
            img.src = myoption.relative.relative[i].pic
            img.onload = function () {
                ctx.save()
                ctx.moveTo(x1, y1)
                ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
                ctx.clip();
                ctx.drawImage(img, 0, 0, img.width, img.height, x1 - radius, y1 - radius, radius * 2, radius * 2);
                ctx.restore()
            }
            //画支树圈
            ctx.save()
            ctx.shadowColor = myoption.shadowColor
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            ctx.shadowBlur = 24
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
            ctx.fill()
            ctx.closePath()
            ctx.restore()
            //关系箭头
            ctx.save()
            ctx.fillStyle = myoption.lineColor
            ctx.rotate(deg)
            ctx.beginPath()
            ctx.rect(x2 + midPotion, y2 - 10, 50, 20)
            ctx.fill()
            ctx.closePath()
            ctx.restore()
            //箭头开始
            ctx.save()
            ctx.fillStyle = myoption.lineColor
            ctx.rotate(deg)
            if (myoption.relative.relative[i].to) {
                ctx.beginPath()
                ctx.moveTo(x2 + midPotion + 64, 0)
                ctx.lineTo(x2 + midPotion + 64, 0)
                ctx.lineTo(x2 + midPotion + 55, 6)
                ctx.lineTo(x2 + midPotion + 55, -6)
                ctx.closePath()
                ctx.fill()
            } else if (myoption.relative.relative[i].from) {
                ctx.beginPath()
                ctx.moveTo(x2 + midPotion - 14, 0)
                ctx.lineTo(x2 + midPotion - 14, 0)
                ctx.lineTo(x2 + midPotion - 5, 6)
                ctx.lineTo(x2 + midPotion - 5, -6)
                ctx.closePath()
                ctx.fill()
            } else if (myoption.relative.relative[i].both) {
                ctx.beginPath()
                ctx.moveTo(x2 + midPotion + 64, 0)
                ctx.lineTo(x2 + midPotion + 64, 0)
                ctx.lineTo(x2 + midPotion + 55, 6)
                ctx.lineTo(x2 + midPotion + 55, -6)
                ctx.closePath()
                ctx.fill()
                ctx.beginPath()
                ctx.moveTo(x2 + midPotion - 14, 0)
                ctx.lineTo(x2 + midPotion - 14, 0)
                ctx.lineTo(x2 + midPotion - 5, 6)
                ctx.lineTo(x2 + midPotion - 5, -6)
                ctx.closePath()
                ctx.fill()

            }

            ctx.restore()
            //箭头结束
            ctx.save()
            ctx.font = myoption.msSize+"px Arial";
            ctx.fillStyle = myoption.rectColor
            ctx.rotate(deg)
            if (deg > Math.PI / 2 && deg < 3 * Math.PI / 2) {
                //ctx.save()
                ctx.rotate(Math.PI)
                ctx.fillText(myoption.relative.relative[i].type, x2 - midPotion - 25, 0);
                //ctx.restore()
            } else {
                ctx.fillText(myoption.relative.relative[i].type, x2 + midPotion + 25, 0);
            }
            ctx.restore()
            //字体
            ctx.save()
            ctx.fillText(myoption.relative.relative[i].name, x1, y1 + radius + 30);
            ctx.font =myoption.msSize+"px Arial";
            ctx.fillStyle = myoption.msColor
            ctx.fillText(myoption.relative.relative[i].ms, x1, y1 + radius + 48);
            ctx.restore()
            //deg += 2 * Math.PI / myoption.relative.relative.length*.4*Math.random()+2 * Math.PI/myoption.relative.relative.length
            deg += 2 * Math.PI / myoption.relative.relative.length

        }


    }

}
