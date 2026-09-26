"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, SearchX } from "lucide-react";
import { archivedProjects } from "@/data/archivedProjects";
import { fadeUp, revealViewport, staggerContainer, staggerItem } from "@/lib/animations";
import type { ArchivedProject, ProjectStatus } from "@/types/portfolio";

const statusFilters: Array<"All" | ProjectStatus> = ["All", "Completed", "Archived"];

const MotionLink = motion.create(Link);

function ArchivedProjectCard({ project }: { project: ArchivedProject }) {
  const Icon = project.icon;
  const isCompleted = project.status === "Completed";
  const hasDetailPage = Boolean(project.summary);
  const CardWrapper = hasDetailPage ? MotionLink : motion.div;
  const wrapperProps = hasDetailPage ? { href: `/projects/${project.id}` } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-background transition-colors hover:border-ink/20"
    >
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, var(${project.gradient[0]}), var(${project.gradient[1]}))`,
        }}
      >
        {project.thumbnailImage ? (
          <div className="relative size-full p-8 transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.thumbnailImage}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        ) : (
          <Icon
            aria-hidden
            className="size-14 stroke-[1.25] text-ink-inverse/80 transition-transform duration-500 group-hover:scale-110"
          />
        )}

        <span className="absolute right-4 top-4 inline-flex size-10 translate-y-2 items-center justify-center rounded-full bg-background text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-line px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-line pt-4">
            <span className="text-sm font-medium text-muted">{project.year ?? "—"}</span>
            <span
              className={`rounded-pill px-3 py-1 text-xs font-semibold ${
                isCompleted
                  ? "bg-accent text-ink"
                  : "border border-line text-muted"
              }`}
            >
              {project.status}
            </span>
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
            View project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

export default function OlderProjects() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"All" | ProjectStatus>("All");
  const [tech, setTech] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const technologies = useMemo(() => {
    const set = new Set<string>();
    archivedProjects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();

    return archivedProjects
      .filter((project) => status === "All" || project.status === status)
      .filter((project) => tech === "All" || project.tags.includes(tech))
      .filter(
        (project) =>
          !q ||
          project.title.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .sort((a, b) =>
        sort === "newest"
          ? (b.year ?? 0) - (a.year ?? 0)
          : (a.year ?? 0) - (b.year ?? 0)
      );
  }, [query, status, tech, sort]);

  return (
    <section className="container-px mx-auto max-w-[1200px] pt-32 pb-[var(--spacing-section)] md:pt-40">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Recent Projects
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
            All projects
          </p>
          <h1 className="mt-3 font-display text-[length:var(--text-section)] font-bold leading-[var(--text-section--line-height)] tracking-tight text-ink">
            Projects
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          An archive of earlier work — completed and retired projects, kept
          here for reference alongside the recent work on the home page.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <label className="relative block w-full lg:max-w-sm">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-pill border border-line bg-background py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1 rounded-pill border border-line p-1">
            {statusFilters.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setStatus(option)}
                aria-pressed={status === option}
                className={`rounded-pill px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  status === option
                    ? "bg-ink text-ink-inverse"
                    : "text-muted hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <select
            value={tech}
            onChange={(event) => setTech(event.target.value)}
            aria-label="Filter by technology"
            className="rounded-pill border border-line bg-background px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
          >
            <option value="All">All technologies</option>
            {technologies.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as "newest" | "oldest")}
            aria-label="Sort projects"
            className="rounded-pill border border-line bg-background px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        key={filteredProjects.map((project) => project.id).join("|")}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <ArchivedProjectCard key={project.id} project={project} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full flex flex-col items-center gap-3 rounded-card border border-dashed border-line py-20 text-center">
            <SearchX aria-hidden className="size-8 text-muted" />
            <p className="text-sm text-muted">
              No projects match your search or filters.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
