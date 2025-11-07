import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Award, Clock, Download, BookOpen, Sparkles } from 'lucide-react';
import Countdown from '@/components/Countdown';

export default function DoxOffer() {
  const benefits = [
    { icon: Clock, text: '+4300 minutos de conteúdo original e prático' },
    { icon: Award, text: 'Aulas com o criador do método (IvoDOX) e professores da DOX' },
    { icon: BookOpen, text: 'Acesso anual completo à plataforma EAD' },
    { icon: Download, text: 'PDFs, quizzes e exercícios práticos para download' },
    { icon: Award, text: 'Certificado de conclusão oficial' },
    { icon: Sparkles, text: 'O método exclusivo Subliminal Grammar™️' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black" id="oferta">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              💥 Sua Decisão de Ser Fluente
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Você terá acesso a tudo isso. O método completo. A liberdade de estudar quando e onde quiser. 
              O passo a passo para pensar em inglês.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div 
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              O que você recebe imediatamente:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-900/10 border border-red-800/30 rounded-lg"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                    <benefit.icon className="text-red-500" size={20} />
                  </div>
                  <span className="text-gray-300 pt-2">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            className="bg-gradient-to-br from-red-600/30 to-red-900/30 border-2 border-red-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-gray-400 text-base sm:text-lg mb-4">Tudo isso por um investimento único anual de:</p>
            
            <div className="mb-6 sm:mb-8">
              <div className="font-bold text-white mb-2 break-words">
                <span className="block sm:inline" style={{fontSize: '20px'}}>12x de </span><span className="gradient-text whitespace-nowrap" style={{fontSize: '55px'}}>R$ 30,72</span>
              </div>
              <div className="text-xl sm:text-2xl text-gray-400">
                ou <span className="text-white font-semibold">R$ 297,00</span> à vista
              </div>
            </div>

            {/* Countdown Timer */}
            <Countdown minutes={5} />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-gradient text-white font-bold px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl w-full md:w-auto hover:scale-105 transition-transform min-h-[64px]"
                onClick={() => window.open('https://pay.kiwify.com.br/S2N3ibg', '_blank')}
              >
                👉 Quero me matricular agora
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl w-full md:w-auto hover:scale-105 transition-transform min-h-[64px]"
                onClick={() => window.location.href = '/waitlist'}
              >
                📋 Entrar na Lista de Espera
              </Button>
            </div>

            <p className="text-gray-400 mt-6 text-sm">
              ✓ Acesso imediato após a confirmação do pagamento
            </p>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Está Pronto para Cruzar a Fronteira do Inglês?
            </h3>
            <p className="text-xl text-gray-400 mb-4">
              Aprenda com quem vive o inglês todos os dias.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Com o método IvoDOX, você não aprende apenas inglês — <span className="text-red-500 font-bold">você se torna fluente em pensar.</span>
            </p>
            
            <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white font-semibold italic" style={{fontSize: '20px'}}>
                O seu inglês começa onde a sua vontade de evoluir te trouxe: <span className="gradient-text">aqui.</span>
              </p>
            </div>

            <motion.div 
              className="mt-8"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="text-3xl font-bold text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse">
                ⚡ It's Action Time!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
