webpackJsonp([22],{EEYi:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={data:function(){return{visible:!1,overvisible:!1,innerVisible:!1}},methods:{handleClose:function(s){confirm("确认关闭？")&&s()}}},l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Dialog 对话框")]),s._v(" "),a("hr"),s._v(" "),s._m(0),s._v(" "),a("h3",[s._v("基础用法")]),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-button",{on:{click:function(t){s.visible=!0}}},[s._v("点击打开对话框")]),s._v(" "),a("ix-dialog",{attrs:{width:"30%",title:"欢迎",visible:s.visible,"before-close":s.handleClose},on:{"update:visible":function(t){s.visible=t}}},[a("p",[a("label",[s._v("标题")]),s._v(" "),a("ix-input")],1),s._v(" "),a("div",[a("label",[s._v("内容")]),s._v(" "),a("ix-input",{attrs:{type:"textarea",rows:5}})],1),s._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("ix-button",{on:{click:function(t){s.visible=!1}}},[s._v("取 消")]),s._v(" "),a("ix-button",{attrs:{type:"primary"},on:{click:function(t){s.visible=!1}}},[s._v("确 定")])],1)])],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("ix-button",{on:{click:function(t){s.visible=!0}}},[s._v("点击打开对话框")]),s._v(" "),a("ix-dialog",{attrs:{width:"30%",title:"欢迎",visible:s.visible,"before-close":s.handleClose},on:{"update:visible":function(t){s.visible=t}}},[a("p",[a("label",[s._v("标题")]),s._v(" "),a("ix-input")],1),s._v(" "),a("div",[a("label",[s._v("内容")]),s._v(" "),a("ix-input",{attrs:{type:"textarea",rows:5}})],1),s._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("ix-button",{on:{click:function(t){s.visible=!1}}},[s._v("取 消")]),s._v(" "),a("ix-button",{attrs:{type:"primary"},on:{click:function(t){s.visible=!1}}},[s._v("确 定")])],1)])],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("点击打开对话框"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"30%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"欢迎"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":before-close")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("标题"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-input")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-input")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("内容"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textarea"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-input")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"footer"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dialog-footer"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = false"')]),s._v(">")]),s._v("取 消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = false"')]),s._v(">")]),s._v("确 定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            handleClose(done) {\n                "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$confirm("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确认关闭？'")]),s._v(").then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("_")]),s._v(" =>")]),s._v(" { done(); }).catch("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("_")]),s._v(" =>")]),s._v(" {});\n            }\n          }\n        }\n      }\n    }\n    ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("嵌套的 Dialog")]),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-button",{on:{click:function(t){s.overvisible=!0}}},[s._v("点击外层对话框")]),s._v(" "),a("ix-dialog",{attrs:{width:"30%",title:"欢迎",visible:s.overvisible},on:{"update:visible":function(t){s.overvisible=t}}},[a("ix-dialog",{attrs:{width:"30%",title:"内层 Dialog",visible:s.innerVisible,"append-to-body":""},on:{"update:visible":function(t){s.innerVisible=t}}}),s._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("ix-button",{on:{click:function(t){s.overvisible=!1}}},[s._v("取 消")]),s._v(" "),a("ix-button",{attrs:{type:"primary"},on:{click:function(t){s.innerVisible=!0}}},[s._v("打开内层Dialog")])],1)],1)],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("ix-button",{on:{click:function(t){s.overvisible=!0}}},[s._v("点击外层对话框")]),s._v(" "),a("ix-dialog",{attrs:{width:"30%",title:"欢迎",visible:s.overvisible},on:{"update:visible":function(t){s.overvisible=t}}},[a("ix-dialog",{attrs:{width:"30%",title:"内层 Dialog",visible:s.innerVisible,"append-to-body":""},on:{"update:visible":function(t){s.innerVisible=t}}}),s._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("ix-button",{on:{click:function(t){s.overvisible=!1}}},[s._v("取 消")]),s._v(" "),a("ix-button",{attrs:{type:"primary"},on:{click:function(t){s.innerVisible=!0}}},[s._v("打开内层Dialog")])],1)],1)],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overvisible = true"')]),s._v(">")]),s._v("点击外层对话框"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"30%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"欢迎"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overvisible"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"30%"')]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"内层 Dialog"')]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"innerVisible"')]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("append-to-body")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"footer"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dialog-footer"')]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overvisible = false"')]),s._v(">")]),s._v("取 消"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"innerVisible = true"')]),s._v(">")]),s._v("打开内层Dialog"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("overvisible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerVisible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }\n      }\n    }\n    ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Attributes")]),s._v(" "),s._m(2),s._v(" "),a("h3",[s._v("Slots 插槽")]),s._v(" "),s._m(3),s._v(" "),a("h3",[s._v("Events 回调函数")]),s._v(" "),s._m(4)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Dialog")]),s._v(" 弹出一个对话框，适合需要定制性更大的场景。"),a("br"),s._v("\n需要设置"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("visible")]),s._v("属性，它接收"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Boolean")]),s._v("，当为"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("true")]),s._v("时显示 "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Dialog")]),s._v("。"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Dialog")]),s._v(" 分为两个部分："),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("body")]),s._v("和"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("footer")]),s._v("，"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("footer")]),s._v("需要具名为"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("footer")]),s._v("的"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("slot")]),s._v("。"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("title")]),s._v("属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("before-close")]),s._v("的用法。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("如果需要在一个 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("Dialog")]),this._v(" 内部嵌套另一个 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("Dialog")]),this._v("，需要使用 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("append-to-body")]),this._v(" 属性。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("visible")]),s._v(" "),a("td",[s._v("是否显示 Dialog，支持 .sync 修饰符")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("className")]),s._v(" "),a("td",[s._v("Dialog 的自定义类名")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",[s._v("Dialog 的宽度")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("50%")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("Dialog 的标题，也可通过具名 slot （见下表）传入")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("model")]),s._v(" "),a("td",[s._v("是否需要遮罩层")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("showClose")]),s._v(" "),a("td",[s._v("是否显示关闭按钮")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("transition")]),s._v(" "),a("td",[s._v("动画类名")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("slide-fade")])]),s._v(" "),a("tr",[a("td",[s._v("append-to-body")]),s._v(" "),a("td",[s._v("Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("beforeClose")]),s._v(" "),a("td",[s._v("关闭前的回调，会暂停 Dialog 的关闭")]),s._v(" "),a("td",[s._v("function(done)，done 用于关闭 Dialog")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("—")]),s._v(" "),a("td",[s._v("Dialog 的内容")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("Dialog 标题区的内容")])]),s._v(" "),a("tr",[a("td",[s._v("footer")]),s._v(" "),a("td",[s._v("Dialog 按钮操作区的内容")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("open")]),s._v(" "),a("td",[s._v("Dialog 打开的回调")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("close")]),s._v(" "),a("td",[s._v("Dialog 关闭的回调")]),s._v(" "),a("td",[s._v("-")])])])])}]},r=a("VU/8")(v,l,!1,null,null,null);t.default=r.exports},dbIc:function(s,t,a){s.exports=a("EEYi")}});