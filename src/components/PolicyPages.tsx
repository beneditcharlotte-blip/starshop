import React, { useState } from 'react';

const pageClass = "min-h-screen bg-[#3a1f24] text-[#f3e6e6] font-serif";
const containerClass = "container mx-auto px-4 py-20 max-w-3xl";
const headingClass = "text-4xl italic font-light text-[#d4a5a5] mb-4";
const subheadingClass = "text-sm uppercase tracking-[0.2em] text-[#d4a5a5]/60 mb-12";
const sectionTitleClass = "text-xl font-light text-[#d4a5a5] mt-10 mb-3";
const bodyClass = "text-[#f3e6e6]/70 font-light leading-relaxed text-sm";
const dividerClass = "w-12 h-[1px] bg-[#d4a5a5]/30 my-8";

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
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#d4a5a5]/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-[#f3e6e6]/80 hover:text-[#d4a5a5] transition-colors text-sm font-light tracking-wide"
      >
        <span>{q}</span>
        <span className="text-[#d4a5a5] text-lg ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-[#f3e6e6]/60 text-sm font-light leading-relaxed">{a}</p>}
    </div>
  );
}

export function FAQPage() {
  const faqs = [
    {
      q: "Are your crystals natural or synthetic?",
      a: "All our crystals are 100% natural gemstones sourced ethically. Because they are natural, slight variations in color, pattern, and size are expected — this is a sign of authenticity, not a defect."
    },
    {
      q: "How do I know which crystal is right for me?",
      a: "We recommend starting with your zodiac sign — each constellation has crystals aligned with its energy. Browse our Zodiac Collection or use our 'Find Your Crystal' guide on the Shop page."
    },
    {
      q: "How do I care for my crystal jewelry?",
      a: "Keep crystals away from direct sunlight for extended periods, avoid water contact (especially for softer stones), and store in the pouch provided. Cleanse your crystals monthly under moonlight or with sage smoke to restore their energy."
    },
    {
      q: "Can I track my order?",
      a: "Yes. You'll receive a tracking number via email once your order ships. Please allow 1–3 business days for processing before tracking updates appear."
    },
    {
      q: "Do you offer gift packaging?",
      a: "Yes — all orders are shipped in our signature matte black box with a ribbon and a crystal care card, making every purchase gift-ready at no extra cost."
    },
    {
      q: "What if my item arrives damaged?",
      a: "Please email us at hello@astrophilandstella.com within 7 days of delivery with a photo. We'll send a replacement immediately, free of charge."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship worldwide. Delivery times vary by destination (7–25 business days). Free shipping applies on orders over $55, globally."
    },
    {
      q: "Can I change or cancel my order?",
      a: "Orders can be modified or cancelled within 24 hours of placement. After that, the order may already be in fulfillment. Contact us at hello@astrophilandstella.com as soon as possible."
    },
  ];

  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Frequently Asked Questions</h1>
        <p className={subheadingClass}>Everything you need to know</p>
        <div className={dividerClass} />
        <div>
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </div>
  );
}

// ─── Contact ──────────────────────────────────────────────────────
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
    <div className={pageClass}>
      <div className={containerClass}>
        <h1 className={headingClass}>Contact Us</h1>
        <p className={subheadingClass}>We reply within 24–48 hours</p>
        <div className={dividerClass} />

        <p className={`${bodyClass} mb-8`}>
          Have a question about your order, a crystal, or anything else? We'd love to hear from you. You can also reach us directly at{' '}
          <a href="mailto:hello@astrophilandstella.com" className="text-[#d4a5a5] hover:underline">
            hello@astrophilandstella.com
          </a>
        </p>

        {sent ? (
          <div className="text-center py-16">
            <p className="text-2xl italic text-[#d4a5a5] mb-3">✦ Message received</p>
            <p className={bodyClass}>We'll get back to you within 24–48 hours.</p>
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
      </div>
    </div>
  );
}
