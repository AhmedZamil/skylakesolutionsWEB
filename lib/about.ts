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
    yearsCount: 13,
    title: "Full-Stack Developer · ASP.NET, .NET Core, C#, Angular, Azure",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    email: "ahmedlutfulzamil@gmail.com",
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
    yearsCount: 12,
    title: "Senior software engineer",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    email: "raihanafardous@gmail.com",
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
    yearsCount: 15,
    title: "Full-stack developer · hundreds of contributions",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    email: "sabber999@gmail.com",
    photo: "/team/sabber.jpg",
    href: "https://www.linkedin.com/in/sabber-ahammed-1124b889/",
    link: "Open the LinkedIn profile",
    chips: ["Next.js", "TypeScript", "C#", "Angular", "PostgreSQL"],
    points: [
      "Fifteen years as a full-stack developer, with hundreds of contributions across the products he has shipped.",
      "CTO (Team Lead) for years in a Microsoft-partnered company.",
    ],
    stats: [],
    highlight: "",
    timeline: [
      { when: "Mar 2014 — Present", title: "CTO (Team Lead)", detail: "Microsoft-partnered company · for years · Binary Quest Limited, Dhaka" },
      { when: "Apr 2025 — Present", title: "Adjunct Assistant Professor", detail: "United International University · part-time" },
      { when: "Mar 2012 — Feb 2014", title: "Software Engineer", detail: "SmartAspects · Dhaka" },
      { when: "Apr 2008 — Dec 2008", title: "Teacher Assistant", detail: "United International University · Dhaka" },
    ],
  },
] as const;

export const roster = [
  { role: "Senior Developer", count: 4 },
  { role: "Level II Developer", count: 2 },
  { role: "Designer", count: 1 },
  { role: "QA", count: 1 },
  { role: "Architect", count: 1 },
  { role: "Developers", count: 4 },
] as const;

export const bench = [
  { name: "Farhan", role: "Senior Developer", years: 6, stack: ["Flutter", "Dart", "Firebase"] },
  { name: "Nusrat", role: "Senior Developer", years: 4, stack: ["Java", "Android", "REST"] },
  { name: "Imran", role: "Level II Developer", years: 5, stack: ["Laravel", "SQL", "Git"] },
  { name: "Maliha", role: "Designer", years: 7, stack: ["Figma", "Adobe XD", "Illustrator"] },
  { name: "Tanvir", role: "QA", years: 3, stack: ["Postman", "CI/CD", "Git"] },
  { name: "Labib", role: "Architect", years: 4, stack: ["Node.js", "REST", "Firebase"] },
  { name: "Sadia", role: "Developer", years: 5, stack: ["Python", "Flask", "SQLite"] },
  { name: "Rafiq", role: "Developer", years: 6, stack: ["Flutter", "Laravel", "Stripe"] },
] as const;

export type GlowPart = { text: string; blink?: number };
export type SkillGroup = { label: string; chips: readonly string[] };

const raihanaWhy = [
  "Computer science and engineering graduate, software development major.",
  "Remote full-time, 12 continuous years with no pause.",
  "Works to USA time, with an Agile and Scrum mindset for a long remote engagement.",
  "Took core responsibility for a large business payment gateway and commission engine.",
  "Trusted to lead the team.",
  "Agile, tickets, team meetings, and continuous availability are part of the work.",
  "A trustworthy remote resource for a heavy build.",
  "As co-founder, she holds both the business question and the technical one.",
] as const;

const sabberWhy = [
  "A veteran of architecture and development, from N-tier to monolithic to microservices.",
  "SaaS expert.",
  "Architecture across hundreds of heavy builds, and team lead of about 12 teams.",
  "CTO (Team Lead) for years in a Microsoft-partnered company.",
  "Reads the business domain and puts it into software that runs.",
  "Also part of ICMA, finance, with a sharp read of software against the business.",
] as const;

const ahmedWhy = [
  "Upwork consultant, full-time full-stack only.",
  "Remote work with large teams in Denmark, the USA, Canada, New Zealand, and Australia.",
  "Agile and Scrum, a daily update, and a team meeting at the hour the client needs.",
  "Computer science and engineering graduate, software development major.",
  "Remote work with more than 20 teams, carrying the same responsibility as on-site.",
  "Immediately available.",
] as const;

export const founderHire = {
  "Raihana Fardous": {
    line: [{ text: "12 years. Continuous remote senior core developer for a single company in the USA." }] as GlowPart[],
    extraChips: ["Payment gateway", "Stripe", "Commission engine", "Docker", "Kubernetes"],
    groupedOnCard: false,
    whyHire: raihanaWhy,
    upworkCard: false,
  },
  "Sabber Ahammed": {
    line: [{ text: "CTO (Team Lead) for years in a Microsoft-partnered company." }] as GlowPart[],
    extraChips: ["ASP.NET Core", "OAuth", "JWT", "Microservices", "Polyglot", "CI/CD", "Docker", "Kubernetes", "Monolithic", ".NET Core", "Entity Framework"],
    groupedOnCard: false,
    whyHire: sabberWhy,
    upworkCard: false,
  },
  "Ahmed Zamil": {
    line: [
      { text: "Upwork, " },
      { text: "3", blink: 0 },
      { text: "," },
      { text: "1", blink: 1 },
      { text: "0", blink: 2 },
      { text: "8", blink: 3 },
      { text: " hours with " },
      { text: "$", blink: 4 },
      { text: "6", blink: 5 },
      { text: "0", blink: 6 },
      { text: "K", blink: 7 },
      { text: "+", blink: 8 },
      { text: " earnings, only 8 jobs. Full-time full-stack developer on Upwork, across heavy software industries." },
    ] as GlowPart[],
    extraChips: [] as string[],
    groupedOnCard: true,
    whyHire: ahmedWhy,
    upworkCard: true,
    groups: [
      {
        label: "Backend",
        chips: [".NET", ".NET Core", "ASP.NET Core API", "SQL Server", "EF Core", "MassTransit / RabbitMQ", "AutoMapper", "Serilog", "xUnit", "Swagger", "Service Bus", "ASP.NET Identity", "ASP.NET", "C#", "OAuth", "JWT", "Microservices", "Polyglot", "Monolithic", "Entity Framework"],
      },
      {
        label: "Frontend",
        chips: ["Angular", "Next.js", "RxJS"],
      },
      {
        label: "Cloud and services",
        chips: ["Azure", "Azure App Service", "Functions", "Azure Storage", "Service Bus", "Container", "Hub", "CI/CD", "Docker deploy on Azure Linux", "Docker", "Kubernetes", "SharePoint", "Microsoft 365", "Azure CI/CD"],
      },
    ] as SkillGroup[],
  },
} as const;

const frontendChip = /angular|next\.js|rxjs|typescript/i;
const cloudChip = /azure|aws|docker|kubernetes|ci\/cd|ci-cd/i;

export function skillGroups(name: keyof typeof founderHire, chips: readonly string[]): SkillGroup[] {
  const hire = founderHire[name];
  if ("groups" in hire && hire.groups) return [...hire.groups];
  const buckets: Record<string, string[]> = { Backend: [], Frontend: [], "Cloud and services": [] };
  for (const chip of visibleChips(name, chips)) {
    if (frontendChip.test(chip)) buckets.Frontend.push(chip);
    else if (cloudChip.test(chip)) buckets["Cloud and services"].push(chip);
    else buckets.Backend.push(chip);
  }
  return Object.entries(buckets)
    .filter(([, items]) => items.length > 0)
    .map(([label, items]) => ({ label, chips: items }));
}

export function visibleChips(name: keyof typeof founderHire, chips: readonly string[]) {
  const seen = new Set<string>();
  return [...chips, ...founderHire[name].extraChips].filter((chip) => {
    const key = chip.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

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
