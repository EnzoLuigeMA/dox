import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function DoxHero() {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="hero-section hero-bg" 
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
            <img 
              src="/dox-logo-transparent.png" 
              alt="DOX English Logo" 
              className="logo-3d h-32 md:h-40 w-auto mx-auto"
            />
          </motion.div>
          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white relative px-4 md:px-0"
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <motion.span 
              className="gradient-text inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                  '0 0 40px rgba(239, 68, 68, 0.8)',
                  '0 0 20px rgba(239, 68, 68, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(239, 68, 68, 0.4))'
              }}
            >
              Dox English EAD: O Método Definitivo para Aprender Inglês Sozinho
            </motion.span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto font-semibold px-4 md:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Domine o inglês no seu ritmo, em qualquer lugar. A revolução do aprendizado autônomo de inglês chegou.
          </motion.h2>

          {/* Opening Paragraph */}
          <motion.div 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="mb-4">
              Com mais de <span className="text-red-500 font-bold">4305 minutos de conteúdo prático</span>, 
              o Dox English EAD é a solução para quem precisa aprender inglês no seu ritmo, no seu tempo 
              e em qualquer lugar do mundo — sem depender de aulas presenciais ou horários fixos.
            </p>
            <p className="mb-4">
              Aqui, você aprenderá a <span className="text-white font-semibold">pensar em inglês</span> com 
              base em uma metodologia exclusiva: <span className="text-red-500 font-bold">Subliminal Grammar™️</span>.
            </p>
            <p>
              Desenvolvida pelo próprio Ivo Gabriel Lima Rodrigues (o Ivo Dox), criador da Dox English, 
              esta é a abordagem que já transformou milhares de alunos em aprendizes autônomos e confiantes.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-16 px-4 md:px-0 w-full sm:w-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="btn-gradient text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto min-h-[56px]"
              onClick={scrollToOffer}
            >
              Quero Ser Fluente
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto min-h-[56px]"
              onClick={() => window.location.href = '/waitlist'}
            >
              Lista de Espera
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 md:mt-16 px-4 md:px-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">+<CountUp end={70} /></div>
              <div className="text-gray-400 text-sm sm:text-base">Horas de Conteúdo</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2"><CountUp end={100} />%</div>
              <div className="text-gray-400 text-sm sm:text-base">Acesso Anual</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">Certificado</div>
              <div className="text-gray-400 text-sm sm:text-base">Oficial Incluso</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
