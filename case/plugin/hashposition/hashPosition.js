/*
 *  bubble随机不重叠.
 *
 *
 *  * Copyright 2021 (c) liguangfa
 *  * https://github.com/cokucoku/myplugin
 *  *
 *
 *  Date: 2021.06.21
 */

function hashPosition(options) {
    let defaultOptions = {
        el: '',
        bubbleWidth: 60,
        bubbleHeight: 60,
        num: 6,
        complete: () => {
        }
    };
    this.option = Object.assign(defaultOptions, options);
    let num = this.option.num
    let iconWidth = this.option.bubbleWidth;   //值越大，元素左右间隔越大
    let iconHeight = this.option.bubbleHeight;  //值越大，元素上下间隔越大
    let targetHeight = typeof(this.option.el)==='string'?document.querySelector(this.option.el).offsetHeight:this.option.el.offsetHeight;//活动高度
    let targetWidth = typeof(this.option.el)==='string'?document.querySelector(this.option.el).offsetWidth:this.option.el.offsetWidth;//活动宽度
    let _tmpArray = [];
    let position=[]
    //当放置的元素的宽高大于浏览器窗口的宽高时，直接返回
    if (targetWidth < iconWidth || targetHeight < iconHeight) {
        return false;
    }

    let xNum = parseInt(targetWidth / iconWidth, 10);    //一行可以放置元素的个数
    let yNum = parseInt(targetHeight / iconHeight, 10);  //一列可以放置元素的个数
    let allNum = xNum * yNum;   //浏览器窗口内总共可以放置元素的个数
    //当需要放置的元素的个数超过浏览器窗口内总共可以放置的元素的个数时，则返回
    if (num >= allNum) {
        return false;
    }

    for (let i = 0; i < allNum; i++) {
        _tmpArray.push(i);
    }


    let xStart = 0, yStart = 0;
    while (num) {
        let pointer = Math.floor(Math.random() * allNum);    //向下取整取出0到allnum之间的任意一个整数
        //如果数组_tmpArray中不存在第pointer值，则继续
        if (!_tmpArray[pointer]) {
            continue;
        } else {
            delete _tmpArray[pointer];   //删除数组_tmpArray中第pointer个值
        }
        //console.log(pointer,_tmpArray)//這個就是留下來的pointer位置
        yStart = Math.floor(pointer / xNum) * iconHeight;
        xStart = (pointer % xNum) * iconWidth;
        position.push({x:xStart,y:yStart})
        num--;
    }
    this.option.complete.call(this,position)
}

