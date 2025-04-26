
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Rocket, PlayCircle, MessageSquare, CreditCard } from 'lucide-react';
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

  const menuItems = [
    { href: "#features", label: "Benefícios", icon: <Rocket size={20} /> },
    { href: "#how-it-works", label: "Como Funciona", icon: <Home size={20} /> },
    { href: "#demo", label: "Demo", icon: <PlayCircle size={20} /> },
    { href: "#testimonials", label: "Depoimentos", icon: <MessageSquare size={20} /> },
    { href: "#pricing", label: "Preços", icon: <CreditCard size={20} /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-flyzap-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo className="z-50" />
          
          <nav className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center space-x-2 text-gray-300 hover:text-flyzap-green transition-colors duration-200"
              >
                <span className="text-flyzap-green/70 group-hover:text-flyzap-green transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium tracking-wide">{item.label}</span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button 
              variant="primary"
              size="md"
              className="shadow-lg hover:shadow-flyzap-green/20"
            >
              Quero testar o FlyZap
            </Button>
          </div>
          
          <button 
            className="md:hidden z-50 text-flyzap-green hover:text-flyzap-green-light transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-flyzap-black/98 backdrop-blur-md z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Container className="pt-24 pb-8 h-full flex flex-col">
          <nav className="flex flex-col space-y-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-300 hover:text-flyzap-green transition-colors duration-200"
              >
                <span className="text-flyzap-green/70">{item.icon}</span>
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
          
          <div className="mt-auto">
            <Button 
              variant="primary"
              size="lg"
              className="w-full shadow-lg hover:shadow-flyzap-green/20"
            >
              Quero testar o FlyZap
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;
