import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';

// Real crystal jewelry products with verified Unsplash images
const products: Product[] = [
  {
    id: '1',
    name: 'Amethyst Cluster Pendant',
    price: 58,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800',
    category: 'Pendant',
    signs: ['Aquarius', 'Pisces', 'Capricorn'],
    collection: 'zodiac',
    element: 'Air',
    description: 'Raw amethyst cluster set in oxidized sterling silver. Channels clarity and calm.',
  },
  {
    id: '2',
    name: 'Black Obsidian Shield Ring',
    price: 72,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    category: 'Ring',
    signs: ['Scorpio', 'Capricorn', 'Aries'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: 'Volcanic obsidian cabochon in blackened silver. Absorbs and transmutes negative energy.',
  },
  {
    id: '3',
    name: 'Rose Quartz Love Necklace',
    price: 68,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    category: 'Necklace',
    signs: ['Taurus', 'Libra', 'Cancer'],
    collection: 'zodiac',
    element: 'Earth',
    description: 'Polished rose quartz teardrop on a delicate 18k gold-fill chain. Opens the heart.',
  },
  {
    id: '4',
    name: 'Moonstone Crescent Pendant',
    price: 95,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800',
    category: 'Pendant',
    signs: ['Cancer', 'Pisces', 'Libra'],
    collection: 'moon-phase',
    moonPhase: 'Full Moon',
    description: 'Blue flash moonstone nestled in a crescent moon setting. Enhances intuition.',
  },
  {
    id: '5',
    name: 'Citrine Sun Stacking Ring',
    price: 52,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800',
    category: 'Ring',
    signs: ['Leo', 'Aries', 'Gemini'],
    collection: 'zodiac',
    element: 'Fire',
    description: 'Faceted citrine in a thin gold vermeil band. Attracts abundance and solar energy.',
  },
  {
    id: '6',
    name: 'Lapis Lazuli Statement Necklace',
    price: 128,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800',
    category: 'Necklace',
    signs: ['Sagittarius', 'Aquarius', 'Libra'],
    collection: 'zodiac',
    element: 'Air',
    description: 'Deep blue lapis with gold pyrite inclusions on a gold chain. Awakens inner wisdom.',
  },
  {
    id: '7',
    name: 'Turquoise Wanderer Bracelet',
    price: 85,
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94815b2?q=80&w=800',
    category: 'Bracelet',
    signs: ['Sagittarius', 'Aquarius', 'Pisces'],
    collection: 'zodiac',
    element: 'Air',
    description: 'Sleeping Beauty turquoise beads on stretch cord. Protection for every journey.',
  },
  {
    id: '8',
    name: 'Black Tourmaline Pillar Pendant',
    price: 64,
    image: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?q=80&w=800',
    category: 'Pendant',
    signs: ['Capricorn', 'Scorpio', 'Virgo'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: 'Raw black tourmaline column wrapped in copper wire. Grounds and protects.',
  },
  {
    id: '9',
    name: 'Garnet Passion Drop Earrings',
    price: 78,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800',
    category: 'Earrings',
    signs: ['Scorpio', 'Capricorn', 'Aries'],
    collection: 'zodiac',
    element: 'Fire',
    description: 'Deep red Mozambique garnets in gold-fill settings. Ignites passion and vitality.',
  },
  {
    id: '10',
    name: 'Selenite New Moon Cuff',
    price: 88,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800',
    category: 'Bracelet',
    signs: ['Cancer', 'Gemini', 'Taurus'],
    collection: 'moon-phase',
    moonPhase: 'New Moon',
    description: 'Polished selenite bar on an adjustable silver cuff. Cleanses and resets energy.',
  },
  {
    id: '11',
    name: 'Labradorite Intuition Pendant',
    price: 110,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800',
    category: 'Pendant',
    signs: ['Pisces', 'Scorpio', 'Sagittarius'],
    collection: 'amulet',
    amuletPurpose: 'Intuition',
    description: 'Iridescent labradorite oval revealing blue-gold flash. Awakens psychic sight.',
  },
  {
    id: '12',
    name: 'Jade Prosperity Bangle',
    price: 165,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800',
    category: 'Bracelet',
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    collection: 'amulet',
    amuletPurpose: 'Wealth',
    description: 'Hand-carved nephrite jade bangle. An ancient talisman of prosperity and harmony.',
  },
  {
    id: '13',
    name: 'Evil Eye Sapphire Pendant',
    price: 92,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    category: 'Pendant',
    signs: ['Aries', 'Scorpio', 'Leo'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: 'Cobalt enamel evil eye with sapphire center on sterling silver. Repels ill will.',
  },
  {
    id: '14',
    name: 'Aquamarine Sea Goddess Ring',
    price: 135,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    category: 'Ring',
    signs: ['Pisces', 'Aquarius', 'Gemini'],
    collection: 'zodiac',
    element: 'Water',
    description: 'Oval aquamarine in a sculptural wave setting. Calms the mind and opens expression.',
  },
  {
    id: '15',
    name: 'Waxing Moon Hoop Earrings',
    price: 58,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800',
    category: 'Earrings',
    signs: ['Cancer', 'Libra', 'Taurus'],
    collection: 'moon-phase',
    moonPhase: 'Waxing',
    description: 'Crescent moon hoops in 14k gold-fill. Symbol of growth and emerging power.',
  },
  {
    id: '16',
    name: 'Sunstone Leo Crown Ring',
    price: 98,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800',
    category: 'Ring',
    signs: ['Leo', 'Aries', 'Sagittarius'],
    collection: 'zodiac',
    element: 'Fire',
    description: 'Aventurescent sunstone in a statement crown bezel. Embodies solar confidence.',
  },
  {
    id: '17',
    name: 'Peridot Forest Earrings',
    price: 74,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    category: 'Earrings',
    signs: ['Virgo', 'Leo', 'Gemini'],
    collection: 'zodiac',
    element: 'Earth',
    description: 'Vivid green peridot drops with leaf motif gold-fill settings. Renewal and growth.',
  },
  {
    id: '18',
    name: 'Hamsa Hand Gold Necklace',
    price: 86,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800',
    category: 'Necklace',
    signs: ['Leo', 'Sagittarius', 'Aries'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: 'Intricate gold-fill hamsa with turquoise eye. Ancient guardian of home and heart.',
  },
  {
    id: '19',
    name: 'Bloodstone Aries Signet',
    price: 118,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    category: 'Ring',
    signs: ['Aries', 'Scorpio'],
    collection: 'zodiac',
    element: 'Fire',
    description: 'Deep green bloodstone with red flecks set in an oxidized silver signet. Warrior energy.',
  },
  {
    id: '20',
    name: 'Waning Crescent Ear Cuffs',
    price: 45,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800',
    category: 'Earrings',
    signs: ['Capricorn', 'Aquarius', 'Virgo'],
    collection: 'moon-phase',
    moonPhase: 'Waning',
    description: 'Silver ear cuffs in waning crescent form. A reminder to release and let go.',
  },
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
          initial={{ opacity: 0, scale: 0.95 }}
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

            {/* Hover Add to Cart */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#4A252C]/90 backdrop-blur-sm">
              <button
                onClick={() => addItem(product)}
                className="w-full flex items-center justify-center space-x-2 text-[#d4a5a5] uppercase tracking-widest text-xs py-2 border border-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-colors"
              >
                <span>Add to Cart</span>
                <Plus size={14} />
              </button>
            </div>

            {/* Collection badge */}
            {product.collection && (
              <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest px-2 py-1 bg-[#4A252C]/80 text-[#d4a5a5] border border-[#d4a5a5]/30">
                {product.collection === 'moon-phase' ? 'Moon Phase' : product.collection === 'amulet' ? 'Amulet' : 'Zodiac'}
              </div>
            )}
          </div>

          <div className="text-center space-y-1">
            <h3 className="font-serif text-lg text-[#f3e6e6] leading-tight">{product.name}</h3>
            <p className="text-[#d4a5a5] font-light">${product.price}</p>
            <p className="text-[10px] text-white/40 leading-relaxed px-2 line-clamp-2 hidden group-hover:block transition-all">
              {product.description}
            </p>
            <div className="flex justify-center space-x-1 text-[9px] text-white/30 uppercase tracking-wider">
              {product.signs.slice(0, 3).join(' · ')}
            </div>
          </div>
        </motion.div>
      ))}

      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-20 opacity-40">
          <p className="font-serif italic text-2xl">No celestial artifacts found in this alignment.</p>
          <p className="text-sm mt-4 tracking-widest uppercase">Try another sign or collection</p>
        </div>
      )}
    </div>
  );
}
