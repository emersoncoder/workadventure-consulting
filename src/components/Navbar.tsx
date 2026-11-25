import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';

export function Navbar() {
  const { language, setLanguage, dictionary } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar com Redes Sociais (Fica oculta no celular para não poluir) */}
      <div className="hidden md:flex justify-end items-center gap-5 px-6 py-2 bg-slate-950 border-b border-slate-800/80">
        <a href="https://x.com/coderbunke" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://web.facebook.com/palladinn/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/emersonmarley/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://www.twitch.tv/emersonpaladin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitch">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/emerson-maia/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://github.com/emersoncoder" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Menu Principal */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-white">
            <a href="#inicio" aria-label={dictionary.nav.homeAria}>
              Emerson<span className="text-amber-500">Devel</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#inicio" className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.home}</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.portfolio}</a>
            <a href="#servicos" className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.services}</a>
            <a href="#workadventure" className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.workAdventure}</a>
            <a href="#contato" className="text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 rounded-full transition-colors shadow-lg shadow-amber-600/20">
              {dictionary.nav.contact}
            </a>
          </div>
          <div className="flex items-center gap-1" aria-label={dictionary.nav.languageSelection}>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-label={dictionary.nav.english}
              aria-pressed={language === 'en'}
              title={dictionary.nav.english}
              className={`rounded-md border px-2 py-1 text-xl leading-none transition-colors ${language === 'en' ? 'border-cyan-400/70 bg-cyan-400/10' : 'border-transparent opacity-65 hover:opacity-100'}`}
            >
              🇺🇸
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              aria-label={dictionary.nav.portuguese}
              aria-pressed={language === 'pt'}
              title={dictionary.nav.portuguese}
              className={`rounded-md border px-2 py-1 text-xl leading-none transition-colors ${language === 'pt' ? 'border-amber-400/70 bg-amber-400/10' : 'border-transparent opacity-65 hover:opacity-100'}`}
            >
              🇧🇷
            </button>
          </div>
          <button
            type="button"
            className="md:hidden rounded-lg border border-slate-700 p-2 text-slate-200"
            aria-label={isMenuOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" onClick={closeMenu} className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.home}</a>
              <a href="#portfolio" onClick={closeMenu} className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.portfolio}</a>
              <a href="#servicos" onClick={closeMenu} className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.services}</a>
              <a href="#workadventure" onClick={closeMenu} className="text-sm font-medium hover:text-amber-400 transition-colors">{dictionary.nav.workAdventure}</a>
              <a href="#contato" onClick={closeMenu} className="text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white px-5 py-3 rounded-full transition-colors text-center">
                {dictionary.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}