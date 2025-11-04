import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Star, TrendingUp } from 'lucide-react';

export default function DoxContent() {
  const mainModules = [
    'Como aprender inglês na fase adulta?',
    'Seja um Papagaio',
    'Shadowing na Prática',
    'Tradução Literal vs. Adaptada',
    'Inglês em 4 Passos',
    'Nível de Inglês',
    'A Prática da Revisão'
  ];

  const steps = [
    {
      number: 1,
      title: 'Introduce Yourself',
      description: 'Aprenda a se apresentar naturalmente, fazer perguntas básicas e falar sobre si mesmo.',
      focus: 'verbo to be, do/does, present perfect e vocabulário cotidiano.'
    },
    {
      number: 2,
      title: 'Habits and Routines',
      description: 'Descreva suas rotinas e hábitos, utilizando modais e expressões de frequência com confiança.',
      focus: 'present simple, present continuous e frequency adverbs.'
    },
    {
      number: 3,
      title: 'Conversão de Tempo Verbal',
      description: 'Aprenda a narrar acontecimentos passados e falar de planos futuros com total segurança.',
      focus: 'past simple, past continuous, will e going to.'
    },
    {
      number: 4,
      title: 'Expressando Opiniões',
      description: 'Expresse seus pensamentos, sentimentos e opiniões de forma natural e articulada.',
      focus: 'I think, I believe, in my opinion, because, although.'
    }
  ];

  const crossingTopics = [
    "Let's Get Down to Business: Inglês para entrevistas e ambiente de trabalho.",
    'Burnout: Como falar sobre saúde mental e equilíbrio profissional.',
    'Regrets: Expressando arrependimentos e reflexões complexas.',
    'Validation: Debatendo o impacto das redes sociais.',
    'I Need a Vacation: Planejando viagens e descrevendo experiências.',
    'It Was Written By: Usando a voz passiva em situações práticas.'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950/20" id="conteudo">
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
              📚 A Estrutura da Sua Fluência
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              O curso é dividido em módulos estratégicos que conduzem você da compreensão básica 
              até a comunicação intermediária com total confiança.
            </p>
          </motion.div>

          {/* Main Modules */}
          <motion.div 
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="text-red-500" size={32} />
              Módulos Principais (A Base do Método)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {mainModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-900/10 border border-red-800/20 rounded-lg hover:bg-red-900/20 transition-colors"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{module}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4 Steps */}
          <motion.div 
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="text-red-500" size={32} />
              Conteúdo Estruturado: Sua Jornada Passo a Passo
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-red-900/20 to-black border border-red-800/30 rounded-lg p-6"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        PASSO {step.number} – {step.title}
                      </h4>
                      <p className="text-gray-400 mb-3">{step.description}</p>
                      <p className="text-sm text-gray-500 italic">
                        Foco: {step.focus}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Crossing Module */}
          <motion.div
            className="bg-gradient-to-br from-red-600/20 to-red-900/20 border-2 border-red-600/50 rounded-xl p-8 mx-auto max-w-4xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-red-500" size={40} />
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Módulo Intermediário – The Crossing
                </h3>
                <p className="text-red-400 font-semibold">🔥 GRANDE DIFERENCIAL</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-6">
              Esta é a ponte entre o aprendizado e a <span className="text-white font-bold">fluência real</span>.
            </p>
            
            <p className="text-gray-400 mb-6">
              Aqui, você mergulha em temas da vida adulta, profissional e emocional — usando a linguagem 
              viva e atual que é usada em contextos reais (e não em livros didáticos).
            </p>

            <h4 className="text-xl font-bold text-white mb-4">
              Exemplos de unidades em "The Crossing":
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {crossingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
