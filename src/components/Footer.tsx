import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";

const iconLink =
  "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-lg text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-muted">{site.role}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm text-muted transition hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="GitHub profile (opens in a new tab)"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className={iconLink}
              aria-label="Send an email"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
            <a href="#home" className={iconLink} aria-label="Back to top">
              <FaArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
