import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/hero.jpg';

export function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#4A252C] overflow-hidden">

      {/* Image — full bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 md:left-1/2 bg-black">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={heroImage}
          alt="Mythical Illustration of Birds and Leopards"
          className="w-full h-full object-cover object-right"
        />
        {/* Overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-[#4A252C]/75 md:hidden" />
      </div>

      {/* Left Side — Typography & Graphic */}
      <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-between p-8 pt-24 md:p-16 md:pt-28">

        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-0"
        >
          <p className="text-[#d4a5a5] text-xs tracking-[0.2em] font-sans uppercase leading-loose">
            Handcrafted Crystal Jewelry<br />
            Aligned with the Stars
          </p>
        </motion.div>

        {/* Center Graphic — Celestial Circle */}
        <div className="absolute top-1/2 left-0 md:left-0 w-full md:w-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
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

        {/* Bottom — Heading & CTA */}
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
            href="#shop-page"
            className="inline-block px-8 py-3 border border-[#d4a5a5] text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-all duration-500 uppercase tracking-widest text-xs bg-transparent"
          >
            Explore Collection
          </a>
          <p className="text-[10px] tracking-[0.15em] text-[#d4a5a5]/60 uppercase mt-6">
            1,200+ Customers · 4.9★ Reviews · 30-Day Returns · Free Shipping $55+
          </p>
        </motion.div>
      </div>

    </div>
  );
}
