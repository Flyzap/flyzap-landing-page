
import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight, CalendarCheck } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-flyzap-black-light relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-flyzap-green/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-flyzap-green/10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-flyzap-green/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu <span className="gradient-text">atendimento</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como o FlyZap pode automatizar seu atendimento, 
            aumentar seus agendamentos e reduzir sua carga de trabalho.
          </p>
          
          <form className="max-w-md mx-auto mb-10">
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Nome completo" 
                className="w-full px-4 py-3 rounded-lg bg-flyzap-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-flyzap-green/50 focus:border-flyzap-green/50"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email profissional" 
                className="w-full px-4 py-3 rounded-lg bg-flyzap-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-flyzap-green/50 focus:border-flyzap-green/50"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="tel" 
                placeholder="WhatsApp" 
                className="w-full px-4 py-3 rounded-lg bg-flyzap-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-flyzap-green/50 focus:border-flyzap-green/50"
                required
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              className="w-full shadow-lg flex items-center justify-center gap-2"
            >
              <CalendarCheck size={20} />
              Agendar demonstração gratuita
            </Button>
          </form>
          
          <p className="text-gray-400">
            Atendemos em todo Brasil | Suporte humanizado | Configuração assistida
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
