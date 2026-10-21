// Your projects live here. Edit, add or remove items and the Projects section updates automatically.
// Screenshots go in public/projects/ (for example public/projects/fit-log.png).
// If a screenshot is missing, a placeholder is shown instead.

export type Project = {
  title: string;
  description: string;
  image: string; // path inside /public
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Fit Log",
    description:
      "A workout library and daily planner. Browse exercises by muscle group, open detailed exercise pages, build a daily plan with live stats, and keep your saved workouts in one place.",
    image: "/projects/fit-log.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "React Router"],
    liveUrl: "https://fit-log-silk-three.vercel.app/",
    githubUrl: "https://github.com/NadiaDipa/fit-log",
  },
  {
    title: "Bazar Dor",
    description:
      "A daily market price tracker for essential items in Bangladesh. Bengali interface, category filters, price change indicators, and sign up / sign in powered by Better Auth and MongoDB.",
    image: "/projects/bazar-dor.png",
    tech: ["Next.js", "TypeScript", "Better Auth", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://bazar-dor-psi-indol.vercel.app/",
    githubUrl: "https://github.com/NadiaDipa/bazar-dor",
  },
  {
    title: "Dev Stack Builder",
    description:
      "An interactive app to explore technologies and build your own tech stack. Add or remove items with a live count, get helpful toasts, and enjoy a fully responsive layout.",
    image: "/projects/dev-stack-builder.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
    liveUrl: "https://dev-stack-builder-web-app.netlify.app/",
    githubUrl: "https://github.com/NadiaDipa/dev-stack-builder",
  },
];
