import React from 'react';
import { motion } from 'motion/react';
import { Star, Moon, Heart } from 'lucide-react';
import { PageWrapper } from './layout/PageWrapper';

export function StoryPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1732293696703-41b32392b454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMGNvc21vcyUyMG5lYnVsYSUyMG15c3RpY2FsfGVufDF8fHx8MTc2ODM1NTQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cosmic Night Sky"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A252C]/50 via-transparent to-[#4A252C]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#d4a5a5] text-sm md:text-base tracking-[0.3em] uppercase">The Legend</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-[#d4a5a5] mt-4 mb-6 leading-tight">
              Astrophil & Stella
            </h1>
            <p className="text-lg md:text-2xl font-light text-[#f3e6e6]/90 leading-relaxed italic">
              "The Star Lover and the Star"
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Myth Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[#d4a5a5]/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1671554442936-4b2cb7408535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXN0cm9ub215JTIwYm9vayUyMHBhcmNobWVudHxlbnwxfHx8fDE3NjgzNTU0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Ancient Astronomy Book" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#d4a5a5] italic">A Celestial Longing</h2>
              <div className="space-y-6 text-[#f3e6e6]/80 font-light leading-loose text-lg">
                <p>
                  Rooted in the 16th-century sonnet sequence by Sir Philip Sidney, the tale of 
                  <span className="text-[#d4a5a5]"> Astrophil</span> (the Star Lover) and 
                  <span className="text-[#d4a5a5]"> Stella</span> (the Star) is one of eternal longing.
                </p>
                <p>
                  He, bound to the earth, gazes upward with undying devotion. She, a celestial being of light, 
                  shines with a beauty that illuminates the darkness but remains forever just out of reach.
                  It is a love story not of possession, but of connection across the cosmic divide.
                </p>
              </div>
              <div className="flex gap-4 text-[#d4a5a5]">
                <Star size={20} />
                <Moon size={20} />
                <Star size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#3a1c22]">
        <div className="container mx-auto px-6 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-[#d4a5a5]">
              "With how sad steps, O Moon, thou climb'st the skies! <br/>
              How silently, and with how wan a face!"
            </p>
            <footer className="text-sm tracking-[0.2em] uppercase opacity-60">— Sir Philip Sidney, Astrophil and Stella, Sonnet 31</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute right-0 top-1/4 w-96 h-96 border border-[#d4a5a5]/10 rounded-full blur-3xl -translate-x-1/2" />

        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8 order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#d4a5a5] italic">Starlight in Stone</h2>
              <div className="space-y-6 text-[#f3e6e6]/80 font-light leading-loose text-lg">
                <p>
                  At <span className="text-[#d4a5a5] italic">Astrophil and Stella</span>, we believe that crystals are the earth's memory of the stars. 
                  Just as Astrophil sought to understand the cosmos through his beloved Stella, we seek to understand ourselves through these natural talismans.
                </p>
                <p>
                  Each piece we craft is designed to bridge the gap between your earthly journey and your celestial destiny. 
                  Wearing our jewelry is a silent vow—to keep your eyes turned towards the light, even in the deepest night.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[#d4a5a5]/20 order-1 md:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1651002844258-c11247097f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGNyeXN0YWwlMjBqZXdlbHJ5JTIwaGFuZHN8ZW58MXx8fHwxNzY4MzU1NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Hands holding crystal jewelry" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#f3e6e6] italic">Find Your Stella</h2>
          <p className="max-w-xl mx-auto text-[#f3e6e6]/60 font-light">
            Explore our collection and find the stone that speaks to your soul's constellation.
          </p>
          <a 
            href="#shop" 
            className="inline-block px-12 py-4 border border-[#d4a5a5] text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-all duration-500 uppercase tracking-widest text-sm"
          >
            Explore Collection
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
