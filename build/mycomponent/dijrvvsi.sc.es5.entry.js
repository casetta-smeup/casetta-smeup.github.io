mycomponent.loadBundle("dijrvvsi",["exports"],function(e){var t=window.mycomponent.h,r=function(){function e(){this.label="Apri in nuova finestra",this.isButton=!1,this.src=""}return e.prototype.onFrameError=function(){this.ketchupHtmlError.emit()},e.prototype.onFrameLoaded=function(){this.ketchupHtmlLoaded.emit()},e.prototype.render=function(){return this.isButton?t("a",{href:this.src,target:"_blank"},t("ketchup-button",{align:"right",iconClass:"mdi mdi-open-in-new",label:this.label})):t("iframe",{class:"ketchup-frame",onError:this.onFrameError.bind(this),onLoad:this.onFrameLoaded.bind(this),src:this.src})},Object.defineProperty(e,"is",{get:function(){return"ketchup-html"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isButton:{type:Boolean,attr:"is-button",reflectToAttr:!0},label:{type:String,attr:"label"},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ketchupHtmlError",method:"ketchupHtmlError",bubbles:!0,cancelable:!1,composed:!0},{name:"ketchupHtmlLoaded",method:"ketchupHtmlLoaded",bubbles:!0,cancelable:!1,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ketchup-html-h{--htm_height:var(--kup-html_height,600px);--htm_width:var(--kup-html_width,100%);display:inline-block;width:100%}[is-button].sc-ketchup-html-h{display:inline-block;width:auto}.ketchup-frame.sc-ketchup-html{height:var(--htm_height);width:var(--htm_width)}"},enumerable:!0,configurable:!0}),e}();e.KetchupHtml=r,Object.defineProperty(e,"__esModule",{value:!0})});