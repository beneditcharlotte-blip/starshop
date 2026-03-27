import React from 'react';
import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { FREE_SHIPPING_THRESHOLD } from '../constants';

export function CartSidebar() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, total } = useCart();
  const remaining = FREE_SHIPPING_THRESHOLD - total;
  const freeShipping = total >= FREE_SHIPPING_THRESHOLD;

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
            {/* Header */}
            <div className="p-6 border-b border-[#d4a5a5]/20 flex items-center justify-between">
              <h2 className="text-2xl font-serif text-[#d4a5a5] italic">Your Collection</h2>
              <button onClick={() => setIsOpen(false)} className="text-[#f3e6e6] hover:text-[#d4a5a5] transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="px-6 py-3 bg-[#2a171a]/40 border-b border-[#d4a5a5]/10">
              <div className="flex items-center space-x-2 mb-2">
                <Truck size={13} className="text-[#d4a5a5]" />
                {freeShipping ? (
                  <span className="text-[11px] text-[#d4a5a5] uppercase tracking-wider">You've unlocked free shipping!</span>
                ) : (
                  <span className="text-[11px] text-white/50 uppercase tracking-wider">
                    Add <span className="text-[#d4a5a5]">${remaining}</span> more for free shipping
                  </span>
                )}
              </div>
              <div className="h-[2px] bg-[#d4a5a5]/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#d4a5a5]"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#f3e6e6]/50 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="tracking-widest uppercase text-sm">Your cart is empty</p>
                  <button
                    onClick={() => { setIsOpen(false); window.location.hash = '#shop-page'; }}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#d4a5a5] border border-[#d4a5a5]/40 px-4 py-2 hover:bg-[#d4a5a5]/10 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-[#2a171a] flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-[#f3e6e6] leading-tight text-sm">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-[#d4a5a5]/50 hover:text-[#d4a5a5] ml-2 flex-shrink-0">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-[#d4a5a5] text-sm">${item.price}</p>

                      {/* Qty controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 border border-[#d4a5a5]/40 flex items-center justify-center text-[#d4a5a5] hover:border-[#d4a5a5] transition-colors"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-sm text-[#f3e6e6] w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 border border-[#d4a5a5]/40 flex items-center justify-center text-[#d4a5a5] hover:border-[#d4a5a5] transition-colors"
                        >
                          <Plus size={10} />
                        </button>
                        <span className="text-xs text-white/30 ml-auto">${(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#d4a5a5]/20 bg-[#2a171a]/30 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="uppercase tracking-widest text-xs text-[#f3e6e6]/60">Subtotal</span>
                  <span className="text-2xl font-serif text-[#d4a5a5]">${total.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-white/40 uppercase tracking-wider">
                  <span>Shipping</span>
                  <span>{freeShipping ? 'Free' : 'Calculated at checkout'}</span>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.hash = '#checkout';
                  }}
                  className="w-full py-4 bg-[#d4a5a5] text-[#4A252C] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#e8d5d5] transition-colors"
                >
                  Checkout
                </button>
                <p className="text-center text-[9px] text-white/30 uppercase tracking-wider">
                  Secure checkout · 30-day returns
                </p>
                <p className="text-center text-[9px] text-white/20 tracking-wider">
                  VISA · Mastercard · PayPal · Apple Pay
                </p>
                <p className="text-center text-[9px] text-white/20 uppercase tracking-wider">
                  VISA · Mastercard · PayPal · Apple Pay
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
