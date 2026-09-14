import{DEFAULT_SHIP,DEFAULT_INVADERS,DEFAULT_BOSS,DEFAULT_BACKGROUND}from"./Defaults.js";
const KEY="rsi_v04_design",clone=x=>JSON.parse(JSON.stringify(x));
export class DesignStore{
 constructor(){this.design=this.load();}
 defaults(){return{version:2,ship:clone(DEFAULT_SHIP),invaders:clone(DEFAULT_INVADERS),boss:clone(DEFAULT_BOSS),background:{...DEFAULT_BACKGROUND}}}
 migrate(d){if(!d)return this.defaults();if(!d.boss)d.boss=clone(DEFAULT_BOSS);if(!d.background)d.background={...DEFAULT_BACKGROUND};if(!d.background.theme)d.background.theme="swiss";d.version=2;return d}
 validate(d){if(!d||!Array.isArray(d.ship)||d.ship.length!==6||d.ship.some(r=>!Array.isArray(r)||r.length!==11))return false;if(!Array.isArray(d.invaders)||d.invaders.length!==3||d.invaders.some(g=>!Array.isArray(g)||g.length!==6||g.some(r=>!Array.isArray(r)||r.length!==8)))return false;if(!Array.isArray(d.boss)||d.boss.length!==6||d.boss.some(r=>!Array.isArray(r)||r.length!==15))return false;return!!d.background}
 load(){try{const raw=JSON.parse(localStorage.getItem(KEY));const d=this.migrate(raw);if(this.validate(d))return d}catch{}return this.defaults()}
 save(){localStorage.setItem(KEY,JSON.stringify(this.design))}
 resetShip(){this.design.ship=clone(DEFAULT_SHIP)}
 resetInvader(i){this.design.invaders[i]=clone(DEFAULT_INVADERS[i])}
 resetBoss(){this.design.boss=clone(DEFAULT_BOSS)}
 exportJson(){return JSON.stringify(this.design,null,2)}
 importJson(text){const d=this.migrate(JSON.parse(text));if(!this.validate(d))throw new Error("Ungültiges Designformat / invalid design format");this.design=d;this.save();return d}
}
