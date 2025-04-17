
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-flyzap-black-light py-12 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
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
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-flyzap-green transition-colors">Benefícios</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-flyzap-green transition-colors">Como Funciona</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-flyzap-green transition-colors">Preços</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-flyzap-green transition-colors">Integrações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Carreiras</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-flyzap-green transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-flyzap-green transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © 2025 FlyZap – IA que vende, agenda e fideliza.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
