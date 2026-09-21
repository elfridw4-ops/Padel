import { useEffect, useState } from "react";
import detailImg from "@/assets/detail-racket.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";

/* ------------------------------------------------------------------ */
/* Count-up stat                                                       */
/* ------------------------------------------------------------------ */

interface StatProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}

function Stat({ value, decimals = 0, prefix = "", suffix = "", label, delay = 0 }: StatProps) {
  const { locale } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const duration = 1500;
    let start: number | null = null;
    const tick = (time: number) => {
      if (start === null) start = time + delay;
      const p = Math.min(Math.max((time - start) / duration, 0), 1);
      const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
      setN(value * (p === 1 ? 1 : eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, delay]);

  const formatted = n.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className="border-t border-ink-950/15 pt-4 sm:pt-5">
      <p className="display-tight font-display text-[clamp(2.5rem,5.5vw,5.5rem)] text-ink-950 tabular-nums">
        {prefix}
        {formatted}
        <span className="text-clay-500">{suffix}</span>
      </p>
      <p className="mt-1.5 sm:mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-500">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function Manifesto() {
  const { t } = useI18n();
  const m = t.manifesto;

  return (
    <section id="club" className="relative bg-bone-50 text-ink-950">
      <div className="container-x py-24 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading index={m.index} eyebrow={m.eyebrow} lines={m.heading} accentLast />

            <Reveal
              delay={200}
              className="mt-10 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-ink-600 md:text-lg"
            >
              <p>{m.p1}</p>
              <p>{m.p2}</p>
            </Reveal>

            <Reveal delay={320} className="mt-10">
              <a
                href="#courts"
                className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink-950/20 transition-colors duration-500 group-hover:border-clay-500 group-hover:bg-clay-500 group-hover:text-bone-50">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="link-underline">{m.tour}</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-5 lg:pt-24">
            <figure className="group relative overflow-hidden rounded-[1.25rem] bg-clay-500">
              <img
                src={detailImg}
                alt={t.experience.items[3].alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink-950/70 to-transparent p-6 text-bone-50">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]">{m.figcaption}</span>
                <span className="font-display text-2xl leading-none tracking-wide">0.8 s</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-32 lg:grid-cols-4 lg:gap-x-10">
          <Stat value={12} label={m.statCourts} />
          <Stat value={2400} suffix="+" label={m.statMembers} delay={120} />
          <Stat value={18} suffix="h" label={m.statHours} delay={240} />
          <Stat value={4.9} decimals={1} label={m.statRating} delay={360} />
        </div>
      </div>
    </section>
  );
}
