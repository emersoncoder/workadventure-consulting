function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-indigo-400">
            Emerson<span className="text-white">Devel</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-sm font-medium hover:text-indigo-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-indigo-400 transition-colors">Portfólio</a>
            <a href="#contato" className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition-colors shadow-lg shadow-indigo-600/20">
              Fale Comigo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide">
            Especialista em Metaverso 2D
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Crie o seu <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Mundo Virtual
            </span> com WorkAdventure
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Configuração profissional, customização de mapas, hospedagem e integração para empresas, eventos e universidades. Transforme sua comunicação.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contato" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/30">
              Solicitar Orçamento
            </a>
            <a href="#servicos" className="border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Conhecer Serviços
            </a>
          </div>
        </div>
      </main>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-24 bg-slate-800/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Como posso te ajudar</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Do planejamento à entrega do seu evento ou escritório virtual.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Setup e Hospedagem</h3>
              <p className="text-slate-400 leading-relaxed">
                Configuração completa do servidor (Self-hosted), garantindo estabilidade, segurança e escalabilidade para o seu mundo virtual.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Customização de Mapas</h3>
              <p className="text-slate-400 leading-relaxed">
                Criação e edição de mapas Tiled com a sua identidade visual. Spots interativos, áreas de reunião e integração com vídeo chamadas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🔗
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Integrações</h3>
              <p className="text-slate-400 leading-relaxed">
                Conecte o WorkAdventure com ferramentas externas (Jitsi, Matterport, websites, APIs) para criar uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé / Contato */}
      <footer id="contato" className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Pronto para criar seu mundo?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Me envie um e-mail e vamos conversar sobre como o WorkAdventure pode transformar a comunicação da sua empresa ou evento.
          </p>
          <a href="mailto:contato@emersondevel.com" className="inline-flex items-center justify-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors text-lg group">
            contato@emersondevel.com
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-600 text-sm">
            © {new Date().getFullYear()} Emerson Devel. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App