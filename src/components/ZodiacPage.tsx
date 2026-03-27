import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductList } from './ProductList';
import { zodiacSigns } from '../data/zodiacSigns';

export function ZodiacPage() {
  const [activeSign, setActiveSign] = useState(zodiacSigns[11]);

  return (
    <div className="min-h-screen bg-[#4A252C] text-[#f3e6e6] pt-20">

      {/* Sticky Tab Bar */}
      <div className="sticky top-20 z-40 bg-[#4A252C]/95 backdrop-blur border-b border-[#d4a5a5]/20 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start md:justify-center p-4 min-w-max space-x-6 px-8">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.name}
              onClick={() => setActiveSign(sign)}
              className={`text-xs uppercase tracking-widest transition-all duration-300 relative pb-1 flex flex-col items-center space-y-0.5
                ${activeSign.name === sign.name ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]/50 hover:text-[#d4a5a5]/80'}`}
            >
              <span className="text-lg">{sign.symbol}</span>
              <span>{sign.name}</span>
              {activeSign.name === sign.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d4a5a5]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSign.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={activeSign.image}
              alt={activeSign.name}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Vertical Labels */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:block" style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a5a5]/40">Astrophil and Stella</span>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a5a5]/40">Astrophil and Stella</span>
        </div>

        {/* Central Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSign.name + '-text'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-center flex flex-col items-center space-y-6 px-4 max-w-2xl"
          >
            <span className="text-6xl md:text-8xl">{activeSign.symbol}</span>

            <div className="space-y-2">
              <h2 className="font-serif text-5xl md:text-7xl italic text-white leading-none">
                {activeSign.name}
              </h2>
              <h3 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-[#d4a5a5]">
                {activeSign.cnName}
              </h3>
            </div>

            <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span>{activeSign.element}</span>
              <span>•</span>
              <span>{activeSign.date}</span>
              <span>•</span>
              <span>{activeSign.crystal}</span>
            </div>

            <p className="text-sm leading-relaxed text-white/60 max-w-md">
              {activeSign.description}
            </p>

            <div className="inline-flex items-center space-x-2 border border-[#d4a5a5]/40 px-6 py-2 text-[#d4a5a5] text-xs uppercase tracking-widest">
              <span>Sacred Crystal: {activeSign.crystal}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Crystal Recommendations */}
      <section className="container mx-auto px-4 py-24 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Curated for</p>
          <h3 className="font-serif text-3xl md:text-5xl text-[#d4a5a5] italic">
            {activeSign.name} {activeSign.symbol}
          </h3>
          <p className="text-sm tracking-widest uppercase opacity-50">
            Aligned with your {activeSign.element} energy
          </p>
        </div>

        <ProductList selectedSign={activeSign.name} />
      </section>
    </div>
  );
}
