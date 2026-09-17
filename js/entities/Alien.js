export class Alien{
 constructor(x,y,row,col,type,store){this.x=x;this.y=y;this.homeX=x;this.homeY=y;this.row=row;this.col=col;this.type=type;this.store=store;this.width=32;this.height=24;this.alive=true;this.anim=false;this.points=[30,20,10][type]||10;this.isBurst=false;this.isDiver=false;this.diverT=0;this.diverBaseX=x;this.diverFire=0}
 toggleFrame(){this.anim=!this.anim}
 draw(ctx){if(!this.alive)return;const g=this.store.design.invaders[this.type]||this.store.design.invaders[2],p=4;ctx.save();for(let r=0;r<6;r++)for(let c=0;c<8;c++){const color=g[r][c];if(!color)continue;ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=6;ctx.fillRect(Math.round(this.x+c*p),Math.round(this.y+r*p+(this.anim?1:0)),p,p)}
  if(this.isBurst){ctx.shadowBlur=10;ctx.strokeStyle="#fff200";ctx.lineWidth=2;ctx.strokeRect(this.x-3,this.y-3,this.width+6,this.height+6);ctx.fillStyle="#ff405c";ctx.fillRect(this.x+13,this.y-7,6,4)}
  if(this.isDiver){ctx.shadowBlur=8;ctx.strokeStyle="#00f5ff";ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(this.x+4,this.y-5);ctx.lineTo(this.x+16,this.y-10);ctx.lineTo(this.x+28,this.y-5);ctx.stroke()}
  ctx.restore()}
 get bounds(){return{x:this.x,y:this.y,width:this.width,height:this.height}}
}