"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const TIMES = ["09:30", "11:00", "14:00", "16:30"];

function midnight(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function mondayOf(date: Date) {
  const copy = midnight(date);
  const day = copy.getDay();
  const shift = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + shift);
  return copy;
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function monthLabel(days: Date[]) {
  const first = days[0].toLocaleDateString("en-GB", { month: "long" });
  const last = days[4].toLocaleDateString("en-GB", { month: "long" });
  const year = days[4].getFullYear();
  return first === last ? `${first} · ${year}` : `${first} — ${last} · ${year}`;
}

export function BookPanel({ live = false }: { live?: boolean }) {
  const reduce = useReducedMotion();
  const [today, setToday] = useState<Date | null>(null);
  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [time, setTime] = useState("11:00");
  const [zone, setZone] = useState("Local time");
  const [sent, setSent] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const now = midnight(new Date());
    const start = mondayOf(now);
    const days = Array.from({ length: 5 }, (_, index) => addDays(start, index));
    setToday(now);
    setWeekStart(start);
    setSelectedDay(days.find((day) => day >= now) ?? null);
    setZone(Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " "));
  }, []);

  const days = useMemo(() => (weekStart ? Array.from({ length: 5 }, (_, index) => addDays(weekStart, index)) : []), [weekStart]);

  useEffect(() => {
    if (!live || held || reduce || !today || days.length === 0) return;
    const open = days.filter((day) => day >= today);
    if (open.length === 0) return;
    let mode: "day" | "time" = "day";
    let index = -1;
    const timer = window.setInterval(() => {
      if (mode === "day") {
        index = (index + 1) % open.length;
        setSelectedDay(open[index]);
        if (index === open.length - 1) {
          mode = "time";
          index = -1;
        }
        return;
      }
      index = (index + 1) % TIMES.length;
      setTime(TIMES[index]);
      if (index === TIMES.length - 1) {
        mode = "day";
        index = -1;
      }
    }, 700);
    return () => window.clearInterval(timer);
  }, [live, held, reduce, today, days]);
  const currentMonday = today ? mondayOf(today) : null;
  const canGoBack = Boolean(weekStart && currentMonday && weekStart.getTime() > currentMonday.getTime());

  function shiftWeek(direction: -1 | 1) {
    if (!weekStart) return;
    const next = addDays(weekStart, direction * 7);
    if (direction < 0 && currentMonday && next.getTime() < currentMonday.getTime()) return;
    setWeekStart(next);
    if (!today) return;
    const nextDays = Array.from({ length: 5 }, (_, index) => addDays(next, index));
    const stillVisible = selectedDay && nextDays.some((day) => sameDay(day, selectedDay));
    if (!stillVisible) {
      setSelectedDay(nextDays.find((day) => day >= today) ?? null);
    }
  }

  function requestTime() {
    if (!selectedDay) return;
    const when = selectedDay.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const body = [
      "Intro call request",
      `When: ${when} at ${time}`,
      `Timezone: ${zone}`,
      "",
      "This is a request. Please reply to confirm the time.",
    ].join("\n");
    const subject = `Intro call request — ${when} at ${time}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const selectedLabel = selectedDay
    ? selectedDay.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
    : "Choose a day";

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (live) setHeld(true);
      }}
      onMouseLeave={() => {
        if (live) setHeld(false);
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-8 left-8 h-24 w-64 rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-[#0b111a]/80 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-5 md:px-8 md:py-6">
          <div>
            <p className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-muted uppercase">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              Sky Lake · 30-min intro
            </p>
            <p className="mt-2 font-display text-2xl leading-none text-ink md:text-3xl">Pick a time that works</p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-[10px] tracking-[0.2em] text-faint uppercase">Your timezone</p>
            <p className="mt-1 text-[11px] tracking-[0.14em] text-ink uppercase">{zone}</p>
          </div>
        </div>

        <div className="px-5 pt-6 md:px-8 md:pt-8">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.22em] text-faint uppercase">{days.length ? monthLabel(days) : "This week"}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous week"
                disabled={!canGoBack}
                onClick={() => shiftWeek(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan hover:text-cyan disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next week"
                onClick={() => shiftWeek(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan hover:text-cyan"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-2 md:gap-3">
            {days.map((day) => {
              const past = today ? day < today : false;
              const selected = selectedDay ? sameDay(day, selectedDay) : false;
              return (
                <button
                  key={`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`}
                  type="button"
                  disabled={past}
                  aria-pressed={selected}
                  onClick={() => setSelectedDay(day)}
                  className={`relative flex flex-col items-center gap-1 rounded-xl border py-3 transition-all duration-500 sm:py-4 ${
                    selected
                      ? "border-cyan bg-cyan/10 text-ink"
                      : "border-line bg-card/40 text-muted hover:-translate-y-0.5 hover:border-cyan/40 hover:text-ink"
                  } disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0`}
                >
                  <span className={`text-[9px] tracking-[0.18em] uppercase ${selected ? "text-cyan" : "text-faint"}`}>
                    {day.toLocaleDateString("en-GB", { weekday: "short" })}
                  </span>
                  <span className="font-display text-2xl leading-none md:text-3xl">{day.getDate()}</span>
                  <span className="text-[8px] tracking-[0.16em] text-faint uppercase">
                    {day.toLocaleDateString("en-GB", { month: "short" })}
                  </span>
                  {selected ? <span aria-hidden="true" className="absolute inset-x-3 bottom-1.5 h-px bg-cyan" /> : null}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between text-[10px] tracking-[0.18em] text-faint uppercase">
            <span>{selectedDay ? `Available · ${selectedLabel}` : "Choose a weekday"}</span>
            <span>{TIMES.length} times</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TIMES.map((slot) => {
              const selected = slot === time;
              return (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={selected}
                  disabled={!selectedDay}
                  onClick={() => setTime(slot)}
                  className={`h-11 border text-sm font-semibold transition-colors ${
                    selected ? "border-cyan bg-cyan text-black" : "border-line text-ink hover:border-cyan"
                  } disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  {slot}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-faint uppercase">Selected</p>
              <p className="mt-1 font-display text-2xl text-cyan italic">
                {selectedLabel}
                {selectedDay ? ` · ${time}` : ""}
              </p>
            </div>
            {sent ? (
              <p role="status" className="max-w-xs text-sm text-muted">
                Your mail app should be open. If it did not, write to {site.email}. We reply within one business day. The time is not held until we confirm.
              </p>
            ) : (
              <button
                type="button"
                disabled={!selectedDay}
                onClick={requestTime}
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-semibold text-black transition-colors hover:bg-[#5ee7f7] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Request this time
              </button>
            )}
          </div>
          <p className="pb-5 text-[10px] tracking-[0.16em] text-faint uppercase">Suggested times. We confirm by email.</p>
        </div>
      </div>
    </div>
  );
}
