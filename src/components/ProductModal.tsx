import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Star, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { FREE_SHIPPING_THRESHOLD } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ELEMENT_DESCRIPTIONS: Record<string, string> = {
  Fire: 'Fire signs are bold, passionate, and action-oriented. These crystals amplify your natural courage and drive.',
  Earth: 'Earth signs are grounded, sensual, and enduring. These crystals deepen your connection to abundance and stability.',
  Air:  'Air signs are intellectual, communicative, and curious. These crystals sharpen your mind and open new channels of thought.',
  Water:'Water signs are intuitive, emotional, and empathic. These crystals protect your sensitivity and deepen your psychic gifts.',
};

const MOON_DESCRIPTIONS: Record<string, string> = {
  'New Moon':  'Carry this stone as you set your intentions. The new moon is the perfect moment to plant seeds for what you wish to call in.',
  'Waxing':    'As the moon grows, so does your momentum. This crystal accelerates your progress and builds your energy.',
  'Full Moon': 'Charge this stone under the full moon\'s light to maximise its power. Use it for gratitude, release, and celebration.',
  'Waning':    'This crystal supports letting go — of habits, relationships, or patterns that no longer serve your highest good.',
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setAdded(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const energyNote =
    product?.element
      ? ELEMENT_DESCRIPTIONS[product.element]
      : product?.moonPhase
      ? MOON_DESCRIPTIONS[product.moonPhase]
      : product?.amuletPurpose
      ? `This amulet is charged for ${product.amuletPurpose.toLowerCase()} — a powerful talisman for those who seek ${product.amuletPurpose.toLowerCase()} in their daily lives.`
      : '';

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[860px] z-50 bg-[#2a171a] border border-[#d4a5a5]/20 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-[#f3e6e6]/60 hover:text-[#d4a5a5] transition-colors"
            >
              <X size={22} />
            </button>

            {/* Image */}
            <div className="w-full md:w-1/2 h-56 md:h-full flex-shrink-0 bg-[#1a0e0f] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a171a]/60 via-transparent to-transparent md:hidden" />

              {/* Collection badge */}
              <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest px-2 py-1 bg-[#4A252C]/90 text-[#d4a5a5] border border-[#d4a5a5]/30">
                {product.category}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col overflow-y-auto p-6 md:p-10 space-y-6">
              {/* Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#d4a5a5] fill-[#d4a5a5]" />
                ))}
                <span className="text-[10px] text-white/40 ml-2 uppercase tracking-wider">4.9 · 380 reviews</span>
              </div>

              {/* Name & Price */}
              <div className="space-y-2">
                <h2 className="font-serif text-2xl md:text-3xl text-[#f3e6e6] leading-tight">{product.name}</h2>
                <div className="flex items-baseline gap-2">
                  {product.compareAtPrice && (
                    <s className="text-[#d4a5a5]/40 text-base">${product.compareAtPrice}</s>
                  )}
                  <p className="text-2xl text-[#d4a5a5] font-light">${product.price}</p>
                </div>
                <p className="text-[10px] text-[#d4a5a5]/60 uppercase tracking-wider">
                  Free shipping on orders over ${FREE_SHIPPING_THRESHOLD}
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-[#d4a5a5]/30" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#f3e6e6]/70">{product.description}</p>

              {/* Energy note */}
              {energyNote && (
                <div className="border border-[#d4a5a5]/20 p-4 space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a5a5]">
                    {product.element ? `${product.element} Energy` : product.moonPhase ? 'Lunar Guidance' : 'Intention'}
                  </p>
                  <p className="text-xs leading-relaxed text-[#f3e6e6]/60">{energyNote}</p>
                </div>
              )}

              {/* Signs */}
              {product.signs.length <= 4 && (
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a5a5]">Aligned Signs</p>
                  <p className="text-sm text-[#f3e6e6]/60">{product.signs.join(' · ')}</p>
                </div>
              )}

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-wider text-white/40">
                <div>
                  <span className="block text-[#d4a5a5]/60 mb-1">Material</span>
                  Natural Crystal · Sterling Silver
                </div>
                <div>
                  <span className="block text-[#d4a5a5]/60 mb-1">Ships in</span>
                  3 – 7 Business Days
                </div>
                <div>
                  <span className="block text-[#d4a5a5]/60 mb-1">Returns</span>
                  30-Day Guarantee
                </div>
                <div>
                  <span className="block text-[#d4a5a5]/60 mb-1">Free Shipping</span>
                  Orders over $55
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2 space-y-2">
                <button
                  onClick={() => {
                    addItem(product);
                    setAdded(true);
                    setTimeout(() => { setAdded(false); onClose(); }, 1400);
                  }}
                  disabled={added}
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-[#d4a5a5] text-[#4A252C] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#e8d5d5] transition-colors disabled:opacity-80"
                >
                  {added ? <Check size={16} /> : <ShoppingBag size={16} />}
                  <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
