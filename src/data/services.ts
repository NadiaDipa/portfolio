// "What I can offer" section. Edit, add or remove items here.
import type { IconType } from "react-icons";
import { FaDatabase, FaLaptopCode, FaLock, FaMobileAlt, FaRocket, FaServer } from "react-icons/fa";

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "Responsive Web Apps",
    description:
      "Clean React and Next.js interfaces that look and work great on phones, tablets and desktops.",
    icon: FaLaptopCode,
  },
  {
    title: "Full Stack Development",
    description:
      "From the screen to the server: one developer who can build both the front end and the back end.",
    icon: FaServer,
  },
  {
    title: "Authentication",
    description:
      "Sign up, sign in and protected pages with Better Auth, set up the secure way.",
    icon: FaLock,
  },
  {
    title: "APIs and Databases",
    description:
      "REST APIs with Node.js and Express, backed by MongoDB, ready for your app to use.",
    icon: FaDatabase,
  },
  {
    title: "Mobile-first Design",
    description:
      "Layouts planned for small screens first, then scaled up, with accessible colors and keyboard support.",
    icon: FaMobileAlt,
  },
  {
    title: "Deployment",
    description:
      "Getting your project live on Vercel or Netlify, with Git set up so updates ship in one push.",
    icon: FaRocket,
  },
];
