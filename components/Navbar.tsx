import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-raise-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-raise-neon rounded-lg group-hover:shadow-[0_0_15px_rgba(204,255,0,0.6)] transition-all">
             <ShieldCheck className="text-raise-black w-5 h-5" strokeWidth={3} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">RAISE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
             <>
                <button onClick={() => scrollToSection('problem')} className="text-sm font-medium text-gray-300 hover:text-raise-neon transition-colors">La Sfida</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-300 hover:text-raise-neon transition-colors">Come Funziona</button>
                <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-300 hover:text-raise-neon transition-colors">Features</button>
                <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-gray-300 hover:text-raise-neon transition-colors">Blog</button>
             </>
          ) : (
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-raise-neon transition-colors">Torna alla Home</Link>
          )}
          
          <button className="bg-raise-neon text-raise-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-raise-yellow hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(204,255,0,0.3)]">
            Prenota Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-raise-dark border-b border-white/10 absolute w-full px-6 py-4 flex flex-col gap-4 shadow-xl">
           {isHome ? (
             <>
                <button onClick={() => scrollToSection('problem')} className="text-left text-gray-300 hover:text-raise-neon">La Sfida</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-300 hover:text-raise-neon">Come Funziona</button>
                <button onClick={() => scrollToSection('features')} className="text-left text-gray-300 hover:text-raise-neon">Features</button>
                <button onClick={() => scrollToSection('blog')} className="text-left text-gray-300 hover:text-raise-neon">Blog</button>
             </>
          ) : (
            <Link to="/" className="text-left text-gray-300 hover:text-raise-neon">Torna alla Home</Link>
          )}
          <button className="bg-raise-neon text-raise-black px-6 py-3 rounded-lg font-bold text-center mt-2">
            Prenota Demo
          </button>
        </div>
      )}
    </nav>
  );
};
