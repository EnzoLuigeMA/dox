import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, Video, FileText, Brain } from 'lucide-react';

export default function WaitlistAbout() {
  const features = [
    {
      icon: Clock,
      title: '+4305 Minutos de Conteúdo',
      description: 'Mais de 70 horas de aulas práticas e imersivas'
    },
    {
      icon: Brain,
      title: 'Subliminal Grammar™️',
      description: 'Método exclusivo desenvolvido pelo IvoDox'
    },
    {
      icon: Video,
      title: 'Aulas em Vídeo',
      description: 'Conteúdo de alta qualidade com o IvoDox'
    },
    {
      icon: FileText,
      title: 'Material Completo',
      description: 'PDFs, quizzes e exercícios para download'
    },
    {
      icon: Award,
      title: 'Certificado Oficial',
      description: 'Certificado de conclusão reconhecido'
    },
    {
      icon: BookOpen,
      title: 'Acesso por 1 Ano',
      description: 'Estude no seu ritmo, quando e onde quiser'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-red-950/20 to-black" id="sobre">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça o Dox English EAD
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            O curso completo para você dominar o inglês no seu próprio ritmo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-red-900/30 to-black border border-red-800/50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  O Método que Transforma
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    O <span className="text-red-500 font-bold">Dox English EAD</span> é baseado no revolucionário
                    método <span className="text-white font-semibold">Subliminal Grammar™️</span>, criado por Ivo Gabriel Lima Rodrigues (IvoDox).
                  </p>
                  <p>
                    Este método ensina você a <span className="text-white font-semibold">pensar em inglês</span>,
                    não apenas traduzir. É assim que pessoas realmente fluentes dominam o idioma.
                  </p>
                  <p>
                    Com mais de <span className="text-red-500 font-bold">4305 minutos</span> de conteúdo prático,
                    você terá acesso ao caminho completo da fluência, do básico ao avançado.
                  </p>
                  <p className="text-lg font-semibold text-white mt-6">
                    Aprenda inglês de verdade. Aprenda a pensar em inglês.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-r from-red-900/20 to-transparent border border-red-800/30 rounded-xl p-5 hover:border-red-600/50 transition-all"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-red-900/40 to-black border-2 border-red-600 rounded-3xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quem é IvoDox?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ivo Gabriel Lima Rodrigues, conhecido como IvoDox, é o criador da metodologia Subliminal Grammar™️
              e fundador da Dox English. Com anos de experiência no ensino de inglês, Ivo desenvolveu uma abordagem
              única que já transformou milhares de alunos em falantes fluentes e confiantes.
            </p>
            <div className="inline-block bg-red-950/50 border border-red-800/50 rounded-xl px-6 py-3">
              <p className="text-red-400 font-semibold italic text-lg">
                "Meu objetivo é fazer você pensar em inglês, não traduzir do português"
              </p>
              <p className="text-gray-400 text-sm mt-2">- Ivo Dox</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
