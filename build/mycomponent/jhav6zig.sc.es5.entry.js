var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}l((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};mycomponent.loadBundle("jhav6zig",["exports","./chunk-3217e7f8.js"],function(e,t){var n=function(){function e(){this.isVisible=!1,this.mirroredCssVars=[],this.refOffset={},this.portalRootNode=document.body,this.instance=document.createElement("ketchup-portal-instance")}return e.prototype.componentWillLoad=function(){this.portalRootNode.appendChild(this.instance)},e.prototype.componentWillUpdate=function(){this.instance.vNodes=this.nodes;var e=this.styleNode.cloneNode(!0);e.setAttribute("data-portal-style","true"),this.instance.styleNode=e,t.setElementOffset(this.instance,this.refOffset),this.instance.isVisible=this.isVisible},e.prototype.componentDidUnload=function(){this.portalRootNode.removeChild(this.instance)},e.prototype.onPortalRootNodeChange=function(e){e.appendChild(this.instance)},e.prototype.computeCssVars=function(e,t){var n=this;if(window){var o=window.getComputedStyle(e);t.forEach(function(e){n.instance.style.setProperty(e,o.getPropertyValue(e))})}},e.prototype.getPortalInstance=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.instance]})})},e.prototype.onFrameError=function(){this.ketchupHtmlError.emit()},e.prototype.onFrameLoaded=function(){this.ketchupHtmlLoaded.emit()},e.prototype.render=function(){return null},Object.defineProperty(e,"is",{get:function(){return"ketchup-portal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cssVarsRef:{type:"Any",attr:"css-vars-ref"},getPortalInstance:{method:!0},isVisible:{type:Boolean,attr:"is-visible"},mirroredCssVars:{type:"Any",attr:"mirrored-css-vars"},nodes:{type:"Any",attr:"nodes"},portalRootNode:{type:"Any",attr:"portal-root-node",watchCallbacks:["onPortalRootNodeChange"]},refOffset:{type:"Any",attr:"ref-offset"},styleNode:{type:"Any",attr:"style-node"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ketchupHtmlError",method:"ketchupHtmlError",bubbles:!0,cancelable:!1,composed:!0},{name:"ketchupHtmlLoaded",method:"ketchupHtmlLoaded",bubbles:!0,cancelable:!1,composed:!0}]},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){this.isVisible=!1,this.vNodes=null}return e.prototype.componentWillUpdate=function(){this.port.shadowRoot.querySelector("style[data-portal-style]")||this.port.shadowRoot.insertBefore(this.styleNode,this.port.shadowRoot.querySelector("style"))},e.prototype.render=function(){return console.log("portal instance",this.vNodes),this.vNodes},Object.defineProperty(e,"is",{get:function(){return"ketchup-portal-instance"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isVisible:{type:Boolean,attr:"is-visible",reflectToAttr:!0},port:{elementRef:!0},styleNode:{type:"Any",attr:"style-node"},vNodes:{type:"Any",attr:"v-nodes"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ketchup-portal-instance-h{display:none!important;position:absolute!important;z-index:99999!important}[is-visible].sc-ketchup-portal-instance-h{display:inline-block!important}"},enumerable:!0,configurable:!0}),e}();e.KetchupPortal=n,e.KetchupPortalInstance=o,Object.defineProperty(e,"__esModule",{value:!0})});