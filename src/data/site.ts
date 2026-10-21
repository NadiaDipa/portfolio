// Personal details used across the site. Edit this file to update your info.

export const site = {
  name: "Nadia Islam Dipa",
  firstName: "Nadia",
  initials: "ND",
  role: "Full Stack Developer",
  intro:
    "A CS graduate who builds with React, Next.js, Node.js, Express and MongoDB. I learn best by shipping real projects.",
  bio: "CS graduate who builds responsive web apps with React, Next.js, authentication, and backend APIs using Node.js, Express and MongoDB. Always learning through real projects.",
  email: "dipanadia34@gmail.com",
  github: "https://github.com/NadiaDipa",
  linkedin: "https://www.linkedin.com/in/nadia-islam-dipa/",
  // Used for SEO / Open Graph. Replace with your real URL after the first deploy
  // (or set NEXT_PUBLIC_SITE_URL in your hosting environment variables).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-site.netlify.app",
  education: {
    degree: "BSc in Computer Science and Engineering",
    school: "American International University-Bangladesh (AIUB)",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
