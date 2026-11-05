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
  {
    slug: "placeholder-client-portal",
    name: "Placeholder client portal",
    subtitle: "A stand-in for a signed-in product",
    summary:
      "This card holds the shape of a client study. The name, the story, and the screenshot are placeholders until the real engagement is ready to be told.",
    year: "2026",
    status: "Client",
    client: "Placeholder client · not a real engagement",
    role: "Design and full-stack build",
    timeline: "2026 · placeholder",
    statusLine: "Placeholder · waiting for the real study",
    problem:
      "A team needs a signed-in place for orders, documents, and the people who approve them. The current tools sit beside the work. This entry describes that shape only. It is not a client we have named.",
    approach:
      "Sky Lake would learn the real workflow, then build the portal, the roles, and the path a document takes from draft to approval. The words here are a stand-in so the page can be reviewed before the true story replaces them.",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "AWS"],
    shipped: [
      { title: "Signed-in workspace", text: "A home for the records the team already chases across inboxes and sheets." },
      { title: "Roles that match the work", text: "The people who draft, review, and approve see only the actions that belong to them." },
      { title: "A trail of decisions", text: "Each approval keeps who acted, when, and what changed." },
      { title: "Documents in one place", text: "The file and the conversation about it stay on the same record." },
      { title: "A calm admin", text: "The few settings an operator actually changes, not a wall of switches." },
      { title: "Ready for the real name", text: "Swap this copy and add a screenshot when the client is ready to tell it." },
    ],
    outcome: "A finished page shape. The outcome line will be replaced with what actually shipped.",
  },
  {
    slug: "placeholder-live-product",
    name: "Placeholder live product",
    subtitle: "A stand-in for a product already in use",
    summary:
      "This card is the live-status pattern. It includes an outside link so that button can be checked. The destination is Sky Lake’s own site until a real product URL is added.",
    year: "2026",
    status: "Live",
    client: "Placeholder product · not a real engagement",
    role: "Product design and engineering",
    timeline: "2026 · placeholder",
    statusLine: "Live · placeholder link only",
    url: "https://skylakesolutions-web.vercel.app",
    problem:
      "Some studies point at the product people can open today. This one exists so that link, and the live status, are on the page before a real product is attached.",
    approach:
      "The page keeps the same order as every other study: the facts, the picture, the problem, the approach, what shipped, and the outcome. Only the address and the words change when the real study arrives.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    shipped: [
      { title: "A public address", text: "The study can link out when there is a real site to open." },
      { title: "The status on the card", text: "Live sits on the index so a visitor can see which products are already in use." },
      { title: "The same template", text: "Nothing on this page is a one-off layout." },
      { title: "A screenshot frame", text: "The wide picture is reserved even while the image is still pending." },
      { title: "A way back", text: "The close of the page returns to the full list." },
      { title: "Room for the real story", text: "Replace the paragraphs without touching the page structure." },
    ],
    outcome: "The live link renders. The story itself is still a placeholder.",
  },
  {
    slug: "placeholder-in-progress",
    name: "Placeholder build in progress",
    subtitle: "A stand-in for work still underway",
    summary:
      "This card uses the in-progress status. It stands for a study that can be published before the last milestone, with the honest note that it is not finished.",
    year: "2026",
    status: "In progress",
    client: "Placeholder engagement · not started",
    role: "Discovery through the current milestone",
    timeline: "2026 · still a placeholder",
    statusLine: "In progress · not a real build",
    problem:
      "A study sometimes needs to exist while the product is still moving. This entry shows that state. There is no team, no scope, and no date behind it yet.",
    approach:
      "Keep the page truthful. Say what is underway, and do not invent a result. When the work finishes, the status and the outcome are the lines that change.",
    stack: ["Next.js", "Figma", "TypeScript"],
    shipped: [
      { title: "A status that tells the truth", text: "In progress is different from a finished client study." },
      { title: "Facts without a fake date", text: "The timeline says this is still a placeholder." },
      { title: "No outside link", text: "There is nothing to open, so the page does not pretend there is." },
      { title: "The shipped list can grow", text: "Add a block when a real milestone lands." },
      { title: "The same closing band", text: "A visitor can still start a project from an unfinished story." },
      { title: "Easy to retire", text: "Delete the entry from the list and the route goes away." },
    ],
    outcome: "Shown as unfinished on purpose. No result is claimed.",
  },
  {
    slug: "placeholder-proposal",
    name: "Placeholder proposal",
    subtitle: "A stand-in for work that was not commissioned",
    summary:
      "This card is the proposal pattern. It is for a study built to show an approach, with a clear line that no one hired Sky Lake to ship it.",
    year: "2026",
    status: "Proposal",
    client: "No client · speculative placeholder",
    role: "Design proposal",
    timeline: "2026 · not commissioned",
    statusLine: "Proposal · not an engagement",
    problem:
      "A proposal has to be obvious about what it is. This page exists so that status is visible on the card and again in the facts, before any real speculative study is written.",
    approach:
      "Show the thinking, and say that it was not asked for. Do not imply a company approved it, and do not link to a site that is not ours to show.",
    stack: ["Figma", "Next.js", "Writing"],
    shipped: [
      { title: "An honest label", text: "Proposal is on the card and in the status fact." },
      { title: "No borrowed client", text: "The name says placeholder, not a company Sky Lake has not worked with." },
      { title: "A problem and an approach", text: "The two sections are here even when the work was never hired." },
      { title: "No outcome claimed", text: "Nothing is described as approved." },
      { title: "The stack stays short", text: "Only the tools the proposal actually used." },
      { title: "Replaceable in one file", text: "A real proposal later is a new object in the study list." },
    ],
    outcome: "Nothing shipped. The page only proves the proposal state.",
  },
  {
    slug: "placeholder-available-build",
    name: "Placeholder available build",
    subtitle: "A stand-in for a pattern that can be reused",
    summary:
      "This card uses the available status. It stands for a build Sky Lake can start from, rather than a story about one named client.",
    year: "2026",
    status: "Available",
    client: "No single client · a starting pattern",
    role: "A reusable product shape",
    timeline: "2026 · available as a placeholder",
    statusLine: "Available · not a delivered project",
    problem:
      "Some work is a starting point: a portal, a release path, or a design system that the next client can make their own. This entry holds that idea until a real pattern is written up.",
    approach:
      "Describe what the pattern includes and what a team would still decide. Keep it available, not disguised as a completed client job.",
    stack: ["Next.js", "Tailwind", "PostgreSQL"],
    shipped: [
      { title: "A starting structure", text: "Pages, roles, and a release path a new product can inherit." },
      { title: "Decisions left open", text: "Brand, data, and the workflows stay for the client to set." },
      { title: "The available label", text: "The index shows this is offered, not already someone’s product." },
      { title: "No fake metrics", text: "There are no invented user counts or savings." },
      { title: "A picture frame", text: "A screenshot can be dropped in when one exists." },
      { title: "One list to edit", text: "The index and this page read the same record." },
    ],
    outcome: "Available as a pattern only. No client delivery is claimed.",
  },
  {
    slug: "placeholder-shipped-platform",
    name: "Placeholder shipped platform",
    subtitle: "A second stand-in for a finished build",
    summary:
      "This is the sixth study, a shipped story beside the five status types. It is still a placeholder. Nothing named here was delivered for a real client.",
    year: "2026",
    status: "Client",
    client: "Placeholder client · not a real engagement",
    role: "From first sketch through release",
    timeline: "2026 · placeholder delivery",
    statusLine: "Shipped · placeholder only",
    problem:
      "The index needs more than one finished story so the two-column list can be read as a body of work. This entry is that second finished shape, with no real client behind it.",
    approach:
      "Use the full page: facts, picture, problem, approach, stack, six shipped notes, and an outcome. When a real platform replaces it, keep the same fields and change the words.",
    stack: ["React", "Node.js", "AWS", "Figma"],
    shipped: [
      { title: "The product people open", text: "A platform a team can run, not a deck about one." },
      { title: "The release path", text: "A build that can go out without a weekend cutover." },
      { title: "The screens that stayed", text: "An interface the client’s own designers can keep." },
      { title: "Care after launch", text: "The same team is still accountable when the first release is over." },
      { title: "A record of the work", text: "The study page is where that record will live." },
      { title: "Marked as a placeholder", text: "The title says so until the real platform takes this slot." },
    ],
    outcome: "A second finished page in the list. The delivery it describes has not happened.",
  },
];

export function studyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug);
}

export function studiesIn(industry: string) {
  return studies.filter((study) => study.industries?.includes(industry));
}
