function e(e,o,t,n,i,r,a){try{var s=e[r](a);var c=s.value}catch(l){t(l);return}if(s.done){o(c)}else{Promise.resolve(c).then(n,i)}}function o(o){return function(){var t=this,n=arguments;return new Promise(function(i,r){var a=o.apply(t,n);function s(o){e(a,i,r,s,c,"next",o)}function c(o){e(a,i,r,s,c,"throw",o)}s(undefined)})}}function t(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function n(e,o,n){if(o)t(e.prototype,o);if(n)t(e,n);return e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{yC3N:function e(t,i,r){"use strict";r.r(i),r.d(i,"kup_box",function(){return l});var a=r("zp0o"),s=(r("fcjB"),r("fcTE")),c=r("RoQ+");var l=function(){function e(e){Object(a.g)(this,e),this.columns=1,this.sortEnabled=!1,this.filterEnabled=!1,this.multiSelection=!1,this.showSelection=!0,this.enableRowActions=!1,this.pagination=!1,this.pageSize=10,this.globalFilterValue="",this.collapsedSection={},this.selectedRows=[],this.currentPage=1,this.visibleColumns=[],this.rows=[],this.filteredRows=[],this.kupBoxClicked=Object(a.d)(this,"kupBoxClicked",6),this.kupBoxSelected=Object(a.d)(this,"kupBoxSelected",6),this.kupAutoBoxSelect=Object(a.d)(this,"kupAutoBoxSelect",6),this.kupRowActionMenuClicked=Object(a.d)(this,"kupRowActionMenuClicked",6),this.kupRowActionClicked=Object(a.d)(this,"kupRowActionClicked",6)}var t=e.prototype;t.recalculateRows=function e(){this.initRows()};t.onDataChanged=function e(){this.initVisibleColumns(),this.initRows(),this.checkLayout()};t.onLayoutChanged=function e(){this.checkLayout()};t.onSelectBoxChanged=function e(){this.handleAutomaticBoxSelection()};t.componentWillLoad=function e(){this.onDataChanged()};t.componentDidLoad=function e(){this.handleAutomaticBoxSelection(),document.addEventListener("click",this.clickFunction.bind(this))};t.componentDidUnload=function e(){document.removeEventListener("click",this.clickFunction.bind(this))};t.loadRowActions=function(){var e=o(regeneratorRuntime.mark(function e(o,t){return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:o.actions=t,this.rowActionMenuOpened=o;case 1:case"end":return n.stop()}}},e,this)}));function t(o,t){return e.apply(this,arguments)}return t}();t.getColumns=function e(){return this.data&&this.data.columns?this.data.columns:[{title:"",name:"",size:0}]};t.initVisibleColumns=function e(){this.visibleColumns=this.getColumns().filter(function(e){return!e.hasOwnProperty("visible")||e.visible})};t.getRows=function e(){return this.data&&this.data.rows?this.data.rows:[]};t.initRows=function e(){if(this.filteredRows=this.getRows(),this.filterEnabled&&this.globalFilterValue){var o=this.visibleColumns;var t=o.length,n=[],i=0;for(;t-- >0;){n.push(o[i++].name)}this.filteredRows=Object(s.j)(this.filteredRows,null,this.globalFilterValue,n)}this.rows=this.sortRows(this.filteredRows),this.pagination&&(this.rows=Object(s.t)(this.rows,this.currentPage,this.pageSize))};t.sortRows=function e(o){var t=o;if(this.sortBy){var n={column:this.sortBy,sortMode:s.d.A};t=Object(s.w)(t,[n])}return t};t.checkLayout=function e(){if(this.layout)return void(this.boxLayout=this.layout);var o={horizontal:!1,sections:[],style:{textAlign:"center"}},t=this.visibleColumns;var n=t.length,i=[],r=0;for(;n-- >0;){i.push({column:t[r++].name})}o.content=i,this.boxLayout={sections:[o]}};t.onSortChange=function e(o){this.sortBy=o.value.id,this.initRows()};t.onGlobalFilterChange=function e(o){var t=o.detail;this.globalFilterValue=t.value};t.isSectionExpanded=function e(o,t){return!(!o.id||!t.id)&&this.collapsedSection[t.id]&&this.collapsedSection[t.id][o.id]};t.handleAutomaticBoxSelection=function e(){this.selectBox&&this.selectBox>0&&this.selectBox<=this.rows.length&&(this.selectedRows=[],this.selectedRows.push(this.rows[this.selectBox-1]),this.kupAutoBoxSelect.emit({row:this.selectedRows[0]}))};t.checkIfElementIsActionMenuIcon=function e(o){return!(!o.tagName||!o.parentElement)&&"svg"===o.tagName&&o.parentElement.classList.contains("row-actions-toggler")};t.onBoxClick=function e(o,t){var n=o.target;if(!(n instanceof HTMLElement))return;var i=n,r=i.classList;for(;!r.contains("box-object")&&!r.contains("box-section")&&!r.contains("box")&&null!==(i=i.parentElement);){r=i.classList}var a=null;r.contains("box-object")&&(a=i.dataset.column),this.kupBoxClicked.emit({row:t,column:a}),this.multiSelection?this.onSelectionCheckChange(t):this.selectedRows=[t]};t.onSelectionCheckChange=function e(o){var t=this.selectedRows.indexOf(o);t>=0?(this.selectedRows.splice(t,1),this.selectedRows=[].concat(this.selectedRows)):this.selectedRows=[].concat(this.selectedRows,[o]),this.kupBoxSelected.emit({rows:this.selectedRows})};t.toggleSectionExpand=function e(o,t){if(t.id){if(o.id){if(this.collapsedSection[t.id]){var n=this.collapsedSection[t.id];n[o.id]=!n[o.id]||!n[o.id]}else this.collapsedSection[t.id]={},this.collapsedSection[t.id][o.id]=!0;this.collapsedSection=Object.assign({},this.collapsedSection)}else console.error("cannot expand / collapse a section of a row without ad id")}else console.error("cannot expand / collapse a section withoun an ID")};t.onRowAction=function e(o){o&&(o!==this.rowActionMenuOpened?o.actions?this.rowActionMenuOpened=o:this.kupRowActionMenuClicked.emit({row:o}):this.rowActionMenuOpened=null)};t.onRowActionClicked=function e(o,t,n){this.kupRowActionClicked.emit({row:o,action:t,index:n})};t.clickFunction=function e(o){try{var t=o.composedPath();for(var n=t,i=Array.isArray(n),r=0,n=i?n:n[Symbol.iterator]();;){var a;if(i){if(r>=n.length)break;a=n[r++]}else{r=n.next();if(r.done)break;a=r.value}var s=a;if(this.checkIfElementIsActionMenuIcon(s))return}}catch(c){if(this.checkIfElementIsActionMenuIcon(o.target))return}this.rowActionMenuOpened=null};t.handlePageChanged=function e(o){var t=o.detail;this.currentPage=t.newPage};t.renderRow=function e(o){var t=this;var n=[].concat(this.visibleColumns);var i=null,r=o.layout;r||(r=this.boxLayout);var s=!1;if(r){r.horizontal&&(s=!0);var c=r.sections;var l=c.length,d=0;l>0&&(i=[]);var b={horizontal:s};for(;l-- >0;){i.push(this.renderSection(c[d++],b,o,n))}}var p=this.selectedRows.includes(o);var u=null;this.multiSelection&&(u=Object(a.f)("div",{class:"box-selection"},Object(a.f)("input",{type:"checkbox",checked:p,onClick:function e(o){return o.stopPropagation()},onChange:function e(){return t.onSelectionCheckChange(o)}})));var x=null;if(this.enableRowActions){var h={"row-action-menu":!0,open:o===this.rowActionMenuOpened};var f=null;if(o.actions){var w=o.actions.map(function(e,n){var i="icon "+e.icon;return Object(a.f)("li",{tabindex:"0",onClick:function i(){return t.onRowActionClicked(o,e,n)}},Object(a.f)("div",{class:i}),Object(a.f)("div",{class:"text"},e.text))});f=Object(a.f)("ul",null,w)}x=Object(a.f)("div",{class:"row-actions-wrapper"},Object(a.f)("div",{class:"row-actions-toggler"},Object(a.f)("svg",{version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24",onClick:function e(){return t.onRowAction(o)}},Object(a.f)("path",{d:"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"})),Object(a.f)("div",{class:h},f)))}var g=null;o.badges&&o.badges.length>0&&(g=o.badges.map(function(e){return Object(a.f)("kup-badge",{text:e.text,position:e.position,icon:e.icon,class:"centered"})}));var m={box:!0,selected:this.showSelection&&p,column:!s};return Object(a.f)("div",{class:"box-wrapper"},Object(a.f)("div",{class:m,onClick:function e(n){return t.onBoxClick(n,o)}},u,i,g),x)};t.renderSection=function e(o,t,n,i){var r=this;var s=null;if(o.sections&&o.sections.length>0){var c=o.sections;var l=c.length,d=0;for(l>0&&(s=[]);l-- >0;){s.push(this.renderSection(c[d++],o,n,i))}}else if(o.content){var b=o.content;var p=b.length,u=0;for(p>0&&(s=[]);p-- >0;){s.push(this.renderBoxObject(b[u++],n,i))}}else if(i.length>0){var x=i[0];i.splice(0,1),s=this.renderBoxObject({column:x.name},n,i)}var h=this.isSectionExpanded(n,o),f=!!o.columns,w={"box-section":!0,open:h,column:!f&&!o.horizontal,grid:f,titled:!!o.title,"last-child":!o.sections||0===o.sections.length},g=o.style||{};o.dim&&t&&(g.flex="0 0 "+o.dim,t.horizontal?g.maxWidth=o.dim:g.maxHeight=o.dim),f&&(g["grid-template-columns"]="repeat("+o.columns+", 1fr)");var m=null;if(o.collapsible){w["collapse-section"]=!0;var v={content:!0};var k="";k=o.title?o.title:h?"Collassa":"Espandi",m=Object(a.f)("div",{class:w,style:g},Object(a.f)("div",{class:v},s),Object(a.f)("div",{class:"header",role:"button",onClick:function e(t){t.stopPropagation(),r.toggleSectionExpand(n,o)}},Object(a.f)("div",{class:"header-content"},Object(a.f)("span",null,k),Object(a.f)("span",{class:"mdi mdi-chevron-down"}))))}else{var y=o.title?Object(a.f)("h3",null,o.title):null;m=Object(a.f)("div",{class:w,style:g},y,s)}return m};t.renderBoxObject=function e(o,t,n){var i=null,r={};if(o.value)i=o.value;else if(o.column){var c=t.cells[o.column];if(c){var l=-1;for(var d=0;d<n.length;d++){if(n[d].name===o.column){l=d;break}}if(l>=0&&n.splice(l,1),c.style&&(r=Object.assign({},c.style)),Object(s.f)(c.obj)){var b=null;c.config&&c.config.badges&&(b=c.config.badges),i=Object(a.f)("kup-image",{src:c.value,badges:b})}else if(Object(s.g)(c.obj))i=Object(a.f)("kup-button",Object.assign({},Object(s.h)(c)));else if(Object(s.i)(c.obj)){var p=Object(s.r)(c.value).value();var u=!1,x=null;var h={};c.config&&(u=!!c.config.hideLabel,c.config.hasOwnProperty("labelText")&&(x=c.config.labelText),c.config.foregroundColor&&(h["--kup-pb_foreground-color"]=c.config.foregroundColor)),i=Object(a.f)("div",{style:h},Object(a.f)("kup-progress-bar",{value:p,labelText:x,hideLabel:u}))}else i=c.value}}return Object(a.f)("div",{"data-column":o.column,class:"box-object",style:r},i)};t.render=function e(){var o=this;var t=null;if(this.sortEnabled){var n={value:"",id:""};var i=[{value:"",id:""}].concat(this.visibleColumns.map(function(e){var t={value:e.title,id:e.name};return e.name===o.sortBy&&(n=t),t}));t=Object(a.f)("div",{id:"sort-panel"},Object(a.f)("kup-combo",{displayedField:"value",items:i,initialValue:n,onKetchupComboSelected:function e(t){return o.onSortChange(t.detail)}}))}var r=null;this.filterEnabled&&(r=Object(a.f)("div",{id:"filter-panel"},Object(a.f)("kup-text-input",{placeholder:"Cerca",onKetchupTextInputUpdated:function e(t){return o.onGlobalFilterChange(t)}},Object(a.f)("svg",{slot:"left",version:"1.1",width:"18",height:"18",viewBox:"0 0 24 24"},Object(a.f)("path",{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})))));var s=null;this.pagination&&(s=Object(a.f)("kup-paginator",{max:this.filteredRows.length,perPage:this.pageSize,currentPage:this.currentPage,onKupPageChanged:function e(t){return o.handlePageChanged(t)},mode:c.a.SIMPLE}));var l=null;if(0===this.rows.length)l=Object(a.f)("p",{id:"empty-data-message"},"Empty data");else{var d=this.rows;var b=d.length,p=0;for(l=[];b-- >0;){l.push(this.renderRow(d[p++]))}}var u={"grid-template-columns":"repeat("+this.columns+", 1fr)"};return Object(a.f)("div",null,t,r,s,Object(a.f)("div",{id:"box-container",style:u},l))};n(e,null,[{key:"watchers",get:function e(){return{globalFilterValue:["recalculateRows"],sortBy:["recalculateRows"],pagination:["recalculateRows"],pageSize:["recalculateRows"],currentPage:["recalculateRows"],data:["onDataChanged"],layout:["onLayoutChanged"],selectBox:["onSelectBoxChanged"]}}},{key:"style",get:function e(){return"@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);:host{--box_color:var(--kup-box_color,#707070);--box_border-color:var(--kup-box_border-color,#d0d0d0);--box_border-radius:var(--kup-box_border-radius,3px);--box_img-border-radius:var(--kup-box_img-border-radius,4px);--box_expand-panel-color:var(--kup-box_expand-panel-color,$smeup-primary);--box_hover-box-shadow:var(--kup-box_hover-box-shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5));--box_titled-section-font-size:var(--kup-box_titled-section-font-size,12px);--box_titled-section-bg-color:var(--kup-box_titled-section-bg-color,#fff);--box_titled-section-top:var(--kup-box_titled-section-top,-9px)}#box-container{display:grid;grid-gap:1rem;color:var(--box_color)}#box-container *{-webkit-box-sizing:border-box;box-sizing:border-box}#box-container .box-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#box-container .box-wrapper .box{-ms-flex-positive:1;flex-grow:1;cursor:pointer;position:relative;border-radius:var(--box_border-radius);border:1px solid var(--box_border-color);display:-ms-flexbox;display:flex;padding:3px}#box-container .box-wrapper .box.column{-ms-flex-direction:column;flex-direction:column}#box-container .box-wrapper .box.selected,#box-container .box-wrapper .box:hover{-webkit-box-shadow:var(--box_hover-box-shadow);box-shadow:var(--box_hover-box-shadow)}#box-container .box-wrapper .box .box-section{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1 1 1%;flex:1 1 1%;-ms-flex-wrap:wrap;flex-wrap:wrap}#box-container .box-wrapper .box .box-section.last-child{margin:3px 4px}#box-container .box-wrapper .box .box-section.column{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:unset;flex-wrap:unset}#box-container .box-wrapper .box .box-section.column>.box-section{-ms-flex:0 0 auto;flex:0 0 auto}#box-container .box-wrapper .box .box-section.grid{display:grid}#box-container .box-wrapper .box .box-section .box-object{padding:1px 4px}#box-container .box-wrapper .box .box-section .box-object img{border-radius:var(--box_img-border-radius);height:auto}#box-container .box-wrapper .box .box-section.collapse-section .header{border-top:1px solid var(--box_border-color);color:var(--box_expand-panel-color);display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%}#box-container .box-wrapper .box .box-section.collapse-section .header .header-content{margin:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#box-container .box-wrapper .box .box-section.collapse-section .header .header-content .mdi{margin-left:5px}#box-container .box-wrapper .box .box-section.collapse-section .content{display:none;width:100%}#box-container .box-wrapper .box .box-section.collapse-section.open .header .header-content .mdi:before{-webkit-animation:rotate-icon .5s ease-out forwards;animation:rotate-icon .5s ease-out forwards}#box-container .box-wrapper .box .box-section.collapse-section.open .content{display:block}#box-container .box-wrapper .box .box-section.titled{border:1px solid var(--box_border-color);padding-top:5px;position:relative;margin:10px}#box-container .box-wrapper .box .box-section.titled>h3{position:absolute;margin:0;padding:0 3px;top:var(--box_titled-section-top);left:5px;font-size:var(--box_titled-section-font-size);background:var(--box_titled-section-bg-color)}#box-container .box-wrapper .box .box-selection{position:absolute;top:.5rem;right:.5rem}#box-container .box-wrapper .box kup-badge{--bdg_background-color:#f89406;--kup-badge_dimension:24px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler{position:relative;width:24px;height:24px;margin-left:3px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler svg{cursor:pointer;opacity:0;fill:#545454;-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu{position:absolute;top:0;right:24px;display:none;border:1px solid var(--box_border-color);z-index:10;background:#fff;-webkit-box-shadow:0 0 7.5px 0 hsla(0,0%,50.2%,.5);box-shadow:0 0 7.5px 0 hsla(0,0%,50.2%,.5)}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul{list-style-type:none;margin:0;padding:0}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li{cursor:pointer;white-space:nowrap;padding:0 12px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:30px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li:not(:last-child){border-bottom:1px solid var(--box_border-color)}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu ul>li .icon{margin-right:5px}#box-container .box-wrapper .row-actions-wrapper .row-actions-toggler .row-action-menu.open{display:block}#box-container .box-wrapper:hover .row-actions-wrapper .row-actions-toggler svg{opacity:1}:host(.no-shadow) #box-container .box{border:none}:host(.no-shadow) #box-container .box.selected,:host(.no-shadow) #box-container .box:hover{-webkit-box-shadow:none;box-shadow:none}#filter-panel,#sort-panel{margin-bottom:1rem}#filter-panel kup-text-input{--kup-text-input_border-color:#d0d0d0;--kup-text-input_color:#545454}#filter-panel svg{fill:grey;margin-left:3px}@-webkit-keyframes rotate-icon{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@-moz-keyframes rotate-icon{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}@-o-keyframes rotate-icon{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}@keyframes rotate-icon{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}"}}]);return e}()}}]);