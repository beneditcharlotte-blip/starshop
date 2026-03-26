import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function CartSidebar() {
  const { isOpen, setIsOpen, items, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#4A252C] border-l border-[#d4a5a5]/20 z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[#d4a5a5]/20 flex items-center justify-between">
              <h2 className="text-2xl font-serif text-[#d4a5a5] italic">Your Collection</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#f3e6e6]/50 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="tracking-widest uppercase text-sm">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#2a171a] flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-[#f3e6e6] leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#d4a5a5] hover:text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-[#d4a5a5] text-sm">${item.price}</p>
                      <div className="text-xs text-white/40 uppercase tracking-wider">Qty: {item.quantity}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-[#d4a5a5]/20 bg-[#2a171a]/30 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="uppercase tracking-widest text-sm text-[#f3e6e6]/60">Total</span>
                  <span className="text-3xl font-serif text-[#d4a5a5]">${total}</span>
                </div>
                <button className="w-full py-4 bg-[#d4a5a5] text-[#4A252C] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#e8d5d5] transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
