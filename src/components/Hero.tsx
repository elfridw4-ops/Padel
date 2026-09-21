import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { ButtonLink } from "@/components/ui";
import { PlayIcon, TikTokIcon } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

export function Hero() {
  const { t } = useI18n();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Flip the headline mask after first paint so the line reveal transitions in.
  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(timeout);
  }, []);

  // Gentle parallax on the photograph, rAF-throttled and motion-safe.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = parallaxRef.current;
      if (!el) return;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      el.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink-950 text-bone-50">
      {/* Photograph */}
      <div ref={parallaxRef} className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform">
        <img
          src={heroImg}
          alt={t.hero.imgAlt}
          className="animate-hero-zoom h-full w-full object-cover object-[50%_38%]"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Light shaping — mirrors the photo's dark net foreground & bright hall */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/60 to-transparent" />

      {/* Content */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-8 pt-32 sm:pb-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p
              className="animate-fade-up flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone-50/85"
              style={{ animationDelay: "250ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-clay-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay-400" />
              </span>
              {t.hero.liveBadge}
              <span className="hidden h-px w-8 bg-bone-50/40 sm:block" aria-hidden="true" />
              <span className="hidden sm:inline">{t.hero.location}</span>
            </p>

            <h1
              className={cn(
                "display-tight mt-6 font-display text-[clamp(4.2rem,13vw,12.5rem)] uppercase",
                ready && "is-visible",
              )}
            >
              {t.hero.title.map((line, i) => (
                <span
                  key={line}
                  className="line-mask"
                  style={{ ["--reveal-delay" as string]: `${350 + i * 110}ms` }}
                >
                  <span>{line}</span>
                </span>
              ))}
            </h1>

            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mt-10">
              <p
                className="animate-fade-up max-w-md text-[0.95rem] leading-relaxed text-bone-50/80 sm:text-base"
                style={{ animationDelay: "700ms" }}
              >
                {t.hero.paragraph}
              </p>

              <div className="animate-fade-up flex flex-wrap gap-3" style={{ animationDelay: "820ms" }}>
                <ButtonLink href="#book" tone="bone">
                  {t.hero.book}
                </ButtonLink>
                <ButtonLink href="#community" tone="ghost-light">
                  <PlayIcon className="h-3 w-3" />
                  {t.hero.watchFilm}
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* TikTok credit — placed as in the original watermark */}
          <div className="animate-fade-up flex lg:col-span-3 lg:justify-end" style={{ animationDelay: "950ms" }}>
            <a
              href="https://www.tiktok.com/@dadju_sn"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[1.35rem] font-medium tracking-[0.01em] text-bone-50 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] sm:text-[1.5rem]"
              aria-label="TikTok @dadju_sn"
            >
              <TikTokIcon className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-12" />
              <span className="link-underline">@dadju_sn</span>
            </a>
          </div>
        </div>

        {/* Meta strip */}
        <div
          className="animate-fade-up mt-10 grid grid-cols-2 gap-y-4 border-t border-bone-50/15 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone-50/65 sm:grid-cols-4 sm:gap-y-0"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="flex items-center gap-3">
            <span className="relative block h-8 w-px overflow-hidden bg-bone-50/15">
              <span className="animate-scroll-line absolute inset-0 bg-bone-50" />
            </span>
            {t.hero.scroll}
          </div>
          <div className="sm:text-center">{t.hero.statCourts}</div>
          <div className="sm:text-center">{t.hero.statHours}</div>
          <div className="sm:text-right">{t.hero.address}</div>
        </div>
      </div>
    </section>
  );
}
