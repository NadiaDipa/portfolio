import { services } from "@/data/services";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="What I can offer"
            subtitle="Ways I can help turn an idea into a working, good-looking web app."
          />
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <li key={title}>
              <FadeIn delay={(index % 3) * 0.08} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-bg p-6 transition hover:-translate-y-1 hover:border-accent">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-2xl text-accent transition group-hover:bg-accent group-hover:text-accent-fg">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{description}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
