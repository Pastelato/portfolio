import { Server, Cloud, BrainCircuit } from "lucide-react";
import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    id: "backend",
    title: "Backend Development",
    description: "Java and Spring Boot",
    icon: Server,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Docker and Kubernetes",
    icon: Cloud,
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Workflow automation scripts",
    icon: BrainCircuit,
  },
];
