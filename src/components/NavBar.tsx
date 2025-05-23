
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

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

  const handleNavClick = (href: string) => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
    window.location.href = href;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5582999265353', '_blank');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const menuItems = [
    { href: "#features", label: "Funcionalidades" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#pricing", label: "Planos" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-flyzap-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent backdrop-blur-sm bg-flyzap-black/50 py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo className="z-50" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-between flex-1">
              {/* Main Menu Items */}
              <ul className="flex items-center ml-6 gap-8">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      href={item.href}
                      className="font-medium text-gray-300 hover:text-flyzap-green transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Auth and CTA */}
              <div className="flex items-center">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleLoginClick();
                  }}
                  href="#login"
                  className="font-medium text-flyzap-green hover:text-flyzap-green-light transition-colors duration-200 ml-12"
                >
                  Login
                </a>
                
                <Button 
                  variant="primary"
                  size="md"
                  className="ml-6 shadow-lg hover:shadow-flyzap-green/20 rounded-[10px] px-5 py-[10px]"
                  onClick={() => handleNavClick("#demo")}
                >
                  Agendar demonstração gratuita
                </Button>
              </div>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden z-50 text-flyzap-green hover:text-flyzap-green-light transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-flyzap-black/90 backdrop-blur-md z-40 transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Container className="pt-24 pb-8 h-full flex flex-col">
            <nav className="flex flex-col space-y-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className="text-lg font-medium text-gray-300 hover:text-flyzap-green transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  handleLoginClick();
                }}
                href="#login"
                className="text-lg font-medium text-flyzap-green"
              >
                Login
              </a>
            </nav>
            
            <div className="mt-auto">
              <Button 
                variant="primary"
                size="lg"
                className="w-full shadow-lg hover:shadow-flyzap-green/20 rounded-[10px] px-5 py-[10px]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("#demo");
                }}
              >
                Agendar demonstração
              </Button>
            </div>
          </Container>
        </div>
      </header>

      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-flyzap-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-[70] bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <MessageSquareText size={24} />
      </button>
    </>
  );
};

export default NavBar;
