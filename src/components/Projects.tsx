import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <FadeIn>
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A few projects where I put React, Next.js and backend skills into practice."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.08} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
