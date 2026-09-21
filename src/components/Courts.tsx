import panoramicImg from "@/assets/court-panoramic.jpg";
import turfImg from "@/assets/turf.jpg";
import nightImg from "@/assets/night.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

const images = [panoramicImg, turfImg, nightImg];

export function Courts() {
  const { t } = useI18n();
  const c = t.courts;
  const courts = c.cards.map((card, i) => ({ ...card, img: images[i] }));

  return (
    <section id="courts" className="grain relative overflow-hidden bg-ink-950 text-bone-50">
      {/* faint court-line grid */}
      <div className="court-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-x relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={c.index} eyebrow={c.eyebrow} lines={c.heading} />
          <Reveal delay={200} className="max-w-sm text-[0.98rem] leading-relaxed text-bone-50/65 lg:pb-3">
            {c.paragraph}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:mt-24 lg:grid-cols-3">
          {courts.map((court, i) => (
            <Reveal
              key={court.title}
              delay={i * 120}
              className={cn(i === 1 && "lg:translate-y-16", i === 2 && "md:col-span-2 lg:col-span-1")}
            >
              <article className="group relative overflow-hidden rounded-[1.25rem] bg-ink-900">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={court.img}
                    alt={court.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="font-display text-2xl tracking-wide text-bone-50/70">0{i + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/25 bg-ink-950/30 backdrop-blur-sm transition-all duration-500 group-hover:border-clay-500 group-hover:bg-clay-500">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-clay-300">
                    {court.spec}
                  </p>
                  <h3 className="display-tight mt-2 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
                    {court.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)] group-hover:grid-rows-[1fr]">
                    <p className="overflow-hidden text-[0.92rem] leading-relaxed text-bone-50/75">
                      <span className="block pt-3">{court.body}</span>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={100}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-bone-50/10 pt-8 lg:mt-36 lg:grid-cols-4"
        >
          {c.specs.map(([k, v]) => (
            <div key={k}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone-50/45">{k}</p>
              <p className="mt-2 text-[0.95rem] font-medium text-bone-50/90">{v}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
