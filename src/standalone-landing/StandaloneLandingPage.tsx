import React, { useState } from 'react';
import { useLandingSeo } from './seo/useLandingSeo';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ServiceAreaSection from './components/ServiceAreaSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { MobileActionBar } from './components/MobileActionBar';

interface StandaloneLandingPageProps {
  isRoot?: boolean;
}

export const StandaloneLandingPage: React.FC<StandaloneLandingPageProps> = ({
  isRoot = true,
}) => {
  // Apply isolated SEO metadata & schema markup without leaking brand names
  useLandingSeo({ isRoot });

  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white pb-16 md:pb-0">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ServicesSection onSelectService={handleSelectService} />
        <AboutSection />
        <ServiceAreaSection />
        <WhyUsSection />
        <FaqSection />
        <ContactSection initialSelectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
      />

      {/* Standalone Legal Modals (avoiding broken external routes) */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Sticky Mobile Call & Callback Bar */}
      <MobileActionBar />
    </div>
  );
};

export default StandaloneLandingPage;
