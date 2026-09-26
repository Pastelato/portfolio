"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { archivedProjects } from "@/data/archivedProjects";
import { fadeUp, revealViewport } from "@/lib/animations";

/**
 * Shared case-study template for a single archived project, rendered at
 * `/projects/<id>`. Reused across every project that has a full detail page
 * (i.e. that defines `summary` in `data/archivedProjects.ts`) so adding the
 * next real project only needs a data entry plus a thin page file.
 *
 * Takes a plain `projectId` (not the project object) and resolves it from
 * `archivedProjects` itself — icons are components, which can't be passed
 * from a Server Component page into this Client Component as props.
 */
export default function ProjectDetail({ projectId }: { projectId: string }) {
  const project = archivedProjects.find((p) => p.id === projectId);
  if (!project) notFound();

  const Icon = project.icon;
  const isCompleted = project.status === "Completed";
  const technologies = project.techStack ?? project.tags.map((tag) => ({ name: tag, description: "" }));

  return (
    <article className="container-px mx-auto max-w-[1200px] pt-32 pb-[var(--spacing-section)] md:pt-40">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
            Case study
          </p>
          <h1 className="mt-3 font-display text-[length:var(--text-section)] font-bold leading-[var(--text-section--line-height)] tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-line px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative flex aspect-[16/10] w-full shrink-0 items-center justify-center overflow-hidden rounded-card lg:w-80"
          style={{
            backgroundImage: `linear-gradient(135deg, var(${project.gradient[0]}), var(${project.gradient[1]}))`,
          }}
        >
          {project.thumbnailImage ? (
            <div className="relative size-full p-10">
              <Image
                src={project.thumbnailImage}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-contain"
              />
            </div>
          ) : (
            <Icon aria-hidden className="size-16 stroke-[1.25] text-ink-inverse/80" />
          )}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="text-sm font-medium text-ink-inverse/80">
              {project.year ?? "—"}
            </span>
            <span
              className={`rounded-pill px-3 py-1 text-xs font-semibold ${
                isCompleted ? "bg-accent text-ink" : "bg-background/90 text-muted"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </motion.div>

      {/* About the project */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-16 max-w-3xl border-t border-line pt-10"
      >
        <h2 className="font-display text-xl font-bold text-ink">About the project</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
      </motion.div>

      {/* Historical context */}
      {project.historicalContext && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 max-w-3xl border-t border-line pt-10"
        >
          <h2 className="font-display text-xl font-bold text-ink">Historical context</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.historicalContext}</p>
        </motion.div>
      )}

      {/* Technologies */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-16 border-t border-line pt-10"
      >
        <h2 className="font-display text-xl font-bold text-ink">Technologies</h2>
        <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {technologies.map((tech) => (
            <div key={tech.name}>
              <h3 className="font-display text-sm font-semibold text-ink">{tech.name}</h3>
              {tech.description && (
                <p className="mt-1 text-sm leading-relaxed text-muted">{tech.description}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 border-t border-line pt-10"
        >
          <h2 className="font-display text-xl font-bold text-ink">Features</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm leading-relaxed text-muted">
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Architecture */}
      {project.architecture && project.architecture.length > 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 max-w-md border-t border-line pt-10"
        >
          <h2 className="font-display text-xl font-bold text-ink">Architecture</h2>
          <div className="mt-6 flex flex-col gap-2 font-display text-sm text-ink">
            {project.architecture.map((step, index) => (
              <div key={step} className="flex flex-col items-start">
                {index > 0 && <span className="pl-4 text-muted">↓</span>}
                <span className="rounded-card border border-line bg-surface-light px-4 py-2">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* My role */}
      {project.role && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 max-w-3xl border-t border-line pt-10"
        >
          <h2 className="font-display text-xl font-bold text-ink">My role</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.role}</p>
        </motion.div>
      )}

      {/* Project preview */}
      {project.previewUrl && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 border-t border-line pt-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-xl font-bold text-ink">Project preview</h2>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
              >
                Open in new tab
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                  </svg>
                  View source
                </a>
              )}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-card border border-line bg-surface-light">
            <iframe
              src={project.previewUrl}
              title={`${project.title} — live preview`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              className="h-[600px] w-full sm:h-[700px]"
            />
          </div>
        </motion.div>
      )}
    </article>
  );
}
