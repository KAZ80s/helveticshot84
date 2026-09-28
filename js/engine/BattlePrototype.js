const hit=(a,b)=>a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y;
export class BattlePrototype{
 constructor(canvas,store){this.canvas=canvas;this.ctx=canvas.getContext("2d",{alpha:false});this.store=store;this.keys=new Set;this.running=false;this.raf=0;this.last=0;this.onKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," ","Enter"].includes(e.key))e.preventDefault();this.keys.add(e.code);if(e.code==="Escape")this.stop()};this.onKeyUp=e=>this.keys.delete(e.code)}
 start(){if(this.running)return;this.running=true;this.reset();window.addEventListener("keydown",this.onKeyDown,{passive:false});window.addEventListener("keyup",this.onKeyUp);this.last=performance.now();this.loop(this.last)}
 stop(){this.running=false;cancelAnimationFrame(this.raf);window.removeEventListener("keydown",this.onKeyDown);window.removeEventListener("keyup",this.onKeyUp);document.getElementById("battleOverlay")?.classList.add("hidden");document.getElementById("menu")?.classList.remove("hidden")}
 reset(){this.p1={x:278,y:735,w:44,h:20,lives:3,cd:0};this.p2={x:278,y:45,w:44,h:20,lives:3,cd:0};this.shots=[];this.enemies=[];this.dir=1;this.move=0;this.over=false;for(let r=0;r<4;r++)for(let c=0;c<10;c++)this.enemies.push({x:85+c*44,y:300+r*42,w:30,h:22,alive:true})}
 fire(p,vy,owner){if(p.cd>0||this.over)return;p.cd=.28;this.shots.push({x:p.x+p.w/2-2,y:vy<0?p.y-9:p.y+p.h+3,w:4,h:9,vy,owner,dead:false})}
 update(dt){if(this.over)return;const speed=230;this.p1.cd=Math.max(0,this.p1.cd-dt);this.p2.cd=Math.max(0,this.p2.cd-dt);
  if(this.keys.has("KeyA"))this.p1.x-=speed*dt;if(this.keys.has("KeyD"))this.p1.x+=speed*dt;if(this.keys.has("KeyW"))this.fire(this.p1,-390,1);
  if(this.keys.has("ArrowLeft"))this.p2.x-=speed*dt;if(this.keys.has("ArrowRight"))this.p2.x+=speed*dt;if(this.keys.has("ArrowDown"))this.fire(this.p2,390,2);
  this.p1.x=Math.max(8,Math.min(548,this.p1.x));this.p2.x=Math.max(8,Math.min(548,this.p2.x));
  this.move+=dt;if(this.move>.48){this.move=0;let edge=false;for(const e of this.enemies)if(e.alive&&(e.x+this.dir*9<20||e.x+e.w+this.dir*9>580))edge=true;if(edge)this.dir*=-1;else for(const e of this.enemies)if(e.alive)e.x+=this.dir*9}
  for(const s of this.shots){s.y+=s.vy*dt;for(const e of this.enemies){if(e.alive&&hit(s,e)){e.alive=false;s.dead=true;break}}if(!s.dead&&s.owner===1&&hit(s,this.p2)){s.dead=true;this.p2.lives--;if(this.p2.lives<=0)this.over=1}if(!s.dead&&s.owner===2&&hit(s,this.p1)){s.dead=true;this.p1.lives--;if(this.p1.lives<=0)this.over=2}}
  this.shots=this.shots.filter(s=>!s.dead&&s.y>-20&&s.y<820)
 }
 ship(p,flip=false){const c=this.ctx;c.save();c.fillStyle="#fff";c.translate(p.x,p.y);if(flip){c.translate(p.w,p.h);c.rotate(Math.PI)}c.fillRect(4,12,36,6);c.fillRect(12,6,20,6);c.fillRect(19,0,6,7);c.restore()}
 draw(){const c=this.ctx;c.fillStyle="#020615";c.fillRect(0,0,600,800);c.strokeStyle="#17352c";c.setLineDash([6,8]);c.beginPath();c.moveTo(0,400);c.lineTo(600,400);c.stroke();c.setLineDash([]);
  for(const e of this.enemies)if(e.alive){c.fillStyle="#39ff14";c.fillRect(e.x,e.y,e.w,e.h);c.fillStyle="#020615";c.fillRect(e.x+6,e.y+6,5,5);c.fillRect(e.x+19,e.y+6,5,5)}
  this.ship(this.p1);this.ship(this.p2,true);for(const s of this.shots){c.fillStyle=s.owner===1?"#00f5ff":"#ff2bd6";c.fillRect(s.x,s.y,s.w,s.h)}
  c.font="16px monospace";c.fillStyle="#00f5ff";c.textAlign="left";c.fillText(`P1 ♥ ${this.p1.lives}`,14,780);c.fillStyle="#ff2bd6";c.textAlign="right";c.fillText(`P2 ♥ ${this.p2.lives}`,586,25);c.textAlign="center";c.fillStyle="#fff200";c.fillText("PHASE 6.1 · LOCAL BATTLE PROTOTYPE",300,410);
  c.font="12px monospace";c.fillStyle="#d9ffe0";c.fillText("P1: A/D + W   ·   P2: ←/→ + ↓   ·   ESC: MENU",300,430);
  if(this.over){c.fillStyle="rgba(0,0,0,.72)";c.fillRect(70,330,460,140);c.font="28px monospace";c.fillStyle="#fff200";c.fillText(`PLAYER ${this.over} WINS`,300,385);c.font="14px monospace";c.fillStyle="#fff";c.fillText("ESC = MENU",300,425)}
 }
 loop=t=>{if(!this.running)return;const dt=Math.min(.033,(t-this.last)/1000||0);this.last=t;this.update(dt);this.draw();this.raf=requestAnimationFrame(this.loop)}
}