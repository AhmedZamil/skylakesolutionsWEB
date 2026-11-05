export const site = {
  name: "Sky Lake Solutions",
  domain: "https://skylakesolutions.com",
  email: "hello@skylakesolutions.com",
  description:
    "Sky Lake Solutions designs, builds, and runs web, mobile, and cloud products for teams that need software they can trust.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export const industries = [
  {
    slug: "school-erp",
    name: "School ERP",
    lede: "The records, fees, and timetables a school actually runs on, in one product the office can trust.",
    path: "How a school ERP engagement runs.",
  },
  {
    slug: "ota",
    name: "Online travel agency (OTA)",
    lede: "Search, compare, and book, with fares from the airlines’ own systems and a price that already includes taxes and fees.",
    path: "How an OTA engagement runs.",
  },
  {
    slug: "saas-ai",
    name: "SaaS and AI",
    lede: "A product people can try, understand, and keep using, with the account, the data, and the release path behind it.",
    path: "How a SaaS engagement runs.",
  },
  {
    slug: "climate-energy",
    name: "Climate and energy",
    lede: "Software for the people who measure, trade, or operate energy, written so the numbers stay checkable.",
    path: "How a climate and energy engagement runs.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    lede: "Patient, clinic, and operations software that is careful with access and plain about what happens next.",
    path: "How a healthcare engagement runs.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    lede: "A store and the systems around it: catalogue, checkout, and the work that follows an order.",
    path: "How an e-commerce engagement runs.",
  },
  {
    slug: "nonprofit",
    name: "Non-profit and NGO",
    lede: "The site, the donor path, and the records a small team can keep after the campaign is over.",
    path: "How a non-profit engagement runs.",
  },
  {
    slug: "foundation",
    name: "Foundation",
    lede: "Grant, programme, and reporting software for a foundation that has to show where the money went.",
    path: "How a foundation engagement runs.",
  },
] as const;

export type IndustrySlug = (typeof industries)[number]["slug"];

export const services = [
  {
    title: "Web applications",
    text: "Portals, platforms, and dashboards built to stay fast as the number of users grows.",
    points: [
      "Customer portals and internal tools",
      "SaaS products from a first release onward",
      "Admin, reporting, and approval screens",
      "APIs and third-party integrations",
    ],
  },
  {
    title: "Mobile apps",
    text: "iOS and Android products with a native feel, sharing code where that helps and going native where it matters.",
    points: [
      "Native and cross-platform development",
      "Offline use and push notifications",
      "Store submission and release management",
      "Crash monitoring and performance checks",
    ],
  },
  {
    title: "Cloud and delivery",
    text: "Infrastructure, pipelines, and monitoring so a release is a normal day, not an event.",
    points: [
      "Cloud architecture and migration",
      "CI/CD and automated tests",
      "Containers and Kubernetes",
      "Monitoring, alerting, and cost review",
    ],
  },
  {
    title: "Interface design",
    text: "Research, prototypes, and a design system your own team can keep extending after launch.",
    points: [
      "User research and journey mapping",
      "Wireframes and clickable prototypes",
      "Visual design and component libraries",
      "Usability checks before development",
    ],
  },
  {
    title: "Data and practical AI",
    text: "Pipelines, analytics, and AI features that live inside the product, not in a slide.",
    points: [
      "Data pipelines and warehousing",
      "Analytics and operational dashboards",
      "Search, assistants, and document lookup",
      "Evaluation before anything reaches users",
    ],
  },
  {
    title: "Care after launch",
    text: "Updates, security patches, and performance work from a team that already knows the code.",
    points: [
      "Security patches and dependency updates",
      "Bug fixes and small feature work",
      "Uptime monitoring and incident response",
      "A regular health report",
    ],
  },
];

export const engagements = [
  {
    kicker: "A defined product",
    title: "Fixed-scope project",
    text: "A clear deliverable, timeline, and price agreed before work starts.",
    points: ["Written scope and estimate", "Milestone delivery", "Handover with documentation"],
  },
  {
    kicker: "A long roadmap",
    title: "Dedicated team",
    text: "Engineers and designers who work as an extension of your own team.",
    points: ["Monthly engagement, flexible size", "Shared tools and rituals", "Scale up or down as plans change"],
  },
  {
    kicker: "A live product",
    title: "Support plan",
    text: "Ongoing care so the product stays secure, fast, and current.",
    points: ["Agreed response times", "Regular updates and reviews", "A predictable monthly cost"],
  },
];

export const promises = [
  { title: "Short cycles", text: "Working demos every sprint, not a reveal at the end." },
  { title: "Code you can read", text: "Reviewed, documented, and ready to hand over." },
  { title: "Price agreed first", text: "Clear scope and an estimate before we start." },
  { title: "A team after launch", text: "Someone who already knows the product picks up the phone." },
];

export const pillars = [
  {
    title: "Understand the work",
    text: "We learn the users, the constraints, and the systems a product has to live beside.",
  },
  {
    title: "Shape it before we build",
    text: "Wireframes and a clickable prototype you can react to while change is still cheap.",
  },
  {
    title: "Build it in the open",
    text: "A shared board, code review, and a demo at the end of every sprint.",
  },
  {
    title: "Leave it runnable",
    text: "You receive the repository, the docs, and access to the environments.",
  },
];

export const practices = [
  {
    n: "01",
    title: "You own the code",
    text: "Custom code, designs, and documentation transfer to you when the project is paid. Pre-existing tools stay ours, licensed for your product.",
  },
  {
    n: "02",
    title: "Scope in writing",
    text: "Every engagement starts with a written scope. A change is explained, priced, and approved before it moves the date.",
  },
  {
    n: "03",
    title: "Tests in the sprint",
    text: "Automated tests, review, and a manual pass are part of the milestone, not an extra invoice at the end.",
  },
  {
    n: "04",
    title: "Environments you can see",
    text: "Staging, production, and the pipeline sit in accounts you can open. No black box, no single laptop that knows the deploy.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    week: "Week 01",
    text: "We learn your users, goals, and constraints, then agree scope and a plan.",
    deliverables: ["Written scope", "User and constraint notes", "Risk list", "Estimate and timeline"],
    tools: ["Figma", "Workshops"],
    next: "Design",
    tone: "blue",
  },
  {
    n: "02",
    title: "Design",
    week: "Week 02 — 03",
    text: "Wireframes and interactive prototypes you can test before we build.",
    deliverables: ["User flows", "Wireframes", "Clickable prototype", "Interface direction"],
    tools: ["Figma", "Prototypes"],
    next: "Build",
    tone: "cyan",
  },
  {
    n: "03",
    title: "Build",
    week: "Week 03 — 06",
    text: "Sprint-based development with demos, code review, and automated tests.",
    deliverables: ["Working software", "Reviewed code", "Automated tests", "Staging you can open"],
    tools: ["React", "Next.js", "Node.js"],
    next: "Launch",
    tone: "blue",
  },
  {
    n: "04",
    title: "Launch and grow",
    week: "Week 06 +",
    text: "We deploy, monitor, and keep improving from real usage.",
    deliverables: ["Production release", "Monitoring", "Handover notes", "A plan for what is next"],
    tools: ["AWS", "Docker", "PostgreSQL"],
    next: "Care",
    tone: "cyan",
  },
] as const;

export const values = [
  { title: "Clarity", text: "Plain language, honest estimates, and no surprises in scope or cost." },
  { title: "Craft", text: "Clean, tested, documented code that the next engineer can pick up." },
  { title: "Ownership", text: "We treat the product as ours to care for, and yours to keep." },
  { title: "Partnership", text: "We work with your team, not around it, and share what we learn." },
];

export const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Flutter",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Figma",
];

export const projects = [
  {
    cat: "web",
    label: "WEB PLATFORM",
    title: "Customer portal",
    text: "A signed-in workspace for orders, documents, and the people who approve them.",
  },
  {
    cat: "mobile",
    label: "MOBILE",
    title: "Field companion",
    text: "A phone app for crews who work away from a desk, including a path for poor signal.",
  },
  {
    cat: "cloud",
    label: "CLOUD",
    title: "Calm releases",
    text: "A pipeline that builds, checks, and ships without a weekend cutover.",
  },
  {
    cat: "data",
    label: "DATA AND AI",
    title: "Operational search",
    text: "Find the record, policy, or quote inside the tools a team already uses.",
  },
  {
    cat: "design",
    label: "DESIGN",
    title: "A design system",
    text: "Screens and components a product team can keep extending after we step back.",
  },
  {
    cat: "web",
    label: "WEB PLATFORM",
    title: "Internal console",
    text: "Roles, an audit trail, and the few admin actions that actually matter.",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "cloud", label: "Cloud" },
  { id: "data", label: "Data and AI" },
  { id: "design", label: "Design" },
];

export const faqs = [
  {
    group: "Starting",
    items: [
      {
        q: "How does a project begin?",
        a: "With a discovery call and a written scope. You see the plan, the price, and the milestones before you commit.",
      },
      {
        q: "Can you work beside our existing team?",
        a: "Yes. Many engagements run alongside in-house developers, using your tools, repositories, and review process.",
      },
      {
        q: "Do you sign an NDA?",
        a: "Yes. We will sign a non-disclosure agreement before you share product details.",
      },
    ],
  },
  {
    group: "Pricing",
    items: [
      {
        q: "How do you price the work?",
        a: "Fixed-scope projects, dedicated teams, or a support plan. Every proposal includes a breakdown, and we flag a change before it affects cost.",
      },
      {
        q: "What happens if the scope changes?",
        a: "We explain the impact on timeline and cost, and we continue only after you approve it in writing.",
      },
      {
        q: "Who owns the code?",
        a: "You do. We hand over the source, the documentation, and access to the environments when the project is complete.",
      },
    ],
  },
  {
    group: "Process",
    items: [
      {
        q: "Which technologies do you use?",
        a: "The stack that fits the product and the team who will live with it. Most often that is React, Next.js, Node.js, Python, Flutter, and a major cloud.",
      },
      {
        q: "How will we stay updated?",
        a: "Regular demos, a shared project board, and a direct line to the people building the product.",
      },
      {
        q: "Do you test the software?",
        a: "Yes. Automated tests, code review, and a manual pass are part of every milestone.",
      },
    ],
  },
  {
    group: "After launch",
    items: [
      {
        q: "Do you provide support after launch?",
        a: "Yes. Support plans cover updates, security patches, monitoring, and small improvements for as long as you need them.",
      },
      {
        q: "Can you take over a product that already exists?",
        a: "Yes. We start with a review of the code and the infrastructure, share what we find, and then agree a plan.",
      },
    ],
  },
];

export const serviceOptions = [
  "Web application",
  "Mobile app",
  "Cloud and delivery",
  "Interface design",
  "Data and practical AI",
  "Care after launch",
  "Not sure yet",
];
