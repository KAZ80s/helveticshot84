# HELVETICSHOT '84 Security

## v0.5.4.1 security review — 2026-09-15

Scope: static browser game, designer JSON import/export, URL language parameter,
localStorage, local START_GAME server, and v0.5.4 BURST/DIVER development features.

### Fixes applied
- Strict schema validation for imported and locally stored design JSON.
- Pixel colors restricted to the game's allow-list.
- JSON imports limited to 64 KB and `.json` files.
- Background rendering parameters clamped to safe ranges.
- Restrictive Content Security Policy added.
- Referrer leakage disabled; unused browser permissions disabled.
- Local PowerShell server path containment check corrected to require a real directory boundary.
- Local server adds CSP, `nosniff`, no-referrer and no-store response headers.
- No external runtime libraries, trackers, CDNs, API keys, passwords or secrets found.

### Important future multiplayer rule
High scores, unlock progress and statistics are stored in localStorage and can be changed
by the local user. They are acceptable for the current single-player development build,
but must never be trusted for public rankings, Battle Mode or tournaments. Competitive
state and results must later be validated server-side.
