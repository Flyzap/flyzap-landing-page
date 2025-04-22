
import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowDown } from 'lucide-react';
const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-flyzap-black to-flyzap-black-light opacity-80 z-0"></div>
      
      {/* Animated gradient background */}
      <div className="absolute top-0 left-0 right-0 h-1/2 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-flyzap-green/5 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-full bg-flyzap-green/10 blur-3xl rounded-full transform -translate-x-1/4 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <Container className="relative z-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start animate-fade-in-up">
            <h1 className="heading-xl mb-6">
              Automatize seu atendimento com <span className="gradient-text">IA</span> e aumente suas vendas
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              O FlyZap atende, agenda, responde e fideliza seus clientes automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button size="lg">Quero testar o FlyZap</Button>
              <Button variant="outline" size="lg">Agendar demonstração</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square sm:aspect-auto sm:h-[500px] animate-float">
              {/* Mockup frames */}
              <div className="absolute top-0 left-0 w-3/4 h-[320px] bg-flyzap-black-light border border-gray-800 rounded-xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-3 transition-transform z-10">
                <div className="w-full h-10 bg-gray-900 flex items-center px-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 text-left">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-flyzap-green/20 flex items-center justify-center text-flyzap-green text-xs mr-3">
                      FZ
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 text-sm">
                      <p>Olá! Bem-vindo à Clínica Saúde Total. Como posso ajudar?</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-flyzap-green/10 rounded-lg p-3 text-sm max-w-[70%]">
                      <p>Quero agendar uma consulta com o Dr. Silva.</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-flyzap-green/20 flex items-center justify-center text-flyzap-green text-xs mr-3">
                      FZ
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 text-sm">
                      <p>Claro! O Dr. Silva atende nas segundas, quartas e sextas. Qual data é melhor para você?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-3/5 h-[420px] bg-flyzap-black-light border border-gray-800 rounded-xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-full h-12 bg-gray-900 flex items-center px-[16px] mx-0 my-0 py-0">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-24 bg-flyzap-green p-4">
                  <h3 className="text-flyzap-black font-bold text-lg">Dashboard FlyZap</h3>
                  <p className="text-flyzap-black/70 text-sm">Métricas em tempo real</p>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h4 className="text-sm font-medium">Atendimentos</h4>
                      <span className="text-sm text-flyzap-green">+24%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-flyzap-green rounded-full" style={{
                      width: '78%'
                    }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h4 className="text-sm font-medium">Conversões</h4>
                      <span className="text-sm text-flyzap-green">+42%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-flyzap-green rounded-full" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <p className="text-xs text-gray-400">Mensagens</p>
                      <p className="text-lg font-semibold">1,240</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <p className="text-xs text-gray-400">Agendamentos</p>
                      <p className="text-lg font-semibold">357</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decoration elements */}
              <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-flyzap-green blur-sm animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-flyzap-green/50 blur-sm animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
            </div>

            {/* Neon glow effect */}
            <div className="absolute inset-0 bg-flyzap-green/5 blur-3xl rounded-full"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-gray-400 text-sm mb-2">Saiba mais</span>
          <ArrowDown className="text-flyzap-green" />
        </div>
      </Container>
    </section>;
};
export default HeroSection;
