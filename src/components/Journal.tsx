/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { JOURNAL_ENTRIES } from '../data';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Journal() {
  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journal" className="bg-bg py-20 md:py-28 text-text-primary">
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
                Ideas & Logic
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight mb-4 text-text-primary">
              Recent <span className="font-display italic font-medium tracking-wide text-[#89AACC]">thoughts</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Explorations of human ergonomics, spatial web apps, styling formulas, and clean development frameworks.
            </p>
          </div>

          {/* Desktop Right Button */}
          <button
            id="journal-view-all-desktop"
            onClick={handleScrollToContact}
            className="group hidden md:inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border-2 border-stroke bg-surface rounded-full py-3.5 px-6 shrink-0 hover:scale-105 hover:border-transparent relative transition-all duration-300 overflow-visible cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] accent-gradient -z-10"
                  style={{ margin: '-1px' }} />
            <span className="absolute inset-0 rounded-full bg-surface group-hover:bg-bg transition-colors duration-300 -z-10" />

            <span className="flex items-center gap-2">
              View all ideas <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Horizontal Pills list */}
        <div id="journal-entries" className="flex flex-col gap-4 max-w-4xl mx-auto">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 rounded-[32px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 cursor-pointer select-none"
            >
              {/* Image Circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-stroke">
                <img
                  src={entry.image}
                  alt={entry.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Main content body inside pill */}
              <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4 w-full px-2 sm:px-4">
                
                <div className="flex flex-col gap-1.5 text-center sm:text-left">
                  {/* Category Stamp */}
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-[9px] text-[#89AACC] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {entry.tags[0]}
                    </span>
                    <span className="text-[10px] text-muted font-mono">{entry.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-amber-100 transition-colors">
                    {entry.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-muted max-w-[480px] line-clamp-1 sm:line-clamp-2 leading-relaxed">
                    {entry.excerpt}
                  </p>
                </div>

                {/* Right Metadata */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t border-stroke/30 pt-3 md:pt-0 md:border-none shrink-0 gap-1.5 font-mono select-none">
                  <span className="text-[9px] text-[#4E85BF] font-semibold tracking-widest uppercase flex items-center gap-1">
                    {entry.readTime && <><BookOpen size={10} /> {entry.readTime}</>}
                  </span>
                  
                  {/* Custom Arrow on Hover */}
                  <span className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-stroke group-hover:bg-text-primary text-muted group-hover:text-bg transition-all duration-300 transform group-hover:translate-x-1.5">
                    <ArrowRight size={14} />
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All button since layout calls for it */}
        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="journal-view-all-mobile"
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border border-stroke bg-surface rounded-full py-3.5 px-6 w-full cursor-pointer"
          >
            <span>View all ideas</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
