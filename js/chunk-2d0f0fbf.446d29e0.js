(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0fbf"],{"9f62":function(o,e,t){"use strict";t.r(e),t.d(e,"kup_box",function(){return w});var n=t("85f2"),i=t.n(n),r=(t("6762"),t("2fdb"),t("5176")),a=t.n(r),s=(t("7f7f"),t("5d58")),c=t.n(s),l=t("67bb"),p=t.n(l),d=t("795b"),b=t.n(d),u=t("0b36"),x=(t("31a7"),t("8956")),h=function(o,e,t,n){return new(t||(t=b.a))(function(i,r){function a(o){try{c(n.next(o))}catch(e){r(e)}}function s(o){try{c(n["throw"](o))}catch(e){r(e)}}function c(o){o.done?i(o.value):new t(function(e){e(o.value)}).then(a,s)}c((n=n.apply(o,e||[])).next())})},f=function(o,e){var t,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof p.a&&(r[c.a]=function(){return this}),r;function s(o){return function(e){return l([o,e])}}function l(r){if(t)throw new TypeError("Generator is already executing.");while(a)try{if(t=1,n&&(i=2&r[0]?n["return"]:r[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(o,a)}catch(s){r=[6,s],n=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},w=function(){function o(o){Object(u["g"])(this,o),this.columns=1,this.sortEnabled=!1,this.filterEnabled=!1,this.multiSelection=!1,this.showSelection=!0,this.enableRowActions=!1,this.globalFilterValue="",this.collapsedSection={},this.selectedRows=[],this.visibleColumns=[],this.rows=[],this.kupBoxClicked=Object(u["d"])(this,"kupBoxClicked",6),this.kupBoxSelected=Object(u["d"])(this,"kupBoxSelected",6),this.kupAutoBoxSelect=Object(u["d"])(this,"kupAutoBoxSelect",6),this.kupRowActionMenuClicked=Object(u["d"])(this,"kupRowActionMenuClicked",6),this.kupRowActionClicked=Object(u["d"])(this,"kupRowActionClicked",6)}return o.prototype.recalculateRows=function(){this.initRows()},o.prototype.onDataChanged=function(){this.initVisibleColumns(),this.initRows(),this.checkLayout()},o.prototype.onLayoutChanged=function(){this.checkLayout()},o.prototype.onSelectBoxChanged=function(){this.handleAutomaticBoxSelection()},o.prototype.componentWillLoad=function(){this.onDataChanged()},o.prototype.componentDidLoad=function(){this.handleAutomaticBoxSelection(),document.addEventListener("click",this.clickFunction.bind(this))},o.prototype.componentDidUnload=function(){document.removeEventListener("click",this.clickFunction.bind(this))},o.prototype.loadRowActions=function(o,e){return h(this,void 0,void 0,function(){return f(this,function(t){return o.actions=e,this.rowActionMenuOpened=o,[2]})})},o.prototype.getColumns=function(){return this.data&&this.data.columns?this.data.columns:[{title:"",name:"",size:0}]},o.prototype.initVisibleColumns=function(){this.visibleColumns=this.getColumns().filter(function(o){return!o.hasOwnProperty("visible")||o.visible})},o.prototype.getRows=function(){return this.data&&this.data.rows?this.data.rows:[]},o.prototype.initRows=function(){var o=this.getRows();if(this.filterEnabled&&this.globalFilterValue){var e=this.visibleColumns,t=e.length,n=[],i=0;while(t-- >0)n.push(e[i++].name);o=Object(x["j"])(o,null,this.globalFilterValue,n)}this.rows=this.sortRows(o)},o.prototype.sortRows=function(o){var e=o;if(this.sortBy){var t={column:this.sortBy,sortMode:x["d"].A};e=Object(x["w"])(e,[t])}return e},o.prototype.checkLayout=function(){if(this.layout)this.boxLayout=this.layout;else{var o={horizontal:!1,sections:[],style:{textAlign:"center"}},e=this.visibleColumns,t=e.length,n=[],i=0;while(t-- >0)n.push({column:e[i++].name});o.content=n,this.boxLayout={sections:[o]}}},o.prototype.onSortChange=function(o){this.sortBy=o.value.id,this.initRows()},o.prototype.onGlobalFilterChange=function(o){var e=o.detail;this.globalFilterValue=e.value},o.prototype.isSectionExpanded=function(o,e){return!(!o.id||!e.id)&&(this.collapsedSection[e.id]&&this.collapsedSection[e.id][o.id])},o.prototype.handleAutomaticBoxSelection=function(){this.selectBox&&this.selectBox>0&&this.selectBox<=this.rows.length&&(this.selectedRows=[],this.selectedRows.push(this.rows[this.selectBox-1]),this.kupAutoBoxSelect.emit({row:this.selectedRows[0]}))},o.prototype.checkIfElementIsActionMenuIcon=function(o){return!(!o.tagName||!o.parentElement)&&("svg"===o.tagName&&o.parentElement.classList.contains("row-actions-toggler"))},o.prototype.onBoxClick=function(o,e){var t=o.target;if(t instanceof HTMLElement){var n=t,i=n.classList;while(!i.contains("box-object")&&!i.contains("box-section")&&!i.contains("box")){if(n=n.parentElement,null===n)break;i=n.classList}var r=null;i.contains("box-object")&&(r=n.dataset.column),this.kupBoxClicked.emit({row:e,column:r}),this.multiSelection?this.onSelectionCheckChange(e):this.selectedRows=[e]}},o.prototype.onSelectionCheckChange=function(o){var e=this.selectedRows.indexOf(o);e>=0?(this.selectedRows.splice(e,1),this.selectedRows=this.selectedRows.slice()):this.selectedRows=this.selectedRows.concat([o]),this.kupBoxSelected.emit({rows:this.selectedRows})},o.prototype.toggleSectionExpand=function(o,e){if(e.id)if(o.id){if(this.collapsedSection[e.id]){var t=this.collapsedSection[e.id];t[o.id]?t[o.id]=!t[o.id]:t[o.id]=!0}else this.collapsedSection[e.id]={},this.collapsedSection[e.id][o.id]=!0;this.collapsedSection=a()({},this.collapsedSection)}else console.error("cannot expand / collapse a section of a row without ad id");else console.error("cannot expand / collapse a section withoun an ID")},o.prototype.onRowAction=function(o){o&&(o!==this.rowActionMenuOpened?o.actions?this.rowActionMenuOpened=o:this.kupRowActionMenuClicked.emit({row:o}):this.rowActionMenuOpened=null)},o.prototype.onRowActionClicked=function(o,e,t){this.kupRowActionClicked.emit({row:o,action:e,index:t})},o.prototype.clickFunction=function(o){try{for(var e=o.composedPath(),t=0,n=e;t<n.length;t++){var i=n[t];if(this.checkIfElementIsActionMenuIcon(i))return}}catch(r){if(this.checkIfElementIsActionMenuIcon(o.target))return}this.rowActionMenuOpened=null},o.prototype.renderRow=function(o){var e=this,t=this.visibleColumns.slice(),n=null,i=o.layout;i||(i=this.boxLayout);var r=!1;if(i){i.horizontal&&(r=!0);var a=i.sections,s=a.length,c=0;s>0&&(n=[]);var l={horizontal:r};while(s-- >0)n.push(this.renderSection(a[c++],l,o,t))}var p=this.selectedRows.includes(o),d=null;this.multiSelection&&(d=Object(u["f"])("div",{class:"box-selection"},Object(u["f"])("input",{type:"checkbox",checked:p,onClick:function(o){return o.stopPropagation()},onChange:function(){return e.onSelectionCheckChange(o)}})));var b=null;if(this.enableRowActions){var x={"row-action-menu":!0,open:o===this.rowActionMenuOpened},h=null;if(o.actions){var f=o.actions.map(function(t,n){var i="icon "+t.icon;return Object(u["f"])("li",{tabindex:"0",onClick:function(){return e.onRowActionClicked(o,t,n)}},Object(u["f"])("div",{class:i}),Object(u["f"])("div",{class:"text"},t.text))});h=Object(u["f"])("ul",null,f)}b=Object(u["f"])("div",{class:"row-actions-wrapper"},Object(u["f"])("div",{class:"row-actions-toggler"},Object(u["f"])("svg",{version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24",onClick:function(){return e.onRowAction(o)}},Object(u["f"])("path",{d:"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"})),Object(u["f"])("div",{class:x},h)))}var w=null;o.badges&&o.badges.length>0&&(w=o.badges.map(function(o){return Object(u["f"])("kup-badge",{text:o.text,position:o.position,icon:o.icon,class:"centered"})}));var g={box:!0,selected:this.showSelection&&p,column:!r};return Object(u["f"])("div",{class:"box-wrapper"},Object(u["f"])("div",{class:g,onClick:function(t){return e.onBoxClick(t,o)}},d,n,w),b)},o.prototype.renderSection=function(o,e,t,n){var i=this,r=null;if(o.sections&&o.sections.length>0){var a=o.sections,s=a.length,c=0;s>0&&(r=[]);while(s-- >0)r.push(this.renderSection(a[c++],o,t,n))}else if(o.content){var l=o.content;s=l.length,c=0;s>0&&(r=[]);while(s-- >0)r.push(this.renderBoxObject(l[c++],t,n))}else if(n.length>0){var p=n[0];n.splice(0,1),r=this.renderBoxObject({column:p.name},t,n)}var d=this.isSectionExpanded(t,o),b=!!o.columns,x={"box-section":!0,open:d,column:!b&&!o.horizontal,grid:b,titled:!!o.title,"last-child":!o.sections||0===o.sections.length},h=o.style||{};o.dim&&e&&(h.flex="0 0 "+o.dim,e.horizontal?h.maxWidth=o.dim:h.maxHeight=o.dim),b&&(h["grid-template-columns"]="repeat("+o.columns+", 1fr)");var f=null;if(o.collapsible){x["collapse-section"]=!0;var w={content:!0},g="";g=o.title?o.title:d?"Collassa":"Espandi",f=Object(u["f"])("div",{class:x,style:h},Object(u["f"])("div",{class:w},r),Object(u["f"])("div",{class:"header",role:"button",onClick:function(e){e.stopPropagation(),i.toggleSectionExpand(t,o)}},Object(u["f"])("div",{class:"header-content"},Object(u["f"])("span",null,g),Object(u["f"])("span",{class:"mdi mdi-chevron-down"}))))}else{var m=o.title?Object(u["f"])("h3",null,o.title):null;f=Object(u["f"])("div",{class:x,style:h},m,r)}return f},o.prototype.renderBoxObject=function(o,e,t){var n=null,i={};if(o.value)n=o.value;else if(o.column){var r=e.cells[o.column];if(r){for(var s=-1,c=0;c<t.length;c++){var l=t[c];if(l.name===o.column){s=c;break}}if(s>=0&&t.splice(s,1),r.style&&(i=a()({},r.style)),Object(x["f"])(r.obj)){var p=null;r.config&&r.config.badges&&(p=r.config.badges),n=Object(u["f"])("kup-image",{src:r.value,badges:p})}else if(Object(x["g"])(r.obj))n=Object(u["f"])("kup-button",a()({},Object(x["h"])(r)));else if(Object(x["i"])(r.obj)){var d=Object(x["r"])(r.value).value(),b=!1,h=null,f={};r.config&&(b=!!r.config.hideLabel,r.config.hasOwnProperty("labelText")&&(h=r.config.labelText),r.config.foregroundColor&&(f["--kup-pb_foreground-color"]=r.config.foregroundColor)),n=Object(u["f"])("div",{style:f},Object(u["f"])("kup-progress-bar",{value:d,labelText:h,hideLabel:b}))}else n=r.value}}return Object(u["f"])("div",{"data-column":o.column,class:"box-object",style:i},n)},o.prototype.render=function(){var o=this,e=null;if(this.sortEnabled){var t={value:"",id:""},n=this.visibleColumns.map(function(e){var n={value:e.title,id:e.name};return e.name===o.sortBy&&(t=n),n}),i=[{value:"",id:""}].concat(n);e=Object(u["f"])("div",{id:"sort-panel"},Object(u["f"])("kup-combo",{displayedField:"value",items:i,initialValue:t,onKetchupComboSelected:function(e){return o.onSortChange(e.detail)}}))}var r=null;this.filterEnabled&&(r=Object(u["f"])("div",{id:"filter-panel"},Object(u["f"])("kup-text-input",{placeholder:"Cerca",onKetchupTextInputUpdated:function(e){return o.onGlobalFilterChange(e)}},Object(u["f"])("svg",{slot:"left",version:"1.1",width:"18",height:"18",viewBox:"0 0 24 24"},Object(u["f"])("path",{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})))));var a=null;if(0===this.rows.length)a=Object(u["f"])("p",{id:"empty-data-message"},"Empty data");else{var s=this.rows,c=s.length,l=0;a=[];while(c-- >0)a.push(this.renderRow(s[l++]))}var p={"grid-template-columns":"repeat("+this.columns+", 1fr)"};return Object(u["f"])("div",null,e,r,Object(u["f"])("div",{id:"box-container",style:p},a))},i()(o,"watchers",{get:function(){return{globalFilterValue:["recalculateRows"],sortBy:["recalculateRows"],data:["onDataChanged"],layout:["onLayoutChanged"],selectBox:["onSelectBoxChanged"]}},enumerable:!0,configurable:!0}),i()(o,"style",{get:function(){return"@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);:host{--box_color:var(--kup-box_color,#707070);--box_border-color:var(--kup-box_border-color,#d0d0d0);--box_border-radius:var(--kup-box_border-radius,3px);--box_img-border-radius:var(--kup-box_img-border-radius,4px);--box_expand-panel-color:var(--kup-box_expand-panel-color,$smeup-primary);--box_hover-box-shadow:var(--kup-box_hover-box-shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5));--box_titled-section-font-size:var(--kup-box_titled-section-font-size,12px);--box_titled-section-bg-color:var(--kup-box_titled-section-bg-color,#fff);--box_titled-section-top:var(--kup-box_titled-section-top,-9px)}#box-container{display:grid;grid-gap:1rem;color:var(--box_color)}#box-container *{-webkit-box-sizing:border-box;box-sizing:border-box}#box-container .box-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#box-container .box-wrapper .box{-ms-flex-positive:1;flex-grow:1;cursor:pointer;position:relative;border-radius:var(--box_border-radius);border:1px solid var(--box_border-color);display:-ms-flexbox;display:flex;padding:3px}#box-container .box-wrapper .box.column{-ms-flex-direction:column;flex-direction:column}#box-container .box-wrapper .box.selected,#box-container .box-wrapper .box:hover{-webkit-box-shadow:var(--box_hover-box-shadow);box-shadow:var(--box_hover-box-shadow)}#box-container .box-wrapper .box .box-section{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1 1 1%;flex:1 1 1%;-ms-flex-wrap:wrap;flex-wrap:wrap}#box-container .box-wrapper .box .box-section.last-child{margin:3px 4px}#box-container .box-wrapper .box .box-section.column{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:unset;flex-wrap:unset}#box-container .box-wrapper .box .box-section.column>.box-section{-ms-flex:0 0 auto;flex:0 0 auto}#box-container .box-wrapper .box .box-section.grid{display:grid}#box-container .box-wrapper .box .box-section .box-object{padding:1px 4px}#box-container .box-wrapper .box .box-section .box-object img{border-radius:var(--box_img-border-radius);height:auto}#box-container .box-wrapper .box .box-section.collapse-section .header{border-top:1px solid var(--box_border-color);color:var(--box_expand-panel-color);display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%}#box-container .box-wrapper .box .box-section.collapse-section .header .header-content{margin:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#box-container .box-wrapper .box .box-section.collapse-section .header .header-content .mdi{margin-left:5px}#box-container .box-wrapper .box .box-section.collapse-section .content{display:none;width:100%}#box-container .box-wrapper .box .box-section.collapse-section.open .header .header-content .mdi:before{-webkit-animation:rotate-icon .5s ease-out forwards;animation:rotate-icon .5s ease-out forwards}#box-container .box-wrapper .box .box-section.collapse-section.open .content{display:block}#box-container .box-wrapper .box .box-section.titled{border:1px solid var(--box_border-color);padding-top:5px;position:relative;margin:10px}#box-container .box-wrapper .box .box-section.titled>h3{position:absolute;margin:0;padding:0 3px;top:var(--box_titled-section-top);left:5px;font-size:var(--box_titled-section-font-size);background:var(--box_titled-section-bg-color)}#box-container .box-wrapper .box .box-selection{position:absolute;top:.5rem;right:.5rem}#box-container .box-wrapper .box kup-badge{--bdg_background-color:#f89406;--kup-badge_dimension:24px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler{position:relative;width:24px;height:24px;margin-left:3px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler svg{cursor:pointer;opacity:0;fill:#545454;-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu{position:absolute;top:0;right:24px;display:none;border:1px solid var(--box_border-color);z-index:10;background:#fff;-webkit-box-shadow:0 0 7.5px 0 hsla(0,0%,50.2%,.5);box-shadow:0 0 7.5px 0 hsla(0,0%,50.2%,.5)}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul{list-style-type:none;margin:0;padding:0}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li{cursor:pointer;white-space:nowrap;padding:0 12px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:30px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li:not(:last-child){border-bottom:1px solid var(--box_border-color)}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li .icon{margin-right:5px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu.open{display:block}#box-container .box-wrapper:hover .row-actions-wrapper .row-actions-toggler svg{opacity:1}:host(.no-shadow) #box-container .box{border:none}:host(.no-shadow) #box-container .box.selected,:host(.no-shadow) #box-container .box:hover{-webkit-box-shadow:none;box-shadow:none}#filter-panel,#sort-panel{margin-bottom:1rem}#filter-panel kup-text-input{--kup-text-input_border-color:#d0d0d0;--kup-text-input_color:#545454}#filter-panel svg{fill:grey;margin-left:3px}@-webkit-keyframes rotate-icon{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@-moz-keyframes rotate-icon{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}@-o-keyframes rotate-icon{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}@keyframes rotate-icon{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}"},enumerable:!0,configurable:!0}),o}()}}]);
//# sourceMappingURL=chunk-2d0f0fbf.446d29e0.js.map