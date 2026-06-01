'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { Link } from 'react-scroll';
import NextLink from 'next/link';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer.", "Next.js Specialist.", "React Expert.", "Problem Solver.", "Freelance Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col py-4 gap-12">
      <div className="flex flex-col gap-5">
        <h4 className="xs:text-sm lg:text-lg font-normal tracking-wider text-designColor uppercase">
          Welcome to my World
        </h4>
        <h1 className="lg:text-6xl xs:text-3xl font-bold text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">Saibu Azeez</span>
         
        </h1>
        <h2 className="lg:text-3xl xs:text-xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#4f83cc"
          />
        </h2>
        <p className="lg:text-base xs:text-sm font-bodyFont text-gray-400 leading-7 max-w-lg">
          I build fast, scalable, and user-friendly web applications with modern
          technologies. With 5+ years of software engineering experience and hands-on
          training from AltSchool Africa (Frontend Engineering,{" "}
          <span className="text-designColor font-semibold">5.00/5 GPA</span>),
          I turn ideas into production-ready products — from e-commerce platforms
          with Stripe payments to full EdTech dashboards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3 bg-designColor text-white font-semibold rounded-lg cursor-pointer hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:-translate-y-0.5 transform"
          >
            View My Projects
          </Link>
          <a
            href="/Saibu_Azeez.pdf"
            download="Saibu_Azeez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-designColor text-designColor font-semibold rounded-lg hover:bg-designColor hover:text-white transition-all duration-300 hover:-translate-y-0.5 transform text-center"
          >
            Download Resume
          </a>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-lg cursor-pointer hover:border-designColor hover:text-designColor transition-all duration-300 hover:-translate-y-0.5 transform"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;