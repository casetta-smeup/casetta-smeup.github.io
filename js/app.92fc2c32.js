(function(e){function t(t){for(var a,c,i=t[0],r=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],l[c]&&p.push(l[c][0]),l[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==l[r]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},l={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("04f5"),l=n.n(a);l.a},"04f5":function(e,t,n){},"0f6d":function(e,t,n){"use strict";var a=n("347d"),l=n.n(a);l.a},"1d6a":function(e,t,n){"use strict";var a=n("d709"),l=n.n(a);l.a},"2d1d":function(e,t,n){},"347d":function(e,t,n){},4306:function(e,t,n){},"45b4":function(e,t,n){},"4e5c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),l=n("ce5b"),o=n.n(l);n("bf40");a["default"].use(o.a,{});var c=n("5c96"),i=n.n(c);n("0fae");a["default"].use(i.a);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("div",{staticClass:"navbar"},[n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="GoogleChart"}}},[e._v("\n        Google chart\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="Knob"}}},[e._v("\n        Knob\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="InputPanel"}}},[e._v("\n        Input Panel (vue mdc adapter)\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="VuetifyInp"}}},[e._v("\n        Input Panel (Vuetify)\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="ElementInp"}}},[e._v("\n        Input Panel (element)\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="element-data-table"}}},[e._v("\n        DataTable (element)\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="big-data-table"}}},[e._v("\n        DataTable performance\n      ")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.component="smeup-data-table"}}},[e._v("\n        DataTable (smeup)\n      ")])],1),n("div",{staticClass:"main-container"},[e.component?n(e.component,{tag:"component"}):e._e()],1)])],1)},u=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:".CHA"},[n("div",{attrs:{id:e.id}}),e._v("\n\n  "+e._s(e.message)+"\n")])},d=[],p={data:function(){return{id:"chart",chart:null,data:null,message:""}},mounted:function(){this.data=new google.visualization.DataTable,this.data.addColumn("string","Topping"),this.data.addColumn("number","Slices"),this.data.addRows([["Mushrooms",3],["Onions",1],["Olives",1],["Zucchini",1],["Pepperoni",2]]);var e={title:"How Much Pizza I Ate Last Night",width:400,height:300};this.chart=new google.visualization.PieChart(document.getElementById(this.id)),this.chart.draw(this.data,e),google.visualization.events.addListener(this.chart,"select",this.onChartClick)},methods:{onChartClick:function(){var e=this.chart.getSelection()[0];if(e){var t=this.data.getValue(e.row,0),n=this.data.getValue(e.row,1);this.message="Hai selezionato ".concat(t," ed il suo valore e' ").concat(n)}}}},f=p,b=n("2877"),h=Object(b["a"])(f,s,d,!1,null,null,null);h.options.__file="GoogleChart.vue";var v=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"KNO"},[n("div",{attrs:{id:"knob"},on:{change:function(t){e.onChange(t)}}}),e._v("\n\n  "+e._s(e.message)+"\n")])},R=[],g=n("3b7d"),_=n.n(g),C={data:function(){return{knob:null,message:""}},methods:{onChange:function(e){this.message="Hai selezionato il valore ".concat(e.detail)}},mounted:function(){this.knob=new _.a("#knob",{})}},T=C,S=(n("aa5b"),Object(b["a"])(T,m,R,!1,null,null,null));S.options.__file="Knob.vue";var N=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"INP"},[n("input-text",{attrs:{itxValue:e.itxValue},on:{change:function(t){e.onItxChange(t)}}}),n("chips",{attrs:{chiValue:e.chiValue}}),n("combo-box",{attrs:{chkValue:e.chkValue},on:{change:function(t){e.onCmbChange(t)}}}),n("checkbox",{attrs:{chkValue:e.chkValue},on:{change:function(t){e.onChkChange(t)}}}),n("ul",[n("li",[e._v(e._s(e.itxValue))]),n("li",[e._v(e._s(e.chkValue))]),n("li",[e._v(e._s(e.cmbValue))])])],1)},k=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mdc-checkbox",{on:{change:e.onChkChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("span",[e._v(e._s(e.label))])])},I=[],E={props:["chkValue"],data:function(){return{value:!1,label:"Is uomo focaccina a bellissimo uomo?"}},created:function(){this.value=this.chkValue},methods:{onChkChange:function(){this.$emit("change",this.value)}}},w=E,y=Object(b["a"])(w,V,I,!1,null,null,null);y.options.__file="Checkbox.vue";var D=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mdc-chip-set",{attrs:{filter:!0,input:!0},on:{"MDCChip:interaction":e.onInteraction,"MDCChip:trailingIconInteraction":e.onIconInteraction}},[n("mdc-chip",{attrs:{leadingIcon:"android"}},[e._v("\n\n      Android\n    ")]),n("mdc-chip",{attrs:{leadingIcon:"face"}},[e._v("\n      Uomo Focaccina\n    ")]),n("mdc-chip",{attrs:{leadingIcon:"wc"}},[e._v("\n      WC Man\n    ")])],1)],1)},P=[],M={props:["chiValue"],data:function(){return{value:""}},created:function(){this.value=this.chiValue},methods:{onInteraction:function(e){this.$emit("change",e)},onIconInteraction:function(e){this.$emit("change",e)}}},$=M,j=Object(b["a"])($,O,P,!1,null,null,null);j.options.__file="Chips.vue";var A=j.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mdc-select",{attrs:{label:"Tartaruga ninja preferita",outlined:!0},on:{change:e.onCmbChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("option",[e._v("Donatello")]),n("option",[e._v("Leonardo")]),n("option",[e._v("Michelangelo")]),n("option",[e._v("Raffaello")])])],1)},B=[],G={props:["selectValue"],data:function(){return{value:""}},created:function(){this.value=this.cmbValue},methods:{onCmbChange:function(){this.$emit("change",this.value)}}},z=G,F=Object(b["a"])(z,L,B,!1,null,null,null);F.options.__file="ComboBox.vue";var H=F.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mdc-textfield",{attrs:{label:"Nome"},on:{change:e.onItxChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},J=[],W={props:["itxValue"],data:function(){return{value:""}},created:function(){this.value=this.itxValue},methods:{onItxChange:function(){this.$emit("change",this.value)}}},U=W,X=Object(b["a"])(U,K,J,!1,null,null,null);X.options.__file="InputText.vue";var Q=X.exports,Z={data:function(){return{itxValue:"",chiValue:"",chkValue:!0,cmbValue:""}},components:{Checkbox:D,Chips:A,ComboBox:H,InputText:Q},methods:{onCmbChange:function(e){this.cmbValue=e},onChkChange:function(e){this.chkValue=e},onItxChange:function(e){this.itxValue=e}}},q=Z,Y=Object(b["a"])(q,x,k,!1,null,null,null);Y.options.__file="InputPanel.vue";var ee=Y.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"INP"},[n("div",{staticClass:"field-container"},[n("input-text",{attrs:{initialValue:e.itxValue},on:{change:function(t){e.onItxChange(t)}}}),n("combo",{attrs:{initialValue:e.cmbValue},on:{change:function(t){e.onCmbChange(t)}}}),n("checkbox",{attrs:{initialValue:e.chkValue},on:{change:function(t){e.onChkChange(t)}}})],1),n("div",{staticClass:"field-values"},[n("ul",[n("li",[e._v("ITX: "+e._s(e.itxValue))]),n("li",[e._v("CMB: "+e._s(e.cmbValue))]),n("li",[e._v("CHK: "+e._s(e.chkValue))])])])])},ne=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-checkbox",{attrs:{label:"Is uomo focaccina a bellissimo uomo?"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},le=[],oe={props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){this.$emit("change",this.value)}}},ce=oe,ie=Object(b["a"])(ce,ae,le,!1,null,null,null);ie.options.__file="Checkbox.vue";var re=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-select",{attrs:{items:e.items,label:"Tartaruga ninja preferita","persistent-hint":"","return-object":"","single-line":""},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},se=[],de={props:["initialValue"],data:function(){return{value:this.initialValue,items:["Donatello","Leonardo","Michelangelo","Raffaello"]}},methods:{onChange:function(){this.$emit("change",this.value)}}},pe=de,fe=Object(b["a"])(pe,ue,se,!1,null,null,null);fe.options.__file="Combo.vue";var be=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-text-field",{attrs:{label:"Nome"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},ve=[],me={props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){console.log("triggering change",this.value),this.$emit("change",this.value)}}},Re=me,ge=Object(b["a"])(Re,he,ve,!1,null,null,null);ge.options.__file="InputText.vue";var _e=ge.exports,Ce={components:{Checkbox:re,Combo:be,InputText:_e},data:function(){return{itxValue:"",cmbValue:"",chkValue:!0}},methods:{onChkChange:function(e){this.chkValue=e},onCmbChange:function(e){this.cmbValue=e},onItxChange:function(e){this.itxValue=e}}},Te=Ce,Se=(n("8318"),Object(b["a"])(Te,te,ne,!1,null,"c9a21da6",null));Se.options.__file="VuetifyInp.vue";var Ne=Se.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"INP"},[n("div",{staticClass:"field-container"},[n("input-text",{attrs:{initialValue:e.itxValue},on:{change:function(t){e.onItxChange(t)}}}),n("combo",{attrs:{initialValue:e.cmbValue},on:{change:function(t){e.onCmbChange(t)}}}),n("checkbox",{attrs:{initialValue:e.chkValue},on:{change:function(t){e.onChkChange(t)}}})],1),n("div",{staticClass:"field-values"},[n("ul",[n("li",[e._v("ITX: "+e._s(e.itxValue))]),n("li",[e._v("CMB: "+e._s(e.cmbValue))]),n("li",[e._v("CHK: "+e._s(e.chkValue))])])])])},ke=[],Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-checkbox",{on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("Is uomo focaccina a bellissimo uomo?")])],1)},Ie=[],Ee={props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){this.$emit("change",this.value)}}},we=Ee,ye=Object(b["a"])(we,Ve,Ie,!1,null,null,null);ye.options.__file="Checkbox.vue";var De=ye.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{placeholder:"Tartaruga ninja preferita"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.items,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))},Pe=[],Me={props:["initialValue"],data:function(){return{value:this.initialValue,items:["Donatello","Leonardo","Michelangelo","Raffaello"]}},methods:{onChange:function(){this.$emit("change",this.value)}}},$e=Me,je=Object(b["a"])($e,Oe,Pe,!1,null,null,null);je.options.__file="Combo.vue";var Ae=je.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-input",{attrs:{placeholder:"Nome"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},Be=[],Ge={props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){console.log("triggering change",this.value),this.$emit("change",this.value)}}},ze=Ge,Fe=Object(b["a"])(ze,Le,Be,!1,null,null,null);Fe.options.__file="InputText.vue";var He=Fe.exports,Ke={components:{Checkbox:De,Combo:Ae,InputText:He},data:function(){return{itxValue:"",cmbValue:"",chkValue:!0}},methods:{onChkChange:function(e){this.chkValue=e},onCmbChange:function(e){this.cmbValue=e},onItxChange:function(e){this.itxValue=e}}},Je=Ke,We=(n("5b5a"),Object(b["a"])(Je,xe,ke,!1,null,"07939ad1",null));We.options.__file="ElementInp.vue";for(var Ue=We.exports,Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-checkbox",{model:{value:e.sortEnabled,callback:function(t){e.sortEnabled=t},expression:"sortEnabled"}},[e._v("Abilita sorting")]),n("el-checkbox",{model:{value:e.stripeEnabled,callback:function(t){e.stripeEnabled=t},expression:"stripeEnabled"}},[e._v("Abilita stripe righe")]),n("el-checkbox",{model:{value:e.borderEnabled,callback:function(t){e.borderEnabled=t},expression:"borderEnabled"}},[e._v("Abilita bordi")]),n("el-checkbox",{model:{value:e.multiSelectionEnabled,callback:function(t){e.multiSelectionEnabled=t},expression:"multiSelectionEnabled"}},[e._v("Abilita multiselezione")]),n("div",{staticClass:"data-table-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:e.borderEnabled,stripe:e.stripeEnabled}},[e.multiSelectionEnabled?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),n("el-table-column",{attrs:{prop:"title",label:"Title",sortable:e.sortEnabled}}),n("el-table-column",{attrs:{prop:"date",label:"Date",width:"180",sortable:e.sortEnabled}}),n("el-table-column",{attrs:{prop:"director",label:"Director",sortable:e.sortEnabled}})],1)],1)],1)},Qe=[],Ze=n("359c"),qe=n.n(Ze),Ye=[],et=[],tt=0;tt<20;tt++)Ye.push("COL"+tt);for(var nt=0;nt<1e3;nt++){for(var at={},lt=0;lt<Ye.length;lt++){var ot=qe.a.random.number();at[Ye[lt]]=ot}et.push(at)}for(var ct=[{title:"Episode IV – A New Hope",date:"May 25, 1977",director:"George Lucas"},{title:"Episode V – The Empire Strikes Back",date:"May 21, 1980",director:"George Lucas"},{title:"Episode VI – Return of the Jedi",date:"May 25, 1983",director:"George Lucas"},{title:"Episode I – The Phantom Menace",date:"May 19, 1999",director:"George Lucas"},{title:"Episode II – Attack of the Clones",date:"May 16, 2002",director:"George Lucas"},{title:"Episode III – Revenge of the Sith",date:"May 19, 2005",director:"George Lucas"},{title:"Episode VII – The Force Awakens",date:"December 18, 2015",director:"George Lucas"},{title:"Episode VII – The Last Jedi",date:"December 15, 2017",director:"George Lucas"},{title:"Episode IX – Uomo Focaccina is Jar Jar Binks",date:"December 20, 2019",director:"George Lucas"},{title:"Rogue One: A Star Wars Story",date:"December 16, 2016",director:"Gareth Edwards"},{title:"Solo: A Star Wars Story",date:"May 25, 2018",director:"Ron Howard"}],it=[{c:"STR001",d:"NR",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR002",d:"NR",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR003",d:"NR neg.(-n)",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR004",d:"NR neg.(n-)",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR006",d:"NR (dec.sep: ,)",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR007",d:"Oggetto",p:"COL",t:"CN",filterValue:"",sortMode:"D"},{c:"STR008",d:"Oggetto",p:"",t:"NR",filterValue:"",sortMode:"D"},{c:"STR009",d:"Percentuale",p:"P",t:"NR",filterValue:"",sortMode:"D"}],rt=[{selected:!1,content:{STR001:{c:"005",p:"",t:"NR"},STR002:{c:"1,1",p:"",t:"NR"},STR003:{c:"-1,12",p:"",t:"NR"},STR004:{c:"1-",p:"",t:"NR"},STR006:{c:"1,102",p:"",t:"NR"},STR007:{c:"FIOGIA",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"20",p:"P",t:"NR"},RowId:{c:"0",p:"",t:"NR"},ID:{c:"1",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"001",p:"",t:"NR"},STR002:{c:"2,0",p:"",t:"NR"},STR003:{c:"-2,13",p:"",t:"NR"},STR004:{c:"2-",p:"",t:"NR"},STR006:{c:"2,1000",p:"",t:"NR"},STR007:{c:"SANCOS",p:"COL",t:"CN"},STR008:{c:"02",p:"",t:"NR"},STR009:{c:"33,3",p:"P",t:"NR"},RowId:{c:"1",p:"",t:"NR"},ID:{c:"2",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"001",p:"",t:"NR"},STR002:{c:"3,1",p:"",t:"NR"},STR003:{c:"-3,14",p:"",t:"NR"},STR004:{c:"3-",p:"",t:"NR"},STR006:{c:"3,12345",p:"",t:"NR"},STR007:{c:"PARFRA",p:"COL",t:"CN"},STR008:{c:"03",p:"",t:"NR"},STR009:{c:"0",p:"P",t:"NR"},RowId:{c:"2",p:"",t:"NR"},ID:{c:"3",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"002",p:"",t:"NR"},STR002:{c:"4,2",p:"",t:"NR"},STR003:{c:"-4,15",p:"",t:"NR"},STR004:{c:"4-",p:"",t:"NR"},STR006:{c:"4,4",p:"",t:"NR"},STR007:{c:"FORFED",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"",p:"P",t:"NR"},RowId:{c:"3",p:"",t:"NR"},ID:{c:"4",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"002",p:"",t:"NR"},STR002:{c:"12",p:"",t:"NR"},STR003:{c:"-12,16",p:"",t:"NR"},STR004:{c:"12-",p:"",t:"NR"},STR006:{c:"12,12",p:"",t:"NR"},STR007:{c:"BELQUI",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"44",p:"P",t:"NR"},RowId:{c:"4",p:"",t:"NR"},ID:{c:"5",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"002",p:"",t:"NR"},STR002:{c:"13,4",p:"",t:"NR"},STR003:{c:"-13,00",p:"",t:"NR"},STR004:{c:"13-",p:"",t:"NR"},STR006:{c:"13.123.213,012",p:"",t:"NR"},STR007:{c:"ROCMAT",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"66",p:"P",t:"NR"},RowId:{c:"5",p:"",t:"NR"},ID:{c:"6",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"002",p:"",t:"NR"},STR002:{c:"14,1",p:"",t:"NR"},STR003:{c:"-14,01",p:"",t:"NR"},STR004:{c:"14-",p:"",t:"NR"},STR006:{c:"1.123.114,49",p:"",t:"NR"},STR007:{c:"MAEOLI",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"100",p:"P",t:"NR"},RowId:{c:"6",p:"",t:"NR"},ID:{c:"7",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"002",p:"",t:"NR"},STR002:{c:"35,0",p:"",t:"NR"},STR003:{c:"-35,02",p:"",t:"NR"},STR004:{c:"35-",p:"",t:"NR"},STR006:{c:"1.235,35999",p:"",t:"NR"},STR007:{c:"CARLUC",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"1000",p:"P",t:"NR"},RowId:{c:"7",p:"",t:"NR"},ID:{c:"8",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"001",p:"",t:"NR"},STR002:{c:"55",p:"",t:"NR"},STR003:{c:"-55,03",p:"",t:"NR"},STR004:{c:"55-",p:"",t:"NR"},STR006:{c:"9.955,0000",p:"",t:"NR"},STR007:{c:"CASFRA",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"55,22",p:"P",t:"NR"},RowId:{c:"8",p:"",t:"NR"},ID:{c:"9",p:"",t:"NR"}}},{selected:!1,content:{STR001:{c:"001",p:"",t:"NR"},STR002:{c:"121",p:"",t:"NR"},STR003:{c:"-121,0",p:"",t:"NR"},STR004:{c:"121-",p:"",t:"NR"},STR006:{c:"121,0",p:"",t:"NR"},STR007:{c:"DELGIO",p:"COL",t:"CN"},STR008:{c:"01",p:"",t:"NR"},STR009:{c:"20,11",p:"P",t:"NR"},RowId:{c:"9",p:"",t:"NR"},ID:{c:"10",p:"",t:"NR"}}}],ut=new Array,st=0;st<20;st++)ut.push({c:"STR00"+st,d:qe.a.random.word(),p:"",t:"",filterValue:"",sortMode:"D"});for(var dt=new Array,pt=function(e){var t={mouseOver:!1,selected:!1,content:{RowId:{c:e,p:"",t:"NR"},ID:{c:e,p:"",t:"NR"}}};ut.forEach(function(e){return t.content[e.c]={c:qe.a.random.word(),p:"",t:""}}),dt.push(t)},ft=0;ft<1e3;ft++)pt(ft);var bt={columns:Ye,starWarRows:ct,rows:et,dataTableCols:it,dataTableFewRows:rt,dataTableManyCols:ut,dataTableManyRows:dt},ht={name:"element-data-table",data:function(){return{borderEnabled:!1,sortEnabled:!1,stripeEnabled:!0,multiSelectionEnabled:!1,tableData:bt.starWarRows}}},vt=ht,mt=(n("6d0a"),Object(b["a"])(vt,Xe,Qe,!1,null,"6520a043",null));mt.options.__file="DataTable.vue";var Rt=mt.exports,gt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-checkbox",{model:{value:e.sortEnabled,callback:function(t){e.sortEnabled=t},expression:"sortEnabled"}},[e._v("Abilita sorting")]),n("el-checkbox",{model:{value:e.stripeEnabled,callback:function(t){e.stripeEnabled=t},expression:"stripeEnabled"}},[e._v("Abilita stripe righe")]),n("el-checkbox",{model:{value:e.borderEnabled,callback:function(t){e.borderEnabled=t},expression:"borderEnabled"}},[e._v("Abilita bordi")]),n("el-checkbox",{model:{value:e.multiSelectionEnabled,callback:function(t){e.multiSelectionEnabled=t},expression:"multiSelectionEnabled"}},[e._v("Abilita multiselezione")]),n("div",{staticClass:"data-table-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:e.borderEnabled,stripe:e.stripeEnabled}},[e.multiSelectionEnabled?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._l(e.columns,function(t){return n("el-table-column",{key:t,attrs:{prop:t,label:t,sortable:e.sortEnabled}})})],2)],1)],1)},_t=[],Ct={name:"big-data-table",data:function(){return{borderEnabled:!1,sortEnabled:!1,stripeEnabled:!0,multiSelectionEnabled:!1,columns:bt.columns,tableData:bt.rows}}},Tt=Ct,St=(n("0f6d"),Object(b["a"])(Tt,gt,_t,!1,null,"d175c248",null));St.options.__file="BigDataTable.vue";var Nt=St.exports,xt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MAT"},[n("div",{staticClass:"lolz"},[n("el-checkbox",{on:{change:e.onBigDataChange},model:{value:e.manyRows,callback:function(t){e.manyRows=t},expression:"manyRows"}},[e._v("Big data")]),n("el-checkbox",{model:{value:e.filterable,callback:function(t){e.filterable=t},expression:"filterable"}},[e._v("Filtri")]),n("el-checkbox",{model:{value:e.sortable,callback:function(t){e.sortable=t},expression:"sortable"}},[e._v("Sort")]),e._e()],1),e._e(),n("table",[n("smeup-data-table-header",{attrs:{columns:e.columns,filterable:e.filterable,sortable:e.sortable},on:{sortby:function(t){e.onSort(t)}}}),n("smeup-data-table-body",{attrs:{columns:e.columns,rows:e.filteredRows}})],1)],1)},kt=[],Vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",e._l(e.columns,function(t){return n("th",{key:t.c},[n("span",{on:{click:function(n){e.onCellClick(t)}}},[e._v(e._s(t.d))]),e.filterable?n("v-text-field",{model:{value:t.filterValue,callback:function(n){e.$set(t,"filterValue",n)},expression:"col.filterValue"}}):e._e()],1)}))])},It=[],Et={name:"smeup-data-table-header",props:["columns","filterable","sortable"],methods:{onCellClick:function(e){this.sortable&&("A"===e.sortMode?e.sortMode="D":e.sortMode="A",this.$emit("sortby",e))}}},wt=Et,yt=(n("7fad"),Object(b["a"])(wt,Vt,It,!1,null,"5918b8d7",null));yt.options.__file="SmeupDataTableHeader.vue";var Dt=yt.exports,Ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.rows,function(t,a){return n("tr",{key:a,class:{selected:t.selected}},e._l(e.columns,function(a){return n("td",{key:a.c,on:{click:function(n){e.onCellClick(a,t)}}},[e._v(e._s(e.getCellValue(a.c,t)))])}))}))},Pt=[],Mt={name:"smeup-data-table-body",props:["columns","rows","setup"],data:function(){return{}},methods:{getCellValue:function(e,t){return t.content[e].c},onCellClick:function(e,t){this.rows.filter(function(e){return e.selected}).forEach(function(e){return e.selected=!1}),t.selected=!0}}},$t=Mt,jt=(n("786f"),Object(b["a"])($t,Ot,Pt,!1,null,"226d8774",null));jt.options.__file="SmeupDataTableBody.vue";var At=jt.exports,Lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination"},[n("a",{staticClass:"paginator-prev",class:{disabled:e.previousPageDisabled},attrs:{href:"#"},on:{click:e.previousPage}},[e._v("\n\n    Back\n  ")]),e._v("\n\n  "+e._s(this.config.currentPage)+"\n\n  "),n("a",{staticClass:"paginator-forward",class:{disabled:e.forwardPageDisabled},attrs:{href:"#"},on:{click:e.forwardPage}},[e._v("\n\n    Forward\n  ")])])},Bt=[],Gt={name:"smeup-data-table-paginator",props:["rows","config"],computed:{previousPageDisabled:function(){return this.config.currentPage<=1},forwardPageDisabled:function(){return!1}},methods:{previousPage:function(){this.previousPageDisabled||this.config.currentPage--},forwardPage:function(){this.forwardPageDisabled||this.config.currentPage++}}},zt=Gt,Ft=(n("1d6a"),Object(b["a"])(zt,Lt,Bt,!1,null,null,null));Ft.options.__file="SmeupDataTablePaginator.vue";var Ht=Ft.exports,Kt={name:"smeup-data-table",components:{SmeupDataTableHeader:Dt,SmeupDataTableBody:At,SmeupDataTablePaginator:Ht},data:function(){return{manyRows:!1,filterable:!1,sortable:!1,sortByColumn:null,pagination:{enabled:!1,pageSize:5,currentPage:1},columns:bt.dataTableCols,rows:bt.dataTableFewRows}},computed:{filteredRows:function(){var e=this,t=this.rows.filter(function(t){var n=e.columns.filter(function(e){return e.filterValue.length>0});return!(n.length>0)||n.filter(function(e){var n=t.content[e.c];return!!n&&n.c.includes(e.filterValue)}).length==n.length});if(this.sortByColumn)return t.sort(function(t,n){var a=t.content[e.sortByColumn].c,l=n.content[e.sortByColumn].c,o=e.columns.filter(function(t){return t.c===e.sortByColumn})[0].sortMode,c=a.localeCompare(l);return"A"===o?c:-1*c});if(this.pagination.enabled){var n=(1*this.pagination.pageSize-this.pagination.pageSize)*this.pagination.currentPage,a=this.pagination.pageSize*this.pagination.currentPage;return console.log("start",n),console.log("end",a),t.splice(n,a)}return t}},methods:{onBigDataChange:function(){this.sortByColumn=null,this.manyRows?(this.columns=bt.dataTableManyCols,this.rows=bt.dataTableManyRows):(this.columns=bt.dataTableCols,this.rows=bt.dataTableFewRows)},onSort:function(e){this.sortByColumn=e.c}}},Jt=Kt,Wt=(n("d5ab"),Object(b["a"])(Jt,xt,kt,!1,null,"58b760e2",null));Wt.options.__file="SmeupDataTable.vue";var Ut=Wt.exports,Xt={name:"app",data:function(){return{component:null}},components:{GoogleChart:v,Knob:N,InputPanel:ee,VuetifyInp:Ne,ElementInp:Ue,ElementDataTable:Rt,BigDataTable:Nt,SmeupDataTable:Ut}},Qt=Xt,Zt=(n("034f"),Object(b["a"])(Qt,r,u,!1,null,null,null));Zt.options.__file="App.vue";var qt=Zt.exports,Yt=(n("a35e"),n("dca7"),n("fb51"));a["default"].use(Yt["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(qt)}}).$mount("#app"),google.charts.load("current",{packages:["corechart"]})},"5b5a":function(e,t,n){"use strict";var a=n("4e5c"),l=n.n(a);l.a},"6d0a":function(e,t,n){"use strict";var a=n("4306"),l=n.n(a);l.a},"786f":function(e,t,n){"use strict";var a=n("a8d9"),l=n.n(a);l.a},"7fad":function(e,t,n){"use strict";var a=n("2d1d"),l=n.n(a);l.a},8318:function(e,t,n){"use strict";var a=n("45b4"),l=n.n(a);l.a},"9a82":function(e,t,n){},a8d9:function(e,t,n){},aa5b:function(e,t,n){"use strict";var a=n("e4c1"),l=n.n(a);l.a},d5ab:function(e,t,n){"use strict";var a=n("9a82"),l=n.n(a);l.a},d709:function(e,t,n){},e4c1:function(e,t,n){}});
//# sourceMappingURL=app.92fc2c32.js.map