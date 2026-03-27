import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import type { Product } from '../types';
import { ProductModal } from './ProductModal';

// 14 SKUs with real crystal jewelry imagery from Pexels (free license)
const products: Product[] = [
  // 鈹€鈹€ 12 Zodiac SKUs 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
  {
    id: '1',
    name: 'Aries Fire Stone Bracelet',
    price: 42,
    compareAtPrice: 57,
    // Crystal bead bracelet on wrist 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/5317619/pexels-photo-5317619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelet',
    signs: ['Aries'],
    collection: 'zodiac',
    element: 'Fire',
    description: 'Raw red jasper beads on an adjustable cord. Red jasper grounds Aries\'s explosive energy, keeping passion focused and courage sustainable through every battle.',
  },
  {
    id: '2',
    name: 'Taurus Rose Quartz Pendant',
    price: 48,
    compareAtPrice: 65,
    // Pink rose quartz crystals 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/3611406/pexels-photo-3611406.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Taurus'],
    collection: 'zodiac',
    element: 'Earth',
    description: 'Polished rose quartz teardrop on a 14k gold-fill chain. Venus-ruled Taurus finds deeper self-love and draws nurturing relationships through this stone of the heart.',
  },
  {
    id: '3',
    name: 'Gemini Dual Crystal Set',
    price: 55,
    compareAtPrice: 74,
    // Assorted healing crystals 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/2894954/pexels-photo-2894954.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Gemini'],
    collection: 'zodiac',
    element: 'Air',
    description: "Two matched tiger's eye pendants representing Gemini's twin nature. Enhances mental clarity, harmonises dual energies, and sharpens communication skills.",
  },
  {
    id: '4',
    name: 'Cancer Moonstone Ring',
    price: 65,
    compareAtPrice: 88,
    // Green gemstone ring held in hand 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/7190066/pexels-photo-7190066.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ring',
    signs: ['Cancer'],
    collection: 'zodiac',
    element: 'Water',
    description: "Blue flash moonstone set in sterling silver. Cancer's ruling moon magnifies through this crystal, amplifying intuition and offering emotional protection.",
  },
  {
    id: '5',
    name: 'Leo Citrine Power Bracelet',
    price: 52,
    compareAtPrice: 70,
    // Crystal beaded bracelet on dark surface 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/6850295/pexels-photo-6850295.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelet',
    signs: ['Leo'],
    collection: 'zodiac',
    element: 'Fire',
    description: "Golden citrine beads on a gold-fill bracelet. The merchant's stone channels Leo's solar radiance into abundance, confidence, and magnetic leadership energy.",
  },
  {
    id: '6',
    name: 'Virgo Amazonite Healing Set',
    price: 48,
    compareAtPrice: 65,
    // Crystal quartz raw stones on fabric 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/6475288/pexels-photo-6475288.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Virgo'],
    collection: 'zodiac',
    element: 'Earth',
    description: "Pale teal amazonite pendant and tumbled stone set. Calms Virgo's overactive mind, alleviates anxiety, and encourages the self-compassion this sign often denies itself.",
  },
  {
    id: '7',
    name: 'Libra Rose Quartz & Lapis Set',
    price: 68,
    compareAtPrice: 92,
    // Semiprecious stones collection 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/4040599/pexels-photo-4040599.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Set',
    signs: ['Libra'],
    collection: 'zodiac',
    element: 'Air',
    description: "Rose quartz and lapis lazuli paired for Libra's dual Venus nature. Together they strengthen loving relationships while supporting confident, honest communication.",
  },
  {
    id: '8',
    name: 'Scorpio Black Obsidian Necklace',
    price: 58,
    compareAtPrice: 78,
    // Dark necklace with purple stone 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/965984/pexels-photo-965984.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklace',
    signs: ['Scorpio'],
    collection: 'zodiac',
    element: 'Water',
    description: 'Volcanic black obsidian arrowhead on a black wax cord. Acts as a psychic mirror for Scorpio, revealing hidden truths and forming an impenetrable protective shield.',
  },
  {
    id: '9',
    name: 'Sagittarius Turquoise Bracelet',
    price: 62,
    compareAtPrice: 84,
    // Person holding crystal with beads 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/6998760/pexels-photo-6998760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelet',
    signs: ['Sagittarius'],
    collection: 'zodiac',
    element: 'Fire',
    description: "Natural sleeping beauty turquoise beads on stretch cord. The traveller's stone protects Sagittarius on every adventure while amplifying their philosophical wisdom.",
  },
  {
    id: '10',
    name: 'Capricorn Garnet Pendant',
    price: 55,
    compareAtPrice: 74,
    // Silver pendant with green gemstone 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Capricorn'],
    collection: 'zodiac',
    element: 'Earth',
    description: "Deep red Mozambique garnet on an oxidized silver chain. Reignites Capricorn's ambition, sustains drive through long climbs, and draws material success.",
  },
  {
    id: '11',
    name: 'Aquarius Amethyst Crystal Wand',
    price: 45,
    compareAtPrice: 61,
    // Purple gemstone pendant held in hand 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/965983/pexels-photo-965983.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Aquarius'],
    collection: 'zodiac',
    element: 'Air',
    description: "Raw amethyst point wrapped in gold wire. Heightens Aquarius' powerful intuition, calms revolutionary thought into clear vision, and opens the third eye.",
  },
  {
    id: '12',
    name: 'Pisces Aquamarine Necklace',
    price: 72,
    compareAtPrice: 97,
    // Healing crystal necklace lifestyle 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklace',
    signs: ['Pisces'],
    collection: 'zodiac',
    element: 'Water',
    description: "Oval aquamarine pendant on a sterling silver chain. The sea stone of courage calms Pisces' emotional currents and opens clear channels of artistic expression.",
  },

  // 鈹€鈹€ 4 Protection Amulet SKUs 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
  {
    id: 'a1',
    name: 'Black Tourmaline Shield',
    price: 68,
    compareAtPrice: 92,
    image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pendant',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'amulet',
    amuletPurpose: 'Protection',
    description: 'Raw black tourmaline wrapped in oxidised silver wire on a black leather cord. The most powerful protective stone in the mineral kingdom 鈥?absorbs and repels negative energy before it reaches you.',
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
    description: 'Hand-carved rose quartz heart on a 14k gold-fill chain. Opens the heart chakra and magnetically draws loving, nurturing relationships 鈥?both with others and with yourself.',
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
    description: "Polished pyrite nugget set in 18k gold-plate 鈥?the ancient alchemist's stone of prosperity. Activates the solar plexus, amplifying confidence and attracting financial abundance.",
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
    description: 'Iridescent labradorite cabochon on a sterling silver rolo chain. The stone of transformation and seers 鈥?awakens psychic gifts, strengthens intuition, and creates a protective force field around the aura.',
  },

  // 鈹€鈹€ 2 Gift Box SKUs 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
  {
    id: '13',
    name: 'Zodiac Crystal Starter Kit',
    price: 88,
    compareAtPrice: 119,
    // Crystals on marble surface 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/6825320/pexels-photo-6825320.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gift Set',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'zodiac',
    description: 'Three hand-selected raw healing crystals matched to your star sign, presented in an elegant black gift box with a personalised star chart card. The perfect introduction to crystal energy.',
  },
  {
    id: '14',
    name: 'Full Moon Ritual Set',
    price: 115,
    compareAtPrice: 155,
    // Large gemstone illuminating crystal 鈥?Pexels free license
    image: 'https://images.pexels.com/photos/4028962/pexels-photo-4028962.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gift Set',
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    collection: 'moon-phase',
    moonPhase: 'Full Moon',
    description: 'Clear quartz point, moonstone cabochon, hand-harvested white sage bundle, and a full moon ritual instruction card 鈥?everything you need to harness the peak lunar energy.',
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

            {/* Add to Cart overlay 鈥?always visible on mobile, hover on desktop */}
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
                {product.signs.join(' 路 ')}
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
