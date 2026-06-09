"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import {
  fadeUp,
  revealViewport,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.link}
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className={`group flex flex-col overflow-hidden rounded-card border border-line bg-background transition-colors hover:border-ink/20 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 inline-flex size-10 translate-y-2 items-center justify-center rounded-full bg-background text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-line px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function CaseStudy() {
  return (
    <section
      id="work"
      className="container-px mx-auto max-w-[1200px] py-[var(--spacing-section)]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
            Selected work
          </p>
          <h2 className="mt-3 flex max-w-xl items-center gap-3 font-display text-[length:var(--text-section)] font-bold leading-[var(--text-section--line-height)] tracking-tight text-ink">
            <Image
              src="/images/work-scribble.png"
              alt=""
              aria-hidden
              width={149}
              height={125}
              className="inline-block h-[0.85em] w-auto shrink-0"
            />
            Recent projects
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          Contact me
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
