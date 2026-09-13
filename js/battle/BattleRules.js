/**
 * HELVETICSHOT ’84 - Battle Rules v0.5.1
 * Visual skins NEVER change these gameplay values.
 * A future multiplayer server must be authoritative for these rules.
 */
export const BATTLE_RULES = Object.freeze({
  arena: Object.freeze({ width: 600, height: 800 }),
  player: Object.freeze({
    width: 44, height: 24, speed: 340, lives: 3,
    normalFireCooldown: 0.26, rapidFireCooldown: 0.13
  }),
  projectile: Object.freeze({
    width: 4, height: 14, playerSpeed: 580
  }),
  customization: Object.freeze({
    shipGrid: Object.freeze({ columns: 11, rows: 6 }),
    invaderGrid: Object.freeze({ columns: 8, rows: 6 }),
    affectsHitbox: false,
    affectsSpeed: false,
    affectsFireRate: false
  })
});
