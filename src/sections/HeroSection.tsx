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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 sm:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-flyzap-black to-flyzap-black-light opacity-80 z-0"></div>
      
      {/* Enhanced animated gradient background for mobile */}
      <div className="absolute top-0 left-0 right-0 h-1/2 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-flyzap-green/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-full bg-flyzap-green/10 blur-3xl rounded-full transform -translate-x-1/4"></div>
        {/* Mobile specific glow effects */}
        <div className="lg:hidden absolute top-1/4 right-1/4 w-32 h-32 bg-flyzap-green/3 blur-2xl rounded-full animate-pulse"></div>
      </div>
      
      <Container className="relative z-10 mt-12 sm:mt-16">
        <div className="flex flex-col space-y-12 md:space-y-16 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
          <div className="flex flex-col items-center lg:items-start order-1 lg:order-1 max-w-xl lg:max-w-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-left">
              Automatize seu atendimento com <span className="gradient-text">IA</span> e aumente suas vendas
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-10 leading-relaxed max-w-lg lg:max-w-none text-center lg:text-left">
              O FlyZap atende, agenda, responde e fideliza seus clientes automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 relative z-20 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="min-h-[48px] lg:min-h-[56px] px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg"
                onClick={scrollToPricing}
              >
                Começar a vender mais hoje
              </Button>
            </div>
          </div>
          
          <div className="relative order-2 lg:order-2">
            {/* Mobile: Enhanced visual mockup */}
            <div className="block lg:hidden">
              <div className="relative w-full max-w-xs mx-auto">
                {/* Background effects */}
                <div className="absolute inset-0 bg-flyzap-green/10 blur-3xl rounded-full -z-10 scale-110"></div>
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-flyzap-green/30 blur-sm animate-pulse"></div>
                <div className="absolute bottom-8 left-6 w-4 h-4 rounded-full bg-flyzap-green/50 blur-sm animate-pulse delay-700"></div>
                
                {/* WhatsApp Chat Mockup */}
                <div className="relative mb-6 transform rotate-2">
                  <div className="bg-[#1F2937] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                    {/* WhatsApp Header */}
                    <div className="bg-[#202C33] px-4 py-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-flyzap-green flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white">FZ</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">FlyZap IA</h4>
                        <p className="text-green-400 text-xs">online agora</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="bg-[#0B141A] p-3 space-y-3 min-h-[160px]">
                      <div className="flex">
                        <div className="bg-[#202C33] rounded-lg px-3 py-2 max-w-[80%]">
                          <p className="text-white text-xs">Olá! Como posso ajudar? 😊</p>
                          <span className="text-gray-400 text-[10px]">14:32</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-[#005C4B] rounded-lg px-3 py-2 max-w-[80%]">
                          <p className="text-white text-xs">Quero agendar consulta</p>
                          <span className="text-gray-300 text-[10px]">14:33</span>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-[#202C33] rounded-lg px-3 py-2 max-w-[80%]">
                          <p className="text-white text-xs">Perfeito! Que dia funciona melhor para você?</p>
                          <span className="text-gray-400 text-[10px]">14:33</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Metrics */}
                <div className="relative transform -rotate-2">
                  <div className="bg-flyzap-black-light border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-flyzap-green p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-flyzap-black font-bold text-sm">Resultados em Tempo Real</h3>
                          <p className="text-flyzap-black/70 text-xs">Última atualização: agora</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-flyzap-black/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-flyzap-black animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-400 mb-1">Conversas Hoje</p>
                          <p className="text-xl font-bold text-flyzap-green">1,240</p>
                          <div className="flex items-center justify-center mt-1">
                            <span className="text-xs text-green-400">↗️ +24%</span>
                          </div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-400 mb-1">Vendas</p>
                          <p className="text-xl font-bold text-flyzap-green">+42%</p>
                          <div className="flex items-center justify-center mt-1">
                            <span className="text-xs text-green-400">🚀 Meta batida</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Success notification */}
                      <div className="mt-3 bg-green-900/30 border border-green-700 rounded-lg p-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs text-green-300">Nova venda: R$ 1.250 💰</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original complex mockups */}
            <div className="hidden lg:block">
              <div className="relative w-full h-[500px] xl:h-[600px] 2xl:h-[700px]">
                <div className="absolute top-0 left-0 w-3/4 h-[320px] xl:h-[380px] 2xl:h-[440px] bg-flyzap-black-light border border-gray-800 rounded-xl shadow-2xl overflow-hidden transform rotate-6 z-0">
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
                
                <div className="absolute bottom-0 right-0 w-3/5 h-[420px] xl:h-[480px] 2xl:h-[540px] bg-flyzap-black-light border border-gray-800 rounded-xl shadow-2xl overflow-hidden transform -rotate-3 z-0">
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
                        <div className="h-2 bg-flyzap-green rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-sm font-medium">Conversões</h4>
                        <span className="text-sm text-flyzap-green">+42%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full">
                        <div className="h-2 bg-flyzap-green rounded-full" style={{width: '65%'}}></div>
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
                
                <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-flyzap-green blur-sm"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-flyzap-green/50 blur-sm"></div>
              </div>
              <div className="absolute inset-0 bg-flyzap-green/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-gray-400 text-sm mb-2">Saiba mais</span>
          <ArrowDown className="text-flyzap-green" />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
