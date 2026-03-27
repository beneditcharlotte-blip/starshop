import React from 'react';

interface ZodiacSymbolProps {
  sign: string;
  size?: number;
  color?: string;
  className?: string;
}

// Hand-drawn SVG paths for all 12 zodiac symbols
const paths: Record<string, React.ReactNode> = {
  Aries: (
    // Two curved horns meeting at center
    <path
      d="M12 22 C12 14, 4 10, 4 4 M12 22 C12 14, 20 10, 20 4 M4 4 C4 1, 7 1, 8 4 M20 4 C20 1, 17 1, 16 4"
      fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  ),
  Taurus: (
    // Circle with horns on top
    <>
      <circle cx="12" cy="15" r="7" fill="none" strokeWidth="1.5" />
      <path d="M5 15 C5 9, 8 6, 12 6 C16 6, 19 9, 19 15" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 8 C7 4, 4 3, 4 5" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 8 C17 4, 20 3, 20 5" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Gemini: (
    // Two vertical lines connected by top and bottom bars
    <>
      <line x1="8" y1="4" x2="8" y2="20" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="4" x2="16" y2="20" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 4 Q12 7 19 4" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 20 Q12 17 19 20" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Cancer: (
    // Two opposing spirals (yin-yang like)
    <>
      <path d="M12 12 C12 8, 7 6, 5 9 C3 12, 5 16, 9 16 C13 16, 16 13, 16 10" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12 C12 16, 17 18, 19 15 C21 12, 19 8, 15 8 C11 8, 8 11, 8 14" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Leo: (
    // Circle with tail curling outward
    <>
      <circle cx="10" cy="15" r="5" fill="none" strokeWidth="1.5" />
      <path d="M15 15 C18 15, 20 13, 20 10 C20 7, 18 5, 15 5 C13 5, 12 6, 12 8" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Virgo: (
    // M shape with a loop on the right leg
    <>
      <path d="M4 6 L4 16 M4 6 C4 6, 8 14, 12 6 C16 14, 20 6, 20 6" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 6 L20 16 C20 19, 16 20, 14 18" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Libra: (
    // Horizontal line with a bump on top, long baseline
    <>
      <line x1="4" y1="18" x2="20" y2="18" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="14" x2="20" y2="14" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14 C8 10, 12 8, 16 14" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Scorpio: (
    // M shape with arrow tail
    <>
      <path d="M4 6 L4 16 M4 6 C4 6, 8 14, 12 6 C16 14, 20 6, 20 6" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 6 L20 16 C20 18, 22 18, 22 18" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18 L23 15 M20 18 L23 21" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Sagittarius: (
    // Arrow pointing up-right with cross
    <>
      <line x1="4" y1="20" x2="20" y2="4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 4 L20 4 L20 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="6" y1="12" x2="18" y2="12" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Capricorn: (
    // V shape with a loop and fish tail
    <>
      <path d="M4 6 C4 6, 8 14, 12 10 C14 8, 14 6, 12 6 C10 6, 10 8, 12 10 C14 12, 18 14, 20 12" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12 C22 10, 22 16, 20 18 C18 20, 16 18, 18 16" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Aquarius: (
    // Two wavy lines
    <>
      <path d="M4 10 C6 8, 8 12, 10 10 C12 8, 14 12, 16 10 C18 8, 20 12, 22 10" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 16 C6 14, 8 18, 10 16 C12 14, 14 18, 16 16 C18 14, 20 18, 22 16" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Pisces: (
    // Two arcs facing opposite directions connected by a line
    <>
      <path d="M12 4 C8 4, 4 8, 4 12 C4 16, 8 20, 12 20" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4 C16 4, 20 8, 20 12 C20 16, 16 20, 12 20" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export function ZodiacSymbol({ sign, size = 24, color = 'currentColor', className = '' }: ZodiacSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      fill="none"
      className={className}
      aria-label={sign}
    >
      {paths[sign] ?? null}
    </svg>
  );
}
