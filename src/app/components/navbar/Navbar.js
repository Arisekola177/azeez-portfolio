'use client'
import { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import NextLink from 'next/link';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const navLinks = [
  { _id: 1, title: "About",    link: "about",    num: "01" },
  { _id: 2, title: "Work",     link: "work",     num: "02" },
  { _id: 3, title: "Stack",    link: "skills",   num: "03" },
  { _id: 4, title: "Projects", link: "projects", num: "04" },
  { _id: 5, title: "Contact",  link: "contact",  num: "05" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-inkBorder' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bone inline-block" />
            <span className="font-mono text-[11px] tracking-widest2 text-bone uppercase">Saibu Azeez</span>
          </div>

          {/* Center: Nav (desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ _id, title, link, num }) => (
              <li key={_id}>
                <Link
                  activeClass="nav-active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="font-mono text-[11px] tracking-widest text-dusty hover:text-bone transition-colors duration-300 cursor-pointer uppercase"
                >
                  <span className="mr-1 opacity-50">{num}</span>{title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Status + Time */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green" />
              <span className="font-mono text-[11px] text-dusty">Available</span>
            </span>
            <span className="font-mono text-[11px] text-dusty">·</span>
            <span className="font-mono text-[11px] text-dusty">Lagos, NG</span>
            <span className="font-mono text-[11px] text-dusty">·</span>
            <span className="font-mono text-[11px] text-dusty tabular-nums">{time}</span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setShowMenu(true)}
            className="md:hidden text-dusty hover:text-bone transition-colors p-1"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setShowMenu(false)}
          />
          <div className="mobile-menu-enter relative z-10 w-72 h-full bg-inkLight border-r border-inkBorder flex flex-col p-8">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-5 right-5 text-dusty hover:text-bone transition-colors"
            >
              <MdClose size={20} />
            </button>

            <div className="mb-10">
              <span className="font-mono text-[11px] tracking-widest2 text-bone uppercase">Saibu Azeez</span>
              <p className="font-mono text-[10px] text-dusty mt-1">Full-Stack Developer</p>
            </div>

            <ul className="flex flex-col gap-6">
              {navLinks.map(({ _id, title, link, num }) => (
                <li key={_id}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span className="font-mono text-[10px] text-dusty">{num}</span>
                    <span className="font-serif text-xl text-bone/70 group-hover:text-bone transition-colors">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green" />
                <span className="font-mono text-[10px] text-dusty">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;