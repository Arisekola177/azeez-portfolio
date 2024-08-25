import React from 'react'
import Title from '../layouts/Title'
import  projectOne  from "../../assets/images/projects/streamtube.jpg";
import  projectTwo  from "../../assets/images/projects/shopcart.jpg";
import  projectThree  from "../../assets/images/projects/getlink.jpg";
import  projectFour  from "../../assets/images/projects/meta.jpg";
import  projectFive  from "../../assets/images/projects/denodata.jpg";
import  projectSix  from "../../assets/images/projects/chatter.jpg";
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
          title="Getlinked"
          des="Real world application with impressive user interface. Built with react, tailwind and framer-motion."
          src={projectThree}
          github='https://github.com/Arisekola177/getlink-app'
          live='https://getlink-app.vercel.app/'
        />
        <ProjectsCard
          title="Meta"
          des="Real world application with impressive user interface. Built with react, tailwind and framer-motion."
          src={projectFour}
          github='https://github.com/Arisekola177/meta'
          live='https://meta-henna-three.vercel.app/'
        />
         <ProjectsCard
          title="Chatter"
          des="Chatter Blog Application. A full-stack blog application built with Next.js, Prisma, MongoDB, Firebase, and Tailwind CSS.
                 Features
                 User authentication and authorization
                 Create, read, update, and delete (CRUD) blog posts
                Image and video upload and storage using Firebase
                Responsive design with Tailwind CSS."
          src={projectSix}
          github='https://github.com/Arisekola177/chatter'
          live='https://chatter-nine-sigma.vercel.app/'
        />
          <ProjectsCard
          title="Denodata"
          des="Business solution application for a company into supermarket solutions."
          src={projectFive}
          github='https://github.com/Arisekola177/denodata'
          live='https://denodata.vercel.app/'
        />
      </div>
    </section>
  );
}

export default Projects