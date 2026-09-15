import{DEFAULT_SHIP,DEFAULT_INVADERS,DEFAULT_BOSS,DEFAULT_BACKGROUND,COLORS}from"./Defaults.js";
const KEY="rsi_v04_design",clone=x=>JSON.parse(JSON.stringify(x)),THEMES=new Set(["swiss","space","custom"]),PLANETS=new Set(["none","moon","saturn"]),MAX_JSON=65536;
const isColor=v=>v===null||COLORS.includes(v),grid=(g,rows,cols)=>Array.isArray(g)&&g.length===rows&&g.every(r=>Array.isArray(r)&&r.length===cols&&r.every(isColor));
const num=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.max(min,Math.min(max,Number(v))):fallback;
export class DesignStore{
 constructor(){this.design=this.load();}
 defaults(){return{version:2,ship:clone(DEFAULT_SHIP),invaders:clone(DEFAULT_INVADERS),boss:clone(DEFAULT_BOSS),background:{...DEFAULT_BACKGROUND}}}
 sanitize(d){if(!d||typeof d!=="object"||Array.isArray(d))throw new Error("Ungültiges Designformat / invalid design format");
  if(!d.boss)d.boss=clone(DEFAULT_BOSS);if(!d.background)d.background={...DEFAULT_BACKGROUND};
  if(!grid(d.ship,6,11)||!Array.isArray(d.invaders)||d.invaders.length!==3||!d.invaders.every(g=>grid(g,6,8))||!grid(d.boss,6,15))throw new Error("Ungültiges Pixelraster / invalid pixel grid");
  const b=d.background||{},theme=THEMES.has(b.theme)?b.theme:"swiss",planetMode=PLANETS.has(b.planetMode)?b.planetMode:"none";
  const safeColor=(v,fallback)=>typeof v==="string"&&/^#[0-9a-fA-F]{6}$/.test(v)?v:fallback;
  return{version:2,ship:clone(d.ship),invaders:clone(d.invaders),boss:clone(d.boss),background:{theme,bgColor:safeColor(b.bgColor,"#000000"),starColor:safeColor(b.starColor,"#bafcff"),starDensity:num(b.starDensity,0,200,80),starSpeed:num(b.starSpeed,0,150,40),scanlines:num(b.scanlines,0,70,28),planetMode}};
 }
 load(){try{const text=localStorage.getItem(KEY);if(!text||text.length>MAX_JSON)return this.defaults();return this.sanitize(JSON.parse(text))}catch{return this.defaults()}}
 save(){localStorage.setItem(KEY,JSON.stringify(this.design))}
 resetShip(){this.design.ship=clone(DEFAULT_SHIP)}
 resetInvader(i){this.design.invaders[i]=clone(DEFAULT_INVADERS[i])}
 resetBoss(){this.design.boss=clone(DEFAULT_BOSS)}
 exportJson(){return JSON.stringify(this.design,null,2)}
 importJson(text){if(typeof text!=="string"||text.length>MAX_JSON)throw new Error("Datei zu gross (max. 64 KB) / file too large");const d=this.sanitize(JSON.parse(text));this.design=d;this.save();return d}
}
