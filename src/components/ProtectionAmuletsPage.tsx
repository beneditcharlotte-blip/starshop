import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Hand, Hexagon } from 'lucide-react';
import { PageWrapper } from './layout/PageWrapper';

export function ProtectionAmuletsPage() {
  const amulets = [
    {
      id: "evil-eye",
      name: "The Evil Eye",
      subtitle: "The Watchful Guardian",
      description: "An ancient talisman dating back over 5,000 years, the Evil Eye stares back at the world to deflect jealousy and ill intent. It is the shield that never blinks.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1623699654078-ac54157421f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmlsJTIwZXllJTIwcHJvdGVjdGlvbiUyMGpld2VscnklMjBteXN0aWNhbHxlbnwxfHx8fDE3NjgzNTY0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alignment: "left"
    },
    {
      id: "hamsa",
      name: "The Hamsa Hand",
      subtitle: "Hand of Fatima",
      description: "A universal symbol of protection representing blessings, power, and strength. It pushes back negative energy while inviting happiness, luck, and good health.",
      icon: Hand,
      image: "https://images.unsplash.com/photo-1667369070772-44db57b00148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zYSUyMGhhbmQlMjBhbXVsZXQlMjBnb2xkfGVufDF8fHx8MTc2ODM1NjQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alignment: "right"
    },
    {
      id: "obsidian",
      name: "Black Obsidian",
      subtitle: "The Psychic Shield",
      description: "Born from volcanic glass, Obsidian is a powerful cleanser of psychic smog. It forms a shield against negativity, blocks psychic attacks, and absorbs negative energies from the environment.",
      icon: Hexagon,
      image: "https://images.unsplash.com/photo-1739697075140-59b5eee5b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNpZGlhbiUyMHN0b25lJTIwamV3ZWxyeSUyMGRhcmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY4MzU2NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alignment: "left"
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1715692727361-2d286ae1d16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGFsaXNtYW4lMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2ODM1NjQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ancient Talismans"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A252C]/40 via-[#4A252C]/20 to-[#4A252C]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Shield size={64} strokeWidth={1} className="mx-auto text-[#d4a5a5] mb-6" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif italic text-[#d4a5a5]"
          >
            Divine Protection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl font-light text-[#f3e6e6]/90 leading-relaxed max-w-2xl mx-auto"
          >
            Ancient amulets and stones to guard your spirit on its journey through the stars.
          </motion.p>
        </div>
      </section>

      {/* Amulets Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          {amulets.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${item.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-4 border border-[#d4a5a5]/30 -rotate-3 transition-transform duration-700 group-hover:rotate-0" />
                <div className="relative aspect-[4/5] overflow-hidden">
                   <div className="absolute inset-0 bg-[#4A252C]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                   <img 
                     src={item.image} 
                     alt={item.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 text-[#d4a5a5]">
                   <item.icon size={28} strokeWidth={1.5} />
                   <span className="text-sm tracking-[0.3em] uppercase">{item.subtitle}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif italic text-[#f3e6e6]">{item.name}</h2>
                
                <p className="text-lg text-[#f3e6e6]/70 leading-loose font-light">
                  {item.description}
                </p>

                <div className="pt-8">
                  <a href="#shop" className="inline-flex items-center gap-2 text-[#d4a5a5] hover:text-[#f3e6e6] transition-colors uppercase tracking-widest text-sm border-b border-[#d4a5a5]/30 pb-1 hover:border-[#f3e6e6]">
                    Shop {item.name}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote/Philosophy */}
      <section className="py-24 bg-[#3a1c22]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Shield size={32} className="mx-auto text-[#d4a5a5] opacity-50" />
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-[#d4a5a5]">
              "The universe speaks in symbols. Wearing protection is not about fear, but about claiming your sacred space in the cosmos."
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
