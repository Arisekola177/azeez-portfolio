'use client'
import { motion } from 'framer-motion';

const workItems = [
  {
    num: '01',
    role: 'Frontend Developer',
    company: 'Teleios',
    description: 'Cinematic AI DevOps screening platform — Eva voice interviewer, real-time proctoring.',
    period: '2023 TO PRESENT',
    type: 'CONTRACT',
  },
  {
    num: '02',
    role: 'Freelance Full-Stack Developer',
    company: 'Upwork',
    description: '20+ delivered projects across e-commerce, logistics, and SaaS. 5.0 rating.',
    period: '2020 TO 2024',
    type: 'CONTRACT',
  },
  {
    num: '03',
    role: 'Frontend Engineering Student',
    company: 'AltSchool Africa',
    description: 'Intensive program covering React, Next.js, TypeScript. Graduated 5.00 / 5.00 GPA.',
    period: '2023 TO 2024',
    type: 'EDUCATION',
  },
  {
    num: '04',
    role: 'BSc Accounting',
    company: 'University of Lagos',
    description: 'Analytical foundation — structured logic and data-driven thinking applied to engineering.',
    period: '2018 TO 2021',
    type: 'EDUCATION',
  },
];

const Resume = () => {
  return (
    <section id="work" className="w-full border-t border-inkBorder">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-start gap-6 py-12 border-b border-inkBorder">
          <span className="font-mono text-[11px] text-dusty min-w-[48px]">02</span>
          <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">Work</span>
        </div>

        {/* Work rows */}
        <div className="divide-y divide-inkBorder">
          {workItems.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="project-row grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_180px] gap-4 py-10 items-start group cursor-default"
            >
              {/* Number */}
              <span className="font-mono text-[12px] text-dusty">{item.num}</span>

              {/* Role + company */}
              <div>
                <h3 className="font-serif text-[1.35rem] text-bone group-hover:text-bone transition-colors leading-snug">
                  {item.role}
                </h3>
                <p className="font-mono text-[11px] text-dusty mt-1">{item.company}</p>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] text-dusty leading-6 md:max-w-xs">
                {item.description}
              </p>

              {/* Period + type */}
              <div className="text-right">
                <p className="font-mono text-[11px] text-dusty leading-5">{item.period}</p>
                <p className="font-mono text-[10px] text-dusty/50 mt-1">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CV */}
        <div className="py-10 border-t border-inkBorder flex items-center gap-6">
          <a
            href="/Saibu_Azeez.pdf"
            download="Saibu_Azeez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-bone border border-inkBorder px-6 py-3 hover:border-bone/40 transition-colors inline-flex items-center gap-2 group"
          >
            Download CV
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <span className="font-mono text-[11px] text-dusty">Full resume available as PDF</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;