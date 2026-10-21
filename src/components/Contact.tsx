import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const contactLink =
  "flex items-center gap-3 rounded-lg py-1 text-muted transition hover:text-accent";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title="Let's build something together"
            subtitle="Have a project, an opportunity or just a question? Send me a message and I'll reply as soon as I can."
          />
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-5">
          <FadeIn className="md:col-span-2">
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className={contactLink}>
                  <FaEnvelope className="text-xl text-accent" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className={contactLink}>
                  <FaGithub className="text-xl text-accent" aria-hidden="true" />
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={contactLink}>
                  <FaLinkedin className="text-xl text-accent" aria-hidden="true" />
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-3">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
