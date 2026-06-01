'use client'
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaDocker, FaInfinity
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb,
  SiPrisma, SiStripe, SiVercel, SiExpress
} from 'react-icons/si';
import Title from '../layouts/Title';

const iconMap = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaGithub: <FaGithub />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaDocker: <FaDocker />,
  FaInfinity: <FaInfinity />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiMongodb: <SiMongodb />,
  SiPrisma: <SiPrisma />,
  SiStripe: <SiStripe />,
  SiVercel: <SiVercel />,
  SiExpress: <SiExpress />,
};

const categoryColors = {
  Frontend:   { border: 'border-blue-500',   badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',   icon: 'text-blue-400' },
  Backend:    { border: 'border-green-500',  badge: 'bg-green-500/10 text-green-400 border-green-500/30', icon: 'text-green-400' },
  'Tools & Others': { border: 'border-purple-500', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30', icon: 'text-purple-400' },
  'Currently Learning': { border: 'border-designColor', badge: 'bg-red-500/10 text-designColor border-designColor/30', icon: 'text-designColor' },
};

const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React',            icon: 'FaReact' },
      { name: 'Next.js',          icon: 'SiNextdotjs' },
      { name: 'TypeScript',       icon: 'SiTypescript' },
      { name: 'Tailwind CSS',     icon: 'SiTailwindcss' },
      { name: 'HTML5',            icon: 'FaHtml5' },
      { name: 'CSS3',             icon: 'FaCss3Alt' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',  icon: 'FaNodeJs' },
      { name: 'Express',  icon: 'SiExpress' },
      { name: 'Prisma',   icon: 'SiPrisma' },
      { name: 'MongoDB',  icon: 'SiMongodb' },
    ],
  },
  {
    label: 'Tools & Others',
    skills: [
      { name: 'Stripe',     icon: 'SiStripe' },
      { name: 'Git/GitHub', icon: 'FaGithub' },
      { name: 'Vercel',     icon: 'SiVercel' },
    ],
  },
  {
    label: 'Currently Learning',
    skills: [
      { name: 'Docker',           icon: 'FaDocker' },
      { name: 'DevOps',           icon: 'FaInfinity' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillSection = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Technical Expertise" des="My Skills" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {skillCategories.map((cat) => {
          const colors = categoryColors[cat.label];
          return (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              className={`bg-gradient-to-b from-[#1e2024] to-[#23272b] rounded-xl p-6 shadow-shadowOne border-t-4 ${colors.border} hover:-translate-y-1 transition-transform duration-300`}
            >
              <h3 className="text-base font-titleFont font-semibold text-gray-200 mb-5 uppercase tracking-wider">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${colors.badge} transition-all duration-200 hover:scale-105`}
                  >
                    <span className={`text-sm ${colors.icon}`}>
                      {iconMap[skill.icon]}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillSection;
