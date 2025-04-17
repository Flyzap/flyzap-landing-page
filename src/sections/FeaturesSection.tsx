
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import { Clock, MessageSquare, Users, TrendingUp } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Atendimento 24/7 automático',
      description: 'Seu negócio sempre disponível para atender clientes, mesmo quando você não está.'
    },
    {
      icon: MessageSquare,
      title: 'Integração com WhatsApp, Instagram e Site',
      description: 'Integração completa com os principais canais de comunicação utilizados pelos seus clientes.'
    },
    {
      icon: Users,
      title: 'IA que responde como humano',
      description: 'Tecnologia avançada que oferece respostas contextuais e naturais, indistinguíveis de um atendente humano.'
    },
    {
      icon: TrendingUp,
      title: 'Aumento real nas conversões',
      description: 'Transforme visitantes em clientes com atendimento rápido e eficiente em todos os momentos.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-flyzap-black to-flyzap-black-light py-20">
      <Container>
        <SectionHeading 
          title="Benefícios que transformam seu atendimento"
          subtitle="O FlyZap automatiza seu atendimento com inteligência artificial para otimizar sua operação e aumentar seus resultados."
          centered
          gradient
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
