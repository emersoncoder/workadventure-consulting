import { motion, type Variants } from 'framer-motion';
import { BotaoMagnetico } from './BotaoMagnetico';

export function Hero() {
  // Configuração da animação letra por letra
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Texto que será animado letra por letra
  const text = "Olá, eu sou o";
  const letters = Array.from(text);

  

  return (
    <main id="inicio" className="flex items-start pt-32 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex justify-center lg:justify-start relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-slate-700/20 to-cyan-500/20 blur-3xl rounded-full w-full h-full m-auto"></div>
          <div className="relative z-10 p-[3px] rounded-3xl bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 shadow-2xl shadow-black/60 w-full max-w-3xl">
            <img src="/eu.png" alt="Emerson" className="w-full h-auto object-cover rounded-[1.3rem] border border-slate-800" />
          </div>
        </motion.div>

        {/* Texto */}
        <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2 lg:pt-12">
          
          {/* Badge Animada */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-sm font-semibold tracking-wide"
          >
            Desenvolvedor & Especialista WorkAdventure
          </motion.div>

          {/* Título com Animação Letra por Letra */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 flex flex-col items-center lg:items-start">
            <motion.span 
              variants={containerVariants} 
              initial="hidden" 
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start"
            >
              {letters.map((char, index) => (
                <motion.span variants={childVariants} key={index}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            
            {/* Nome com Gradiente Animado */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-[length:200%_auto] animate-gradient mt-2"
            >
              Emerson
            </motion.span>
          </h1>

          {/* Parágrafo Animado */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg lg:max-w-none"
          >
            Ajudo empresas, eventos e universidades a criarem experiências imersivas e inesquecíveis através do metaverso 2D com o WorkAdventure.
          </motion.p>
          
          {/* Botões */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Botão Magnético Principal */}
            <BotaoMagnetico 
              href="#contato" 
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-amber-600/30 text-center"
            >
              Contratar Consultoria
            </BotaoMagnetico>
            
            {/* Botão Secundário */}
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-amber-500/50 bg-slate-800/50 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              Baixar Currículo
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}