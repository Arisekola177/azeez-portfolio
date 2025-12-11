import React from 'react'
import Title from '../layouts/Title'
import  projectOne  from "../../assets/images/projects/streamtube.png";
import  projectTwo  from "../../assets/images/projects/shopcart.png";
import  projectThree  from "../../assets/images/projects/Teleios.png";
import  projectFour  from "../../assets/images/projects/Teleios lms.png";
import  projectFive  from "../../assets/images/projects/Teleios Admin.png";
import  projectSix  from "../../assets/images/projects/raven.png";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
          
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Movie App"
          des="This movie streaming app, built with Next.js, integrates with an API to stream movie videos from YouTube and uses
           NextAuth for secure user authentication, offering a seamless and user-friendly viewing experience."
          src={projectOne}
          github='https://github.com/Arisekola177/streamtube'
          live='https://streamtube-iota.vercel.app/'

        />
        <ProjectsCard
          title="E-commerce Website"
          des=" This eCommerce web app, built with Next.js, Prisma, MongoDB, and integrated with Stripe for checkout, provides a robust platform for seamless online shopping, 
          combining fast performance with a scalable database solution and secure payment processing for an optimal user experience."
          src={projectTwo}
          github='https://github.com/Arisekola177/shopcart'
          live='https://shopcart-coral.vercel.app/'
        />
        <ProjectsCard
          title="Teleios"
          des="An edtech platform that offers online courses, built with React for the frontend and Node.js for the backend, providing a seamless learning experience."
          src={projectThree}
          github=''
          live='https://jointeleios.com/'
        />
        <ProjectsCard
          title="Teleios LMS"
          des="Learning Management System for Teleios platform, built with React for the frontend and Node.js for the backend, enabling efficient course management and delivery."
          src={projectFour}
          github=''
          live='https://app.jointeleios.com/'
        />
         <ProjectsCard
          title="Teleios Admin Dashboard"
          des="Admin dashboard for Teleios platform, built with React for the frontend and Node.js for the backend, facilitating effective administration and oversight of the platform."
          src={projectFive}
          github=''
          live='admin.jointeleios.com'
        />
          <ProjectsCard
          title="Raven"
          des="Aviation fuel service platform built with Next.js for the frontend and Node.js for the backend, streamlining fuel management and operations in the aviation industry."
          src={projectSix}
          github=''
          live='https://main.dz6045uj9dn0m.amplifyapp.com/'
        />
      </div>
    </section>
  );
}

export default Projects