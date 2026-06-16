# Die Knusperflotte 🐟

Inoffizielle, nicht-kommerzielle **Fan- und Spaßseite** für Fischstäbchen-Enthusiast:innen.
Gebaut mit **Vite + React** (Single-Page-App), Deployment über **GitHub + Vercel**.

> ⚠️ **Wichtiger Hinweis:** Diese Seite steht in keiner Verbindung zu iglo / Nomad Foods.
> Der Maskottchen-Name „Käpt'n Knusperbart" und der Vereinsname „Die Knusperflotte" sind
> **eigene Schöpfungen**. Bezüge auf „iglo" / „Käpt'n iglo" erfolgen nur beschreibend.
> Siehe Seite **/rechtliches** und den Abschnitt „Rechtliches" unten.

---

## 1. Lokal starten

```bash
npm install
npm run dev        # Entwicklungsserver (http://localhost:5173)
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal testen
npm test           # Smoke- & Unit-Tests (Vitest)
```

Node ≥ 18 empfohlen.

---

## 2. Was du noch anpassen musst (Platzhalter)

Alle zentralen Inhalte liegen in **`src/data.js`**. Folgende Felder sind Platzhalter:

| Ort | Feld | Was eintragen |
|-----|------|---------------|
| `src/data.js` → `site` | `url` | Eure echte Domain (für Canonical-Links & RSS-Feed) |
| `src/data.js` → `site` | `googleFormUrl` | Link zu eurem Google-Formular (Gruppen-Beitritt) |
| `src/data.js` → `site` | `email` | Echte Kontakt-E-Mail |
| `src/data.js` → `chapters` | alle Einträge | Echte Gruppen/Standorte, Treffzeiten, Status |
| `src/pages/Rechtliches.jsx` | Impressum-Block | **Echte Angaben** (Name, Anschrift, Verantwortliche:r) – gesetzlich Pflicht (öst. ECG/Mediengesetz) |

Der **Vereinsname** („Die Knusperflotte") und das **Maskottchen** („Käpt'n Knusperbart")
sind Vorschläge – frei änderbar in `src/data.js` bzw. `src/components/Mascot.jsx`.

---

## 3. Newsletter (EmailOctopus)

Die Newsletter-Anmeldung läuft über eine Vercel-Serverless-Funktion
(`api/newsletter.js`). Sie ruft die EmailOctopus-API auf, vergibt den Tag
**`fischstäbchen`** und nutzt **Double-Opt-in** (Status `PENDING`, DSGVO-konform).

In **Vercel → Project → Settings → Environment Variables** anlegen:

| Variable | Wert |
|----------|------|
| `EMAILOCTOPUS_API_KEY` | API-Key aus EmailOctopus (Account → API) |
| `EMAILOCTOPUS_LIST_ID` | List-ID (steht in der URL eurer Liste im Dashboard) |

Ohne diese Variablen liefert das Formular einen Fehler – das ist erwartetes Verhalten,
bis ihr die Werte gesetzt habt.

---

## 4. Gruppen-Beitritt (Google Forms)

Erstellt ein Google-Formular und tragt den „viewform"-Link in
`src/data.js` → `site.googleFormUrl` ein. Der Button auf **/mitmachen** ist
deaktiviert, solange dort noch der Platzhalter steht.

---

## 5. Deployment (GitHub + Vercel)

1. Repository auf GitHub anlegen und Code pushen:
   ```bash
   git init
   git add .
   git commit -m "Knusperflotte v1"
   git branch -M main
   git remote add origin https://github.com/<dein-account>/<repo>.git
   git push -u origin main
   ```
2. Auf [vercel.com](https://vercel.com) → **Add New Project** → GitHub-Repo importieren.
3. Vercel erkennt Vite automatisch (Build: `npm run build`, Output: `dist`).
4. Environment-Variablen aus Abschnitt 3 eintragen.
5. **Deploy.** Danach eure Domain in Vercel → Settings → Domains verbinden.

`vercel.json` enthält bereits die SPA-Rewrite-Regel, damit Unterseiten
(z. B. `/blog/...`) direkt aufrufbar sind.

---

## 6. Aufbau

```
src/
  data.js            ← ALLE Inhalte zentral (Texte, Gruppen, Quiz, Videos, Blog)
  App.jsx            ← Routing
  components/        ← Layout, Maskottchen, Formulare, Barometer
  pages/             ← einzelne Seiten
  lib/               ← slugify, RSS-Bau, Quiz-Logik
  test/              ← Vitest-Tests
api/newsletter.js    ← EmailOctopus-Anbindung (Vercel Function)
vite.config.js       ← Build + RSS-Feed-Generierung (public/feed.xml)
```

Der **RSS-Feed** (`/feed.xml`) wird beim Build automatisch aus den Blog-Posts
in `data.js` erzeugt. Jeder Blog-Beitrag hat eine eigene URL `/blog/<slug>`.

---

## 7. Rechtliches (bitte lesen)

- Die Seite nutzt **keine** geschützten Logos/Bilder von iglo. Maskottchen und
  Name sind eigenständig.
- Werbefilme werden **nur extern verlinkt** (YouTube), nicht eingebettet oder
  selbst gehostet.
- Der **Haftungsausschluss** erscheint im Footer jeder Seite und ausführlich
  auf `/rechtliches`.
- **Das Impressum muss vor Veröffentlichung mit euren echten Daten gefüllt
  werden** – das ist in Österreich gesetzlich verpflichtend.
- Markenrecht ist Auslegungssache: Der beschreibende Bezug auf „Fischstäbchen"
  und die nominative Nennung von „iglo" sind grundsätzlich zulässig, eine
  Rest-Unsicherheit bleibt aber immer eure unternehmerische Entscheidung.
  Im Zweifel kurz anwaltlich prüfen lassen.
