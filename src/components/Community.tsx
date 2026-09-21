import communityImg from "@/assets/community.jpg";
import heroImg from "@/assets/hero.jpg";
import coachingImg from "@/assets/coaching.jpg";
import nightImg from "@/assets/night.jpg";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ArrowUpRight, TikTokIcon } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

const tileImages = [communityImg, heroImg, coachingImg, nightImg];

function Tile({
  src,
  alt,
  caption,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={cn("group relative overflow-hidden rounded-[1.25rem] bg-ink-800", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]",
          imgClassName,
        )}
      />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink-950/80 to-transparent p-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone-50 opacity-0 transition-[opacity,transform] duration-700 group-hover:translate-y-0 group-hover:opacity-100">
        {caption}
      </figcaption>
    </figure>
  );
}

export function Community() {
  const { t } = useI18n();
  const c = t.community;

  return (
    <section id="community" className="grain relative overflow-hidden bg-ink-900 text-bone-50">
      <div className="container-x relative py-24 md:py-32 lg:py-40">
        <SectionHeading index={c.index} eyebrow={c.eyebrow} lines={c.heading} size="lg" accentLast />

        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-6 lg:mt-24 lg:grid-cols-12">
          <Reveal className="col-span-2 lg:col-span-7">
            <Tile
              src={tileImages[0]}
              alt={c.tileAlts[0]}
              caption={c.captions[0]}
              className="aspect-[4/3] h-full"
            />
          </Reveal>

          {/* TikTok card */}
          <Reveal delay={120} className="col-span-2 lg:col-span-5">
            <a
              href="https://www.tiktok.com/@dadju_sn"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-bone-50/10 bg-ink-950 p-7 transition-colors duration-700 hover:border-clay-500/60 md:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-clay-500/30 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
              <div className="relative flex items-start justify-between">
                <TikTokIcon className="h-9 w-9 transition-transform duration-700 group-hover:-rotate-12" />
                <span className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/20 transition-all duration-500 group-hover:border-clay-500 group-hover:bg-clay-500">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="relative">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/55">
                  {c.onTikTok}
                </p>
                <p className="display-tight mt-3 font-display text-[clamp(2.2rem,7vw,5.25rem)] uppercase break-words">
                  {c.handle}
                </p>
                <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-bone-50/70">{c.tiktokBody}</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={60} className="col-span-1 lg:col-span-4">
            <Tile
              src={tileImages[1]}
              alt={c.tileAlts[1]}
              caption={c.captions[1]}
              className="aspect-[4/5]"
              imgClassName="object-[50%_35%]"
            />
          </Reveal>
          <Reveal delay={140} className="col-span-1 lg:col-span-4">
            <Tile
              src={tileImages[2]}
              alt={c.tileAlts[2]}
              caption={c.captions[2]}
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={220} className="col-span-2 lg:col-span-4">
            <Tile
              src={tileImages[3]}
              alt={c.tileAlts[3]}
              caption={c.captions[3]}
              className="aspect-[16/10] lg:aspect-[4/5]"
            />
          </Reveal>
        </div>

        {/* Quotes */}
        <div className="mt-16 grid gap-8 border-t border-bone-50/10 pt-10 sm:mt-20 md:grid-cols-3 md:gap-8 md:pt-12 lg:mt-28">
          {c.quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120} as="blockquote" className="flex flex-col">
              <p className="font-display text-2xl sm:text-[1.9rem] leading-[1.08] tracking-[0.02em] text-bone-50/90 md:text-[2.1rem]">
                “{q.text}”
              </p>
              <footer className="mt-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                <span className="h-px w-6 bg-clay-500" aria-hidden="true" />
                <span>{q.name}</span>
                <span className="text-bone-50/45">{q.meta}</span>
              </footer>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <ButtonLink
            href="https://www.tiktok.com/@dadju_sn"
            target="_blank"
            rel="noreferrer"
            tone="ghost-light"
          >
            <TikTokIcon className="h-3.5 w-3.5" />
            {c.follow}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
