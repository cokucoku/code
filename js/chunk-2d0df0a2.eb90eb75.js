(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df0a2"],{"87e2":function(t,s,a){"use strict";a.r(s);var c=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("抛物线 parabola")]),a("h3",[t._v("演示实例")]),a("div",{staticClass:"showcase"},[a("iframe",{staticStyle:{height:"30vh"},attrs:{src:"/case/plugin/parabola/index.html"}})]),a("h3",[t._v("代码")]),a("div",{staticClass:"jscode"},[a("div",{staticClass:"title"},[t._v("javascript")]),a("div",{staticClass:"jscontent"},[a("pre",[a("div",{staticClass:"cm-line"},[a("span",{staticClass:"cm-keyword"},[t._v("let")]),t._v(" "),a("span",{staticClass:"cm-variable cm-def"},[t._v("pa")]),t._v(" "),a("span",{staticClass:"cm-operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"cm-keyword"},[t._v("new")]),t._v(" "),a("span",{staticClass:"cm-variable"},[t._v("parabola")]),a("span",{staticClass:"cm-punctuation"},[t._v("(")]),a("span",{staticClass:"cm-punctuation"},[t._v("{")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-property cm-def"},[t._v("el")]),a("span",{staticClass:"cm-punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"cm-string"},[t._v("'#ball'")]),a("span",{staticClass:"cm-punctuation"},[t._v(",")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-property cm-def"},[t._v("target")]),a("span",{staticClass:"cm-punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"cm-string"},[t._v("'#target'")]),a("span",{staticClass:"cm-punctuation"},[t._v(",")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-property cm-def"},[t._v("speed")]),a("span",{staticClass:"cm-punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"cm-number"},[t._v("8")]),a("span",{staticClass:"cm-punctuation"},[t._v(",")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-property cm-def"},[t._v("curvature")]),a("span",{staticClass:"cm-punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"cm-number"},[t._v("0.0004")]),a("span",{staticClass:"cm-punctuation"},[t._v(",")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-property cm-def"},[t._v("success")]),a("span",{staticClass:"cm-punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"cm-keyword"},[t._v("function")]),t._v(" "),a("span",{staticClass:"cm-punctuation"},[t._v("(")]),a("span",{staticClass:"cm-variable cm-def"},[t._v("status")]),a("span",{staticClass:"cm-punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"cm-punctuation"},[t._v("{")])]),a("div",{staticClass:"cm-line"},[t._v("     "),a("span",{staticClass:"cm-variable"},[t._v("console")]),a("span",{staticClass:"cm-operator"},[t._v(".")]),a("span",{staticClass:"cm-property"},[t._v("log")]),a("span",{staticClass:"cm-punctuation"},[t._v("(")]),a("span",{staticClass:"cm-variable"},[t._v("status")]),a("span",{staticClass:"cm-punctuation"},[t._v(")")])]),a("div",{staticClass:"cm-line"},[t._v("    "),a("span",{staticClass:"cm-punctuation"},[t._v("}")])]),a("div",{staticClass:"cm-line"},[a("span",{staticClass:"cm-punctuation"},[t._v("}")]),a("span",{staticClass:"cm-punctuation"},[t._v(")")]),a("span",{staticClass:"cm-punctuation"},[t._v(";")])]),a("div",{staticClass:"cm-line"},[a("span",{staticClass:"cm-variable"},[t._v("pa")]),a("span",{staticClass:"cm-operator"},[t._v(".")]),a("span",{staticClass:"cm-property"},[t._v("move")]),a("span",{staticClass:"cm-punctuation"},[t._v("(")]),a("span",{staticClass:"cm-punctuation"},[t._v(")")])])])])]),a("h3",[t._v("参数")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("el")]),a("td",[t._v("运动的物体")]),a("td",[t._v("String")]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("target")]),a("td",[t._v("目标物体")]),a("td",[t._v("String")]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("speed")]),a("td",[t._v("运动速度")]),a("td",[t._v("Number")]),a("td",[t._v("-")]),a("td",[t._v("1")])]),a("tr",[a("td",[t._v("curvature")]),a("td",[t._v("运动曲率，越大越弯曲")]),a("td",[t._v("Number")]),a("td",[t._v("-")]),a("td",[t._v("0.0008")])]),a("tr",[a("td",[t._v("success")]),a("td",[t._v("运动达到目标物体后回调")]),a("td",[t._v("Function")]),a("td",[t._v("返回值为ok表示运动完成")]),a("td",[t._v("-")])])])]),a("h3",[t._v("方法")]),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",[t._v("参数")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("move")]),a("td",[t._v("无")]),a("td",[t._v("开始运动")])])])])])}],v=a("2877"),i={},_=Object(v["a"])(i,c,n,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0df0a2.eb90eb75.js.map