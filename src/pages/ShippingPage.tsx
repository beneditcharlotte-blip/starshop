import React from 'react';
import { motion } from 'motion/react';
import { Truck, RefreshCw, ShieldCheck, MapPin } from 'lucide-react';
import { PageWrapper } from '../components/layout/PageWrapper';

const sections = [
  {
    icon: Truck,
    title: 'Shipping',
    items: [
      { label: 'Standard Shipping', value: '$4.99 · 7–14 business days' },
      { label: 'Free Shipping', value: 'Orders over $55 · 7–14 business days' },
      { label: 'Express Shipping', value: '$12.99 · 3–5 business days' },
      { label: 'Processing Time', value: '1–3 business days before dispatch' },
    ],
  },
  {
    icon: MapPin,
    title: 'Delivery Regions',
    items: [
      { label: 'United States', value: 'All 50 states · Standard & Express available' },
      { label: 'Canada & UK', value: 'Standard shipping · 10–18 business days' },
      { label: 'Europe', value: 'Standard shipping · 10–20 business days' },
      { label: 'Rest of World', value: 'Standard shipping · 14–25 business days' },
    ],
  },
  {
    icon: RefreshCw,
    title: 'Returns & Exchanges',
    items: [
      { label: 'Return Window', value: '30 days from delivery date' },
      { label: 'Condition', value: 'Unworn, in original packaging' },
      { label: 'Refund Method', value: 'Original payment method · 5–10 business days' },
      { label: 'Exchanges', value: 'Free exchange for a different size or product' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Our Guarantee',
    items: [
      { label: 'Damaged on Arrival', value: 'Full refund or replacement, no questions asked' },
      { label: 'Lost Package', value: 'We reship at no cost after 30-day investigation' },
      { label: 'Crystal Quality', value: 'All stones are natural and ethically sourced' },
      { label: 'Support', value: 'hello@astrophilandstella.com · reply within 24h' },
    ],
  },
];

export function ShippingPage() {
  return (
    <PageWrapper className="pb-24 pt-28" id="shipping">
      <div className="container mx-auto px-6 max-w-3xl space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Policies</p>
          <h1 className="font-serif text-5xl italic text-[#d4a5a5]">Shipping & Returns</h1>
          <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
            We want your celestial artifacts to arrive safely and to bring you joy. If anything falls short, we'll make it right.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 border-b border-[#d4a5a5]/20 pb-4">
                <Icon size={18} className="text-[#d4a5a5]" />
                <h2 className="font-serif text-xl text-[#d4a5a5]">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map(item => (
                  <div key={item.label} className="flex justify-between items-start gap-8">
                    <span className="text-xs uppercase tracking-wider text-white/40 flex-shrink-0 w-40">{item.label}</span>
                    <span className="text-sm text-[#f3e6e6]/80 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Note */}
        <div className="border border-[#d4a5a5]/20 p-6 text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]">How to Start a Return</p>
          <p className="text-sm text-white/50 leading-relaxed">
            Email us at <span className="text-[#d4a5a5]">hello@astrophilandstella.com</span> with your order number and reason.
            We'll respond within 24 hours with a prepaid return label.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
