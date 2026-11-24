export function Navbar() {
  return (
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
  );
}