'use client'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const roles = ["Full-Stack Developer.", "Next.js Specialist.", "React Engineer.", "Problem Solver."];

const Banner = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const full = roles[roleIdx];
    if (typing) {
      if (displayed.length < full.length) {
        timerRef.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
      } else {
        timerRef.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Main Hero */}
      <div className="flex-1 flex flex-col justify-center pt-24 pb-12 max-w-screen-xl mx-auto px-6 w-full">
        {/* Side label */}
        <div className="flex items-start gap-16">
          {/* Left label column */}
          <div className="hidden lgl:flex flex-col gap-2 pt-4 min-w-[140px]">
            <span className="font-mono text-[10px] text-dusty tracking-widest uppercase">Portfolio /</span>
            <span className="font-mono text-[10px] text-dusty tracking-widest">2026</span>
            <div className="mt-6">
              <span className="font-mono text-[10px] text-dusty tracking-widest uppercase">Lagos, NG</span>
            </div>
          </div>

          {/* Hero text */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] tracking-widest text-dusty uppercase mb-6"
            >
              Fullstack Engineer ·
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[clamp(3rem,10vw,8rem)] leading-none text-bone"
            >
              Saibu
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif italic text-[clamp(3rem,10vw,8rem)] leading-none text-bone/60"
            >
              Azeez.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6"
            >
              <span className="font-mono text-[13px] text-dustyLight">
                {displayed}<span className="animate-blink">|</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom divider row */}
      <div className="w-full border-t border-inkBorder" />

      {/* Below-fold info row */}
      <div className="max-w-screen-xl mx-auto px-6 w-full py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {/* Currently */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="md:border-r border-inkBorder pr-0 md:pr-10"
        >
          <p className="font-mono text-[10px] text-dusty uppercase tracking-widest mb-3">Currently</p>
          <p className="font-serif text-lg text-bone">Freelance Full-Stack Dev</p>
          <p className="font-mono text-[11px] text-dusty mt-1">Remote · open to opportunities</p>
        </motion.div>

        {/* About snippet */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="md:col-span-1 md:px-10 md:border-r border-inkBorder"
        >
          <p className="font-sans text-[14px] text-dustyLight leading-7 max-w-md">
            I build fast, scalable web applications — from e-commerce platforms to AI-powered dashboards.
            5+ years of experience, AltSchool Africa graduate.{" "}
            <span className="text-bone font-medium">5.00 GPA.</span>
          </p>
        </motion.div>

        {/* CTA + socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="md:pl-10 flex flex-col justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <Link
              to="projects"
              spy smooth offset={-70} duration={600}
              className="font-mono text-[11px] tracking-widest uppercase text-ink bg-bone px-5 py-2.5 hover:bg-bone/80 transition-colors cursor-pointer"
            >
              View Work
            </Link>
            <Link
              to="contact"
              spy smooth offset={-70} duration={600}
              className="font-mono text-[11px] tracking-widest uppercase text-dusty border border-inkBorder px-5 py-2.5 hover:border-bone/40 hover:text-bone transition-colors cursor-pointer"
            >
              Hire Me
            </Link>
          </div>

          <div className="flex gap-5">
            <NextLink href="https://github.com/Arisekola177/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] text-dusty hover:text-bone transition-colors uppercase tracking-widest hover-line">
              Github
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/azeez-saibu-43b554190/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] text-dusty hover:text-bone transition-colors uppercase tracking-widest hover-line">
              LinkedIn
            </NextLink>
            <NextLink href="https://twitter.com/Harysekola" target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] text-dusty hover:text-bone transition-colors uppercase tracking-widest hover-line">
              Twitter
            </NextLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;