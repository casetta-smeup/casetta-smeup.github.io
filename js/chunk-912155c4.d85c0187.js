(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-912155c4"],{"029f":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return l});n("7f7f"),n("6b54");function o(t,e){for(var n=[],o=0;o<t;o++)n.push({name:"FLD"+o,title:"Column "+o,size:10});for(var a=[],u=0;u<e;u++){for(var l={cells:{}},c=0;c<n.length;c++){var r={};r.value=u.toString()+c.toString(),l.cells[n[c].name]=r}a.push(l)}return{data:{columns:n,rows:a}}}var a={data:{columns:[{name:"FLD1",title:"Column A",size:""},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]}},u={data:{columns:[{name:"FLD1",title:"Column A",size:""},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"11"},value:"11"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"7"},value:"7"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"12"},value:"12"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"8"},value:"8"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"7"},value:"7"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]}},l=o(20,1e4)},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"268f":function(t,e,n){t.exports=n("fde4")},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),a=n("0bfb"),u=n("9e1e"),l="toString",c=/./[l],r=function(t){n("2aba")(RegExp.prototype,l,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?r(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!u&&t instanceof RegExp?a.call(t):void 0)}):c.name!=l&&r(function(){return c.call(this)})},"7f7f":function(t,e,n){var o=n("86cc").f,a=Function.prototype,u=/^\s*function ([^ (]*)/,l="name";l in a||n("9e1e")&&o(a,l,{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(t){return""}}})},bf90:function(t,e,n){var o=n("36c3"),a=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return a(o(t),e)}})},cad1:function(t,e,n){},cebc:function(t,e,n){"use strict";var o=n("268f"),a=n.n(o),u=n("e265"),l=n.n(u),c=n("a4bb"),r=n.n(c),i=n("85f2"),s=n.n(i);function p(t,e,n){return e in t?s()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=r()(n);"function"===typeof l.a&&(o=o.concat(l()(n).filter(function(t){return a()(n,t).enumerable}))),o.forEach(function(e){p(t,e,n[e])})}return t}n.d(e,"a",function(){return D})},de6c:function(t,e,n){"use strict";var o=n("cad1"),a=n.n(o);a.a},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},f534:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Totals")]),n("v-expansion-panel",[n("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[t._v("Count")])]},proxy:!0}])},[n("div",{staticClass:"pa-3"},[n("p",[t._v("Count on Column A and Column D")]),n("kup-data-table",{domProps:{data:t.data,config:t.config1,totals:t.countTotals}})],1)]),n("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[t._v("Sum")])]},proxy:!0}])},[n("div",{staticClass:"pa-3"},[n("p",[t._v("Sum on Column B and Column C")]),n("kup-data-table",{domProps:{data:t.data,config:t.config1,totals:t.sumTotals}})],1)]),n("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[t._v("Avg")])]},proxy:!0}])},[n("div",{staticClass:"pa-3"},[n("p",[t._v("Avarage on Column B and Column C")]),n("kup-data-table",{domProps:{data:t.data,config:t.config1,totals:t.avgTotals}})],1)]),n("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[t._v("Mixed")])]},proxy:!0}])},[n("div",{staticClass:"pa-3"},[n("p",[t._v("Count on Column A, Sum on column B, Avg on Column C and count on\n          Column D")]),n("kup-data-table",{domProps:{data:t.data,config:t.config1,totals:t.mixedTotals}})],1)])],1)],1)},a=[],u=n("cebc"),l=n("029f"),c={name:"dataTableSort",data:function(){return{data:Object(u["a"])({},l["c"]),config1:{showFilter:!0},countTotals:{FLD1:"Count",FLD4:"Count"},sumTotals:{FLD2:"Sum",FLD3:"Sum"},avgTotals:{FLD2:"Avarage",FLD3:"Avarage"},mixedTotals:{FLD1:"Count",FLD2:"Sum",FLD3:"Avarage",FLD4:"Count"}}}},r=c,i=(n("de6c"),n("2877")),s=Object(i["a"])(r,o,a,!1,null,"115f1634",null);e["default"]=s.exports},fde4:function(t,e,n){n("bf90");var o=n("584a").Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-912155c4.d85c0187.js.map