import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const whatsappNumber = "5511988386341";
  const whatsappMessage = encodeURIComponent("Olá, Emerson! Vi seu site e gostaria de um orçamento para configurar o WorkAdventure.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // --- CONFIGURAÇÃO DO EMAILJS ---
  const EMAILJS_SERVICE_ID = "service_6v8pwkm";
  const EMAILJS_TEMPLATE_ID = "template_lsbrfy5";
  const EMAILJS_PUBLIC_KEY = "V_itfpQZbqLUEdwhU";
  // -------------------------------

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);
    setSendStatus('idle');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
          setIsSending(false);
          setSendStatus('success');
          form.current?.reset();
      }, (error) => {
          console.error(error.text);
          setIsSending(false);
          setSendStatus('error');
      });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white relative scroll-smooth">
      
      {/* Navbar Fixa no Topo */}
      <nav className="fixed w-full top-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-white">
            Emerson<span className="text-amber-500">Devel</span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#inicio" className="text-sm font-medium hover:text-amber-400 transition-colors">Início</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-amber-400 transition-colors">Portfólio</a>
            <a href="#servicos" className="text-sm font-medium hover:text-amber-400 transition-colors">Serviços</a>
            <a href="#workadventure" className="text-sm font-medium hover:text-amber-400 transition-colors">WorkAdventure</a>
            <a href="#contato" className="text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full transition-colors shadow-lg shadow-amber-600/20">
              Fale Comigo
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      {/* Removi o min-h-screen. A altura agora é ditada pelo conteúdo. Reduzi o pb para 4. */}
      <main id="inicio" className="flex items-start pt-24 pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Coluna da Imagem (Esquerda) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-slate-700/20 to-cyan-500/20 blur-3xl rounded-full w-full h-full m-auto"></div>
            
            <div className="relative z-10 p-[3px] rounded-3xl bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 shadow-2xl shadow-black/60 w-full max-w-3xl">
              <img 
                src="/eu.png" 
                alt="Emerson - Desenvolvedor Full Stack" 
                className="w-full h-auto object-cover rounded-[1.3rem] border border-slate-800"
              />
            </div>
          </div>

          {/* Coluna do Texto (Direita) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2 lg:pt-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-sm font-semibold tracking-wide">
              Desenvolvedor & Especialista WorkAdventure
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
              Olá, eu sou o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Emerson
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Ajudo empresas, eventos e universidades a criarem experiências imersivas e inesquecíveis através do metaverso 2D com o WorkAdventure. Transforme a comunicação do seu time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contato" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-amber-600/30 transform hover:scale-105 text-center">
                Contratar Consultoria
              </a>
              <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-amber-500/50 bg-slate-800/50 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                Baixar Currículo
                <svg className="w-5 h-5 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* 2. Sobre Mim */}
      {/* Reduzi o pt de 16 para 4 para colar no conteúdo de cima */}
      <section className="pt-4 pb-16 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-950/50 p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            Sobre Mim
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Texto de Apresentação */}
            <div className="text-slate-400 leading-relaxed space-y-4 text-lg text-justify">
              <p>
                Com mais de uma década de experiência na área de tecnologia da informação, minha jornada profissional tem sido marcada pelo desenvolvimento de soluções Web eficientes e pela criação de infraestruturas em nuvem seguras. Atualmente, na <strong className="text-slate-200">Expresso Tecnologia</strong>, destaco-me pela implementação de práticas <strong className="text-amber-400">Clean Code</strong> e pela criação de arquiteturas de software modulares, que resultam em sistemas robustos e escaláveis.
              </p>
              <p>
                Minha expertise técnica inclui um domínio profundo em linguagens como <strong className="text-slate-200">PHP e JavaScript</strong>, bem como em frameworks modernos e bancos de dados SQL e NoSQL. Sou um defensor ativo do software livre, o que me permite contribuir com a comunidade e estar sempre atualizado com as inovações do setor. Com um olhar atento à segurança da informação, asseguro a integridade dos sistemas que gerencio, garantindo a tranquilidade e a confiança dos stakeholders.
              </p>
            </div>

            {/* Grade de Habilidades Técnicas */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Qualificações Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "AWS & Cloud", "Full Stack", "Arquitetura de Software", 
                  "Segurança da Informação", "DevOps & CI/CD", "Docker & Kubernetes",
                  "Clean Code", "IA & Machine Learning", "Software Livre",
                  "Linux & BSD", "Git & Git Flow", "ERP / CRM / CMS",
                  "PHP", "JavaScript", "Python",
                  "Vue.js", "React.js", "Laravel",
                  "MySQL", "PostgreSQL", "MongoDB",
                  "Metodologias Ágeis", "Testes Automatizados"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 rounded-lg hover:border-amber-500 hover:text-amber-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Serviços */}
      <section id="servicos" className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meus Serviços</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Do planejamento à entrega do seu evento ou escritório virtual.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Setup e Hospedagem</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Configuração completa do servidor Self-hosted, garantindo estabilidade e segurança.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-white">Customização de Mapas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Criação de mapas Tiled com a sua identidade visual, spots interativos e integrações.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="text-xl font-bold mb-3 text-white">Integrações</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Conecte o WorkAdventure com Jitsi, Matterport, websites e APIs externas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O que é WorkAdventure? */}
      <section id="workadventure" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">O que é o <span className="text-cyan-400">WorkAdventure?</span></h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                É uma plataforma Open Source que cria um metaverso 2D interativo no seu navegador. Imagine um escritório virtual ou um estande de eventos onde as pessoas caminham com avatares e, ao se aproximarem, a câmera e o microfone se conectam automaticamente.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-amber-500">✓</span> Integração nativa com Videochamadas
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-amber-500">✓</span> Redução da fadiga de reuniões no Zoom
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-amber-500">✓</span> Sensação real de networking e imersão
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
                <span className="text-slate-500 z-10">Coloque um GIF ou Vídeo do WorkAdventure aqui</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfólio */}
      <section id="portfolio" className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfólio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">Conheça alguns dos mundos que já ajudei a construir.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-600/5 group-hover:bg-amber-600/10 transition-all"></div>
              <span className="text-slate-500">Imagem do Projeto 1</span>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-600/5 group-hover:bg-amber-600/10 transition-all"></div>
              <span className="text-slate-500">Imagem do Projeto 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fale Comigo */}
      <footer id="contato" className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-slate-400 text-lg">Preencha o formulário ou me chame no WhatsApp.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Seu Nome</label>
                <input type="text" name="from_name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="João Silva" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Seu E-mail</label>
                <input type="email" name="from_email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="joao@empresa.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
              <textarea name="message" required rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="Olá Emerson, gostaria de um orçamento..."></textarea>
            </div>
            <button type="submit" disabled={isSending} className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 text-white font-bold py-4 rounded-lg transition-colors">
              {isSending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {sendStatus === 'success' && <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>}
            {sendStatus === 'error' && <p className="text-red-400 text-center">Erro ao enviar. Tente pelo WhatsApp.</p>}
          </form>
          
          <div className="mt-16 text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} Emerson Devel. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

    </div>
  )
}

export default App