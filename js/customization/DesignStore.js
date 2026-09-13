import{DEFAULT_SHIP,DEFAULT_INVADERS,DEFAULT_BACKGROUND}from"./Defaults.js";
const KEY="rsi_v04_design";
const clone=x=>JSON.parse(JSON.stringify(x));
export class DesignStore{
 constructor(){this.design=this.load();}
 defaults(){return{version:1,ship:clone(DEFAULT_SHIP),invaders:clone(DEFAULT_INVADERS),background:{...DEFAULT_BACKGROUND}};}
 validate(d){if(!d||!Array.isArray(d.ship)||d.ship.length!==6||d.ship.some(r=>!Array.isArray(r)||r.length!==11))return false;if(!Array.isArray(d.invaders)||d.invaders.length!==3)return false;if(d.invaders.some(g=>!Array.isArray(g)||g.length!==6||g.some(r=>!Array.isArray(r)||r.length!==8)))return false;return !!d.background;}
 load(){try{const d=JSON.parse(localStorage.getItem(KEY));if(this.validate(d))return d}catch{}return this.defaults();}
 save(){localStorage.setItem(KEY,JSON.stringify(this.design));}
 resetShip(){this.design.ship=clone(DEFAULT_SHIP);}
 resetInvader(i){this.design.invaders[i]=clone(DEFAULT_INVADERS[i]);}
 exportJson(){return JSON.stringify(this.design,null,2);}
 importJson(text){const d=JSON.parse(text);if(!this.validate(d))throw new Error("Ungültiges Designformat");this.design=d;this.save();return d;}
}
