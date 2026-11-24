import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projetos = [
    { title: "Escritório Virtual Tech", image: "/capa.jpg", tag: "Empresa" },
    { title: "Evento Imersivo", image: "/capa.jpg", tag: "Evento" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950 border-y border-slate-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfólio</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">Conheça alguns dos mundos que já ajudei a construir.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative aspect-video bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-amber-600/5 group-hover:bg-amber-600/20 transition-all flex flex-col items-center justify-center">
                <span className="text-slate-500 group-hover:text-white transition-colors">Imagem do Projeto</span>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">{proj.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}