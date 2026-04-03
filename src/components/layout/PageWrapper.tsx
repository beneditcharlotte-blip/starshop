import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function PageWrapper({ children, className, id }: PageWrapperProps) {
  return (
    <div id={id} className={`min-h-screen bg-[#4A252C] text-[#f3e6e6] pt-20 ${className ?? ''}`}>
      {children}
    </div>
  );
}
