webpackJsonp([17],{"9bNT":function(s,t,a){s.exports=a("rwpR")},rwpR:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Link 文字链接")]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("基础用法")]),s._v(" "),a("p",[s._v("文字超链接")]),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-link",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("默认链接")]),s._v(" "),a("ix-link",{attrs:{type:"primary"}},[s._v("主要链接")]),s._v(" "),a("ix-link",{attrs:{type:"success"}},[s._v("成功链接")]),s._v(" "),a("ix-link",{attrs:{type:"warning"}},[s._v("警告链接")]),s._v(" "),a("ix-link",{attrs:{type:"danger"}},[s._v("危险链接")]),s._v(" "),a("ix-link",{attrs:{type:"info"}},[s._v("信息链接")]),s._v(" "),a("div",[a("ix-link",{attrs:{to:"/hello"}},[s._v("路由链接")])],1)],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("ix-link",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("默认链接")]),s._v(" "),a("ix-link",{attrs:{type:"primary"}},[s._v("主要链接")]),s._v(" "),a("ix-link",{attrs:{type:"success"}},[s._v("成功链接")]),s._v(" "),a("ix-link",{attrs:{type:"warning"}},[s._v("警告链接")]),s._v(" "),a("ix-link",{attrs:{type:"danger"}},[s._v("危险链接")]),s._v(" "),a("ix-link",{attrs:{type:"info"}},[s._v("信息链接")]),s._v(" "),a("div",[a("ix-link",{attrs:{to:"/hello"}},[s._v("路由链接")])],1)],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://www.baidu.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"_blank"')]),s._v(">")]),s._v("默认链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("主要链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),s._v("成功链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),s._v("警告链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(">")]),s._v("危险链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),s._v("信息链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/hello"')]),s._v(">")]),s._v("路由链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("禁用状态")]),s._v(" "),s._m(0),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-link",{attrs:{href:"https://www.baidu.com",target:"_blank",disabled:!0}},[s._v("默认链接")]),s._v(" "),a("ix-link",{attrs:{type:"primary",disabled:!0}},[s._v("主要链接")]),s._v(" "),a("ix-link",{attrs:{type:"success",disabled:!0}},[s._v("成功链接")]),s._v(" "),a("ix-link",{attrs:{type:"warning",disabled:!0}},[s._v("警告链接")]),s._v(" "),a("ix-link",{attrs:{type:"danger",disabled:!0}},[s._v("危险链接")]),s._v(" "),a("ix-link",{attrs:{type:"info",disabled:!0}},[s._v("信息链接")])],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("ix-link",{attrs:{href:"https://www.baidu.com",target:"_blank",disabled:!0}},[s._v("默认链接")]),s._v(" "),a("ix-link",{attrs:{type:"primary",disabled:!0}},[s._v("主要链接")]),s._v(" "),a("ix-link",{attrs:{type:"success",disabled:!0}},[s._v("成功链接")]),s._v(" "),a("ix-link",{attrs:{type:"warning",disabled:!0}},[s._v("警告链接")]),s._v(" "),a("ix-link",{attrs:{type:"danger",disabled:!0}},[s._v("危险链接")]),s._v(" "),a("ix-link",{attrs:{type:"info",disabled:!0}},[s._v("信息链接")])],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://www.baidu.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("target")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"_blank"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("默认链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("主要链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("成功链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("警告链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("危险链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("信息链接"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-link")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("图标")]),s._v(" "),a("p",[s._v("带图标的文字链接可增强辨识度。")]),s._v(" "),a("div",{staticClass:"demo-block"},[a("ix-link",{attrs:{icon:"ix-icon-smile"}},[s._v("编辑")]),s._v(" "),a("ix-link",[s._v("搜索"),a("i",{staticClass:"ix-icon-search"})])],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",[a("ix-button",{attrs:{type:"primary",icon:"ix-icon-tool"}}),s._v(" "),a("ix-button",{attrs:{type:"primary",icon:"ix-icon-smile"}}),s._v(" "),a("ix-button",{attrs:{type:"primary",icon:"ix-icon-search"}},[s._v("搜索")]),s._v(" "),a("ix-button",{attrs:{type:"primary"}},[s._v("上传"),a("i",{staticClass:"ix-icon-upload"})])],1)]),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-html"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ix-icon-tool"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ix-icon-smile"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ix-icon-search"')]),s._v(">")]),s._v("搜索"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("上传"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ix-icon-upload"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("i")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Attributes")]),s._v(" "),s._m(1)],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("按钮不可用状态。\n你可以使用"),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("disabled")]),this._v("属性来定义按钮是否可用，它接受一个"),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("Boolean")]),this._v("值。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("类型")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("primary / success / warning / danger / info")]),s._v(" "),a("td",[s._v("default")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("是否禁用状态")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("href")]),s._v(" "),a("td",[s._v("原生 href 属性")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("to")]),s._v(" "),a("td",[s._v("router-link 路由属性")]),s._v(" "),a("td",[s._v("string / object")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("图标类名")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("-")])])])])}]},v=a("VU/8")(null,r,!1,null,null,null);t.default=v.exports}});