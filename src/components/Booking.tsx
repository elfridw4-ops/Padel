import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { useI18n, fill } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";
import { Users, CreditCard, Share2, Copy, Shield, Info, Check } from "lucide-react";
import { type LegalDocKey } from "@/components/LegalPage";

const slots = ["06:00", "07:30", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00", "22:30"];
const PEAK = new Set(["18:00", "19:30", "21:00"]);
const OFF_PEAK_PRICE = 14;
const PEAK_PRICE = 18;

type PaymentMode = "split" | "single" | "wallet";

interface Day {
  key: string;
  weekday: string;
  day: number;
  month: string;
  label: string;
}

interface Teammate {
  id: number;
  name: string;
  contact: string;
  paid: boolean;
}

interface BookingProps {
  onNavigateLegal?: (doc: LegalDocKey) => void;
}

/** Deterministic pseudo-availability so the grid feels alive without a backend. */
function isFull(dayIndex: number, slotIndex: number) {
  return (dayIndex * 7 + slotIndex * 3) % 5 === 0;
}

export function Booking({ onNavigateLegal }: BookingProps) {
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
  }, [locale, b.today]);

  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<number | null>(3);
  const [players, setPlayers] = useState<2 | 4>(4);
  const [paymentMode, setPaymentMode] = useState<PaymentMode>("split");
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);

  const [teammates, setTeammates] = useState<Teammate[]>([
    { id: 1, name: "Moi (Titulaire)", contact: "Organisateur", paid: true },
    { id: 2, name: "", contact: "", paid: false },
    { id: 3, name: "", contact: "", paid: false },
    { id: 4, name: "", contact: "", paid: false },
  ]);

  const slotLabel = slot !== null ? slots[slot] : null;
  const unit = slotLabel && PEAK.has(slotLabel) ? PEAK_PRICE : OFF_PEAK_PRICE;
  const total = unit * players;
  const upfrontDeposit = paymentMode === "split" ? unit : total;

  const bookingRef = useMemo(
    () =>
      `TR-${days[day].key.replace(/-/g, "").slice(4)}${slot !== null ? slots[slot].replace(":", "") : ""}`,
    [day, slot, days],
  );

  const chooseDay = (i: number) => {
    setDay(i);
    setConfirmed(false);
    if (slot !== null && isFull(i, slot)) setSlot(null);
  };

  const handleCopyInvite = () => {
    const inviteUrl = `https://terrapadel.fr/join/${bookingRef}`;
    navigator.clipboard?.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navigateToLegal = (doc: LegalDocKey, slug: string) => {
    if (onNavigateLegal) {
      onNavigateLegal(doc);
    } else {
      window.history.pushState({ doc }, "", `/${slug}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const updateTeammate = (index: number, field: "name" | "contact", value: string) => {
    setTeammates((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
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

        <div className="mt-14 grid min-w-0 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Selection Column */}
          <Reveal className="min-w-0 w-full lg:col-span-8 space-y-10">
            {/* 1. Date */}
            <fieldset className="min-w-0 w-full border-0 p-0 m-0">
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
                {b.stepDate}
              </legend>
              <div className="mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
                {days.map((d, i) => (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => chooseDay(i)}
                    aria-pressed={day === i}
                    className={cn(
                      "flex min-w-[4.6rem] shrink-0 flex-1 flex-col items-center rounded-2xl border px-2.5 py-3.5 transition-all duration-500 sm:min-w-[5.25rem] sm:px-3 sm:py-4",
                      day === i
                        ? "border-ink-950 bg-ink-950 text-bone-50"
                        : "border-ink-950/15 bg-transparent text-ink-950 hover:border-ink-950/50",
                    )}
                  >
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {d.weekday}
                    </span>
                    <span className="mt-1 font-display text-3xl sm:text-4xl leading-none">{d.day}</span>
                    <span className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {d.month}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 2. Time Slots */}
            <fieldset className="min-w-0 w-full border-0 p-0 m-0">
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
                        "relative rounded-xl border py-3 font-display text-xl tracking-wide transition-all duration-500 sm:py-3.5 sm:text-2xl",
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

            {/* 3. Players & Format */}
            <fieldset className="min-w-0 w-full border-0 p-0 m-0">
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
                      "flex items-center justify-between rounded-xl border px-4 py-3.5 transition-all duration-500 sm:px-5 sm:py-4",
                      players === p ? "border-ink-950 bg-ink-950 text-bone-50" : "border-ink-950/15 hover:border-ink-950/50",
                    )}
                  >
                    <span className="font-display text-2xl sm:text-3xl leading-none">
                      {p === 2 ? b.singles : b.doubles}
                    </span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {fill(b.playersLabel, { n: p })}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 4. Payment & Split Option */}
            <fieldset className="min-w-0 w-full border-0 p-0 m-0">
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
                {b.stepPayment}
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {/* Option: Split Pay */}
                <button
                  type="button"
                  onClick={() => setPaymentMode("split")}
                  className={cn(
                    "flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 relative",
                    paymentMode === "split"
                      ? "border-clay-500 bg-clay-500/10 text-ink-950 shadow-sm"
                      : "border-ink-950/15 hover:border-ink-950/40 text-ink-800",
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <Users className="h-5 w-5 text-clay-600" />
                    {paymentMode === "split" && <span className="h-2 w-2 rounded-full bg-clay-500" />}
                  </div>
                  <span className="mt-2 font-display text-lg uppercase tracking-wide">
                    {b.payModeSplit}
                  </span>
                  <span className="mt-1 text-xs text-ink-600 leading-snug">
                    {fill(b.payModeSplitDesc, { unit })}
                  </span>
                </button>

                {/* Option: Single Payment */}
                <button
                  type="button"
                  onClick={() => setPaymentMode("single")}
                  className={cn(
                    "flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 relative",
                    paymentMode === "single"
                      ? "border-clay-500 bg-clay-500/10 text-ink-950 shadow-sm"
                      : "border-ink-950/15 hover:border-ink-950/40 text-ink-800",
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <CreditCard className="h-5 w-5 text-ink-700" />
                    {paymentMode === "single" && <span className="h-2 w-2 rounded-full bg-clay-500" />}
                  </div>
                  <span className="mt-2 font-display text-lg uppercase tracking-wide">
                    {b.payModeSingle}
                  </span>
                  <span className="mt-1 text-xs text-ink-600 leading-snug">
                    {fill(b.payModeSingleDesc, { total })}
                  </span>
                </button>

                {/* Option: Wallet / Credits */}
                <button
                  type="button"
                  onClick={() => setPaymentMode("wallet")}
                  className={cn(
                    "flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 relative",
                    paymentMode === "wallet"
                      ? "border-clay-500 bg-clay-500/10 text-ink-950 shadow-sm"
                      : "border-ink-950/15 hover:border-ink-950/40 text-ink-800",
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <Shield className="h-5 w-5 text-ink-700" />
                    {paymentMode === "wallet" && <span className="h-2 w-2 rounded-full bg-clay-500" />}
                  </div>
                  <span className="mt-2 font-display text-lg uppercase tracking-wide">
                    {b.payModeWallet}
                  </span>
                  <span className="mt-1 text-xs text-ink-600 leading-snug">
                    {b.payModeWalletDesc}
                  </span>
                </button>
              </div>

              {/* Split Pay Teammates Form (if split mode is selected) */}
              {paymentMode === "split" && (
                <div className="mt-6 rounded-2xl border border-ink-950/15 bg-ink-950/[0.02] p-5 sm:p-6 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-700">
                      {b.teammatesHeading}
                    </p>
                    <span className="text-[0.7rem] rounded-full bg-clay-500/15 px-2.5 py-0.5 font-bold uppercase text-clay-600">
                      {unit} € / joueur
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {/* Host */}
                    <div className="flex items-center justify-between rounded-xl border border-clay-500/40 bg-clay-500/10 px-3.5 py-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-500 text-bone-50 text-[0.65rem] font-bold">
                          1
                        </span>
                        <span className="font-semibold text-ink-950">Vous (Titulaire)</span>
                      </div>
                      <span className="font-bold text-clay-700 uppercase tracking-wider text-[0.65rem]">
                        Acompte {unit} €
                      </span>
                    </div>

                    {/* Teammate 2, 3, 4 */}
                    {[2, 3, 4].slice(0, players - 1).map((pNum, idx) => (
                      <div
                        key={pNum}
                        className="flex items-center gap-2 rounded-xl border border-ink-950/15 bg-bone-50 px-3 py-1.5 focus-within:border-clay-500"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-950/10 text-ink-700 text-[0.65rem] font-semibold">
                          {pNum}
                        </span>
                        <input
                          type="text"
                          placeholder={fill(b.teammatePlaceholder, { n: pNum })}
                          value={teammates[idx + 1]?.name || ""}
                          onChange={(e) => updateTeammate(idx + 1, "name", e.target.value)}
                          className="w-full bg-transparent text-xs text-ink-950 placeholder-ink-400 focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </fieldset>
          </Reveal>

          {/* Sticky Summary Card */}
          <Reveal delay={150} className="min-w-0 w-full lg:col-span-4">
            <aside className="grain relative overflow-hidden rounded-[1.25rem] bg-ink-950 p-6 text-bone-50 sm:p-7 md:p-8 lg:sticky lg:top-28 shadow-xl">
              <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone-50/55">
                    {b.yourSession}
                  </p>
                  <a
                    href="/remboursement"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToLegal("refund", "remboursement");
                    }}
                    className="flex items-center gap-1 text-[0.68rem] text-clay-400 hover:text-clay-300 transition-colors"
                  >
                    <Info className="h-3 w-3" />
                    <span>H-24 Annulation</span>
                  </a>
                </div>

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
                  <div className="flex items-baseline justify-between gap-4 border-b border-bone-50/10 pb-4">
                    <dt className="text-bone-50/55">
                      {paymentMode === "split" ? "Mode Split Pay" : "Paiement Direct"}
                    </dt>
                    <dd className="font-medium text-clay-300">
                      {paymentMode === "split" ? `${players} parts de ${unit} €` : `Court complet`}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-bone-50/55">
                      {paymentMode === "split" ? "À régler maintenant (Acompte)" : "Total Court"}
                      {slotLabel && PEAK.has(slotLabel) && (
                        <span className="ml-1 text-clay-300">· {b.peakTag}</span>
                      )}
                    </dt>
                    <dd className="display-tight font-display text-4xl sm:text-5xl">
                      {slotLabel
                        ? new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0,
                          }).format(upfrontDeposit)
                        : "—"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  {confirmed ? (
                    <div className="animate-fade-up rounded-xl border border-clay-500/50 bg-clay-500/15 p-5 space-y-4">
                      <p className="flex items-center gap-2 font-semibold text-bone-50">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-500">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {b.confirmedTitle}
                      </p>
                      <p className="text-[0.85rem] leading-relaxed text-bone-50/80">
                        {fill(b.confirmedBody, { ref: bookingRef })}
                      </p>

                      {paymentMode === "split" && (
                        <div className="rounded-lg border border-bone-50/15 bg-ink-950/80 p-3.5">
                          <p className="text-xs text-bone-50/80">
                            {fill(b.sharePrompt, { unit })}
                          </p>
                          <div className="mt-2.5 flex items-center gap-2">
                            <input
                              readOnly
                              value={`https://terrapadel.fr/join/${bookingRef}`}
                              className="w-full rounded-md border border-bone-50/20 bg-ink-900 px-2.5 py-1.5 text-xs text-bone-50/90 font-mono"
                            />
                            <button
                              type="button"
                              onClick={handleCopyInvite}
                              className="flex items-center gap-1 shrink-0 rounded-md bg-clay-500 px-3 py-1.5 text-xs font-semibold text-bone-50 hover:bg-clay-400 transition-colors"
                            >
                              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                              <span>{copied ? "Copié" : "Copier"}</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Button
                      tone="clay"
                      className="w-full disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={slot === null}
                      onClick={() => setConfirmed(true)}
                    >
                      {paymentMode === "split"
                        ? fill(b.confirmDeposit, { amount: upfrontDeposit })
                        : b.confirm}
                    </Button>
                  )}

                  <p className="mt-4 text-center text-[0.72rem] text-bone-50/50">
                    {b.finePrint}
                  </p>
                  <p className="mt-2 text-center text-[0.68rem] text-bone-50/40">
                    <a
                      href="/cgv"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToLegal("cgv", "cgv");
                      }}
                      className="underline hover:text-bone-50 transition-colors"
                    >
                      {b.legalNotice}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
