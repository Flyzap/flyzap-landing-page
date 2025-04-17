
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Stethoscope, ShoppingBag, GraduationCap, Briefcase, Home, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BusinessTypeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({ icon: Icon, title, description, className, style }) => {
  return (
    <div className={cn(
      'p-6 bg-flyzap-black-light rounded-xl border border-gray-800 transition-all duration-300',
      'hover:border-flyzap-green/40 hover:shadow-[0_0_25px_rgba(0,255,135,0.15)]',
      className
    )}
    style={style}
    >
      <div className="w-12 h-12 rounded-full bg-flyzap-green/10 flex items-center justify-center mb-4">
        <Icon className="text-flyzap-green" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ForWhoSection: React.FC = () => {
  const businessTypes = [
    {
      icon: Stethoscope,
      title: 'Clínicas e Profissionais de Saúde',
      description: 'Automação de agendamentos, confirmações de consultas e triagem inicial de pacientes.'
    },
    {
      icon: ShoppingBag,
      title: 'Lojas e E-commerces',
      description: 'Atendimento ao cliente, suporte pós-venda e recomendação de produtos personalizada.'
    },
    {
      icon: GraduationCap,
      title: 'Escolas e Cursos',
      description: 'Informações sobre matrículas, respostas a dúvidas frequentes e acompanhamento de alunos.'
    },
    {
      icon: Briefcase,
      title: 'Escritórios e Prestadores de Serviços',
      description: 'Agendamento de reuniões, qualificação de leads e suporte técnico automatizado.'
    },
    {
      icon: Home,
      title: 'Imobiliárias',
      description: 'Atendimento inicial, qualificação de interesse e agendamento de visitas a imóveis.'
    },
    {
      icon: Utensils,
      title: 'Restaurantes',
      description: 'Reservas, pedidos online e programa de fidelidade automatizado.'
    }
  ];

  return (
    <section className="section-padding bg-flyzap-black py-20">
      <Container>
        <SectionHeading 
          title="Para quem é o FlyZap?"
          subtitle="O FlyZap foi desenvolvido para atender às necessidades de diversos tipos de negócios e profissionais."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((business, index) => (
            <BusinessTypeCard
              key={index}
              icon={business.icon}
              title={business.title}
              description={business.description}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-flyzap-black-light rounded-xl border border-gray-800 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Não encontrou seu tipo de negócio?</h3>
          <p className="text-gray-400 mb-6">O FlyZap pode ser personalizado para praticamente qualquer tipo de negócio que necessite de atendimento ao cliente, agendamentos ou automação de comunicação.</p>
          <a href="#" className="text-flyzap-green hover:text-flyzap-green-light hover:underline">Entre em contato para uma solução personalizada</a>
        </div>
      </Container>
    </section>
  );
};

export default ForWhoSection;
