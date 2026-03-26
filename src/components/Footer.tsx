import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2a171a] border-t border-[#d4a5a5]/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#d4a5a5] italic">Astrophil and Stella</h3>
            <p className="text-[#f3e6e6]/60 font-light leading-relaxed">
              Where the star lover meets the star. Connecting souls with the energy of the cosmos through handcrafted crystal jewelry.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs text-[#d4a5a5] mb-6">Collections</h4>
            <ul className="space-y-4 text-[#f3e6e6]/60 font-light text-sm">
              <li><a href="#zodiac-page" className="hover:text-[#d4a5a5]">Zodiac Series</a></li>
              <li><a href="#shop" className="hover:text-[#d4a5a5]">Raw Stones</a></li>
              <li><a href="#moon-phase" className="hover:text-[#d4a5a5]">Moon Phase</a></li>
              <li><a href="#protection-amulets" className="hover:text-[#d4a5a5]">Protection Amulets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs text-[#d4a5a5] mb-6">Support</h4>
            <ul className="space-y-4 text-[#f3e6e6]/60 font-light text-sm">
              <li><a href="#" className="hover:text-[#d4a5a5]">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#d4a5a5]">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#d4a5a5]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#d4a5a5]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs text-[#d4a5a5] mb-6">Newsletter</h4>
            <p className="text-[#f3e6e6]/60 font-light text-sm mb-4">
              Subscribe to receive cosmic updates and exclusive rituals.
            </p>
            <div className="flex border-b border-[#d4a5a5]/30 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent w-full outline-none text-[#f3e6e6] placeholder-white/20 text-sm"
              />
              <button className="text-[#d4a5a5] uppercase text-xs tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#d4a5a5]/5 text-white/20 text-xs tracking-widest uppercase">
          <p>© 2026 Astrophil and Stella. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Star size={16} />
            <Moon size={16} />
            <Sun size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
