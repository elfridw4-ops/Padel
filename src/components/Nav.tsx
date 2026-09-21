import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { CloseIcon, Logo, MenuIcon, TikTokIcon, InstagramIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { LangToggle } from "@/components/LangToggle";
import { useI18n } from "@/i18n/I18nProvider";

export function Nav() {
  const { t } = useI18n();
  const links = [
    { label: t.nav.courts, href: "#courts" },
    { label: t.nav.club, href: "#club" },
    { label: t.nav.membership, href: "#membership" },
    { label: t.nav.community, href: "#community" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#club"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone-50 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        {t.nav.skip}
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500",
          scrolled
            ? "border-b border-bone-50/10 bg-ink-950/75 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          className={cn(
            "container-x flex items-center justify-between transition-[height] duration-500",
            scrolled ? "h-16" : "h-20 md:h-24",
          )}
          aria-label="Primary"
        >
          <a href="#top" className="text-bone-50" aria-label="Terra Padel Club">
            <Logo />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone-50/80 transition-colors hover:text-bone-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LangToggle />
            <a
              href="https://www.tiktok.com/@dadju_sn"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-bone-50/20 text-bone-50/80 transition-colors hover:border-bone-50 hover:text-bone-50"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <ButtonLink href="#book" tone="bone" className="px-5 py-3">
              {t.nav.book}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/25 text-bone-50 transition-colors hover:border-bone-50"
              aria-label={t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink-950 text-bone-50 transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/25 transition-colors hover:border-bone-50"
            aria-label={t.nav.closeMenu}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <ul className="container-x mt-6 flex flex-1 flex-col gap-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={cn(
                "border-b border-bone-50/10 transition-[opacity,transform] duration-700",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display-tight flex items-center justify-between py-5 font-display text-6xl uppercase transition-colors hover:text-clay-400"
              >
                {l.label}
                <span className="font-display text-xl text-bone-50/40">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "container-x flex items-center justify-between gap-4 pb-8 transition-opacity duration-700",
            open ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDelay: open ? "450ms" : "0ms" }}
        >
          <div className="flex items-center gap-3">
            <LangToggle size="md" />
            <a
              href="https://www.tiktok.com/@dadju_sn"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/20"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/20"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
          <ButtonLink href="#book" tone="clay" onClick={() => setOpen(false)}>
            {t.nav.book}
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
