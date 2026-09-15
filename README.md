# HELVETICSHOT ’84 – v0.5.1

Open-source retro browser arcade game.

## New in v0.5.1
- New **HELVETIC DART** default player craft with a deliberately angular, asymmetric/winged silhouette
- Redesigned default invader glyphs, bonus craft and boss silhouette
- Start screen branding corrected to HELVETICSHOT ’84
- Device/browser-local high score with **RESET** button and confirmation
- First staged asynchronous alien-row motion from level 6 upward
- Fixed hitboxes remain unchanged: visual redesign gives no gameplay advantage
- `START_GAME.bat` remains included; Python is not required
- German and English manuals included

## Start
1. Extract the ZIP completely.
2. Double-click `START_GAME.bat`.
3. Keep the command window open while playing.
4. The game opens at `http://localhost:8000`.

## Open source
MIT License. Never place passwords, private API keys or other secrets in client-side files.


## v0.5.3
Balancing Level 6–10 und lokale Teststatistik mit separatem Reset.

## v0.5.3
Swiss-Hintergrund als Standard, auswählbare Themes, Boss-Designer, Start-Level-Freischaltung,
Trailer-Demo, DE/EN-Sprachübergabe über `?lang=en|de` und Level-15-Boss-Balancing.

### Cloudflare
Die englische Sprachkachel bzw. Sprachwahl soll den Spiel-Link mit `?lang=en` öffnen.
Deutsch verwendet `?lang=de`. Das Spiel speichert die Sprache lokal, kann aber jederzeit
im Startbildschirm umgestellt werden.


## Security v0.5.4.1
See `SECURITY.md`. Design imports are strictly validated and size-limited. Competitive Battle/Tournament state must later be server-authoritative.
