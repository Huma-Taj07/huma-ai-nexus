import { useMemo, useState } from "react";
import {
  Calendar as CalendarIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Loader2,
  Mail,
  User,
  Video,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getCalLink, getFormspreeId, submitBookingRequest } from "@/lib/booking";
import { cn } from "@/lib/utils";
import { CalBooking } from "./CalBooking";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

function buildTimeSlots() {
  const slots: { h: number; m: number; label: string }[] = [];
  for (let h = 9; h <= 17; h++) {
    for (const m of [0, 30]) {
      const period = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      slots.push({ h, m, label: `${hour12}:${pad(m)} ${period}` });
    }
  }
  return slots;
}

function timezoneLabel() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const offset = -new Date().getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hh = Math.floor(Math.abs(offset) / 60);
  const mm = Math.abs(offset) % 60;
  return `GMT${sign}${pad(hh)}:${pad(mm)} · ${tz}`;
}

function CustomBooking() {
  const reduceMotion = useReducedMotion();
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<{ h: number; m: number; label: string } | null>(
    null,
  );
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const slots = useMemo(buildTimeSlots, []);
  const tzLabel = useMemo(timezoneLabel, []);

  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  const goPrev = () => {
    if (isPastMonth) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNext = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const selectDay = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    if (d < today) return;
    setSelectedDate(d);
    setSelectedTime(null);
    setStatus("idle");
  };

  const formattedDate = (d: Date, opts?: Intl.DateTimeFormatOptions) =>
    d.toLocaleDateString(undefined, opts ?? { weekday: "short", month: "short", day: "numeric" });

  const canSubmit =
    selectedDate &&
    selectedTime &&
    guestName.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail.trim());

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime || !canSubmit) return;

    setStatus("submitting");
    setErrorMessage("");

    const result = await submitBookingRequest({
      name: guestName.trim(),
      email: guestEmail.trim(),
      dateLabel: formattedDate(selectedDate, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      timeLabel: selectedTime.label,
      timezone: tzLabel,
    });

    if (!result.ok) {
      setStatus("error");
      setErrorMessage(result.message);
      return;
    }

    setStatus("success");
  };

  const cardClass =
    "card-shadow w-full max-w-[46rem] overflow-hidden rounded-4xl border border-border bg-white";

  if (status === "success" && selectedDate && selectedTime) {
    return (
      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(cardClass, "p-8 sm:p-10")}
      >
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={reduceMotion ? undefined : { scale: 0 }}
            animate={reduceMotion ? undefined : { scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className="flex size-16 items-center justify-center rounded-full bg-yellow text-foreground"
          >
            <Check className="size-8 stroke-[2.5]" />
          </motion.span>
          <h3 className="font-display mt-5 text-2xl font-extrabold">Booking request sent!</h3>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Your slot request has been emailed to Huma. A confirmation with the Google Meet link
            will be sent to <span className="font-semibold text-foreground">{guestEmail}</span>{" "}
            shortly.
          </p>

          <div className="mt-7 w-full max-w-md space-y-3 rounded-2xl border border-border bg-[#fffbf2] p-5 text-left">
            <div className="flex items-center gap-3">
              <User className="size-5 shrink-0 text-yellow" />
              <span className="text-[15px] font-bold text-foreground">{guestName}</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarIcon className="size-5 shrink-0 text-yellow" />
              <span className="text-[15px] font-bold text-foreground">
                {formattedDate(selectedDate, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-yellow" />
              <span className="text-[15px] font-bold text-foreground">
                {selectedTime.label} · 30 min
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="size-5 shrink-0 text-yellow" />
              <span className="text-[15px] font-bold text-foreground">Google Meet link via email</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSelectedTime(null);
              setGuestName("");
              setGuestEmail("");
            }}
            className="mt-7 inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-yellow"
          >
            Book another time
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={cn(cardClass, "grid lg:grid-cols-[0.85fr_1.15fr]")}>
      <div className="border-b border-border p-6 sm:p-7 lg:border-b-0 lg:border-r">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-yellow text-base font-extrabold text-foreground">
          HT
        </span>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Huma Taj
        </p>
        <h3 className="font-display mt-1.5 text-xl font-extrabold leading-tight">Strategy Call</h3>

        <ul className="mt-5 space-y-3 text-[14px] font-semibold text-muted-foreground">
          <li className="flex items-center gap-2.5">
            <Clock className="size-4 shrink-0 text-yellow" />
            30 min
          </li>
          <li className="flex items-center gap-2.5">
            <Video className="size-4 shrink-0 text-yellow" />
            Google Meet
          </li>
          <li className="flex items-center gap-2.5">
            <CalendarIcon className="size-4 shrink-0 text-yellow" />
            {selectedDate ? formattedDate(selectedDate) : "Pick a date"}
            {selectedTime ? ` · ${selectedTime.label}` : ""}
          </li>
        </ul>

        <p className="mt-6 text-[13.5px] leading-relaxed text-muted-foreground">
          Choose a slot, enter your email, and both you and Huma will receive booking details by
          email.
        </p>

        {!getFormspreeId() && (
          <p className="mt-4 rounded-xl border border-yellow/30 bg-soft-yellow/30 px-3 py-2.5 text-[12px] font-semibold leading-relaxed text-foreground/80">
            Connect Cal.com or Formspree in <code className="text-[11px]">.env</code> to enable live
            booking emails.
          </p>
        )}
      </div>

      <div className="grid gap-5 p-6 sm:p-7 md:grid-cols-[1fr_9.5rem]">
        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-[15px] font-extrabold">
              {MONTHS[viewMonth]} {viewYear}
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous month"
                onClick={goPrev}
                disabled={isPastMonth}
                className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-yellow disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next month"
                onClick={goNext}
                className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-yellow"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAYS.map((d) => (
              <span key={d} className="text-[11px] font-bold uppercase text-muted-foreground/70">
                {d}
              </span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <span key={`e-${i}`} />;
              const d = new Date(viewYear, viewMonth, day);
              d.setHours(0, 0, 0, 0);
              const isPast = d < today;
              const isToday = d.getTime() === today.getTime();
              const isSelected = selectedDate?.getTime() === d.getTime();
              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => selectDay(day)}
                  className={cn(
                    "mx-auto flex size-9 items-center justify-center rounded-full text-[13px] font-bold transition-colors",
                    isSelected
                      ? "bg-yellow text-foreground"
                      : "text-foreground hover:bg-soft-yellow",
                    isPast && "cursor-not-allowed text-muted-foreground/30 hover:bg-transparent",
                    !isSelected && isToday && "ring-1 ring-yellow/60",
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-[#fffbf2] px-3 py-2.5 text-[12px] font-semibold text-muted-foreground">
            <Globe className="size-4 shrink-0 text-yellow" />
            <span className="truncate">{tzLabel}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-3 text-[13px] font-bold text-foreground">
            {selectedDate
              ? formattedDate(selectedDate, { weekday: "long", day: "numeric" })
              : "Select a date"}
          </p>
          <div className="relative">
            <div className="flex max-h-62 flex-col gap-2 overflow-y-auto pr-1 [scrollbar-width:thin]">
              <AnimatePresence initial={false}>
                {selectedDate ? (
                  slots.map((slot, i) => {
                    const isSel = selectedTime?.h === slot.h && selectedTime?.m === slot.m;
                    return (
                      <motion.button
                        key={slot.label}
                        type="button"
                        initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: reduceMotion ? 0 : i * 0.015 }}
                        onClick={() => {
                          setSelectedTime(slot);
                          setStatus("idle");
                        }}
                        className={cn(
                          "shrink-0 rounded-xl border py-2.5 text-center text-[13px] font-bold transition-colors",
                          isSel
                            ? "border-yellow bg-yellow text-foreground"
                            : "border-border bg-white text-foreground hover:border-yellow hover:bg-soft-yellow/50",
                        )}
                      >
                        {slot.label}
                      </motion.button>
                    );
                  })
                ) : (
                  <p className="mt-6 text-center text-[12.5px] text-muted-foreground/70">
                    Pick a day to see available times.
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full border-t border-border p-5 sm:px-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
              <User className="size-3.5" />
              Your name
            </span>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground outline-none transition-colors focus:border-yellow"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
              <Mail className="size-3.5" />
              Your email
            </span>
            <input
              type="email"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground outline-none transition-colors focus:border-yellow"
            />
          </label>
        </div>

        {status === "error" && errorMessage && (
          <p className="mt-3 text-sm font-semibold text-red-600">{errorMessage}</p>
        )}

        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[13.5px] text-muted-foreground">
            {selectedDate && selectedTime ? (
              <>
                Requesting{" "}
                <span className="font-bold text-foreground">
                  {formattedDate(selectedDate)} at {selectedTime.label}
                </span>
              </>
            ) : (
              "Select a date, time, and your email to continue."
            )}
          </p>
          <motion.button
            type="button"
            disabled={!canSubmit || status === "submitting"}
            onClick={handleConfirm}
            whileHover={canSubmit && status !== "submitting" ? { y: -2, scale: 1.02 } : undefined}
            whileTap={canSubmit && status !== "submitting" ? { scale: 0.98 } : undefined}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow px-7 py-3 text-sm font-bold text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Request this slot"
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export function Booking() {
  if (getCalLink()) {
    return <CalBooking />;
  }

  return <CustomBooking />;
}
