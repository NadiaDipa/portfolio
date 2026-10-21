import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import SafeImage from "./SafeImage";

// One project: screenshot (with placeholder), title, description, tech badges and two buttons.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent">
      {/* Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-bg">
        <SafeImage
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
          fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
              <FaCode className="text-3xl text-accent" aria-hidden="true" />
              <span className="text-sm font-medium">{project.title}</span>
            </div>
          }
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition hover:opacity-90"
            aria-label={`${project.title} live demo (opens in a new tab)`}
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent"
            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
