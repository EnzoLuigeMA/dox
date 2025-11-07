import { supabase, WaitlistEntry } from '@/lib/supabase';

export const waitlistService = {
  async addToWaitlist(entry: Omit<WaitlistEntry, 'id' | 'created_at' | 'notified'>) {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([entry])
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') {
        throw new Error('Este email já está cadastrado na lista de espera.');
      }
      throw new Error('Erro ao cadastrar. Tente novamente.');
    }

    return data;
  },

  async getWaitlistCount() {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error getting waitlist count:', error);
      return 0;
    }

    return count || 0;
  },

  async checkEmailExists(email: string) {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .maybeSingle();

    if (error) {
      console.error('Error checking email:', error);
      return false;
    }

    return !!data;
  }
};
