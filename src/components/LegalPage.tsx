import { useState, useEffect, useMemo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import {
  FileText,
  RotateCcw,
  ShieldCheck,
  BookOpen,
  Building2,
  Search,
  ArrowLeft,
  Printer,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/utils/cn";

export type LegalDocKey = "cgv" | "refund" | "privacy" | "rules" | "legal-notice";

interface LegalSection {
  id: string;
  article: string;
  title: string;
  body: string[];
  subsections?: { label: string; details: string }[];
  alert?: string;
}

interface LegalDocData {
  key: LegalDocKey;
  slug: string;
  slugs: string[];
  title: string;
  metaTitle: string;
  metaDesc: string;
  badge: string;
  lastUpdated: string;
  icon: React.ElementType;
  sections: LegalSection[];
}

interface LegalPageProps {
  initialDoc?: LegalDocKey;
  onNavigateHome: () => void;
  onNavigateDoc?: (doc: LegalDocKey) => void;
}

export function LegalPage({ initialDoc = "cgv", onNavigateHome, onNavigateDoc }: LegalPageProps) {
  const { lang, setLang } = useI18n();
  const [activeDocKey, setActiveDocKey] = useState<LegalDocKey>(initialDoc);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync state if initialDoc changes
  useEffect(() => {
    setActiveDocKey(initialDoc);
  }, [initialDoc]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeDocKey]);

  const docs = useMemo<Record<LegalDocKey, LegalDocData>>(() => {
    const isFr = lang === "fr";

    return {
      cgv: {
        key: "cgv",
        slug: "cgv",
        slugs: ["cgv", "conditions-generales-de-vente", "terms", "legal/cgv"],
        title: isFr ? "Conditions Générales de Vente (CGV)" : "General Terms of Service (CGV)",
        metaTitle: isFr
          ? "CGV & Réservations — Terra Padel Club Paris 11e"
          : "Terms of Service & Bookings — Terra Padel Club Paris",
        metaDesc: isFr
          ? "Consultez les conditions générales de vente et de réservation de courts de padel au Terra Padel Club (Paris 11e). Tarifs, split payment et règles d'adhésion."
          : "Official terms of service and court booking conditions at Terra Padel Club (Paris 11e). Tariffs, split payments, and membership rules.",
        badge: isFr ? "Contrat d'accès aux pistes" : "Court Access Contract",
        lastUpdated: isFr ? "21 Septembre 2026" : "September 21, 2026",
        icon: FileText,
        sections: isFr
          ? [
              {
                id: "art-1",
                article: "Article 1",
                title: "Objet et Champ d'Application",
                body: [
                  "Les présentes Conditions Générales de Vente (CGV) régissent sans réserve toute réservation de courts, achat de séances, packs de crédits ou souscription d'adhésion auprès de TERRA PADEL CLUB SAS, au capital de 50 000 €, immatriculée au RCS de Paris sous le n° 921 458 712, dont le siège social et l'établissement principal sont situés au 42 Rue du Faubourg Saint-Antoine, 75011 Paris.",
                  "Toute confirmation de réservation sur le site web terrapadel.fr ou sur place implique l'acceptation expresse et sans réserve des présentes CGV ainsi que du Règlement Intérieur du Club.",
                ],
              },
              {
                id: "art-2",
                article: "Article 2",
                title: "Réservation de Courts & Durée des Séances",
                body: [
                  "Terra Padel Club dispose de 12 courts panoramiques couverts de padel sur gazon synthétique terracotta sablé. Les réservations sont strictement conclues pour des créneaux de 90 minutes fermes.",
                  "La libération du court s'effectue précisément à l'heure d'échéance du créneau afin de permettre l'entrée sans délai des pratiquants de la session suivante.",
                ],
                subsections: [
                  {
                    label: "Fenêtres de réservation prioritaire",
                    details:
                      "Visiteurs Grand Public : 7 jours à l'avance. Membres Prioritaires : 14 jours à l'avance. Membres Club Gold : 21 jours à l'avance.",
                  },
                ],
              },
              {
                id: "art-3",
                article: "Article 3",
                title: "Grille Tarifaire, Acomptes & Split Pay (Partage de Note)",
                body: [
                  "Les tarifs horaires sont affichés en Euros TTC. Les créneaux sont catégorisés en Heures Creuses (06h00–17h30 et 22h30–minuit) et Heures Pleines (18h00–22h30). Les raquettes de test et balles de jeu sont mises à disposition gracieusement.",
                  "Option Split Pay (Partage à 4) : Le titulaire qui initialise la réservation règle immédiatement sa part individuelle à titre d'acompte de garantie. Un lien unique de paiement est émis pour ses 3 partenaires, qui disposent d'un délai de 2 heures après la réservation pour solder leur part.",
                ],
                alert:
                  "En cas de part non régularisée à l'heure du match, le solde restant est automatiquement prélevé sur la carte bancaire de garantie du titulaire de la réservation.",
              },
              {
                id: "art-4",
                article: "Article 4",
                title: "Abonnements, Packs & Monnaie Club (Crédits)",
                body: [
                  "Afin de garantir un accès équitable aux 12 pistes et d'éviter la saturation monopolistique des heures de pointe, Terra Padel Club ne propose aucun forfait d'accès illimité sans quote-part.",
                  "Les adhésions mensuelles (« Membre Prioritaire » et « Club Gold ») confèrent une réduction garantie sur le tarif horaire de chaque créneau ainsi qu'une priorité d'accès au planning de réservation.",
                  "Les packs de séances et recharges de portefeuille crédits sont valables 12 mois à compter de leur achat et sont strictement nominatifs.",
                ],
              },
              {
                id: "art-5",
                article: "Article 5",
                title: "Moyens de Paiement & Sécurité",
                body: [
                  "Les règlements s'effectuent par Carte Bancaire (CB, Visa, Mastercard, Apple Pay, Google Pay) via une passerelle de paiement sécurisée et certifiée PCI-DSS Niveau 1 avec protocole 3D-Secure. Aucune coordonnée bancaire n'est conservée en clair par le Club.",
                ],
              },
              {
                id: "art-6",
                article: "Article 6",
                title: "Médiation de la Consommation & Droit Applicable",
                body: [
                  "Conformément à l'article L. 612-1 du Code de la consommation, en cas de litige n'ayant pu être résolu auprès de notre service client, le consommateur peut recourir gratuitement au Médiateur du Tourisme et des Loisirs (MTV) : Médiation Tourisme et Voyage, BP 80303 - 75823 Paris Cedex 17 (www.mtv.travel).",
                  "Les présentes CGV sont soumises au droit français. Tout litige relève de la compétence exclusive des tribunaux de Paris.",
                ],
              },
            ]
          : [
              {
                id: "art-1",
                article: "Article 1",
                title: "Purpose and Scope",
                body: [
                  "These General Terms of Service govern all court bookings, session passes, credit wallet recharges, and membership subscriptions provided by TERRA PADEL CLUB SAS, share capital €50,000, registered with the Paris Trade and Companies Register under no. 921 458 712, 42 Rue du Faubourg Saint-Antoine, 75011 Paris, France.",
                  "Confirming any booking on terrapadel.fr or on-site entails unconditional acceptance of these Terms and the Club House Rules.",
                ],
              },
              {
                id: "art-2",
                article: "Article 2",
                title: "Court Bookings & Session Durations",
                body: [
                  "Terra Padel Club operates 12 indoor panoramic padel courts on premium sand-dressed terracotta turf. Sessions are strictly 90-minute blocks.",
                  "Courts must be vacated promptly at the 90th minute to ensure smooth rotation for incoming players.",
                ],
                subsections: [
                  {
                    label: "Priority Booking Windows",
                    details:
                      "Public / Drop-in: 7 days in advance. Priority Members: 14 days in advance. Club Gold: 21 days in advance.",
                  },
                ],
              },
              {
                id: "art-3",
                article: "Article 3",
                title: "Pricing, Deposits & Split Pay",
                body: [
                  "Court hourly rates are denominated in Euros, all taxes included. Peak hours (18:00–22:30) and Off-Peak hours (06:00–17:30 and 22:30–midnight) are differentiated. Demo rackets and match balls are complimentary.",
                  "Split Pay: The booking host settles their individual 1/4 share upfront as a security deposit holding the court. A dedicated payment link is issued for the remaining 3 teammates.",
                ],
                alert:
                  "Unsettled shares at game start are charged to the host's payment card of record holding the reservation.",
              },
              {
                id: "art-4",
                article: "Article 4",
                title: "Memberships & Economic Sustainability",
                body: [
                  "To ensure equitable court access and prevent bottleneck congestion, no unmetered unlimited play passes are issued.",
                  "Memberships provide deep hourly court discounts (-30% to -50%) and advanced booking priority.",
                ],
              },
            ],
      },
      refund: {
        key: "refund",
        slug: "remboursement",
        slugs: ["remboursement", "annulation-remboursement", "refund", "legal/refund"],
        title: isFr
          ? "Politique d'Annulation & de Remboursement"
          : "Cancellation & Refund Policy",
        metaTitle: isFr
          ? "Annulation & Remboursements — Terra Padel Club Paris"
          : "Cancellation & Refund Policy — Terra Padel Club Paris",
        metaDesc: isFr
          ? "Conditions d'annulation gratuite à H-24, barème de remboursement, gestion des no-shows et transferts de créneaux au Terra Padel Club."
          : "24-hour free cancellation policy, refund criteria, anti-no-show penalties and credit reallocations at Terra Padel Club.",
        badge: isFr ? "Garantie Joueur & Remplissage" : "Player Protection Guarantee",
        lastUpdated: isFr ? "21 Septembre 2026" : "September 21, 2026",
        icon: RotateCcw,
        sections: isFr
          ? [
              {
                id: "ref-1",
                article: "Section 1",
                title: "Annulation Gratuite à H-24",
                body: [
                  "Toute session réservée peut être annulée ou reportée sans aucun frais jusqu'à 24 heures précédant l'heure exacte du coup d'envoi du créneau.",
                  "En cas d'annulation valide à H-24, 100 % des montants versés (paiement intégral ou acomptes Split Pay) sont re-crédités instantanément sur le moyen de paiement utilisé ou sur le portefeuille de crédits du joueur.",
                ],
              },
              {
                id: "ref-2",
                article: "Section 2",
                title: "Annulations Tardives (< 24 Heures)",
                body: [
                  "Pour toute annulation intervenant moins de 24 heures avant la session, aucun remboursement automatique n'est accordé compte tenu de l'immobilisation de la piste et de l'impossibilité de reprogrammer le court.",
                  "Exception de replacement : Si le créneau annulé est intégralement repris et payé par un autre groupe via notre liste d'attente automatisée, l'acompte initial est restitué sous forme d'un avoir club valable 6 mois.",
                ],
                alert:
                  "Les demandes d'annulation tardive motivées par cas de force majeure médicale doivent être adressées sous 48h accompagnées d'un justificatif à support@terrapadel.fr.",
              },
              {
                id: "ref-3",
                article: "Section 3",
                title: "Politique Anti-No-Show (Non-Présentation)",
                body: [
                  "Un court laissé vacant sans préavis bloque l'accès à d'autres membres de la communauté. En conséquence :",
                  "1. La totalité du montant du créneau est définitivement acquise au Club.",
                  "2. Tout compte membre enregistrant 2 no-shows sur une période glissante de 60 jours voit sa priorité de réservation suspendue pour une période ferme de 30 jours calendaires.",
                ],
              },
              {
                id: "ref-4",
                article: "Section 4",
                title: "Interruption Technique ou Force Majeure Club",
                body: [
                  "En cas d'impossibilité d'accès aux courts due à une défaillance technique du bâtiment (panne d'éclairage LED, incident verrière, alerte préfectorale), la séance est intégralement remboursée ou reportée au choix du joueur, assortie d'un avoir de courtoisie de 20 %.",
                ],
              },
            ]
          : [
              {
                id: "ref-1",
                article: "Section 1",
                title: "24-Hour Free Cancellation",
                body: [
                  "Any reserved court booking can be modified or cancelled free of charge up to 24 hours prior to scheduled match start.",
                  "100% of all paid fees and split deposits are refunded immediately to the original payment method.",
                ],
              },
              {
                id: "ref-2",
                article: "Section 2",
                title: "Late Cancellations (< 24 Hours)",
                body: [
                  "Cancellations submitted within 24 hours of start time forfeit payment to cover court immobilization, unless rebooked by a waitlist player.",
                ],
              },
              {
                id: "ref-3",
                article: "Section 3",
                title: "Anti-No-Show Policy",
                body: [
                  "Unannounced no-shows harm community play. Accounts with 2 no-shows in 60 days forfeit priority booking privileges for 30 days.",
                ],
              },
            ],
      },
      privacy: {
        key: "privacy",
        slug: "confidentialite",
        slugs: ["confidentialite", "politique-de-confidentialite", "privacy", "legal/privacy"],
        title: isFr
          ? "Politique de Confidentialité & RGPD"
          : "Privacy Policy & GDPR Compliance",
        metaTitle: isFr
          ? "Protection des Données (RGPD) — Terra Padel Club"
          : "Privacy Policy (GDPR) — Terra Padel Club Paris",
        metaDesc: isFr
          ? "Découvrez comment Terra Padel Club protège vos données personnelles conformément au RGPD et à la loi Informatique et Libertés. DPO, droits d'accès et cookies."
          : "How Terra Padel Club protects your personal data in full compliance with GDPR and French data privacy laws. DPO contact, cookies, and rights.",
        badge: isFr ? "Conforme RGPD & CNIL" : "GDPR & CNIL Compliant",
        lastUpdated: isFr ? "21 Septembre 2026" : "September 21, 2026",
        icon: ShieldCheck,
        sections: isFr
          ? [
              {
                id: "priv-1",
                article: "Article 1",
                title: "Identité du Responsable de Traitement & DPO",
                body: [
                  "Le responsable du traitement des données personnelles est TERRA PADEL CLUB SAS, 42 Rue du Faubourg Saint-Antoine, 75011 Paris. SIREN : 921 458 712.",
                  "Notre Délégué à la Protection des Données (DPO) peut être contacté directement par courrier électronique à l'adresse dédiée : dpo@terrapadel.fr.",
                ],
              },
              {
                id: "priv-2",
                article: "Article 2",
                title: "Données Collectées et Finalités",
                body: [
                  "Nous collectons exclusivement les données indispensables au service : identité (nom, prénom), coordonnées (email, téléphone portable), historique des réservations, transactions financières chiffrées et préférences d'invitations Split Pay.",
                  "Ces données permettent l'attribution des courts, la transmission des codes d'accès sécurisés, l'envoi des liens de partage de note et l'envoi d'informations sportives.",
                ],
              },
              {
                id: "priv-3",
                article: "Article 3",
                title: "Destinataires & Durée de Conservation",
                body: [
                  "Vos données ne sont JAMAIS vendues ou louées à des tiers. Elles sont hébergées au sein de serveurs sécurisés situés dans l'Union Européenne (certifiés ISO 27001 et PCI-DSS).",
                ],
              },
              {
                id: "priv-4",
                article: "Article 4",
                title: "Vos Droits & Recours CNIL",
                body: [
                  "Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données sur simple demande à dpo@terrapadel.fr, ainsi que du droit de saisine de la CNIL (www.cnil.fr).",
                ],
              },
            ]
          : [
              {
                id: "priv-1",
                article: "Article 1",
                title: "Data Controller & DPO",
                body: [
                  "The data controller is TERRA PADEL CLUB SAS, Paris. Our Data Protection Officer can be reached at dpo@terrapadel.fr.",
                ],
              },
              {
                id: "priv-2",
                article: "Article 2",
                title: "GDPR Rights",
                body: [
                  "You retain full rights to access, rectify, export, or erase your personal information at any time.",
                ],
              },
            ],
      },
      rules: {
        key: "rules",
        slug: "reglement-interieur",
        slugs: ["reglement-interieur", "reglement", "house-rules", "legal/rules"],
        title: isFr
          ? "Règlement Intérieur & Sécurité des Pistes"
          : "House Rules & Court Safety Guidelines",
        metaTitle: isFr
          ? "Règlement Intérieur du Club — Terra Padel Paris 11e"
          : "Club House Rules & Safety — Terra Padel Club Paris",
        metaDesc: isFr
          ? "Règles d'accès aux pistes de padel, équipement obligatoire, sécurité des vitres panoramiques et respect des installations au Terra Padel Club."
          : "Official court regulations, required footwear, safety rules on panoramic glass walls and locker room etiquette at Terra Padel Club.",
        badge: isFr ? "Normes FFT & Sécurité" : "FFT Standards & Safety",
        lastUpdated: isFr ? "21 Septembre 2026" : "September 21, 2026",
        icon: BookOpen,
        sections: isFr
          ? [
              {
                id: "rul-1",
                article: "Règle 1",
                title: "Chaussures & Équipement Obligatoire",
                body: [
                  "Le port de chaussures de sport propres munies de semelles spécifiques padel ou terre battue (semelles non marquantes à chevrons) est rigoureusement obligatoire sur les pistes en gazon terracotta.",
                  "Les chaussures de ville, crampons extérieurs, semelles noires laissant des traces ou pieds nus sont formellement prohibés sur les courts.",
                ],
              },
              {
                id: "rul-2",
                article: "Règle 2",
                title: "Sécurité & Dragonne des Raquettes",
                body: [
                  "Pendant toute la durée des échanges, le port de la dragonne de sécurité de la raquette autour du poignet est OBLIGATOIRE.",
                  "Il est strictement interdit de se jeter avec violence contre les panneaux vitrés panoramiques ou de s'asseoir sur le filet.",
                ],
              },
              {
                id: "rul-3",
                article: "Règle 3",
                title: "Ponctualité & Évacuation des Terrains",
                body: [
                  "Les matchs s'arrêtent à la 90e minute précise afin de préserver l'horaire du créneau suivant. Les raquettes de démo doivent être restituées nettoyées au pro-shop.",
                ],
              },
            ]
          : [
              {
                id: "rul-1",
                article: "Rule 1",
                title: "Footwear Standards",
                body: [
                  "Non-marking clay-court or padel footwear is mandatory on the terracotta turf. Black-marking outdoor sneakers are prohibited.",
                ],
              },
              {
                id: "rul-2",
                article: "Rule 2",
                title: "Safety Wrist Straps",
                body: [
                  "Racket wrist safety straps must be worn at all times during match play.",
                ],
              },
            ],
      },
      "legal-notice": {
        key: "legal-notice",
        slug: "mentions-legales",
        slugs: ["mentions-legales", "mentions", "legal-notice", "legal"],
        title: isFr ? "Mentions Légales & Informations Éditeur" : "Legal Notice & Publisher Info",
        metaTitle: isFr
          ? "Mentions Légales — Terra Padel Club Paris"
          : "Legal Notice — Terra Padel Club Paris",
        metaDesc: isFr
          ? "Mentions légales obligatoires du site terrapadel.fr. Éditeur SAS Terra Padel Club, hébergement, propriété intellectuelle et directeur de publication."
          : "Publisher information, corporate registry, web hosting and intellectual property details for Terra Padel Club Paris.",
        badge: isFr ? "Informations Légales RCS" : "Corporate & Registry Data",
        lastUpdated: isFr ? "21 Septembre 2026" : "September 21, 2026",
        icon: Building2,
        sections: isFr
          ? [
              {
                id: "leg-1",
                article: "Section 1",
                title: "Éditeur de la Plateforme",
                body: [
                  "Le site internet terrapadel.fr est édité et exploité par la société TERRA PADEL CLUB SAS.",
                  "Société par Actions Simplifiée au capital de 50 000 Euros.",
                  "Siège social : 42 Rue du Faubourg Saint-Antoine, 75011 Paris, France.",
                  "RCS Paris : B 921 458 712 — N° SIRET : 921 458 712 00018 — Code NAF/APE : 9311Z (Gestion d'installations sportives).",
                  "N° TVA Intracommunautaire : FR 48 921458712.",
                  "Contact : contact@terrapadel.fr / +33 1 42 78 90 12.",
                ],
              },
              {
                id: "leg-2",
                article: "Section 2",
                title: "Hébergement de l'Infrastructure",
                body: [
                  "Le site et les données de réservation sont hébergés au sein de centres de données sécurisés situés dans l'Union Européenne (Région Europe-West, Paris).",
                  "Infrastructure certifiée ISO/IEC 27001 et conforme aux directives RGPD.",
                ],
              },
              {
                id: "leg-3",
                article: "Section 3",
                title: "Propriété Intellectuelle",
                body: [
                  "L'ensemble des marques, photographies, typographies et code source sont la propriété exclusive de Terra Padel Club SAS.",
                ],
              },
            ]
          : [
              {
                id: "leg-1",
                article: "Section 1",
                title: "Platform Publisher",
                body: [
                  "TERRA PADEL CLUB SAS, share capital €50,000, RCS Paris B 921 458 712, 42 Rue du Faubourg Saint-Antoine, 75011 Paris.",
                ],
              },
              {
                id: "leg-2",
                article: "Section 2",
                title: "Hosting & Security",
                body: [
                  "Hosted in Paris (EU-West) data centers with ISO 27001 compliance and GDPR certifications.",
                ],
              },
            ],
      },
    };
  }, [lang]);

  const activeDoc = docs[activeDocKey];

  // Update document title and metadata
  useEffect(() => {
    document.title = activeDoc.metaTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const parts = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (parts) {
          el.setAttribute(parts[1], parts[2]);
          document.head.appendChild(el);
        }
      }
      el.setAttribute(attr, value);
    };

    const host = window.location.origin;
    const currentUrl = `${host}/${activeDoc.slug}`;
    const imageUrl = `${host}/og-image.jpg`;

    setMeta('meta[name="description"]', "content", activeDoc.metaDesc);
    setMeta('meta[property="og:title"]', "content", activeDoc.metaTitle);
    setMeta('meta[property="og:description"]', "content", activeDoc.metaDesc);
    setMeta('meta[property="og:url"]', "content", currentUrl);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:title"]', "content", activeDoc.metaTitle);
    setMeta('meta[name="twitter:description"]', "content", activeDoc.metaDesc);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
  }, [activeDoc]);

  const switchDoc = (key: LegalDocKey) => {
    setActiveDocKey(key);
    setSearchQuery("");
    const targetSlug = docs[key].slug;
    window.history.pushState({ doc: key }, "", `/${targetSlug}`);
    if (onNavigateDoc) {
      onNavigateDoc(key);
    }
  };

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/${activeDoc.slug}#${id}`;
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return activeDoc.sections;
    const q = searchQuery.toLowerCase();
    return activeDoc.sections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.article.toLowerCase().includes(q) ||
        sec.body.some((p) => p.toLowerCase().includes(q)) ||
        sec.subsections?.some((sub) => sub.label.toLowerCase().includes(q) || sub.details.toLowerCase().includes(q)),
    );
  }, [activeDoc, searchQuery]);

  return (
    <div className="min-h-screen bg-ink-950 text-bone-50 pt-20 pb-28">
      {/* Top Header Bar */}
      <header className="border-b border-bone-50/10 bg-ink-950/95 backdrop-blur-md sticky top-0 z-40">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bone-50/70 hover:text-clay-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-clay-400" />
            <span>{lang === "fr" ? "Retour au Club & Réservation" : "Back to Club & Booking"}</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Print button */}
            <button
              type="button"
              onClick={handlePrint}
              aria-label={lang === "fr" ? "Imprimer le document" : "Print document"}
              className="flex items-center gap-1.5 rounded-full border border-bone-50/15 bg-bone-50/5 px-3.5 py-1.5 text-xs text-bone-50/80 hover:bg-bone-50/10 hover:text-bone-50 transition-colors"
            >
              <Printer className="h-3.5 w-3.5 text-clay-400" />
              <span className="hidden sm:inline">{lang === "fr" ? "Imprimer / PDF" : "Print / PDF"}</span>
            </button>

            {/* Language toggle */}
            <div className="flex items-center rounded-full border border-bone-50/15 bg-bone-50/5 p-0.5 text-[0.68rem] font-bold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all",
                  lang === "fr" ? "bg-clay-500 text-bone-50 shadow" : "text-bone-50/60 hover:text-bone-50",
                )}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all",
                  lang === "en" ? "bg-clay-500 text-bone-50 shadow" : "text-bone-50/60 hover:text-bone-50",
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container-x mt-8">
        {/* Breadcrumb Navigation (Indexable & Accessible) */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-[0.72rem] text-bone-50/50 uppercase tracking-widest mb-6">
          <button type="button" onClick={onNavigateHome} className="hover:text-bone-50 transition-colors">
            Terra Padel
          </button>
          <ChevronRight className="h-3 w-3" />
          <span>{lang === "fr" ? "Documents Légaux" : "Legal Hub"}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-clay-400 font-semibold">{activeDoc.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl border border-bone-50/10 bg-gradient-to-br from-ink-900 via-ink-950 to-clay-950/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="court-lines pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-500/20 border border-clay-500/30 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-clay-400">
                <Sparkles className="h-3 w-3" />
                {activeDoc.badge}
              </span>
              <span className="text-[0.7rem] text-bone-50/40">
                {lang === "fr" ? `Mis à jour le ${activeDoc.lastUpdated}` : `Effective: ${activeDoc.lastUpdated}`}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-bone-50 leading-none">
              {activeDoc.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-bone-50/70 leading-relaxed max-w-2xl">
              {activeDoc.metaDesc}
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-bone-50/10 bg-ink-900/60 p-4 sm:p-5 sticky top-28 backdrop-blur-sm">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/50 mb-3 px-2">
                {lang === "fr" ? "Index des Documents Publics" : "Official Legal Directory"}
              </p>

              <nav className="space-y-1.5">
                {(Object.keys(docs) as LegalDocKey[]).map((key) => {
                  const item = docs[key];
                  const Icon = item.icon;
                  const isActive = activeDocKey === key;
                  return (
                    <a
                      key={key}
                      href={`/${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        switchDoc(key);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-3 text-xs font-semibold transition-all duration-300 group",
                        isActive
                          ? "bg-clay-500 text-bone-50 shadow-md font-bold"
                          : "text-bone-50/70 hover:bg-bone-50/5 hover:text-bone-50",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-bone-50" : "text-clay-400")} />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5",
                          isActive && "opacity-100",
                        )}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Fast Keyword Search Bar */}
              <div className="mt-6 pt-5 border-t border-bone-50/10">
                <label htmlFor="legal-search" className="sr-only">
                  Rechercher dans ce document
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-bone-50/40" />
                  <input
                    id="legal-search"
                    type="search"
                    placeholder={
                      lang === "fr"
                        ? "Rechercher (ex: acompte, annulation...)"
                        : "Search clause (e.g. refund, deposit...)"
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-bone-50/15 bg-ink-950 px-3.5 py-2 pl-9 text-xs text-bone-50 placeholder-bone-50/40 focus:border-clay-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="mt-6 rounded-xl border border-bone-50/10 bg-bone-50/[0.02] p-3.5 text-xs text-bone-50/60">
                <p className="font-semibold text-bone-50 mb-1">
                  {lang === "fr" ? "Besoin d'un renseignement ?" : "Questions about terms?"}
                </p>
                <p className="leading-snug text-[0.72rem]">
                  {lang === "fr"
                    ? "Notre équipe juridique et sportive répond sous 24h ouvrées :"
                    : "Our legal and concierge team is at your disposal:"}
                </p>
                <a
                  href="mailto:contact@terrapadel.fr"
                  className="mt-2 inline-flex items-center gap-1 font-medium text-clay-400 hover:text-clay-300 underline"
                >
                  contact@terrapadel.fr
                </a>
              </div>
            </div>
          </aside>

          {/* Right Document Content */}
          <section className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="rounded-2xl border border-bone-50/10 bg-ink-900/40 p-10 text-center">
                <p className="text-sm text-bone-50/60">
                  {lang === "fr"
                    ? `Aucun article ne correspond à "${searchQuery}".`
                    : `No provisions found matching "${searchQuery}".`}
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs font-semibold text-clay-400 hover:underline"
                >
                  {lang === "fr" ? "Effacer la recherche" : "Clear search"}
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="group rounded-2xl border border-bone-50/10 bg-ink-900/50 p-6 sm:p-8 transition-all hover:border-bone-50/20 shadow-sm relative scroll-mt-28"
                >
                  {/* Article Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-bone-50/10 pb-4">
                    <div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-clay-400">
                        {sec.article}
                      </span>
                      <h2 className="mt-1 font-display text-2xl uppercase tracking-wide text-bone-50 sm:text-3xl">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Copy deep link button */}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(sec.id)}
                      title={lang === "fr" ? "Copier le lien direct vers cet article" : "Copy direct anchor link"}
                      className="flex items-center gap-1 rounded-lg border border-bone-50/15 bg-bone-50/5 px-2.5 py-1 text-[0.7rem] text-bone-50/60 hover:bg-bone-50/10 hover:text-bone-50 transition-colors"
                    >
                      {copiedId === sec.id ? (
                        <>
                          <Check className="h-3 w-3 text-clay-400" />
                          <span className="text-clay-400">{lang === "fr" ? "Copié" : "Copied"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>{lang === "fr" ? "Lien" : "Link"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="mt-5 space-y-4 text-sm sm:text-[0.95rem] leading-relaxed text-bone-50/80">
                    {sec.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}

                    {/* Subsections if any */}
                    {sec.subsections?.map((sub, sIdx) => (
                      <div key={sIdx} className="rounded-xl border border-bone-50/10 bg-bone-50/[0.03] p-4 mt-3">
                        <p className="font-semibold text-xs uppercase tracking-wider text-clay-300">
                          {sub.label}
                        </p>
                        <p className="mt-1 text-xs text-bone-50/75 leading-relaxed">
                          {sub.details}
                        </p>
                      </div>
                    ))}

                    {/* Alert / Highlight box */}
                    {sec.alert && (
                      <div className="mt-4 flex items-start gap-3 rounded-xl border border-clay-500/30 bg-clay-500/10 p-4 text-xs text-bone-50/85">
                        <AlertTriangle className="h-4 w-4 shrink-0 text-clay-400 mt-0.5" />
                        <p className="leading-relaxed">{sec.alert}</p>
                      </div>
                    )}
                  </div>
                </article>
              ))
            )}

            {/* Bottom Regulatory Trust Box */}
            <div className="rounded-2xl border border-bone-50/10 bg-gradient-to-r from-bone-50/[0.03] to-clay-950/20 p-6 text-xs text-bone-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-bone-50 uppercase tracking-wider text-[0.72rem]">
                  Terra Padel Club · Paris 11e
                </p>
                <p className="mt-1">
                  {lang === "fr"
                    ? "SAS au capital de 50 000 € · RCS Paris 921 458 712 · Affilié FFT n° 5775011"
                    : "Registered Sports Club · Paris Registry 921 458 712 · French Tennis Federation"}
                </p>
              </div>
              <button
                type="button"
                onClick={onNavigateHome}
                className="shrink-0 rounded-full bg-clay-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-bone-50 hover:bg-clay-400 transition-colors shadow"
              >
                {lang === "fr" ? "Réserver un Court" : "Book a Court"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
