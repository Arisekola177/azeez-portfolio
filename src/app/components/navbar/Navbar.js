'use client'
import { useState } from 'react'
import { Link } from "react-scroll";
import NextLink from 'next/link';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import logo from '../../assets/headshot.png'
import { navLinksdata } from '../../constants';
import Image from 'next/image';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor font-titleFont border-b-[1px] border-b-gray-700 backdrop-blur-sm bg-opacity-95">
      <div className="w-full py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            className="rounded-full w-[34px] h-[34px] object-cover object-top"
            width={34}
            height={34}
            alt="Saibu Azeez"
          />
         
        </div>

        {/* Desktop Nav */}
        <div>
          <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-sm font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 relative group"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>

          {/* Hire Me button (desktop) */}
          <div className="hidden md:inline-flex ml-6">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 py-2 bg-designColor text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-opacity-80 transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-lg md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>

          {/* Mobile Menu Drawer */}
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-50">
              <div className="flex flex-col gap-8 py-4 relative">
                <div>
                  <Image
                    className="w-16 h-16 rounded-full object-cover object-top"
                    width={64}
                    height={64}
                    src={logo}
                    alt="Saibu Azeez"
                  />
                  <p className="text-white font-semibold mt-2">Saibu Azeez</p>
                  <p className="text-xs text-gray-400 mt-1 leading-5">
                    Full-Stack Developer — Next.js & React Specialist based in Lagos, Nigeria.
                    Available for remote work worldwide.
                  </p>
                </div>

                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-sm font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont tracking-wider">Find me on</h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <NextLink href="https://github.com/Arisekola177/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </NextLink>
                    </span>
                    <span className="bannerIcon">
                      <NextLink href="https://twitter.com/Harysekola" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </NextLink>
                    </span>
                    <span className="bannerIcon">
                      <NextLink href="https://www.linkedin.com/in/azeez-saibu-43b554190/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </NextLink>
                    </span>
                    <span className="bannerIcon">
                      <NextLink href="https://www.upwork.com/freelancers/~013f7ea7fb8e780c46" target="_blank" rel="noopener noreferrer">
                        <SiUpwork />
                      </NextLink>
                    </span>
                  </div>
                </div>

                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;