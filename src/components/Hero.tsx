import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/Image 9.png';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1080';

export function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#4A252C] flex flex-col md:flex-row overflow-hidden">

      {/* Left Side - Typography & Graphic */}
      <div className="w-full md:w-1/2 h-full relative flex flex-col justify-between p-8 pt-24 md:p-16 md:pt-28 z-10">

        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-0"
        >
          <p className="text-[#d4a5a5] text-xs tracking-[0.2em] font-sans uppercase leading-loose">
            ASTROPHIL <br />
            AND STELLA
          </p>
        </motion.div>

        {/* Center Graphic (Star + Curve) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewBox="0 0 400 400"
            className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] text-[#d4a5a5] opacity-50"
          >
            <path d="M100 50 L105 85 L140 90 L105 95 L100 130 L95 95 L60 90 L95 85 Z" fill="currentColor" />
            <path d="M100 90 C 250 50, 400 150, 100 400" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </motion.svg>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 md:mb-0 relative z-20"
        >
          <h1 className="font-serif text-[#d4a5a5] leading-[0.85] mb-8">
            <span className="block text-6xl md:text-[7vw] font-light">Memory</span>
            <span className="block text-6xl md:text-[7vw] font-light md:-ml-2">of Stars</span>
          </h1>

          <a
            href="#shop"
            className="inline-block px-8 py-3 border border-[#d4a5a5] text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-all duration-500 uppercase tracking-widest text-xs bg-transparent"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>

      {/* Right Side - Full Bleed Image */}
      <div className="w-full md:w-1/2 h-full bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Mythical Illustration of Birds and Leopards"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_HERO;
            }}
          />
        </motion.div>
      </div>

    </div>
  );
}
