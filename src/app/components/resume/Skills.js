'use client'
import { motion } from 'framer-motion';

const skillBars = [
  { name: "React", pct: "90%", width: "w-[90%]" },
  { name: "Next.js", pct: "88%", width: "w-[88%]" },
  { name: "JavaScript (ES6+)", pct: "85%", width: "w-[85%]" },
  { name: "TypeScript", pct: "70%", width: "w-[70%]" },
  { name: "HTML5 & CSS3", pct: "95%", width: "w-[95%]" },
  { name: "Tailwind CSS", pct: "90%", width: "w-[90%]" },
  { name: "Node.js & Express", pct: "78%", width: "w-[78%]" },
  { name: "MongoDB & Prisma", pct: "72%", width: "w-[72%]" },
  { name: "Stripe & Payments", pct: "80%", width: "w-[80%]" },
  { name: "Git & GitHub", pct: "88%", width: "w-[88%]" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Proficiency
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {skillBars.map((skill, i) => (
          <div key={skill.name} className="overflow-x-hidden">
            <div className="flex justify-between mb-2">
              <p className="text-sm uppercase font-medium text-gray-300">{skill.name}</p>
              <p className="text-sm text-designColor font-semibold">{skill.pct}</p>
            </div>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`${skill.width} h-full bg-gradient-to-r from-blue-600 via-designColor to-pink-500 rounded-md relative`}
              />
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;