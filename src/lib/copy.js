// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Iztoчник celotnega vidnega besedila za pristajalno stran.
// Doc §7: Nobenega hardkodinga v komponentah. Če je na zaslonu, je tukaj.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Layout.astro bere to) ──────────────────────────────────
  metadata: {
    lang: 'sl',
    title: '500 receptov za vrhunske koktajle doma',
    description:
      'Recepti za koktajle, ustvarjeni za prave zabave — preproste sestavine in hitra priprava. Navduši prijatelje, prihrani pri dragih barih in postani zvezda večera. Vključeni tudi ekskluzivni bonusi.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'SVET KOKTAJLOV',
  },

  // ── 1. TIMER STICKY GLAVA ───────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Ponudba poteče čez:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ────────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Ekskluzivna ponudba',
    titleHighlight: '500 receptov za vrhunske koktajle',
    titleConnector: 'za tvoj',
    titleHighlightGreen: 'popoln užitek',
    titleEnd: 'Tudi če si popoln začetnik',
    deliveryLabel: 'Takojšen dostop preko',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'E-pošte', kind: 'email' },
    ],
    videoAlt: 'Predstavitev paketa 500 receptov za domače koktajle',
    ctaLabel: '✅ ŽELIM SVOJE RECEPTE ZDAJ',
    ctaSub: '🔒 100% varen nakup • Takojšen dostop',
  },

  // ── 3. PREDNOSTI ───────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Recepti, ustvarjeni za maksimalen užitek — preproste sestavine, hitra priprava,',
    introStrong: 'neverjeten okus in izgled, s katerimi boš navdušil vsakega gosta!',
    items: [
      'Pripraviti vsak koktajl brez predhodnih izkušenj',
      'Ustvarjati čarovnijo brez profesionalne opreme ali drage kuhinje',
      'Uživati v preverjenih receptih z lahko dostopnimi sestavinami',
      'Postati glavna zvezda vsake domače zabave, piknika ali druženja s prijatelji',
    ],
    ctaLabel: '🍹 ŽELIM SVOJE RECEPTE ZDAJ',
  },

  // ── 4. VRTILJAK Z RECEPTI ──────────────────────────────────────────────────
  carousel: {
    title: '🍹 Del receptov, v katerih boš',
    titleHighlight: 'užival s prijatelji!',
    slides: [
      { caption: 'Sladki poljub', alt: 'Koktajl Sladki poljub' },
      {
        caption: 'Špansko vino s pasijonko',
        alt: 'Koktajl Špansko vino s pasijonko',
      },
      { caption: 'Kremni MarakuBeats', alt: 'Koktajl Kremni MarakuBeats' },
      { caption: 'Halls koktajl', alt: 'Koktajl z bonboni Halls' },
      { caption: 'Poletni vetrič', alt: 'Koktajl Poletni vetrič' },
      {
        caption: 'Caipirinha s pasijonko in kavo',
        alt: 'Koktajl Caipirinha s pasijonko in kavo',
      },
    ],
    prevLabel: 'Prejšnja slika',
    nextLabel: 'Naslednja slika',
    dotLabel: 'Pojdi na sliko',
  },

  // ── 5. BONUSI ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 In seveda, čakajo te',
    titleHighlight: 'BONUSI!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 receptov za alkoholne šote in punče',
        description: 'Popolne pijače za zabavo, ki jih pripraviš na hitro in deliš z družbo.',
        alt: '50 receptov za alkoholne šote in punče',
      },
      {
        tag: 'Bonus 2',
        title: 'Pameten nakupovalni seznam — kako prihraniti denar',
        description:
          'Odkrij, katere sestavine točno potrebuješ za vrhunske koktajle, ne da bi zapravil celo premoženje v dragih barih.',
        alt: 'Nakupovalni seznam in kalkulator',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Priročnik: Kako organizirati popoln koktajl večer',
        description: 'Pripravljene ideje in koraki, kako ustvariti nepozabno izkušnjo in osupniti svoje goste.',
        alt: 'Priročnik za domačo zabavo',
      },
      {
        tag: 'Bonus 4',
        title: 'Video lekcija: Kako okrasiti in postreči kot profesionalec',
        description:
          'Spoznaj skrivnosti čudovite prezentacije, ki navadno pijačo spremeni v mojstrovino s petimi zvezdicami.',
        alt: 'Video lekcija za dekoracijo koktajlov',
      },
    ],
  },

  // ── 6. CENE ────────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'cene',
    title: 'Izberi, kako želiš začeti danes:',
    complete: {
      badge: '⭐ Najbolj iskano',
      title: 'Popoln paket: 500+ receptov za koktajle',
      descriptionLead: '500+ receptov za neverjetne domače koktajle + vsi',
      descriptionStrong: 'ekskluzivni bonusi,',
      descriptionTail: 'da postaneš najboljši domači barman.',
      mockupAlt: 'Prikaz Popolnega paketa s 500 recepti',
      includesLabel: '🎁 Vključuje vse bonuse:',
      items: [
        '500+ receptov za vrhunske koktajle',
        'Seznam ugodnih alternativ za drage alkoholne pijače',
        'Priročnik za pametno nakupovanje sestavin',
        'Vodnik za popolno domačo zabavo',
        'Video lekcija za profesionalno dekoracijo',
      ],
      strikePrice: 'Od 29.90 €',
      price: '9.90 €',
      priceNote: 'takojšen dostop',
      ctaLabel: '🛒 ŽELIM POPOLN PAKET',
      footer: '✅ Takojšen dostop · E-pošta + WhatsApp · 14-dnevna garancija',
    },
  },

  // ── 7. GARANCIJA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14-dnevna 100% garancija',
    description:
      'Če iz kakršnega koli razloga ne boš popolnoma navdušen, ti vrnemo denar do zadnjega centa. Brez vprašanj in brez slabe volje.',
  },

  // ── 8. POGOSTA VPRAŠANJA (FAQ) ─────────────────────────────────────────────
  faq: {
    title: 'Pogosta',
    titleHighlight: 'vprašanja:',
    items: [
      {
        q: 'Potrebujem izkušnje, da jih pripravim?',
        a: 'Nikakor! Recepti so razloženi preprosto in jih lahko pripravi vsak, tudi če še nikoli ni zmešal koktajla.',
      },
      {
        q: 'Potrebujem drage shakerje in profesionalno opremo?',
        a: 'Ni potrebe. Vse lahko pripraviš doma z navadnimi pripomočki, ki jih že imaš v kuhinji.',
      },
      {
        q: 'Za kakšne priložnosti so ti koktajli primerni?',
        a: 'Za prav vse! Od sprostitve po težkem delovnem dnevu, romantične večerje, pa vse do nore domače zabave ali piknika.',
      },
      {
        q: 'So sestavine drage?',
        a: 'Ne. Z našim pametnim nakupovalnim seznamom se boš naučil, kako doseči premium okus z ugodnimi izdelki iz bližnje trgovine.',
      },
      {
        q: 'Kako dobim dostop po nakupu?',
        a: 'Dostop je takojšen! Takoj, ko je plačilo uspešno, prejmeš vse direktno na e-pošto in WhatsApp.',
      },
      {
        q: 'Imam kakšno garancijo, če mi ne bodo všeč?',
        a: 'Seveda! Imaš celih 14 dni polne garancije. Če ne boš zadovoljen, ti 100 % povrnemo kupnino.',
      },
    ],
  },

  // ── 9. NUJNOST ─────────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Ne odlašaj — vikend se bliža, z njim pa še en dolgočasen večer. Spremeni to še danes!',
  },

  // ── 10. ZADNJI CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 ŽELIM DOSTOP DO 500 RECEPTOV ZDAJ',
    subText: '🔒 Takojšen dostop • 14-dnevna garancija • Varno plačilo',
  },

  // ── 11. VARNOST (značke) ───────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Zaščita' },
      { icon: '💳', label: 'Varno plačilo' },
      { icon: '📲', label: 'Takojšen dostop' },
    ],
  },

  // ── 12. NOGA (FOOTER) ──────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · SVET KOKTAJLOV · Vse pravice pridržane',
  },

  // ── A11Y / pomožno besedilo ──
  a11y: {
    skipToContent: 'Preskoči na glavno vsebino',
  },
};