---
name: Leos Alpenchalet
description: Sechs Ferienwohnungen in Tiefenbach — warm, geerdet, direkt buchbar.
colors:
  glut: "#A8C617"
  glut-dark: "#8FA912"
  eichen: "#7A5C3C"
  eichen-light: "#9C7E5E"
  wiese: "#4A5D3A"
  wiese-light: "#6B7B5A"
  altpapier: "#F4EFE6"
  altpapier-warm: "#EDE5D6"
  weiss: "#FAF8F2"
  laerche: "#2C2620"
  laerche-soft: "#3D3528"
  text-primary: "#1F1B17"
  text-muted: "#5C4A38"
typography:
  display:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(3.5rem, 7.5vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "0.78rem"
    fontWeight: 400
    letterSpacing: "0.28em"
  handwritten:
    fontFamily: "Caveat, cursive"
    fontSize: "1.6rem"
    fontWeight: 500
    lineHeight: 1.1
rounded:
  subtle: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  section-y: "7rem"
  section-y-mobile: "4.5rem"
  container-x: "3rem"
  container-x-mobile: "1.5rem"
components:
  btn-primary:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.subtle}"
    padding: "1.05rem 2rem"
  btn-primary-hover:
    backgroundColor: "{colors.glut-dark}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.subtle}"
    padding: "1.05rem 2rem"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.eichen}"
    rounded: "{rounded.subtle}"
    padding: "1rem 2rem"
  nav-btn:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.subtle}"
    padding: "0.6rem 1.2rem"
  w-card:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.subtle}"
    padding: "0"
  rv2-card:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.subtle}"
    padding: "1.6rem 1.7rem"
---

# Design System: Leos Alpenchalet

## 1. Overview

**Creative North Star: "Das stille Tal"**

Das System gehört zur Stille. Nicht zur Stille eines leeren Raums, sondern zur Stille kurz nach der Ankunft — wenn man den Koffer abstellt, aus dem Fenster schaut und zum ersten Mal ausatmet. Typografie, Farbe und Abstände sind auf dieses Gefühl ausgerichtet: ruhig, aber lebendig. Warm, aber präzise.

Die Farbpalette ist von Allgäuer Materialien abgeleitet — Lärchenholz (`#2C2620`), Altpapier (`#F4EFE6`), Moos und Wiese (`#4A5D3A`), Eichenrinde (`#7A5C3C`) — mit einem einzigen Kontrastpunkt: Bergbahn-Lime (`#A8C617`). Das ist die Farbe des Logos, der CTAs, der Italic-Akzente. Alle anderen Farben sind organisch, geerdet, unvermischt. Das Lime leuchtet, weil alles andere es lässt.

Marcellus übernimmt die Headline-Stimme: keine echten Kursiven, aber der Browser-Faux-Italic bei Display-Größen ist bei dieser Schrift akzeptabel und erzeugt den gewünschten warm-literarischen Ton. Source Sans 3 ist die ehrliche, arbeitende Stimme: lesbar, ruhig, nie kühl. Caveat erscheint sparsam, wie eine handschriftliche Notiz im Rand — bei Signaturen, dem Bergbahn-Streifen, der Familienunterschrift.

Das System lehnt explizit ab: Allgäu-Touristik-Templates (Blau, Weiß, Edelweiß-Ornament), Booking.com-Raster-Ästhetik, "Luxus-Chalet"-Hochglanz, generische AI-Outputs und Corporate-Hotel-Websites. Jede Entscheidung muss erkennbar menschlich und spezifisch für dieses Haus sein.

**Key Characteristics:**
- Ruhig durch Weißraum, nicht durch Leere
- Warm durch Erdtöne, nicht durch Braun-Filter
- Premium durch Präzision — präzise Abstände, präzise Typografie, keine Ornamente
- Persönlich durch Caveat und Familiensprache, nicht durch Stock-Phrasen
- Lime-Akzent: selten, daher bedeutsam

## 2. Colors: Die Allgäuer Palette

Fünf organische Erdtöne, ein Lime-Ausrufezeichen.

### Primary
- **Bergbahn-Lime** (`#A8C617`): Der einzige Akzentpunkt. Logo, CTAs, Italic-Highlights in Headlines, aktive Zustände, Bewertungsbalken. Leuchtet, weil alles andere es zurückhält. Hover: `#8FA912`.

### Secondary
- **Eichenrinde** (`#7A5C3C`): Die Marken-Ankerkraft. Logo-Text (dunkle Version), Ghost-Button-Rahmen und -Text, Caveat-Schriften, Signaturen, Link-Underlines. Wärmer als Lärchenrinde, weniger dunkel.
- **Wiesen-Grün** (`#4A5D3A`): Eyebrow-Labels, Bergbahn-Sektion-Hintergrund, thematische Farbfläche. Nicht Natur-Cliché-Grün — gedämpft, fast oliv.

### Neutral
- **Altpapier** (`#F4EFE6`): Haupt-Hintergrund. Kein Weiß — die leichte Wärme ist die Entscheidung. Alle hellen Sektionen.
- **Altpapier Warm** (`#EDE5D6`): Trust-Strip, sekundäre Hintergründe, Highlights.
- **Cremeweiß** (`#FAF8F2`): Karten-Hintergründe (Review-Cards), alternative helle Fläche.
- **Lärchenrinde** (`#2C2620`): Der dunkle Anker. Footer-Hintergrund, Hero-Overlay-Farbe.
- **Lärchenrinde Soft** (`#3D3528`): Footer-Innenbereiche, dunkle sekundäre Flächen.
- **Text Primary** (`#1F1B17`): Fließtext, Headlines. Kein reines Schwarz.
- **Text Muted** (`#5C4A38`): Sekundärer Text, Metadaten, Untertitel.

### Named Rules

**Die Lime-Sparsamkeitsregel.** `#A8C617` erscheint auf maximal 10% einer Seite. CTAs, Italic-Worte in Headlines, aktive Bewertungsbalken — das sind die einzigen legitimen Einsatzfelder. Jedes zusätzliche Lime schwächt das Ganze.

**Die Warmton-Pflicht.** Kein reines `#000000` oder `#ffffff`. Jede Neutral-Fläche tendiert zum Warmen. Wenn etwas zu kalt wirkt, ist die Antwort nicht ein Effekt — es ist die falsche Farbe.

## 3. Typography

**Display Font:** Marcellus (mit Georgia, serif als Fallback)
**Body Font:** Source Sans 3 (mit system-ui als Fallback)
**Accent Font:** Caveat (mit cursive als Fallback) — sparsam, wie eine handschriftliche Randnotiz

**Charakter:** Marcellus bringt die literarische Wärme eines alten Reiseführers; Source Sans 3 ist der zuverlässige Begleiter — lesbar, nie kühl. Caveat ist die Stimme von Familie Pinn persönlich. Drei Schriften, drei Register, klare Hierarchie.

### Hierarchy

- **Display** (400, `clamp(3.5rem, 7.5vw, 7rem)`, lh 0.95, ls -0.035em): Hero-Headline. Nur einmal pro Seite. Stichworte in Italic (`<em>`) erscheinen in Bergbahn-Lime.
- **Headline** (400, `clamp(2.5rem, 5vw, 4rem)`, lh 1.05, ls -0.025em): Section-H2. Trägt die Italic-Accent-Regel: ein kursives Schlüsselwort in Lime pro Headline.
- **Title** (400, `clamp(1.6rem, 3vw, 2.2rem)`, lh 1.1, ls -0.015em): Sub-Sektionen, Featured-Zitat, FAQ-Fragen.
- **Body** (400, 1.05rem, lh 1.65): Fließtext. Maximal 65ch Zeilenlänge. Muted (`#5C4A38`) für Untertitel und Meta.
- **Label** (400, 0.78rem, ls 0.28em, uppercase, Marcellus): Eyebrow-Labels über Sektionen. Immer in `--color-wiese` auf hellem Grund, `--color-altpapier-warm` auf dunklem Grund.
- **Handwritten** (500, 1.5–1.9rem, lh 1.1, Caveat): Nur für persönliche Akzente — Familienunterschrift, Bergbahn-Caveat, Tipp-Kategorien. Nie als Headline.

### Named Rules

**Die Italic-Regel.** In jeder Section-Headline steht genau ein Italic-`<em>`-Wort in Bergbahn-Lime. Nie zwei, nie keines. Das Italic ist kein dekorativer Stil — es markiert das eine Wort, das die Sektion trägt.

**Die Caveat-Sparsam-Regel.** Caveat erscheint nicht häufiger als drei Mal pro Seite. Es ist die handschriftliche Note im Rand — wenn es überall ist, ist es nirgends.

## 4. Elevation

Das System ist flach an der Oberfläche, gehoben auf Interaktion. Keine dekorativen Schatten. Schatten sind strukturell oder reaktiv — sie antworten auf State.

### Shadow Vocabulary

- **Hero Image Shadow** (`0 20px 60px rgba(44, 38, 32, 0.18)`): Nur für das Hero-Foto im Editorial-Layout. Verankert das Bild im Raum.
- **Card Shadow** (`0 4px 12px rgba(44, 38, 32, 0.15)`): Video-Wrap und ähnliche elevated Cards. Dezent, warmton-getönt.
- **Bergbahn-Pin Shadow** (`0 12px 28px -10px rgba(40, 30, 15, 0.35), 0 22px 40px -22px rgba(40, 30, 15, 0.25)`): Das einzige dramatische Objekt. Der hängende Pin simuliert physische Tiefe.
- **Score Card Shadow** (`0 8px 28px -18px rgba(0,0,0,0.18)`): Review-Karten. Minimal, nur zur Abgrenzung von der Hintergrundfläche.

### Named Rules

**Die Reaktive-Schatten-Regel.** Schatten entstehen durch Interaktion oder physikalische Metapher (der hängende Bergbahn-Pin), nicht als dekorative Zutaten. Ein Card-Grid mit Schatten-Hover ist erlaubt. Ein Card-Grid mit permanenten schweren Schatten ist verboten.

## 5. Components

### Buttons

Flach, direkt, kein Radius-Theater.

- **Shape:** Minimal gerundet (4px) — fast scharfkantig, nicht pill-förmig
- **Primary:** Bergbahn-Lime (`#A8C617`) Hintergrund, Cremeweiß Text, 1.05rem 2rem Padding. Hover: `#8FA912`. Transition 0.15s.
- **Ghost:** Transparenter Hintergrund, Eichenrinde-Rahmen (1px solid `#7A5C3C`), Eichenrinde Text. Hover: Eichenrinde füllt sich, Text wird Altpapier.
- **Nav-Button:** Wie Primary, aber kompakter (0.6rem 1.2rem), Font-Weight 500, Font-Size 0.93rem. Sitzt in der sticky Nav.
- **Inline-Text-Button:** Kein Hintergrund, kein Rahmen. Border-Bottom als Underline. Transitionen auf border-color und color.

### Cards

- **Wohnungs-Card (w-card):** Kein Hintergrund, kein Rahmen, kein Schatten. Das Bild trägt alles. Aspect Ratio 4:5, overflow hidden, 4px radius. Hover: Scale(1.04) auf das Bild allein, 0.6s ease. Text darunter: Eyebrow → Marcellus-H3 → Italic-Tagline → Meta.
- **Review-Card (rv2-card):** Weißer Hintergrund (`#FAF8F2`), subtiler Rahmen (`rgba(122,92,60,0.18)`), 4px radius, 1.6rem 1.7rem Padding. Hover: Border-Color wechselt zu Lime, translateY(-2px).
- **Tipp-Card:** Kein Hintergrund, kein Rahmen. Bild (16:10, lg radius), darunter Caveat-Kategorie + Marcellus-H4 + Source-Sans-Body.

### Navigation

- **Desktop sticky:** `rgba(244,239,230,0.92)` mit backdrop-filter blur bei Scroll. 70px Höhe. Links in Text Primary. Hover → Lime. Nav-Button rechts.
- **Overlay-Variante (Hero-Seiten):** Transparent am Top, blurred bei Scroll. Logo: light PNG am Top, dark PNG bei Scroll.
- **Mobile Hamburger:** Clip-Path-Circle-Animation aus dem Hamburger-Knopf heraus. Dark Background (`#1a1612`), Marcellus-Links in 2.4rem. Lime-CTA unten.

### Signature Components

**Trust Strip:** Endlos-Ticker mit `animation: trust-scroll 40s linear infinite`. Altpapier-Warm Hintergrund. Items mit Lime-Bullet-Separator. Pausiert auf Hover.

**Bergbahn-Pin:** Weißes Karten-Element, `rotate(4.5deg)`, mit realistischem Pin-Punkt (radialer Gradient, rot) und Caveat-Caption. Schwebt über der Intro-Sektion. Hover: `rotate(2deg) translateY(-2px)`.

**Review Score Card:** Score-Zahl in 4rem Marcellus, Lime Balken-Füllung, Source-Sans Meta. 3px Lime-Top-Border als Akzent-Linie.

### Inputs / Fields

Keine eigenen Input-Felder auf der Seite (Buchung läuft über Tramino-Widget extern). Wenn Felder nötig werden: subtiler Rahmen (`rgba(122,92,60,0.18)`), 4px Radius, Focus mit Lime-Border und Glow `rgba(168,198,23,0.2)`.

## 6. Do's and Don'ts

### Do:
- **Do** verwende Bergbahn-Lime ausschließlich für CTAs, aktive Zustände und das eine Italic-Wort in Headlines. Rarity ist die Wirkung.
- **Do** halte Zeilenlängen bei maximal 65ch im Body-Text. Breitere Spalten zerstören die Ruhe.
- **Do** nutze `clamp()` für alle Display- und Headline-Größen. Fluid Typography ist nicht optional.
- **Do** setze Caveat nur für persönliche Akzente: Unterschrift, Bergbahn-Caveat, Tipp-Kategorien. Maximal drei Einsätze pro Seite.
- **Do** lass Abstände variieren. Section-Padding 7rem, interne Elemente 1.5–3rem, Eyebrow-Gap 0.8rem. Gleiche Abstände überall ist Monotonie.
- **Do** verwende `img object-fit: cover` mit sorgfältig gesetzter `object-position` für alle Fotos. Das falsche Crop zerstört das Premium-Gefühl.
- **Do** setze `text-shadow: 0 2px 24px rgba(0,0,0,0.35)` auf Hero-Texte über dunklen Overlays.

### Don't:
- **Don't** verwende AI-Slop-Ästhetik: identische Icon-Grid-Cards, Gradient-Text (`background-clip: text`), Glassmorphism-Karten als Dekor, das Held-Metrik-Template (große Zahl + Label + Statistiken + Gradient-Akzent).
- **Don't** imitiere Booking.com- oder HRS-Raster-Layouts. Kein Preisvergleichs-Grid, keine Filter-Leiste-Ästhetik.
- **Don't** verwendete Allgäu-Touristik-Klischees: Blau + Weiß + Edelweiß-Ornamente, rustikale Holztextur-Overlays, Urlaubs-Stock-Phrasen.
- **Don't** nutze `#000000` oder `#ffffff`. Alle Neutrals tendieren warmton.
- **Don't** platziere `border-left` oder `border-right` größer 1px als farbigen Akzentstreifen auf Cards oder Listeneinträgen.
- **Don't** setze Caveat als Headline oder für zusammenhängenden Fließtext. Sie ist eine Randnotiz, kein Textkörper.
- **Don't** mache Schatten dekorativ. Kein permanenter Box-Shadow auf Cards im Ruhezustand (außer rv2-score-card und video-wrap, die strukturell gehoben sind).
- **Don't** verwende mehr als ein Italic-`<em>` pro Headline. Zwei Italic-Wörter nivellieren die Hierarchie.
- **Don't** ersetze Familie Pinn durch generische "Willkommen"-Sprache. Die Familie ist der Conversion-Grund.
