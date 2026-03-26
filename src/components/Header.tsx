import React, { useState } from 'react';
import { ShoppingBag, Star, Moon, Sun, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#5e3a3b] bg-[#3E2021]/95 backdrop-blur supports-[backdrop-filter]:bg-[#3E2021]/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-[#F4D0D2]" />
            <span className="font-serif text-2xl tracking-widest text-[#F4D0D2]">
              ASTRO GEMS
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[#F4D0D2] hover:text-white transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium text-[#F4D0D2] hover:text-white transition-colors">
              ZODIAC
            </a>
            <a href="#" className="text-sm font-medium text-[#F4D0D2] hover:text-white transition-colors">
              CRYSTALS
            </a>
            <a href="#" className="text-sm font-medium text-[#F4D0D2] hover:text-white transition-colors">
              MYTHOLOGY
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-[#F4D0D2] hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-[#F4D0D2] hover:text-white transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden text-[#F4D0D2] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#5e3a3b] bg-[#3E2021] px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-[#F4D0D2] hover:text-white">SHOP</a>
            <a href="#" className="text-[#F4D0D2] hover:text-white">ZODIAC</a>
            <a href="#" className="text-[#F4D0D2] hover:text-white">CRYSTALS</a>
            <a href="#" className="text-[#F4D0D2] hover:text-white">MYTHOLOGY</a>
          </div>
        </div>
      )}
    </nav>
  );
}
