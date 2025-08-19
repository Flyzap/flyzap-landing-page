
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
    window.location.href = 'https://app.flyzap.tech/login';
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
          isScrolled ? 'bg-flyzap-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent backdrop-blur-sm bg-flyzap-black/50 py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo className="z-50" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-between flex-1">
              {/* Main Menu Items */}
              <ul className="flex items-center ml-8 lg:ml-12 xl:ml-16 gap-8 lg:gap-10 xl:gap-12">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      href={item.href}
                      className="font-medium text-gray-300 hover:text-flyzap-green transition-colors duration-200 text-sm lg:text-base relative after:absolute after:w-0 after:h-0.5 after:bg-flyzap-green after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
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
                  className="font-medium text-flyzap-green hover:text-flyzap-green-light transition-colors duration-200 text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-flyzap-green/10 transition-all duration-200"
                >
                  Login
                </a>
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
          <Container className="pt-28 pb-12 h-full flex flex-col">
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className="text-xl font-medium text-gray-300 hover:text-flyzap-green transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-flyzap-green/10"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="border-t border-gray-700 pt-6 mt-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    handleLoginClick();
                  }}
                  href="#login"
                  className="text-xl font-medium text-flyzap-green py-3 px-4 rounded-lg hover:bg-flyzap-green/10 transition-all duration-200 block"
                >
                  Login
                </a>
              </div>
            </nav>
            

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
