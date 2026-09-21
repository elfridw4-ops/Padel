import { useState } from "react";
import coachingImg from "@/assets/coaching.jpg";
import communityImg from "@/assets/community.jpg";
import loungeImg from "@/assets/lounge.jpg";
import detailImg from "@/assets/detail-racket.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

const images = [coachingImg, communityImg, loungeImg, detailImg];

export function Experience() {
  const { t } = useI18n();
  const e = t.experience;
  const items = e.items.map((item, i) => ({ ...item, img: images[i] }));
  const [active, setActive] = useState(0);

  return (
    <section className="bg-bone-100 text-ink-950">
      <div className="container-x py-24 md:py-32 lg:py-40">
        <SectionHeading index={e.index} eyebrow={e.eyebrow} lines={e.heading} />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Sticky image stack */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-ink-900 lg:sticky lg:top-28">
              {items.map((it, i) => (
                <img
                  key={it.title}
                  src={it.img}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-expo)]",
                    active === i ? "scale-100 opacity-100" : "scale-[1.05] opacity-0",
                  )}
                  aria-hidden={active !== i}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-bone-50">
                <span className="font-display text-5xl leading-none tracking-wide [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
                  0{active + 1}
                </span>
                <span className="text-right text-[0.68rem] font-semibold uppercase tracking-[0.2em] [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
                  {items[active].meta}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Interactive list */}
          <Reveal delay={120} className="lg:col-span-7">
            <ul className="border-t border-ink-950/15">
              {items.map((it, i) => {
                const isActive = active === i;
                return (
                  <li key={it.title} className="border-b border-ink-950/15">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group flex w-full items-start gap-5 py-7 text-left md:gap-8 md:py-9"
                    >
                      <span
                        className={cn(
                          "mt-1.5 font-display text-xl tracking-wide transition-colors duration-500 md:text-2xl",
                          isActive ? "text-clay-500" : "text-ink-400",
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center justify-between gap-4 sm:gap-6">
                          <span
                            className={cn(
                              "display-tight font-display text-2xl uppercase transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] sm:text-4xl md:text-5xl lg:text-6xl break-words",
                              isActive
                                ? "translate-x-1 sm:translate-x-2 text-ink-950"
                                : "text-ink-950/70 group-hover:text-ink-950",
                            )}
                          >
                            {it.title}
                          </span>
                          <span
                            className={cn(
                              "grid h-9 w-9 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full border transition-all duration-500",
                              isActive
                                ? "border-clay-500 bg-clay-500 text-bone-50"
                                : "border-ink-950/20 text-ink-950",
                            )}
                          >
                            <ArrowRight
                              className={cn(
                                "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-500",
                                isActive && "-rotate-45",
                              )}
                            />
                          </span>
                        </span>

                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-700 ease-[var(--ease-out-expo)]",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="block max-w-lg pt-4 text-[0.98rem] leading-relaxed text-ink-600">
                              {it.body}
                            </span>
                            <span className="mt-3 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-clay-600 lg:hidden">
                              {it.meta}
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
