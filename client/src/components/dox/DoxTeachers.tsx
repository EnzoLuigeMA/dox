import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

export default function DoxTeachers() {
  const teachers = [
    {
      name: 'Ivo Dox',
      role: 'Criador da Metodologia e Fundador',
      photo: '/images/professor-ivodox.jpg', // Placeholder - substituir pela foto real
      highlight: true
    },
    {
      name: 'João',
      role: 'Professor Dox English',
      photo: '/images/professor-joao.jpg', // Placeholder - substituir pela foto real
      highlight: false
    },
    {
      name: 'Wendel',
      role: 'Professor Dox English',
      photo: '/images/professor-wendel.jpg', // Placeholder - substituir pela foto real
      highlight: false
    },
    {
      name: 'Cayo Lins',
      role: 'Professor Dox English',
      photo: '/images/professor-cayo.jpg', // Placeholder - substituir pela foto real
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                👨‍🏫 Conheça Seus Professores
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              As aulas são ministradas pelo próprio <span className="text-white font-bold">Ivo Dox</span>, 
              criador da metodologia e fundador da Dox English, com a participação especial dos professores{' '}
              <span className="text-white font-bold">João, Wendel e Cayo Lins</span>, que compartilham 
              sua experiência e energia no mesmo estilo direto, prático e transformador que tornou a Dox 
              uma referência no ensino de inglês no Brasil.
            </p>
          </motion.div>

          {/* Teachers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                className={`${
                  teacher.highlight 
                    ? 'bg-gradient-to-br from-red-600/30 to-red-900/30 border-2 border-red-600' 
                    : 'bg-gradient-to-br from-red-900/20 to-black border border-red-800/30'
                } rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 cursor-pointer`}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Photo Placeholder */}
                <div className="mb-4 relative">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-600/20 to-red-900/40 border-4 border-red-600/50 flex items-center justify-center overflow-hidden">
                    {/* Placeholder icon - será substituído pela foto real */}
                    <img 
                      src={teacher.photo} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback para ícone se a imagem não carregar
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<svg class="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
                      }}
                    />
                  </div>
                  {teacher.highlight && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Fundador
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {teacher.name}
                </h3>

                {/* Role */}
                <p className="text-red-400 font-semibold mb-3">
                  {teacher.role}
                </p>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 bg-red-900/20 border border-red-800/30 rounded-lg p-6 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Users className="text-red-500" size={24} />
              <p className="text-lg">
                <span className="text-white font-semibold">Time completo de professores</span> com 
                experiência comprovada no método Ivo Dox
              </p>
            </div>
          </motion.div>

          {/* Instructions for adding photos */}
          <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg hidden">
            <p className="text-sm text-yellow-400 text-center">
              📸 <strong>Instruções:</strong> Para adicionar as fotos dos professores, coloque as imagens na pasta{' '}
              <code className="bg-black/50 px-2 py-1 rounded">client/public/images/</code> com os nomes:{' '}
              <code className="bg-black/50 px-2 py-1 rounded">professor-ivodox.jpg</code>,{' '}
              <code className="bg-black/50 px-2 py-1 rounded">professor-joao.jpg</code>,{' '}
              <code className="bg-black/50 px-2 py-1 rounded">professor-wendel.jpg</code>,{' '}
              <code className="bg-black/50 px-2 py-1 rounded">professor-cayo.jpg</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
