import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Play } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="section-padding bg-flyzap-black py-20">
      <Container>
        <SectionHeading 
          title="Veja o FlyZap em ação"
          subtitle="Assista a uma demonstração de como o FlyZap trabalha para transformar seu atendimento e aumentar suas vendas."
          centered
        />
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          {/* Video container with YouTube embed */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl group">
            <iframe
              src="https://www.youtube.com/embed/r1mSRtMfpJo?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0"
              title="FlyZap Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-flyzap-black/80 to-transparent"></div>
            
            {/* Caption at the bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-xl font-semibold mb-2">Demonstração completa da plataforma</h3>
              <p className="text-gray-400">Veja como configurar fluxos, automatizar atendimentos e aumentar conversões.</p>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-flyzap-green/5 blur-3xl rounded-full -z-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-flyzap-green/10 blur-2xl rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-flyzap-green/10 blur-2xl rounded-full"></div>
        </div>
        
        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="sm:px-8">
            <Play size={16} className="mr-2" />
            Assistir em ação
          </Button>
          <Button variant="outline" size="lg" className="sm:px-8">
            Agendar demonstração
          </Button>
        </div>
        
        {/* Device mockups below */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Atendimento inteligente em múltiplos canais</h3>
            <p className="text-gray-300 mb-6">O FlyZap integra-se perfeitamente com WhatsApp, Instagram e seu site para oferecer uma experiência contínua para seus clientes, independentemente do canal que eles escolherem.</p>
            
            <ul className="space-y-4">
              {[
                'Respostas contextuais baseadas em histórico',
                'Transferência inteligente para atendentes humanos',
                'Personalização com base no perfil do cliente',
                'Agendamentos e confirmações automáticas'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-flyzap-green/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-flyzap-green"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 relative">
            {/* Phone mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-800 shadow-xl overflow-hidden">
              {/* Phone interior */}
              <div className="absolute top-0 w-full h-6 bg-gray-800 flex justify-center items-center">
                <div className="w-20 h-4 bg-gray-900 rounded-b-lg"></div>
              </div>
              
              {/* Chat screen */}
              <div className="h-full pt-6 bg-gray-100">
                {/* WhatsApp-like header */}
                <div className="bg-flyzap-green px-4 py-2 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                  <div>
                    <p className="text-flyzap-black font-medium text-sm">Clínica Saúde Total</p>
                    <p className="text-flyzap-black/70 text-xs">Online</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="p-3 h-[calc(100%-48px)] bg-[#e5e5e5] overflow-y-auto flex flex-col">
                  <div className="bg-white rounded-lg p-2 text-xs text-gray-800 shadow-sm self-start max-w-[80%] mb-2">
                    <p>Olá! Como posso ajudar você hoje?</p>
                    <p className="text-[10px] text-right text-gray-500">10:30</p>
                  </div>
                  
                  <div className="bg-[#d0ffc2] rounded-lg p-2 text-xs text-gray-800 shadow-sm self-end max-w-[80%] mb-2">
                    <p>Preciso agendar uma consulta com o especialista em dermatologia.</p>
                    <p className="text-[10px] text-right text-gray-500">10:31</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs text-gray-800 shadow-sm self-start max-w-[80%] mb-2">
                    <p>Com certeza! Temos horários disponíveis nas seguintes datas:</p>
                    <p>- Segunda, 20/04 às 14h</p>
                    <p>- Quarta, 22/04 às 10h</p>
                    <p>- Sexta, 24/04 às 16h</p>
                    <p>Qual seria melhor para você?</p>
                    <p className="text-[10px] text-right text-gray-500">10:31</p>
                  </div>
                  
                  <div className="bg-[#d0ffc2] rounded-lg p-2 text-xs text-gray-800 shadow-sm self-end max-w-[80%] mb-2">
                    <p>Quarta às 10h seria perfeito!</p>
                    <p className="text-[10px] text-right text-gray-500">10:32</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-2 text-xs text-gray-800 shadow-sm self-start max-w-[80%]">
                    <p>Ótimo! Agendei sua consulta para quarta, 22/04 às 10h com o Dr. Soares. Você receberá uma confirmação por email. Precisa de mais alguma coisa?</p>
                    <p className="text-[10px] text-right text-gray-500">10:32</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-flyzap-green/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DemoSection;
