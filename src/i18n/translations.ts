export type Lang = "en" | "fr";

const en = {
  meta: {
    title: "Terra Padel Club — Indoor Padel, Paris 11e",
    description:
      "Terra Padel Club — twelve panoramic indoor padel courts on terracotta turf in Paris 11e. Open 06:00 to midnight. Book a court in seconds.",
  },

  nav: {
    courts: "Courts",
    club: "Club",
    membership: "Membership",
    community: "Community",
    book: "Book a court",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    imgAlt:
      "Two players sharing a laugh across the net on a terracotta indoor padel court",
    liveBadge: "Courts open now",
    location: "Indoor Padel Club · Paris 11e",
    title: ["Meet you", "at the net."],
    paragraph:
      "Twelve panoramic courts on terracotta turf, open from six till midnight. Come for the rally, stay for the company.",
    book: "Book a court",
    watchFilm: "Watch the film",
    scroll: "Scroll",
    statCourts: "12 panoramic courts",
    statHours: "06:00 — 00:00 · 7/7",
    address: "48 rue de la Roquette",
  },

  marquee: [
    "Terra Padel Club",
    "Paris 11e",
    "12 panoramic courts",
    "Open 06:00 → 00:00",
    "Coaching",
    "Leagues & Americanos",
    "Café · Lounge · Pro shop",
  ],

  manifesto: {
    index: "01",
    eyebrow: "The club",
    heading: ["The best room", "in Paris to", "play it in."],
    p1: "Padel is the fastest-growing sport on the planet, and it deserved a better hall. So we took a 4,000 m² steel warehouse in the 11e, poured terracotta turf that plays fast and true, and hung lights calibrated so you never lose the ball against the roof.",
    p2: "Twelve panoramic courts. A bar where the third set gets replayed point by point. And a crowd that shows up for the rally as much as for the company.",
    tour: "Tour the courts",
    figcaption: "Court 07 · Terracotta monofilament",
    statCourts: "Panoramic courts",
    statMembers: "Active members",
    statHours: "Open daily",
    statRating: "Google rating",
  },

  courts: {
    index: "02",
    eyebrow: "The courts",
    heading: ["Built for", "the rally."],
    paragraph:
      "Twelve identical courts under one roof, so the only variable on the night is you. No wind, no dew, no dodgy bounce off a panel.",
    cards: [
      {
        spec: "20 × 10 m · 6 m clearance",
        title: "Panoramic courts",
        body: "Full-glass backs and tournament-grade dimensions. Every court in the hall is a centre court.",
        alt: "Empty panoramic padel court with terracotta turf and glass back wall",
      },
      {
        spec: "Monofilament · silica infill",
        title: "Terracotta turf",
        body: "Fast, true and forgiving on the knees. Re-brushed every morning before the first serve.",
        alt: "Close-up of sneakers on terracotta turf beside a white court line",
      },
      {
        spec: "800 lux · zero glare",
        title: "Night sessions",
        body: "LED rigs tuned for the lob. Book until midnight, seven days a week.",
        alt: "Padel player mid-smash under bright floodlights",
      },
    ],
    specs: [
      ["Surface", "Mondo Supercourt XN"],
      ["Glass", "12 mm tempered · anti-glare"],
      ["Climate", "18 – 21 °C, year-round"],
      ["Rackets", "Free demo fleet on every court"],
    ] as [string, string][],
  },

  experience: {
    index: "03",
    eyebrow: "Beyond the court",
    heading: ["More than", "a game."],
    items: [
      {
        title: "Coaching",
        meta: "Private · Duo · Group of 4",
        body: "FFT-certified coaches for every level — from your first bandeja to a tournament-ready víbora. Video analysis on request.",
        alt: "Coach demonstrating a volley grip to two players",
      },
      {
        title: "Leagues & Americanos",
        meta: "Tue · Thu · Sun nights",
        body: "Rotating-partner Americanos three nights a week, a seasonal ladder, and a monthly open with a proper trophy.",
        alt: "Four friends fist-bumping at the net after a match",
      },
      {
        title: "Café & Lounge",
        meta: "Specialty coffee · Small plates",
        body: "Flat whites before the 07:00 slot, cold brews after the 22:00 one. A mezzanine overlooking court one for the third-set post-mortem.",
        alt: "Minimal club lounge with a window onto the court",
      },
      {
        title: "Pro shop",
        meta: "Demo · Restring · Regrip",
        body: "Try any racket from the demo wall for free during your session. Same-day restringing and overgrips at the desk.",
        alt: "Padel racket and ball on terracotta turf",
      },
    ],
  },

  membership: {
    index: "04",
    eyebrow: "Membership",
    heading: ["Pick your", "pace."],
    paragraph:
      "No joining fee, no lock-in. Pause any month you're travelling. Annual plans save two months.",
    monthly: "Monthly",
    annual: "Annual",
    popular: "Most popular",
    billedSave: "Billed annually · save €{amount}",
    tiers: [
      {
        name: "Drop-in",
        tagline: "Pay as you play.",
        unit: "per player · 90 min",
        features: [
          "Online booking, 7 days ahead",
          "Demo racket included",
          "Lockers & showers",
          "Ball tubes at cost",
        ],
        cta: "Book a session",
      },
      {
        name: "Member",
        tagline: "For the twice-a-week crowd.",
        unit: "per month",
        features: [
          "25% off every court fee",
          "Priority booking, 14 days ahead",
          "Free Americano nights",
          "2 guest passes a month",
          "Members' WhatsApp for last-minute pairs",
        ],
        cta: "Become a member",
      },
      {
        name: "Club",
        tagline: "Unlimited off-peak play.",
        unit: "per month",
        features: [
          "Unlimited off-peak courts",
          "40% off peak-hour courts",
          "Monthly coaching clinic",
          "Lounge membership & 10% at the bar",
          "Free restringing, twice a year",
        ],
        cta: "Join the club",
      },
    ],
  },

  community: {
    index: "05",
    eyebrow: "Community",
    heading: ["Come for the rally.", "Stay for the", "company."],
    captions: [
      "Sunday Americano · Court 01",
      "Match point banter",
      "Wednesday clinic",
      "Late session · 23:00",
    ],
    tileAlts: [
      "Four friends fist-bumping across the net",
      "Two players at the net",
      "Coaching session on court",
      "Overhead smash under floodlights",
    ],
    onTikTok: "On TikTok",
    handle: "@dadju_sn",
    tiktokBody:
      "The rallies, the bloopers, and the third-set drama — filmed courtside, posted the same night.",
    follow: "Follow the club",
    quotes: [
      {
        text: "The fastest turf I've played on in Paris. And the coffee's better than my local.",
        name: "Inès M.",
        meta: "Member since 2024",
      },
      {
        text: "Turned up alone for a Tuesday Americano, left with a doubles partner and a group chat.",
        name: "Karim B.",
        meta: "Club member",
      },
      {
        text: "Court 7 at 23:00 on a weeknight is cheaper than therapy and works better.",
        name: "Léa D.",
        meta: "Drop-in regular",
      },
    ],
  },

  booking: {
    index: "06",
    eyebrow: "Book a court",
    heading: ["Your court", "is waiting."],
    paragraph:
      "Ninety-minute slots, rackets included. Cancel free up to 12 hours before. Pay at the desk or in the app.",
    stepDate: "1 · Date",
    stepTime: "2 · Time",
    stepPlayers: "3 · Players",
    peak: "Peak · €{price}",
    offPeak: "Off-peak · €{price}",
    today: "Today",
    singles: "Singles",
    doubles: "Doubles",
    playersLabel: "{n} players",
    yourSession: "Your session",
    date: "Date",
    time: "Time",
    timeValue: "{time} · 90 min",
    pickSlot: "Pick a slot",
    court: "Court",
    courtValue: "Panoramic · auto-assigned",
    priceLine: "{players} × €{unit}",
    peakTag: "peak",
    confirm: "Confirm booking",
    confirmedTitle: "Court held for 15 minutes",
    confirmedBody: "Reference {ref}. We've sent the details — see you at the net.",
    finePrint: "Free cancellation until 12 h before · Rackets included",
  },

  footer: {
    blurb:
      "Twelve panoramic padel courts on terracotta turf, under one steel roof in the 11e. Open 06:00 to midnight, seven days a week.",
    visit: "Visit",
    hours: "Hours",
    explore: "Explore",
    emailLabel: "Email address",
    newsletter: "Court drops",
    newsletterBody:
      "Last-minute slots, Americano sign-ups and the odd pro exhibition. One email a week, no more.",
    placeholder: "you@email.com",
    subscribed: "You're on the list. See you courtside.",
    weekdays: "Mon – Fri",
    saturday: "Saturday",
    sunday: "Sunday",
    cafe: "Café from 07:00",
    copyright: "© {year} Terra Padel Club. All rights reserved.",
    photoCredit: "Photography courtesy of",
    privacy: "Privacy",
    terms: "Terms",
    houseRules: "House rules",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  meta: {
    title: "Terra Padel Club — Padel indoor, Paris 11e",
    description:
      "Terra Padel Club — douze courts de padel panoramiques en intérieur sur gazon terracotta à Paris 11e. Ouvert de 6 h à minuit. Réservez un court en quelques secondes.",
  },

  nav: {
    courts: "Terrains",
    club: "Le club",
    membership: "Abonnements",
    community: "Communauté",
    book: "Réserver",
    skip: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  hero: {
    imgAlt:
      "Deux joueurs rient ensemble de part et d'autre du filet sur un court de padel indoor en gazon terracotta",
    liveBadge: "Courts ouverts",
    location: "Club de padel indoor · Paris 11e",
    title: ["Rendez-vous", "au filet."],
    paragraph:
      "Douze courts panoramiques sur gazon terracotta, ouverts de six heures à minuit. Venez pour l'échange, restez pour l'ambiance.",
    book: "Réserver un court",
    watchFilm: "Voir le film",
    scroll: "Défiler",
    statCourts: "12 courts panoramiques",
    statHours: "06:00 — 00:00 · 7j/7",
    address: "48 rue de la Roquette",
  },

  marquee: [
    "Terra Padel Club",
    "Paris 11e",
    "12 courts panoramiques",
    "Ouvert 06:00 → 00:00",
    "Coaching",
    "Tournois & Americanos",
    "Café · Lounge · Pro-shop",
  ],

  manifesto: {
    index: "01",
    eyebrow: "Le club",
    heading: ["La plus belle", "salle de Paris", "pour jouer."],
    p1: "Le padel est le sport qui progresse le plus vite au monde, et il méritait une meilleure salle. Nous avons donc pris un hangar en acier de 4 000 m² dans le 11e, posé un gazon terracotta rapide et régulier, et réglé l'éclairage pour ne jamais perdre la balle contre le toit.",
    p2: "Douze courts panoramiques. Un bar où l'on rejoue le troisième set point par point. Et un public qui vient autant pour l'échange que pour la compagnie.",
    tour: "Visiter les courts",
    figcaption: "Court 07 · Gazon monofilament terracotta",
    statCourts: "Courts panoramiques",
    statMembers: "Membres actifs",
    statHours: "Ouvert chaque jour",
    statRating: "Note Google",
  },

  courts: {
    index: "02",
    eyebrow: "Les courts",
    heading: ["Pensés pour", "l'échange."],
    paragraph:
      "Douze courts identiques sous un même toit : la seule variable de la soirée, c'est vous. Pas de vent, pas de rosée, pas de mauvais rebond sur une vitre.",
    cards: [
      {
        spec: "20 × 10 m · 6 m de hauteur",
        title: "Courts panoramiques",
        body: "Fonds entièrement vitrés et dimensions de tournoi. Chaque court de la salle est un court central.",
        alt: "Court de padel panoramique vide avec gazon terracotta et fond vitré",
      },
      {
        spec: "Monofilament · remplissage silice",
        title: "Gazon terracotta",
        body: "Rapide, fiable et doux pour les genoux. Rebrossé chaque matin avant le premier service.",
        alt: "Gros plan sur des baskets posées sur le gazon terracotta près d'une ligne blanche",
      },
      {
        spec: "800 lux · zéro éblouissement",
        title: "Sessions de nuit",
        body: "Un éclairage LED réglé pour les lobes. Réservez jusqu'à minuit, sept jours sur sept.",
        alt: "Joueur de padel en plein smash sous les projecteurs",
      },
    ],
    specs: [
      ["Surface", "Mondo Supercourt XN"],
      ["Vitrines", "Verre trempé 12 mm · anti-éblouissement"],
      ["Température", "18 – 21 °C, toute l'année"],
      ["Raquettes", "Flotte de démonstration incluse"],
    ],
  },

  experience: {
    index: "03",
    eyebrow: "Au-delà du court",
    heading: ["Plus qu'un", "jeu."],
    items: [
      {
        title: "Coaching",
        meta: "Particulier · Duo · Groupe de 4",
        body: "Des coachs diplômés FFT pour tous les niveaux — de la première bandeja à une víbora de tournoi. Analyse vidéo sur demande.",
        alt: "Un coach montre la prise de raquette à deux joueurs",
      },
      {
        title: "Tournois & Americanos",
        meta: "Mar · Jeu · Dim soirs",
        body: "Des Americanos à rotation trois soirs par semaine, un classement par saison et un open mensuel avec un vrai trophée.",
        alt: "Quatre amis se checkent au filet après un match",
      },
      {
        title: "Café & Lounge",
        meta: "Café de spécialité · assiettes",
        body: "Des flat whites avant le créneau de 7 h, des cafés glacés après celui de 22 h. Une mezzanine surplombant le court 1 pour le débrief du troisième set.",
        alt: "Lounge minimaliste du club avec vue sur le court",
      },
      {
        title: "Pro-shop",
        meta: "Test · Cordage · surgrips",
        body: "Testez gratuitement n'importe quelle raquette du mur de démo pendant votre session. Cordage le jour même et surgrips à l'accueil.",
        alt: "Raquette de padel et balle sur le gazon terracotta",
      },
    ],
  },

  membership: {
    index: "04",
    eyebrow: "Abonnements",
    heading: ["Choisissez", "votre rythme."],
    paragraph:
      "Pas de frais d'inscription, aucun engagement. Mettez en pause dès que vous voyagez. Les formules annuelles équivalent à deux mois offerts.",
    monthly: "Mensuel",
    annual: "Annuel",
    popular: "Le plus populaire",
    billedSave: "Facturé annuellement · {amount} € d'économie",
    tiers: [
      {
        name: "À la séance",
        tagline: "Payez en jouant.",
        unit: "par joueur · 90 min",
        features: [
          "Réservation en ligne, 7 jours à l'avance",
          "Raquette de démo incluse",
          "Vestiaires & douches",
          "Balles à prix coûtant",
        ],
        cta: "Réserver une séance",
      },
      {
        name: "Membre",
        tagline: "Pour les deux-fois-par-semaine.",
        unit: "par mois",
        features: [
          "−25 % sur chaque réservation",
          "Réservation prioritaire, 14 jours à l'avance",
          "Soirées Americano gratuites",
          "2 invitations par mois",
          "Groupe WhatsApp pour les paires de dernière minute",
        ],
        cta: "Devenir membre",
      },
      {
        name: "Club",
        tagline: "Jeu illimité en heures creuses.",
        unit: "par mois",
        features: [
          "Courts illimités en heures creuses",
          "−40 % en heures pleines",
          "Clinique de coaching mensuelle",
          "Accès lounge & −10 % au bar",
          "Cordage gratuit, deux fois par an",
        ],
        cta: "Rejoindre le club",
      },
    ],
  },

  community: {
    index: "05",
    eyebrow: "Communauté",
    heading: ["Venez pour l'échange.", "Restez pour", "l'ambiance."],
    captions: [
      "Americano du dimanche · Court 01",
      "Chambrage au point de match",
      "Clinique du mercredi",
      "Session tardive · 23 h",
    ],
    tileAlts: [
      "Quatre amis se checkent de part et d'autre du filet",
      "Deux joueurs au filet",
      "Séance de coaching sur le court",
      "Smash en suspension sous les projecteurs",
    ],
    onTikTok: "Sur TikTok",
    handle: "@dadju_sn",
    tiktokBody:
      "Les échanges, les ratés et le drame du troisième set — filmés au bord du court, publiés le soir même.",
    follow: "Suivre le club",
    quotes: [
      {
        text: "Le gazon le plus rapide que j'aie joué à Paris. Et le café est meilleur que celui de mon quartier.",
        name: "Inès M.",
        meta: "Membre depuis 2024",
      },
      {
        text: "Venu seul à un Americano un mardi, reparti avec un partenaire de double et un groupe WhatsApp.",
        name: "Karim B.",
        meta: "Membre Club",
      },
      {
        text: "Le court 7 à 23 h en semaine coûte moins cher qu'une thérapie, et ça marche mieux.",
        name: "Léa D.",
        meta: "Adepte de la séance",
      },
    ],
  },

  booking: {
    index: "06",
    eyebrow: "Réserver un court",
    heading: ["Votre court", "vous attend."],
    paragraph:
      "Créneaux de 90 minutes, raquettes incluses. Annulation gratuite jusqu'à 12 h avant. Paiement à l'accueil ou dans l'appli.",
    stepDate: "1 · Date",
    stepTime: "2 · Heure",
    stepPlayers: "3 · Joueurs",
    peak: "Heures pleines · {price} €",
    offPeak: "Heures creuses · {price} €",
    today: "Aujourd'hui",
    singles: "Simple",
    doubles: "Double",
    playersLabel: "{n} joueurs",
    yourSession: "Votre session",
    date: "Date",
    time: "Heure",
    timeValue: "{time} · 90 min",
    pickSlot: "Choisissez un créneau",
    court: "Court",
    courtValue: "Panoramique · attribué automatiquement",
    priceLine: "{players} × {unit} €",
    peakTag: "heures pleines",
    confirm: "Confirmer la réservation",
    confirmedTitle: "Court réservé pendant 15 minutes",
    confirmedBody: "Référence {ref}. Les détails vous ont été envoyés — à tout de suite au filet.",
    finePrint: "Annulation gratuite jusqu'à 12 h avant · Raquettes incluses",
  },

  footer: {
    blurb:
      "Douze courts de padel panoramiques sur gazon terracotta, sous un même toit en acier dans le 11e. Ouverts de 6 h à minuit, sept jours sur sept.",
    visit: "Accès",
    hours: "Horaires",
    explore: "Explorer",
    emailLabel: "Adresse e-mail",
    newsletter: "Infos courts",
    newsletterBody:
      "Créneaux de dernière minute, inscriptions aux Americanos et quelques exhibitions de pros. Un e-mail par semaine, pas plus.",
    placeholder: "vous@email.com",
    subscribed: "C'est fait. À bientôt au bord du court.",
    weekdays: "Lun – Ven",
    saturday: "Samedi",
    sunday: "Dimanche",
    cafe: "Café dès 7 h",
    copyright: "© {year} Terra Padel Club. Tous droits réservés.",
    photoCredit: "Photographie gracieuseté de",
    privacy: "Confidentialité",
    terms: "Mentions légales",
    houseRules: "Règlement intérieur",
  },
};

export const translations: Record<Lang, Dict> = { en, fr };
