import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Zap } from 'lucide-react';

export default function DoxUSP() {
  const pillars = [
    {
      icon: Target,
      title: 'Imersão Natural',
      description: 'Você é exposto ao idioma em contextos reais e dinâmicos, aprendendo com situações práticas.'
    },
    {
      icon: Brain,
      title: 'Shadowing e Thinking in English',
      description: 'Treinamos sua mente para parar de traduzir e começar a pensar diretamente em inglês.'
    },
    {
      icon: TrendingUp,
      title: 'Aprendizado Progressivo',
      description: 'Conduzimos você das bases à fluência intermediária com uma estrutura sólida e sem lacunas.'
    },
    {
      icon: Zap,
      title: 'Subliminal Grammar™️',
      description: 'A técnica central. Você aprende gramática avançada sem perceber que está estudando.'
    }
  ];

  return (
    <section className="py-20 bg-black" id="metodo">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ⚙️ O Que Torna o Método Ivo Dox Único?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
            
            <div className="text-lg text-gray-400 max-w-4xl mx-auto space-y-4">
              <p>
                Diferente dos cursos tradicionais, o Dox English EAD não se limita a ensinar regras 
                gramaticais ou listas de vocabulário que você esquece em semanas.
              </p>
              <p>
                Com a metodologia <span className="text-red-500 font-bold">Subliminal Grammar™️</span>, 
                a gramática é absorvida de forma natural e inconsciente.
              </p>
              <p className="text-xl font-semibold text-white">
                Você aprende inglês como aprendeu português: pelo uso e pela exposição inteligente ao idioma.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote 
              className="mt-8 p-6 bg-red-900/20 border-l-4 border-red-600 rounded-r-lg max-w-3xl mx-auto"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-xl text-gray-300 italic">
                <span className="font-bold text-red-500">Você não decora.</span> Você entende, 
                internaliza e reproduz o inglês com naturalidade, como um falante nativo.
              </p>
            </motion.blockquote>
          </motion.div>

          {/* 4 Pillars */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Os 4 Pilares do Método:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  className="feature-card bg-gradient-to-br from-red-900/20 to-black border border-red-800/30 p-8"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
