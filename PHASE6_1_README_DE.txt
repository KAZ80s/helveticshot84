HELVETICSHOT '84 – PHASE 6.1
Lokaler Battle-Prototyp auf Basis des fertigen Singleplayer-Grundspiels v0.5.4.4.

Ziel:
Die zentrale Battle-Idee testen, bevor Netzwerkcode eingeführt wird:
- Spieler 1 unten, Spieler 2 oben.
- Gemeinsame Gegnerformation zwischen beiden Spielern.
- Beide Spieler räumen Gegner ab.
- Durch freigeschossene Lücken können Schüsse den Gegenspieler erreichen.
- Drei Leben pro Spieler.

Steuerung:
P1: A/D bewegen, W schießen.
P2: Pfeil links/rechts bewegen, Pfeil runter schießen.
ESC: zurück zum Menü.

Bewusst NOCH NICHT integriert:
BURST/DIVER im Battle, Power-ups, Boss, Netzwerk, Lobby, Room-Code, Online-Rangliste.
Diese Funktionen folgen erst nach erfolgreichem Test der Kernmechanik.

SECURITY:
Phase 6.1 ist vollständig lokal. Es wurden keine Netzwerkendpunkte, WebSockets,
Accounts oder serverseitigen Funktionen ergänzt. Damit entsteht in 6.1 noch keine
neue Online-Angriffsfläche.


v0.6.1 MENÜ-FIX:
Hauptmenü zeigt jetzt zwei gleichwertige Startoptionen: SINGLEPLAYER und ⚔ BATTLE – 2 SPIELER. Darunter steht die Battle-Steuerung direkt sichtbar.
