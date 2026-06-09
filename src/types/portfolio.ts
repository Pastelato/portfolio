import type { LucideIcon } from "lucide-react";

/** A single offering / service card. */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/** A role in the experience timeline. */
export interface ExperienceItem {
  id: string;
  /** Bold title of the role / team. */
  role: string;
  /** Description / details, shown as a subtitle. */
  company: string;
  /** Duration label, e.g. "2 Years". Optional. */
  period?: string;
}

/** A case-study / selected work entry. */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  /** Larger feature cards span two columns on desktop. */
  featured?: boolean;
}

/** A single headline metric. */
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

/** A navigation entry used by the navbar and the dark pill bar. */
export interface NavLink {
  label: string;
  href: string;
}

/** Shape of the contact form payload. */
export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}
