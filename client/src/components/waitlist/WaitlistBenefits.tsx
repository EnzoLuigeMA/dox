import { motion } from 'framer-motion';
import { Gift, Star, Zap, Users, Trophy, Shield } from 'lucide-react';

export default function WaitlistBenefits() {
  const benefits = [
    {
      icon: Gift,
      title: 'Desconto Exclusivo de até 50%',
      description: 'Membros da lista de espera garantem o melhor preço do mercado',
      color: 'from-red-600 to-orange-600'
    },
    {
      icon: Star,
      title: 'Acesso Antecipado VIP',
      description: 'Entre no curso 7 dias antes do público geral e comece sua jornada primeiro',
      color: 'from-yellow-600 to-red-600'
    },
    {
      icon: Zap,
      title: 'Bônus Exclusivos',
      description: 'Materiais extras, PDFs premium e exercícios adicionais só para você',
      color: 'from-purple-600 to-red-600'
    },
    {
      icon: Users,
      title: 'Comunidade Fechada',
      description: 'Grupo VIP no WhatsApp com acesso direto ao IvoDox e suporte prioritário',
      color: 'from-blue-600 to-red-600'
    },
    {
      icon: Trophy,
      title: 'Garantia Estendida',
      description: 'Garantia de satisfação ampliada para membros da lista de espera',
      color: 'from-green-600 to-red-600'
    },
    {
      icon: Shield,
      title: 'Sem Risco',
      description: 'Cadastro 100% gratuito, sem compromisso e você pode cancelar a qualquer momento',
      color: 'from-gray-600 to-red-600'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-black" id="beneficios">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Vantagens Exclusivas da Lista de Espera
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seja recompensado por ser um dos primeiros a acreditar no poder do Dox English EAD
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-red-900/20 to-black border border-red-800/30 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-2xl p-6 max-w-2xl">
            <p className="text-lg text-gray-200 font-semibold">
              Não perca essa oportunidade única de fazer parte da primeira turma com condições especiais que nunca mais serão oferecidas!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
