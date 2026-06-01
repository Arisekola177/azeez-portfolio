import { FaTwitter, FaLinkedinIn, FaGithub, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import headshot from "../../assets/headshot.png";
import Image from "next/image";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover object-top rounded-lg mb-2"
        src={headshot}
        alt="Saibu Azeez"
        width={400}
        height={256}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Saibu Azeez</h3>
        <p className="text-lg font-normal text-designColor">
          Full-Stack Web Developer
        </p>
        <p className="text-sm leading-6 text-gray-400">
          I&apos;m currently available for full-time roles and interesting freelance projects.
          Let&apos;s build something great together.
        </p>

        <div className="flex flex-col gap-3 mt-2">
          <a
            href="mailto:shuaibazeez14@gmail.com"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-designColor transition-colors duration-300 group"
          >
            <span className="w-8 h-8 rounded-full bg-black bg-opacity-40 inline-flex items-center justify-center text-designColor group-hover:bg-designColor group-hover:text-white transition-all duration-300">
              <FaEnvelope />
            </span>
            shuaibazeez14@gmail.com
          </a>
          <a
            href="tel:+2348064272889"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-designColor transition-colors duration-300 group"
          >
            <span className="w-8 h-8 rounded-full bg-black bg-opacity-40 inline-flex items-center justify-center text-designColor group-hover:bg-designColor group-hover:text-white transition-all duration-300">
              <FaPhone />
            </span>
            +234 806 427 2889
          </a>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="w-8 h-8 rounded-full bg-black bg-opacity-40 inline-flex items-center justify-center text-designColor">
              <FaMapMarkerAlt />
            </span>
            Lagos, Nigeria (Open to remote)
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont tracking-wider">Find me on</h2>
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
    </div>
  );
};

export default ContactLeft;