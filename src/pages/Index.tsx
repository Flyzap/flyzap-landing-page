
import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../sections/HeroSection';
import BenefitsSection from '../sections/BenefitsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingSection from '../sections/PricingSection';
import SocialProofSection from '../sections/SocialProofSection';
import FinalCTASection from '../sections/FinalCTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-flyzap-black">
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
