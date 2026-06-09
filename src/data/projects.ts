import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "mtg-price-comparator",
    title: "MTGPriceComparator",
    category: "Mobile App",
    description:
      "MTG Price Comparator is a mobile market intelligence platform for Magic: The Gathering cards, allowing users to compare prices, track historical trends, monitor collections, and make smarter buying and selling decisions through real-time data and analytics.",
    image: "/images/mtg-price-comparator.png",
    tags: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "Gson",
      "OkHttp logging",
      "ViewModel",
      "Java 21",
      "Spring Boot 3",
      "Maven",
      "PostgreSQL",
      "Redis",
      "Scryfall API",
      "Scheduler",
      "JPA/Hibernate",
    ],
    link: "#",
    featured: true,
  },
  {
    id: "contract-ai-2",
    title: "ContractAI",
    category: "AI Platform",
    description:
      "Developed a full-stack AI-powered document intelligence platform capable of automatically classifying contracts and invoices, extracting key information, performing legal risk analysis, comparing contracts, generating PDF reports, and providing executive dashboards. Built using Spring Boot, PostgreSQL, React, Next.js, TypeScript, and Ollama/Qwen LLM for local AI-powered document processing.",
    image: "/images/contract-ai.png",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Next.js",
      "TypeScript",
      "LLM Integration",
      "AI",
      "Document Processing",
      "REST APIs",
      "PDF Generation",
    ],
    link: "#",
    featured: true,
  },
];
