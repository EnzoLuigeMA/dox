import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { supabase, type WaitlistEntry } from '@/lib/supabase';
import { toast } from 'sonner';
import { CheckCircle2, Globe, Users, Clock, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function Waitlist() {
  const [formData, setFormData] = useState<Partial<WaitlistEntry>>({
    name: '',
    email: '',
    phone: '',
    english_level: '',
    learning_goals: '',
    preferred_schedule: '',
    referral_source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error('Por favor, preencha nome e email');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            english_level: formData.english_level || null,
            learning_goals: formData.learning_goals || null,
            preferred_schedule: formData.preferred_schedule || null,
            referral_source: formData.referral_source || null
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast.error('Este email já está cadastrado na lista de espera');
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast.success('Você foi adicionado à lista de espera!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bem-vindo à Lista de Espera!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Obrigado por se inscrever! Em breve entraremos em contato com informações exclusivas sobre o lançamento do Dox English EAD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/dox'}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8"
            >
              Voltar ao Site
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/dox-logo-transparent.png"
              alt="Dox English EAD"
              className="h-16 md:h-20"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Junte-se à Lista de Espera
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Seja um dos primeiros a ter acesso ao curso de inglês online mais completo e moderno do mercado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <Sparkles className="inline w-8 h-8 text-orange-500 mr-2" />
                  Por que se inscrever?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Acesso Antecipado</h3>
                      <p className="text-gray-400">
                        Seja notificado antes do lançamento oficial e tenha acesso exclusivo às primeiras turmas
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Condições Especiais</h3>
                      <p className="text-gray-400">
                        Descontos exclusivos e benefícios para quem entrar na lista de espera
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Metodologia Comprovada</h3>
                      <p className="text-gray-400">
                        Aprenda inglês com a mesma qualidade das aulas presenciais, de onde estiver
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Flexibilidade Total</h3>
                      <p className="text-gray-400">
                        Estude no seu ritmo, com horários flexíveis que se adaptam à sua rotina
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Preencha seus dados</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2">
                      Telefone (WhatsApp)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="english_level" className="text-white mb-2">
                      Nível de Inglês Atual
                    </Label>
                    <select
                      id="english_level"
                      name="english_level"
                      value={formData.english_level}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Selecione seu nível</option>
                      <option value="iniciante">Iniciante (Básico)</option>
                      <option value="intermediario">Intermediário</option>
                      <option value="avancado">Avançado</option>
                      <option value="fluente">Fluente</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="learning_goals" className="text-white mb-2">
                      Quais são seus objetivos com o inglês?
                    </Label>
                    <Textarea
                      id="learning_goals"
                      name="learning_goals"
                      value={formData.learning_goals}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-[100px]"
                      placeholder="Ex: Melhorar minha comunicação no trabalho, viajar, estudar no exterior..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferred_schedule" className="text-white mb-2">
                      Horário Preferencial
                    </Label>
                    <select
                      id="preferred_schedule"
                      name="preferred_schedule"
                      value={formData.preferred_schedule}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Selecione o melhor horário</option>
                      <option value="manha">Manhã (8h - 12h)</option>
                      <option value="tarde">Tarde (12h - 18h)</option>
                      <option value="noite">Noite (18h - 22h)</option>
                      <option value="flexivel">Flexível</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="referral_source" className="text-white mb-2">
                      Como conheceu o Dox English?
                    </Label>
                    <select
                      id="referral_source"
                      name="referral_source"
                      value={formData.referral_source}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="redes-sociais">Redes Sociais</option>
                      <option value="indicacao">Indicação de Amigo</option>
                      <option value="google">Pesquisa no Google</option>
                      <option value="anuncio">Anúncio/Publicidade</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg py-6"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Entrar na Lista de Espera
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    Ao se cadastrar, você concorda em receber comunicações sobre o Dox English EAD
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Já conhece o Dox English presencial?</p>
          <Button
            onClick={() => window.location.href = '/dox'}
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            Conheça mais sobre o Dox English
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
