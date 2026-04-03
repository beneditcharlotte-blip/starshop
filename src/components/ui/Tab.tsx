import React from 'react';
import { motion } from 'motion/react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  layoutId?: string;
  /** Optional icon rendered above the label */
  icon?: React.ReactNode;
}

export function Tab({ label, isActive, onClick, layoutId = 'tab-underline', icon }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`pt-4 pb-4 text-sm tracking-[0.2em] uppercase transition-colors relative flex flex-col items-center gap-1 ${
        isActive ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]/40 hover:text-[#d4a5a5]'
      }`}
    >
      {icon}
      <span>{label}</span>
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a5a5]"
        />
      )}
    </button>
  );
}
