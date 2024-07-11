'use client'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid-cols-1 grid md:grid-cols-2 gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Front-end Engineering"
            subTitle="Altschool of Africa (2023 - 2024)"
            result="5.00/5"
            des="The AltSchool Frontend Engineering Department focuses on educating and training students in the principles and practices of frontend web development. This includes teaching HTML, CSS, JavaScript, and modern frameworks like React and Angular. The department emphasizes hands-on learning through projects and real-world applications, fostering problem-solving skills, and ensuring students are proficient in creating responsive, accessible, and user-friendly web interfaces.
             Additionally, it encourages continuous learning and staying current with industry trends and advancements."
          />
          <ResumeCard
            title="BSc in Accounting"
            subTitle="University of Lagos (2018 - 2021)"
            result="3.64/5"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Diploma"
            subTitle="University of Lagos (2016 - 2018)"
            result="13/15"
            des="Higher education in tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
         
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="web Developer"
            subTitle="Upwork - (2020 - Present)"
            result="Nigeria"
            des="Responsible for designing, coding, and modifying websites according to client specifications by creating visually appealing and user-friendly sites, writing well-designed and efficient code, testing and debugging applications, ensuring cross-browser compatibility, optimizing website performance, maintaining and updating existing websites,
            collaborating with designers and content creators, and staying up-to-date with emerging web technologies and industry trends."
          />
          <ResumeCard
            title="Customer Relation Partner"
            subTitle="Appzone Limited - (2015 - 2016)"
            result="Nigeria"
            des="Responsible for managing and enhancing customer relationships by addressing inquiries and concerns, providing exceptional support and assistance, identifying and resolving issues, fostering customer loyalty, gathering feedback to improve services, maintaining accurate records of customer interactions,
             and collaborating with other departments to ensure a seamless customer experience."
          />
          <ResumeCard
            title="Direct Sales Agent"
            subTitle="Appzone Limited - (2014 - 2015)"
            result="Nigeria"
            des="Responsible for promoting and selling products or services directly to customers by identifying and approaching prospective clients, demonstrating and presenting products, negotiating and closing sales, maintaining customer relationships, meeting sales targets, 
            providing post-sales support, gathering market insights, and keeping accurate records of sales activities and results."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education