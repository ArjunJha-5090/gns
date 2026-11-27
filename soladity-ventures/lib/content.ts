/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit text, contact details, services and products in this
 *  one file — every page reads from it.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Soladity Ventures",
  short: "Soladity",
  tagline: "Building products & digital experiences that last.",
  description:
    "Soladity Ventures is a product and technology startup. We build our own products like Campus Comfort, and partner with businesses to design and develop websites, mobile apps, software and brands.",
  url: "https://soladityventures.com", // TODO: replace with your real domain
  email: "hello@soladityventures.com", // TODO: replace with your real email
  phone: "+91 00000 00000", // TODO: replace with your real phone
  whatsapp: "910000000000", // TODO: digits only, with country code
  location: "India",
  socials: {
    instagram: "#", // TODO: paste your links
    linkedin: "#",
    x: "#",
    github: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/campus-comfort/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export type IconName =
  | "code"
  | "phone"
  | "palette"
  | "cloud"
  | "brain"
  | "megaphone"
  | "cart"
  | "wrench"
  | "shield"
  | "chart"
  | "bed"
  | "utensils"
  | "book"
  | "wifi"
  | "users"
  | "heart"
  | "zap"
  | "target"
  | "lightbulb"
  | "layers";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  description: string;
  features: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "code",
    title: "Web Development",
    short: "Fast, beautiful websites and web apps that convert visitors into customers.",
    description:
      "From landing pages to full-scale web platforms, we build responsive, SEO-ready and lightning-fast websites using modern frameworks.",
    features: [
      "Business & portfolio websites",
      "Custom web applications & dashboards",
      "Landing pages built to convert",
      "SEO, speed & accessibility optimisation",
    ],
    tech: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL"],
  },
  {
    slug: "app-development",
    icon: "phone",
    title: "App Development",
    short: "Native-feeling Android & iOS apps from a single, maintainable codebase.",
    description:
      "We design and ship mobile apps people actually enjoy using — from MVP to Play Store and App Store launch, and beyond.",
    features: [
      "Android & iOS apps",
      "Cross-platform (React Native / Flutter)",
      "Backend, APIs & push notifications",
      "Store publishing & maintenance",
    ],
    tech: ["React Native", "Flutter", "Firebase", "Kotlin", "Swift"],
  },
  {
    slug: "ui-ux-design",
    icon: "palette",
    title: "UI/UX & Branding",
    short: "Interfaces and brand identities that feel premium and easy to use.",
    description:
      "Research-led design: wireframes, prototypes, design systems, logos and complete visual identities.",
    features: [
      "Logo & brand identity",
      "UI design & interactive prototypes",
      "Design systems",
      "User research & usability testing",
    ],
    tech: ["Figma", "Framer", "Illustrator", "Protopie"],
  },
  {
    slug: "custom-software",
    icon: "layers",
    title: "Custom Software",
    short: "Internal tools, ERPs and SaaS products built around how you work.",
    description:
      "We turn messy spreadsheets and manual processes into clean, automated software tailored to your business.",
    features: [
      "CRM, ERP & admin panels",
      "SaaS product development",
      "Workflow automation",
      "Third-party integrations & APIs",
    ],
    tech: ["TypeScript", "Python", "Go", "REST", "GraphQL"],
  },
  {
    slug: "ai-automation",
    icon: "brain",
    title: "AI & Automation",
    short: "Chatbots, AI assistants and smart automations that save hours every week.",
    description:
      "Put modern AI to work — customer-support bots, document processing, recommendation engines and more.",
    features: [
      "AI chatbots & assistants",
      "Process & document automation",
      "Data analysis & insights",
      "LLM integration into your product",
    ],
    tech: ["LLM APIs", "Python", "LangGraph", "Vector DBs"],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "E-commerce",
    short: "Online stores that are easy to manage and built to sell.",
    description:
      "Shopify, WooCommerce or fully custom — with payments, inventory, shipping and analytics wired in.",
    features: [
      "Online store setup",
      "Payment gateway integration",
      "Inventory & order management",
      "Conversion optimisation",
    ],
    tech: ["Shopify", "WooCommerce", "Razorpay", "Stripe"],
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    short: "Reliable hosting, CI/CD and infrastructure that scales with you.",
    description:
      "Deployments, monitoring, backups and security — so your product stays up while you sleep.",
    features: [
      "Cloud setup (AWS, GCP, Vercel)",
      "CI/CD pipelines",
      "Monitoring & backups",
      "Performance & cost optimisation",
    ],
    tech: ["AWS", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    title: "Digital Marketing",
    short: "SEO, social media and performance marketing that brings real growth.",
    description:
      "Data-driven campaigns and content that put your brand in front of the right people.",
    features: [
      "Search engine optimisation",
      "Social media management",
      "Paid ads (Google & Meta)",
      "Content & analytics",
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "Search Console"],
  },
];

export const product = {
  slug: "campus-comfort",
  name: "Campus Comfort",
  badge: "Our Flagship Product",
  // TODO: refine this copy to describe Campus Comfort exactly
  tagline: "Everything a student needs to live comfortably on and around campus.",
  description:
    "Campus Comfort is a student-first platform by Soladity Ventures that makes campus life easier — from finding a comfortable stay to everyday essentials and trusted local services, all in one place.",
  features: [
    {
      icon: "bed" as IconName,
      title: "Verified Stays",
      text: "Discover hostels, PGs and rooms near campus with real photos, honest pricing and verified owners.",
    },
    {
      icon: "utensils" as IconName,
      title: "Food & Essentials",
      text: "Mess plans, tiffin services and daily essentials — sorted without the hassle.",
    },
    {
      icon: "book" as IconName,
      title: "Study Support",
      text: "Books, notes, stationery and study spaces shared by the student community.",
    },
    {
      icon: "wifi" as IconName,
      title: "Campus Services",
      text: "Laundry, repairs, internet and moving help from trusted local providers.",
    },
    {
      icon: "users" as IconName,
      title: "Student Community",
      text: "Find roommates, join events and connect with students from your campus.",
    },
    {
      icon: "shield" as IconName,
      title: "Safe & Trusted",
      text: "Every listing and partner is reviewed so students and parents can feel at ease.",
    },
  ],
  steps: [
    { title: "Tell us your campus", text: "Pick your college or city to see what's around you." },
    { title: "Explore & compare", text: "Browse stays, services and essentials side by side." },
    { title: "Book with confidence", text: "Connect directly, book securely and settle in comfortably." },
  ],
};

export const stats = [
  { value: 8, suffix: "+", label: "Service verticals" },
  { value: 1, suffix: "", label: "Product live — more coming" },
  { value: 24, suffix: "h", label: "Typical response time" },
  { value: 100, suffix: "%", label: "Mobile-first builds" },
];

export const process = [
  {
    title: "Discover",
    text: "We dig into your goals, users and market to define exactly what success looks like.",
  },
  {
    title: "Design",
    text: "Wireframes and high-fidelity designs you can click through before a line of code is written.",
  },
  {
    title: "Develop",
    text: "Clean, tested code shipped in short sprints — you see progress every week.",
  },
  {
    title: "Launch & Grow",
    text: "We deploy, monitor and keep improving so your product keeps getting better.",
  },
];

export const values = [
  {
    icon: "zap" as IconName,
    title: "Speed without shortcuts",
    text: "We move fast, but never at the cost of quality, security or maintainability.",
  },
  {
    icon: "target" as IconName,
    title: "Outcome obsessed",
    text: "We measure success in your growth — users, revenue and time saved — not just deliverables.",
  },
  {
    icon: "lightbulb" as IconName,
    title: "Builders at heart",
    text: "We build our own products too, so we think like founders, not just contractors.",
  },
  {
    icon: "heart" as IconName,
    title: "Long-term partners",
    text: "Transparent pricing, honest timelines and support long after launch.",
  },
];

export const techMarquee = [
  "Next.js",
  "React",
  "React Native",
  "Flutter",
  "Node.js",
  "TypeScript",
  "Python",
  "Firebase",
  "AWS",
  "Figma",
  "Tailwind CSS",
  "PostgreSQL",
  "Shopify",
  "Docker",
  "AI / LLMs",
];

export const faqs = [
  {
    q: "What does Soladity Ventures do?",
    a: "We're a product and technology startup. We build our own products (starting with Campus Comfort) and offer services like web development, app development, UI/UX design, custom software, AI automation, e-commerce, cloud and digital marketing.",
  },
  {
    q: "How much does a website or app cost?",
    a: "It depends on scope. A business website can start small, while custom apps and platforms are priced per project. Share your idea and we'll send a clear, fixed quote — no hidden costs.",
  },
  {
    q: "How long does a project take?",
    a: "A typical website takes 1–3 weeks; mobile apps and custom software usually take 4–12 weeks. We share a timeline with milestones before we begin.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer maintenance plans covering updates, security, backups and new features so your product keeps running smoothly.",
  },
  {
    q: "Is Campus Comfort available for my college?",
    a: "We're rolling out campus by campus. Get in touch and we'll let you know when Campus Comfort reaches your college — or how to bring it there sooner.",
  },
];
