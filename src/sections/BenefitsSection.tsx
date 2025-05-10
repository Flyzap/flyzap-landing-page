
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Calendar, Wrench, Clock } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-flyzap-black-light p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-flyzap-green/30 hover:shadow-lg hover:shadow-flyzap-green/10">
      <div className="w-16 h-16 rounded-full bg-flyzap-green/10 flex items-center justify-center mb-6 text-flyzap-green">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Calendar size={32} />,
      title: "Mais agendamentos",
      description: "Aumente em até 40% seus agendamentos com atendimento instantâneo e disponível 24 horas por dia, 7 dias por semana."
    },
    {
      icon: <Wrench size={32} />,
      title: "Menos trabalho manual",
      description: "Automatize tarefas repetitivas como responder às mesmas perguntas, confirmação de consultas e qualificação de leads."
    },
    {
      icon: <Clock size={32} />,
      title: "Atendimento 24h",
      description: "Nunca mais perca um cliente por estar fora do horário comercial. O FlyZap atende a qualquer hora, todos os dias."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-gradient-to-b from-flyzap-black to-flyzap-black-light">
      <Container>
        <SectionHeading 
          title="Principais benefícios" 
          subtitle="Veja como o FlyZap pode transformar seu atendimento e impulsionar seus resultados"
          centered
          gradient
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
