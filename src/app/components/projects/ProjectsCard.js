'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { 
  FaGlobe, 
  FaRoute, 
  FaMapMarkedAlt, 
  FaShieldAlt, 
  FaCreditCard, 
  FaTimes, 
  FaExternalLinkAlt, 
  FaChevronRight, 
  FaInfoCircle, 
  FaStar,
  FaAward,
  FaPlay,
  FaUserLock,
  FaFilm,
  FaSearch,
  FaDatabase,
  FaShoppingCart,
  FaCogs,
  FaCoins,
  FaUsers,
  FaLock,
  FaChartLine,
  FaBed,
  FaCar,
  FaBuilding,
  FaImages
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const IconMap = {
  FaRoute: FaRoute,
  FaMapMarkedAlt: FaMapMarkedAlt,
  FaShieldAlt: FaShieldAlt,
  FaCreditCard: FaCreditCard,
  FaPlay: FaPlay,
  FaUserLock: FaUserLock,
  FaFilm: FaFilm,
  FaSearch: FaSearch,
  FaDatabase: FaDatabase,
  FaShoppingCart: FaShoppingCart,
  FaCogs: FaCogs,
  FaCoins: FaCoins,
  FaUsers: FaUsers,
  FaLock: FaLock,
  FaChartLine: FaChartLine,
  FaBed: FaBed,
  FaCar: FaCar,
  FaBuilding: FaBuilding,
  FaImages: FaImages
};

const ProjectsCard = ({ title, des, src, github, live, techStack = [], role, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
  const [hoveredValueIdx, setHoveredValueIdx] = useState(null);

  const primaryColor = details?.primaryColor || "#4f83cc";
  const secondaryColor = details?.secondaryColor || "#3b6fa6";
  const category = details?.category || "Case Study";

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div 
        onClick={() => details && setIsModalOpen(true)}
        className={`w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-all duration-500 ${details ? 'cursor-pointer transform hover:-translate-y-1' : ''}`}
      >
        
        {/* Screenshot with hover overlay */}
        <div className="w-full h-[200px] overflow-hidden rounded-lg relative">
          <Image
            className="w-full h-full object-cover group-hover:scale-105 duration-500"
            src={src}
            width={600}
            height={200}
            alt={title}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-designColor bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center transition-all duration-300 rounded-lg">
            <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 px-4 py-2 rounded-full shadow-lg">
              {details ? 'View Details' : 'View Project'}
            </span>
          </div>
        </div>

        <div className="w-full mt-5 flex flex-col gap-4">
          {/* Title + Links row */}
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-semibold tracking-wide">
              {title}
            </h3>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              {github ? (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                  title="GitHub Repository"
                >
                  <BsGithub />
                </Link>
              ) : (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-700 cursor-not-allowed" title="Private Repository">
                  <BsGithub />
                </span>
              )}
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                title="Live Demo"
              >
                <FaGlobe />
              </Link>
            </div>
          </div>

          {/* Tech stack badges */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-black bg-opacity-50 border border-gray-700 text-gray-400 font-medium hover:border-designColor hover:text-designColor transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-gray-400 leading-6 hover:text-gray-200 duration-300">
            {des}
          </p>

          {/* Role bullet if provided */}
          {role && (
            <p className="text-xs text-designColor font-medium border-l-2 border-designColor pl-3 italic">
              {role}
            </p>
          )}

          {details && (
            <div className="mt-2 text-right">
              <span className="text-xs text-designColor font-medium inline-flex items-center gap-1 hover:underline">
                Explore case study <FaChevronRight className="text-[10px]" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* High-Fidelity Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && details && (
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-4xl w-full bg-[#1c1e22] border border-gray-800/80 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col my-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Accent Line (Brand Gradient) */}
              <div 
                className="h-1.5 w-full"
                style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
              ></div>

              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                onMouseEnter={() => setIsCloseHovered(true)}
                onMouseLeave={() => setIsCloseHovered(false)}
                style={{ borderColor: isCloseHovered ? secondaryColor : 'rgba(31, 41, 55, 0.8)' }}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black text-gray-400 hover:text-white rounded-full p-2.5 transition-all z-20 duration-200 border"
                title="Close"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-8 custom-scrollbar">
                {/* Hero Banner Section */}
                <div className="relative flex flex-col md:flex-row gap-6 items-center border-b border-gray-800/60 pb-6">
                  <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-800 relative bg-black/40">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span 
                        className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full border bg-gradient-to-r"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${primaryColor}26, ${secondaryColor}26)`,
                          color: secondaryColor,
                          borderColor: `${secondaryColor}4d`
                        }}
                      >
                        {category}
                      </span>
                      <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-gray-800 text-gray-400">
                        Case Study
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-titleFont text-white">
                      {details.companyName || title}
                    </h2>
                    <p className="text-sm text-designColor font-semibold tracking-wide">
                      {title}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      Built for modern web operations and absolute reliability.
                    </p>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column (Main Info & Key Features) */}
                  <div className="lg:col-span-2 flex flex-col gap-8 text-left">
                    {/* About Section */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-bold font-titleFont text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                        <FaInfoCircle style={{ color: secondaryColor }} /> Project Overview
                      </h3>
                      <p className="text-sm text-gray-400 leading-7">
                        {details.aboutCompany}
                      </p>
                    </div>

                    {/* Key Features Grid */}
                    {details.features && details.features.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold font-titleFont text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                          <FaAward style={{ color: primaryColor }} /> Key Platform Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {details.features.map((feature, idx) => {
                            const IconComponent = IconMap[feature.icon] || FaRoute;
                            const isCardHovered = hoveredFeatureIdx === idx;
                            return (
                              <div 
                                key={idx} 
                                onMouseEnter={() => setHoveredFeatureIdx(idx)}
                                onMouseLeave={() => setHoveredFeatureIdx(null)}
                                style={{ borderColor: isCardHovered ? `${secondaryColor}66` : 'rgba(31, 41, 55, 0.6)' }}
                                className="bg-[#1f2226]/50 border rounded-xl p-4 flex flex-col gap-2 hover:bg-[#1f2226]/80 transition-all duration-300 group"
                              >
                                <div 
                                  className="w-10 h-10 rounded-lg flex items-center justify-center border group-hover:scale-105 transition-transform duration-300"
                                  style={{
                                    backgroundImage: `linear-gradient(to bottom right, ${primaryColor}1a, ${secondaryColor}1a)`,
                                    borderColor: `${secondaryColor}33`,
                                    color: secondaryColor
                                  }}
                                >
                                  <IconComponent className="text-base" />
                                </div>
                                <h4 className="text-sm font-bold text-white tracking-wide mt-1">
                                  {feature.title}
                                </h4>
                                <p className="text-xs text-gray-400 leading-5">
                                  {feature.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Core Values Section */}
                    {details.coreValues && details.coreValues.length > 0 && (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold font-titleFont text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                          <FaStar style={{ color: secondaryColor }} /> Core Brand Values
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {details.coreValues.map((value, idx) => {
                            const isValHovered = hoveredValueIdx === idx;
                            return (
                              <div 
                                key={idx}
                                onMouseEnter={() => setHoveredValueIdx(idx)}
                                onMouseLeave={() => setHoveredValueIdx(null)}
                                style={{ borderColor: isValHovered ? `${primaryColor}4d` : 'rgba(31, 41, 55, 0.8)' }}
                                className="px-3 py-2 rounded-lg bg-black/40 border flex items-center gap-3 text-xs max-w-full transition-colors duration-200"
                                title={value.desc}
                              >
                                <span 
                                  className="w-6 h-6 rounded-md text-white font-black flex items-center justify-center shrink-0 shadow"
                                  style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                                >
                                  {value.symbol}
                                </span>
                                <div className="text-left">
                                  <span className="font-semibold text-gray-200 block">{value.name}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Sidebar Stats, Role & Tech Stack) */}
                  <div className="flex flex-col gap-6 text-left">
                    {/* Key Stats Card */}
                    {details.stats && details.stats.length > 0 && (
                      <div className="bg-[#1f2226] border border-gray-800 rounded-xl p-5 flex flex-col gap-4 shadow-inner">
                        <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider border-b border-gray-800 pb-2">
                          Operations Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {details.stats.map((stat, idx) => (
                            <div 
                              key={idx} 
                              className="flex flex-col gap-1 border-l-2 pl-2"
                              style={{ borderColor: secondaryColor }}
                            >
                              <span className="text-lg font-extrabold text-white font-titleFont">
                                {stat.value}
                              </span>
                              <span className="text-[10px] text-gray-500 font-bold leading-none">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Developer Contributions */}
                    {details.impact && details.impact.length > 0 && (
                      <div className="bg-black/30 border border-gray-800/60 rounded-xl p-5 flex flex-col gap-4">
                        <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider border-b border-gray-800 pb-2">
                          Engineering Impact
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {details.impact.map((imp, idx) => (
                            <li key={idx} className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                              <span style={{ color: secondaryColor }} className="font-black shrink-0 mt-0.5">•</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Meta Box (Role, Stack, Buttons) */}
                    <div className="flex flex-col gap-4 bg-gradient-to-br from-bodyColor to-[#202327] border border-gray-800 rounded-xl p-5 shadow-shadowOne">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">My Role</span>
                        <span className="text-xs text-designColor font-semibold leading-relaxed border-l-2 border-designColor pl-2 italic">
                          {role}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Technologies Used</span>
                        <div className="flex flex-wrap gap-1.5">
                          {techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[10px] font-medium bg-black/50 border border-gray-800 text-gray-400 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 mt-2 pt-2 border-t border-gray-800">
                        <Link
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                          className="flex-1 hover:opacity-90 text-white text-xs font-bold py-2.5 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 shadow"
                        >
                          Visit Live Portal <FaExternalLinkAlt className="text-[9px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsCard;