'use client'
import { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../../assets/Ola1.jpg'
import { navLinksdata } from '../../constants';
import Image from 'next/image';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor  font-titleFont border-b-[1px] border-b-gray-600">
      <div className='w-full md:w-10/12 mx-auto py-4 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <Image src={logo} className='rounded-full w-[30px]' width='auto' height='auto' alt='logo' />
        <p className='uppercase font-semibold hover:text-designColor duration-300 cursor-pointer'>Arisekola</p>
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-lg md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-4 relative">
              <div>
                <Image className="w-16 rounded-full" width='auto' height='auto' src={logo} alt="logo" />
                <p className="text-xs text-justify text-gray-400 mt-2">
                My expertise lies in translating design concepts into seamless, responsive layouts, utilizing HTML, CSS, and JavaScript to bring ideas to life with precision and finesse.

                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-xs font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
            <span className="bannerIcon">
              <Link href='https://github.com/Arisekola177/' target='blank'>
               <FaGithub />
               </Link>
            </span>
            <span className="bannerIcon">
               <Link href='https://twitter.com/Harysekola' target='blank'>
               <FaTwitter/>
               </Link>
            </span>
            <span className="bannerIcon">
               <Link href='https://www.linkedin.com/in/azeez-saibu-43b554190/' target='blank'>
                <FaLinkedinIn  />
               </Link>
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

export default Navbar