import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants/navigation';
import type { View } from '../types';

interface NavbarProps {
  currentView?: View;
}

export function Navbar({ currentView = 'home' }: NavbarProps) {
  const { items, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4A252C]/90 backdrop-blur-md border-b border-[#d4a5a5]/20">
        <div className="container mx-auto px-6 h-20 flex items-center">
          {/* Left: desktop nav links */}
          <div className="flex-1 hidden md:flex items-center space-x-6 text-sm tracking-widest uppercase">
            {NAV_LINKS.map(link => (
              <a
                key={link.view}
                href={link.href}
                className={`relative hover:text-[#d4a5a5] transition-colors pb-1 ${currentView === link.view ? 'text-[#d4a5a5]' : ''}`}
              >
                {link.label}
                {currentView === link.view && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#d4a5a5]"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Left: mobile hamburger */}
          <div className="flex-1 md:hidden">
            <button
              className="text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: logo */}
          <div className="flex-1 flex justify-center">
            <a href="#" className="text-xl md:text-2xl font-serif italic text-[#d4a5a5] whitespace-nowrap">
              Astrophil and Stella
            </a>
          </div>

          {/* Right: icons */}
          <div className="flex-1 flex items-center justify-end space-x-6">
            <button
              className={`transition-colors ${searchOpen ? 'text-[#d4a5a5]' : 'text-[#f3e6e6] hover:text-[#d4a5a5]'}`}
              onClick={() => setSearchOpen(v => !v)}
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
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

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#d4a5a5]/10"
            >
              <div className="container mx-auto px-6 py-4">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search crystals, signs, collections..."
                  className="w-full bg-transparent text-[#f3e6e6] placeholder-[#f3e6e6]/30 outline-none text-sm tracking-widest border-b border-[#d4a5a5]/30 pb-2"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              {NAV_LINKS.map(link => (
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
