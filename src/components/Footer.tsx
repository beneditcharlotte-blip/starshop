import React, { useState } from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email.includes('@')) setSubmitted(true);
  }

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
              <li><a href="#care-guide" className="hover:text-[#d4a5a5]">Care Guide</a></li>
              <li><a href="#shipping" className="hover:text-[#d4a5a5]">Shipping & Returns</a></li>
              <li><a href="#contact" className="hover:text-[#d4a5a5]">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-[#d4a5a5]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs text-[#d4a5a5] mb-6">Newsletter</h4>
            <p className="text-[#f3e6e6]/60 font-light text-sm mb-4">
              Subscribe to receive cosmic updates and exclusive rituals.
            </p>
            {submitted ? (
              <p className="text-[#d4a5a5] text-sm tracking-wide">✦ You're on the cosmic list.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex border-b border-[#d4a5a5]/30 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-transparent w-full outline-none text-[#f3e6e6] placeholder-white/20 text-sm"
                />
                <button type="submit" className="text-[#d4a5a5] uppercase text-xs tracking-widest hover:text-white transition-colors">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#d4a5a5]/10 text-white/40 text-xs tracking-widest uppercase">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <p>© 2026 Astrophil and Stella. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-white/60 transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white/60 transition-colors">Terms</a>
              <a href="#returns" className="hover:text-white/60 transition-colors">Returns</a>
            </div>
          </div>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#instagram" aria-label="Instagram" className="hover:text-white/60 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#twitter" aria-label="Twitter / X" className="hover:text-white/60 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-white/60 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
