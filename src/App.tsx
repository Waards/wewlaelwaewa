/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/Works';
import Journal from './components/Journal';
import Explorations from './components/Explorations';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id="portfolio-app" className="bg-bg text-text-primary min-h-screen relative overflow-x-hidden font-body selection:bg-white/10 selection:text-white">
      {/* Loading sequence overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div key="loader" className="contents">
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Landing Page Sections */}
      {!isLoading && (
        <div id="page-content" className="w-full relative">
          {/* Navigation Pill */}
          <Navbar />

          {/* Intro View */}
          <Hero />

          {/* Bento Grid */}
          <SelectedWorks />

          {/* Thoughts pills */}
          <Journal />

          {/* Parallax elements */}
          <Explorations />

          {/* Experience stats */}
          <Stats />

          {/* Mirroring video contacts */}
          <Footer />
        </div>
      )}
    </div>
  );
}
