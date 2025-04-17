
import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import StepCard from '../components/StepCard';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Você escolhe os fluxos',
      description: 'Selecione os fluxos de atendimento que deseja automatizar, desde agendamentos até respostas para dúvidas frequentes.'
    },
    {
      number: 2,
      title: 'Nós configuramos tudo',
      description: 'Nossa equipe especializada configura a plataforma com base no seu negócio, integrando com seus sistemas e canais de comunicação.'
    },
    {
      number: 3,
      title: 'Seu atendimento roda no piloto automático',
      description: 'O FlyZap passa a atender seus clientes automaticamente, agendando, respondendo e fidelizando, 24 horas por dia, 7 dias por semana.'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-flyzap-black-light py-20">
      <Container>
        <SectionHeading 
          title="Como funciona"
          subtitle="Em apenas três passos, você transforma seu atendimento e economiza tempo e recursos, aumentando sua eficiência e vendas."
          centered
          gradient
        />
        
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-6 left-6 h-[calc(100%-24px)] w-px bg-gradient-to-b from-flyzap-green/80 to-flyzap-green/0 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <StepCard
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </div>
                
                <div className="w-full md:w-1/2 bg-flyzap-black rounded-xl border border-gray-800 p-4 h-64 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: `${(index * 0.2) + 0.1}s` }}>
                  {index === 0 && (
                    <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                      <div className="bg-flyzap-black-light rounded-lg p-3 border border-gray-800 hover:border-flyzap-green/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-flyzap-green/20 mb-2 flex items-center justify-center">
                          <span className="text-flyzap-green text-xs">1</span>
                        </div>
                        <p className="text-sm">Agendamento</p>
                      </div>
                      <div className="bg-flyzap-black-light rounded-lg p-3 border border-gray-800 hover:border-flyzap-green/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-flyzap-green/20 mb-2 flex items-center justify-center">
                          <span className="text-flyzap-green text-xs">2</span>
                        </div>
                        <p className="text-sm">Atendimento</p>
                      </div>
                      <div className="bg-flyzap-black-light rounded-lg p-3 border border-gray-800 hover:border-flyzap-green/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-flyzap-green/20 mb-2 flex items-center justify-center">
                          <span className="text-flyzap-green text-xs">3</span>
                        </div>
                        <p className="text-sm">FAQ</p>
                      </div>
                      <div className="bg-flyzap-black-light rounded-lg p-3 border border-gray-800 hover:border-flyzap-green/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-flyzap-green/20 mb-2 flex items-center justify-center">
                          <span className="text-flyzap-green text-xs">4</span>
                        </div>
                        <p className="text-sm">Vendas</p>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="relative w-full max-w-sm p-4">
                      <div className="h-8 w-full bg-gray-800 rounded-t-lg flex items-center px-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="border border-gray-800 rounded-b-lg p-4">
                        <div className="w-full h-4 bg-gray-800 rounded-full mb-3"></div>
                        <div className="w-3/4 h-4 bg-gray-800 rounded-full mb-3"></div>
                        <div className="w-full h-4 bg-gray-800 rounded-full mb-3"></div>
                        <div className="w-2/3 h-4 bg-gray-800 rounded-full"></div>
                        
                        <div className="mt-6 flex justify-between">
                          <div className="px-3 py-1 rounded-full bg-flyzap-green/20 text-flyzap-green text-xs">Configurando...</div>
                          <div className="px-3 py-1 rounded-full bg-flyzap-green text-flyzap-black text-xs">100%</div>
                        </div>
                      </div>
                      
                      <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-flyzap-green/30 animate-pulse"></div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="relative max-w-xs w-full">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-lg font-semibold gradient-text">FlyZap ativo</div>
                        <div className="px-2 py-1 rounded-full bg-flyzap-green/20 text-flyzap-green text-xs flex items-center">
                          <span className="w-2 h-2 rounded-full bg-flyzap-green mr-2 animate-pulse"></span>
                          Online
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-flyzap-black-light p-3 rounded-lg border border-gray-800">
                          <p className="text-xs text-gray-400 mb-1">Atendimentos</p>
                          <p className="text-2xl font-bold">2,450</p>
                          <div className="w-full h-1 bg-gray-800 mt-2">
                            <div className="h-1 bg-flyzap-green rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <div className="bg-flyzap-black-light p-3 rounded-lg border border-gray-800">
                          <p className="text-xs text-gray-400 mb-1">Tempo médio</p>
                          <p className="text-2xl font-bold">1.2m</p>
                          <div className="w-full h-1 bg-gray-800 mt-2">
                            <div className="h-1 bg-flyzap-green rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div className="bg-flyzap-black-light p-3 rounded-lg border border-gray-800">
                          <p className="text-xs text-gray-400 mb-1">Conversões</p>
                          <p className="text-2xl font-bold">42%</p>
                          <div className="w-full h-1 bg-gray-800 mt-2">
                            <div className="h-1 bg-flyzap-green rounded-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>
                        <div className="bg-flyzap-black-light p-3 rounded-lg border border-gray-800">
                          <p className="text-xs text-gray-400 mb-1">Satisfação</p>
                          <p className="text-2xl font-bold">98%</p>
                          <div className="w-full h-1 bg-gray-800 mt-2">
                            <div className="h-1 bg-flyzap-green rounded-full" style={{ width: '98%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
