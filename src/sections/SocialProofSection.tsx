
import React from 'react';
import Container from '../components/Container';
import { Users, ThumbsUp, Clock, CheckCircle } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-flyzap-black-light rounded-xl p-6 border border-gray-800 flex flex-col items-center">
      <div className="text-flyzap-green mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2 gradient-text">{value}</div>
      <div className="text-gray-400 text-center">{label}</div>
    </div>
  );
};

const SocialProofSection: React.FC = () => {
  const metrics = [
    {
      icon: <Users size={28} />,
      value: "+120",
      label: "Clínicas atendidas"
    },
    {
      icon: <ThumbsUp size={28} />,
      value: "98%",
      label: "Satisfação dos clientes"
    },
    {
      icon: <Clock size={28} />,
      value: "24/7",
      label: "Disponibilidade"
    },
    {
      icon: <CheckCircle size={28} />,
      value: "+40%",
      label: "Aumento em agendamentos"
    }
  ];

  return (
    <section className="py-16 bg-flyzap-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FlyZap em números</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos ajudando centenas de clínicas e profissionais de saúde a automatizar seu atendimento e aumentar seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialProofSection;
