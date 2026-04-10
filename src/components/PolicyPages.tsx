import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageWrapper } from './layout/PageWrapper';
import {
  Wind, Sparkles, Droplets, Gem, Box, Sun, Moon, Flame, Music2,
  Mail, MessageSquare, Send,
  Package, RefreshCw, HelpCircle,
} from 'lucide-react';

// Shared style tokens (used by Privacy, Terms, ReturnPolicy, ShippingPolicy)
const pageClass = "min-h-screen bg-[#3a1f24] text-[#f3e6e6] font-serif";
const containerClass = "container mx-auto px-4 py-20 max-w-3xl";
const headingClass = "text-4xl italic font-light text-[#d4a5a5] mb-4";
const subheadingClass = "text-sm uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-12";
const sectionTitleClass = "text-xl font-light text-[#d4a5a5] mt-10 mb-3";
const bodyClass = "text-[#f3e6e6]/70 font-light leading-relaxed text-sm";
const dividerClass = "w-12 h-[1px] bg-[#d4a5a5]/30 my-8";

// ─── Care Guide ──────────────────────────────────────────────────────────────

const cleansingMethods = [
  {
    Icon: Moon,
    name: 'Moonlight',
    description: 'Place crystals on a windowsill or outdoors under a full moon overnight. Retrieve before direct morning sun. Universally safe — no stone is harmed by moonlight.',
    badge: 'Safe for all stones',
  },
  {
    Icon: Flame,
    name: 'Smoke',
    description: 'Pass each piece through sage, palo santo, or cedar smoke for 20–30 seconds. Hold a clear intention of purification as you move the crystal through the plume.',
    badge: 'Safe for all stones',
  },
  {
    Icon: Music2,
    name: 'Sound',
    description: 'Strike a singing bowl or tuning fork and let the resonance wash over your collection. Cleanses multiple pieces at once — ideal for larger sets.',
    badge: 'Safe for all stones',
  },
];

const chargingMethods = [
  {
    title: 'Selenite Slab',
    description: 'Place crystals directly on a Selenite charging plate overnight. Selenite self-cleanses and will simultaneously purify and amplify any stone resting on it.',
  },
  {
    title: 'Clear Quartz Cluster',
    description: 'Nestle your pieces within or beside a Clear Quartz cluster. Quartz is a natural amplifier — it draws out residual energy and restores a stone\'s native vibration.',
  },
  {
    title: 'Intention Setting',
    description: 'Hold the stone in both hands, close your eyes, and breathe a specific intention into it. Visualize warm light filling every facet. Your focused energy is the charge.',
  },
];

const waterSensitiveStones = ['Selenite', 'Malachite', 'Pyrite', 'Celestite', 'Lepidolite', 'Calcite', 'Halite', 'Raw / Porous'];
const sunSensitiveStones   = ['Amethyst', 'Rose Quartz', 'Citrine', 'Aquamarine', 'Fluorite', 'Kunzite', 'Opal'];

const avoidList = [
  'Swimming, bathing & showering',
  'Applying perfume, lotion or makeup',
  'Exercise & high-impact activity',
  'Prolonged direct sunlight or window heat',
];

const bestPracticesList = [
  'Wipe with a soft, dry cloth after every wear',
  'Store in the provided silk or velvet pouch',
  'Cleanse monthly under moonlight or with sage',
  'Remove before any chemical contact',
];

const storageTips = [
  { title: 'Pouches', description: 'Each piece lives in its own silk or velvet pouch. The lining prevents surface micro-scratches that dull a stone\'s lustre over time.' },
  { title: 'Separation', description: 'Hard stones such as Quartz and Topaz can scratch softer ones like Selenite and Calcite. Keep them apart, even inside a jewellery box.' },
  { title: 'Environment', description: 'Choose a cool, dry spot away from direct heat and humidity. Bathroom surfaces and sunny windowsills are the two most common culprits.' },
];

export function CareGuidePage() {
  return (
    <PageWrapper className="pb-24 pt-28" id="care-guide">
      <div className="container mx-auto px-6 max-w-4xl space-y-24">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-5"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Care</p>
          <h1 className="font-serif text-5xl md:text-6xl italic text-[#d4a5a5]">Crystal Care Guide</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#d4a5a5]/20" />
            <span className="text-[#d4a5a5]/40 text-sm">✦</span>
            <div className="h-[1px] w-16 bg-[#d4a5a5]/20" />
          </div>
          <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
            Preserve the energy and beauty of your stones with these simple rituals.
          </p>
        </motion.div>

        {/* ── Cleansing — 3 cards ────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Wind size={18} className="text-[#d4a5a5] flex-shrink-0" />
            <h2 className="font-serif text-2xl text-[#d4a5a5]">Cleansing Methods</h2>
            <div className="flex-1 h-[1px] bg-[#d4a5a5]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cleansingMethods.map(({ Icon, name, description, badge }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#3a1f24] border border-[#d4a5a5]/10 hover:border-[#d4a5a5]/30 transition-colors p-7 flex flex-col gap-5"
              >
                <Icon size={28} className="text-[#d4a5a5]/70" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-serif text-lg text-[#d4a5a5]">{name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                </div>
                <span className="self-start text-[10px] uppercase tracking-widest text-[#d4a5a5]/50 border border-[#d4a5a5]/20 px-3 py-1">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-white/30 text-center tracking-wide">
            ✦ &nbsp; Cleanse at least once a month, or after periods of heavy use or emotional intensity
          </p>
        </motion.section>

        {/* ── Charging — numbered steps ──────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Sparkles size={18} className="text-[#d4a5a5] flex-shrink-0" />
            <h2 className="font-serif text-2xl text-[#d4a5a5]">Charging Your Crystals</h2>
            <div className="flex-1 h-[1px] bg-[#d4a5a5]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chargingMethods.map(({ title, description }, i) => (
              <div key={title} className="flex gap-5 items-start">
                <span className="text-6xl font-serif text-[#d4a5a5]/8 leading-none select-none flex-shrink-0" style={{ color: 'rgba(212,165,165,0.08)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/70">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Water & Sunlight — tag panels ─────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Droplets size={18} className="text-[#d4a5a5] flex-shrink-0" />
            <h2 className="font-serif text-2xl text-[#d4a5a5]">Water &amp; Sunlight</h2>
            <div className="flex-1 h-[1px] bg-[#d4a5a5]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Water panel */}
            <div className="border border-[#d4a5a5]/15 p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Droplets size={13} className="text-[#d4a5a5]/50" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a5a5]/50">Keep Dry — Sensitive to Water</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {waterSensitiveStones.map(s => (
                  <span key={s} className="text-xs px-3 py-1 bg-[#d4a5a5]/5 border border-[#d4a5a5]/15 text-white/55 rounded-none">
                    {s}
                  </span>
                ))}
              </div>
              <div className="border-t border-[#d4a5a5]/10 pt-4 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-[#d4a5a5]/40">Safe to briefly rinse</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  Quartz · Amethyst — cool running water only. Dry immediately and thoroughly.
                </p>
              </div>
            </div>

            {/* Sunlight panel */}
            <div className="border border-[#d4a5a5]/15 p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Sun size={13} className="text-[#d4a5a5]/50" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a5a5]/50">Colour Fades in Direct Sunlight</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {sunSensitiveStones.map(s => (
                  <span key={s} className="text-xs px-3 py-1 bg-[#d4a5a5]/5 border border-[#d4a5a5]/15 text-white/55 rounded-none">
                    {s}
                  </span>
                ))}
              </div>
              <div className="border-t border-[#d4a5a5]/10 pt-4 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-[#d4a5a5]/40">What's safe</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  Brief morning light is fine. Never leave crystals on a sunny windowsill for hours.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Jewelry Care — do / don't ──────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Gem size={18} className="text-[#d4a5a5] flex-shrink-0" />
            <h2 className="font-serif text-2xl text-[#d4a5a5]">Jewelry Care</h2>
            <div className="flex-1 h-[1px] bg-[#d4a5a5]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#3a1f24] p-6 space-y-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">Avoid</p>
              <ul className="space-y-4">
                {avoidList.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                    <span className="text-[#d4a5a5]/30 text-base leading-tight mt-0.5 flex-shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#3a1f24] p-6 space-y-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">Best Practices</p>
              <ul className="space-y-4">
                {bestPracticesList.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                    <span className="text-[#d4a5a5]/60 text-base leading-tight mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ── Storage — left-border tips ─────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Box size={18} className="text-[#d4a5a5] flex-shrink-0" />
            <h2 className="font-serif text-2xl text-[#d4a5a5]">Storage</h2>
            <div className="flex-1 h-[1px] bg-[#d4a5a5]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storageTips.map(({ title, description }) => (
              <div key={title} className="border-l-2 border-[#d4a5a5]/25 pl-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60">{title}</p>
                <p className="text-sm text-white/50 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Footer CTA ─────────────────────────────────────── */}
        <div className="border border-[#d4a5a5]/20 p-6 text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]">Need Guidance?</p>
          <p className="text-sm text-white/50 leading-relaxed">
            Unsure about a specific stone? Email us at{' '}
            <span className="text-[#d4a5a5]">hello@astrophilandstella.com</span>{' '}
            and we'll guide you personally.
          </p>
        </div>

      </div>
    </PageWrapper>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────
export function PrivacyPolicyPage() {
  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Privacy Policy</h1>
        <p className={subheadingClass}>Last updated: March 2026</p>
        <div className={dividerClass} />

        <h2 className={sectionTitleClass}>Information We Collect</h2>
        <p className={bodyClass}>
          We collect information you provide directly: name, email address, shipping address, and payment details when you place an order. We also collect browsing data (pages visited, time on site) via cookies and analytics tools to improve your experience.
        </p>

        <h2 className={sectionTitleClass}>How We Use Your Information</h2>
        <p className={bodyClass}>
          Your information is used to process and fulfill orders, send order confirmations and shipping updates, send newsletter emails (only if you subscribed), and improve our website experience. We do not sell your personal data to third parties.
        </p>

        <h2 className={sectionTitleClass}>Third-Party Services</h2>
        <p className={bodyClass}>
          We use Stripe for payment processing — your card details are handled directly by Stripe and never stored on our servers. We use Google Analytics to understand site traffic. Each service has its own privacy policy.
        </p>

        <h2 className={sectionTitleClass}>Your Rights (GDPR & CCPA)</h2>
        <p className={bodyClass}>
          You have the right to access, correct, or delete your personal data at any time. To make a request, email us at hello@astrophilandstella.com. EU residents may also lodge a complaint with their local data protection authority.
        </p>

        <h2 className={sectionTitleClass}>Cookies</h2>
        <p className={bodyClass}>
          We use essential cookies to keep your shopping cart active and analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings, though some features may not function correctly.
        </p>

        <h2 className={sectionTitleClass}>Contact</h2>
        <p className={bodyClass}>
          Questions about this policy? Email us at hello@astrophilandstella.com.
        </p>
      </div>
    </div>
  );
}

// ─── Terms of Service ─────────────────────────────────────────────
export function TermsPage() {
  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Terms of Service</h1>
        <p className={subheadingClass}>Last updated: March 2026</p>
        <div className={dividerClass} />

        <h2 className={sectionTitleClass}>Acceptance of Terms</h2>
        <p className={bodyClass}>
          By accessing and purchasing from Astrophil and Stella, you agree to these terms. If you do not agree, please do not use our site.
        </p>

        <h2 className={sectionTitleClass}>Products & Pricing</h2>
        <p className={bodyClass}>
          All prices are listed in USD. We reserve the right to modify prices at any time. Product images are representative — natural crystal stones may vary slightly in color, pattern, and size, as each piece is unique.
        </p>

        <h2 className={sectionTitleClass}>Order Acceptance</h2>
        <p className={bodyClass}>
          Placing an order does not guarantee acceptance. We reserve the right to cancel any order at our discretion, in which case a full refund will be issued. You will receive an email confirmation once your order is accepted and fulfilled.
        </p>

        <h2 className={sectionTitleClass}>Crystal & Healing Disclaimer</h2>
        <p className={bodyClass}>
          Our crystal jewelry is sold for aesthetic, symbolic, and personal intention purposes. We make no medical or therapeutic claims. Crystals are not a substitute for professional medical advice, diagnosis, or treatment.
        </p>

        <h2 className={sectionTitleClass}>Intellectual Property</h2>
        <p className={bodyClass}>
          All content on this site — including text, imagery, and branding — is the property of Astrophil and Stella. You may not reproduce or redistribute any content without written permission.
        </p>

        <h2 className={sectionTitleClass}>Governing Law</h2>
        <p className={bodyClass}>
          These terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association.
        </p>
      </div>
    </div>
  );
}

// ─── Return Policy ────────────────────────────────────────────────
export function ReturnPolicyPage() {
  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Return & Refund Policy</h1>
        <p className={subheadingClass}>30-Day Satisfaction Guarantee</p>
        <div className={dividerClass} />

        <h2 className={sectionTitleClass}>Our Promise</h2>
        <p className={bodyClass}>
          We want you to love your crystals. If for any reason you're not fully satisfied, we accept returns within <strong className="text-[#d4a5a5]">30 days</strong> of delivery — no questions asked.
        </p>

        <h2 className={sectionTitleClass}>Eligibility</h2>
        <p className={bodyClass}>
          Items must be returned in their original condition and packaging. Personalized or custom-engraved pieces are not eligible for return unless damaged or defective.
        </p>

        <h2 className={sectionTitleClass}>How to Return</h2>
        <p className={bodyClass}>
          1. Email us at hello@astrophilandstella.com with your order number and reason for return.<br />
          2. We'll send you a return shipping label within 1–2 business days.<br />
          3. Pack the item securely and drop it off at any shipping carrier location.<br />
          4. Once we receive and inspect the item, your refund will be processed within <strong className="text-[#d4a5a5]">5–7 business days</strong>.
        </p>

        <h2 className={sectionTitleClass}>Damaged or Defective Items</h2>
        <p className={bodyClass}>
          If your item arrives damaged, please email us within 7 days of delivery with a photo of the damage. We will send a replacement at no charge.
        </p>

        <h2 className={sectionTitleClass}>Refund Method</h2>
        <p className={bodyClass}>
          Refunds are issued to your original payment method. Shipping costs are non-refundable unless the return is due to our error or a defective product.
        </p>
      </div>
    </div>
  );
}

// ─── Shipping Policy ──────────────────────────────────────────────
export function ShippingPolicyPage() {
  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Shipping Policy</h1>
        <p className={subheadingClass}>Free shipping on orders over $55</p>
        <div className={dividerClass} />

        <h2 className={sectionTitleClass}>Processing Time</h2>
        <p className={bodyClass}>
          Orders are processed within 1–3 business days. You will receive a shipping confirmation email with a tracking number once your order has been dispatched.
        </p>

        <h2 className={sectionTitleClass}>Delivery Times</h2>
        <p className={bodyClass}>
          <strong className="text-[#d4a5a5]">United States:</strong> 7–15 business days<br />
          <strong className="text-[#d4a5a5]">Canada & Australia:</strong> 10–20 business days<br />
          <strong className="text-[#d4a5a5]">Europe:</strong> 10–18 business days<br />
          <strong className="text-[#d4a5a5]">Rest of World:</strong> 14–25 business days
        </p>
        <p className={`${bodyClass} mt-3`}>
          Delivery times are estimates and may vary due to customs processing, holidays, or carrier delays beyond our control.
        </p>

        <h2 className={sectionTitleClass}>Shipping Rates</h2>
        <p className={bodyClass}>
          <strong className="text-[#d4a5a5]">Free shipping</strong> on all orders over $55.<br />
          Standard shipping: $4.99 for orders under $55.
        </p>

        <h2 className={sectionTitleClass}>Customs & Duties</h2>
        <p className={bodyClass}>
          International orders may be subject to customs fees or import duties in the destination country. These charges are the responsibility of the recipient and are not included in our prices or shipping fees.
        </p>

        <h2 className={sectionTitleClass}>Lost or Undelivered Packages</h2>
        <p className={bodyClass}>
          If your package has not arrived within the estimated timeframe, please contact us at hello@astrophilandstella.com. We will work with the carrier to locate your shipment or arrange a replacement.
        </p>
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────

const faqSections = [
  {
    icon: Package,
    title: 'Orders & Shipping',
    faqs: [
      {
        q: 'Can I track my order?',
        a: "You'll receive a tracking number via email once your order ships. Please allow 1–3 business days for processing before tracking updates appear.",
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide. Delivery times vary by destination (7–25 business days). Free shipping applies on orders over $55, globally.',
      },
      {
        q: 'Can I change or cancel my order?',
        a: 'Orders can be modified or cancelled within 24 hours of placement. After that, the order may already be in fulfillment. Contact us at hello@astrophilandstella.com as soon as possible.',
      },
    ],
  },
  {
    icon: Gem,
    title: 'Products & Crystals',
    faqs: [
      {
        q: 'Are your crystals natural or synthetic?',
        a: 'All our crystals are 100% natural gemstones sourced ethically. Slight variations in color, pattern, and size are expected — this is a sign of authenticity, not a defect.',
      },
      {
        q: 'How do I know which crystal is right for me?',
        a: "We recommend starting with your zodiac sign — each constellation has crystals aligned with its energy. Browse our Zodiac Collection or use the 'Find Your Crystal' guide on the Shop page.",
      },
      {
        q: 'What if my item arrives damaged?',
        a: "Please email us at hello@astrophilandstella.com within 7 days of delivery with a photo. We'll send a replacement immediately, free of charge.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: 'Returns & Packaging',
    faqs: [
      {
        q: 'Do you offer gift packaging?',
        a: 'Yes — all orders are shipped in our signature matte black box with a ribbon and a crystal care card, making every purchase gift-ready at no extra cost.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email us at hello@astrophilandstella.com with your order number and reason. We accept returns within 30 days of delivery and will send a prepaid label within 1–2 business days.',
      },
    ],
  },
  {
    icon: HelpCircle,
    title: 'Crystal Care',
    faqs: [
      {
        q: 'How do I care for my crystal jewelry?',
        a: 'Keep crystals away from direct sunlight for extended periods, avoid water contact (especially for softer stones), and store in the pouch provided. Cleanse monthly under moonlight or with sage smoke to restore their energy.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#d4a5a5]/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-[#f3e6e6]/80 hover:text-[#d4a5a5] transition-colors text-sm font-light tracking-wide"
      >
        <span>{q}</span>
        <span className="text-[#d4a5a5] text-lg ml-4 flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-[#f3e6e6]/60 text-sm font-light leading-relaxed">{a}</p>}
    </div>
  );
}

export function FAQPage() {
  return (
    <PageWrapper className="pb-24 pt-28" id="faq">
      <div className="container mx-auto px-6 max-w-3xl space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Support</p>
          <h1 className="font-serif text-5xl italic text-[#d4a5a5]">Frequently Asked Questions</h1>
          <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
            Everything you need to know about our crystals, orders, and policies.
          </p>
        </motion.div>

        {faqSections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-3 border-b border-[#d4a5a5]/20 pb-4 mb-2">
                <Icon size={18} className="text-[#d4a5a5]" />
                <h2 className="font-serif text-xl text-[#d4a5a5]">{section.title}</h2>
              </div>
              {section.faqs.map(faq => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          );
        })}

        <div className="border border-[#d4a5a5]/20 p-6 text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4a5a5]">Still have questions?</p>
          <p className="text-sm text-white/50 leading-relaxed">
            Email us at <span className="text-[#d4a5a5]">hello@astrophilandstella.com</span> — we reply within 24–48 hours.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── Contact ──────────────────────────────────────────────────────

const contactInfoData = [
  {
    icon: Mail,
    title: 'Get in Touch',
    items: [
      { label: 'Email', value: 'hello@astrophilandstella.com' },
      { label: 'Response time', value: 'Within 24–48 hours' },
      { label: 'Support hours', value: 'Monday–Friday, 9am–6pm EST' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'Common Topics',
    items: [
      { label: 'Orders & tracking', value: 'Include your order number for the fastest response.' },
      { label: 'Returns', value: 'Email with order number and a photo if the item is damaged.' },
      { label: 'Product questions', value: 'Ask us about any crystal, stone type, or jewelry piece.' },
      { label: 'Wholesale', value: 'Include your business name and location for enquiries.' },
    ],
  },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.email.includes('@') && form.message) {
      setSent(true);
    }
  }

  return (
    <PageWrapper className="pb-24 pt-28" id="contact">
      <div className="container mx-auto px-6 max-w-3xl space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a5a5]/60">Support</p>
          <h1 className="font-serif text-5xl italic text-[#d4a5a5]">Contact Us</h1>
          <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
            We reply to every message within 24–48 hours. We'd love to hear from you.
          </p>
        </motion.div>

        {contactInfoData.map((section, i) => {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3 border-b border-[#d4a5a5]/20 pb-4">
            <Send size={18} className="text-[#d4a5a5]" />
            <h2 className="font-serif text-xl text-[#d4a5a5]">Send a Message</h2>
          </div>

          {sent ? (
            <div className="text-center py-16">
              <p className="text-2xl italic text-[#d4a5a5] mb-3">✦ Message received</p>
              <p className="text-sm text-white/50">We'll get back to you within 24–48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-[#d4a5a5]/30 py-2 text-[#f3e6e6] placeholder-white/20 outline-none focus:border-[#d4a5a5]/60 transition-colors text-sm font-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-[#d4a5a5]/30 py-2 text-[#f3e6e6] placeholder-white/20 outline-none focus:border-[#d4a5a5]/60 transition-colors text-sm font-light"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-[#d4a5a5]/30 py-2 text-[#f3e6e6] placeholder-white/20 outline-none focus:border-[#d4a5a5]/60 transition-colors text-sm font-light resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-10 py-3 border border-[#d4a5a5]/40 text-[#d4a5a5] uppercase tracking-[0.2em] text-xs hover:bg-[#d4a5a5]/10 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
