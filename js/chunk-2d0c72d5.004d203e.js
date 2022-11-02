(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c72d5"],{5004:function(t,e,v){"use strict";v.r(e);var a=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h1",[t._v("翻页 page")]),v("h3",[t._v("演示实例")]),t._m(0),v("h3",[t._v("代码")]),v("div",{staticClass:"jscode"},[v("div",{staticClass:"title"},[t._v("html")]),v("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"jscontent"},[t._m(1)])]),v("div",{staticStyle:{height:"15px"}}),v("div",{staticClass:"jscode"},[v("div",{staticClass:"title"},[t._v("javascript")]),v("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"jscontent"},[t._m(2)])]),v("h3",[t._v("参数")]),t._m(3),v("h3",[t._v("方法")]),t._m(4)])},n=[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"showcase"},[v("iframe",{staticStyle:{height:"16vh"},attrs:{src:"/case/plugin/page/index.html"}})])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("pre",[v("code",{staticClass:"language-xml"},[t._v('<link rel="stylesheet" href="Page.css">\n<div id="page"></div>')])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("pre",[v("code",{staticClass:"language-javascript"},[t._v("var a = new Page(\n    '#page', {\n        curpage: 1,//初始页\n        totalpage: 10, //总页数,\n        theme: 'green', //red,yellow,black,green,\n        size: 'm', //s,m,l\n        layout: 'total,prevnext,pager,jumpr',//total,prevnext, pager,jumpr\"\n        clickback: function (page) {\n            //自己的代码，可以请求API\n        }\n    });\n//\nvar tdong = document.querySelector('.tdong')\ntdong.onclick = function () {\n    a.go(2)//跳转到第二页\n}")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),v("th",[t._v("说明")]),v("th",[t._v("类型")]),v("th",[t._v("可选值")]),v("th",[t._v("默认值")])])]),v("tbody",[v("tr",[v("td",[t._v("curpage")]),v("td",[t._v("初始页码")]),v("td",[t._v("Number")]),v("td",[t._v("1、2、3...")]),v("td",[t._v("1")])]),v("tr",[v("td",[t._v("totalpage")]),v("td",[t._v("总共页数")]),v("td",[t._v("Number")]),v("td",[t._v("1、2、3...")]),v("td",[t._v("10")])]),v("tr",[v("td",[t._v("theme")]),v("td",[t._v("外观颜色")]),v("td",[t._v("String")]),v("td",[v("code",[t._v("red")]),t._v(","),v("code",[t._v("yellow")]),t._v(","),v("code",[t._v("black")]),t._v(","),v("code",[t._v("green")]),t._v(","),v("code",[t._v("blue")])]),v("td",[t._v("green")])]),v("tr",[v("td",[t._v("size")]),v("td",[t._v("外观尺寸")]),v("td",[t._v("String")]),v("td",[v("code",[t._v("s")]),t._v(","),v("code",[t._v("m")]),t._v(","),v("code",[t._v("l")])]),v("td",[t._v("m")])]),v("tr",[v("td",[t._v("layout")]),v("td",[t._v("结构")]),v("td",[t._v("String")]),v("td",[v("code",[t._v("total")]),t._v(","),v("code",[t._v("prevnext")]),t._v(","),v("code",[t._v("pager")]),t._v(","),v("code",[t._v("jumpr")])]),v("td",[v("code",[t._v("pager")])])]),v("tr",[v("td",[t._v("clickback")]),v("td",[t._v("返回跳转的页码")]),v("td",[t._v("Function")]),v("td",[t._v("-")]),v("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),v("th",[t._v("参数")]),v("th",[t._v("说明")])])]),v("tbody",[v("tr",[v("td",[t._v("go")]),v("td",[t._v("页码")]),v("td",[t._v("跳到指定页码")])])])])}],_=v("2877"),c={},d=Object(_["a"])(c,a,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c72d5.004d203e.js.map