
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Rocket, Users, MessageSquare, Phone, LogIn, Calendar } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import Button from './Button';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

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

  const menuItems = [
    { href: "#inicio", label: "Início", icon: <Home size={20} /> },
    { href: "#funcionalidades", label: "Funcionalidades", icon: <Rocket size={20} /> },
    { href: "#planos", label: "Planos", icon: <Calendar size={20} /> },
    { href: "#depoimentos", label: "Depoimentos", icon: <MessageSquare size={20} /> },
    { href: "#contato", label: "Contato", icon: <Phone size={20} /> },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
          isScrolled ? 'bg-flyzap-black/95 py-3 shadow-lg' : 'bg-flyzap-black/50 py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo className="z-50" />
            
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-flyzap-green transition-colors duration-200"
                >
                  <span className="text-flyzap-green/70 group-hover:text-flyzap-green transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-medium tracking-wide">{item.label}</span>
                </a>
              ))}
              
              <Button 
                variant="outline"
                size="md"
                className="flex items-center gap-2"
                onClick={() => handleNavClick("/login")}
              >
                <LogIn size={18} />
                <span>Login</span>
              </Button>
            </nav>
            
            <button 
              className="md:hidden z-50 text-flyzap-green hover:text-flyzap-green-light transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
        
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
                  className="flex items-center space-x-3 text-gray-300 hover:text-flyzap-green transition-colors duration-200"
                >
                  <span className="text-flyzap-green/70">{item.icon}</span>
                  <span className="text-lg font-medium">{item.label}</span>
                </a>
              ))}
              
              <Button 
                variant="outline"
                size="md"
                className="flex items-center gap-2 w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("/login");
                }}
              >
                <LogIn size={18} />
                <span>Login</span>
              </Button>
            </nav>
          </Container>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-flyzap-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-[70] bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <MessageSquare size={24} />
      </button>
    </>
  );
};

export default NavBar;
