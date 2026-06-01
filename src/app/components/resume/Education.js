'use client'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Professional Summary */}
      <div className="w-full bg-black bg-opacity-20 rounded-xl p-6 lgl:p-8 border-l-4 border-designColor shadow-shadowOne">
        <h2 className="text-xl font-titleFont font-bold text-white mb-3">Professional Summary</h2>
        <p className="text-gray-400 text-sm leading-7">
          Full-Stack Developer with <span className="text-designColor font-semibold">5+ years</span> of professional engineering experience building high-performance
          web applications. Strong expertise in the{' '}
          <span className="text-white font-semibold">MERN / Next.js stack</span>, specializing in cinematic AI-integrated user interfaces, automated proctoring guards, and high-scale transaction dashboards. Maintained a consistent{' '}
          <span className="text-designColor font-semibold">5-star client rating</span> across 20+ freelance projects on Upwork.
        </p>
      </div>

      {/* Two columns: Education + Experience */}
      <div className="w-full grid-cols-1 grid md:grid-cols-2 gap-10 lgl:gap-20">

        {/* Education */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Frontend Engineering"
              subTitle="AltSchool Africa (2023 – 2024)"
              result="5.00 / 5.00"
              des="Intensive, project-based program focused on modern frontend development with React, Next.js, TypeScript, and real-world applications. Graduated with a perfect GPA, completing multiple full-stack capstone projects."
            />
            <ResumeCard
              title="BSc Accounting"
              subTitle="University of Lagos (2018 – 2021)"
              result="3.64 / 5.00"
              des="Developed strong analytical and problem-solving skills directly applicable to technical development — data-driven thinking, structured logic, and attention to detail."
            />
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Frontend Developer"
              subTitle="Teleios — (2023 – Present)"
              result="Lagos, NG"
              des="Architecting and maintaining premium, high-fidelity React/Next.js interfaces, including the cinematic AI proctored screening platform (featuring real-time voice conversations with Eva) and the main multi-tenant EdTech student LMS and admin dashboards."
            />
            <ResumeCard
              title="Freelance Full-Stack Developer"
              subTitle="Upwork — Remote (2020 – 2024)"
              result="🌍 Remote"
              des="Delivered 20+ custom full-stack solutions ranging from enterprise logistics trackers to online store suites. Specialized in high-performance Next.js architectures, secure multi-currency payment gates (Stripe + Paystack), and Prisma database systems. Maintained a consistent 5.0 Upwork client success rating."
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default Education;