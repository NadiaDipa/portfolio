import { FaArrowRight, FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import FadeIn from "./FadeIn";
import SafeImage from "./SafeImage";

const primaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-fg shadow-sm transition hover:-translate-y-0.5 hover:opacity-90";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent";
const iconLink =
  "inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-xl text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent";

// Small facts shown under the buttons. Counts come from the data files, so they stay correct.
const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);
const stats = [
  { value: String(projects.length), label: "Projects built" },
  { value: String(totalSkills), label: "Technologies" },
  { value: "BSc", label: "CSE, AIUB" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Soft background decoration (decorative only) */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.25fr_0.75fr]">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              {site.role}
            </p>

            <p className="mt-6 text-lg font-medium text-muted">Hi, I&apos;m</p>
            <h1 className="mt-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-snug text-accent sm:text-2xl">
              Building responsive web apps, from interface to database.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={primaryButton}>
                View Projects
                <FaArrowRight
                  className="text-sm transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className={secondaryButton}>
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex gap-3">
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
              <a href={`mailto:${site.email}`} className={iconLink} aria-label="Send me an email">
                <FaEnvelope aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Circular profile photo. Add your picture at public/profile.jpg */}
          <FadeIn delay={0.15} className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full bg-accent-soft blur-3xl"
              />
              <div className="relative size-64 overflow-hidden rounded-full border border-border bg-surface ring-8 ring-accent-soft sm:size-80">
                <SafeImage
                  src="/profile.jpg"
                  alt={`Portrait of ${site.name}`}
                  priority
                  sizes="(min-width: 640px) 320px, 256px"
                  className="object-cover"
                  fallback={
                    <div className="absolute inset-0 flex items-center justify-center bg-surface text-7xl font-bold text-accent">
                      {site.initials}
                    </div>
                  }
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold shadow-lg sm:left-2 sm:translate-x-0">
                <FaCode className="text-accent" aria-hidden="true" />
                React · Next.js · Node.js
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
