'use client';
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import logo from '../../assets/headshot.png'
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <div className="py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Brand + Socials */}
      <div className="w-full h-full flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            width={44}
            height={44}
            className="rounded-full w-[44px] h-[44px] object-cover object-top"
            alt="Saibu Azeez logo"
          />
          <div>
            <p className="font-titleFont font-bold text-white text-lg">Saibu Azeez</p>
            <p className="text-xs text-gray-500">Full-Stack Developer</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 max-w-xs leading-6">
          Building fast, scalable, and user-friendly web applications. Based in Lagos, Nigeria — available worldwide.
        </p>
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

      {/* Quick Links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider font-titleFont">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {[
            { label: 'Home',     to: 'home' },
            { label: 'Services', to: 'services' },
            { label: 'Skills',   to: 'skills' },
            { label: 'Projects', to: 'projects' },
            { label: 'Resume',   to: 'resume' },
            { label: 'Contact',  to: 'contact' },
          ].map(({ label, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full xs:text-sm lg:text-base relative hover:text-designColor duration-300 group cursor-pointer inline-block"
              >
                {label}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;