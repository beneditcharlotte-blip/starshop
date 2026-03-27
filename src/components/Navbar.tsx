import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView?: 'home' | 'zodiac' | 'story' | 'moon-phase' | 'protection' | 'shop' | 'checkout';
}

const navLinks = [
  { label: 'Home', href: '#', view: 'home' },
  { label: 'Shop', href: '#shop-page', view: 'shop' },
  { label: 'Zodiac', href: '#zodiac-page', view: 'zodiac' },
  { label: 'Story', href: '#story-page', view: 'story' },
  { label: 'Moon Phase', href: '#moon-phase', view: 'moon-phase' },
  { label: 'Protection', href: '#protection-amulets', view: 'protection' },
] as const;

export function Navbar({ currentView = 'home' }: NavbarProps) {
  const { items, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4A252C]/90 backdrop-blur-md border-b border-[#d4a5a5]/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6 text-sm tracking-widest uppercase">
            {navLinks.map(link => (
              <a
                key={link.view}
                href={link.href}
                className={`hover:text-[#d4a5a5] transition-colors ${currentView === link.view ? 'text-[#d4a5a5]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-serif italic text-[#d4a5a5] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            Astrophil and Stella
          </a>

          {/* Right icons */}
          <div className="flex items-center space-x-6">
            <button className="text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors">
              <Search size={20} />
            </button>
            <button
              className="text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors relative"
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#d4a5a5] text-[#4A252C] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 bg-[#4A252C] border-r border-[#d4a5a5]/20 z-50 flex flex-col pt-24 px-8 space-y-8 md:hidden"
            >
              {navLinks.map(link => (
                <a
                  key={link.view}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg uppercase tracking-widest transition-colors ${currentView === link.view ? 'text-[#d4a5a5]' : 'text-[#f3e6e6]/70 hover:text-[#d4a5a5]'}`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
