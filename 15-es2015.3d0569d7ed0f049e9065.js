(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8ZAk":function(t,o,e){"use strict";e.r(o),e.d(o,"kup_badge",function(){return s});var i,r=e("zp0o");!function(t){t.TOP_LEFT="TL",t.TOP_RIGHT="TR",t.BOTTOM_RIGHT="BR",t.BOTTOM_LEFT="BL"}(i||(i={}));class s{constructor(t){Object(r.g)(this,t),this.position=i.TOP_RIGHT}render(){const t=this.text||"",o=i.TOP_RIGHT===this.position,e=i.BOTTOM_RIGHT===this.position,s=i.BOTTOM_LEFT===this.position,n={"top-left":!o&&!e&&!s,"top-right":o,"bottom-right":e,"bottom-left":s},p={};return!t&&this.icon&&(p[this.icon]=!0),Object(r.f)(r.a,{class:n},Object(r.f)("div",{id:"badge",class:p},t))}static get style(){return"@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);:host{--bdg_background-color:var(--kup-badge_background-color,#95a5a6);--bdg_color:var(--kup-badge_color,#fff);--bdg_dim:var(--kup-badge_dimension,20px);position:absolute;max-width:70%}:host #badge{background-color:var(--bdg_background-color);color:var(--bdg_color);padding:0 3px;font-size:11px;border-radius:3px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.top-right){top:-3px;right:-4px}:host(.top-left){top:-3px;left:-4px}:host(.bottom-right){bottom:-3px;right:-4px}:host(.bottom-left){bottom:-3px;left:-4px}:host(.centered) #badge{-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--bdg_dim);height:var(--bdg_dim);border-radius:calc(var(--bdg_dim) / 2)}:host(.centered.top-right){top:-10px;right:-10px}:host(.centered.top-left){top:-10px;left:-10px}:host(.centered.bottom-right){bottom:-10px;right:-10px}:host(.centered.bottom-left){bottom:-10px;left:-10px}"}}}}]);