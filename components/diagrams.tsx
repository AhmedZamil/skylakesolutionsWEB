"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const popEase = [0.34, 1.56, 0.64, 1] as const;

const parent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.7, ease } },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease } },
};

const pop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: popEase } },
};

const origin = { transformBox: "fill-box", transformOrigin: "center" } as const;

const cyan = "#00d8f0";
const blue = "#1f6bff";
const mute = "rgba(231,238,248,0.2)";
const label = "#9aa8bd";

function Frame({ children, viewBox = "0 0 560 300" }: { children: ReactNode; viewBox?: string }) {
  return (
    <motion.svg
      viewBox={viewBox}
      className="h-56 w-full"
      fill="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={parent}
      role="img"
    >
      {children}
    </motion.svg>
  );
}

function Platforms() {
  const left = [70, 130, 190, 250];
  const names = ["Web", "iOS", "Android", "Admin"];
  return (
    <Frame>
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        SURFACES
      </motion.text>
      {left.map((y) => (
        <motion.line key={y} variants={draw} x1="78" y1={y} x2="250" y2="160" stroke={mute} strokeWidth="1.2" />
      ))}
      {left.map((y, index) => (
        <motion.g key={names[index]} variants={fade}>
          <motion.circle variants={pop} style={origin} cx="70" cy={y} r="5" fill="#05070c" stroke={cyan} strokeWidth="1.4" />
          <text x="16" y={y + 4} fill="#c5d0e0" fontSize="12">
            {names[index]}
          </text>
        </motion.g>
      ))}
      <motion.path variants={pop} style={origin} d="M250 122 L292 160 L250 198 L208 160 Z" fill="#071018" stroke={cyan} strokeWidth="1.4" />
      <motion.circle variants={pop} style={origin} cx="250" cy="160" r="3.5" fill={cyan} />
      <path d="M250 122 L292 160 L250 198 L208 160 Z" stroke={cyan} className="pulse-ring" />
      <motion.text variants={fade} x="250" y="232" textAnchor="middle" fill={cyan} fontSize="11" letterSpacing="1.8">
        PLATFORM
      </motion.text>
      {["Auth", "Data", "Billing"].map((name, index) => {
        const y = 100 + index * 60;
        return (
          <motion.g key={name} variants={fade}>
            <motion.line variants={draw} x1="292" y1="160" x2="430" y2={y} stroke={mute} strokeWidth="1.2" />
            <circle cx="438" cy={y} r="3.5" fill={blue} />
            <text x="450" y={y + 4} fill="#c5d0e0" fontSize="12">
              {name}
            </text>
          </motion.g>
        );
      })}
    </Frame>
  );
}

function Mobile() {
  return (
    <Frame viewBox="0 0 560 300">
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        ONE PRODUCT, TWO POCKETS
      </motion.text>
      {[90, 230, 370].map((x, index) => (
        <motion.g key={x} variants={pop} style={origin}>
          <rect x={x} y="70" width="84" height="150" rx="12" stroke={index === 1 ? cyan : blue} strokeWidth="1.4" />
          <rect x={x + 28} y="82" width="28" height="4" rx="2" fill={mute} />
          <motion.circle variants={pop} style={origin} cx={x + 42} cy="150" r="10" fill={index === 1 ? cyan : blue} />
        </motion.g>
      ))}
      <motion.line variants={draw} x1="174" y1="145" x2="230" y2="145" stroke={cyan} strokeWidth="1.4" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="16;0" dur="1.2s" repeatCount="indefinite" />
      </motion.line>
      <motion.line variants={draw} x1="314" y1="145" x2="370" y2="145" stroke={cyan} strokeWidth="1.4" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="16;0" dur="1.2s" repeatCount="indefinite" />
      </motion.line>
      <motion.text variants={fade} x="280" y="258" textAnchor="middle" fill={label} fontSize="12">
        Shared core, native where it matters
      </motion.text>
    </Frame>
  );
}

function Cloud() {
  const boxes = [
    { x: 36, title: "Commit" },
    { x: 206, title: "Pipeline" },
    { x: 376, title: "Production" },
  ];
  return (
    <Frame>
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        RELEASE PATH
      </motion.text>
      {boxes.map((box) => (
        <motion.g key={box.title} variants={fade}>
          <motion.rect variants={pop} style={origin} x={box.x} y="96" width="140" height="72" stroke={box.title === "Production" ? cyan : blue} strokeWidth="1.4" />
          <text x={box.x + 70} y="138" textAnchor="middle" fill="#e7eef8" fontSize="14">
            {box.title}
          </text>
        </motion.g>
      ))}
      {[176, 346].map((x) => (
        <motion.line key={x} variants={draw} x1={x} y1="132" x2={x + 30} y2="132" stroke={cyan} strokeWidth="1.6" className="flow-dash" />
      ))}
      {["Test", "Review", "Monitor"].map((name, index) => (
        <motion.g key={name} variants={fade}>
          <circle cx={110 + index * 160} cy="220" r="4" fill={cyan} />
          <text x={122 + index * 160} y="224" fill={label} fontSize="12">
            {name}
          </text>
        </motion.g>
      ))}
    </Frame>
  );
}

function Design() {
  return (
    <Frame>
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        FROM SKETCH TO SYSTEM
      </motion.text>
      <motion.rect variants={draw} x="70" y="70" width="180" height="150" stroke={mute} strokeWidth="1.2" />
      <motion.rect variants={draw} x="120" y="96" width="200" height="140" stroke={blue} strokeWidth="1.3" />
      <motion.rect variants={draw} x="190" y="70" width="210" height="160" stroke={cyan} strokeWidth="1.5" />
      <motion.line variants={draw} x1="210" y1="110" x2="360" y2="110" stroke={mute} />
      <motion.line variants={draw} x1="210" y1="136" x2="320" y2="136" stroke={mute} />
      <motion.circle variants={pop} style={origin} cx="250" cy="180" r="8" fill={cyan} />
      <motion.text variants={fade} x="280" y="268" textAnchor="middle" fill={label} fontSize="12">
        Prototype, then a library the team can keep
      </motion.text>
    </Frame>
  );
}

function DataViz() {
  const bars = [70, 110, 86, 140, 120, 168];
  return (
    <Frame>
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        SIGNAL, NOT A SLIDE
      </motion.text>
      {["CRM", "Files", "Events"].map((name, index) => (
        <motion.g key={name} variants={fade}>
          <motion.line variants={draw} x1={70 + index * 70} y1="70" x2="180" y2="130" stroke={mute} />
          <motion.circle variants={pop} style={origin} cx={70 + index * 70} cy="60" r="5" stroke={cyan} fill="#05070c" />
          <text x={70 + index * 70} y="44" textAnchor="middle" fill={label} fontSize="11">
            {name}
          </text>
        </motion.g>
      ))}
      <motion.rect variants={pop} style={origin} x="150" y="120" width="70" height="36" stroke={cyan} />
      <motion.text variants={fade} x="185" y="142" textAnchor="middle" fill={cyan} fontSize="11">
        MODEL
      </motion.text>
      {bars.map((height, index) => (
        <motion.rect
          key={height}
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1, transition: { duration: 0.5, ease, delay: 0.15 * index } },
          }}
          x={300 + index * 28}
          y={230 - height}
          width="16"
          height={height}
          fill={index === bars.length - 1 ? cyan : blue}
          style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        />
      ))}
    </Frame>
  );
}

function Care() {
  return (
    <Frame>
      <motion.text variants={fade} x="8" y="22" fill={label} fontSize="11" letterSpacing="2.4">
        AFTER LAUNCH
      </motion.text>
      <motion.path
        variants={draw}
        d="M120 160 C120 90, 220 70, 280 110 C340 150, 420 90, 450 150 C470 190, 400 240, 300 220 C180 196, 120 230, 120 160"
        stroke={cyan}
        strokeWidth="1.5"
        className="flow-dash"
      />
      {[
        [120, 160, "Watch"],
        [280, 100, "Patch"],
        [450, 150, "Improve"],
        [300, 220, "Report"],
      ].map(([x, y, name]) => (
        <motion.g key={String(name)} variants={fade}>
          <motion.circle variants={pop} style={origin} cx={Number(x)} cy={Number(y)} r="6" fill="#05070c" stroke={blue} strokeWidth="1.5" />
          <text x={Number(x) + 12} y={Number(y) + 4} fill="#c5d0e0" fontSize="12">
            {name}
          </text>
        </motion.g>
      ))}
    </Frame>
  );
}

const cards = [
  {
    title: "Web platforms",
    text: "Signed-in products, portals, and the admin side that keeps them honest.",
    outcome: "A platform your team can extend without a rewrite.",
    Viz: Platforms,
  },
  {
    title: "Mobile products",
    text: "iOS and Android with a shared core, and native work where the phone demands it.",
    outcome: "One product in the pocket, not a thin copy of the website.",
    Viz: Mobile,
  },
  {
    title: "Cloud and delivery",
    text: "The path from a commit to production, with tests and a person watching.",
    outcome: "Releases that do not need a war room.",
    Viz: Cloud,
  },
  {
    title: "Interface design",
    text: "Research, a prototype you can click, and a system your designers can keep.",
    outcome: "Screens decided before the expensive code is written.",
    Viz: Design,
  },
  {
    title: "Data and practical AI",
    text: "Pipelines, dashboards, and AI features that answer a real question in the product.",
    outcome: "A feature people use, measured before it ships.",
    Viz: DataViz,
  },
  {
    title: "Care after launch",
    text: "Patches, incidents, and the small improvements that show up after real use.",
    outcome: "The same team, still accountable when the launch post is over.",
    Viz: Care,
  },
];

export function CapabilityGrid() {
  return (
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Sky Lake turns a rough idea into
          <span className="mt-1 block font-display font-normal text-cyan italic">software people can run.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          One studio covers the product: the interface, the systems behind it, and the release that follows.
        </p>
      </div>
      <div className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:divide-x lg:divide-line">
        {cards.map((card) => (
          <article key={card.title} className="flex flex-col px-2 lg:px-7">
            <card.Viz />
            <h3 className="mt-4 font-display text-2xl text-cyan italic">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.text}</p>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-faint uppercase">Outcome</p>
            <p className="mt-2 text-sm text-ink">{card.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
