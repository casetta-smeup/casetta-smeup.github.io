(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)r=i[f],o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08a1":function(e,t,n){},"09c9":function(e,t,n){"use strict";var a=n("9095"),o=n.n(a);o.a},"37c85":function(e,t,n){"use strict";var a=n("8a94"),o=n.n(a);o.a},"53b7":function(e,t,n){"use strict";var a=n("c101"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),o=n("ce5b"),c=n.n(o);n("bf40");a["default"].use(c.a,{});n("0fae");var r=n("5c96");a["default"].component(r["Checkbox"].name,r["Checkbox"]),a["default"].component(r["Input"].name,r["Input"]),a["default"].component(r["Option"].name,r["Option"]),a["default"].component(r["Select"].name,r["Select"]),a["default"].component(r["Table"].name,r["Table"]),a["default"].component(r["TableColumn"].name,r["TableColumn"]);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("div",{staticClass:"loadin"},[e.isLoading?n("v-progress-linear",{attrs:{color:e.color,indeterminate:!0}}):e._e()],1),n("router-view")],1)],1)},u=[],s={data:function(){return{color:"green"}},computed:{isLoading:function(){return this.$store.state.loading}}},l=s,f=(n("53b7"),n("2877")),p=Object(f["a"])(l,i,u,!1,null,"770644ca",null),m=p.exports,d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasMainComponent?n("div",{attrs:{id:"webup"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("el-input",{staticClass:"fun-input",attrs:{placeholder:"FUN"},model:{value:e.sFunction,callback:function(t){e.sFunction=t},expression:"sFunction"}})],1),n(e.currentMainComponent,{tag:"component",attrs:{component:e.getMainComponent()}})],1):e._e()},v=[],b={name:"webup",data:function(){return{sFunction:"F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())"}},mounted:function(){this.updateWebup()},methods:{getMainComponent:function(){return this.$store.state.webup.comp},onSubmit:function(){this.sFunction&&this.updateWebup()},updateWebup:function(){var e=this;this.$store.dispatch("getComp",this.sFunction).then(function(t){e.$store.commit("setLoading",!1),e.$store.commit("setWebupComp",t.data.comp)}).catch(function(t){e.$store.commit("setLoading",!1),console.log(t)})}},computed:{currentMainComponent:function(){var e=this.getMainComponent();return e?e.type:"UNK"},hasMainComponent:function(){var e=this.getMainComponent();return e&&null!=e}}},g=b,C=(n("7fe3"),Object(f["a"])(g,h,v,!1,null,null,null)),_=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._v("Loggin in... please wait")])},y=[],w={name:"login",data:function(){return{username:"wu3_01",password:"webup_04",env:"demo"}},created:function(){var e=this;this.$store.dispatch("login",{env:this.env,user:this.username,pwd:this.password}).then(function(t){e.$store.commit("setLoading",!1),e.$store.commit("setUser",e.username),localStorage.setItem("JWT",t.data.data.JWT),e.$router.push("webup")}).catch(function(t){e.$store.commit("setLoading",!1),console.log(t)})}},S=w,O=(n("09c9"),Object(f["a"])(S,x,y,!1,null,null,null)),$=O.exports;a["default"].use(d["a"]);var j=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:$},{path:"/webup",name:"webup",component:_}]}),k=n("2f62"),I=n("bc3a"),E=n.n(I);a["default"].use(k["a"]);var L,T,M=new k["a"].Store({state:{loading:!1,user:null,webup:{comp:null}},mutations:{setLoading:function(e,t){e.loading=t},setUser:function(e,t){e.user=t},setWebupComp:function(e,t){e.webup.comp=t}},actions:{getComp:function(e,t){var n=new URLSearchParams;return n.append("fun",t),e.commit("setLoading",!0),E.a.post("/comp/get",n.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},login:function(e,t){var n=e.commit,a=new URLSearchParams;return a.append("env",t.env),a.append("user",t.user),a.append("pwd",t.pwd),n("setLoading",!0),E.a.post("/auth/login",a.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}}}),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BTN"},[e._v("Button!")])},P=[],B={props:["component"],methods:{getComponentType:function(e){if(e)switch(e){case"BTN":case"CHA":case"EXD":case"IML":case"INP":case"LAB":case"LAY":case"MAT":case"SEC":case"SPL":return e;default:return"UNK"}return"UNK"},getAncestors:function(){var e=new Array;e.push(this);var t=this.$parent;while(null!=t)e.push(t),t=t.$parent;return e},getChildren:function(){return this.$children.flatMap(function(e){return e.getChildren()})},extractIdentifiableComponentById:function(e,t){return console.log(e),console.log(t),null},getIdentifiableComponentById:function(e){var t=null;if(!e)return t;var n=this.getAncestors();if("webup"===e)return t;for(var a in n)if(t=this.extractIdentifiableComponentById(a,e),null!=t)break;return t},sendDynamism:function(e){console.log("sending dynamism: ",e)}}},N=B,A=Object(f["a"])(N,L,T,!1,null,null,null),D=A.exports,U={name:"BTN",extends:D},W=U,F=Object(f["a"])(W,V,P,!1,null,null,null),R=F.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:".CHA"},[n("GChart",{ref:"gChart",attrs:{type:e.chartType,data:e.chartData,options:e.chartOptions,events:e.chartEvents}}),e.message?n("span",[e._v("\n    "+e._s(e.message)+"\n  ")]):e._e()],1)},J=[],K=n("cb43"),X={name:"CHA",extends:{BasicComponent:D},components:{GChart:K["GChart"]},data:function(){var e=this;return{message:"",chartData:[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350]],chartOptions:{},chartType:"ColumnChart",chartEvents:{select:function(){var t=e.$refs.gChart.chartObject;if(t.getSelection().length>0){var n=t.getSelection()[0],a=n.row,o=n.column;e.message="Hai selezionato la colonna ".concat(e.chartData[0][o]," ed il suo valore e' ").concat(e.chartData[a+1][o])}}}}}},G=X,Y=(n("d6d9"),Object(f["a"])(G,H,J,!1,null,"7033bfb8",null)),z=Y.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"LAB"},[e._v("Label!")])},Q=[],Z={name:"LAB",extends:D},ee=Z,te=Object(f["a"])(ee,q,Q,!1,null,null,null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"LAY"},e._l(e.component.comps,function(t){return n("div",{key:t.id},[n(e.getComponentType(t.type),{tag:"component",attrs:{component:t}})],1)}))},oe=[],ce={name:"LAY",extends:D},re=ce,ie=Object(f["a"])(re,ae,oe,!1,null,null,null),ue=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"IML"},e._l(e.component.IML.ns,function(t){return n("div",{key:t.o.t+t.o.p+t.o.c,staticClass:"image-item"},[n("img",{attrs:{height:"160",width:"160",src:e.getImageSource(t)}}),n("p",[e._v(e._s(t.d))])])}))},le=[],fe={name:"IML",extends:D,methods:{getImageSource:function(e){return"https://mauer.smeup.com/WebUPNightly/javax.faces.resource/".concat(e.o.t,"%253B").concat(e.o.p,"%253B").concat(e.o.c,".jsf?ln=smeupImages")}}},pe=fe,me=(n("a20d"),Object(f["a"])(pe,se,le,!1,null,"88c6727e",null)),de=me.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"INP"},[n("div",{staticClass:"field-container"},[n("itx",{attrs:{initialValue:e.itxValue},on:{change:function(t){e.onItxChange(t)}}}),n("cmb",{attrs:{initialValue:e.cmbValue},on:{change:function(t){e.onCmbChange(t)}}}),n("chk",{attrs:{initialValue:e.chkValue},on:{change:function(t){e.onChkChange(t)}}})],1),n("div",{staticClass:"field-values"},[n("ul",[n("li",[e._v("ITX: "+e._s(e.itxValue))]),n("li",[e._v("CMB: "+e._s(e.cmbValue))]),n("li",[e._v("CHK: "+e._s(e.chkValue))])])])])},ve=[],be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-checkbox",{on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("Is uomo focaccina a bellissimo uomo?")])],1)},ge=[],Ce={name:"chk",props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){this.$emit("change",this.value)}}},_e=Ce,xe=Object(f["a"])(_e,be,ge,!1,null,null,null),ye=xe.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{placeholder:"Tartaruga ninja preferita"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.items,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))},Se=[],Oe={name:"cmb",props:["initialValue"],data:function(){return{value:this.initialValue,items:["Donatello","Leonardo","Michelangelo","Raffaello"]}},methods:{onChange:function(){this.$emit("change",this.value)}}},$e=Oe,je=Object(f["a"])($e,we,Se,!1,null,null,null),ke=je.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-input",{attrs:{placeholder:"Nome"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},Ee=[],Le={name:"itx",props:["initialValue"],data:function(){return{value:this.initialValue}},methods:{onChange:function(){console.log("triggering change",this.value),this.$emit("change",this.value)}}},Te=Le,Me=Object(f["a"])(Te,Ie,Ee,!1,null,null,null),Ve=Me.exports,Pe={name:"INP",components:{Chk:ye,Cmb:ke,Itx:Ve},extends:{BasicComponent:D},data:function(){return{itxValue:"",cmbValue:"",chkValue:!0}},methods:{onChkChange:function(e){this.chkValue=e},onCmbChange:function(e){this.cmbValue=e},onItxChange:function(e){this.itxValue=e}}},Be=Pe,Ne=(n("5761"),Object(f["a"])(Be,he,ve,!1,null,"b14926f2",null)),Ae=Ne.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:".MAT"},[e.component.table?n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.component.table.cols,function(t,a){return n("el-table-column",{key:a,attrs:{prop:t.c,label:t.d},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.row;return[e.isImage(t)?n("div",[n("img",{attrs:{height:"100",width:"100",src:e.getImageSource(t,o)}})]):n("div",[e._v("\n            "+e._s(o[t.c])+"\n          ")])]}}])})})):e._e()],1)},Ue=[],We=n("c665"),Fe=n("aa9a"),Re=function(){function e(){Object(We["a"])(this,e),this.source=null,this.targets=[],this.event="defaultEvent",this.enabled=null}return Object(Fe["a"])(e,[{key:"source",get:function(){return this.source}}]),e}(),He={name:"MAT",extends:D,computed:{tableData:function(){return this.component.table.rows.map(function(e){var t=e.content.entry,n={};return t.forEach(function(e){n[e.key]=e.value.c}),n})}},methods:{onRowClick:function(e){console.log("click on row: ",e);var t=new Re;t.source=this,t.targets=[],t.event="click",this.sendDynamism("rowClick!")},isImage:function(e){return"J4"===e.t&&"IMG"===e.p},getImageSource:function(e,t){var n=t[e.c],a=n.split(";");return"https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/".concat(a[0],"%253B").concat(a[1],"%253B").concat(a[1],".jsf?ln=smeupImages")}}},Je=He,Ke=(n("678e"),Object(f["a"])(Je,De,Ue,!1,null,"7ec3cd08",null)),Xe=Ke.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"EXD",style:e.getComponentStyle()},e._l(e.component.comps,function(t){return n("div",{key:t.id},[n(e.getComponentType(t.type),{key:t.id,tag:"component",attrs:{component:t}})],1)}))},Ye=[],ze={name:"EXD",extends:D,methods:{getComponentStyle:function(){return{display:"flex",flexDirection:"ROW"===this.component.direction?"row":"column"}}}},qe=ze,Qe=(n("f0cc"),Object(f["a"])(qe,Ge,Ye,!1,null,"170eafef",null)),Ze=Qe.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"SEC"},e._l(e.component.comps,function(t){return n("div",{key:t.id},[n(e.getComponentType(t.type),{tag:"component",attrs:{component:t}})],1)}))},tt=[],nt={name:"SEC",extends:D},at=nt,ot=(n("ca1b"),Object(f["a"])(at,et,tt,!1,null,"0fa3a04f",null)),ct=ot.exports,rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"SPL"},[e._v("Spotlight!")])},it=[],ut={name:"SPL",extends:D},st=ut,lt=Object(f["a"])(st,rt,it,!1,null,null,null),ft=lt.exports,pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"UNK"},[e._v("\n  Not managed: "+e._s(e.component.type)+"\n")])},mt=[],dt={name:"UNK",extends:D},ht=dt,vt=(n("37c85"),Object(f["a"])(ht,pt,mt,!1,null,"15cdaeee",null)),bt=vt.exports;a["default"].config.productionTip=!1,E.a.defaults.baseURL="https://webuptest.smeup.com/WebUPNightly/services",E.a.interceptors.request.use(function(e){var t=localStorage.getItem("JWT");return t&&(e.headers.authorization="Bearer "+t),e}),a["default"].component(R.name,R),a["default"].component(z.name,z),a["default"].component(Ze.name,Ze),a["default"].component(de.name,de),a["default"].component(Ae.name,Ae),a["default"].component(ne.name,ne),a["default"].component(ue.name,ue),a["default"].component(Xe.name,Xe),a["default"].component(ct.name,ct),a["default"].component(ft.name,ft),a["default"].component(bt.name,bt),new a["default"]({router:j,store:M,render:function(e){return e(m)}}).$mount("#app")},5761:function(e,t,n){"use strict";var a=n("f922"),o=n.n(a);o.a},"678e":function(e,t,n){"use strict";var a=n("d0df"),o=n.n(a);o.a},"7fe3":function(e,t,n){"use strict";var a=n("afc4"),o=n.n(a);o.a},"8a94":function(e,t,n){},9095:function(e,t,n){},"9a20":function(e,t,n){},a005:function(e,t,n){},a20d:function(e,t,n){"use strict";var a=n("a005"),o=n.n(a);o.a},afc4:function(e,t,n){},b38f:function(e,t,n){},c101:function(e,t,n){},ca1b:function(e,t,n){"use strict";var a=n("b38f"),o=n.n(a);o.a},d0df:function(e,t,n){},d6d9:function(e,t,n){"use strict";var a=n("9a20"),o=n.n(a);o.a},f0cc:function(e,t,n){"use strict";var a=n("08a1"),o=n.n(a);o.a},f922:function(e,t,n){}});
//# sourceMappingURL=app.0e039945.js.map