import { skillGroups } from "@/data/skills";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

// A slightly different background band so the page has rhythm while scrolling
export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            index="03"
            eyebrow="Skills"
            title="Tools I work with"
            subtitle="The technologies I use to design, build and ship web apps."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.08} className="h-full">
              <SkillCard group={group} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
