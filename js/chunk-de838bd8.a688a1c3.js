(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de838bd8"],{"3ec2":function(t,e,i){"use strict";i.r(e),i.d(e,"kup_chip",function(){return l}),i.d(e,"kup_graphic_cell",function(){return d}),i.d(e,"kup_paginator",function(){return f});i("6c7b"),i("6b54"),i("28a5"),i("a481");var r=i("59ad"),n=i.n(r),a=(i("f559"),i("ac6a"),i("e814")),o=i.n(a),s=i("85f2"),c=i.n(s),h=i("0b36"),l=function(){function t(t){Object(h["g"])(this,t),this.closable=!1,this.disabled=!1,this.close=Object(h["d"])(this,"close",7)}return t.prototype.onCloseClicked=function(){this.disabled||this.close.emit()},t.prototype.render=function(){var t=this,e=null;this.closable&&(e=Object(h["f"])("svg",{version:"1.1",width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"false",onClick:function(){return t.onCloseClicked()}},Object(h["f"])("path",{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})));var i={disabled:this.disabled};return Object(h["f"])("span",{id:"chip",class:i,tabindex:"0","aria-disabled":this.disabled?"true":"false"},Object(h["f"])("span",{id:"content"},Object(h["f"])("slot",null),e))},c()(t,"style",{get:function(){return":host{--chi_color:var(--kup-chip_color,#1a1a1a);--chi_icon-color:var(--kup-chip_icon-color,#d91e18);--chi_icon-color-hover:var(--kup-chip_icon-color-hover,#f0423c);--chi_background:var(--kup-chip_background,#f0f0f0);--chi_background-hover:var(--kup-chip_background-hover,#e5e5e5);--chi_disabled-color:var(--kup-chip_disabled-color,#888)}#chip{background:var(--chi_background);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;margin:4px;padding:4px;outline:none;cursor:default}#chip:not(.disabled):hover{background:var(--chi_background-hover)}#chip #content{margin:0 3px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle;-ms-flex-pack:justify;justify-content:space-between;color:var(--chi_color)}#chip #content svg{cursor:pointer;fill:var(--chi_icon-color);margin-left:4px}#chip #content svg:hover{fill:var(--chi_icon-color-hover)}#chip.disabled #content{color:var(--chi_disabled-color)}#chip.disabled #content svg{cursor:default;fill:var(--chi_disabled-color)}"},enumerable:!0,configurable:!0}),t}();function p(t){var e=t.indexOf("R"),i=t.indexOf("G"),r=t.indexOf("B");if(!(e<0||i<0||r<0)){var n=t.substring(e+1,e+4),a=t.substring(i+1,i+4),s=t.substring(r+1,r+4);try{return new g(o()(n),o()(a),o()(s))}catch(c){console.error(c)}return null}}var u=function(){function t(){this.width=100,this.height=100,this.color=null,this.shape="bar"}return t.prototype.init=function(t){var e=this;t.forEach(function(t){t.toUpperCase().startsWith("HEIGHT;")?e.initHeight(t):t.toUpperCase().startsWith("SHAPE;")?e.initShape(t):t.toUpperCase().startsWith("BCOLOR;")||e.initColor(t)})},t.prototype.initColor=function(t){if(t.length>11&&this.isValidColor(t)){this.color=p(t.substring(0,12));try{this.width=n()(t.substring(13).replace(",","."))}catch(e){console.error(e)}}else if(t.startsWith("*NONE"))try{this.width=n()(t.substring(6).replace(",","."))}catch(e){console.error(e)}},t.prototype.isTrasparent=function(){return null===this.color},t.prototype.initHeight=function(t){if(t){var e=t.substring("HEIGHT;".length).replace(",",".");try{this.height=n()(e)}catch(i){console.error(i)}}},t.prototype.initShape=function(t){t=t.substring("SHAPE;".length);var e=t.indexOf(";"),i=t;if(e>-1){i=t.substring(0,e);try{this.width=n()(t.substring(e+1).replace(",","."))}catch(r){console.error(r)}}switch(i.toLocaleLowerCase()){case"circle":this.shape="circle";break;case"tril":this.shape="tril";break;case"trir":this.shape="trir";break}},t.prototype.isValidColor=function(t){if(!t)return!1;t=t.trim();var e=[],i=!1,r=null,n=t.indexOf("R");if(n>-1&&(r=t.substring(n+1,n+4),e[0]=o()(r),isNaN(e[0])&&(i=!0)),n=t.indexOf("G"),n>-1&&(r=t.substring(n+1,n+4),e[1]=o()(r),isNaN(e[1])&&(i=!0)),n=t.indexOf("B"),n>-1&&(r=t.substring(n+1,n+4),e[2]=o()(r),isNaN(e[2])&&(i=!0)),i){var a=t.indexOf("R"),s=t.indexOf("G"),c=t.indexOf("B");if(r=t.substring(a+1,s),e[0]=o()(r),isNaN(e[0])&&(i=!0),r=t.substring(s+1,c),e[1]=o()(r),isNaN(e[1])&&(i=!0),r=t.substring(c+1),e[2]=o()(r),isNaN(e[2])&&(i=!0),i)return!1}return!(e[0]<0||e[0]>255||e[1]<0||e[1]>255||e[2]<0||e[2]>255)},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.getShape=function(){return this.shape},t.prototype.getColor=function(){return this.color},t}(),g=function(){function t(t,e,i){this.r=t,this.g=e,this.b=i}return t.prototype.toString=function(){return"rgb("+this.r+","+this.g+","+this.b+")"},t}(),d=function(){function t(t){Object(h["g"])(this,t),this.height=30,this.width=300,this.graphic_element_marker_splitter="\\\\",this.graphic_element_splitter="\\\\AND\\\\",this.background_color="BCOLOR;R255G000B000",this.default_color=new g(0,0,0)}return t.prototype.onValueChange=function(){this.draw()},t.prototype.componentDidLoad=function(){this.draw()},t.prototype.draw=function(){this.value&&this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.drawGraphicCell())},t.prototype.drawGraphicCell=function(){var t=this,e=this.value.split(this.graphic_element_splitter);e.forEach(function(e,i){var r="SHAPE;BAR",n=t.background_color,a="HEIGHT;100",o=e.split(t.graphic_element_marker_splitter),s=[],c=[];o.forEach(function(e){t.isShapeMarker(e)?r=e:t.isBgColorMarker(e)?n=e:t.isHeightMarker(e)?a=e:t.isDecoratorMarker(e)?c.push(e):s.push(e)});var h=s.map(function(t){var e=new u;return e.init([r,n,a,t]),e});if(0===i&&n!==t.background_color){var l=p(n.substring("BCOLOR;".length));t.drawRect(0,0,t.canvas.width,t.canvas.height,l)}var g=0;h.forEach(function(e){switch(e.getShape()){case"circle":g=t.getNewStarXFromCircle(g,e);break;case"tril":g=t.getNewStarXFromTril(g,e);break;case"trir":g=t.getNewStarXFromTrir(g,e);break;default:g=t.getNewStarXFromBar(g,e);break}}),c.forEach(function(e){e.startsWith("SEP")||e.startsWith("DIV")?t.drawSeparator(e):e.startsWith("ARW")?t.drawArrow(e):e.startsWith("GRID")&&t.drawGrid(e)})})},t.prototype.isShapeMarker=function(t){return t&&t.toUpperCase().startsWith("SHAPE;")},t.prototype.isBgColorMarker=function(t){return t&&t.toUpperCase().startsWith("BCOLOR;")},t.prototype.isHeightMarker=function(t){return t&&t.toUpperCase().startsWith("HEIGHT;")},t.prototype.isDecoratorMarker=function(t){return t&&(t.toUpperCase().startsWith("SEP;")||t.toUpperCase().startsWith("DIV;")||t.toUpperCase().startsWith("ARW;")||t.toUpperCase().startsWith("GRID;"))},t.prototype.getDim=function(t,e){return Math.floor(t/100*e)},t.prototype.getNewStarXFromBar=function(t,e){var i=this.getDim(this.canvas.width,e.getWidth()),r=this.getDim(this.canvas.height,e.getHeight()),n=this.canvas.height-r;return e.isTrasparent()||this.drawRect(t,n,i,r,e.getColor()),i},t.prototype.getNewStarXFromCircle=function(t,e){var i=this.getDim(this.canvas.width,e.getWidth()),r=(t+i)/2;return e.isTrasparent()||this.drawArc(r,this.canvas.height/2,e.getColor()),i},t.prototype.getNewStarXFromTril=function(t,e){var i=this.getDim(this.canvas.width,e.getWidth());return e.isTrasparent()||this.drawTri(i,0,t,this.canvas.height/2,e.getColor()),i},t.prototype.getNewStarXFromTrir=function(t,e){var i=this.getDim(this.canvas.width,e.getWidth());return e.isTrasparent()||this.drawTri(t,0,i,this.canvas.height/2,e.getColor()),i},t.prototype.drawArc=function(t,e,i){this.ctx.fillStyle=i.toString(),this.ctx.beginPath(),this.ctx.arc(t,e,e,0,2*Math.PI,!0),this.ctx.fill()},t.prototype.drawRect=function(t,e,i,r,n){this.ctx.fillStyle=n.toString(),this.ctx.fillRect(t,e,i,r)},t.prototype.drawTri=function(t,e,i,r,n){this.ctx.fillStyle=n.toString(),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(i,r),this.ctx.lineTo(t,this.canvas.height),this.ctx.fill()},t.prototype.drawArrow=function(t){var e=t.substring("ARW;".length);e.indexOf(",")>-1&&(e=e.replace(",",".")),this.ctx.fillStyle=this.default_color.toString();var i=this.getDim(this.canvas.width,n()(e)),r=this.canvas.height,a=Math.floor(r/3),o=a/2;this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i-a,r/2),this.ctx.lineTo(i-o,r/2),this.ctx.lineTo(i-o,r),this.ctx.lineTo(i+o,r),this.ctx.lineTo(i+o,r/2),this.ctx.lineTo(i+a,r/2),this.ctx.fill()},t.prototype.drawGrid=function(t){var e=t.substring("GRID;".length);e.indexOf(",")>-1&&(e=e.replace(",","."));for(var i=o()(e),r=this.canvas.width/i,n=this.canvas.height/5,a=this.canvas.height-n,s=1,c=r;c<this.canvas.width;c+=r)this.drawRect(c,a,s,n,this.default_color)},t.prototype.drawSeparator=function(t){var e=t.substring("SEP;".length).split(";"),i="R000G000B000",r=2,a=e[0];e.length>1&&(i=e[1]),e.length>2&&(r=o()(e[2])),a.indexOf(",")>-1&&(a=a.replace(",","."));var s=this.getDim(this.canvas.width,n()(a));this.drawRect(s,0,r,this.canvas.height,p(i))},t.prototype.render=function(){var t=this;return Object(h["f"])("canvas",{ref:function(e){return t.canvas=e},height:this.height,width:this.width},this.value)},c()(t,"watchers",{get:function(){return{value:["onValueChange"]}},enumerable:!0,configurable:!0}),t}(),f=function(){function t(t){Object(h["g"])(this,t),this.max=0,this.perPage=10,this.selectedPerPage=10,this.currentPage=1,this.kupPageChanged=Object(h["d"])(this,"kupPageChanged",6),this.kupRowsPerPageChanged=Object(h["d"])(this,"kupRowsPerPageChanged",6)}return t.prototype.isPrevPageDisabled=function(){return 1==this.currentPage},t.prototype.isNextPageDisabled=function(){return this.currentPage*this.perPage>=this.max},t.prototype.onPrevPage=function(){this.isPrevPageDisabled()||this.kupPageChanged.emit({newPage:this.currentPage-1})},t.prototype.onNextPage=function(){this.isNextPageDisabled()||this.kupPageChanged.emit({newPage:this.currentPage+1})},t.prototype.onGoToPage=function(t){var e=t.target;this.kupPageChanged.emit({newPage:o()(e.value)})},t.prototype.onRowsPerPage=function(t){var e=t.target;this.kupRowsPerPageChanged.emit({newRowsPerPage:o()(e.value)})},t.prototype.getGoToPageOptions=function(t){var e=[];e.push(Object(h["f"])("option",{value:"1",selected:1===this.currentPage},"1"));for(var i=2;i<=t;i++)e.push(Object(h["f"])("option",{value:i,selected:this.currentPage===i},i));return e},t.prototype.getRowsPerPageOptions=function(){var t=[];if(this.currentPage!=this.max){var e=this.perPage;if(0===e)return t;while(e<this.max)t.push(Object(h["f"])("option",{value:e,selected:e===this.selectedPerPage},e)),e*=2;t.push(Object(h["f"])("option",{value:this.max,selected:this.max===this.perPage},this.max))}else t.push(Object(h["f"])("option",{value:this.perPage,selected:!0},this.perPage));return t},t.prototype.render=function(){var t=this,e="mdi mdi-chevron-left";this.isPrevPageDisabled()&&(e+=" disabled");var i="mdi mdi-chevron-right";this.isNextPageDisabled()&&(i+=" disabled");var r=Math.ceil(this.max/this.selectedPerPage),n=this.getGoToPageOptions(r),a=this.getRowsPerPageOptions();return Object(h["f"])("div",{id:"paginator"},Object(h["f"])("div",{class:"align-left"},"Pagina",Object(h["f"])("span",{class:"prev-page"},Object(h["f"])("icon",{className:e,onclick:function(){return t.onPrevPage()}})),Object(h["f"])("select",{onChange:function(e){return t.onGoToPage(e)}},n),Object(h["f"])("span",{class:"next-page"},Object(h["f"])("icon",{className:i,onclick:function(){return t.onNextPage()}})),"Di ",r),Object(h["f"])("div",{class:"align-right"},Object(h["f"])("span",{class:"nextPageGroup"},"Numero risultati: ",this.max),Object(h["f"])("slot",{name:"more-results"}),"Mostra",Object(h["f"])("select",{onChange:function(e){return t.onRowsPerPage(e)}},a),"righe per pagina"))},c()(t,"style",{get:function(){return"@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);:host{--int_text-color:var(--kup-paginator_text-color,$mainTextColor);--int_font-size:var(--kup-paginator_font-size,1rem)}#paginator{color:var(--int_text-color);margin:.5rem 0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;font-size:var(--int_font-size)}#paginator icon{cursor:pointer;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}#paginator icon:hover:not(.disabled){opacity:.75}#paginator icon.disabled{cursor:default;opacity:.3}#paginator .nextPageGroup,#paginator select{margin:0 .5rem}#paginator .next-page,#paginator .prev-page{margin:0 .25rem}#paginator .nextPageGroup{padding-right:1.5rem}"},enumerable:!0,configurable:!0}),t}()},"5d6b":function(t,e,i){var r=i("e53d").parseInt,n=i("a1ce").trim,a=i("e692"),o=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var i=n(String(t),3);return r(i,e>>>0||(o.test(i)?16:10))}:r},"6c7b":function(t,e,i){var r=i("5ca1");r(r.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},7445:function(t,e,i){var r=i("63b6"),n=i("5d6b");r(r.G+r.F*(parseInt!=n),{parseInt:n})},b9e9:function(t,e,i){i("7445"),t.exports=i("584a").parseInt},e814:function(t,e,i){t.exports=i("b9e9")}}]);
//# sourceMappingURL=chunk-de838bd8.a688a1c3.js.map