import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { waitlistService } from '@/services/waitlistService';

export default function WaitlistHero() {
  const [waitlistCount, setWaitlistCount] = useState(0);
  const totalSpots = 500;

  useEffect(() => {
    const fetchCount = async () => {
      const count = await waitlistService.getWaitlistCount();
      setWaitlistCount(count);
    };
    fetchCount();
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const spotsRemaining = Math.max(0, totalSpots - waitlistCount);
  const progressPercentage = Math.min(100, (waitlistCount / totalSpots) * 100);

  return (
    <motion.section
      className="hero-section hero-bg pt-32 pb-20"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
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

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white relative px-4 md:px-0"
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
            >
              Seja um dos Primeiros a Transformar seu Inglês
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto font-semibold px-4 md:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Entre na lista de espera exclusiva e garanta vantagens especiais no lançamento do Dox English EAD
          </motion.h2>

          <motion.div
            className="text-base md:text-lg text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed px-4 md:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="mb-4">
              O método revolucionário <span className="text-red-500 font-bold">Subliminal Grammar™️</span> está chegando
              em um formato completamente novo. Cadastre-se agora e seja notificado antes de todos.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-16 px-4 md:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="btn-gradient text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto"
              onClick={scrollToForm}
            >
              Entrar na Lista de Espera
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>

          <motion.div
            className="bg-red-900/20 border border-red-800/50 rounded-2xl p-6 md:p-8 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="text-red-500" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Vagas Limitadas!
              </h3>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm md:text-base text-gray-300 mb-2">
                <span>{waitlistCount} pessoas já cadastradas</span>
                <span>{spotsRemaining} vagas restantes</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 to-red-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm md:text-base">
              Apenas as primeiras 500 pessoas receberão condições exclusivas de lançamento
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5">
              <Gift className="text-red-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-white mb-2">Desconto Exclusivo</div>
              <div className="text-gray-400 text-sm">Até 50% OFF no lançamento</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5">
              <Clock className="text-red-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-white mb-2">Acesso Antecipado</div>
              <div className="text-gray-400 text-sm">7 dias antes do público geral</div>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-5">
              <Users className="text-red-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-white mb-2">Comunidade VIP</div>
              <div className="text-gray-400 text-sm">Grupo exclusivo com IvoDox</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
