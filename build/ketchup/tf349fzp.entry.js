/*! Built with http://stenciljs.com */
const{h:t}=window.ketchup;class e{constructor(){this.updateBind=this.update.bind(this)}componentDidLoad(){this.start=(new Date).getTime(),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.update()}update(){this.requestAnimationFrame=requestAnimationFrame(this.updateBind),this.ctx.clearRect(0,0,100,100),this.drawText(),this.drawBackgroundCircle(),this.drawForegroundCircle()}drawBackgroundCircle(){this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.strokeStyle="#dddddd",this.ctx.arc(this.width/2,this.height/2,this.width/2-5,0,2*Math.PI),this.ctx.stroke()}drawForegroundCircle(){const t=this.getEndAngle();t>0?(this.ctx.save(),this.ctx.translate(0,this.width),this.ctx.rotate(3*Math.PI/2),this.ctx.translate(0,0),this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.strokeStyle="#369491",this.ctx.arc(this.width/2,this.height/2,this.width/2-5,0,t),this.ctx.stroke(),this.ctx.restore()):(console.log("stopping animate"),cancelAnimationFrame(this.requestAnimationFrame),this.countdownEnded.emit())}drawText(){this.ctx.font="25px serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle="#369491";const t=(new Date).getTime(),e=Math.floor((1e3*this.value-(t-this.start))/1e3)+1;this.ctx.fillText(""+e,this.width/2,this.height/2)}getEndAngle(){const t=(new Date).getTime(),e=2*Math.PI;return e-e*(100*(t-this.start)/(1e3*this.value))/100}render(){return t("canvas",{id:"canvas",ref:t=>this.canvas=t,height:"100",width:"100"})}static get is(){return"ketchup-cnd"}static get properties(){return{value:{type:Number,attr:"value"}}}static get events(){return[{name:"countdownEnded",method:"countdownEnded",bubbles:!0,cancelable:!0,composed:!0}]}}export{e as KetchupCnd};