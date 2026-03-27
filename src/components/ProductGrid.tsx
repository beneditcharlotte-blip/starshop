import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductModal } from './ProductModal';
import type { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 'g1',
    name: 'Moonstone Oracle Ring',
    price: 128,
    image: 'https://images.unsplash.com/photo-1638973365411-20c5a8482f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uc3RvbmUlMjByaW5nJTIwbXlzdGljYWx8ZW58MXx8fHwxNzY4Mjk5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ring',
    signs: ['Cancer', 'Pisces', 'Scorpio'],
    collection: 'zodiac',
    element: 'Water',
    description: 'Blue flash moonstone set in sterling silver, aligned with the lunar cycle. Amplifies intuition and emotional clarity for water signs.',
  },
  {
    id: 'g2',
    name: 'Amethyst Spirit Necklace',
    price: 156,
    image: 'https://images.unsplash.com/photo-1623644770830-3f0f6d2d2aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWV0aHlzdCUyMGNyeXN0YWwlMjBuZWNrbGFjZXxlbnwxfHx8fDE3NjgyOTkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Necklace',
    signs: ['Aquarius', 'Pisces', 'Capricorn'],
    collection: 'zodiac',
    element: 'Air',
    description: 'Raw amethyst point on a gold-fill chain. Opens the third eye and calms the overactive mind, bringing visionary clarity to air signs.',
  },
  {
    id: 'g3',
    name: 'Rose Quartz Love Amulet',
    price: 98,
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwcXVhcnR6JTIwcGVuZGFudHxlbnwxfHx8fDE3NjgyOTkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pendant',
    signs: ['Taurus', 'Libra', 'Cancer'],
    collection: 'zodiac',
    element: 'Earth',
    description: 'Polished rose quartz teardrop on a 14k gold-fill chain. The stone of unconditional love, drawing nurturing relationships and deepening self-compassion.',
  },
  {
    id: 'g4',
    name: 'Celestial Chart Charm',
    price: 85,
    image: 'https://images.unsplash.com/photo-1730371851241-aad9cf97525f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6b2RpYWMlMjBjb25zdGVsbGF0aW9ucyUyMG15c3RpY2FsfGVufDF8fHx8MTc2ODI5OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Set',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'zodiac',
    description: 'A hand-engraved celestial chart charm in oxidized sterling silver. A talisman for all signs, capturing the cosmic map of your birth moment.',
  },
];

export function ProductGrid() {
  const { addItem } = useCart();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-[#3E2021]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-[#F4D0D2] mb-2">Mystical Artifacts</h2>
            <div className="h-0.5 w-24 bg-[#D49A9A]"></div>
          </div>
          <a
            href="#shop-page"
            className="text-[#D49A9A] hover:text-[#F4D0D2] font-medium text-sm tracking-widest border-b border-transparent hover:border-[#F4D0D2] transition-colors pb-1"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActiveProduct(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#2A1515]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveProduct(product); }}
                  className="absolute top-4 right-4 p-2 bg-[#3E2021]/80 rounded-full text-[#F4D0D2] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#F4D0D2] hover:text-[#3E2021]"
                >
                  <Heart className="w-5 h-5" />
                </button>
                {/* Mobile-visible add to cart */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#4A252C]/95">
                  <button
                    onClick={(e) => { e.stopPropagation(); addItem(product); }}
                    className="w-full flex items-center justify-center space-x-2 text-[#d4a5a5] uppercase tracking-widest text-xs py-2 border border-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-colors"
                  >
                    <ShoppingBag size={13} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-[#F4D0D2] mb-1">{product.name}</h3>
                <p className="text-[#D49A9A] text-sm mb-2">{product.category}</p>
                <span className="text-[#F4D0D2] font-medium">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
