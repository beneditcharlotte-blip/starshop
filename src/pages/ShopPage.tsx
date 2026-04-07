import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductList } from '../components/ProductList';
import { Sparkles, Moon, Shield } from 'lucide-react';
import { Tab } from '../components/ui/Tab';
import { StickyTabBar } from '../components/ui/StickyTabBar';
import { PageWrapper } from '../components/layout/PageWrapper';

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
    <PageWrapper>
      <StickyTabBar>
        <div className="flex items-center justify-center space-x-8 px-8">
          {(['zodiac', 'moon-phase', 'amulet'] as CollectionTab[]).map((tab) => (
            <Tab
              key={tab}
              label={tab === 'moon-phase' ? 'Moon Phase' : tab === 'zodiac' ? 'Zodiac' : 'Amulet'}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              layoutId="activeTab"
            />
          ))}
        </div>
      </StickyTabBar>

      <div className="container mx-auto px-6 py-16 min-h-[800px]">
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
    </PageWrapper>
  );
}
