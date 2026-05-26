/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Marquee GSAP Infinite horizontal scroll
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Use GSAP xPercent scroll
    const animation = gsap.to(marquee, {
      xPercent: -50,
      ease: "none",
      duration: 35,
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeText = "BUILDING THE FUTURE • ".repeat(12);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-10 md:pb-14 w-screen overflow-hidden text-text-primary select-none"
    >
      {/* Background Mirrored Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/src/assets/images/head.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.6]"
        />
        {/* Shadow & Contrast Mask */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        {/* Top Fade in from preceding sections */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Infinite Marquee driven by GSAP */}
        <div className="w-full border-t border-b border-stroke/30 bg-black/30 py-4 sm:py-6 overflow-hidden mb-16 md:mb-20 select-none">
          <div className="flex whitespace-nowrap">
            <div
              ref={marqueeRef}
              className="inline-block text-4xl sm:text-6xl md:text-8xl font-display italic font-semibold tracking-tighter text-text-primary/10 select-none cursor-default"
            >
              {marqueeText}
            </div>
          </div>
        </div>

        {/* Call to action structure */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-24">
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold mb-3 inline-block">
            Get in touch
          </span>
          
          <h2 className="text-4xl md:text-6xl font-sans tracking-tight mb-8">
            Let's create <span className="font-display italic font-medium tracking-wide text-[#89AACC]">something together</span>
          </h2>

          {/* Mailto button with outline transition / glow */}
          <div className="flex justify-center">
            <a
              href="mailto:Sjosafatvillegas@gmail.com"
              className="group relative inline-flex items-center gap-3 text-sm md:text-base font-semibold text-text-primary bg-surface/80 border border-stroke rounded-full px-8 py-4 transition-all duration-300 hover:scale-[1.03] hover:border-transparent cursor-pointer"
            >
              {/* Highlight background on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1.5px] accent-gradient -z-10"
                    style={{ margin: '-1.5px' }} />
              <span className="absolute inset-0 rounded-full bg-surface group-hover:bg-bg transition-colors duration-300 -z-10" />

              <Mail size={16} className="text-[#89AACC] group-hover:scale-110 transition-transform duration-300" />
              <span>Sjosafatvillegas@gmail.com</span>
              <ArrowUpRight size={16} className="text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Footer Bar elements */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Pulsing state - Available */}
          <div className="flex items-center gap-2.5 font-mono select-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">
              Available for projects
            </span>
          </div>

          {/* Social Icons list */}
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/wardseverything"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors hover:scale-110 duration-200"
              aria-label="Twitter Profile"
            >
              <Twitter size={15} />
            </a>
            <a
              href="https://linkedin.com/in/wards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors hover:scale-110 duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/Wards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors hover:scale-110 duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>
          </div>

          {/* Copyright/Back to top */}
          <div className="text-right flex flex-col items-center sm:items-end gap-1 font-mono text-[10px] sm:text-xs text-muted select-none">
            <span>© 2026 Wards (Ken). All rights reserved.</span>
            <button
              id="back-to-top"
              onClick={handleScrollToTop}
              className="hover:text-text-primary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              Back to top <span>↑</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
