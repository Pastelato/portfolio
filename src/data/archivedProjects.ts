import { BarChart3, Bike, Boxes, CakeSlice, CreditCard, Donut, Headset } from "lucide-react";
import type { ArchivedProject } from "@/types/portfolio";

/**
 * Dummy entries for the `/projects` archive page — placeholders so the
 * page's layout, filters and cards can be evaluated before real older
 * projects are added here.
 */
export const archivedProjects: ArchivedProject[] = [
  {
    id: "customer-support-platform",
    title: "Customer Support Platform",
    description:
      "A customer support platform designed to centralize tickets, customer conversations and internal workflows.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    year: 2024,
    status: "Completed",
    icon: Headset,
    gradient: ["--color-duo-1", "--color-surface-dark"],
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "A backend system for managing inventory, products, warehouses and stock movements.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    year: 2023,
    status: "Completed",
    icon: Boxes,
    gradient: ["--color-duo-2", "--color-surface-dark"],
  },
  {
    id: "payment-integration-service",
    title: "Payment Integration Service",
    description:
      "A service responsible for integrating multiple payment providers and processing transaction events.",
    tags: ["Java", "REST APIs", "Kafka", "PostgreSQL"],
    year: 2023,
    status: "Archived",
    icon: CreditCard,
    gradient: ["--color-surface-dark", "--color-duo-3"],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "A dashboard for visualizing business metrics, reports and historical data.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    year: 2022,
    status: "Archived",
    icon: BarChart3,
    gradient: ["--color-duo-1", "--color-duo-2"],
  },
  {
    id: "michis",
    title: "Michi's",
    description:
      "A one-page site for a home-based healthy snacks and desserts business in Caracas, built to introduce the brand, showcase products and take orders through a contact form.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    year: 2018,
    status: "Archived",
    icon: CakeSlice,
    gradient: ["--color-duo-1", "--color-surface-dark"],
    thumbnailImage: "/projects/michis/thumbnail.png",
    summary:
      "Michi's was Sergio's first real client project: a single-page site built for Nancy Michelotti — chef and pastry maker — to promote her home-based line of healthy snacks and desserts in Caracas, Venezuela. The page introduces the brand, explains what sets the products apart (gluten-free, no refined sugar, all-natural), rotates through a gallery of recent products, introduces the person behind the brand, and closes with a contact form for orders and questions. It was built by adapting Colorlib's free \"App Landing Page\" Bootstrap 4 template — the focus was on customizing the structure, content and styling for a real business rather than building the design system from scratch.",
    techStack: [
      { name: "HTML5", description: "Semantic markup for the full single-page layout." },
      { name: "CSS3", description: "Custom styling on top of the template base, plus a dedicated responsive stylesheet." },
      { name: "JavaScript (jQuery 2.2.4)", description: "Runtime powering every interactive plugin on the page." },
      { name: "Bootstrap 4", description: "Responsive grid, navbar and dropdown menu." },
      { name: "Owl Carousel", description: "Drives the rotating \"Últimos Productos\" product gallery." },
      { name: "WOW.js + Animate.css", description: "Triggers the scroll-in reveal animations on each section." },
      { name: "CounterUp", description: "Animates the stat counters in the \"Cool Facts\" section." },
      { name: "Font Awesome, Ionicons & Themify Icons", description: "Icon sets used across social links and feature blocks." },
      { name: "Google Fonts", description: "Cabin and Montserrat, loaded from Google's font CDN." },
    ],
    previewUrl: "/project-previews/michis/index.html",
    sourceUrl: "https://github.com/Pastelato/michis",
  },
  {
    id: "ramc",
    title: "RAMC",
    description:
      "A one-page team site for Redes America Mc, built to introduce a small web/app/design outfit under a bicycle-themed brand and take on new client work through a contact form.",
    tags: ["PHP", "Laravel", "Bootstrap", "jQuery"],
    year: 2018,
    status: "Archived",
    icon: Bike,
    gradient: ["--color-surface-dark", "--color-duo-1"],
    thumbnailImage: "/projects/ramc/logo.png",
    summary:
      "RAMC (Redes America Mc) was an early Laravel practice project: a one-page site meant to promote a small outfit's web development, application development and graphic design services under a bicycle-themed brand. The homepage introduces the team behind it (\"Creadores\" — Sergio as backend programmer, Greisy as web master), walks through a four-step client onboarding process, shows a stats-counter section, and ends with a contact form. Three extra routes (/web, /app, /diseno) were scaffolded to eventually list work by category, but each was left as an unfinished placeholder page. The project's original homepage template was also renamed during a later refactor without updating the route that serves it, so the home route no longer resolves in the original source — the preview below is a static reconstruction of that last complete homepage template.",
    techStack: [
      { name: "PHP / Laravel 5.6", description: "Backend routing and the Blade templating engine powering every page." },
      { name: "Blade templates", description: "Page composition via @extends/@include — every section is static markup, no dynamic data." },
      { name: "Bootstrap 4", description: "Responsive grid, navbar and the team carousel component." },
      { name: "jQuery", description: "Runtime powering every interactive plugin on the page." },
      { name: "WOW.js + Animate.css", description: "Triggers the scroll-in reveal animations on each section." },
      { name: "CounterUp + Waypoints", description: "Animates the stat counters once they scroll into view." },
      { name: "Font Awesome", description: "Icon set used across the services, timeline and social sections." },
      { name: "Google Fonts", description: "Playfair Display and Josefin Sans, loaded from Google's font CDN." },
    ],
    previewUrl: "/project-previews/ramc/index.html",
    sourceUrl: "https://github.com/Pastelato/Ramc",
  },
  {
    id: "churro",
    title: "Holy Churro",
    description:
      "A one-page site for a churrería in Buenos Aires, built to showcase its menu and story, with a Firestore-backed product catalog and a floating delivery-app menu.",
    tags: ["React", "Redux", "Firebase", "Bootstrap", "jQuery"],
    year: 2019,
    status: "Archived",
    icon: Donut,
    gradient: ["--color-duo-2", "--color-duo-3"],
    thumbnailImage: "/projects/churro/logo.png",
    summary:
      "Holy Churro was a one-page marketing site for a churro and cookie shop in Vicente López, Buenos Aires, founded in 2019. Built with Create React App, it composes a classic Bootstrap 4/jQuery landing template (image slider, \"Nuestra Historia\" story section, store photo and map link, an Instagram call-to-action, and a floating menu of delivery-app icons) inside React components, while two sections — a \"Destacados\" dish list and a \"Productos Más Vendidos\" carousel — pull their items live from a Firebase Firestore database instead of static markup, and that database is still active today.",
    techStack: [
      { name: "React 16 + Create React App", description: "Component structure and the production build served in the preview." },
      { name: "Redux + react-redux-firebase", description: "Wires the two product sections to Firebase Firestore collections." },
      { name: "Firebase Firestore", description: "Live backing store for the \"Destacados\" and \"Productos Más Vendidos\" items, still queried in real time by the preview below." },
      { name: "Bootstrap 4 + jQuery plugins", description: "Owl Carousel, WOW.js, Magnific Popup and Superfish power the template's layout and animations." },
      { name: "React Router", description: "Included in the app shell, though the site itself is a single page." },
    ],
    previewUrl: "/project-previews/churro/index.html",
  },
];
