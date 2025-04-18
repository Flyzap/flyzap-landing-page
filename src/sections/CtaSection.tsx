import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
const CtaSection: React.FC = () => {
  return <section className="py-24 bg-flyzap-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-flyzap-green/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-flyzap-green/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-flyzap-green/5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="heading-xl mb-6">
            Transforme seu atendimento <span className="gradient-text">agora</span> com o FlyZap
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já automatizaram seu atendimento e aumentaram suas vendas com o FlyZap.
          </p>
          
          <div className="mb-8">
            <Button size="lg" className="<button class=\"px-10 py-4 text-lg shadow-lg animate-pulse-neon [animation-duration:3s]\">\n">
              Solicitar Demonstração Gratuita
            </Button>
          </div>
          
          <p className="text-gray-400">
            Suporte humano + IA + personalização exclusiva.
          </p>
        </div>
      </Container>
    </section>;
};
export default CtaSection;