# Changelog

## v0.5.4.3 — 2026-09-17
- BURST uses a randomly rotated 360-degree fragment pattern. Fragments can therefore travel toward the player by chance.
- A player-shot DIVER guarantees one random reward: R (Rapid Fire), S (Shield), or 3 (Triple Shot).
- DEV test start levels: 1 / 4 / 5 / 9 / 10 / 14 / 15 / 19 / 20 / 24 / 25.
- STANDARD keeps the normal unlock-based level selector.
- Previous gameplay safeguards and security hardening retained.

# Changelog

## v0.5.4.2 — 2026-09-15
- BURST rebuilt: a clearly marked Burst Unit is selected; no burst occurs until the PLAYER destroys that unit.
- BURST explosion now launches clearly visible glowing/trailing penetrating projectiles.
- Burst projectiles can destroy enemy units and hit the player; enemy hits do not stop them.
- No-fire invariant: BURST cannot clear a level without player activation.
- DIVER rebuilt as a continuous attack flight with downward movement, lateral wave movement and visible fire.
- LOW/MEDIUM/HIGH now use deliberately separated event frequency, projectile count/speed, diver speed/amplitude/fire rate and maximum active divers.
- BURST + DIVER state separation: a unit cannot be both special types at once.
- Hard cap on special projectiles to prevent runaway object creation/freezes.
- Fixed special-projectile player collision path that could call a non-existent method and halt the game.
- Test mode and intensity shown in the HUD.
- Green bunkers replaced by red Helvetic shield silhouettes with a white Swiss cross.
- v0.5.4.1 security hardening retained.

# Changelog

## v0.5.4.1 SECURITY FIX — 2026-09-15
- Separate cybersecurity review completed.
- Hardened JSON design import and local design storage.
- Added 64 KB import limit and strict allow-list/range validation.
- Added CSP, referrer and browser-permission restrictions.
- Fixed local START_GAME server directory-containment check.
- Added security response headers to local server.
- Confirmed no external runtime dependencies, trackers or embedded secrets.
- Documented server-authoritative requirement for future Battle/Tournament data.

# Changelog

## v0.5.4 — 2026-09-15
- IP-distance redesign: new geometric player ship, three enemy-unit designs and boss design.
- UI terminology moves away from “Invaders” toward neutral enemy units.
- Boss Level 5: side-shot spread angle reduced; projectile speed otherwise kept stable.
- Trailer/demo Level 15: player ship positioned higher and kept fully visible.
- Development Test Lab added: STANDARD / BURST / DIVER / BURST + DIVER / RANDOM.
- Test intensity selectable: LOW / MEDIUM / HIGH.
- BURST prototype: radial penetrating projectiles can destroy enemy units and can hit the player.
- DIVER prototype: formation units can break formation and shift downward/laterally; deliberately experimental.
- Test Lab is for development comparison and is intended to be disabled again after concept selection.
- v0.5.3 Swiss background, start-level unlocks, boss designer, language handoff and local statistics retained.
