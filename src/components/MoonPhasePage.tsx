import React from 'react';
import { motion } from 'motion/react';
import { Moon, Circle, CircleDashed } from 'lucide-react';

export function MoonPhasePage() {
  const phases = [
    {
      name: "New Moon",
      subtitle: "The Beginning",
      description: "A time for setting intentions and planting seeds for the future. In the darkness, we find the courage to dream anew.",
      crystal: "Black Moonstone",
      image: "https://images.unsplash.com/photo-1692563786689-f9b290c610e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBtb29uJTIwY3J5c3RhbHMlMjBmbGF0bGF5fGVufDF8fHx8MTc2ODM1NTcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Waxing Crescent",
      subtitle: "The Growth",
      description: "Energy begins to build. It is time to take action on your intentions and nurture your dreams into reality.",
      crystal: "Clear Quartz",
      image: "https://images.unsplash.com/photo-1705757903571-13b4d415cb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVzY2VudCUyMG1vb24lMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY4MzU1NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Full Moon",
      subtitle: "The Climax",
      description: "Illumination and fulfillment. The moon is at its peak, amplifying emotions and powers. A time for gratitude and releasing what no longer serves.",
      crystal: "Selenite",
      image: "https://images.unsplash.com/photo-1587904590661-48e61c3abdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwbW9vbiUyMG5pZ2h0JTIwc2t5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NjgzNTU1NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Waning Moon",
      subtitle: "The Release",
      description: "As the light fades, we reflect and rest. It is a time for introspection, healing, and preparing for the new cycle.",
      crystal: "Amethyst",
      image: "https://images.unsplash.com/photo-1509978778156-518eea30166b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwcGhhc2VzJTIwbXlzdGljYWwlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjgzNTU3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-[#4A252C] text-[#f3e6e6] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-[#d4a5a5]/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509978778156-518eea30166b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwcGhhc2VzJTIwbXlzdGljYWwlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjgzNTU3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Moon Phases"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#4A252C]/60 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="inline-block p-4 border rounded-full border-[#d4a5a5]/30 mb-4"
          >
            <Moon size={48} className="text-[#d4a5a5]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif italic text-[#d4a5a5]"
          >
            Lunar Cycles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl font-light tracking-wide text-[#f3e6e6]/80 max-w-2xl mx-auto px-4"
          >
            Align your spirit with the rhythm of the moon.
          </motion.p>
        </div>
      </section>

      {/* Phases Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="space-y-32">
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] relative overflow-hidden rounded-sm border border-[#d4a5a5]/20 group">
                <div className="absolute inset-0 bg-[#4A252C]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={phase.image} 
                  alt={phase.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-4 text-[#d4a5a5]">
                   {index === 0 ? <CircleDashed size={24} /> : index === 2 ? <Circle size={24} fill="currentColor" /> : <Moon size={24} />}
                   <span className="text-xs tracking-[0.3em] uppercase">{phase.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif italic text-[#d4a5a5]">{phase.name}</h2>
                <p className="text-lg font-light leading-relaxed text-[#f3e6e6]/70">
                  {phase.description}
                </p>
                <div className="pt-4 border-t border-[#d4a5a5]/20 inline-block w-full">
                    <span className="text-xs uppercase tracking-widest text-[#d4a5a5]/80">Recommended Crystal:</span>
                    <span className="block text-xl font-serif mt-2">{phase.crystal}</span>
                </div>
                <div className="pt-4">
                     <button className="px-8 py-3 border border-[#d4a5a5] text-[#d4a5a5] hover:bg-[#d4a5a5] hover:text-[#4A252C] transition-all duration-300 uppercase tracking-widest text-xs">
                        Shop Collection
                     </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Moon Ritual CTA */}
      <section className="py-24 bg-[#3a1c22] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4a5a5] rounded-full blur-[120px]" />
         </div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif italic text-[#d4a5a5] mb-8">
                Harness the Lunar Energy
            </h3>
            <p className="max-w-2xl mx-auto text-[#f3e6e6]/70 font-light mb-12 leading-loose">
                Every phase of the moon offers a unique energy to work with. Our curated collections help you channel these cosmic forces into your daily life.
            </p>
            <a href="#shop-page" className="inline-block px-12 py-4 bg-[#d4a5a5] text-[#4A252C] hover:bg-[#f3e6e6] transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
                Shop All Moon Jewelry
            </a>
         </div>
      </section>
    </div>
  );
}
