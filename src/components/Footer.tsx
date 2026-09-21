import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, InstagramIcon, Logo, TikTokIcon, YouTubeIcon } from "@/components/icons";
import { useI18n, fill } from "@/i18n/I18nProvider";
import { type LegalDocKey } from "@/components/LegalPage";

interface FooterProps {
  onNavigateLegal?: (doc: LegalDocKey) => void;
}

export function Footer({ onNavigateLegal }: FooterProps) {
  const { t, lang } = useI18n();
  const f = t.footer;
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const navigateToLegal = (doc: LegalDocKey, slug: string) => {
    if (onNavigateLegal) {
      onNavigateLegal(doc);
    } else {
      window.history.pushState({ doc }, "", `/${slug}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  const explore = [
    { label: t.nav.courts, href: "#courts" },
    { label: t.nav.club, href: "#club" },
    { label: t.nav.membership, href: "#membership" },
    { label: t.nav.community, href: "#community" },
    { label: t.nav.book, href: "#book" },
  ];

  return (
    <footer className="grain relative overflow-hidden border-t border-bone-50/10 bg-ink-950 text-bone-50">
      <div className="container-x relative pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-bone-50/65">{f.blurb}</p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@dadju_sn" },
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: YouTubeIcon, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/15 text-bone-50/80 transition-all duration-500 hover:border-clay-500 hover:bg-clay-500 hover:text-bone-50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/45">{f.visit}</p>
              <address className="mt-4 space-y-1 text-[0.95rem] not-italic leading-relaxed text-bone-50/85 sm:mt-5">
                <p>48 rue de la Roquette</p>
                <p>75011 Paris</p>
                <p className="pt-2">
                  <a href="tel:+33142000000" className="link-underline">
                    +33 1 42 00 00 00
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@terrapadel.club" className="link-underline">
                    hello@terrapadel.club
                  </a>
                </p>
              </address>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/45">{f.hours}</p>
              <ul className="mt-4 space-y-1 text-[0.95rem] leading-relaxed text-bone-50/85 sm:mt-5">
                <li className="flex justify-between gap-4">
                  <span>{f.weekdays}</span>
                  <span>06:00 – 00:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>{f.saturday}</span>
                  <span>07:00 – 00:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>{f.sunday}</span>
                  <span>07:00 – 23:00</span>
                </li>
                <li className="pt-2 text-bone-50/50">{f.cafe}</li>
              </ul>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/45">{f.explore}</p>
              <ul className="mt-4 space-y-1.5 text-[0.95rem] leading-relaxed text-bone-50/85 sm:mt-5">
                {explore.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/45">
              {f.newsletter}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-bone-50/65 sm:mt-5">{f.newsletterBody}</p>
            <form onSubmit={submit} className="mt-5">
              <label htmlFor="newsletter" className="sr-only">
                {f.emailLabel}
              </label>
              <div className="flex items-center gap-2 border-b border-bone-50/25 pb-2 transition-colors focus-within:border-bone-50">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent py-2 text-[0.95rem] text-bone-50 placeholder:text-bone-50/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="OK"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-bone-50 text-ink-950 transition-colors duration-500 hover:bg-clay-500 hover:text-bone-50"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 h-4 text-[0.72rem] text-clay-300" aria-live="polite">
                {sent ? f.subscribed : ""}
              </p>
            </form>
          </Reveal>
        </div>

        {/* Oversized wordmark */}
        <Reveal variant="none" className="mt-16 overflow-hidden md:mt-24">
          <p
            aria-hidden="true"
            className="display-tight line-mask select-none font-display text-[clamp(3.5rem,16.5vw,19rem)] uppercase text-bone-50/[0.07]"
          >
            <span className="block">Terra Padel</span>
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 border-t border-bone-50/10 py-6 text-[0.72rem] text-bone-50/45 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>{fill(f.copyright, { year: new Date().getFullYear() })}</p>
          <p>
            {f.photoCredit}{" "}
            <a
              href="https://www.tiktok.com/@dadju_sn"
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1 text-bone-50/80"
            >
              <TikTokIcon className="h-3 w-3" /> @dadju_sn
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            <li>
              <a
                href="/confidentialite"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLegal("privacy", "confidentialite");
                }}
                className="link-underline hover:text-bone-50 transition-colors"
              >
                {lang === "fr" ? "Confidentialité (RGPD)" : "Privacy Policy"}
              </a>
            </li>
            <li>
              <a
                href="/cgv"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLegal("cgv", "cgv");
                }}
                className="link-underline hover:text-bone-50 transition-colors"
              >
                {lang === "fr" ? "CGV & Réservations" : "Terms (CGV)"}
              </a>
            </li>
            <li>
              <a
                href="/remboursement"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLegal("refund", "remboursement");
                }}
                className="link-underline hover:text-bone-50 transition-colors"
              >
                {lang === "fr" ? "Annulation & Remboursement" : "Refund Policy"}
              </a>
            </li>
            <li>
              <a
                href="/reglement-interieur"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLegal("rules", "reglement-interieur");
                }}
                className="link-underline hover:text-bone-50 transition-colors"
              >
                {lang === "fr" ? "Règlement Intérieur" : "House Rules"}
              </a>
            </li>
            <li>
              <a
                href="/mentions-legales"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToLegal("legal-notice", "mentions-legales");
                }}
                className="link-underline hover:text-bone-50 transition-colors"
              >
                {lang === "fr" ? "Mentions Légales" : "Legal Notice"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
