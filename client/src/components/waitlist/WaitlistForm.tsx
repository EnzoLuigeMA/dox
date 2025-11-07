import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, CheckCircle2, Mail, User, Phone } from 'lucide-react';
import { waitlistService } from '@/services/waitlistService';
import { toast } from 'sonner';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    english_level: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error('Por favor, preencha nome e email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      await waitlistService.addToWaitlist({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        english_level: formData.english_level || undefined,
      });

      setIsSuccess(true);
      toast.success('Você está na lista de espera!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        english_level: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro ao cadastrar');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-2 border-green-600 rounded-2xl p-8 md:p-12 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle2 className="text-green-500 mx-auto mb-6" size={80} />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Bem-vindo à Lista de Espera!
        </h3>
        <p className="text-lg text-gray-300 mb-4">
          Você está oficialmente cadastrado. Em breve enviaremos todas as informações exclusivas para o seu email.
        </p>
        <p className="text-base text-gray-400">
          Fique atento à sua caixa de entrada e prepare-se para transformar seu inglês com o método Subliminal Grammar™️
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-2 border-red-600 rounded-2xl p-6 md:p-10"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Garanta Sua Vaga Agora
        </h3>
        <p className="text-gray-300">
          Preencha o formulário abaixo e seja notificado quando abrirmos as matrículas
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white flex items-center gap-2">
            <User size={18} />
            Nome Completo *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white flex items-center gap-2">
            <Mail size={18} />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white flex items-center gap-2">
            <Phone size={18} />
            WhatsApp (opcional)
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="english_level" className="text-white">
            Seu nível de inglês atual
          </Label>
          <Select
            value={formData.english_level}
            onValueChange={(value) => setFormData({ ...formData, english_level: value })}
          >
            <SelectTrigger className="bg-black/50 border-red-800/50 text-white">
              <SelectValue placeholder="Selecione seu nível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="iniciante">Iniciante (Básico)</SelectItem>
              <SelectItem value="intermediario">Intermediário</SelectItem>
              <SelectItem value="avancado">Avançado</SelectItem>
              <SelectItem value="fluente">Fluente</SelectItem>
              <SelectItem value="nenhum">Nenhum conhecimento</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full btn-gradient text-white font-bold text-lg py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Cadastrando...
            </>
          ) : (
            'Entrar na Lista de Espera'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Ao se cadastrar, você concorda em receber informações sobre o Dox English EAD.
          Seus dados estão seguros e protegidos.
        </p>
      </form>
    </motion.div>
  );
}
