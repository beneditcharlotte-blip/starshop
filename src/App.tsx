import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { useHashRouter } from './hooks/useHashRouter';
import { Hero } from './components/Hero';
import { ZodiacSelector } from './components/ZodiacSelector';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartSidebar } from './components/CartSidebar';
import { ZodiacPage } from './pages/ZodiacPage';
import { StoryPage } from './pages/StoryPage';
import { MoonPhasePage } from './pages/MoonPhasePage';
import { ProtectionAmuletsPage } from './pages/ProtectionAmuletsPage';
import { ShopPage } from './pages/ShopPage';
import { ShippingPage } from './pages/ShippingPage';
import { ReviewsSection } from './components/ReviewsSection';
import {
  CareGuidePage,
  FAQPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  ReturnPolicyPage,
} from './components/PolicyPages';

export default function App() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const currentView = useHashRouter();

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#4A252C] text-[#f3e6e6] font-serif selection:bg-[#d4a5a5] selection:text-[#4A252C]">
        <Navbar currentView={currentView} />

        {currentView === 'home' && (
          <>
            <Hero />
            <main className="container mx-auto px-4 py-12 space-y-24">
              {/* Philosophy */}
              <section id="philosophy" className="max-w-2xl mx-auto text-center space-y-8 py-12">
                <span className="text-[#d4a5a5] text-2xl font-serif italic">Astrophil and Stella</span>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#f3e6e6]/80">
                  In the silence of the cosmos, every stone holds a memory.
                  Like the eternal dance between Astrophil and his Stella, our jewelry bridges the gap between the earthly and the celestial—carrying the ancient wisdom of the constellations against your skin.
                </p>
                <div className="w-16 h-[1px] bg-[#d4a5a5]/40 mx-auto" />
              </section>

              {/* Zodiac selector */}
              <section id="zodiac">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-4xl md:text-5xl italic font-light tracking-wider text-[#d4a5a5]">
                    Choose Your Sign
                  </h2>
                  <p className="text-sm tracking-widest uppercase opacity-80">
                    Discover the crystals aligned with your stars
                  </p>
                </div>
                <ZodiacSelector selectedSign={selectedSign} onSelect={setSelectedSign} />
              </section>

              {/* Product grid */}
              <section id="shop-page">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-4xl md:text-5xl italic font-light tracking-wider text-[#d4a5a5]">
                    {selectedSign ? `${selectedSign} Collection` : 'All Treasures'}
                  </h2>
                  <p className="text-sm tracking-widest uppercase opacity-80">
                    {selectedSign
                      ? `Curated stones for the ${selectedSign} soul`
                      : 'Handcrafted crystal jewelry for every destiny'}
                  </p>
                </div>
                <ProductList selectedSign={selectedSign} />
              </section>

              {/* Reviews */}
              <ReviewsSection />
            </main>
          </>
        )}

        {currentView === 'zodiac' && <ZodiacPage />}
        {currentView === 'story' && <StoryPage />}
        {currentView === 'moon-phase' && <MoonPhasePage />}
        {currentView === 'protection' && <ProtectionAmuletsPage />}
        {currentView === 'shop' && <ShopPage />}
        {currentView === 'shipping' && <ShippingPage />}
        {currentView === 'care-guide' && <CareGuidePage />}
        {currentView === 'faq' && <FAQPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'privacy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsPage />}
        {currentView === 'returns' && <ReturnPolicyPage />}

        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
