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

export default function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-ink-950">
        <a
          href="#club"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone-50 focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
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
          <Booking />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
