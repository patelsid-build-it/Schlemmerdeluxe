// Restaurant-Daten für Schlemmer Deluxe
// TODO: Echte Menüdaten, Preise und Bestelllinks einfügen

export const restaurant = {
  name: "Schlemmer Deluxe",
  tagline: "Frisch, lecker, schnell.",
  description: "Döner, Burger & mehr – Abholung oder Lieferung in Düsseldorf.",
  
  address: {
    street: "Erkrather Str. 169",
    zip: "40233",
    city: "Düsseldorf",
    location: "B8 Center Flingern",
    country: "Deutschland"
  },
  
  phone: "021156653147",
  phoneFormatted: "0211 566 531 47",
  
  // Generierter Google Maps Link basierend auf Adresse
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Erkrather+Str.+169,+40233+Düsseldorf+B8+Center+Flingern",
  
  // TODO: Echte Öffnungszeiten einfügen
  openingHours: [
    { day: "Montag", hours: "11:00 - 22:00" },
    { day: "Dienstag", hours: "11:00 - 22:00" },
    { day: "Mittwoch", hours: "11:00 - 22:00" },
    { day: "Donnerstag", hours: "11:00 - 22:00" },
    { day: "Freitag", hours: "11:00 - 23:00" },
    { day: "Samstag", hours: "12:00 - 23:00" },
    { day: "Sonntag", hours: "12:00 - 22:00" }
  ],
  
  // Bestelllinks
  orderingLinks: {
    lieferando: "https://www.lieferando.de/speisekarte/schlemmer-deluxe",
    wolt: "https://wolt.com/de/deu/dusseldorf/restaurant/schlemmer-deluxe",
  },
  
  // Tischreservierung
  tables: {
    indoor: 20,
    outdoor: 7,
    total: 27
  },
  
  // Parkplätze
  parking: {
    spaces: 100,
    free: true
  },
  
  instagram: "https://www.instagram.com/schlemmer_deluxe",
  
  usps: [
    { icon: "ChefHat", title: "Frisch zubereitet", description: "Alle Gerichte werden frisch für Sie zubereitet" },
    { icon: "Clock", title: "Schnelle Abholung", description: "Kurze Wartezeiten bei Abholung" },
    { icon: "Utensils", title: "Große Auswahl", description: "Döner, Burger, Wraps & mehr" },
    { icon: "Car", title: "100 Gratis Parkplätze", description: "Kostenlos parken im B8 Center" }
  ],
  
  // Menü-Kategorien und Items
  // TODO: Echte Preise und Beschreibungen einfügen
  menuCategories: [
    {
      id: "doener",
      name: "Döner",
      items: [
        { id: "d1", name: "Döner Kebab", description: "Klassischer Döner mit frischem Salat, Tomaten, Zwiebeln und Sauce nach Wahl", price: "6,50 €", bestseller: true },
        { id: "d2", name: "Döner Box", description: "Döner-Fleisch mit Pommes in der Box, dazu Salat und Sauce", price: "8,50 €", bestseller: false },
        { id: "d3", name: "Döner Teller", description: "Döner-Fleisch mit Reis oder Pommes, Salat und Sauce", price: "10,90 €", bestseller: false },
        { id: "d4", name: "Döner Dürum", description: "Döner gerollt im dünnen Fladenbrot mit allem", price: "7,50 €", bestseller: true },
        { id: "d5", name: "Döner XL", description: "Extra großer Döner mit doppelt Fleisch", price: "9,50 €", bestseller: false },
        { id: "d6", name: "Kinder Döner", description: "Kleiner Döner für die Kleinen", price: "4,50 €", bestseller: false }
      ]
    },
    {
      id: "burger",
      name: "Burger",
      items: [
        { id: "b1", name: "Classic Burger", description: "Saftiges Rindfleisch-Patty mit Salat, Tomate, Gurke und Hausdressing", price: "7,90 €", bestseller: true },
        { id: "b2", name: "Cheese Burger", description: "Mit extra Käse und karamellisierten Zwiebeln", price: "8,90 €", bestseller: false },
        { id: "b3", name: "Chicken Burger", description: "Knuspriges Hähnchen-Filet mit Salat und Mayo", price: "8,50 €", bestseller: false },
        { id: "b4", name: "Deluxe Burger", description: "Doppelt Fleisch, Bacon, Käse und alle Toppings", price: "11,90 €", bestseller: false }
      ]
    },
    {
      id: "wraps",
      name: "Wraps",
      items: [
        { id: "w1", name: "Chicken Wrap", description: "Gegrilltes Hähnchen mit frischem Salat und Joghurt-Sauce", price: "7,50 €", bestseller: false },
        { id: "w2", name: "Döner Wrap", description: "Döner-Fleisch gerollt im Wrap mit allem", price: "7,50 €", bestseller: false },
        { id: "w3", name: "Falafel Wrap", description: "Knusprige Falafel mit Hummus und Salat", price: "6,90 €", bestseller: false },
        { id: "w4", name: "Halloumi Wrap", description: "Gegrillter Halloumi mit Gemüse und Minz-Sauce", price: "7,90 €", bestseller: false }
      ]
    },
    {
      id: "bowls",
      name: "Bowls",
      items: [
        { id: "bo1", name: "Döner Bowl", description: "Döner-Fleisch auf Reis mit Salat, Hummus und Sauce", price: "10,90 €", bestseller: false },
        { id: "bo2", name: "Chicken Bowl", description: "Gegrilltes Hähnchen mit Quinoa, Gemüse und Tahini", price: "11,50 €", bestseller: false },
        { id: "bo3", name: "Falafel Bowl", description: "Falafel auf Salat mit Hummus, Gemüse und Dressing", price: "9,90 €", bestseller: false },
        { id: "bo4", name: "Mixed Bowl", description: "Döner & Hähnchen mit Reis und allen Toppings", price: "12,90 €", bestseller: false }
      ]
    },
    {
      id: "vegetarisch",
      name: "Vegetarisch",
      items: [
        { id: "v1", name: "Falafel Tasche", description: "Knusprige Falafel im Fladenbrot mit Salat und Hummus", price: "6,50 €", bestseller: false },
        { id: "v2", name: "Halloumi Tasche", description: "Gegrillter Halloumi mit frischem Salat", price: "7,50 €", bestseller: false },
        { id: "v3", name: "Veggie Burger", description: "Hausgemachtes Gemüse-Patty mit allen Toppings", price: "8,50 €", bestseller: false },
        { id: "v4", name: "Gemüse Teller", description: "Gegrilltes Gemüse mit Reis, Salat und Dips", price: "9,90 €", bestseller: false }
      ]
    },
    {
      id: "getraenke",
      name: "Getränke",
      items: [
        { id: "g1", name: "Ayran", description: "Erfrischendes Joghurt-Getränk", price: "2,50 €", bestseller: false },
        { id: "g2", name: "Cola / Fanta / Sprite", description: "0,33l Dose", price: "2,00 €", bestseller: false },
        { id: "g3", name: "Wasser", description: "Still oder mit Kohlensäure, 0,5l", price: "2,00 €", bestseller: false },
        { id: "g4", name: "Türkischer Tee", description: "Traditioneller schwarzer Tee", price: "2,50 €", bestseller: false }
      ]
    }
  ]
};

// Hilfsfunktion: Alle Bestseller
export const getBestsellers = () => {
  const items = [];
  restaurant.menuCategories.forEach(category => {
    category.items.forEach(item => {
      if (item.bestseller) {
        items.push({ ...item, category: category.name });
      }
    });
  });
  return items;
};

// Hilfsfunktion: Alle Menü-Items flach
export const getAllMenuItems = () => {
  const items = [];
  restaurant.menuCategories.forEach(category => {
    category.items.forEach(item => {
      items.push({ ...item, category: category.name, categoryId: category.id });
    });
  });
  return items;
};
