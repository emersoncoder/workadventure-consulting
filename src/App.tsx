import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { WorkAdventure } from './components/WorkAdventure';
import { Portfolio } from './components/Portfolio';
import { Contato } from './components/Contato';
import { Processo } from './components/Processo';
import { Faq } from './components/Faq';
import { ScrollEffects } from './components/ScrollEffects';
import { MatrixRain } from './components/MatrixRain';
import { LanguageProvider } from './i18n/LanguageProvider';
import { useLanguage } from './i18n/useLanguage';

function App() {
  return (
    <LanguageProvider>
      <SiteContent />
    </LanguageProvider>
  );
}

function SiteContent() {
  const { dictionary } = useLanguage();
  const whatsappNumber = "5511988386341";
  const whatsappMessage = encodeURIComponent(dictionary.whatsapp.message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative isolate min-h-screen scroll-smooth bg-slate-900 font-sans text-slate-100 selection:bg-amber-500 selection:text-white">
      <ScrollEffects />
      <MatrixRain />
      <div className="relative z-10">
        <a href="#inicio" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded-md focus:bg-amber-500 focus:px-4 focus:py-3 focus:text-slate-950">
          {dictionary.skipLink}
        </a>
        <Navbar />
        <Hero />
        <Sobre />
        <Servicos />
        <WorkAdventure />
        <Portfolio />
        <Processo />
        <Faq />
        <Contato />

        {/* Botão Flutuante do WhatsApp */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={dictionary.whatsapp.label} className="whatsapp-orbit fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </div>

    </div>
  )
}

export default App