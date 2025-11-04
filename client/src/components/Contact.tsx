import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-black" id="contato">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Pronto para transformar sua presença digital? Vamos conversar sobre seu próximo projeto.
          </p>

          <div className="bg-red-900/20 border border-red-800/30 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">contato@websitemoderno.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">github.com/websitemoderno</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">linkedin.com/in/websitemoderno</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">@websitemoderno</span>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 9h - 18h</p>
                  <p>Sábado: 9h - 13h</p>
                  <p>Domingo: Fechado</p>
                  <p className="mt-4 text-red-500 font-semibold">
                    Resposta em até 24 horas úteis
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-red-800/30">
              <Button 
                size="lg"
                className="btn-gradient text-white font-semibold px-8 py-6 text-lg"
              >
                <Mail className="mr-2" size={20} />
                Enviar Mensagem
              </Button>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Ao entrar em contato, você concorda com nossa política de privacidade.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
