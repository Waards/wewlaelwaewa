/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dribbble, X, Maximize2, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPLORATIONS } from '../data';
import { ExplorationItem } from '../types';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  const [activeItem, setActiveItem] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !contentRef.current) return;

      // 1. Pin the center title block through the entire scroll duration of the 300vh segment
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // 2. Parallax left column (moving upwards at moderate speed)
      if (leftColRef.current) {
        gsap.fromTo(leftColRef.current,
          { y: "20vh" },
          {
            y: "-45vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            }
          }
        );
      }

      // 3. Parallax right column (moving upwards at faster speed with larger offset)
      if (rightColRef.current) {
        gsap.fromTo(rightColRef.current,
          { y: "45vh" },
          {
            y: "-75vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Keyboard accessibility for Lightbox (escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Separate data into left and right columns (cards 1,3,5 left; cards 2,4,6 right)
  const leftColumnItems = EXPLORATIONS.filter((_, i) => i % 2 === 0);
  const rightColumnItems = EXPLORATIONS.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[250vh] md:min-h-[300vh] bg-bg overflow-clip select-none"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src="/src/assets/images/vistualply.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={contentRef}
        className="absolute inset-0 h-screen w-full flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="max-w-md mx-auto px-6 text-center select-none flex flex-col items-center pointer-events-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={12} className="text-[#89AACC]" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Explorations
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight mb-4 text-text-primary">
            Visual <span className="font-display italic font-medium tracking-wide text-[#89AACC]">playground</span>
          </h2>

          <p className="text-xs md:text-sm text-muted mb-6 leading-relaxed max-w-xs">
            A dynamic canvas of spatial experiments, creative coding shaders, and raw WebGL ideas from late-night logs.
          </p>

          {/* Dribbble CTA Button */}
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold border border-stroke bg-surface px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] accent-gradient -z-10" />
            <span className="absolute inset-0 rounded-full bg-surface group-hover:bg-bg transition-colors duration-300 -z-10" />
            <Dribbble size={12} className="text-muted group-hover:text-text-primary transition-colors" />
            <span className="text-muted group-hover:text-text-primary transition-colors">See more on Dribbble</span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 pt-[10vh] pb-[20vh] pointer-events-none">
        <div className="grid grid-cols-2 gap-8 md:gap-32 w-full">
          
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-12 md:gap-24 items-start pointer-events-auto">
            {leftColumnItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative w-full aspect-square max-w-[280px] md:max-w-[320px] bg-surface rounded-2xl md:rounded-3xl border border-stroke overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${item.rotation} hover:rotate-0 hover:scale-[1.03] active:scale-95`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-text-primary border border-white/20">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-12 md:gap-24 items-end pointer-events-auto">
            {rightColumnItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative w-full aspect-square max-w-[280px] md:max-w-[320px] bg-surface rounded-2xl md:rounded-3xl border border-stroke overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${item.rotation} hover:rotate-0 hover:scale-[1.03] active:scale-95`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-text-primary border border-white/20">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal (Framer Motion AnimatePresence overlay) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-6 md:p-12 cursor-pointer select-none"
            onClick={() => setActiveItem(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-3xl w-full bg-surface border border-stroke rounded-3xl p-4 sm:p-5 cursor-default flex flex-col md:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top corner */}
              <button
                id="lightbox-close"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-muted hover:text-text-primary w-8 h-8 rounded-full bg-stroke/50 flex items-center justify-center transition-all cursor-pointer z-50 hover:scale-105"
              >
                <X size={16} />
              </button>

              {/* Picture view */}
              <div className="w-full md:w-3/5 rounded-2xl overflow-hidden aspect-square self-center border border-stroke">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover duration-300"
                />
              </div>

              {/* Text view specs */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-2">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary mt-2 mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    A conceptual design exploring depth values, subtle contrast changes, and high-frequency layout codes. Crafted specifically for dark ambient view ports.
                  </p>
                </div>

                <div className="border-t border-stroke pt-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px] font-mono select-none">
                    <span className="text-muted">Aesthetic Code</span>
                    <span className="text-text-primary uppercase">C-Slate #040404</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono select-none">
                    <span className="text-muted">Type Format</span>
                    <span className="text-text-primary">100% Vector Canvas</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono select-none">
                    <span className="text-muted">Software Tools</span>
                    <span className="text-text-primary">GLSL / Figma</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
