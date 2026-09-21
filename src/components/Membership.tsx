import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { useI18n, fill } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

type Billing = "monthly" | "annual";

const tiersConfig = [
  { style: "glass", featured: false, price: { monthly: 14, annual: 14 } },
  { style: "ink", featured: true, price: { monthly: 59, annual: 49 } },
  { style: "bone", featured: false, price: { monthly: 119, annual: 99 } },
] as const;

export function Membership() {
  const { t, locale } = useI18n();
  const m = t.membership;
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="membership" className="grain relative overflow-hidden bg-clay-500 text-bone-50">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="container-x relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={m.index} eyebrow={m.eyebrow} lines={m.heading} />

          <Reveal delay={200} className="flex flex-col items-start gap-5 lg:items-end lg:pb-3">
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-bone-50/80 lg:text-right">{m.paragraph}</p>
            <div
              role="radiogroup"
              aria-label={m.eyebrow}
              className="relative inline-flex rounded-full border border-bone-50/30 bg-ink-950/15 p-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
            >
              <span
                className={cn(
                  "absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-bone-50 transition-transform duration-500 ease-[var(--ease-out-expo)]",
                  billing === "annual" ? "translate-x-full" : "translate-x-0",
                )}
                aria-hidden="true"
              />
              {(["monthly", "annual"] as Billing[]).map((b) => (
                <button
                  key={b}
                  type="button"
                  role="radio"
                  aria-checked={billing === b}
                  onClick={() => setBilling(b)}
                  className={cn(
                    "relative z-10 w-28 rounded-full py-2.5 transition-colors duration-500",
                    billing === b ? "text-ink-950" : "text-bone-50/80 hover:text-bone-50",
                  )}
                >
                  {b === "monthly" ? m.monthly : m.annual}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {m.tiers.map((tier, i) => {
            const cfg = tiersConfig[i];
            const price = cfg.price[billing];
            const palette = {
              glass: "border border-bone-50/25 bg-bone-50/[0.08] text-bone-50 backdrop-blur-sm",
              ink: "bg-ink-950 text-bone-50",
              bone: "bg-bone-50 text-ink-950",
            }[cfg.style];
            const muted = cfg.style === "bone" ? "text-ink-500" : "text-bone-50/60";
            const check = cfg.style === "bone" ? "text-clay-500" : "text-clay-300";
            const savings = (cfg.price.monthly - cfg.price.annual) * 12;

            return (
              <Reveal key={tier.name} delay={i * 120} className={cn(cfg.featured && "lg:-translate-y-6")}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-[1.25rem] p-7 transition-transform duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 md:p-9",
                    palette,
                  )}
                >
                  {cfg.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-clay-500 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone-50">
                      {m.popular}
                    </span>
                  )}

                  <h3 className="font-display text-4xl uppercase tracking-wide">{tier.name}</h3>
                  <p className={cn("mt-1 text-[0.92rem]", muted)}>{tier.tagline}</p>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="display-tight font-display text-[5rem] tabular-nums md:text-[5.5rem]">
                      <span className="align-top text-[0.45em] leading-none">€</span>
                      <span
                        key={`${price}-${locale}`}
                        className="animate-fade-up inline-block [animation-duration:0.5s]"
                      >
                        {price.toLocaleString(locale)}
                      </span>
                    </span>
                    <span className={cn("pb-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em]", muted)}>
                      {tier.unit}
                    </span>
                  </div>
                  {billing === "annual" && savings > 0 && (
                    <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-clay-300">
                      {fill(m.billedSave, { amount: savings })}
                    </p>
                  )}

                  <ul className="mt-8 flex-1 space-y-3.5 border-t border-current/10 pt-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.95rem] leading-snug">
                        <CheckIcon className={cn("mt-0.5 h-4 w-4 shrink-0", check)} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    tone={cfg.style === "bone" ? "ink" : cfg.style === "ink" ? "clay" : "bone"}
                    className="mt-10 w-full"
                    onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {tier.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
