"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const aiSteps = [
  {
    who: "You",
    title: "Tell us what you need",
    text: "A new system, a mobile app, a new feature, or taking over an existing system",
    icon: "chat",
    ai: false,
  },
  {
    who: "Senior engineer",
    title: "Assesses & plans",
    text: "Uses AI to learn any system fast, then guides it with business and domain knowledge",
    icon: "bulb",
    ai: false,
  },
  {
    who: "AI",
    title: "Writes the code",
    text: "To top coding and security standards, in hours, not days",
    note: "e.g. Cursor, Claude Code",
    icon: "bolt",
    ai: true,
  },
  {
    who: "AI",
    title: "Tests it",
    text: "Creates test cases and checks most of the work",
    icon: "check",
    ai: true,
  },
  {
    who: "Senior engineer",
    title: "Reviews it",
    text: "Checks code and tests against coding and security standards",
    icon: "shield",
    ai: false,
  },
  {
    who: "You",
    title: "Get it live",
    text: "Faster, for less",
    icon: "pen",
    ai: false,
  },
] as const;

const results = [
  ["About 1/3 of the cost", "Far fewer paid hours for the same work"],
  ["About 1/3 of the time", "Delivered in a fraction of the usual time"],
  ["Quality kept", "A human expert checks every line"],
] as const;

const stats = [
  {
    value: 84,
    text: "of developers worldwide use or plan to use AI tools in their work",
    source: "Stack Overflow Developer Survey 2025",
  },
  {
    value: 75,
    text: "of all new code at Google is written by AI and approved by engineers",
    source: "Sundar Pichai, Google CEO, April 2026",
    featured: true,
  },
  {
    value: 51,
    text: "of professional developers use AI tools every day",
    source: "Stack Overflow Developer Survey 2025",
  },
  {
    value: 30,
    text: "Up to 30% of Microsoft's code is already written by AI",
    source: "Satya Nadella, Microsoft CEO, April 2025",
  },
] as const;

const countries = ["USA", "United Kingdom", "Australia", "New Zealand", "Denmark"];

const coreStats = [
  { value: 40, prefix: "", suffix: "+", label: "years of combined senior experience" },
  { value: 60, prefix: "$", suffix: "K+", label: "earned on Upwork with 3,100+ hours" },
  { value: 2, prefix: "", suffix: "", label: "products co-founded: Aerotake and a school ERP" },
] as const;

const people = [
  {
    years: "15+ years",
    name: "Sabber Ahammed",
    role: "Senior Full-Stack Developer · Adjunct Asst. Professor, United International University",
    points: [
      "12+ years building systems for Australian and New Zealand clients",
      ".NET Core, React, Next.js, TypeScript, GraphQL",
      "18+ delivered projects, including mobile apps",
    ],
    line: "Modern web and mobile apps, built to scale",
  },
  {
    years: "15+ years",
    name: "Ahmed Lutful Zamil",
    role: "Senior .NET Full-Stack Consultant",
    points: [
      "Offshore engineer for clients in the USA, UK, Australia, New Zealand and Denmark",
      ".NET Core, ASP.NET MVC, Angular, Azure, CI/CD",
      "Microservices with RabbitMQ, IoT, SaaS",
    ],
    line: "Upwork: $60K+ earned, 3,100+ hours, top client reviews",
  },
  {
    years: "12+ years",
    name: "Raihana Fardous",
    role: "Senior .NET Engineer · Solution Builder",
    points: [
      "12 years on MWR Life, MWR Financial and Guestmember",
      "Co-founded Aerotake (travel booking platform) and a school ERP (Odoo)",
      "NASA freelance project (ISS asset planning)",
    ],
    line: "Complex business systems, built and supported end to end",
  },
] as const;

const chips = [
  "UI/UX design",
  "Web apps",
  "iOS & Android apps",
  "Take over existing systems",
  "PHP → .NET migration",
  "Support, hosting & security",
  ".NET / .NET Core",
  "Angular · React · Next.js",
  "SQL Server · PostgreSQL · MySQL",
  "Azure · Docker · Kubernetes · CI/CD",
  "ERP (Odoo)",
  "AI-assisted development",
];

function useSeen() {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  return { ref, seen, reduce: Boolean(reduce) };
}

function useCycle(length: number, seen: boolean, reduce: boolean, ms: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!seen || reduce) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % length), ms);
    return () => window.clearInterval(timer);
  }, [length, ms, reduce, seen]);
  return reduce ? -1 : index;
}

function useCount(target: number, seen: boolean, reduce: boolean) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    if (!seen || reduce) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1100);
      setValue(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduce, seen, target]);
  return value;
}

function StepIcon({ name }: { name: string }) {
  const props = { viewBox: "0 0 24 24", className: "h-6 w-6", fill: "none", stroke: "currentColor", strokeWidth: 1.6, "aria-hidden": true } as const;
  if (name === "chat") {
    return (
      <svg {...props}>
        <path d="M5 6.5h14v8.5H8.5L5 18.5v-12Z" />
      </svg>
    );
  }
  if (name === "bulb") {
    return (
      <svg {...props}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c.4.4.7 1 .8 1.6V17h4.4v-1.4c.1-.6.4-1.2.8-1.6A6 6 0 0 0 12 3Z" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg {...props}>
        <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m8 12 2.6 2.6L16.5 9" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 5 6v6c0 4 2.8 6.6 7 8 4.2-1.4 7-4 7-8V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M14 4.5 19 9.5 9 19.5H4v-5L14 4.5Z" />
    </svg>
  );
}

function AiProcess() {
  const { ref, seen, reduce } = useSeen();
  const active = useCycle(aiSteps.length, seen, reduce, 1500);
  const step = active < 0 ? aiSteps.length - 1 : active;

  return (
    <section ref={ref} className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">How we build</p>
            <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
              How AI-assisted development
              <span className="mt-2 block font-display font-normal text-cyan italic">saves you time and money</span>
            </h2>
          </div>
          <p className="text-[10px] tracking-[0.22em] text-faint uppercase" aria-live="polite">
            {reduce ? "Ready" : "Playing"}
            <span className="mx-3 text-line" aria-hidden="true">
              |
            </span>
            Step <span className="text-cyan">{step + 1}</span> / 0{aiSteps.length}
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">A human expert leads. AI does the heavy lifting. A human expert checks.</p>

        <div className="relative mt-8 h-[3px] bg-line" aria-hidden="true">
          <div
            className="story-travel h-full origin-left bg-gradient-to-r from-blue via-cyan to-blue"
            style={{ transform: `scaleX(${seen ? (step + 1) / aiSteps.length : 0})`, boxShadow: "0 0 14px rgba(0,216,240,0.8)" }}
          />
          <span
            className="story-travel absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_8px_#fff,0_0_16px_#00d8f0]"
            style={{ left: `calc(${((step + 0.5) / aiSteps.length) * 100}% - 6px)` }}
          />
        </div>

        <ol className="mt-6 grid gap-3 lg:grid-cols-6">
          {aiSteps.map((item, index) => {
            const on = reduce || index === step;
            return (
              <li key={item.title} className="relative">
                <article className={`flex h-full flex-col border px-4 py-4 ${item.ai ? "bg-[#070d16]" : "bg-card"} ${on ? "story-live" : "border-line"}`}>
                  <span className="w-fit border border-line px-2 py-0.5 text-[10px] tracking-[0.16em] text-cyan uppercase">{item.who}</span>
                  <span className={`mt-4 ${on ? "text-cyan" : "text-muted"}`}>
                    <StepIcon name={item.icon} />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.text}</p>
                  {"note" in item ? <p className="mt-3 w-fit border border-cyan/50 px-2 py-1 text-[10px] tracking-[0.08em] text-cyan">{item.note}</p> : null}
                </article>
                {index < aiSteps.length - 1 ? (
                  <span className={`absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 text-sm lg:block ${index === step ? "text-cyan" : "text-faint"}`} aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>

        <ul className="mt-4 grid gap-3 lg:grid-cols-3">
          {results.map(([title, text], index) => (
            <li key={title} className="rise border border-cyan/40 bg-cyan/5 px-4 py-4" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="font-display text-xl text-cyan italic">{title}</p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-4 border border-line bg-[#070d16] px-5 py-4 text-sm leading-relaxed text-ink">
          Proof: we built our own travel platform,{" "}
          <a href="https://aerotake.net" className="text-cyan hover:text-ink" target="_blank" rel="noreferrer">
            aerotake.net
          </a>
          , in about 4 months of weekends. B2C is live; B2B, white-label and hotel modules are coming soon.
        </p>
        <p className="mt-3 text-center text-xs text-faint">Cost and time savings are typical of our own projects and vary by task.</p>
      </div>
    </section>
  );
}

function StatCard({ item, seen, reduce }: { item: (typeof stats)[number]; seen: boolean; reduce: boolean }) {
  const value = useCount(item.value, seen, reduce);
  const featured = "featured" in item && item.featured;
  return (
    <article className={`flex flex-col border px-5 py-5 ${featured ? "border-cyan bg-[#07141c] shadow-[0_0_28px_rgba(0,216,240,0.16)]" : "border-line bg-card"}`}>
      <p className={`font-display text-5xl italic ${featured ? "text-cyan" : "text-ink"}`}>
        {value}
        <span className="text-cyan">%</span>
      </p>
      <div className="mt-3 h-1 overflow-hidden bg-line">
        <div
          className="story-travel h-full origin-left bg-cyan"
          style={{ transform: `scaleX(${seen || reduce ? item.value / 100 : 0.08})`, boxShadow: "0 0 10px #00d8f0" }}
        />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink">{item.text}</p>
      <p className="mt-3 text-xs text-faint">{item.source}</p>
    </article>
  );
}

function WorldStats() {
  const { ref, seen, reduce } = useSeen();
  return (
    <section ref={ref} className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
          This is now how the world
          <span className="font-display font-normal text-cyan italic"> builds software</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">AI-assisted development is no longer an experiment. It is the standard.</p>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {stats.slice(0, 3).map((item) => (
            <StatCard key={item.value} item={item} seen={seen} reduce={reduce} />
          ))}
          <StatCard item={stats[3]} seen={seen} reduce={reduce} />
          <article className="flex flex-col justify-center border border-cyan/50 bg-cyan/10 px-5 py-6 lg:col-span-2">
            <h3 className="font-display text-2xl text-cyan italic sm:text-3xl">AI writes the code. Experts approve it.</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">The leaders use AI for speed and senior engineers for judgment. That is exactly how we work.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CoreTeam() {
  const { ref, seen, reduce } = useSeen();
  const country = useCycle(countries.length, seen, reduce, 1400);
  const person = useCycle(people.length, seen, reduce, 2200);
  const years = useCount(40, seen, reduce);
  const earnings = useCount(60, seen, reduce);
  const products = useCount(2, seen, reduce);
  const figures = [years, earnings, products];

  return (
    <section ref={ref} className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
          Our core team.
          <span className="font-display font-normal text-cyan italic"> Any project. Any size.</span>
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          Three senior engineers who have worked together for more than 12 years, backed by junior developers and a wide network of trusted senior specialists.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2 border border-line bg-[#070d16] px-4 py-4">
          <span className="mr-2 text-[10px] tracking-[0.18em] text-cyan uppercase">Clients served in</span>
          {countries.map((name, index) => (
            <span key={name} className={`border px-3 py-1 text-sm ${index === country ? "story-live text-ink" : "border-line text-muted"}`}>
              {name}
            </span>
          ))}
        </div>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coreStats.map((item, index) => (
            <li key={item.label} className="border border-cyan/40 bg-cyan/5 px-4 py-5">
              <p className="font-display text-4xl text-cyan italic">
                {item.prefix}
                {figures[index]}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.label}</p>
            </li>
          ))}
          <li className="border border-cyan/40 bg-cyan/5 px-4 py-5">
            <p className="font-display text-4xl text-cyan italic">+ Network</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">trusted senior specialists on call, plus juniors for support</p>
          </li>
        </ul>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {people.map((personCard, index) => (
            <article key={personCard.name} className={`flex flex-col border bg-card px-5 py-5 ${index === person ? "story-live" : "border-line"}`}>
              <span className="w-fit border border-cyan/40 px-2 py-0.5 text-[10px] tracking-[0.16em] text-cyan uppercase">{personCard.years}</span>
              <h3 className="mt-4 text-xl font-semibold">{personCard.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{personCard.role}</p>
              <ul className="mt-4 space-y-2">
                {personCard.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border border-line bg-[#070d16] px-3 py-3 text-sm leading-relaxed text-cyan">{personCard.line}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 border border-line bg-card px-5 py-5">
          <p className="font-semibold text-ink">Any kind of software, from design to launch and beyond, in one team</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <li key={chip} className="rise border border-line px-3 py-1 text-xs text-muted" style={{ animationDelay: `${index * 40}ms` }}>
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function TeamStory() {
  return (
    <>
      <AiProcess />
      <WorldStats />
      <CoreTeam />
    </>
  );
}
