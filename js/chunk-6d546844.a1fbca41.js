(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d546844"],{"268f":function(t,n,e){t.exports=e("fde4")},bf90:function(t,n,e){var a=e("36c3"),i=e("bf0b").f;e("ce7e")("getOwnPropertyDescriptor",function(){return function(t,n){return i(a(t),n)}})},cebc:function(t,n,e){"use strict";var a=e("268f"),i=e.n(a),u=e("e265"),l=e.n(u),o=e("a4bb"),r=e.n(o),c=e("85f2"),p=e.n(c);function s(t,n,e){return n in t?p()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=r()(e);"function"===typeof l.a&&(a=a.concat(l()(e).filter(function(t){return i()(e,t).enumerable}))),a.forEach(function(n){s(t,n,e[n])})}return t}e.d(n,"a",function(){return f})},e265:function(t,n,e){t.exports=e("ed33")},ed33:function(t,n,e){e("014b"),t.exports=e("584a").Object.getOwnPropertySymbols},fde4:function(t,n,e){e("bf90");var a=e("584a").Object;t.exports=function(t,n){return a.getOwnPropertyDescriptor(t,n)}},ff15:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Fld text input")]),e("p",[t._v("In this form, the Field wraps a kup-text-input element.")]),e("h3",[t._v("Basic input text")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.basicInput}})],1),e("h3",[t._v("With initial value")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.inputInitialValue}})],1),e("h3",[t._v("Is clearable")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.inputIsClearable}})],1),e("h3",[t._v("With a label")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.inputWithLabel}})],1),e("h3",[t._v("Input text max length")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.inputWithMaxLength}}),e("div",[e("h4",[t._v("Change input max length")]),e("kup-text-input",{attrs:{"initial-value":t.fieldMaxLength,"max-length":5},on:{ketchupTextInputUpdated:t.onUpdateMaxLength}})],1)],1),e("h3",[t._v("Input text: password form")]),e("div",{staticClass:"example-container"},[e("kup-fld",{domProps:{config:t.inputUsePassword}})],1)])},i=[],u=e("cebc"),l={name:"FldTextInput",data:function(){return{fieldMaxLength:5,basicInput:{},inputInitialValue:{},inputIsClearable:{},inputWithLabel:{},inputWithMaxLength:{},inputUsePassword:{}}},mounted:function(){var t=this;e.e("chunk-2d0d7112").then(e.bind(null,"74dc")).then(function(n){var e=n.fldData,a=n.fldConfigItxFactory;t.fldData=e,t.basicInput=a(),t.inputInitialValue=a([{name:"initialValue",value:"Use initial value"}]),t.inputIsClearable=a([{name:"initialValue",value:"Use initial value"},{name:"isClearable",value:"true"}]),t.inputWithLabel=a([{name:"label",value:"The input label"}]),t.inputWithMaxLength=a([{name:"maxLength",value:"5"}]),t.inputUsePassword=a([{name:"inputType",value:"password"}])}).catch(function(t){console.log(t)})},methods:{onUpdateMaxLength:function(t){console.log(t),this.fieldMaxLength=t.detail.value}},watch:{fieldMaxLength:function(){this.inputWithMaxLength=Object(u["a"])({},this.inputWithMaxLength,{maxLength:this.fieldMaxLength})}}},o=l,r=e("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-6d546844.a1fbca41.js.map