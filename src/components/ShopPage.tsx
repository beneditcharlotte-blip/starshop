import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductList } from './ProductList';
import { Sparkles, Moon, Shield } from 'lucide-react';

type CollectionTab = 'zodiac' | 'moon-phase' | 'amulet';

export function ShopPage() {
  const [activeTab, setActiveTab] = useState<CollectionTab>('zodiac');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('All');

  // Reset sub-category when tab changes
  useEffect(() => {
    setActiveSubCategory('All');
  }, [activeTab]);

  const collections = {
    zodiac: {
      title: "Zodiac Collection",
      description: "Stones that resonate with your sun sign's frequency, amplifying your natural strengths.",
      icon: Sparkles,
      link: "#zodiac-page",
      linkText: "Explore Zodiac Lore"
    },
    'moon-phase': {
      title: "Moon Phase Collection",
      description: "Jewelry to honor the cycles of the moon, from the new beginnings to full illumination.",
      icon: Moon,
      link: "#moon-phase",
      linkText: "Discover Moon Phases"
    },
    amulet: {
      title: "Protection Amulets",
      description: "Ancient symbols and stones to guard your energy and deflect negativity.",
      icon: Shield,
      link: "#protection-amulets",
      linkText: "Amulet Meanings"
    }
  };

  const subCategories = {
    zodiac: ['All', 'Fire', 'Earth', 'Air', 'Water'],
    'moon-phase': ['All', 'New Moon', 'Waxing', 'Full Moon', 'Waning'],
    amulet: ['All', 'Protection', 'Love', 'Wealth', 'Intuition']
  };

  const ActiveIcon = collections[activeTab].icon;

  return (
    <div className="min-h-screen bg-[#4A252C] text-[#f3e6e6] pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-[#d4a5a5]/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMHNob3B8ZW58MXx8fHwxNzY4MzU3NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mystical Shop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#4A252C]/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center space-y-4 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d4a5a5] tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Curated Treasures
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif italic text-[#f3e6e6]"
          >
            The Celestial Marketplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-light text-[#f3e6e6]/70 max-w-xl mx-auto"
          >
            Discover artifacts aligned with your stars, your moon, and your spirit.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 min-h-[800px]">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-start gap-8 mb-20 border-b border-[#d4a5a5]/10 pb-1">
          {(['zodiac', 'moon-phase', 'amulet'] as CollectionTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm md:text-base tracking-[0.2em] uppercase transition-colors relative ${
                activeTab === tab 
                  ? 'text-[#d4a5a5]' 
                  : 'text-[#f3e6e6]/40 hover:text-[#d4a5a5]'
              }`}
            >
              {tab === 'moon-phase' ? 'Moon Phase' : tab === 'zodiac' ? 'Zodiac' : 'Amulets'}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a5a5]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center gap-3 text-[#d4a5a5]">
                <ActiveIcon size={32} />
                <h2 className="text-3xl md:text-5xl font-serif italic">{collections[activeTab].title}</h2>
              </div>
              <p className="text-[#f3e6e6]/60 font-light max-w-lg text-lg leading-relaxed">
                {collections[activeTab].description}
              </p>
            </div>

            {/* Sub-category Filter */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-4">
              {subCategories[activeTab].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-2 text-xs md:text-sm tracking-widest uppercase border transition-all duration-300 ${
                    activeSubCategory === sub
                      ? 'bg-[#d4a5a5] text-[#4A252C] border-[#d4a5a5]'
                      : 'bg-transparent text-[#d4a5a5] border-[#d4a5a5]/30 hover:border-[#d4a5a5]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <ProductList collection={activeTab} subCategory={activeSubCategory} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
