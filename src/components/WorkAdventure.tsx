import { motion } from 'framer-motion';

export function WorkAdventure() {
  return (
    <section id="workadventure" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O que é o <span className="text-cyan-400">WorkAdventure?</span></h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            É uma plataforma Open Source que cria um metaverso 2D interativo no seu navegador. Imagine um escritório virtual ou um estande de eventos onde as pessoas caminham com avatares e, ao se aproximarem, a câmera e o microfone se conectam automaticamente.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-amber-500 font-bold">✓</span> Integração nativa com Videochamadas
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-amber-500 font-bold">✓</span> Redução da fadiga de reuniões no Zoom
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="text-amber-500 font-bold">✓</span> Sensação real de networking e imersão
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden shadow-2xl"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
            <span className="text-slate-500 z-10 text-center px-4">Coloque um GIF ou Vídeo<br/>do WorkAdventure aqui</span>
        </motion.div>
      </div>
    </section>
  );
}