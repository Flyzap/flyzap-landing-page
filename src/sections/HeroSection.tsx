
import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-flyzap-green/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-flyzap-green/10 blur-3xl rounded-full"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automatize seu atendimento com <span className="gradient-text">Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Bot para WhatsApp e Instagram com IA que atende como humano, responde dúvidas, qualifica leads e agenda consultas automaticamente.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="shadow-lg animate-pulse-neon"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar demonstração gratuita
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Mock phone with WhatsApp chat */}
              <div className="aspect-[9/16] bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="bg-[#128C7E] h-16 flex items-center p-4 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold">FlyZap Assistant</div>
                    <div className="text-xs opacity-70">Online</div>
                  </div>
                </div>
                
                <div className="bg-[#0B141A] p-4 h-full flex flex-col">
                  {/* Chat bubbles */}
                  <div className="bg-[#262D31] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] mb-4 self-start">
                    Olá! Gostaria de agendar uma consulta.
                  </div>
                  
                  <div className="bg-[#025C4C] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] mb-4 self-end">
                    Olá! Claro, posso te ajudar com o agendamento. 
                    Para qual especialidade você gostaria de agendar?
                  </div>
                  
                  <div className="bg-[#262D31] text-white p-3 rounded-lg rounded-tl-none max-w-[80%] mb-4 self-start">
                    Dermatologista
                  </div>
                  
                  <div className="bg-[#025C4C] text-white p-3 rounded-lg rounded-tr-none max-w-[80%] mb-4 self-end">
                    Perfeito! Temos horários disponíveis para consultas 
                    com a Dra. Ana Oliveira nos seguintes dias:
                    - 15/05 (Quinta) às 14h
                    - 16/05 (Sexta) às 10h
                    
                    Qual seria o melhor para você?
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-full h-full -top-4 -left-4 bg-flyzap-green/20 rounded-3xl blur-xl"></div>
              <div className="absolute -z-10 w-full h-full -bottom-4 -right-4 bg-flyzap-green/10 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
