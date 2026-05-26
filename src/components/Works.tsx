/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { ArrowRight } from 'lucide-react';

export default function SelectedWorks() {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="bg-bg py-20 md:py-28 text-text-primary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight mb-4 text-text-primary">
              Featured <span className="font-display italic font-medium tracking-wide text-[#89AACC]">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted leading-relaxed">
              A selection of projects I've worked on, from concept to launch. Developed with strict attention to interactive details and fluid user environments.
            </p>
          </div>

          {/* Desktop Right Button */}
          <button
            id="works-view-all-desktop"
            onClick={handleScrollToContact}
            className="group hidden md:inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border-2 border-stroke bg-surface rounded-full py-3.5 px-6 shrink-0 hover:scale-105 hover:border-transparent relative transition-all duration-300 overflow-visible cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] accent-gradient -z-10"
                  style={{ margin: '-1px' }} />
            <span className="absolute inset-0 rounded-full bg-surface group-hover:bg-bg transition-colors duration-300 -z-10" />

            <span className="flex items-center gap-2">
              View all work <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div id="bento-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => {
                if (project.link && project.link !== '#') {
                  if (project.link.startsWith('/')) {
                    navigate(project.link);
                  } else {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }
                }
              }}
              className={`${project.colSpan} group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px] flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-md select-none`}
            >
              {/* Card visual background */}
              <div className="absolute inset-0 overflow-hidden z-0">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                
                {/* Halftone graphic layer overlay */}
                <div className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply pointer-events-none" />

                {/* Subtle gradient shadow layer inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none" />
              </div>

              {/* Card Contents */}
              <div className="relative z-10 w-full transition-all duration-300 group-hover:translate-y-[-4px]">
                <span className="text-[10px] text-[#89AACC] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3 inline-block">
                  {project.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted mb-4 max-w-sm">
                  {project.subtitle}
                </p>

                {/* Tags list */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-muted border border-stroke bg-bg/65 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete Overlay Backing + Expandable Interactive Hover View Label */}
              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-300 ease-in-out z-20 flex items-center justify-center p-6 text-center">
                <div className="flex flex-col items-center max-w-xs">
                  <span className="text-[10px] text-[#89AACC] uppercase tracking-widest mb-2 font-bold select-none">
                    EXPLORE PROJECT
                  </span>
                  
                  {/* Floating Custom Pill with Animated Shift Border */}
                  <div className="p-[1.5px] rounded-full accent-gradient animate-gradient-shift shadow-xl mb-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-inner">
                      <span className="text-slate-900 font-semibold text-xs sm:text-sm whitespace-nowrap">
                        View — <span className="font-display italic text-amber-900 text-sm sm:text-base font-bold">{project.title}</span>
                      </span>
                      <ArrowRight size={13} className="text-slate-900" />
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed select-none">
                    Examine visual templates, components, performance profiles, and interactive code specs.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All button since grid is complete */}
        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="works-view-all-mobile"
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border border-stroke bg-surface rounded-full py-3.5 px-6 w-full cursor-pointer"
          >
            <span>View all work</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
