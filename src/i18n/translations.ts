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
    eyebrow: "Membership & Packs",
    heading: ["Pick your", "rhythm."],
    paragraph:
      "Sustainable club pricing. No hidden fees, no predatory contracts. Priority booking window and reduced green fees rather than overcrowded unlimited passes.",
    monthly: "Monthly",
    annual: "Annual",
    popular: "Most balanced",
    billedSave: "Billed annually · save €{amount}",
    tiers: [
      {
        name: "Drop-in & Packs",
        tagline: "Pay as you play, or 10-session pack.",
        unit: "per player · 90 min",
        features: [
          "Standard booking 7 days ahead",
          "Demo racket included with every session",
          "Full access to lockers & sauna",
          "Optional 10-session pack (1 free session)",
        ],
        cta: "Book a court",
      },
      {
        name: "Priority Member",
        tagline: "For the weekly competitive players.",
        unit: "per month",
        features: [
          "30% off all court fees (peak & off-peak)",
          "14-day priority booking window",
          "2 guest passes per month",
          "Guaranteed locker & private lounge access",
          "Free Americano tournament nights",
        ],
        cta: "Join Priority",
      },
      {
        name: "Club Gold",
        tagline: "Advanced player perks & pro coaching.",
        unit: "per month",
        features: [
          "50% off off-peak & 30% off peak slots",
          "21-day advance reservation priority",
          "Monthly 1-on-1 coaching clinic",
          "Free racket restringing twice a year",
          "+15% bonus on all wallet credit top-ups",
        ],
        cta: "Join Club Gold",
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
      "Ninety-minute slots, demo rackets included. Split payments among 4 players with deposit protection. Free cancellation up to 24 hours prior.",
    stepDate: "1 · Date",
    stepTime: "2 · Time",
    stepPlayers: "3 · Players & Format",
    stepPayment: "4 · Payment & Split",
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
    payModeSingle: "Single Payment",
    payModeSingleDesc: "Pay the full court cost upfront (€{total})",
    payModeSplit: "Split Pay (4 Players)",
    payModeSplitDesc: "Pay your €{unit} share now + invite 3 teammates via link",
    payModeWallet: "Member Credits",
    payModeWalletDesc: "Use your club wallet balance (1 credit/player)",
    teammatesHeading: "Teammate Invites (Split Pay)",
    teammatePlaceholder: "Player {n} (Email or WhatsApp #)",
    confirm: "Confirm & Hold Court",
    confirmDeposit: "Confirm & Pay Deposit (€{amount})",
    confirmedTitle: "Court held & secured",
    confirmedBody: "Booking reference {ref}. A confirmation and payment links have been generated.",
    sharePrompt: "Share this link with your 3 teammates to complete their €{unit} share:",
    copyLink: "Copy invite link",
    copied: "Link copied to clipboard!",
    finePrint: "Free cancellation until 24 h before · Deposit secured · Rackets included",
    legalNotice: "By confirming, you agree to the Club CGV, Refund Policy & House Rules.",
  },

  legal: {
    title: "Club Policies & Legal Information",
    subtitle: "Terra Padel Club · Paris 11e · Terms of Service, Refund Policy & Privacy",
    tabs: {
      cgv: "Terms of Service (CGV)",
      refund: "Cancellation & Refund",
      privacy: "Privacy & GDPR",
      rules: "House Rules",
    },
    close: "Close",
    cgvContent: [
      {
        title: "1. Scope & Court Bookings",
        body: "Terra Padel Club offers 12 indoor panoramic padel courts on premium terracotta turf. Each booking covers a duration of 90 minutes. Priority booking windows are strictly enforced according to user status (7 days for Guest/Drop-in, 14 days for Priority Members, 21 days for Club Gold).",
      },
      {
        title: "2. Pricing & Split Payment",
        body: "Court tariffs depend on whether the slot is Peak or Off-Peak. With Split Pay, the booking initiator covers their individual share as a deposit holding the court for 2 hours while teammates settle their balance online. If unfilled before match time, the host is debited for the remaining balance.",
      },
      {
        title: "3. Memberships & Sustainable Economics",
        body: "Memberships provide guaranteed discounts on court hourly green fees and booking priority. To preserve court availability and prevent no-show congestion, unlimited unmetered court access is excluded.",
      },
    ],
    refundContent: [
      {
        title: "1. 24-Hour Free Cancellation",
        body: "Bookings may be modified or cancelled free of charge up to 24 hours prior to the scheduled start time. 100% of paid amounts or deposits are refunded instantly to the original payment method.",
      },
      {
        title: "2. Late Cancellations (<24 Hours)",
        body: "Cancellations made less than 24 hours prior to the slot result in forfeiture of the deposit/court fee to compensate for court immobilization, unless the slot is successfully re-booked by another player.",
      },
      {
        title: "3. Anti-No-Show Policy",
        body: "Unexcused no-shows undermine court access for the entire community. Member accounts with 2 or more no-shows within 60 days forfeit priority booking privileges for 30 days.",
      },
    ],
    privacyContent: [
      {
        title: "1. Data Collection & Purpose",
        body: "Terra Padel collects necessary contact details (name, email, phone) solely to operate court reservations, manage split payment invitations, and notify players of schedule updates.",
      },
      {
        title: "2. Payment Security",
        body: "Financial transactions are processed via bank-grade tokenized gateways (PCI-DSS Level 1). No unencrypted credit card details are ever stored on club servers.",
      },
      {
        title: "3. Your Rights (GDPR)",
        body: "You retain full rights to access, rectify, or request deletion of your personal data at any time by contacting dpo@terrapadel.fr.",
      },
    ],
    rulesContent: [
      {
        title: "1. Footwear & Equipment",
        body: "Non-marking padel or tennis clay-court shoes are strictly required on the terracotta turf. Outdoor running shoes or black-marking soles are prohibited.",
      },
      {
        title: "2. Glass Walls & Safety",
        body: "Players must wear safety wrist straps on all rackets during play. Slamming into glass panels or hanging from the net is strictly forbidden.",
      },
      {
        title: "3. Punctuality & Demo Rackets",
        body: "Sessions terminate precisely at the 90-minute mark to respect subsequent players. Complimentary demo rackets must be returned intact to the pro-shop reception immediately after play.",
      },
    ],
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
    eyebrow: "Abonnements & Packs",
    heading: ["Choisissez", "votre rythme."],
    paragraph:
      "Une grille tarifaire pérenne et transparente. Pas de formules illimitées saturant les pistes, mais un accès prioritaire garanti et des green-fees fortement réduits.",
    monthly: "Mensuel",
    annual: "Annuel",
    popular: "Le plus équilibré",
    billedSave: "Facturé annuellement · {amount} € d'économie",
    tiers: [
      {
        name: "À la séance & Packs",
        tagline: "Payez en jouant ou pack 10 sessions.",
        unit: "par joueur · 90 min",
        features: [
          "Réservation en ligne standard, 7 jours à l'avance",
          "Raquette de test incluse à chaque séance",
          "Accès libre vestiaires, douches & sauna",
          "Pack 10 sessions disponible (1 séance offerte)",
        ],
        cta: "Réserver une séance",
      },
      {
        name: "Membre Prioritaire",
        tagline: "Pour les joueurs réguliers et compétiteurs.",
        unit: "par mois",
        features: [
          "−30 % sur chaque réservation (pleines & creuses)",
          "Fenêtre de réservation prioritaire de 14 jours",
          "2 invitations d'invités offertes par mois",
          "Casier réservé & accès au lounge privé",
          "Soirées Americano & tournois gratuites",
        ],
        cta: "Devenir Membre",
      },
      {
        name: "Club Gold",
        tagline: "Avantages tournois & coaching d'élite.",
        unit: "par mois",
        features: [
          "−50 % en heures creuses et −30 % en heures pleines",
          "Priorité de réservation maximale, 21 jours d'avance",
          "Clinique mensuelle individuelle avec coach pro",
          "Cordage gratuit deux fois par an",
          "+15 % de bonus sur toutes vos recharges crédits",
        ],
        cta: "Rejoindre le Club Gold",
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
      "Créneaux de 90 minutes, raquettes de démo incluses. Partage de note à 4 (Split Pay) avec acompte de garantie. Annulation gratuite jusqu'à 24 h avant.",
    stepDate: "1 · Date",
    stepTime: "2 · Heure",
    stepPlayers: "3 · Joueurs & Format",
    stepPayment: "4 · Paiement & Split",
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
    payModeSingle: "Paiement Intégral",
    payModeSingleDesc: "Réglez l'intégralité du court en une fois ({total} €)",
    payModeSplit: "Split Pay (Partage à 4)",
    payModeSplitDesc: "Payez votre part ({unit} €) maintenant + liens d'invitation pour vos 3 coéquipiers",
    payModeWallet: "Crédits Membre",
    payModeWalletDesc: "Débitez votre solde de crédits club (1 crédit/joueur)",
    teammatesHeading: "Invitations Coéquipiers (Split Pay)",
    teammatePlaceholder: "Joueur {n} (Email ou N° WhatsApp)",
    confirm: "Confirmer & Bloquer le court",
    confirmDeposit: "Confirmer & Payer l'Acompte ({amount} €)",
    confirmedTitle: "Court bloqué & sécurisé",
    confirmedBody: "Référence de réservation {ref}. Votre confirmation et vos liens de paiement ont été générés.",
    sharePrompt: "Transmettez ce lien à vos 3 coéquipiers pour qu'ils règlent leur part de {unit} € :",
    copyLink: "Copier le lien de paiement",
    copied: "Lien copié dans le presse-papier !",
    finePrint: "Annulation sans frais jusqu'à 24 h avant · Acompte sécurisé · Raquettes incluses",
    legalNotice: "En confirmant, vous acceptez les CGV du club, la politique d'annulation & le règlement intérieur.",
  },

  legal: {
    title: "Politiques du Club & Mentions Légales",
    subtitle: "Terra Padel Club · Paris 11e · Conditions Générales, Politique de Remboursement & RGPD",
    tabs: {
      cgv: "Conditions Générales (CGV)",
      refund: "Annulation & Remboursement",
      privacy: "Confidentialité & RGPD",
      rules: "Règlement Intérieur",
    },
    close: "Fermer",
    cgvContent: [
      {
        title: "1. Objet & Réservation des Pistes",
        body: "Terra Padel Club exploite 12 courts de padel panoramiques couverts sur gazon terracotta. Les réservations sont conclues pour des sessions fermes de 90 minutes. Les fenêtres de réservation prioritaire sont strictement attribuées selon le statut de l'usager (7 jours pour les visiteurs, 14 jours pour les Membres Prioritaires, 21 jours pour le Club Gold).",
      },
      {
        title: "2. Tarification & Option Split Pay (Partage de note)",
        body: "Les tarifs sont fixés en fonction de la période (Heures Creuses ou Heures Pleines). Avec l'option Split Pay, le titulaire bloque la piste en réglant sa part individuelle qui sert d'acompte de garantie. Les coéquipiers disposent d'un délai de 2 heures pour régler leur part. Les parts non soldées à l'heure du match sont automatiquement prélevées sur le moyen de paiement du titulaire.",
      },
      {
        title: "3. Modèle d'Adhésion & Responsabilité Économique",
        body: "Les abonnements accordent des réductions garanties sur les green-fees horaires et la priorité de réservation. Afin d'éviter la saturation des créneaux de pointe et de garantir une rotation équitable pour tous les pratiquants, aucune formule d'accès illimité sans quote-part n'est délivrée.",
      },
    ],
    refundContent: [
      {
        title: "1. Annulation Gratuite à H-24",
        body: "Toute réservation peut être annulée ou reprogrammée sans aucun frais jusqu'à 24 heures avant l'heure de début du créneau. Le remboursement intégral (100% des sommes ou de l'acompte) est crédité instantanément sur le moyen de paiement d'origine.",
      },
      {
        title: "2. Annulations Tardives (< 24 Heures)",
        body: "En cas d'annulation intervenant moins de 24 heures avant la session, l'acompte ou le montant payé est conservé à titre d'indemnité d'immobilisation de la piste, sauf si le créneau est racheté par un autre groupe sur la liste d'attente.",
      },
      {
        title: "3. Lutte contre les No-Shows",
        body: "La non-présentation sans préavis pénalise l'ensemble de la communauté sportive. En cas de 2 no-shows constatés sur une période de 60 jours, le compte membre perd temporairement ses droits de réservation prioritaire pour une durée de 30 jours.",
      },
    ],
    privacyContent: [
      {
        title: "1. Collecte des Données Personnelles",
        body: "Terra Padel collecte uniquement les données strictement nécessaires au bon fonctionnement du service (nom, prénom, e-mail, téléphone) afin de gérer l'accès aux pistes, la génération des liens de split payment et les alertes d'organisation de match.",
      },
      {
        title: "2. Sécurité des Paiements",
        body: "Toutes les transactions bancaires sont chiffrées selon les standards bancaires les plus stricts (certifiés PCI-DSS Niveau 1). Aucune donnée de carte bancaire en clair n'est stockée sur nos serveurs.",
      },
      {
        title: "3. Vos Droits (RGPD)",
        body: "Conformément à la réglementation européenne et aux recommandations de la CNIL, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données personnelles sur simple demande adressée à rgpd@terrapadel.fr.",
      },
    ],
    rulesContent: [
      {
        title: "1. Chaussures & Matériel Requis",
        body: "Le port de chaussures spécifiques padel ou terre battue (semelles non marquantes) est strictement obligatoire sur le gazon synthétique terracotta. Les chaussures à crampons d'extérieur ou à semelles noires rigides sont formellement interdites.",
      },
      {
        title: "2. Sécurité sur les Parois Vitrées",
        body: "Les dragonnes des raquettes doivent impérativement être fixées au poignet pendant le jeu. Il est formellement interdit de se jeter volontairement contre les vitres panoramiques ou de s'agripper au filet.",
      },
      {
        title: "3. Ponctualité & Restitution du Matériel",
        body: "Les parties se terminent à la 90e minute précise afin de respecter les joueurs du créneau suivant. Les raquettes de test de la zone démo doivent être restituées nettoyées au pro-shop dès la sortie de piste.",
      },
    ],
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
