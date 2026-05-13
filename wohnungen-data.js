// Leos Alpenchalet — Wohnungsübersicht data
window.LEOS_DATA = {
  brand: {
    name: "Leos Alpenchalet",
    address: {
      street: "Rohrmooser Straße 22",
      city: "87561 Oberstdorf-Tiefenbach",
      region: "Allgäu, Deutschland"
    }
  },

  hero: {
    eyebrow: "Sechs Wohnungen, ein Haus",
    h1Pre: "Welche ",
    h1Italic: "passt zu Ihnen",
    h1Post: "?",
    lede: "Jede unserer sechs Ferienwohnungen trägt den Namen eines Allgäuer Berges. Und jede unterscheidet sich hinsichtlich — Geschoss, Aussicht, Ausrichtung, Größe."
  },

  matrix: {
    eyebrow: "Auf einen Blick",
    h2Pre: "Was sich ",
    h2Italic: "unterscheidet",
    h2Post: ".",
    intro: "Sechs Wohnungen in Zahlen — ein direkter Vergleich. Filtern Sie nach Personen oder Geschoss, oder erfahren Sie mehr zur jeweiligen Wohnung mit Klick auf \"Ansehen\"."
  },

  wohnungen: [
    {
      id: "ifen",
      no: "01",
      name: "Ifen",
      tag: "Familienzentrale, ebenerdig",
      flaeche: 63,
      geschoss: "EG",
      ausrichtung: "Südost",
      personen: { min: 1, max: 4 },
      preis: 130,
      character: "Familienzentrale, ebenerdig",
      img: "img/ifen.jpg",
      images: ["img/ifen.jpg", "img/ifen-2.jpg", "img/ifen-3.jpg", "img/ifen-4.jpg"],
      body: "Die größte unserer Wohnungen — und die einzige ohne Treppen. Zwei Schlafzimmer, eine eigene Terrasse zum Garten und der direkte Schritt nach draußen, ohne Stiege, ohne Aufzug. Wer mit kleinen Kindern oder Großeltern reist, kommt hier an, ohne anzukommen.",
      bergstory: "— Hoher Ifen, 2.230 m. Tafelberg an der Grenze zum Kleinwalsertal."
    },
    {
      id: "himmeleck",
      no: "02",
      name: "Himmeleck",
      tag: "Panorama-Suite im 1. OG",
      flaeche: 63,
      geschoss: "1. OG",
      ausrichtung: "Südost",
      personen: { min: 1, max: 4 },
      preis: 130,
      character: "Panorama-Suite",
      img: "img/himmeleck.jpg",
      body: "Gleicher Grundriss wie Ifen, ein Stockwerk höher — und damit ein hausfront-füllender Balkon, von dem aus der Blick über Tiefenbach bis zum Birgsautal reicht. Morgens Sonne im Wohnzimmer, abends die Alpenglut über dem Grat.",
      bergstory: "— Himmeleck-Felsgrat, oberhalb des Birgsautals."
    },
    {
      id: "gaisberg",
      no: "03",
      name: "Gaisberg",
      tag: "Sonnenuntergangs-Nest",
      flaeche: 44,
      geschoss: "EG",
      ausrichtung: "West",
      personen: { min: 1, max: 3 },
      preis: 110,
      character: "Sonnenuntergangs-Nest",
      img: "img/gaisberg.jpg",
      images: ["img/gaisberg.jpg", "img/gaisberg-2.jpg", "img/gaisberg-3.jpg", "img/gaisberg-4.jpg"],
      body: "Westseitig, kompakt, wie geschaffen für zwei. Die Abendsonne fällt ins Wohnzimmer bis kurz vor zehn — im Sommer der schönste Platz im ganzen Haus, wenn das Tal im warmen Licht versinkt.",
      bergstory: "— Gaisberg, der Hausberg von Tiefenbach."
    },
    {
      id: "schneck",
      no: "04",
      name: "Schneck",
      tag: "Rückzugs-Studio im 1. OG",
      flaeche: 44,
      geschoss: "1. OG",
      ausrichtung: "West",
      personen: { min: 1, max: 3 },
      preis: 110,
      character: "Rückzugs-Studio",
      img: "img/schneck.jpg",
      body: "Die ruhigste Wohnung im Haus. Keine Durchgangslage, keine Treppen darüber, keine Aussicht aufs Treppenhaus. Wer Stille sucht — zum Lesen, zum Arbeiten, zum Atemholen — findet sie hier.",
      bergstory: "— Schneck, 2.268 m. Im Sommer eine einzige Blumenpracht."
    },
    {
      id: "hohes-licht",
      no: "05",
      name: "Hohes Licht",
      tag: "Sonnenaufgangs-Loft",
      flaeche: 55,
      geschoss: "DG",
      ausrichtung: "Südost",
      personen: { min: 1, max: 3 },
      preis: 120,
      character: "Sonnenaufgangs-Loft",
      img: "img/hohes-licht.jpg",
      body: "Sichtdachstuhl, freie Balken, Galerie über dem Wohnraum. Durch die Dachfenster fällt das schräge Morgenlicht auf den Holzboden — ein Loft-Gefühl, ohne urban zu sein. Hell, hoch, klar.",
      bergstory: "— Hohes Licht, 2.652 m. Zweithöchster Allgäuer Gipfel."
    },
    {
      id: "hochvogel",
      no: "06",
      name: "Hochvogel",
      tag: "Dachstuhl-Refugium",
      flaeche: 60,
      geschoss: "DG",
      ausrichtung: "West",
      personen: { min: 1, max: 3 },
      preis: 120,
      character: "Dachstuhl-Refugium",
      img: "img/hochvogel.jpg",
      body: "Warmes Holz, sichtbare Balken, Westbalkon. Wenn das Tal in den letzten Sonnenstrahlen liegt, sitzt man hier wie auf einer Empore — die markante Pyramide des Hochvogel im Blick.",
      bergstory: "— Hochvogel, 2.592 m. Markante Pyramidenform am Allgäuer Hauptkamm."
    }
  ],

  shared: {
    eyebrow: "In jeder Wohnung enthalten",
    h3Pre: "Was Sie ",
    h3Italic: "überall",
    h3Post: " finden.",
    note: "— gilt für alle sechs Wohnungen",
    items: [
      { icon: "utensils-crossed", text: "Komplett ausgestattete Küche mit Geschirrspüler, Backofen, Kaffeemaschine" },
      { icon: "trees",            text: "Eichenparkett, Echtholzmöbel, Fußbodenheizung in allen Räumen" },
      { icon: "shower-head",      text: "Eigenes Bad mit Regendusche, hochwertige Armaturen" },
      { icon: "bed-double",       text: "Bettwäsche und Handtücher inklusive — bei Anreise frisch bezogen" },
      { icon: "wifi",             text: "WLAN, Smart-TV mit Streaming, Bluetooth-Lautsprecher" },
      { icon: "sun",              text: "Eigener Balkon oder Terrasse — je nach Wohnung" },
      { icon: "cable-car",        text: "Bergbahn-Ticket Mai bis Oktober — alle 8 Bahnen inklusive" },
      { icon: "zap",              text: "E-Auto-Ladestation am Haus, 22 kW" },
      { icon: "parking-square",   text: "Privatparkplatz inklusive, teilweise überdacht" },
      { icon: "snowflake",        text: "Ski- und Fahrradraum, Trockenmöglichkeit für nasse Ausrüstung" }
    ]
  },

  bergbahn: {
    caveat: "— im Übernachtungspreis bereits enthalten",
    h3: "Bergbahn-Ticket Mai bis Oktober.",
    text: "Alle 8 Bergbahnen in Oberstdorf und im Kleinwalsertal — unbegrenzt nutzbar während Ihres gesamten Aufenthalts."
  },

  cta: {
    h3Pre: "Wohnung gefunden? ",
    h3Italic: "Jetzt Verfügbarkeit prüfen",
    h3Post: ".",
    sub: "Datum wählen, Wohnung wählen, buchen — alles in einem Schritt.",
    button: "Verfügbarkeit prüfen →",
    href: "https://leos-alpenchalet.tramino.de/api/widgets/booking/"
  }
};
