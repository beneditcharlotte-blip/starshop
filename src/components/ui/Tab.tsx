import React from 'react';
import { motion } from 'motion/react';

interface TabProps {
  label: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  layoutId?: string;
  className?: string;
}

export function Tab({ label, isActive, onClick, layoutId = 'tab-underline', className }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`pb-4 text-sm md:text-base tracking-[0.2em] uppercase transition-colors relative ${
        isActive ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]/40 hover:text-[#d4a5a5]'
      } ${className ?? ''}`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a5a5]"
        />
      )}
    </button>
  );
}
