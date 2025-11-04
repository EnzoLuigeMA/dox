import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Code, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance Extrema',
    description: 'Otimizado para velocidade máxima com React 19 e Vite, garantindo carregamento instantâneo.'
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Código seguro e atualizado com as melhores práticas de desenvolvimento moderno.'
  },
  {
    icon: Sparkles,
    title: 'Design Impecável',
    description: 'Interface elegante e intuitiva criada com Tailwind CSS e componentes Shadcn/ui.'
  },
  {
    icon: Code,
    title: 'TypeScript Nativo',
    description: 'Código totalmente tipado para máxima confiabilidade e manutenibilidade.'
  },
  {
    icon: Palette,
    title: 'Totalmente Customizável',
    description: 'Sistema de design flexível que se adapta perfeitamente às suas necessidades.'
  },
  {
    icon: Rocket,
    title: 'Deploy Simplificado',
    description: 'Pronto para produção com configuração otimizada e deploy automatizado.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-black" id="recursos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Recursos Poderosos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa para criar experiências digitais extraordinárias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
