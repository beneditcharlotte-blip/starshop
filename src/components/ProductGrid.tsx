import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Moonstone Oracle Ring',
    price: 128,
    image: 'https://images.unsplash.com/photo-1638973365411-20c5a8482f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uc3RvbmUlMjByaW5nJTIwbXlzdGljYWx8ZW58MXx8fHwxNzY4Mjk5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rings'
  },
  {
    id: '2',
    name: 'Amethyst Spirit Necklace',
    price: 156,
    image: 'https://images.unsplash.com/photo-1623644770830-3f0f6d2d2aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWV0aHlzdCUyMGNyeXN0YWwlMjBuZWNrbGFjZXxlbnwxfHx8fDE3NjgyOTkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Necklaces'
  },
  {
    id: '3',
    name: 'Rose Quartz Love Amulet',
    price: 98,
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwcXVhcnR6JTIwcGVuZGFudHxlbnwxfHx8fDE3NjgyOTkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pendants'
  },
  {
    id: '4',
    name: 'Celestial Chart Charm',
    price: 85,
    image: 'https://images.unsplash.com/photo-1730371851241-aad9cf97525f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6b2RpYWMlMjBjb25zdGVsbGF0aW9ucyUyMG15c3RpY2FsfGVufDF8fHx8MTc2ODI5OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Charms'
  },
];

export function ProductGrid() {
  return (
    <section className="py-24 bg-[#3E2021]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-[#F4D0D2] mb-2">Mystical Artifacts</h2>
            <div className="h-0.5 w-24 bg-[#D49A9A]"></div>
          </div>
          <a href="#" className="text-[#D49A9A] hover:text-[#F4D0D2] font-medium text-sm tracking-widest border-b border-transparent hover:border-[#F4D0D2] transition-colors pb-1">
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
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#2A1515]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <button className="absolute top-4 right-4 p-2 bg-[#3E2021]/80 rounded-full text-[#F4D0D2] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#F4D0D2] hover:text-[#3E2021]">
                  <Heart className="w-5 h-5" />
                </button>
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
    </section>
  );
}
