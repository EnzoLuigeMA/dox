import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-red-900/30">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Website Moderno</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              className="btn-gradient text-white font-semibold px-6"
              onClick={() => scrollToSection('contato')}
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-red-900/30">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Contato
            </button>
            <div className="px-4">
              <Button 
                className="btn-gradient text-white font-semibold w-full"
                onClick={() => scrollToSection('contato')}
              >
                Começar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
