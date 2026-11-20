export type StudyStatus = "Client" | "Live" | "In progress" | "Proposal" | "Available";

export type Study = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  year: string;
  status: StudyStatus;
  client: string;
  role: string;
  timeline: string;
  statusLine: string;
  url?: string;
  industries?: string[];
  frameLabel?: string;
  problem: string;
  approach: string;
  tags?: string[];
  cardImage?: string;
  heroImage?: string;
  heroAlt?: string;
  heroSize?: { width: number; height: number };
  frameFit?: "cover" | "contain";
  galleryLayout?: "grid" | "stack";
  gallery?: { src: string; alt: string; caption?: string; width?: number; height?: number }[];
  stack: string[];
  shipped: { title: string; text: string }[];
  outcome: string;
};

export const studies: Study[] = [
  {
    slug: "skytravex",
    name: "SkyTravex",
    subtitle: "Fares, agents, and money in one system",
    summary:
      "SkyTravex gives a travel agency an admin back office, a B2B agent portal, and a branded B2C website. All three share one booking engine, one wallet, and one ledger.",
    year: "2026",
    status: "Live",
    client: "SkyTravex · co-founded product",
    role: "Co-founded product, design and the full build",
    timeline: "2026 · live",
    statusLine: "Live · skytravex-web.vercel.app",
    url: "https://skytravex-web.vercel.app/",
    industries: ["ota", "saas-ai"],
    cardImage: "/work/skytravex-home.png",
    heroImage: "/work/skytravex-home.png",
    heroAlt: "SkyTravex homepage: fares, agents and money in one system, with a sample DAC to DXB search",
    heroSize: { width: 1653, height: 821 },
    galleryLayout: "stack",
    gallery: [
      {
        src: "/work/skytravex-modules.png",
        alt: "SkyTravex modules: booking engine, markup, wallet, tickets, B2B portal, and B2C website",
        caption: "The first six modules. Search, markup, wallet, tickets, the agent portal, and the public site all read the same bookings.",
        width: 1396,
        height: 847,
      },
      {
        src: "/work/skytravex-modules-rest.png",
        alt: "SkyTravex modules: white-label branding, visa, ancillaries, accounting, reports, and access",
        caption: "The rest of the twelve: branding, visa files, ancillaries, accounting, reports, and access control.",
        width: 860,
        height: 653,
      },
      {
        src: "/work/skytravex-core.png",
        alt: "SkyTravex core connected to GDS, NDC, hotels, payments, and messaging",
        caption: "Suppliers come in through the core. The agency gets one search, one wallet per agent, one ledger, and one set of reports.",
        width: 1647,
        height: 851,
      },
    ],
    tags: ["Next.js", "GDS", "NDC", "B2B portal", "White-label"],
    problem:
      "An agency sells the same seat three ways: its own staff, its B2B agents, and a public website. When those sit in separate tools, the fare, the markup, the wallet, and the ledger drift apart. An agent can be shown a price the office did not approve, and finance cannot reconcile the day.",
    approach:
      "SkyTravex is one product with twelve modules on one core. The admin office, the B2B agent portal, and the branded B2C site share the booking engine, the wallet, and the ledger. A search asks GDS, NDC, and direct airlines, drops duplicates, keeps the cheapest, and shows the agent price only after markup rules. The public site is Next.js and is open at skytravex-web.vercel.app.",
    stack: ["Next.js", "GDS", "NDC", "Direct airline APIs", "Wallets", "White-label", "Payments", "WhatsApp"],
    shipped: [
      {
        title: "One booking engine",
        text: "One-way, return, and multi-city search across GDS, NDC, and direct airlines, with a fallback when a supplier is slow. GDS, NDC, and LCC results collapse into one list. Branded fares and PNR creation sit on that same search.",
      },
      {
        title: "Markup before the agent sees the price",
        text: "Fixed or percentage rules by airline, route, agent, and tier. Net and gross stay distinct. Gold, silver, and bronze tiers are on the rule. Every change is written to an audit log. A sample DAC to DXB search shows the agent price only after the markup is applied.",
      },
      {
        title: "Wallet and ledger",
        text: "Deposits, credit limits, partial payments, and a payment ledger that reconciles with the bank. Top-up needs approval. The wallet shows the balance and how much of the credit limit is already used. One wallet per agent, one ledger for the agency.",
      },
      {
        title: "Tickets, visa, and ancillaries",
        text: "Issue, reissue, void, and refund, with fare, tax, penalty, and a status from booked to issued to reissued or refunded. Visa files keep the checklist, passport OCR, and a status history. Seats, meals, bags, and packages carry their own markup.",
      },
      {
        title: "Three doors, one inventory",
        text: "Staff work in the admin office. Agents register, get a credit limit, and an account manager. The B2C site sells the same inventory on the agency’s domain, with guest and member checkout. Logo, colours, and domain carry onto the portal, the e-ticket, the invoice, and the notification.",
      },
      {
        title: "Accounting, reports, and access",
        text: "Invoices, vouchers, credit notes, and supplier payables follow each booking, in more than one currency. Sales, revenue, incentive, agent performance, and balance reports export to Excel, CSV, or PDF, or run on a schedule. Roles, approval hierarchies, two-factor sign-in, sessions, and IP restriction guard the door.",
      },
      {
        title: "The supplier ring",
        text: "Amadeus, Sabre, and Travelport under the agency’s own PCC. Airline NDC, LCC direct APIs, and flight aggregators, each with its own certification. Hotels from bedbanks, direct contracts, or the agency’s own inventory, mapped to one list. Card gateways, mobile wallets, and bank deposit stay tokenised. Email, SMS, and WhatsApp carry booking and payment alerts.",
      },
      {
        title: "No per-ticket fee from SkyTravex",
        text: "The product says so on the homepage: the agency is not charged a SkyTravex fee on each ticket. Admin, B2B, and B2C portals, plus GDS, NDC, and direct airline connections, are part of the same system.",
      },
    ],
    outcome:
      "SkyTravex is open at skytravex-web.vercel.app. An agency can book a demo or open a WhatsApp chat from the homepage. The sample fare, DAC to DXB for two adults, shows the path: GDS queried, NDC and direct airlines queried, duplicates removed, and the agent price shown with markup already applied.",
  },
  {
    slug: "aerotake",
    name: "Aerotake",
    subtitle: "Search, compare, and book flights",
    summary:
      "Aerotake helps travellers search, compare and book flights. Fares come straight from the airlines' own booking systems, and the price you see includes taxes and fees.",
    year: "2026",
    status: "Live",
    client: "Aerotake · United Kingdom",
    role: "Design and the full build",
    timeline: "2026 · live",
    statusLine: "Live · aerotake.net",
    url: "https://aerotake.net/",
    industries: ["ota"],
    cardImage: "/work/aerotake-home.png",
    heroImage: "/work/aerotake-results.png",
    gallery: [
      { src: "/work/aerotake-home.png", alt: "Aerotake homepage search, Dhaka to Dubai" },
      { src: "/work/aerotake-routes.png", alt: "Popular flight routes on the Aerotake homepage" },
      { src: "/work/aerotake-destinations.png", alt: "Destination cards on the Aerotake homepage" },
    ],
    tags: ["Next.js", ".NET Core", "PostgreSQL", "Stripe", "Docker"],
    problem:
      "A traveller should be able to search flights, compare them, and see a price that already includes taxes and fees. The fares have to come from the airlines' own booking systems, not from a second-hand list that drifts out of date. Searching stays open without an account. Reserving a seat asks the traveller to sign in, so the booking has a home.",
    approach:
      "The public site is Next.js. Behind it, .NET Core services run in Docker and talk to one another over APIs. PostgreSQL keeps accounts and bookings. Airline booking systems supply the fares, across thousands of airlines. Stripe is the card path for when online payment opens. The screens follow the trip: search, compare, then book.",
    stack: ["Next.js", ".NET Core", "Docker", "Microservices", "APIs", "PostgreSQL", "Stripe", "Airline booking systems"],
    shipped: [
      {
        title: "Flight search",
        text: "One way, round trip, or multi-city. Airports, dates, travellers and class, then a regular, student, or Umrah fare. The homepage opens on a search a traveller can change.",
      },
      {
        title: "The comparison screen",
        text: "A date strip with prices, a budget, stops, departure windows, and airlines. Sort by recommended, cheapest, earliest, or fastest. Each row shows the airline, the times, the stops, and the price.",
      },
      {
        title: "Airline inventory",
        text: "Fares are read from the airlines' own booking systems. The price on the card includes taxes and fees. Thousands of airlines sit behind that search.",
      },
      {
        title: "Accounts and bookings",
        text: "Search does not require an account. Reserving does. My Bookings and a booking reference give the traveller a way back to the ticket.",
      },
      {
        title: "Payment with Stripe",
        text: "Stripe is the card path in the build. The public refund page still says the policy is being finished before online payment opens, so this study does not claim that checkout is already taking cards.",
      },
      {
        title: "The public site",
        text: "Home, services, about, contact, and FAQ, plus popular routes and destination cards that start a search a month ahead.",
      },
    ],
    outcome:
      "Aerotake is open at aerotake.net. Travellers can search and compare fares there today. The Stripe payment path is built, and online card checkout waits until the refund policy is published.",
  },
  {
    slug: "premier-school-erp",
    name: "Premier School ERP",
    subtitle: "One register for a school franchise",
    summary:
      "Premier School ERP is the register Premier School Dhaka opens for the day: students, teachers, classes, exams, and attendance, on one Odoo system.",
    year: "2026",
    status: "Live",
    client: "Premier School Dhaka",
    role: "School ERP on Odoo",
    timeline: "2026 · live",
    statusLine: "Live · psd-erp.io",
    url: "https://psd-erp.io/odoo",
    industries: ["school-erp", "saas-ai"],
    cardImage: "/work/premier-education.png",
    heroImage: "/work/premier-education.png",
    heroAlt: "Premier School Dhaka education dashboard for academic year 2026–27, with enrolments by class",
    heroSize: { width: 1892, height: 862 },
    frameFit: "contain",
    galleryLayout: "stack",
    gallery: [
      {
        src: "/work/premier-exam.png",
        alt: "First semester skills dashboard, with averages by class and by section",
        caption: "The exam window for the first semester: sheets, students, the average, then the same result by class and by section.",
        width: 1906,
        height: 846,
      },
      {
        src: "/work/premier-skills.png",
        alt: "Skill categories across the first semester, from reading and writing to problem solving",
        caption: "The same exam, read by skill: reading, writing, comprehension, and the rest of the categories the school marks.",
        width: 1895,
        height: 850,
      },
      {
        src: "/work/premier-subjects.png",
        alt: "Class by subject table of under and well percentages",
        caption: "Under and well, class by subject, from Arabic and Bangla through mathematics and science.",
        width: 1907,
        height: 370,
      },
      {
        src: "/work/premier-attendance.png",
        alt: "Attendance dashboard for every section, with sections to watch",
        caption: "A month of attendance across every section, then the sections the office should watch.",
        width: 1891,
        height: 850,
      },
    ],
    tags: ["Odoo", "Python", "PostgreSQL"],
    problem:
      "A school franchise has to know who is enrolled, who teaches them, which section they sit in, whether the class was present, and how the exam went. When those live in separate books, the office cannot see the day in one place.",
    approach:
      "Premier School ERP is Odoo. Python runs the application. PostgreSQL keeps the records. Premier School Dhaka, Uttara, opens on the education dashboard for the academic year, then on the exam window and the attendance window. Students, guardians, leaves, teachers, sections, subjects, and the timetable sit in the same menu.",
    stack: ["Odoo", "Python", "PostgreSQL"],
    shipped: [
      {
        title: "Education dashboard",
        text: "The school day for academic year 2026–27. One window counts active students and enrolments, classes, sections, levels, subjects, active teachers, and timetables, then draws enrolments by class, students by status, and the section mix.",
      },
      {
        title: "Students, guardians, and teachers",
        text: "Who is enrolled, who is responsible for them, and who teaches. Leaves sit in the same menu, so an absence has a place next to the person.",
      },
      {
        title: "Classes, sections, subjects, and the timetable",
        text: "The classes the school runs, the sections inside them, the subjects on the week, and the timetables. A student and a teacher meet in a section, not in a separate sheet.",
      },
      {
        title: "Exam and skills",
        text: "The exam dashboard opens on a semester. It counts the sheets and the students, shows the average, and splits the result by class and by section.",
      },
      {
        title: "Class by subject",
        text: "Under and well, for each class against each subject. The office can see where a class is holding and where it is not, without opening every mark sheet.",
      },
      {
        title: "Attendance dashboard",
        text: "A date range across every section: the attendance share, absences, late marks, sections still incomplete, and who is on leave. Sections to watch sit under the totals.",
      },
    ],
    outcome:
      "Premier School ERP is live at psd-erp.io. The education, exam, and attendance dashboards are what the school opens after sign-in. This study shows those windows. The live system itself stays behind the school's login.",
  },
];

export function studyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug);
}

export function studiesIn(industry: string) {
  return studies.filter((study) => study.industries?.includes(industry));
}
