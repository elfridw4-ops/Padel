import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { useI18n, fill } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

const slots = ["06:00", "07:30", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00", "22:30"];
const PEAK = new Set(["18:00", "19:30", "21:00"]);
const OFF_PEAK_PRICE = 14;
const PEAK_PRICE = 18;

interface Day {
  key: string;
  weekday: string;
  day: number;
  month: string;
  label: string;
}

/** Deterministic pseudo-availability so the grid feels alive without a backend. */
function isFull(dayIndex: number, slotIndex: number) {
  return (dayIndex * 7 + slotIndex * 3) % 5 === 0;
}

export function Booking() {
  const { t, locale } = useI18n();
  const b = t.booking;

  const days = useMemo<Day[]>(() => {
    const out: Day[] = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      out.push({
        key: d.toISOString().slice(0, 10),
        weekday: i === 0 ? b.today : d.toLocaleDateString(locale, { weekday: "short" }),
        day: d.getDate(),
        month: d.toLocaleDateString(locale, { month: "short" }),
        label: d.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" }),
      });
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<number | null>(3);
  const [players, setPlayers] = useState<2 | 4>(4);
  const [confirmed, setConfirmed] = useState(false);

  const slotLabel = slot !== null ? slots[slot] : null;
  const unit = slotLabel && PEAK.has(slotLabel) ? PEAK_PRICE : OFF_PEAK_PRICE;
  const total = unit * players;
  const ref = useMemo(
    () =>
      `TR-${days[day].key.replace(/-/g, "").slice(4)}${slot !== null ? slots[slot].replace(":", "") : ""}`,
    [day, slot, days],
  );

  const chooseDay = (i: number) => {
    setDay(i);
    setConfirmed(false);
    if (slot !== null && isFull(i, slot)) setSlot(null);
  };

  return (
    <section id="book" className="bg-bone-50 text-ink-950">
      <div className="container-x py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={b.index} eyebrow={b.eyebrow} lines={b.heading} />
          <Reveal delay={200} className="max-w-sm text-[0.98rem] leading-relaxed text-ink-600 lg:pb-3">
            {b.paragraph}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Selection */}
          <Reveal className="lg:col-span-8">
            <fieldset>
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
                {b.stepDate}
              </legend>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {days.map((d, i) => (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => chooseDay(i)}
                    aria-pressed={day === i}
                    className={cn(
                      "flex min-w-[5.25rem] flex-1 flex-col items-center rounded-2xl border px-3 py-4 transition-all duration-500",
                      day === i
                        ? "border-ink-950 bg-ink-950 text-bone-50"
                        : "border-ink-950/15 bg-transparent text-ink-950 hover:border-ink-950/50",
                    )}
                  >
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {d.weekday}
                    </span>
                    <span className="mt-1 font-display text-4xl leading-none">{d.day}</span>
                    <span className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {d.month}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="sr-only">{b.stepTime}</legend>
              <div className="flex flex-wrap items-center justify-between gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
                <span aria-hidden="true">{b.stepTime}</span>
                <span className="flex items-center gap-4 normal-case tracking-normal">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-clay-500" />
                    {fill(b.peak, { price: PEAK_PRICE })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ink-950/30" />
                    {fill(b.offPeak, { price: OFF_PEAK_PRICE })}
                  </span>
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                {slots.map((s, i) => {
                  const full = isFull(day, i);
                  const selected = slot === i;
                  const isPeak = PEAK.has(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      disabled={full}
                      onClick={() => {
                        setSlot(i);
                        setConfirmed(false);
                      }}
                      aria-pressed={selected}
                      className={cn(
                        "relative rounded-xl border py-3.5 font-display text-2xl tracking-wide transition-all duration-500",
                        full && "cursor-not-allowed border-transparent bg-ink-950/[0.04] text-ink-400 line-through",
                        !full && !selected && "border-ink-950/15 hover:border-ink-950/50",
                        selected && "border-ink-950 bg-ink-950 text-bone-50",
                      )}
                    >
                      {s}
                      {isPeak && !full && (
                        <span
                          className={cn(
                            "absolute right-2 top-2 h-1.5 w-1.5 rounded-full",
                            selected ? "bg-clay-400" : "bg-clay-500",
                          )}
                          aria-label={b.peakTag}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
                {b.stepPlayers}
              </legend>
              <div className="mt-4 grid max-w-md grid-cols-2 gap-2">
                {([2, 4] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setPlayers(p);
                      setConfirmed(false);
                    }}
                    aria-pressed={players === p}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-5 py-4 transition-all duration-500",
                      players === p ? "border-ink-950 bg-ink-950 text-bone-50" : "border-ink-950/15 hover:border-ink-950/50",
                    )}
                  >
                    <span className="font-display text-3xl leading-none">
                      {p === 2 ? b.singles : b.doubles}
                    </span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {fill(b.playersLabel, { n: p })}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          </Reveal>

          {/* Summary */}
          <Reveal delay={150} className="lg:col-span-4">
            <aside className="grain relative overflow-hidden rounded-[1.25rem] bg-ink-950 p-7 text-bone-50 md:p-8 lg:sticky lg:top-28">
              <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
              <div className="relative">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/55">
                  {b.yourSession}
                </p>

                <dl className="mt-6 space-y-4 text-[0.95rem]">
                  <div className="flex items-baseline justify-between gap-4 border-b border-bone-50/10 pb-4">
                    <dt className="text-bone-50/55">{b.date}</dt>
                    <dd className="text-right font-medium capitalize">{days[day].label}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-bone-50/10 pb-4">
                    <dt className="text-bone-50/55">{b.time}</dt>
                    <dd className="font-medium">
                      {slotLabel ? fill(b.timeValue, { time: slotLabel }) : b.pickSlot}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-bone-50/10 pb-4">
                    <dt className="text-bone-50/55">{b.court}</dt>
                    <dd className="font-medium">{b.courtValue}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-bone-50/55">
                      {slotLabel
                        ? fill(b.priceLine, { players, unit })
                        : fill(b.priceLine, { players, unit: "—" })}
                      {slotLabel && PEAK.has(slotLabel) && (
                        <span className="ml-1 text-clay-300">· {b.peakTag}</span>
                      )}
                    </dt>
                    <dd className="display-tight font-display text-5xl">
                      {slotLabel
                        ? new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0,
                          }).format(total)
                        : "—"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  {confirmed ? (
                    <div className="animate-fade-up rounded-xl border border-clay-500/50 bg-clay-500/15 p-5">
                      <p className="flex items-center gap-2 font-semibold">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-500">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {b.confirmedTitle}
                      </p>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-bone-50/70">
                        {fill(b.confirmedBody, { ref })}
                      </p>
                    </div>
                  ) : (
                    <Button
                      tone="clay"
                      className="w-full disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={slot === null}
                      onClick={() => setConfirmed(true)}
                    >
                      {b.confirm}
                    </Button>
                  )}
                  <p className="mt-4 text-center text-[0.72rem] text-bone-50/45">{b.finePrint}</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
