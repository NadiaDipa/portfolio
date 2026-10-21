import { FaGraduationCap, FaLaptopCode, FaLock, FaServer } from "react-icons/fa";
import { site } from "@/data/site";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

// What I focus on (taken from my bio and projects)
const focusAreas = [
  {
    icon: FaLaptopCode,
    title: "Responsive front ends",
    text: "React and Next.js interfaces that feel good on every screen size.",
  },
  {
    icon: FaLock,
    title: "Authentication",
    text: "Sign up and sign in flows built with Better Auth.",
  },
  {
    icon: FaServer,
    title: "Backend APIs",
    text: "Node.js, Express and MongoDB behind the scenes.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <FadeIn>
        <SectionHeading
          index="01"
          eyebrow="About"
          title="A CS graduate who learns by building"
        />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <FadeIn>
            <p className="text-xl leading-relaxed text-muted">{site.bio}</p>
          </FadeIn>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <li key={title}>
                <FadeIn delay={index * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-accent">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-lg text-accent">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent sm:p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-2xl text-accent">
              <FaGraduationCap aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted">
              Education
            </h3>
            <p className="mt-3 text-2xl font-semibold leading-snug">
              {site.education.degree}
            </p>
            <p className="mt-2 text-muted">{site.education.school}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
