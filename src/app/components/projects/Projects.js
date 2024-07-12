import React from 'react'
import Title from '../layouts/Title'
import  projectOne  from "../../assets/images/projects/streamtube.jpg";
import  projectTwo  from "../../assets/images/projects/shopcart.jpg";
import  projectThree  from "../../assets/images/projects/getlink.jpg";
import  projectFour  from "../../assets/images/projects/meta.jpg";
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
       
      </div>
    </section>
  );
}

export default Projects