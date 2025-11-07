import { motion } from 'framer-motion';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';
import Countdown from '@/components/Countdown';

export default function WaitlistUrgency() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-red-950/20">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-red-900/40 to-red-950/60 border-2 border-red-600 rounded-3xl p-8 md:p-12 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-6"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <AlertCircle className="text-red-500" size={40} />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              O Tempo Está Acabando!
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Esta é uma oportunidade única e limitada. As vagas da lista de espera estão se esgotando rapidamente.
            </p>

            <div className="mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="text-red-500" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Cadastro com desconto disponível por:
                </h3>
              </div>
              <Countdown minutes={15} />
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="bg-black/40 border border-red-800/50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="text-red-500 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-2">500</div>
                <div className="text-gray-400 text-sm">Vagas Totais</div>
              </motion.div>

              <motion.div
                className="bg-black/40 border border-red-800/50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold gradient-text mb-2">Rápido</div>
                <div className="text-gray-400 text-sm">Preenchimento</div>
              </motion.div>

              <motion.div
                className="bg-black/40 border border-red-800/50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <AlertCircle className="text-green-500 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-2">48h</div>
                <div className="text-gray-400 text-sm">Para Notificação</div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-3 bg-red-950/30 border border-red-900/50 rounded-lg p-4 text-left"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Após atingirmos 500 cadastros,</span> a lista será fechada permanentemente
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 bg-red-950/30 border border-red-900/50 rounded-lg p-4 text-left"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Os descontos exclusivos</span> são válidos apenas para quem está na lista de espera
                </p>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 bg-red-950/30 border border-red-900/50 rounded-lg p-4 text-left"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">Não haverá segunda chance</span> de obter estas condições especiais
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="text-2xl font-bold text-red-400">
                👇 Cadastre-se agora antes que seja tarde demais!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
