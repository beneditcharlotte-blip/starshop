import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';
import { ProductModal } from './ProductModal';

// 14 SKUs with real crystal jewelry imagery from Pexels (free license)
const products: Product[] = [
  // ── 12 Zodiac SKUs ──────────────────────────────────────────────
  {
    id: '1',
    name: 'Aries Fire Stone Bracelet',
    price: 42,
    compareAtPrice: 57,
    // Crystal bead bracelet on wrist �?Pexels free license
    image: 'https://sc02.alicdn.com/kf/A49c01ab2bbb24bee8b343c91b88b6007n.png',
    category: 'Bracelet',
    signs: ['Aries'],
    collection: 'zodiac',
    element: 'Fire',
    description: "Aries season doesn't wait for permission �� and neither do you. Raw red jasper keeps your fire burning without burning out. Wear it when the world needs your full force.",
  },
  {
    id: '2',
    name: 'Taurus Rose Quartz Pendant',
    price: 48,
    compareAtPrice: 65,
    // Pink rose quartz crystals �?Pexels free license
    image: 'https://images.pexels.com/photos/3611406/pexels-photo-3611406.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Taurus'],
    collection: 'zodiac',
    element: 'Earth',
    description: "You deserve beauty that lasts �� not just in the things you collect, but in how you feel about yourself. Rose quartz opens what Taurus guards most carefully: the heart.",
  },
  {
    id: '3',
    name: 'Gemini Dual Crystal Set',
    price: 55,
    compareAtPrice: 74,
    // Assorted healing crystals �?Pexels free license
    image: 'https://images.pexels.com/photos/2894954/pexels-photo-2894954.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Gemini'],
    collection: 'zodiac',
    element: 'Air',
    description: "Both versions of you deserve to be heard. Tiger's eye harmonises Gemini's twin minds into one brilliant, unstoppable voice. Clarity where there was chaos.",
  },
  {
    id: '4',
    name: 'Cancer Moonstone Ring',
    price: 65,
    compareAtPrice: 88,
    // Green gemstone ring held in hand �?Pexels free license
    image: 'https://images.pexels.com/photos/7190066/pexels-photo-7190066.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ring',
    signs: ['Cancer'],
    collection: 'zodiac',
    element: 'Water',
    description: "You feel everything �� that's your power, not your weakness. Moonstone wraps Cancer's deepest intuition in silver light, turning sensitivity into an unbreakable shield.",
  },
  {
    id: '5',
    name: 'Leo Citrine Power Bracelet',
    price: 52,
    compareAtPrice: 70,
    // Crystal beaded bracelet on dark surface �?Pexels free license
    image: 'https://images.pexels.com/photos/6850295/pexels-photo-6850295.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelet',
    signs: ['Leo'],
    collection: 'zodiac',
    element: 'Fire',
    description: "You were born to be seen. Citrine amplifies the solar energy Leo already radiates, transforming confidence into magnetic abundance that draws the room to you.",
  },
  {
    id: '6',
    name: 'Virgo Amazonite Healing Set',
    price: 48,
    compareAtPrice: 65,
    // Crystal quartz raw stones on fabric �?Pexels free license
    image: 'https://images.pexels.com/photos/6475288/pexels-photo-6475288.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Virgo'],
    collection: 'zodiac',
    element: 'Earth',
    description: "You give everyone else grace �� it's time to give some to yourself. Amazonite quiets Virgo's relentless inner critic and replaces it with the calm clarity you were born for.",
  },
  {
    id: '7',
    name: 'Libra Rose Quartz & Lapis Set',
    price: 68,
    compareAtPrice: 92,
    // Semiprecious stones collection �?Pexels free license
    image: 'https://images.pexels.com/photos/4040599/pexels-photo-4040599.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Libra'],
    collection: 'zodiac',
    element: 'Air',
    description: "Balance isn't found �� it's created. Rose quartz and lapis lazuli work together to help Libra say what they mean and love without losing themselves.",
  },
  {
    id: '8',
    name: 'Scorpio Black Obsidian Necklace',
    price: 58,
    compareAtPrice: 78,
    // Dark necklace with purple stone �?Pexels free license
    image: 'https://images.pexels.com/photos/965984/pexels-photo-965984.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklace',
    signs: ['Scorpio'],
    collection: 'zodiac',
    element: 'Water',
    description: "You already see through everything. Black obsidian gives Scorpio's razor intuition a physical anchor �� a shield that absorbs what others can't even sense.",
  },
  {
    id: '9',
    name: 'Sagittarius Turquoise Bracelet',
    price: 62,
    compareAtPrice: 84,
    // Person holding crystal with beads �?Pexels free license
    image: 'https://images.pexels.com/photos/6998760/pexels-photo-6998760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelet',
    signs: ['Sagittarius'],
    collection: 'zodiac',
    element: 'Fire',
    description: "The horizon is calling, and you were built to answer. Turquoise protects Sagittarius on every journey �� near or far �� and keeps wisdom close when wanderlust gets loud.",
  },
  {
    id: '10',
    name: 'Capricorn Garnet Pendant',
    price: 55,
    compareAtPrice: 74,
    // Silver pendant with green gemstone �?Pexels free license
    image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Capricorn'],
    collection: 'zodiac',
    element: 'Earth',
    description: "The summit is closer than you think. Garnet reignites the ambition Capricorn never truly loses �� just temporarily buries under the weight of everything they're already carrying.",
  },
  {
    id: '11',
    name: 'Aquarius Amethyst Crystal Wand',
    price: 45,
    compareAtPrice: 61,
    // Purple gemstone pendant held in hand �?Pexels free license
    image: 'https://images.pexels.com/photos/965983/pexels-photo-965983.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Aquarius'],
    collection: 'zodiac',
    element: 'Air',
    description: "Your ideas are decades ahead of the room. Amethyst channels Aquarius' visionary frequency into clear, grounded thought �� so the world can finally catch up to you.",
  },
  {
    id: '12',
    name: 'Pisces Aquamarine Necklace',
    price: 72,
    compareAtPrice: 97,
    // Healing crystal necklace lifestyle �?Pexels free license
    image: 'https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklace',
    signs: ['Pisces'],
    collection: 'zodiac',
    element: 'Water',
    description: "You dream in frequencies others can't hear. Aquamarine gives Pisces' boundless imagination a gentle current �� calming the depths so your art can rise to the surface.",
  },

  // ── 4 Protection Amulet SKUs ────────────────────────────────────
  {
    id: 'a1',
    name: 'Black Tourmaline Shield',
    price: 68,
    compareAtPrice: 92,
    image: 'https://sc02.alicdn.com/kf/A401eeb69f0a04f358fcb986f603e5158v.png',
    category: 'Pendant',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: "Some energy was never yours to carry. Black tourmaline forms an invisible boundary between you and everything that drains you �� absorbing negativity before it even lands.",
  },
  {
    id: 'a2',
    name: 'Rose Quartz Heart Amulet',
    price: 78,
    compareAtPrice: 105,
    image: 'https://images.pexels.com/photos/3611406/pexels-photo-3611406.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Taurus', 'Libra', 'Cancer', 'Pisces'],
    collection: 'amulet',
    amuletPurpose: 'Love',
    description: "Love starts with the relationship you have with yourself. This hand-carved rose quartz heart opens what fear quietly closed �� and makes space for the love you actually deserve.",
  },
  {
    id: 'a3',
    name: 'Pyrite Abundance Amulet',
    price: 72,
    compareAtPrice: 97,
    image: 'https://images.pexels.com/photos/6825320/pexels-photo-6825320.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Leo', 'Capricorn', 'Aries'],
    collection: 'amulet',
    amuletPurpose: 'Wealth',
    description: "Abundance isn't luck �� it's a frequency. Pyrite activates your solar plexus and locks you into the energy of prosperity, so opportunity stops passing you by.",
  },
  {
    id: 'a4',
    name: 'Labradorite Third Eye Amulet',
    price: 88,
    compareAtPrice: 119,
    image: 'https://images.pexels.com/photos/965983/pexels-photo-965983.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Pisces', 'Scorpio', 'Sagittarius', 'Aquarius'],
    collection: 'amulet',
    amuletPurpose: 'Intuition',
    description: "You've always known things you couldn't explain. Labradorite amplifies what you already sense �� strengthening your intuition and wrapping your aura in an iridescent shield.",
  },

  // ── 2 Gift Box SKUs ─────────────────────────────────────────────
  {
    id: '13',
    name: 'Zodiac Crystal Starter Kit',
    price: 88,
    compareAtPrice: 119,
    // Crystals on marble surface �?Pexels free license
    image: 'https://images.pexels.com/photos/6825320/pexels-photo-6825320.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gift Set',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'zodiac',
    description: "The perfect first step into your cosmic story. Three hand-selected raw crystals matched precisely to your star sign, presented in a matte black gift box with a personalised star chart card.",
  },
  {
    id: '14',
    name: 'Full Moon Ritual Set',
    price: 115,
    compareAtPrice: 155,
    // Large gemstone illuminating crystal �?Pexels free license
    image: 'https://sc02.alicdn.com/kf/A92067c8895424f59987d84ba96601b89E.png',
    category: 'Gift Set',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'moon-phase',
    moonPhase: 'Full Moon',
    description: "The full moon doesn't ask if you're ready �� it reveals. This ritual set holds everything you need to release what no longer serves you and call in what you truly want.",
  },
];

interface ProductListProps {
  selectedSign?: string | null;
  collection?: 'zodiac' | 'moon-phase' | 'amulet';
  subCategory?: string;
}

export function ProductList({ selectedSign, collection, subCategory }: ProductListProps) {
  const { addItem } = useCart();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

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
          className="group relative cursor-pointer"
          onClick={() => setActiveProduct(product)}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#1a0e0f] mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />

            {/* Add to Cart overlay �?always visible on mobile, hover on desktop */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 bg-[#4A252C]/95 backdrop-blur-sm">
              <button
                onClick={(e) => { e.stopPropagation(); addItem(product); }}
                className="w-full flex items-center justify-center space-x-2 text-[#d4a5a5] uppercase tracking-widest text-xs py-2 border border-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-colors"
              >
                <span>Add to Cart</span>
                <Plus size={14} />
              </button>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest px-2 py-1 bg-[#4A252C]/80 text-[#d4a5a5] border border-[#d4a5a5]/30">
              {product.category}
            </div>
          </div>

          <div className="text-center space-y-1">
            <h3 className="font-serif text-lg text-[#f3e6e6] leading-tight">{product.name}</h3>
            <p className="text-[#d4a5a5] font-light">
              {product.compareAtPrice && (
                <s className="text-[#d4a5a5]/40 text-xs mr-2">${product.compareAtPrice}</s>
              )}
              ${product.price}
            </p>
            <p className="text-[10px] text-white/40 leading-relaxed px-2 line-clamp-2">
              {product.description}
            </p>
            {product.signs.length <= 3 && (
              <div className="text-[9px] text-white/25 uppercase tracking-wider">
                {product.signs.join(' · ')}
              </div>
            )}
          </div>
        </motion.div>
      ))}

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />

      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-20 opacity-40">
          <p className="font-serif italic text-2xl">No celestial artifacts found in this alignment.</p>
          <p className="text-sm mt-4 tracking-widest uppercase">Try another sign or collection</p>
        </div>
      )}
    </div>
  );
}


