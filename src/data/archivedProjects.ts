import { Bike, CakeSlice, Donut, Hammer } from "lucide-react";
import type { ArchivedProject } from "@/types/portfolio";

export const archivedProjects: ArchivedProject[] = [
  {
    id: "michis",
    title: "Michi's",
    description:
      "A one-page site for a home-based healthy snacks and desserts business in Caracas, built to introduce the brand, showcase products and take orders through a contact form.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    year: 2019,
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
    year: 2019,
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
    year: 2020,
    status: "Archived",
    icon: Donut,
    gradient: ["--color-duo-2", "--color-duo-3"],
    thumbnailImage: "/projects/churro/logo.png",
    summary:
      "Holy Churro was a one-page marketing site for a churro and cookie shop in Vicente López, Buenos Aires, founded in 2019. Built with Create React App, it composes a classic Bootstrap 4/jQuery landing template (image slider, \"Nuestra Historia\" story section, store photo and map link, an Instagram call-to-action, and a floating menu of delivery-app icons) inside React components, while two sections — a \"Destacados\" dish list and a \"Productos Más Vendidos\" carousel — pulled their items live from a Firebase Firestore database instead of static markup. The preview below is fully self-contained: Firebase has been removed from it, and those two sections now render the locally preserved product images without the original names and prices, which weren't kept.",
    techStack: [
      { name: "React 16 + Create React App", description: "Component structure and the production build served in the preview." },
      { name: "Redux + react-redux-firebase", description: "Wired the two product sections to Firebase Firestore collections in the original site." },
      { name: "Firebase Firestore", description: "Original backing store for the \"Destacados\" and \"Productos Más Vendidos\" items; the preview below no longer connects to it." },
      { name: "Bootstrap 4 + jQuery plugins", description: "Owl Carousel, WOW.js, Magnific Popup and Superfish power the template's layout and animations." },
      { name: "React Router", description: "Included in the app shell, though the site itself is a single page." },
    ],
    previewUrl: "/project-previews/churro/index.html",
  },
  {
    id: "morees",
    title: "Ferretería Morees",
    description:
      "A hardware and tools e-commerce catalog for a retailer, built on Joomla and VirtueMart — the oldest project in this archive.",
    tags: ["Joomla", "VirtueMart", "MySQL", "jQuery", "YOOtheme"],
    year: 2012,
    status: "Archived",
    icon: Hammer,
    gradient: ["--color-duo-1", "--color-duo-2"],
    thumbnailImage: "/projects/morees/thumbnail.png",
    summary:
      "Ferretería Morees was an online catalog for a hardware and tools retailer, built on Joomla! 1.6 with the VirtueMart 2.0 e-commerce component and a commercial YOOtheme template (yoo_quantum, on the Warp framework). Rather than custom-built software, it's a real store configured on top of an existing open-source CMS/e-commerce platform: setting up the template's color profile, structuring VirtueMart's product categories, and loading a live catalog of tools — drills, hammers, shovels, chainsaws, ladders and saws — with real product photography. The original site's database isn't part of this archive, so this case study is documented from the surviving codebase, template configuration and product images rather than from a live install. It's presented here as an archived case study; the original Joomla/VirtueMart installation is not publicly runnable today, both because its dependencies (Joomla 1.6, VirtueMart 2.0.2, jQuery 1.6.1) have long been unsupported and carry known vulnerabilities, and because there's no live demo for it in this portfolio.",
    techStack: [
      { name: "Joomla! 1.6.3", description: "Core CMS handling content, routing, menus and the admin backend." },
      { name: "VirtueMart 2.0.2", description: "E-commerce component powering the product catalog, categories and shopping cart." },
      { name: "YOOtheme yoo_quantum (Warp framework)", description: "Commercial Joomla template providing the layout, the site's light-blue color profile, and responsive behavior." },
      { name: "MySQL", description: "Relational database backing Joomla's content and VirtueMart's catalog." },
      { name: "jQuery 1.6.1", description: "Bundled by the Warp framework to power the template's interactive UI." },
      { name: "MooTools", description: "Joomla's own core JavaScript framework, running alongside jQuery." },
    ],
    features: [
      "Product catalog with categories",
      "Shopping cart",
      "Product search",
      "User registration and login",
      "Contact form",
      "Product image galleries",
      "Image slider / lightbox (Widgetkit)",
    ],
    architecture: ["Browser", "Joomla! 1.6", "YOOtheme / Warp template", "VirtueMart 2.0.2", "MySQL"],
    role:
      "This one predates the rest of the archive: the work here was configuring and launching a real store on top of an existing open-source platform — setting up the Joomla/VirtueMart install, the YOOtheme template and the product catalog — rather than writing application code from scratch. No custom PHP application logic exists in the project; everything beyond content and configuration is stock Joomla, VirtueMart and YOOtheme software.",
    historicalContext:
      "Built around 2012, when Joomla + VirtueMart was a common way to stand up a small online store without a custom backend. Joomla, VirtueMart, jQuery and MooTools were the standard stack for that kind of project at the time — kept here to show how the toolset has evolved since, not as a stack anyone would choose today.",
  },
];
