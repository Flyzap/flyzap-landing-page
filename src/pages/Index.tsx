
import React from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import DemoSection from '../sections/DemoSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingSection from '../sections/PricingSection';
import IntegrationsSection from '../sections/IntegrationsSection';
import ForWhoSection from '../sections/ForWhoSection';
import CtaSection from '../sections/CtaSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-flyzap-black">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <ForWhoSection />
      <IntegrationsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
