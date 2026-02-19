# Schlemmer Deluxe - Restaurant Website

Eine moderne, mobile-first Restaurant-Website für Schlemmer Deluxe in Düsseldorf.

## 🚀 Schnellstart

```bash
# Dependencies installieren
yarn install

# Entwicklungsserver starten
yarn dev

# Production Build
yarn build
yarn start
```

## 📁 Projektstruktur

```
/app/
├── app/
│   ├── page.js           # Homepage
│   ├── menu/page.js      # Vollständiges Menü
│   ├── kontakt/page.js   # Kontaktseite
│   ├── impressum/page.js # Impressum
│   ├── datenschutz/page.js # Datenschutz
│   ├── layout.js         # Root Layout mit Metadata
│   └── globals.css       # CSS Variablen & Styles
├── components/
│   ├── Header.jsx        # Navigation
│   ├── Footer.jsx        # Footer
│   ├── StickyMobileCTA.jsx # Mobile Sticky Bar
│   ├── ContactForm.jsx   # Kontaktformular
│   └── ui/               # shadcn/ui Komponenten
├── data/
│   └── restaurant.js     # Zentrale Daten
└── README.md
```

## ✏️ Anpassungen vornehmen

### Menü-Daten bearbeiten

Alle Menü-Items, Preise und Kategorien befinden sich in `/data/restaurant.js`.

### Farbschema anpassen

Die Markenfarben werden in `/app/globals.css` als CSS-Variablen definiert:

```css
:root {
  --brand: 15 85% 50%;     /* Hauptfarbe (Orange-Rot) */
  --brand-2: 45 90% 55%;   /* Sekundärfarbe (Gold) */
  --accent: 142 70% 40%;   /* Akzentfarbe (Grün) */
}
```

## 📋 TODO-Liste

### Dringend
- [ ] **Impressum**: Inhabername, E-Mail, USt-IdNr. einfügen
- [ ] **Datenschutz**: Vollständige DSGVO-konforme Texte erstellen
- [ ] **Öffnungszeiten**: Echte Öffnungszeiten in `/data/restaurant.js` eintragen

### Bestellfunktion
- [ ] **Bestelllinks**: Echte Links zu Lieferando/Wolt in `orderingLinks` einfügen
- [ ] Oder: Eigenes Bestellsystem integrieren

### Menü
- [ ] **Preise**: Echte Preise eintragen
- [ ] **Beschreibungen**: Korrekte Beschreibungen für alle Items
- [ ] **Allergene**: Allergen-Informationen hinzufügen

### Branding
- [ ] **Logo**: Eigenes Logo als SVG/PNG hinzufügen
- [ ] **Bilder**: Echte Produktfotos hinzufügen
- [ ] **Farben**: Ggf. an Instagram-Branding anpassen

### Rechtliches
- [ ] Impressum vollständig ausfüllen
- [ ] Datenschutzerklärung mit Anwalt erstellen
- [ ] Cookie-Banner implementieren (falls Analytics genutzt wird)

### Optional
- [ ] Google Analytics einrichten
- [ ] Google My Business verknüpfen
- [ ] Online-Bewertungen integrieren
- [ ] Newsletter-Anmeldung

## 🎨 Design System

| Variable | Verwendung |
|----------|------------|
| `--brand` | Buttons, Headlines, CTAs |
| `--brand-2` | Badges, Akzente, Gold-Effekte |
| `--accent` | Erfolgs-Meldungen, Frische |
| `--bg` | Hintergrund |
| `--text` | Texte |

## 📱 Features

- ✅ Mobile-first Design
- ✅ Sticky Mobile CTA Bar
- ✅ Click-to-Call Telefon-Links
- ✅ Google Maps Integration (datenschutzfreundlich)
- ✅ Kontaktformular mit Toast-Feedback
- ✅ SEO-optimierte Metadata
- ✅ Open Graph Tags
- ✅ Responsive Navigation
- ✅ Menü-Suche und Filter
- ✅ Deutsche Sprache (DACH)

## 🔗 Kontakt

**Schlemmer Deluxe**  
Erkrather Str. 169  
40233 Düsseldorf  
Tel: 0211 566 531 47

---

Erstellt mit Next.js 14, Tailwind CSS & shadcn/ui
