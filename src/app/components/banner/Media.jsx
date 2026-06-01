import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiUpwork } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 tracking-wider">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <Link href="https://github.com/Arisekola177/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
          </span>
          <span className="bannerIcon">
            <Link href="https://twitter.com/Harysekola" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
          </span>
          <span className="bannerIcon">
            <Link href="https://www.linkedin.com/in/azeez-saibu-43b554190/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
          </span>
          <span className="bannerIcon">
            <Link href="https://www.upwork.com/freelancers/~013f7ea7fb8e780c46" target="_blank" rel="noopener noreferrer">
              <SiUpwork />
            </Link>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 tracking-wider">
          Best Skill On
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;