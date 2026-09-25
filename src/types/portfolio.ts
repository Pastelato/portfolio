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

/** Lifecycle state of an archived project. */
export type ProjectStatus = "Completed" | "Archived";

/** One technology called out in a project's case-study "Technologies" section. */
export interface TechDetail {
  name: string;
  description: string;
}

/**
 * An older project shown on the dedicated `/projects` archive page. Unlike
 * `Project`, it has no case-study image — the thumbnail is a generated
 * gradient (from the `@theme` duo tokens) with an icon overlay instead.
 *
 * `year` is optional: some archived projects (especially early ones) have no
 * reliably determinable date, and we don't invent one.
 *
 * The detail-page fields (`summary`, `techStack`, `previewUrl`, `sourceUrl`)
 * are optional — only present for projects that have a full case-study page
 * at `/projects/<id>`. A project without `summary` renders as a card only,
 * matching the dummy placeholders used to design this section.
 */
export interface ArchivedProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year?: number;
  status: ProjectStatus;
  icon: LucideIcon;
  /** Pair of `@theme` color variable names (e.g. "--color-duo-1") used to build the thumbnail gradient. */
  gradient: [string, string];
  /** Optional real image (logo, brand photo, etc.) shown over the gradient instead of `icon`. */
  thumbnailImage?: string;
  /** Longer "About the project" copy for the case-study page. */
  summary?: string;
  /** Fuller technology breakdown for the case-study page (vs. the compact `tags`). */
  techStack?: TechDetail[];
  /** Path to a live/static preview embeddable in an iframe, e.g. "/project-previews/michis/index.html". */
  previewUrl?: string;
  /** Link to the project's public source repository, if any. */
  sourceUrl?: string;
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
