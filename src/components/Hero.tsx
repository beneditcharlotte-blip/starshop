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
            initial={{ opacity: 0, rotate: -8 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewBox="0 0 400 400"
            className="w-[70%] h-[70%] md:w-[65%] md:h-[65%] text-[#d4a5a5] opacity-25"
          >
            {/* Outer ring */}
            <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.6" fill="none" />
            {/* Middle dashed ring */}
            <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="3 7" />
            {/* Inner ring */}
            <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.4" fill="none" />
            {/* Cardinal cross */}
            <line x1="200" y1="35" x2="200" y2="365" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
            <line x1="35" y1="200" x2="365" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
            {/* Diagonal cross */}
            <line x1="83" y1="83" x2="317" y2="317" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
            <line x1="317" y1="83" x2="83" y2="317" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
            {/* 8 tick marks on outer ring */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 200 + 158 * Math.sin(rad);
              const y1 = 200 - 158 * Math.cos(rad);
              const x2 = 200 + 172 * Math.sin(rad);
              const y2 = 200 - 172 * Math.cos(rad);
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
            })}
            {/* 8 dots on middle ring */}
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(angle => {
              const rad = (angle * Math.PI) / 180;
              return (
                <circle
                  key={angle}
                  cx={200 + 120 * Math.sin(rad)}
                  cy={200 - 120 * Math.cos(rad)}
                  r="1.5"
                  fill="currentColor"
                />
              );
            })}
            {/* Center star (8-point) */}
            <path
              d="M200 182 L203 196 L217 196 L206 205 L210 219 L200 210 L190 219 L194 205 L183 196 L197 196 Z"
              fill="currentColor"
              opacity="0.9"
            />
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
