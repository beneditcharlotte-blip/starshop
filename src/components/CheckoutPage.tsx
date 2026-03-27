import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Lock, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { FREE_SHIPPING_THRESHOLD } from '../constants';

type Step = 'form' | 'success';

export function CheckoutPage() {
  const { items, total, setIsOpen, clearCart } = useCart();
  const [step, setStep] = useState<Step>('form');
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'US',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const freeShipping = total >= FREE_SHIPPING_THRESHOLD;
  const shipping = freeShipping ? 0 : 8;
  const orderTotal = total + shipping;

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.zip.trim()) e.zip = 'Required';
    if (form.cardNumber.replace(/\s/g, '').length < 16) e.cardNumber = 'Invalid card number';
    if (!form.expiry.match(/^\d{2}\/\d{2}$/)) e.expiry = 'MM/YY format';
    if (form.cvv.length < 3) e.cvv = 'Invalid CVV';
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    clearCart();
    setIsOpen(false);
    setStep('success');
  }

  function formatCard(value: string) {
    return value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    return digits.length >= 3 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-[#3a1c20] flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="w-16 h-16 text-[#d4a5a5] mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="font-serif text-4xl text-[#f3e6e6] mb-4 italic">Order Confirmed</h1>
          <p className="text-[#d4a5a5]/80 mb-2 tracking-wide">
            Thank you, {form.firstName}. Your celestial artifacts are being prepared.
          </p>
          <p className="text-sm text-white/40 mb-8">
            A confirmation has been sent to {form.email}
          </p>
          <div className="bg-[#4A252C]/60 border border-[#d4a5a5]/20 p-6 mb-8 text-left space-y-3">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-[#f3e6e6]/80">{item.name} × {item.quantity}</span>
                <span className="text-[#d4a5a5]">${(item.price * item.quantity).toFixed(0)}</span>
              </div>
            ))}
            <div className="border-t border-[#d4a5a5]/20 pt-3 flex justify-between font-medium">
              <span className="text-[#f3e6e6]/60 uppercase tracking-wider text-xs">Total</span>
              <span className="text-[#d4a5a5] font-serif text-lg">${orderTotal.toFixed(0)}</span>
            </div>
          </div>
          <a
            href="#shop-page"
            className="inline-block text-xs uppercase tracking-[0.2em] text-[#d4a5a5] border border-[#d4a5a5]/40 px-8 py-3 hover:bg-[#d4a5a5]/10 transition-colors"
          >
            Continue Shopping
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3a1c20] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <a
            href="#shop-page"
            className="flex items-center space-x-2 text-[#d4a5a5]/60 hover:text-[#d4a5a5] transition-colors text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </a>
          <span className="font-serif italic text-[#d4a5a5] text-xl">Astrophil & Stella</span>
          <div className="flex items-center space-x-1 text-[#d4a5a5]/40 text-xs uppercase tracking-wider">
            <Lock size={12} />
            <span>Secure</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-4">Contact</h2>
              <Field
                label="Email address"
                value={form.email}
                error={errors.email}
                onChange={v => setForm(f => ({ ...f, email: v }))}
                type="email"
                placeholder="your@email.com"
              />
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-4 flex items-center gap-2">
                <Truck size={13} /> Shipping address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" value={form.firstName} error={errors.firstName}
                  onChange={v => setForm(f => ({ ...f, firstName: v }))} />
                <Field label="Last name" value={form.lastName} error={errors.lastName}
                  onChange={v => setForm(f => ({ ...f, lastName: v }))} />
              </div>
              <Field label="Address" value={form.address} error={errors.address}
                onChange={v => setForm(f => ({ ...f, address: v }))} placeholder="Street address" />
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Field label="City" value={form.city} error={errors.city}
                    onChange={v => setForm(f => ({ ...f, city: v }))} />
                </div>
                <Field label="ZIP / Postcode" value={form.zip} error={errors.zip}
                  onChange={v => setForm(f => ({ ...f, zip: v }))} />
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-4 flex items-center gap-2">
                <CreditCard size={13} /> Payment
              </h2>
              <div className="border border-[#d4a5a5]/20 p-4 space-y-4 bg-[#4A252C]/30">
                <Field
                  label="Card number"
                  value={form.cardNumber}
                  error={errors.cardNumber}
                  onChange={v => setForm(f => ({ ...f, cardNumber: formatCard(v) }))}
                  placeholder="1234 5678 9012 3456"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Expiry" value={form.expiry} error={errors.expiry}
                    onChange={v => setForm(f => ({ ...f, expiry: formatExpiry(v) }))}
                    placeholder="MM/YY" />
                  <Field label="CVV" value={form.cvv} error={errors.cvv}
                    onChange={v => setForm(f => ({ ...f, cvv: v.replace(/\D/g, '').slice(0, 4) }))}
                    placeholder="123" type="password" />
                </div>
              </div>
              <p className="text-[10px] text-white/30 mt-2 flex items-center gap-1">
                <Lock size={10} /> This is a demo store. No real charges will be made.
              </p>
            </section>

            <button
              type="submit"
              className="w-full py-4 bg-[#d4a5a5] text-[#4A252C] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#e8d5d5] transition-colors"
            >
              Place Order · ${orderTotal.toFixed(0)}
            </button>
          </form>

          {/* Order summary */}
          <aside className="lg:col-span-2">
            <div className="sticky top-8 bg-[#4A252C]/40 border border-[#d4a5a5]/20 p-6 space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-4">Order Summary</h2>
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-14 h-16 bg-[#2a171a] flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#d4a5a5] text-[#4A252C] text-[10px] flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm text-[#f3e6e6] leading-tight truncate">{item.name}</p>
                      <p className="text-xs text-[#d4a5a5]/60 mt-1">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#d4a5a5] ml-2 flex-shrink-0">${(item.price * item.quantity).toFixed(0)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#d4a5a5]/20 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-white/50">
                  <span>Subtotal</span>
                  <span>${total.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Shipping</span>
                  <span>{freeShipping ? <span className="text-[#d4a5a5]">Free</span> : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-[#d4a5a5]/20">
                  <span className="text-[#f3e6e6]">Total</span>
                  <span className="font-serif text-xl text-[#d4a5a5]">${orderTotal.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, value, error, onChange, type = 'text', placeholder,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[10px] uppercase tracking-wider text-[#d4a5a5]/60 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className={`w-full bg-[#2a171a]/60 border px-4 py-3 text-[#f3e6e6] text-sm placeholder-white/20 focus:outline-none focus:border-[#d4a5a5] transition-colors ${
          error ? 'border-red-400/60' : 'border-[#d4a5a5]/20'
        }`}
      />
      {error && <p className="text-red-400/80 text-[10px] mt-1">{error}</p>}
    </div>
  );
}
