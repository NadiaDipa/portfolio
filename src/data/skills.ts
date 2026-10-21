// Skills grouped by area. Each skill has a react-icons icon.
import type { IconType } from "react-icons";
import {
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaLock,
  FaNodeJs,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiDaisyui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export type Skill = { name: string; icon: IconType };

export type SkillGroup = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces.",
    icon: FaCode,
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DaisyUI", icon: SiDaisyui },
    ],
  },
  {
    title: "Backend",
    description: "APIs, data and authentication.",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Better Auth", icon: FaLock },
    ],
  },
  {
    title: "Tools",
    description: "Version control, builds and deployment.",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vite", icon: SiVite },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];
