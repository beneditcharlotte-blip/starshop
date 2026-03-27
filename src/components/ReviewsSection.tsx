import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sophia R.',
    sign: 'Pisces',
    rating: 5,
    text: 'My Aquamarine necklace arrived beautifully packaged with a little constellation card. I wear it every day — it feels like carrying the ocean with me. Absolutely stunning quality.',
    date: 'March 2026',
  },
  {
    name: 'Maya T.',
    sign: 'Scorpio',
    rating: 5,
    text: 'The Black Obsidian necklace is everything I hoped for. The stone is raw and powerful, exactly as described. I gifted one to my best friend and she cried. Astrophil and Stella gets it.',
    date: 'February 2026',
  },
  {
    name: 'Camille D.',
    sign: 'Leo',
    rating: 5,
    text: 'I ordered the Citrine bracelet for my birthday and it arrived in 5 days. The gold beads catch light beautifully and I've had so many compliments. Already planning my next order.',
    date: 'March 2026',
  },
  {
    name: 'Isabelle W.',
    sign: 'Cancer',
    rating: 5,
    text: 'The Moonstone ring has the most gorgeous blue flash I've ever seen in person. I'm a crystal collector and this is among my most treasured pieces. Packaging felt like unwrapping a gift from the stars.',
    date: 'January 2026',
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 border-t border-[#d4a5a5]/10">
      <div className="text-center mb-16 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Voices from the Stars</p>
        <h2 className="text-4xl md:text-5xl font-serif italic font-light text-[#d4a5a5]">
          Beloved by 1,200+ Star Seekers
        </h2>
        <div className="flex items-center justify-center space-x-1 pt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-[#d4a5a5] fill-[#d4a5a5]" />
          ))}
          <span className="text-xs text-white/40 ml-3 uppercase tracking-wider">4.9 average · 380 verified reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-[#d4a5a5]/15 p-8 space-y-4 hover:border-[#d4a5a5]/30 transition-colors"
          >
            <div className="flex items-center space-x-1">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} size={12} className="text-[#d4a5a5] fill-[#d4a5a5]" />
              ))}
            </div>
            <p className="text-[#f3e6e6]/70 font-light leading-relaxed italic text-sm">
              "{review.text}"
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#d4a5a5]/10">
              <div>
                <p className="text-sm text-[#f3e6e6]">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#d4a5a5]/60">{review.sign}</p>
              </div>
              <p className="text-[10px] text-white/30 uppercase tracking-wider">{review.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
