import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const servicos = [
    { icon: "⚙️", title: "Setup e Hospedagem", desc: "Configuração completa do servidor Self-hosted, garantindo estabilidade e segurança." },
    { icon: "🎨", title: "Customização de Mapas", desc: "Criação de mapas Tiled com a sua identidade visual, spots interativos e integrações." },
    { icon: "🔗", title: "Integrações", desc: "Conecte o WorkAdventure com Jitsi, Matterport, websites e APIs externas." }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 border-y border-slate-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meus Serviços</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Do planejamento à entrega do seu evento ou escritório virtual.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}