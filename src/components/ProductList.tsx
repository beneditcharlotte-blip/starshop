import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Amethyst Cluster Necklace',
    price: 128,
    image: 'https://images.unsplash.com/photo-1581344947734-faed9fc80bf9',
    category: 'Necklace',
    signs: ['Pisces', 'Aquarius', 'Capricorn'],
    collection: 'zodiac',
    element: 'Air'
  },
  {
    id: '2',
    name: 'Raw Obsidian Ring',
    price: 85,
    image: 'https://images.unsplash.com/photo-1711372558553-fc570e4f9c31',
    category: 'Ring',
    signs: ['Scorpio', 'Sagittarius'],
    collection: 'amulet',
    amuletPurpose: 'Protection'
  },
  {
    id: '3',
    name: 'Celestial Quartz Earrings',
    price: 95,
    image: 'https://images.unsplash.com/photo-1725918319127-fc4b1eeeba54',
    category: 'Earrings',
    signs: ['Gemini', 'Libra', 'Taurus'],
    collection: 'zodiac',
    element: 'Air'
  },
  {
    id: '4',
    name: 'Rose Quartz Pendant',
    price: 110,
    image: 'https://images.unsplash.com/photo-1550007436-ba84ff7bcb54',
    category: 'Pendant',
    signs: ['Taurus', 'Libra', 'Cancer'],
    collection: 'zodiac',
    element: 'Earth'
  },
  {
    id: '5',
    name: 'Moonstone Bracelet',
    price: 75,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
    category: 'Bracelet',
    signs: ['Cancer', 'Pisces', 'Gemini'],
    collection: 'moon-phase',
    moonPhase: 'Full Moon'
  },
  {
    id: '6',
    name: 'Citrine Sun Ring',
    price: 145,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
    category: 'Ring',
    signs: ['Leo', 'Aries'],
    collection: 'zodiac',
    element: 'Fire'
  },
  {
    id: '7',
    name: 'Lapis Lazuli Choker',
    price: 160,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a',
    category: 'Necklace',
    signs: ['Sagittarius', 'Virgo'],
    collection: 'zodiac',
    element: 'Water'
  },
  {
    id: '8',
    name: 'Black Tourmaline Amulet',
    price: 90,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a51',
    category: 'Amulet',
    signs: ['Capricorn', 'Scorpio'],
    collection: 'amulet',
    amuletPurpose: 'Protection'
  },
  {
    id: '9',
    name: 'Crescent Moon Necklace',
    price: 135,
    image: 'https://images.unsplash.com/photo-1705757903571-13b4d415cb4c',
    category: 'Necklace',
    signs: ['Cancer', 'Taurus'],
    collection: 'moon-phase',
    moonPhase: 'Waxing'
  },
  {
    id: '10',
    name: 'Selenite Wand Pendant',
    price: 88,
    image: 'https://images.unsplash.com/photo-1600109988898-04a43477142d',
    category: 'Pendant',
    signs: ['Pisces', 'Cancer'],
    collection: 'moon-phase',
    moonPhase: 'New Moon'
  },
  {
    id: '11',
    name: 'Evil Eye Protection Ring',
    price: 120,
    image: 'https://images.unsplash.com/photo-1623699654078-ac54157421f3',
    category: 'Ring',
    signs: ['Aries', 'Scorpio'],
    collection: 'amulet',
    amuletPurpose: 'Protection'
  },
  {
    id: '12',
    name: 'Hamsa Hand Bracelet',
    price: 95,
    image: 'https://images.unsplash.com/photo-1667369070772-44db57b00148',
    category: 'Bracelet',
    signs: ['Leo', 'Sagittarius'],
    collection: 'amulet',
    amuletPurpose: 'Protection'
  },
  {
    id: '13',
    name: 'Jade Wealth Bangle',
    price: 180,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
    category: 'Bracelet',
    signs: ['Taurus', 'Virgo'],
    collection: 'amulet',
    amuletPurpose: 'Wealth'
  },
  {
    id: '14',
    name: 'Garnet Passion Ring',
    price: 115,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
    category: 'Ring',
    signs: ['Scorpio', 'Leo'],
    collection: 'amulet',
    amuletPurpose: 'Love'
  },
  {
    id: '15',
    name: 'Labradorite Intuition Pendant',
    price: 105,
    image: 'https://images.unsplash.com/photo-1600109988898-04a43477142d',
    category: 'Pendant',
    signs: ['Pisces', 'Cancer'],
    collection: 'amulet',
    amuletPurpose: 'Intuition'
  },
  {
    id: '16',
    name: 'Waning Moon Ear Cuffs',
    price: 65,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
    category: 'Earrings',
    signs: ['Capricorn', 'Aquarius'],
    collection: 'moon-phase',
    moonPhase: 'Waning'
  }
];

interface ProductListProps {
  selectedSign?: string | null;
  collection?: 'zodiac' | 'moon-phase' | 'amulet';
  subCategory?: string;
}

export function ProductList({ selectedSign, collection, subCategory }: ProductListProps) {
  const { addItem } = useCart();

  const filteredProducts = products.filter(p => {
    if (selectedSign && !p.signs.includes(selectedSign)) return false;
    if (collection && p.collection !== collection) return false;

    if (subCategory && subCategory !== 'All') {
      if (collection === 'zodiac' && p.element !== subCategory) return false;
      if (collection === 'moon-phase' && p.moonPhase !== subCategory) return false;
      if (collection === 'amulet' && p.amuletPurpose !== subCategory) return false;
    }

    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#2a171a] mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#4A252C]/90 backdrop-blur-sm">
              <button
                onClick={() => addItem(product)}
                className="w-full flex items-center justify-center space-x-2 text-[#d4a5a5] uppercase tracking-widest text-xs py-2 border border-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-colors"
              >
                <span>Add to Cart</span>
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h3 className="font-serif text-xl text-[#f3e6e6]">{product.name}</h3>
            <p className="text-[#d4a5a5] font-light">${product.price}</p>
            <div className="flex justify-center space-x-2 text-[10px] text-white/40 uppercase tracking-wider">
              {product.signs.slice(0, 2).join(' • ')}
            </div>
          </div>
        </motion.div>
      ))}

      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-20 opacity-50">
          <p className="font-serif italic text-2xl">No celestial artifacts found in this alignment.</p>
        </div>
      )}
    </div>
  );
}
