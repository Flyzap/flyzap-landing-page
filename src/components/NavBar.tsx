
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import Button from './Button';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-flyzap-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo className="z-50" />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Benefícios</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Preços</a>
          </nav>
          
          <div className="hidden md:block">
            <Button>Quero testar o FlyZap</Button>
          </div>
          
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-flyzap-black z-40 transition-transform duration-300 transform ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <Container className="pt-24 pb-8 h-full flex flex-col">
          <nav className="flex flex-col space-y-6 text-xl">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Como Funciona
            </a>
            <a 
              href="#demo" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Depoimentos
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Preços
            </a>
          </nav>
          
          <div className="mt-auto">
            <Button className="w-full">Quero testar o FlyZap</Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;
