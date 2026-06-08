'use client'
import { motion } from 'framer-motion';

const stackRows = [
  {
    num: '01',
    category: 'Languages',
    items: ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    num: '02',
    category: 'Frameworks',
    items: ['Next.js', 'React', 'Node.js', 'Express'],
  },
  {
    num: '03',
    category: 'Styling',
    items: ['Tailwind CSS', 'Framer Motion', 'CSS Modules'],
  },
  {
    num: '04',
    category: 'Data',
    items: ['MongoDB', 'Prisma ORM', 'REST APIs'],
  },
  {
    num: '05',
    category: 'Infra & Tooling',
    items: ['Vercel', 'Git / GitHub', 'Stripe', 'Paystack', 'NextAuth'],
  },
  {
    num: '06',
    category: 'Currently Learning',
    items: ['Docker', 'DevOps', 'PostgreSQL'],
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="w-full border-t border-inkBorder">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 py-12 border-b border-inkBorder">
          <span className="font-mono text-[11px] text-dusty min-w-[48px]">03</span>
          <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">Stack</span>
        </div>

        {/* Stack rows */}
        <div className="divide-y divide-inkBorder">
          {stackRows.map((row, i) => (
            <motion.div
              key={row.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-[80px_200px_1fr] items-center gap-4 py-8 project-row group"
            >
              {/* Number */}
              <span className="font-mono text-[11px] text-dusty">{row.num}</span>

              {/* Category */}
              <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">
                {row.category}
              </span>

              {/* Skills list */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {row.items.map((item, idx) => (
                  <span key={item} className="flex items-center gap-3">
                    <span className="font-serif text-[1.1rem] text-bone/80 group-hover:text-bone transition-colors">
                      {item}
                    </span>
                    {idx < row.items.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-dusty/40 inline-block" />
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
