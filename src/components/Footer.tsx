
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-flyzap-black-light section-spacing border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-responsive text-gray-400 mb-4">
              Plataforma de chatbot com inteligência artificial para atendimento e automação de empresas e clínicas médicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Benefícios</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Como Funciona</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Preços</a></li>
              <li><a href="#integrations" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Integrações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Carreiras</a></li>
              <li><a href="#testimonials" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Política de Cookies</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-flyzap-green transition-colors touch-target">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 FlyZap – IA que vende, agenda e fideliza.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
