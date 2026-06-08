'use client';

import NextLink from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { Link } from 'react-scroll';

const navLinks = [
  { title: "About",    link: "about",    num: "01" },
  { title: "Work",     link: "work",     num: "02" },
  { title: "Stack",    link: "skills",   num: "03" },
  { title: "Projects", link: "projects", num: "04" },
  { title: "Contact",  link: "contact",  num: "05" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-inkBorder mt-0">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main footer row */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-bone" />
              <span className="font-mono text-[11px] tracking-widest2 text-bone uppercase">Saibu Azeez</span>
            </div>
            <p className="font-sans text-[13px] text-dusty leading-6 max-w-xs">
              Full-Stack Developer. Building fast, scalable web applications from Lagos, Nigeria.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green" />
              <span className="font-mono text-[10px] text-dusty">Available for work</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-dusty uppercase tracking-widest mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ title, link, num }) => (
                <li key={num}>
                  <Link
                    to={link}
                    spy smooth offset={-70} duration={600}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span className="font-mono text-[10px] text-dusty/50">{num}</span>
                    <span className="font-mono text-[11px] text-dusty group-hover:text-bone transition-colors uppercase tracking-widest">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="font-mono text-[10px] text-dusty uppercase tracking-widest mb-6">Online</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'GitHub',   href: 'https://github.com/Arisekola177/',                       Icon: FaGithub },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/azeez-saibu-43b554190/',      Icon: FaLinkedinIn },
                { label: 'Twitter',  href: 'https://twitter.com/Harysekola',                          Icon: FaTwitter },
                { label: 'Upwork',   href: 'https://www.upwork.com/freelancers/~013f7ea7fb8e780c46',  Icon: SiUpwork },
              ].map(({ label, href, Icon }) => (
                <NextLink key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <Icon className="text-dusty group-hover:text-bone transition-colors" size={12} />
                  <span className="font-mono text-[11px] text-dusty group-hover:text-bone transition-colors uppercase tracking-widest">
                    {label}
                  </span>
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-inkBorder py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-mono text-[10px] text-dusty/50">
            © 2026 Saibu Azeez · All rights reserved
          </span>
          <span className="font-mono text-[10px] text-dusty/50">
            Built with Next.js · Framer Motion · Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;