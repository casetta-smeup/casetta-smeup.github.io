/*! Built with http://stenciljs.com */
ketchup.loadBundle("tf349fzp",["exports"],function(t){var e=window.ketchup.h,i=function(){function t(){this.updateBind=this.update.bind(this)}return t.prototype.componentDidLoad=function(){this.start=(new Date).getTime(),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.update()},t.prototype.update=function(){this.requestAnimationFrame=requestAnimationFrame(this.updateBind),this.ctx.clearRect(0,0,100,100),this.drawText(),this.drawBackgroundCircle(),this.drawForegroundCircle()},t.prototype.drawBackgroundCircle=function(){this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.strokeStyle="#dddddd",this.ctx.arc(this.width/2,this.height/2,this.width/2-5,0,2*Math.PI),this.ctx.stroke()},t.prototype.drawForegroundCircle=function(){var t=this.getEndAngle();t>0?(this.ctx.save(),this.ctx.translate(0,this.width),this.ctx.rotate(3*Math.PI/2),this.ctx.translate(0,0),this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.strokeStyle="#369491",this.ctx.arc(this.width/2,this.height/2,this.width/2-5,0,t),this.ctx.stroke(),this.ctx.restore()):(console.log("stopping animate"),cancelAnimationFrame(this.requestAnimationFrame),this.countdownEnded.emit())},t.prototype.drawText=function(){this.ctx.font="25px serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle="#369491";var t=(new Date).getTime(),e=Math.floor((1e3*this.value-(t-this.start))/1e3)+1;this.ctx.fillText(""+e,this.width/2,this.height/2)},t.prototype.getEndAngle=function(){var t=(new Date).getTime(),e=2*Math.PI;return e-e*(100*(t-this.start)/(1e3*this.value))/100},t.prototype.render=function(){var t=this;return e("canvas",{id:"canvas",ref:function(e){return t.canvas=e},height:"100",width:"100"})},Object.defineProperty(t,"is",{get:function(){return"ketchup-cnd"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{value:{type:Number,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"countdownEnded",method:"countdownEnded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();t.KetchupCnd=i,Object.defineProperty(t,"__esModule",{value:!0})});