export const capabilities = [
  {
    title: ".NET Core, Microservices, Docker, Next.js",
    text: "To the horizon of the full stack. The API, the services, the containers, and the interface are one system, written so a senior team can still change it after launch.",
  },
  {
    title: "A fast interface",
    text: "Next.js and React, built so the first screen is quick and the pages a client can find are written in plain language.",
  },
  {
    title: "From Dhaka, with the people who write it",
    text: "SKY LAKE SOLUTIONS stays from the first conversation through release. You talk to the engineers, not to a handoff.",
  },
] as const;

export const values = [
  {
    title: "Delivery over promises",
    text: "Every stretch of work ends with something you can open, not a note about what might be ready later.",
  },
  {
    title: "Plain speech",
    text: "You see the repository, the staging site, and an honest read of what is hard.",
  },
  {
    title: "Partnership",
    text: "We work with your team, not around it, and we share what we learn.",
  },
  {
    title: "Proven engineering",
    text: ".NET Core, Next.js, Docker, and the database that fits the product. Chosen because they last.",
  },
  {
    title: "Code that stays",
    text: "Written so the same people, or yours, can change it years from now.",
  },
  {
    title: "From Dhaka, for the world",
    text: "A senior team in Dhaka, building software that clients run anywhere.",
  },
] as const;

export const founders = [
  {
    name: "Ahmed Zamil",
    role: "Co-Founder",
    years: "13 years",
    title: "Full-Stack Developer · ASP.NET, .NET Core, C#, Angular, Azure",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/ahmed.jpg",
    href: "https://www.upwork.com/freelancers/~01964ce0e272143895",
    link: "Open the live Upwork profile",
    chips: ["ASP.NET", ".NET Core", "C#", "Angular", "Azure"],
    points: [
      "Computer science and engineering graduate of 2012, with 13 years building software.",
      "Full-stack work across ASP.NET, .NET Core, C#, Angular, and Azure, including remote work with Milbix in New Zealand.",
    ],
    stats: [
      { value: 60, prefix: "$", suffix: "K+", label: "Total earnings" },
      { value: 8, prefix: "", suffix: "", label: "Total jobs" },
      { value: 3108, prefix: "", suffix: "", label: "Total hours" },
    ],
    highlight: "",
    timeline: [],
  },
  {
    name: "Raihana Fardous",
    role: "Co-Founder",
    years: "12 years",
    title: "Senior software engineer",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/raihana.jpg",
    href: "https://www.linkedin.com/in/raihana-fardous/",
    link: "Open the LinkedIn profile",
    chips: ["ASP.NET MVC", "C#", "SQL Server", "Web API", "AWS"],
    points: [
      "Twelve years on the Microsoft stack: ASP.NET MVC, C#, SQL Server, Web API, REST, Entity Framework, LINQ, and AWS.",
      "She describes a short freelance project for NASA cold-stowage asset planning, built with ASP.NET MVC, C#, and SQL Server.",
    ],
    stats: [],
    highlight: "A lead developer on MWR Life, a travel and membership platform, working with a team in the USA.",
    timeline: [],
  },
  {
    name: "Sabber Ahammed",
    role: "Co-Founder",
    years: "15 years",
    title: "Full-stack developer · hundreds of contributions",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/sabber.jpg",
    href: "https://www.linkedin.com/in/sabber-ahammed-1124b889/",
    link: "Open the LinkedIn profile",
    chips: ["Next.js", "TypeScript", "C#", "Angular", "PostgreSQL"],
    points: [
      "Fifteen years as a full-stack developer, with hundreds of contributions across the products he has shipped.",
    ],
    stats: [],
    highlight: "",
    timeline: [
      { when: "Mar 2014 — Present", title: "Full-stack Developer", detail: "Binary Quest Limited · Dhaka · Next.js and TypeScript" },
      { when: "Apr 2025 — Present", title: "Adjunct Assistant Professor", detail: "United International University · part-time" },
      { when: "Mar 2012 — Feb 2014", title: "Software Engineer", detail: "SmartAspects · Dhaka" },
      { when: "Apr 2008 — Dec 2008", title: "Teacher Assistant", detail: "United International University · Dhaka" },
    ],
  },
] as const;

export const buildLines = [
  "import { ship } from 'skylake'",
  "",
  "export async function build() {",
  "  const product = await ship({",
  "    stack: ['.NET Core', 'Docker', 'Next.js'],",
  "    scale: 'global',",
  "  })",
  "  return product",
  "}",
];
