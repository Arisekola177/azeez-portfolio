'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
import Image from 'next/image';
import projectOne from "../../assets/images/projects/streamtube.png";
import projectTwo from "../../assets/images/projects/shopcart.png";
import projectThree from "../../assets/images/projects/nexvenda.png";
import projectFour from "../../assets/images/projects/abadel.png";
import projectSix from "../../assets/images/projects/raven.png";
import projectTeleios from "../../assets/images/projects/Teleios.png";

const projects = [
  {
    num: '01',
    title: 'StreamTube Cinema Platform',
    category: 'Entertainment & Media',
    stack: ['Next.js', 'NextAuth', 'YouTube API', 'Tailwind CSS'],
    description: 'Responsive movie streaming platform with secure NextAuth authentication and YouTube Player API integration. Clean cinematic dark UI with session-guarded routes.',
    live: 'https://streamtube-iota.vercel.app/',
    github: 'https://github.com/Arisekola177/streamtube',
    image: projectOne,
    year: '2024',
  },
  {
    num: '02',
    title: 'ShopCart E-Commerce Suite',
    category: 'E-Commerce',
    stack: ['Next.js', 'Prisma', 'MongoDB', 'Stripe'],
    description: 'Full-featured online store — product management, cart, Stripe checkout, admin dashboard. Optimised relational schema for high-concurrency checkout sessions.',
    live: 'https://shopcart-coral.vercel.app/',
    github: 'https://github.com/Arisekola177/shopcart',
    image: projectTwo,
    year: '2024',
  },
  {
    num: '03',
    title: 'Nexvenda Creator Commerce',
    category: 'Creator Commerce',
    stack: ['Next.js', 'MongoDB', 'Stripe', 'Paystack'],
    description: 'All-in-one creator platform for African entrepreneurs — multi-currency checkouts, automated affiliate networks, encrypted digital asset vault.',
    live: 'https://nexvenda.org',
    github: '',
    image: projectThree,
    year: '2024',
  },
  {
    num: '04',
    title: 'Abadel Luxury Real Estate',
    category: 'Luxury Real Estate',
    stack: ['Next.js', 'Framer Motion', 'Swiper', 'Tailwind CSS'],
    description: 'Premium shortlet hospitality, real estate portfolio, and elite SUV fleet rental platform. Buttery smooth animations, immersive design.',
    live: 'https://abadelhomes.com',
    github: '',
    image: projectFour,
    year: '2023',
  },
  {
    num: '05',
    title: 'Raven Aviation Fuel Platform',
    category: 'Enterprise Logistics',
    stack: ['Next.js', 'Framer Motion', 'Node.js', 'AWS Amplify'],
    description: 'Operations & logistics dashboard — depot-to-runway GPS tracking, automated fuel QA reports, airline billing portal for Nigeria\'s leading aviation fuel supplier.',
    live: 'https://www.ravenenergyltd.com/',
    github: '',
    image: projectSix,
    year: '2024',
  },
  {
    num: '06',
    title: 'Teleios AI DevOps Assessment',
    category: 'AI Screening',
    stack: ['Next.js', 'Framer Motion', 'AI/Voice API'],
    description: 'Cinematic AI-powered DevOps screening — Eva, an adaptive voice interviewer, evaluates engineers across 7 technical pillars with AI proctoring and 24-hour results.',
    live: 'https://teleios-devops-assessment.vercel.app/',
    github: '',
    image: projectTeleios,
    year: '2024',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="w-full border-t border-inkBorder">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 py-12 border-b border-inkBorder">
          <span className="font-mono text-[11px] text-dusty min-w-[48px]">04</span>
          <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">Projects</span>
        </div>

        {/* Project rows */}
        <div className="divide-y divide-inkBorder">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="project-row grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 py-10 items-start group cursor-default"
            >
              {/* Number */}
              <span className="font-mono text-[12px] text-dusty">{project.num}</span>

              {/* Main info */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="font-serif text-[1.5rem] text-bone leading-tight group-hover:text-bone transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-dusty border border-inkBorder px-2 py-0.5 rounded-sm">
                    {project.category}
                  </span>
                </div>

                <p className="font-sans text-[13px] text-dusty leading-6 max-w-xl">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] text-dusty/60">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-2">
                  <NextLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-bone/70 hover:text-bone transition-colors uppercase tracking-widest hover-line"
                  >
                    Live →
                  </NextLink>
                  {project.github && (
                    <NextLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-dusty hover:text-bone transition-colors uppercase tracking-widest hover-line"
                    >
                      Github
                    </NextLink>
                  )}
                </div>
              </div>

              {/* Year + thumbnail */}
              <div className="flex flex-col items-end gap-4 min-w-[180px]">
                <span className="font-mono text-[11px] text-dusty">{project.year}</span>
                <div className="relative w-40 h-24 overflow-hidden border border-inkBorder opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;