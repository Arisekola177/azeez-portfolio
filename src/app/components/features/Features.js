'use client'
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="about" className="w-full border-t border-inkBorder">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header row */}
        <div className="flex items-start gap-6 py-12 border-b border-inkBorder">
          <span className="font-mono text-[11px] text-dusty min-w-[48px]">01</span>
          <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">About</span>
        </div>

        {/* Big editorial statement */}
        <div className="py-16 grid grid-cols-1 lgl:grid-cols-[1fr_2fr] gap-12">
          <div /> {/* spacer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight text-bone mb-4">
              Transforming complex ideas.{' '}
              <em className="text-bone/40">into polished production realities.</em>
            </h2>
          </motion.div>
        </div>

        {/* About body text */}
        <div className="pb-16 border-b border-inkBorder grid grid-cols-1 lgl:grid-cols-[1fr_2fr] gap-12">
          <div /> {/* spacer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-sans text-[15px] text-dustyLight leading-8">
              I'm <span className="text-bone font-medium">Saibu Azeez</span> — a Full-Stack Developer with 5+ years of hands-on experience building real products. I sit at the intersection of clean backend architecture and sharp, intuitive frontends: the person who can design the data model in the morning and push the pixel-perfect UI by evening.
            </p>
            <p className="font-sans text-[15px] text-dustyLight leading-8">
              I graduated from AltSchool Africa (Frontend Engineering) with a{' '}
              <span className="text-bone font-semibold">5.00 / 5.00 GPA</span> — then went straight into production, building e-commerce suites, EdTech dashboards, AI screening platforms, and enterprise logistics systems. My work spans Nigeria, Africa, and global clients who need someone who understands both the pipeline and the pixel.
            </p>
            <p className="font-sans text-[15px] text-dustyLight leading-8">
              If you need someone who can own the full journey — architecture, UX, and deployment — we should talk.
            </p>

            {/* Services in 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-inkBorder">
              {[
                { num: '01', title: 'Web Development', desc: 'Responsive, high-performance apps with Next.js, React, and modern frontend tooling.' },
                { num: '02', title: 'Full-Stack Solutions', desc: 'End-to-end: Node.js APIs, MongoDB, Prisma, auth, payments, and admin dashboards.' },
                { num: '03', title: 'E-commerce & SaaS', desc: 'Secure checkout flows, Stripe & Paystack, user portals, and real-time features — from idea to production.' },
              ].map((s) => (
                <div key={s.num} className="group">
                  <p className="font-mono text-[10px] text-dusty mb-3">{s.num}</p>
                  <h3 className="font-serif text-base text-bone mb-2">{s.title}</h3>
                  <p className="font-sans text-[13px] text-dusty leading-6">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
