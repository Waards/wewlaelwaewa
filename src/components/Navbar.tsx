/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Simple active link detection based on section scroll positions
      const sections = ['hero', 'work', 'journal', 'explorations', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string, name: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none"
    >
      <div
        id="navbar-inner"
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 pointer-events-auto ${
          isScrolled ? 'shadow-lg shadow-black/40 scale-100' : 'scale-100'
        }`}
      >
        {/* 1. Logo */}
        <button
          id="navbar-logo"
          onClick={() => handleScrollTo('hero', 'home')}
          className="group relative w-9 h-9 rounded-full flex items-center justify-center p-[1px] overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Default and Reverse Gradient Backing */}
          <span className="absolute inset-0 accent-gradient transition-transform duration-500 ease-in-out group-hover:rotate-180" />
          <span className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary font-bold tracking-tight">
              WK
            </span>
          </span>
        </button>

        {/* 2. Divider (hidden on mobile) */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* 3. Nav Links */}
        <div id="navbar-links" className="flex items-center gap-1 sm:gap-2">
          <button
            id="nav-link-home"
            onClick={() => handleScrollTo('hero', 'home')}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-colors cursor-pointer ${
              activeSection === 'hero'
                ? 'text-text-primary bg-stroke/50'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Home
          </button>
          
          <button
            id="nav-link-work"
            onClick={() => handleScrollTo('work', 'work')}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-colors cursor-pointer ${
              activeSection === 'work'
                ? 'text-text-primary bg-stroke/50'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Work
          </button>

          <button
            id="nav-link-resume"
            onClick={() => handleScrollTo('stats', 'stats')}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-colors cursor-pointer ${
              activeSection === 'stats'
                ? 'text-text-primary bg-stroke/50'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Resume
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-2" />

        {/* 5. "Say hi" button */}
        <button
          id="nav-say-hi"
          onClick={() => handleScrollTo('contact', 'contact')}
          className="group relative flex items-center justify-center text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-text-primary transition-all duration-300 overflow-visible cursor-pointer"
        >
          {/* Glowing Animated Gradient Border Container */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1.5px] accent-gradient -z-10"
                style={{ margin: '-1.5px' }} />
          
          <span className="absolute inset-0 rounded-full bg-surface group-hover:bg-bg transition-colors duration-300 -z-10" />

          <span className="flex items-center gap-1">
            Say hi <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </span>
        </button>
      </div>
    </nav>
  );
}
