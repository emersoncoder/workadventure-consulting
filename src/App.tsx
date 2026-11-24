import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { WorkAdventure } from './components/WorkAdventure';
import { Portfolio } from './components/Portfolio';
import { Contato } from './components/Contato';

function App() {
  const whatsappNumber = "5511988386341";
  const whatsappMessage = encodeURIComponent("Olá, Emerson! Vi seu site e gostaria de um orçamento para configurar o WorkAdventure.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white relative scroll-smooth">
      
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <WorkAdventure />
      <Portfolio />
      <Contato />

      {/* Botão Flutuante do WhatsApp */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

    </div>
  )
}

export default App