import { AiFillAppstore } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { SiShopify } from "react-icons/si";

// Features / Services Data
export const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Web Development",
    des: "I develop responsive, high-performance web applications using Next.js, React, and modern frontend tools. Focused on clean code, excellent UX, and scalability — from landing pages to complex SPAs.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Full-Stack Solutions",
    des: "End-to-end development including backend APIs (Node.js + Prisma + MongoDB), user authentication (NextAuth), secure payment integrations (Stripe), and feature-rich admin dashboards.",
  },
  {
    id: 3,
    icon: <SiShopify />,
    title: "E-commerce & SaaS",
    des: "Building online stores and SaaS platforms with secure checkout flows, user account management, product management systems, and real-time features — from idea to production.",
  },
];

// Skills Data
export const skillsData = {
  frontend: [
    { name: "React", icon: "FaReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript ES6+", icon: "IoLogoJavascript" },
  ],
  backend: [
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "Express", icon: "SiExpress" },
    { name: "Prisma", icon: "SiPrisma" },
    { name: "MongoDB", icon: "SiMongodb" },
  ],
  tools: [
    { name: "Stripe", icon: "SiStripe" },
    { name: "NextAuth", icon: "SiAuth0" },
    { name: "Git / GitHub", icon: "FaGithub" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "REST APIs", icon: "TbApi" },
    { name: "SEO Basics", icon: "MdOutlineTravelExplore" },
  ],
  learning: [
    { name: "Docker", icon: "FaDocker" },
    { name: "DevOps", icon: "FaInfinity" },
  ],
};
