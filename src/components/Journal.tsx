/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNAL_ENTRIES } from '../data';
import { ChevronDown, BookOpen } from 'lucide-react';

export default function Journal() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleEntry = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="journal" className="relative bg-bg py-20 md:py-28 text-text-primary overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="/src/assets/images/recentbg.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

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
              View all ideas <BookOpen size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Accordion List */}
        <div id="journal-entries" className="flex flex-col gap-4 max-w-4xl mx-auto">
          {JOURNAL_ENTRIES.map((entry, idx) => {
            const isExpanded = expandedId === entry.id;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`rounded-[32px] border transition-all duration-500 select-none overflow-hidden ${
                  isExpanded
                    ? 'bg-surface border-[#89AACC]/40 shadow-[0_0_30px_-5px_rgba(137,170,204,0.2)]'
                    : 'bg-surface/30 border-stroke hover:bg-surface'
                }`}
              >
                {/* Clickable Pill Header */}
                <div
                  onClick={() => toggleEntry(entry.id)}
                  className="group flex flex-col sm:flex-row items-center gap-6 p-4 cursor-pointer"
                >
                  {/* Image Circle */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border transition-all duration-500 ${
                    isExpanded ? 'border-[#89AACC] ring-2 ring-[#89AACC]/30' : 'border-stroke'
                  }`}>
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
                      <h3 className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                        isExpanded ? 'text-[#89AACC]' : 'text-text-primary group-hover:text-amber-100'
                      }`}>
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
                      
                      {/* Rotating Arrow */}
                      <span className={`hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${
                        isExpanded
                          ? 'bg-[#89AACC] text-bg rotate-180'
                          : 'bg-stroke group-hover:bg-text-primary text-muted group-hover:text-bg'
                      }`}>
                        <ChevronDown size={14} />
                      </span>
                    </div>

                  </div>
                </div>

                {/* Expanded Media + Description */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 pt-2 border-t border-[#89AACC]/20 mx-4">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          {/* Media */}
                          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#89AACC]/20 shadow-lg shadow-black/20">
                            {entry.media.endsWith('.mp4') ? (
                              <video
                                src={entry.media}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-64 object-cover"
                              />
                            ) : (
                              <img
                                src={entry.media}
                                alt={entry.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-64 object-cover"
                              />
                            )}
                          </div>

                          {/* Description */}
                          <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <span className="text-[10px] text-[#89AACC] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#89AACC]/20 bg-[#89AACC]/5 inline-block w-fit">
                              Highlights
                            </span>
                            <p className="text-sm text-text-primary leading-relaxed">
                              {entry.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {entry.tags.map((tag) => (
                                <span key={tag} className="text-[10px] text-muted border border-stroke bg-bg/65 px-2.5 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All button */}
        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="journal-view-all-mobile"
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold border border-stroke bg-surface rounded-full py-3.5 px-6 w-full cursor-pointer"
          >
            <span>View all ideas</span>
            <BookOpen size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
