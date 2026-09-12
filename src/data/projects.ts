export type ProjectCategory = "frontend" | "fullstack";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  status: "Live" | "In progress";
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bizflow",
    title: "BizFlow",
    category: "fullstack",
    year: "2026",
    status: "In progress",
    featured: true,
    summary:
      "A mobile-first business OS for small vendors — inventory, sales, receipts, customers, debts, and WhatsApp checkout in one product.",
    problem:
      "Fashion sellers, gadget shops, and WhatsApp vendors in Nigeria still run stock, debts, and receipts across notebooks and chats. Nothing talks to each other.",
    role: "Solo full-stack. Product, data model, auth, UI, and deployment.",
    outcome:
      "A multi-tenant SaaS foundation with inventory, sales tracking, receipts, customer and debt records, expenses, and a mini storefront path.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Zustand", "Zod", "Vercel"],
  },
  {
    slug: "electrohub",
    title: "ElectroHub",
    category: "fullstack",
    year: "2025",
    status: "Live",
    featured: true,
    image:
      "https://raw.githubusercontent.com/osascodes/benjamin-portfolio/main/images/benjamin-electrohub-mockup.png",
    summary: "A demo electronics store with product browsing, cart, and a full checkout flow.",
    problem:
      "Needed a real storefront — not a static catalog — to show product pages, cart logic, and a checkout path clients can understand.",
    role: "Built and customized the storefront, catalog, cart, and checkout experience.",
    outcome: "A live WooCommerce store used as a working reference for e-commerce builds.",
    stack: ["WordPress", "WooCommerce", "Elementor", "CSS", "JavaScript"],
    liveUrl: "https://shop.osastech.com.ng",
    repoUrl: "https://github.com/osascodes/wp-custom-scripts",
  },
  {
    slug: "pixelpulse",
    title: "PixelPulse",
    category: "frontend",
    year: "2026",
    status: "In progress",
    featured: true,
    image:
      "https://raw.githubusercontent.com/osascodes/benjamin-portfolio/main/images/benjamin-pixelpulse-mockup.png",
    summary: "A modern business website concept for presenting services with a sharper brand layout.",
    problem:
      "Most service sites bury the offer under filler copy and weak structure. PixelPulse is a tighter layout for agencies and operators.",
    role: "Frontend architecture, layout system, and page structure.",
    outcome: "A reusable Next.js marketing shell with clear sections for services, work, and contact.",
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
  },
  {
    slug: "skycast",
    title: "SkyCast",
    category: "frontend",
    year: "2025",
    status: "In progress",
    image:
      "https://raw.githubusercontent.com/osascodes/benjamin-portfolio/main/images/benjamin-skycast-mockup.png",
    summary: "A responsive weather app that pulls live data and swaps icons by condition.",
    problem: "A small product brief: take a public API and turn it into a usable, readable interface on mobile.",
    role: "UI, API integration, and responsive states.",
    outcome: "A clean weather client using the OpenWeather API with condition-based visuals.",
    stack: ["HTML", "CSS", "JavaScript", "Fetch API"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function filterProjects(category: "all" | ProjectCategory) {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}
