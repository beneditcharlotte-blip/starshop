import React from 'react';
import { motion } from 'motion/react';
import { zodiacSigns } from '../data/zodiacSigns';

interface ZodiacSelectorProps {
  selectedSign: string | null;
  onSelect: (sign: string) => void;
}

export function ZodiacSelector({ selectedSign, onSelect }: ZodiacSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {zodiacSigns.map((sign, index) => (
        <motion.button
          key={sign.name}
          onClick={() => onSelect(sign.name)}
          className={`
            relative p-6 border transition-all duration-300 group
            ${selectedSign === sign.name 
              ? 'border-[#d4a5a5] bg-[#d4a5a5]/10' 
              : 'border-[#d4a5a5]/20 hover:border-[#d4a5a5]/60 hover:bg-[#d4a5a5]/5'}
          `}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-2xl font-serif text-[#d4a5a5]">{sign.name.charAt(0)}</span>
            <span className={`text-lg font-serif tracking-wide ${selectedSign === sign.name ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]'}`}>
              {sign.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              {sign.date}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#d4a5a5]/80">
              {sign.element}
            </span>
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#d4a5a5] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#d4a5a5] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
      ))}
    </div>
  );
}
