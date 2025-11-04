import { motion } from 'framer-motion';
import { Users, Target, Clock, Award } from 'lucide-react';

export default function DoxTarget() {
  const targetAudience = [
    {
      icon: Users,
      text: 'Pessoas que querem aprender sozinhas, mas precisam de orientação verdadeira e um método que gera resultados reais.'
    },
    {
      icon: Target,
      text: 'Quem busca um curso prático, direto ao ponto e focado 100% em comunicação e compreensão real (sem enrolação).'
    },
    {
      icon: Clock,
      text: 'Quem tem pouco tempo, mas muita vontade de dominar o inglês com eficiência e flexibilidade.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-red-950/20 to-black">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Target Audience Section */}
          <motion.div 
            className="mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              🧠 Para Quem É o Dox English EAD?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-12"></div>
            
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Este curso foi desenhado especificamente para:
            </p>

            <div className="space-y-6">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-900/20 to-black border border-red-800/30 rounded-lg"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                    <item.icon className="text-red-500" size={24} />
                  </div>
                  <p className="text-lg text-gray-300 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificate Section */}
          <motion.div
            className="bg-gradient-to-br from-red-600/20 to-red-900/20 border-2 border-red-600/50 rounded-xl p-8 md:p-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                🎓 Certificado de Conclusão Oficial
              </h3>
            </div>
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-xl text-gray-300">
                Ao finalizar o curso, você recebe um <span className="text-white font-bold">certificado oficial da Dox English</span>, 
                comprovando sua carga horária e nível de proficiência.
              </p>
              
              <p className="text-lg text-gray-400">
                É um documento válido para valorizar seu currículo, apresentar em intercâmbios 
                e acelerar sua progressão profissional.
              </p>

              <div className="mt-8 p-6 bg-black/50 rounded-lg border border-red-800/30">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Certificado Digital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Carga Horária Comprovada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✓</span>
                    <span>Válido em Todo Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
