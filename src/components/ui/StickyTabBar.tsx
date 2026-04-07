import React from 'react';

interface StickyTabBarProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function StickyTabBar({ children, scrollable }: StickyTabBarProps) {
  return (
    <div
      className={`sticky top-20 z-40 bg-[#4A252C]/95 backdrop-blur border-b border-[#d4a5a5]/20${scrollable ? ' overflow-x-auto no-scrollbar' : ''}`}
      style={scrollable ? { maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' } : undefined}
    >
      {children}
    </div>
  );
}
