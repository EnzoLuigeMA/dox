export default function DoxFooter() {
  return (
    <footer className="bg-black border-t border-red-900/30 py-12">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src="/dox-logo.png" 
                  alt="DOX English Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                O método definitivo para aprender inglês sozinho. Pense em inglês com Subliminal Grammar™️.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#metodo" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    O Método
                  </a>
                </li>
                <li>
                  <a href="#conteudo" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    Conteúdo do Curso
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    Oferta
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">DOX English</h4>
              <p className="text-sm text-gray-400 mb-2">
                Método Ivo Dox - Subliminal Grammar™️
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Acesso anual completo à plataforma EAD
              </p>
              <a 
                href="#oferta"
                className="text-sm text-red-500 hover:text-red-400 font-semibold"
              >
                Matricule-se agora →
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-red-900/30 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Dox English. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Subliminal Grammar™️ é uma marca registrada da Dox English.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
