/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { STATS } from '../data';

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-24 md:py-32 border-t border-stroke select-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-3 group"
            >
              {/* Massive Numeric Indicator */}
              <div className="flex items-baseline">
                <span className="text-6xl md:text-7xl lg:text-[100px] font-display italic font-semibold leading-none tracking-tighter text-[#89AACC] group-hover:text-text-primary transition-colors duration-500">
                  {stat.number}
                </span>
              </div>

              {/* Dividing visual indicator accent */}
              <div className="w-12 h-0.5 bg-stroke group-hover:w-20 group-hover:bg-[#4E85BF] transition-all duration-500" />

              {/* Title & Description specs */}
              <div className="mt-2">
                <h3 className="text-base sm:text-lg font-semibold text-text-primary tracking-tight mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
