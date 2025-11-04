import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Arquitetura moderna e escalável',
  'Componentes reutilizáveis e modulares',
  'Animações fluidas com Framer Motion',
  'Design responsivo mobile-first',
  'Otimização automática de performance',
  'Suporte completo a TypeScript'
];

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950/10" id="sobre">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Sobre o Projeto</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Este website foi desenvolvido utilizando as tecnologias mais avançadas do mercado, 
              garantindo uma experiência excepcional para todos os usuários.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Construído com React 19, TypeScript, Tailwind CSS e uma arquitetura robusta, 
              este projeto representa o estado da arte em desenvolvimento web moderno. 
              Cada linha de código foi cuidadosamente elaborada para entregar performance, 
              elegância e funcionalidade.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="stats-card">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-red-500 mb-2">React 19</div>
                  <div className="text-gray-400">Biblioteca mais popular do mundo</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-500 mb-2">TypeScript</div>
                  <div className="text-gray-400">Código 100% tipado e seguro</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-500 mb-2">Tailwind CSS</div>
                  <div className="text-gray-400">Framework CSS utility-first</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-500 mb-2">Vite</div>
                  <div className="text-gray-400">Build tool ultra-rápido</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
