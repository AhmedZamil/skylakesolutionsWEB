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
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/ahmed.jpg",
    href: "https://www.upwork.com/freelancers/~01964ce0e272143895",
    link: "Open the live Upwork profile",
    chips: [".NET Core", "Angular", "SQL Server", "Azure"],
    points: [
      "Full-stack .NET engineer and a computer science graduate of 2012, with more than eight years building software.",
      ".NET Core, Angular, SQL Server, and Azure. Remote full-time work for clients in the USA, Denmark, Australia, and New Zealand.",
      "Software engineer at iXora Solution Ltd. in Dhaka, and full-stack .NET developer at Milbix in Nelson, New Zealand.",
      "He has stated publicly that his Upwork work passed 3,000 hours. The live profile opens on Upwork.",
    ],
  },
  {
    name: "Raihana Fardous",
    role: "Co-Founder",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/raihana.jpg",
    href: "https://www.linkedin.com/in/raihana-fardous/",
    link: "Open the LinkedIn profile",
    chips: ["ASP.NET MVC", "C#", "SQL Server", "Web API", "AWS"],
    points: [
      "Senior software engineer with more than ten years on the Microsoft stack: ASP.NET MVC, C#, SQL Server, Web API, REST, Entity Framework, LINQ, and AWS.",
      "A lead developer on MWR Life, a travel and membership platform, working with a team in the USA.",
      "She describes a short freelance project for NASA cold-stowage asset planning, built with ASP.NET MVC, C#, and SQL Server.",
      "She also runs the digital marketing for her own site, Interior Harbor.",
    ],
  },
  {
    name: "Sabber Ahammed",
    role: "Co-Founder",
    place: "SKY LAKE SOLUTIONS · Dhaka, Bangladesh",
    photo: "/team/sabber.jpg",
    href: "https://www.linkedin.com/in/sabber-ahammed-1124b889/",
    link: "Open the LinkedIn profile",
    chips: ["C#", "Angular", "React", "Next.js", "PostgreSQL"],
    points: [
      "Lead full-stack engineer. C and C# on the server. JavaScript, jQuery, Angular, React, TypeScript, and Next.js on the client.",
      "Databases across Microsoft SQL Server, MySQL, and PostgreSQL.",
      "Full-stack developer at Binary Quest Limited in Dhaka since 2014.",
      "Software engineer at SmartAspects from 2012 to 2014.",
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
