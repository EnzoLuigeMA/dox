import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="hero-section hero-bg pt-20" 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="max-w-5xl mx-auto text-center py-20">
          {/* 3D Logo */}
          <motion.div 
            className="logo-3d-container logo-glow mb-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="logo-3d h-32 md:h-40 w-auto mx-auto flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-black gradient-text">WM</span>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">
              Website Moderno: A Nova Era do Design Digital
            </span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-semibold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforme sua presença online com tecnologia de ponta e design excepcional.
          </motion.h2>

          {/* Opening Paragraph */}
          <motion.div 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="mb-4">
              Construído com <span className="text-red-500 font-bold">React, TypeScript e Tailwind CSS</span>, 
              este website representa o que há de mais moderno em desenvolvimento web.
            </p>
            <p className="mb-4">
              Aqui, você encontrará uma <span className="text-white font-semibold">experiência única</span> com 
              base em uma arquitetura exclusiva: <span className="text-red-500 font-bold">Performance e Elegância™️</span>.
            </p>
            <p>
              Desenvolvido com as melhores práticas da indústria, 
              esta é a abordagem que já transformou milhares de projetos em experiências memoráveis.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg"
              className="btn-gradient text-white font-semibold px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Começar Agora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-6 text-lg"
              onClick={() => scrollToContact()}
            >
              <Play className="mr-2" size={20} />
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-400">Responsivo</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">Rápido</div>
              <div className="text-gray-400">Performance Otimizada</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">Moderno</div>
              <div className="text-gray-400">Tecnologia de Ponta</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
