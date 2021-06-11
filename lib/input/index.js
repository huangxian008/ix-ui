!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ixUI",[],t):"object"==typeof exports?exports.ixUI=t():e.ixUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="dnns")}({"VU/8":function(e,t){e.exports=function(e,t,n,i,o,r){var a,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,u=e.default);var l,c="function"==typeof u?u.options:u;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=i),l){var p=c.functional,f=p?c.render:c.beforeCreate;p?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:u,options:c}}},dnns:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"ix-input",model:{prop:"value",event:"change"},props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},type:{type:String,default:"text"},prefixIcon:String,suffixIcon:String,minlength:Number,maxlength:Number,name:String,autocomplete:String,readonly:Boolean,max:Number,min:Number,step:Number,autofocus:Boolean,form:String,label:String,tabindex:Number,rows:{type:Number,default:2},size:String,clearable:{type:Boolean,default:!1}},data:function(){return{val:this.value,infocus:!1}},watch:{value:function(e){this.val=e}},mounted:function(){},methods:{onfocus:function(e){this.infocus=!0,this.$emit("focus",e)},onblur:function(e){this.infocus=!1,this.$emit("blur",e)},focus:function(){this.$refs.txt.focus()},blur:function(){this.$refs.txt.blur()}}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ix-input",class:[e.infocus?"infocus":"",e.disabled?"disabled":"","textarea"==e.type?"ix-textarea":"",e.size?"ix-"+e.size:""]},[n("div",{staticClass:"ix-input-prepend"},[e._t("prepend")],2),e._v(" "),e._t("prefix",[n("i",{staticClass:"ix-icon",class:e.prefixIcon})]),e._v(" "),"textarea"==e.type?n("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"txt",staticClass:"ix-input-inner",domProps:{value:e.val},on:{change:function(t){return e.$emit("change",e.val)},input:[function(t){t.target.composing||(e.val=t.target.value)},function(t){return e.$emit("input",e.val)}],focus:e.onfocus,blur:e.onblur,mouseup:function(t){return e.$emit("mouseup",t)}}},"textarea",e.$props,!1)):"checkbox"===e.$props.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"txt",staticClass:"ix-input-inner",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{change:[function(t){var n=e.val,i=t.target,o=!!i.checked;if(Array.isArray(n)){var r=e._i(n,null);i.checked?r<0&&(e.val=n.concat([null])):r>-1&&(e.val=n.slice(0,r).concat(n.slice(r+1)))}else e.val=o},function(t){return e.$emit("change",e.val)}],input:function(t){return e.$emit("input",e.val)},focus:e.onfocus,blur:e.onblur,mouseup:function(t){return e.$emit("mouseup",t)}}},"input",e.$props,!1)):"radio"===e.$props.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"txt",staticClass:"ix-input-inner",attrs:{type:"radio"},domProps:{checked:e._q(e.val,null)},on:{change:[function(t){e.val=null},function(t){return e.$emit("change",e.val)}],input:function(t){return e.$emit("input",e.val)},focus:e.onfocus,blur:e.onblur,mouseup:function(t){return e.$emit("mouseup",t)}}},"input",e.$props,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"txt",staticClass:"ix-input-inner",attrs:{type:e.$props.type},domProps:{value:e.val},on:{change:function(t){return e.$emit("change",e.val)},input:[function(t){t.target.composing||(e.val=t.target.value)},function(t){return e.$emit("input",e.val)}],focus:e.onfocus,blur:e.onblur,mouseup:function(t){return e.$emit("mouseup",t)}}},"input",e.$props,!1)),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.clearable&&e.val,expression:"clearable && val"}],staticClass:"ix-icon-error",attrs:{title:"清空"},on:{click:function(t){t.stopPropagation(),e.val=null,e.$emit("change",e.val)}}}),e._v(" "),e._t("suffix",[n("i",{staticClass:"ix-icon",class:e.suffixIcon,on:{click:function(t){e.infocus=!e.infocus}}})]),e._v(" "),n("div",{staticClass:"ix-input-append"},[e._t("append")],2)],2)};o._withStripped=!0;var r={render:o,staticRenderFns:[]},a=r;var u=n("VU/8")(i,a,!1,null,null,null);u.options.__file="packages/input/Input.vue";var s=u.exports;s.install=function(e){e.component(s.name,s)};t.default=s}}).default});
//# sourceMappingURL=index.js.map