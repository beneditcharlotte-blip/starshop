import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductList } from './ProductList';
import { zodiacSigns } from '../data/zodiacSigns';

export function ZodiacPage() {
  const [activeSign, setActiveSign] = useState(zodiacSigns[11]); // Default to Pisces

  return (
    <div className="min-h-screen bg-[#4A252C] text-[#f3e6e6] pt-20">
      
      {/* Zodiac Selector Tabs */}
      <div className="sticky top-20 z-40 bg-[#4A252C]/95 backdrop-blur border-b border-[#d4a5a5]/20 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start md:justify-center p-4 min-w-max space-x-6 px-8">
            {zodiacSigns.map((sign) => (
                <button
                    key={sign.name}
                    onClick={() => setActiveSign(sign)}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 relative pb-1
                        ${activeSign.name === sign.name ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]/60 hover:text-[#d4a5a5]'}
                    `}
                >
                    {sign.name}
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

      {/* Hero Section for Selected Sign */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-[#a6b8c5]">
        <AnimatePresence mode="wait">
            <motion.div 
                key={activeSign.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
                {/* Vertical Text - Left */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:block writing-vertical-lr rotate-180">
                    <span className="text-xs tracking-[0.4em] uppercase opacity-60">Astrophil and Stella</span>
                </div>

                {/* Vertical Text - Right */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block writing-vertical-lr">
                    <span className="text-xs tracking-[0.4em] uppercase opacity-60">Astrophil and Stella</span>
                </div>

                {/* Main Visual & Content */}
                <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                    {/* Background Graphic */}
                     <img 
                        src={activeSign.image} 
                        alt={`${activeSign.name} Illustration`} 
                        className="absolute w-full h-[120%] md:h-[140%] object-contain object-center opacity-80 mix-blend-screen pointer-events-none"
                     />

                     {/* Central Text Overlay */}
                     <div className="relative z-10 text-center flex flex-col items-center space-y-4 md:space-y-6 mt-12 md:mt-0">
                        {/* Top Curved Text (Simulated) */}
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="font-serif text-5xl md:text-8xl tracking-tight leading-none italic text-[#e0e0e0]"
                            style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                        >
                            faith of <br className="hidden md:block"/> {activeSign.name.toLowerCase()}
                        </motion.h2>

                        {/* Chinese Text */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center space-y-2"
                        >
                            <h3 className="text-3xl md:text-5xl font-light tracking-widest text-[#e0e0e0]">
                                {activeSign.cnName}
                            </h3>
                            <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] opacity-70">
                                <span>{activeSign.element}</span>
                                <span>•</span>
                                <span>{activeSign.date}</span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="max-w-md text-xs md:text-sm leading-relaxed text-[#a6b8c5]/80 mt-8 px-4"
                        >
                            {activeSign.description}
                            <br/><br/>
                            We continue to recommend crystals for {activeSign.name} soul.
                            Discover the ancient wisdom aligned with your stars.
                        </motion.p>
                     </div>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Crystal Recommendations */}
      <section className="container mx-auto px-4 py-24 space-y-12 bg-[#4A252C]">
        <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-serif text-[#d4a5a5] italic">
                Crystals for {activeSign.name}
            </h3>
            <p className="text-sm tracking-widest uppercase opacity-80">
                Enhance your {activeSign.element} energy
            </p>
        </div>
        
        <ProductList selectedSign={activeSign.name} />
      </section>

    </div>
  );
}
