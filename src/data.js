// =============================================================
//  Zentrale Datenquelle der Knusperflotte.
//  Reines Daten-Modul (kein React-Import!) -> auch in Node nutzbar
//  fuer die RSS-Generierung beim Build.
// =============================================================

export const site = {
  name: "Die Knusperflotte",
  short: "Knusperflotte",
  tagline: "Goldbraun. Knusprig. Für immer Kindheit.",
  description:
    "Inoffizieller, nicht-kommerzieller Fan-Club für alle, die Fischstäbchen lieben – Nostalgie, Beilagen-Streit und gemeinsames Schlemmen.",
  // ▼▼▼ BITTE ANPASSEN – echte Domain eintragen (für Feed & Canonical) ▼▼▼
  url: "https://knusperflotte.example",
  // ▼▼▼ BITTE ANPASSEN – Link zum Google-Formular (Gruppen-Beitritt) ▼▼▼
  googleFormUrl: "https://docs.google.com/forms/d/e/DEIN_FORMULAR_ID/viewform",
  // Tag, mit dem Newsletter-Kontakte in EmailOctopus markiert werden:
  emailOctopusTag: "fischstäbchen",
  email: "ahoi@knusperflotte.example", // BITTE ANPASSEN
};

// --- Spaß-Trivia (Fakten, Quelle iglo.de / Wikipedia) -------------
export const trivia = [
  { wert: "1959", label: "erste Fischstäbchen in Bremerhaven" },
  { wert: "1985", label: "Käpt'n iglo sticht in See" },
  { wert: "2,3 Mrd.", label: "Stäbchen pro Jahr aus einem Werk" },
  { wert: "5,5×", label: "damit um die Erde gelegt" },
];

// --- Beilagen-Barometer (Startwerte; Besucher dürfen abstimmen) ---
export const beilagen = [
  { id: "remoulade", name: "Remoulade", emoji: "🥄", votes: 142, blurb: "Die Staatsräson der Puristen-Gegner." },
  { id: "ketchup", name: "Ketchup", emoji: "🍅", votes: 138, blurb: "Ewige Rivalin der Remoulade." },
  { id: "kartoffelpueree", name: "Kartoffelpüree", emoji: "🥔", votes: 96, blurb: "Wolke zum Reinlegen." },
  { id: "zitrone", name: "Zitrone", emoji: "🍋", votes: 71, blurb: "Ein Spritzer Seemannsromantik." },
  { id: "erbsen", name: "Erbsen", emoji: "🟢", votes: 64, blurb: "Der grüne Kompromiss mit den Eltern." },
  { id: "kartoffelsalat", name: "Kartoffelsalat", emoji: "🥗", votes: 58, blurb: "Sonntags-Fraktion." },
  { id: "kraeuterquark", name: "Kräuterquark", emoji: "🌿", votes: 41, blurb: "Die frische Brise." },
  { id: "pur", name: "Pur (Puristen)", emoji: "🚫", votes: 37, blurb: "Stäbchen ohne alles. Mutig." },
];

// --- Gruppen / Standorte (PLATZHALTER – bitte echte ergänzen) -----
export const chapters = [
  {
    stadt: "Linz",
    name: "Heimathafen Linz",
    status: "aktiv",
    treff: "jeden 3. Donnerstag, 19:00",
    note: "Der Mutterhafen der Knusperflotte. Hier wird die Panade-Doktrin gehütet.",
  },
  {
    stadt: "Wien",
    name: "Kombüse Donaukanal",
    status: "in Gründung",
    treff: "monatlich, Termin im Logbuch",
    note: "Sucht noch eine:n Smutje mit eigener Fritteuse.",
  },
  {
    stadt: "Graz",
    name: "Bucht der Murpiraten",
    status: "in Gründung",
    treff: "noch offen",
    note: "Beilagen-Schwerpunkt: Kürbiskernöl auf alles. Wir prüfen das.",
  },
  {
    stadt: "Salzburg",
    name: "Anker am Kapuzinerberg",
    status: "Wunschstandort",
    treff: "—",
    note: "Hier braucht es noch mutige Erstbesatzung.",
  },
];

// --- Gruppenübergreifende Aktionen --------------------------------
export const aktionen = [
  {
    icon: "🏆",
    title: "Die Goldene Stäbchen-Meisterschaft",
    kicker: "jährlich",
    text: "Alle Häfen treten an: Disziplinen sind Pfannen-Sprint (perfekte Goldbräune auf Zeit), Beilagen-Kreativität und Blind-Verkostung. Wanderpokal ist ein bronziertes Stäbchen.",
  },
  {
    icon: "🗺️",
    title: "Tour de Panade",
    kicker: "Saison",
    text: "Häfen besuchen sich gegenseitig. Jede:r bekommt einen Stäbchen-Pass, der an jeder Kombüse einen Stempel erhält. Volle Karte = Ehrenrang an Bord.",
  },
  {
    icon: "⏱️",
    title: "Synchron-Schmaus",
    kicker: "Stichtag",
    text: "An einem festen Datum beißen alle Häfen zur selben Sekunde ab – per Video zugeschaltet. Ein Land, ein Knuspern.",
  },
  {
    icon: "⚔️",
    title: "Beilagen-Battle",
    kicker: "Debattenabend",
    text: "Remoulade-Fraktion gegen Ketchup-Fraktion. Mit Eröffnungsplädoyers, Live-Verkostung und Publikumsjury. Bisher: unentschieden, gefährlich emotional.",
  },
  {
    icon: "📏",
    title: "Das Lange Stäbchen",
    kicker: "Gemeinschaftsrekord",
    text: "Jeder Hafen legt seine längste lückenlose Reihe Stäbchen, fotografiert sie – und wir montieren daraus die längste Knusperflotte-Linie der Republik.",
  },
  {
    icon: "🆘",
    title: "Stäbchen-SOS",
    kicker: "Notdienst",
    text: "Wer in einer Tiefkühl-Krise sitzt, funkt – der nächstgelegene Hafen schickt ein Care-Paket. Niemand hungert allein.",
  },
];

// --- Aufnahmetest -------------------------------------------------
export const quiz = {
  intro:
    "Sechs Fragen entscheiden, ob du an Bord gehörst. Kein Wissen wird benotet – nur deine Hingabe. Ehrlichkeit ist Ehrensache.",
  questions: [
    {
      q: "Die Stäbchen kommen aus dem Ofen. Erste Handlung?",
      options: [
        { text: "Sofort eines testen, Konsequenzen am Gaumen egal", points: 3 },
        { text: "Ordentlich auf den Teller, Beilage richten", points: 2 },
        { text: "Foto fürs Logbuch, dann essen", points: 2 },
        { text: "Warten, bis alle sitzen", points: 1 },
      ],
    },
    {
      q: "Deine Beilagen-Grundhaltung?",
      options: [
        { text: "Remoulade ist Gesetz", points: 3 },
        { text: "Ketchup, immer und ewig", points: 3 },
        { text: "Wechselnd, je nach Wetterlage", points: 2 },
        { text: "Pur. Stäbchen brauchen niemanden", points: 3 },
      ],
    },
    {
      q: "Wie wichtig ist die Goldbräune?",
      options: [
        { text: "Heilig. Zu blass ist ein Notfall", points: 3 },
        { text: "Wichtig, aber ich bin gnädig", points: 2 },
        { text: "Hauptsache warm", points: 1 },
        { text: "Ich mag sie sogar leicht zu dunkel", points: 2 },
      ],
    },
    {
      q: "Jemand sagt: „Fischstäbchen sind Kinderessen.“",
      options: [
        { text: "Höflich, aber bestimmt widersprechen", points: 2 },
        { text: "Zum Probeessen einladen", points: 3 },
        { text: "Innerlich Mitleid empfinden", points: 2 },
        { text: "Lautstark Vereinsehre verteidigen", points: 3 },
      ],
    },
    {
      q: "Erinnerst du dich an deine Kindheits-Beilage?",
      options: [
        { text: "Natürlich, bis ins Detail", points: 3 },
        { text: "Ungefähr, das Gefühl ist da", points: 2 },
        { text: "Nein, aber ich will es zurück", points: 2 },
        { text: "Ich esse heute noch genau dieselbe", points: 3 },
      ],
    },
    {
      q: "Synchron-Schmaus, Stichtag, 20:00. Du bist?",
      options: [
        { text: "Längst zugeschaltet, Gabel bereit", points: 3 },
        { text: "Dabei, wenn ich kann", points: 2 },
        { text: "Aufgezeichnet, nachgeholt", points: 2 },
        { text: "Ich organisiere den Stream", points: 3 },
      ],
    },
  ],
  ranks: [
    { min: 0, title: "Blinder Passagier", text: "Noch grün hinter den Ohren – aber jede:r fängt mal an. Komm zum Probeessen!" },
    { min: 8, title: "Schiffsjunge", text: "Solide Grundhaltung. Ein paar Schmäuse und du bist Stammbesatzung." },
    { min: 12, title: "Smutje", text: "Du verstehst die Panade. Die Kombüse ruft nach dir." },
    { min: 15, title: "Steuermann/-frau", text: "Kurssicher in allen Beilagen-Gewässern. Respekt." },
    { min: 17, title: "Käpt'n der Knusperflotte", text: "Eine Legende. Käpt'n Knusperbart salutiert." },
  ],
};

// --- Original-Werbefilme (extern verlinkt, nicht eingebettet) -----
// Hinweis: Verweise auf Drittinhalte (YouTube). Wir hosten nichts selbst.
export const videos = [
  {
    title: "iglo Deutschland – offizieller YouTube-Kanal",
    jahr: "heute",
    url: "https://www.youtube.com/channel/UCVz5RDhOJbMlL7j7WQ67TnA",
    note: "Aktuelle TV-Spots & Rezepte – die offizielle Quelle.",
    typ: "offiziell",
  },
  {
    title: "Käpt'n iglo – „Komm an Bord!“",
    jahr: "2025",
    url: "https://www.youtube.com/watch?v=Ijn9k7Nx2nQ",
    note: "Der aktuelle Auftritt des Käpt'ns.",
    typ: "offiziell",
  },
  {
    title: "Neuer Käpt'n iglo – TV-Spot",
    jahr: "2018",
    url: "https://www.youtube.com/watch?v=LRXqDZNZA9o",
    note: "Der Käpt'n wird lässiger – neues Gesicht.",
    typ: "offiziell",
  },
  {
    title: "Käpt'n Iglo Werbung",
    jahr: "1998",
    url: "https://www.youtube.com/watch?v=1zRI-dKrcSY",
    note: "Volle 90er-Seemannsromantik.",
    typ: "Fan-Upload",
  },
  {
    title: "Käpt'n Iglo Werbung",
    jahr: "1992",
    url: "https://www.youtube.com/watch?v=e2EL8WE5IFo",
    note: "Piratenschiff-Nostalgie pur.",
    typ: "Fan-Upload",
  },
  {
    title: "Käpt'n Iglo Werbung",
    jahr: "1988",
    url: "https://www.youtube.com/watch?v=iTMsblGTAdM",
    note: "Ein Klassiker für die Älteren an Bord.",
    typ: "Fan-Upload",
  },
];

// --- Blog / Logbuch ----------------------------------------------
// blocks: { type: 'p' | 'h2' | 'quote' | 'list', text? , items? }
export const posts = [
  {
    title: "Logbuch: Unser erster Synchron-Schmaus",
    date: "2026-06-04",
    author: "Käpt'n Knusperbart",
    tags: ["Logbuch", "Aktion"],
    excerpt:
      "Vier Häfen, eine Sekunde, ein kollektives Knuspern. Was beim ersten gemeinsamen Abbiss schiefging – und warum es trotzdem perfekt war.",
    blocks: [
      { type: "p", text: "20:00 Uhr, Stichtag. Vier Bildschirme, vier Teller, vier Gabeln in Habachtstellung. Der Plan: Alle beißen zur selben Sekunde ab. Die Realität: Linz war drei Sekunden zu früh, Graz hatte Tonprobleme, und in Wien fiel exakt zur Sekunde null die Fritteuse aus." },
      { type: "h2", text: "Die drei Sekunden von Linz" },
      { type: "p", text: "Wir haben die Aufzeichnung 14-mal angesehen. Linz behauptet, der Countdown sei „gefühlt synchron“ gewesen. Die Beweislage spricht dagegen. Es gibt jetzt eine Schiedskommission." },
      { type: "quote", text: "Ein echter Synchron-Schmaus duldet keinen Vorsprung. Auch keinen aus Vorfreude." },
      { type: "p", text: "Beim nächsten Mal: zentrale Zeitansage, ein Soundsignal, und ein Ersatz-Hafen für technische Notfälle. Trotz allem: Das Gefühl, gleichzeitig mit Menschen in anderen Städten dasselbe knusprige Ding zu essen, war absurd schön." },
    ],
  },
  {
    title: "Remoulade gegen Ketchup: Chronik eines endlosen Krieges",
    date: "2026-05-12",
    author: "Die Beilagen-Redaktion",
    tags: ["Beilagen", "Debatte"],
    excerpt:
      "Seit der ersten Vereinssitzung schwelt er: der Beilagen-Streit. Eine ernsthafte (nicht ernste) Bestandsaufnahme zweier unversöhnlicher Lager.",
    blocks: [
      { type: "p", text: "Es gibt Konflikte, die löst keine Diplomatie. Die Frage „Remoulade oder Ketchup?“ ist so einer. Wir haben Argumente beider Seiten gesammelt – aus reiner Pflicht zur Ausgewogenheit." },
      { type: "h2", text: "Die Remoulade-Fraktion" },
      { type: "list", items: ["Cremig, kräutrig, erwachsen.", "Begleitet das Stäbchen, statt es zu übertönen.", "„Wer Ketchup nimmt, schmeckt den Fisch nicht.“"] },
      { type: "h2", text: "Die Ketchup-Fraktion" },
      { type: "list", items: ["Süß-sauer, direkt, ehrlich.", "Der Geschmack der Kindheit – Punkt.", "„Remoulade ist Soße für Leute, die Angst vor Spaß haben.“"] },
      { type: "p", text: "Das Beilagen-Battle bleibt unentschieden. Vielleicht ist genau das der Frieden: zwei Lager, ein Stäbchen, ewige Reibung. Pur-Puristen halten sich übrigens raus und lächeln überlegen." },
    ],
  },
  {
    title: "Warum goldbraune Stäbchen uns in die Kindheit beamen",
    date: "2026-04-20",
    author: "Käpt'n Knusperbart",
    tags: ["Nostalgie"],
    excerpt:
      "Es ist nicht nur Essen. Es ist eine Zeitmaschine mit Panade. Über Erinnerung, Geruch und das Geräusch, wenn die Gabel durch die Kruste bricht.",
    blocks: [
      { type: "p", text: "Frag irgendwen am Tisch nach seiner ersten Beilage zum Fischstäbchen – und beobachte das Gesicht. Da passiert etwas. Die Augen gehen kurz nach oben links, dorthin, wo Erinnerungen wohnen, und dann kommt ein Satz, der mit „Bei uns gab's immer …“ beginnt." },
      { type: "h2", text: "Der Knusper-Reflex" },
      { type: "p", text: "Es ist das Geräusch. Dieses kurze, trockene Knacken, wenn die Gabel durch die Panade bricht. Unser Gehirn hat es abgespeichert wie eine Kindermelodie. Ein einziger Biss, und plötzlich ist Freitagabend 1994." },
      { type: "p", text: "Genau dafür gibt es die Knusperflotte. Nicht, weil Fischstäbchen das beste Essen der Welt wären – sondern weil sie das verlässlichste sind. Sie schmecken nach einer Zeit, in der das größte Problem war, ob noch genug Remoulade im Glas ist." },
      { type: "quote", text: "Nostalgie ist der einzige Geschmack, den man nicht nachwürzen kann." },
    ],
  },
];
