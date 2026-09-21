import { useState, useEffect } from "react";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Courts } from "@/components/Courts";
import { Experience } from "@/components/Experience";
import { Membership } from "@/components/Membership";
import { Community } from "@/components/Community";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { LegalPage, type LegalDocKey } from "@/components/LegalPage";

function parseLegalDocFromPath(pathname: string): LegalDocKey | null {
  const clean = pathname.toLowerCase().replace(/^\/+|\/+$/g, "");
  if (!clean) return null;

  if (["cgv", "conditions-generales-de-vente", "terms", "legal/cgv"].includes(clean)) return "cgv";
  if (["remboursement", "annulation-remboursement", "refund", "legal/refund"].includes(clean)) return "refund";
  if (["confidentialite", "politique-de-confidentialite", "privacy", "rgpd", "legal/privacy"].includes(clean)) return "privacy";
  if (["reglement-interieur", "reglement", "rules", "house-rules", "legal/rules"].includes(clean)) return "rules";
  if (["mentions-legales", "mentions", "legal-notice", "legal", "legal/legal-notice"].includes(clean)) return "legal-notice";
  return null;
}

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDocKey | null>(() => {
    return parseLegalDocFromPath(window.location.pathname);
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const doc = parseLegalDocFromPath(window.location.pathname);
      setLegalDoc(doc);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const navigateToLegal = (doc: LegalDocKey) => {
    const slugMap: Record<LegalDocKey, string> = {
      cgv: "cgv",
      refund: "remboursement",
      privacy: "confidentialite",
      rules: "reglement-interieur",
      "legal-notice": "mentions-legales",
    };
    const slug = slugMap[doc] || "cgv";
    window.history.pushState({ doc }, "", `/${slug}`);
    setLegalDoc(doc);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = (hash?: string) => {
    window.history.pushState(null, "", `/${hash || ""}`);
    setLegalDoc(null);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If there's an anchor, smooth scroll to it after rendering
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <I18nProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-ink-950">
        <a
          href="#club"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone-50 focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>

        {legalDoc ? (
          <>
            <LegalPage
              initialDoc={legalDoc}
              onNavigateHome={() => navigateToHome()}
              onNavigateDoc={(doc) => setLegalDoc(doc)}
            />
            <Footer onNavigateLegal={navigateToLegal} />
          </>
        ) : (
          <>
            <Nav />
            <main className="w-full max-w-full overflow-x-hidden">
              <Hero />
              <Marquee />
              <Manifesto />
              <Courts />
              <Experience />
              <Membership />
              <Community />
              <Marquee tone="bone" />
              <Booking onNavigateLegal={navigateToLegal} />
            </main>
            <Footer onNavigateLegal={navigateToLegal} />
          </>
        )}
      </div>
    </I18nProvider>
  );
}
