export class Bunker{
 constructor(x,y){this.x=x;this.y=y;this.cell=6;this.grid=this.createGrid()}
 createGrid(){return["0011111100","0111111110","1111111111","1111111111","0111111110","0011111100","0001111000"].map(r=>[...r].map(v=>v==="1"?3:0))}
 damageAt(px,py,radius=1){const gx=Math.floor((px-this.x)/this.cell),gy=Math.floor((py-this.y)/this.cell);let h=false;for(let y=gy-radius;y<=gy+radius;y++)for(let x=gx-radius;x<=gx+radius;x++){if(!this.grid[y]||!this.grid[y][x])continue;this.grid[y][x]=Math.max(0,this.grid[y][x]-1);h=true}return h}
 collides(b){const gx=Math.floor((b.x-this.x)/this.cell),gy=Math.floor((b.y-this.y)/this.cell);return!!(this.grid[gy]&&this.grid[gy][gx]>0)}
 draw(ctx){ctx.save();for(let y=0;y<this.grid.length;y++)for(let x=0;x<this.grid[y].length;x++){const hp=this.grid[y][x];if(!hp)continue;const cross=((x===4||x===5)&&(y>=1&&y<=4))||((y===2||y===3)&&(x>=3&&x<=6));ctx.fillStyle=cross?"#ffffff":hp===3?"#e32636":hp===2?"#a91d2a":"#68131b";ctx.fillRect(this.x+x*this.cell,this.y+y*this.cell,this.cell,this.cell)}ctx.restore()}
}