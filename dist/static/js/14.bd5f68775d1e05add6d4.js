webpackJsonp([14],{"6i1C":function(s,t,a){s.exports=a("Mjb+")},"Mjb+":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Popover 弹出框")]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("基础用法")]),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}]},[s._v("click 指令触发")]),s._v(" "),a("ix-popover",{ref:"popover1",attrs:{visible:s.visible},on:{"update:visible":function(t){s.visible=t}}},[s._v("click 指令触发")]),s._v(" "),a("ix-button",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}]},[s._v("hover 指令触发")]),s._v(" "),a("ix-popover",{ref:"popover2",attrs:{trigger:"hover",padding:"0"}},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("td",[s._v("名称")]),s._v(" "),a("td",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("11")]),s._v(" "),a("td",[s._v("22")])]),s._v(" "),a("tr",[a("td",[s._v("33")]),s._v(" "),a("td",[s._v("44")])])])])]),s._v(" "),a("ix-popover",{attrs:{trigger:"hover"}},[s._v("\n        你好呀~\n        "),a("ix-button",{attrs:{slot:"reference"},slot:"reference"},[s._v("reference插槽触发")])],1)],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("ix-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}]},[s._v("click")]),s._v(" "),a("ix-popover",{ref:"popover1",attrs:{visible:s.visible},on:{"update:visible":function(t){s.visible=t}}},[s._v("你好啊")]),s._v(" "),a("ix-button",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}]},[s._v("hover")]),s._v(" "),a("ix-popover",{ref:"popover2",attrs:{trigger:"hover"}},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("td",[s._v("名称")]),s._v(" "),a("td",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("11")]),s._v(" "),a("td",[s._v("22")])]),s._v(" "),a("tr",[a("td",[s._v("33")]),s._v(" "),a("td",[s._v("44")])])])])]),s._v(" "),a("ix-popover",{attrs:{trigger:"hover"}},[s._v("\n        你好呀~\n        "),a("ix-button",{attrs:{slot:"reference"},slot:"reference"},[s._v("reference插槽触发")])],1)],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-popover:popover1")]),s._v(">")]),s._v("click"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"popover1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(">")]),s._v("你好啊"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-popover:popover2")]),s._v(">")]),s._v("hover"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"popover2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"table"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("thead")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("名称"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("说明"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("thead")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tbody")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("11"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("22"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("33"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("44"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("td")]),s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tr")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tbody")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(">")]),s._v("\n        你好呀~\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"reference"')]),s._v(">")]),s._v("reference插槽触发"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-popover")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }\n      }\n    }\n    ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Attributes")]),s._v(" "),s._m(0),s._v(" "),a("h3",[s._v("Slots 插槽")]),s._v(" "),s._m(1),s._v(" "),a("h3",[s._v("Methods 调用函数")]),s._v(" "),s._m(2)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("trigger")]),s._v(" "),a("td",[s._v("触发方式")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("click/hover/")]),s._v(" "),a("td",[s._v("click")])]),s._v(" "),a("tr",[a("td",[s._v("visible.sync")]),s._v(" "),a("td",[s._v("显示隐藏")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",[s._v("宽度")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("className")]),s._v(" "),a("td",[s._v("添加类名")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("placement")]),s._v(" "),a("td",[s._v("Tooltip 的出现位置")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("top/bottom/left/right")]),s._v(" "),a("td",[s._v("bottom")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[this._v("名称")]),this._v(" "),t("th",[this._v("说明")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[this._v("default")]),this._v(" "),t("td",[this._v("默认")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("方法名")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("显示弹出框")]),s._v(" "),a("td",[s._v("(target: 触发的元素el)")])]),s._v(" "),a("tr",[a("td",[s._v("hide")]),s._v(" "),a("td",[s._v("关闭弹出框")]),s._v(" "),a("td",[s._v("-")])])])])}]},r=a("VU/8")({data:function(){return{visible:!1}}},v,!1,null,null,null);t.default=r.exports}});