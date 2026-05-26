/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.log("HLS video autoplay blocked:", err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Safari support
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(err => console.log("Native video autoplay blocked:", err));
      });
    }
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo('.name-reveal', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo('.blur-in', 
        { opacity: 0, filter: 'blur(10px)', y: 20 }, 
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 }, 
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-x-0 inset-y-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.4]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 select-none max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="overflow-hidden mb-6">
          <p className="blur-in text-xs text-muted uppercase tracking-[0.34em] font-semibold">
            SILANG, CAVITE • PH
          </p>
        </div>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-[110px] font-display italic leading-[0.85] tracking-tight text-text-primary mb-6">
          Wards <span className="not-italic text-[#89AACC]">(Ken)</span>
        </h1>

        {/* Role line */}
        <p className="blur-in text-lg md:text-2xl text-text-primary/95 font-body tracking-normal mb-6">
          full stack developer and <span className="font-display italic text-[#89AACC]">automation enthusiast</span>
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12 leading-relaxed">
          Building intelligent systems at the intersection of web development, AI integration, and creative UI.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* See Works */}
          <button
            id="hero-see-works"
            onClick={() => handleScrollToSection('work')}
            className="group relative rounded-full text-sm font-semibold px-7 py-3.5 hover:scale-105 transition-all duration-300 cursor-pointer text-bg bg-text-primary"
          >
            {/* Hover border mask backing */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1.5px] accent-gradient -z-10"
                  style={{ margin: '-1.5px' }} />
            <span className="absolute inset-0 rounded-full group-hover:bg-bg transition-colors duration-300 -z-10" />
            
            <span className="group-hover:text-text-primary transition-colors duration-300 flex items-center gap-1.5">
              See Works <span className="text-[10px]">↓</span>
            </span>
          </button>

          {/* Reach out */}
          <button
            id="hero-reach-out"
            onClick={() => handleScrollToSection('contact')}
            className="group relative rounded-full text-sm font-semibold px-7 py-3.5 hover:scale-105 transition-all duration-300 border-2 border-stroke bg-bg hover:border-transparent text-text-primary cursor-pointer"
          >
            {/* Hover border backing */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1.5px] accent-gradient -z-10"
                  style={{ margin: '-1.5px' }} />
            <span className="absolute inset-0 rounded-full group-hover:bg-bg transition-colors duration-300 -z-10" />

            <span>Reach out...</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none z-10 pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium opacity-80">
          SCROLL
        </span>
        <div className="relative w-[1px] h-10 bg-stroke/50 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary animate-scroll-down rounded-full accent-gradient" />
        </div>
      </div>
    </section>
  );
}
