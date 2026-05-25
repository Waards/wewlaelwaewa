/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const duration = 2700; // total duration 2700ms

  useEffect(() => {
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate a clean counted integer up to 100
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        // Complete! Wait 400ms then call onComplete
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Rotate words every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
    >
      {/* Top Left: Portfolio label */}
      <div className="flex justify-start">
        <motion.div
          id="loading-label"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em]"
        >
          Portfolio label
        </motion.div>
      </div>

      {/* Center: Dynamic Changing Words */}
      <div className="flex items-center justify-center flex-grow">
        <div className="relative h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary text-center"
            >
              {WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Section: Counter and Glowing Progress Line */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-end items-baseline">
          <motion.div
            id="loading-counter"
            className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums tracking-tighter"
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            id="loading-progress-bar"
            className="accent-gradient h-full rounded-full transition-transform duration-75 origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 12px rgba(137, 170, 204, 0.5)',
              transformOrigin: 'left',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
