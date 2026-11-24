import { motion } from 'framer-motion';

export function Hero() {
  return (
    <main id="inicio" className="flex items-start pt-24 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex justify-center lg:justify-start relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-slate-700/20 to-cyan-500/20 blur-3xl rounded-full w-full h-full m-auto"></div>
          <div className="relative z-10 p-[3px] rounded-3xl bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 shadow-2xl shadow-black/60 w-full max-w-3xl">
            <img src="/eu.png" alt="Emerson" className="w-full h-auto object-cover rounded-[1.3rem] border border-slate-800" />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2 lg:pt-12"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-sm font-semibold tracking-wide">
            Desenvolvedor & Especialista WorkAdventure
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
            Olá, eu sou o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Emerson</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Ajudo empresas, eventos e universidades a criarem experiências imersivas e inesquecíveis através do metaverso 2D com o WorkAdventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contato" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-amber-600/30 transform hover:scale-105 text-center">
              Contratar Consultoria
            </a>
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-amber-500/50 bg-slate-800/50 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              Baixar Currículo
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}